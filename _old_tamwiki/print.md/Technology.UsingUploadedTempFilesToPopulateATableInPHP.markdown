<div id="wikitext">

<div style="display: none;">

Summary:A solution to a question that came up in the [php-db mailing
list](http://lists.php.net/php.db). Parent:(Technology.)PHP <span
class="wikiword">[IncludeMe](http://wiki.tamouse.org?n=Technology.IncludeMe?action=edit)[?](http://wiki.tamouse.org?n=Technology.IncludeMe?action=edit)</span>:[PHP](http://wiki.tamouse.org?n=Technology.PHP?action=print)
Categories:[Articles](http://wiki.tamouse.org?n=Category.Articles) Tags:
php, mysql, file uploads, table creation

</div>

<span id="excerpt"></span> A question^[1](#fn1_1)^<span
id="fnr1_1"></span> came up about how to create and load a table from an
uploaded CSV file directly from the temporary file rather than moving
the temporary file to a permanent location first. This shows it can be
done. <span id="excerptend"></span>

<div class="vspace">

</div>

The problem.
------------

A developer wanted to allow the user to upload a comma separated file
(CSV) that contains various data they want available in a table. This is
not as difficult as it seemed to be, one just needs a good understanding
of how the [MySQL
`LOAD DATA`](http://dev.mysql.com/doc/refman/5.1/en/load-data.html)^[2](#fn1_2)^<span
id="fnr1_2"></span> statement works.

<div class="vspace">

</div>

The solution.
-------------

### Example upload file

For the purposes of this article, we'll use the following file,
`table1.csv` to upload:

<div class="vspace">

</div>

``` {.escaped}
a,b,c,d,e
f,g,h,i,j
k,l,m,n,o
```

<div class="vspace">

</div>

### Given a file upload form:

<div id="sourceblock1" class="sourceblock">

<div class="sourceblocktext">

<div class="html4strict">

<span class="sc2">\<<span class="kw2">form</span> <span
class="kw3">enctype</span><span class="sy0">=</span><span
class="st0">"multipart/form-data"</span> <span
class="kw3">method</span><span class="sy0">=</span><span
class="st0">"POST"</span>\></span>\
     <span class="sc2">\<<span class="kw2">input</span> <span
class="kw3">type</span><span class="sy0">=</span><span
class="st0">"hidden"</span> <span class="kw3">name</span><span
class="sy0">=</span><span class="st0">"MAX\_FILE\_SIZE"</span> <span
class="kw3">value</span><span class="sy0">=</span><span
class="st0">"30000"</span> <span class="sy0">/</span>\></span>\
     Send this file: <span class="sc2">\<<span class="kw2">input</span>
<span class="kw3">name</span><span class="sy0">=</span><span
class="st0">"userfile"</span> <span class="kw3">type</span><span
class="sy0">=</span><span class="st0">"file"</span><span
class="sy0">/</span>\></span>\
     <span class="sc2">\<<span class="kw2">input</span> <span
class="kw3">type</span><span class="sy0">=</span><span
class="st0">"submit"</span> <span class="kw3">value</span><span
class="sy0">=</span><span class="st0">"Send File"</span> <span
class="sy0">/</span>\></span>\
 <span class="sc2">\<<span class="sy0">/</span><span
class="kw2">form</span>\></span>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.UsingUploadedTempFilesToPopulateATableInPHP?action=sourceblock&num=1)

</div>

</div>

we can see that the resulting `$_FILES` array will have an entry for
`userfile` in it with the particulars of the file uploaded,
`table1.csv`.

For the above form, when a file `table1.csv` is submitted, the `$_FILES`
array looks like:

``` {.escaped}
  array(1) {
  ["userfile"]=>
    array(5) {
      ["name"]=>string(10) "table1.csv"
      ["type"]=>string(8) "text/csv"
      ["tmp_name"]=>string(14) "/tmp/php6jIEPm"
      ["error"]=>int(0)
      ["size"]=>int(30)
    }
  }
```

<div class="vspace">

</div>

### Check if there is a file uploaded

Before attempting to process files, check that there are files to
process:

<div class="vspace">

</div>

<div id="sourceblock2" class="sourceblock">

<div class="sourceblocktext">

<div class="php">

<span class="kw1">if</span> <span class="br0">(</span><span
class="kw3">count</span><span class="br0">(</span><span
class="re0">\$\_FILES</span><span class="br0">)</span><span
class="sy0">\<</span><span class="nu0">0</span><span
class="br0">)</span> <span class="br0">{</span>\
       <span class="co1">// process uploaded files</span>\
       <span class="sy0">.</span>\
       <span class="sy0">.</span>\
       <span class="sy0">.</span>\
    <span class="br0">}</span>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.UsingUploadedTempFilesToPopulateATableInPHP?action=sourceblock&num=2)

</div>

</div>

As you would if you were processing any other form submission, you
should verify that the data is useful and not harmful.

<div class="vspace">

</div>

### Assign some working variables

Inside the if above,

<div class="vspace">

</div>

<div id="sourceblock3" class="sourceblock">

<div class="sourceblocktext">

<div class="php">

<span class="re0">\$table\_name</span> <span class="sy0">=</span> <span
class="kw3">preg\_replace</span><span class="br0">(</span><span
class="st_h">'/[\^[:alnum:]\_]+/'</span><span class="sy0">,</span><span
class="st_h">''</span><span class="sy0">,</span><span
class="re0">\$\_FILES</span><span class="br0">[</span><span
class="st_h">'userfile'</span><span class="br0">]</span><span
class="br0">[</span><span class="st_h">'name'</span><span
class="br0">]</span><span class="br0">)</span><span
class="sy0">;</span>\
 <span class="re0">\$temp\_file</span> <span class="sy0">=</span> <span
class="re0">\$\_FILES</span><span class="br0">[</span><span
class="st_h">'userfile'</span><span class="br0">]</span><span
class="br0">[</span><span class="st_h">'tmp\_name'</span><span
class="br0">]</span><span class="sy0">;</span>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.UsingUploadedTempFilesToPopulateATableInPHP?action=sourceblock&num=3)

</div>

</div>

`userfile` corresponds to the field in the form above.

Note the we munge the file name of the uploaded file (not the temporary
file!) to make sure it will only contain characters valid for a <span
class="wikiword">[MySQL](http://wiki.tamouse.org?n=Technology.MySQL?action=print)</span>
table.

<div class="vspace">

</div>

### How many fields will be in the table?

To use the `LOAD DATA` statement, one has to know the fields that will
be going in in order to create the table correctly. To do this, one can
simply read the first line off the file and split it into fields, and
count them. Given this is a CSV file, that might be more difficult than
it sounds, as field items can contain commas if wrapped in double
quotes. However, PHP comes to our rescue with the
[fgetcsv()](http://php.net/manual/en/function.fgetcsv.php)^[3](#fn1_3)^<span
id="fnr1_3"></span> function. A rather simple function will do:

<div class="vspace">

</div>

<div id="sourceblock4" class="sourceblock">

<div class="sourceblocktext">

<div class="php">

<span class="kw2">function</span> csv\_field\_count<span
class="br0">(</span><span class="re0">\$fn</span><span
class="br0">)</span> <span class="br0">{</span>\
   <span class="re0">\$fh</span> <span class="sy0">=</span> <span
class="kw3">fopen</span><span class="br0">(</span><span
class="re0">\$fn</span><span class="sy0">,</span><span
class="st_h">'r'</span><span class="br0">)</span> or <span
class="kw3">die</span><span class="br0">(</span><span class="st0">"Could
not open <span class="es4">\$fn</span>"</span><span
class="br0">)</span><span class="sy0">;</span>\
   <span class="re0">\$line</span> <span class="sy0">=</span> <span
class="kw3">fgetcsv</span><span class="br0">(</span><span
class="re0">\$fh</span><span class="br0">)</span><span
class="sy0">;</span>\
   <span class="kw3">fclose</span><span class="br0">(</span><span
class="re0">\$fh</span><span class="br0">)</span><span
class="sy0">;</span>\
   <span class="re0">\$count</span> <span class="sy0">=</span> <span
class="kw3">count</span><span class="br0">(</span><span
class="re0">\$line</span><span class="br0">)</span><span
class="sy0">;</span>\
   <span class="kw1">return</span> <span class="re0">\$count</span><span
class="sy0">;</span>\
 <span class="br0">}</span>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.UsingUploadedTempFilesToPopulateATableInPHP?action=sourceblock&num=4)

</div>

</div>

We will need to create a field for each field in the CSV file.

<div class="vspace">

</div>

<div class="round lrindent important2">

Note that this method **only** works when the first line contains the
**maximum** number of fields that ever appear in the file, otherwise you
will lose data from the CSV file (<span
class="wikiword">[MySQL](http://wiki.tamouse.org?n=Technology.MySQL?action=print)</span>
silently drops the excess data.)

</div>

<div class="vspace">

</div>

### Creating the table

Creating the table is now a matter of generating fields to hold the
data. In this case, all data is assumed to simply be strings of
undifferentiated text (i.e. no interpretation of integers, floats, and
so on). Thus each field will by a `VARCHAR` of length 255, which is a
limit in Excel.

<div class="vspace">

</div>

<div id="sourceblock5" class="sourceblock">

<div class="sourceblocktext">

<div class="php">

<span class="re0">\$count</span> <span class="sy0">=</span>
csv\_field\_count<span class="br0">(</span><span
class="re0">\$temp\_name</span><span class="br0">)</span><span
class="sy0">;</span> <span class="co1">// call our function from
above</span>\
 <span class="re0">\$sql</span> <span class="sy0">=</span> <span
class="st_h">'create table if not exists \`'</span><span
class="sy0">.</span><span class="re0">\$table\_name</span><span
class="sy0">.</span><span class="st_h">'\` ('</span><span
class="sy0">;</span>\
 <span class="kw1">for</span> <span class="br0">(</span><span
class="re0">\$i</span><span class="sy0">=</span><span
class="nu0">0</span><span class="sy0">;</span> <span
class="re0">\$i</span> <span class="sy0">\<</span> <span
class="re0">\$count</span><span class="sy0">;</span> <span
class="re0">\$i</span><span class="sy0">++</span><span
class="br0">)</span> <span class="br0">{</span>\
   <span class="re0">\$sql\_fields</span><span class="br0">[</span><span
class="br0">]</span> <span class="sy0">=</span> <span
class="st0">"field<span class="es4">{\$i}</span>
varchar(255)"</span><span class="sy0">;</span>\
 <span class="br0">}</span>\
 <span class="co1">// this goes last so as not to perturb any data from
the CSV file</span>\
 <span class="re0">\$sql\_fields</span><span class="br0">[</span><span
class="br0">]</span> <span class="sy0">=</span>   <span class="st_h">'id
integer not null auto\_increment primary key'</span><span
class="sy0">;</span>\
 <span class="re0">\$sql</span> <span class="sy0">.=</span> <span
class="kw3">implode</span><span class="br0">(</span><span
class="st_h">', '</span><span class="sy0">,</span><span
class="re0">\$sql\_fields</span><span class="br0">)</span><span
class="sy0">;</span>\
 <span class="re0">\$sql</span> <span class="sy0">.=</span> <span
class="st_h">')'</span><span class="sy0">;</span>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.UsingUploadedTempFilesToPopulateATableInPHP?action=sourceblock&num=5)

</div>

</div>

If you want your table to have an autoincrementing index, such as shown
here for field `id`, you need to put it **last** in order for it to be
treated as `NULL` by `LOAD DATA` (and thus be autoincremented for each
record).

Executing the above SQL statement will create a table for the CSV file
that is derived from the CSV upload file name and its contents. When you
run the query, ensure that no errors occured during it's execution.

<div class="vspace">

</div>

<div id="sourceblock6" class="sourceblock">

<div class="sourceblocktext">

<div class="php">

<span class="re0">\$r</span> <span class="sy0">=</span> <span
class="re0">\$db</span><span class="sy0">-\></span><span
class="me1">query</span><span class="br0">(</span><span
class="re0">\$sql</span><span class="br0">)</span> or <span
class="kw3">die</span><span class="br0">(</span><span
class="kw3">sprintf</span><span class="br0">(</span><span
class="st0">"SQL error: <span class="es6">%s</span> [<span
class="es6">%d</span>] <span class="es6">%s</span>"</span><span
class="sy0">,</span><span class="re0">\$sql</span><span
class="sy0">,</span><span class="re0">\$db</span><span
class="sy0">-\></span><span class="me1">errno</span><span
class="sy0">,</span><span class="re0">\$db</span><span
class="sy0">-\></span><span class="me1">error</span><span
class="br0">)</span><span class="br0">)</span><span class="sy0">;</span>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.UsingUploadedTempFilesToPopulateATableInPHP?action=sourceblock&num=6)

</div>

</div>

Is the idiom when using `mysqli`.

<div class="vspace">

</div>

### Loading the data.

The [MySQL
`LOAD DATA`](http://dev.mysql.com/doc/refman/5.1/en/load-data.html)
statement can be a little tricky. In order to get this to work easily,
the main key is to use the `LOCAL` option. Creating the SQL for the
`LOAD DATA` statement is basically:

<div class="vspace">

</div>

<div id="sourceblock7" class="sourceblock">

<div class="sourceblocktext">

<div class="php">

<span class="re0">\$sql</span> <span class="sy0">=</span> <span
class="st0">"load data local infile '"</span><span
class="sy0">.</span><span class="re0">\$temp\_file</span><span
class="sy0">.</span><span class="st0">"' "</span> <span
class="sy0">.</span>\
   <span class="st0">"into table \`"</span><span
class="sy0">.</span><span class="re0">\$table\_name</span><span
class="sy0">.</span><span class="st0">"\` "</span> <span
class="sy0">.</span>\
   <span class="st0">"fields terminated by ',' optionally enclosed by
'<span class="es1">\\"</span>' "</span> <span class="sy0">.</span>\
   <span class="st0">"lines terminated by '<span
class="es1">\\\\</span>n'"</span><span class="sy0">;</span>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.UsingUploadedTempFilesToPopulateATableInPHP?action=sourceblock&num=7)

</div>

</div>

If you don't use the `local` option, you have to deal with <span
class="wikiword">[MySQL](http://wiki.tamouse.org?n=Technology.MySQL?action=print)</span>'s
shennanigans about file permissions based on the location of the
temporary file, and using `local` just makes everything a lot easier.
(Note that if the file is really large, though, it can be a problem as
this will send the contents of the file through the mysql pipe.)

<div class="vspace">

</div>

<div class="footnote">

 

</div>

<span id="fn1_1"></span>^1^ [Stuck trying to upload and grab file
name](http://news.php.net/php.db/48331) [⇑](#fnr1_1)

<span id="fn1_2"></span>^2^ [MySQL :: MySQL 5.1 Reference Manual ::
13.2.6 LOAD DATA INFILE
Syntax](http://dev.mysql.com/doc/refman/5.1/en/load-data.html)
[⇑](#fnr1_2)

<span id="fn1_3"></span>^3^ [PHP: fgetcsv -
Manual](http://php.net/manual/en/function.fgetcsv.php) [⇑](#fnr1_3)

<div class="vspace">

</div>

Working example source code
---------------------------

(Note, you will need to create the database, assign permissions, and put
the credentials in the source for this to work.)

<div class="vspace">

</div>

<div id="sourceblock8" class="sourceblock">

<div class="sourceblocktext">

<div class="php">

<span class="kw2">\<?php</span>\
 <span class="kw3">error\_reporting</span><span
class="br0">(</span><span class="sy0">-</span><span
class="nu0">1</span><span class="br0">)</span><span
class="sy0">;</span>\
 <span class="kw3">ini\_set</span><span class="br0">(</span><span
class="st_h">'display\_errors'</span><span class="sy0">,</span><span
class="kw4">true</span><span class="br0">)</span><span
class="sy0">;</span>\
 <span class="kw3">ini\_set</span><span class="br0">(</span><span
class="st_h">'display\_startup\_errors'</span><span
class="sy0">,</span><span class="kw4">true</span><span
class="br0">)</span><span class="sy0">;</span>\
\
\
\
 <span class="sy1">?\></span>\<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML
1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd"\>\
 \<html\>\<head\>\<title\>file upload example\</title\>\
 \<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"
/\>\
 \</head\>\
 \<body\>\
 \<h1\>file upload example\</h1\>\
\
 \<h2\>\$\_FILES\</h2\>\
 \<pre\>\
   <span class="kw2">\<?php</span> <span
class="kw3">var\_dump</span><span class="br0">(</span><span
class="re0">\$\_FILES</span><span class="br0">)</span><span
class="sy0">;</span> <span class="sy1">?\></span>\
 \</pre\>\
\
 <span class="kw2">\<?php</span>\
    <span class="kw1">if</span> <span class="br0">(</span><span
class="kw3">count</span><span class="br0">(</span><span
class="re0">\$\_FILES</span><span class="br0">)</span><span
class="sy0">\></span><span class="nu0">0</span><span
class="br0">)</span> <span class="br0">{</span>\
      <span class="re0">\$table\_name</span> <span class="sy0">=</span>
<span class="kw3">preg\_replace</span><span class="br0">(</span><span
class="st_h">'/[\^[:alnum:]\_]+/'</span><span class="sy0">,</span><span
class="st_h">''</span><span class="sy0">,</span><span
class="re0">\$\_FILES</span><span class="br0">[</span><span
class="st_h">'userfile'</span><span class="br0">]</span><span
class="br0">[</span><span class="st_h">'name'</span><span
class="br0">]</span><span class="br0">)</span><span
class="sy0">;</span>\
      <span class="re0">\$temp\_file</span> <span class="sy0">=</span>
<span class="re0">\$\_FILES</span><span class="br0">[</span><span
class="st_h">'userfile'</span><span class="br0">]</span><span
class="br0">[</span><span class="st_h">'tmp\_name'</span><span
class="br0">]</span><span class="sy0">;</span>\
\
\
      <span class="re0">\$lscmd</span> <span class="sy0">=</span> <span
class="st_h">'ls -l '</span><span class="sy0">.</span><span
class="re0">\$temp\_file</span><span class="sy0">;</span>\
      <span class="kw1">echo</span> <span class="st_h">'\<h2\>ls -l
'</span><span class="sy0">.</span><span
class="re0">\$temp\_file</span><span class="sy0">.</span><span
class="st_h">'\</h2\>'</span><span class="sy0">.</span>PHP\_EOL<span
class="sy0">;</span>\
      <span class="kw1">echo</span> <span
class="st_h">'\<pre\>'</span><span class="sy0">.</span>\`<span
class="re0">\$lscmd</span>\`<span class="sy0">.</span><span
class="st_h">'\</pre\>'</span><span class="sy0">.</span>PHP\_EOL<span
class="sy0">;</span>\
\
 <span class="sy1">?\></span>\
\
 <span class="kw2">\<?php</span>\
    <span class="re0">\$db</span> <span class="sy0">=</span> <span
class="kw2">new</span> mysqli<span class="br0">(</span>DBHOST<span
class="sy0">,</span>DBUSER<span class="sy0">,</span>DBPASS<span
class="sy0">,</span>DBNAME<span class="br0">)</span><span
class="sy0">;</span>\
 <span class="kw1">if</span> <span class="br0">(</span><span
class="kw3">mysqli\_connect\_errno</span><span class="br0">(</span><span
class="br0">)</span><span class="br0">)</span> <span
class="br0">{</span>\
   <span class="kw3">die</span><span class="br0">(</span><span
class="st_h">'Connection failure: ['</span><span
class="sy0">.</span><span class="kw3">mysqli\_connect\_errno</span><span
class="br0">(</span><span class="br0">)</span><span
class="sy0">.</span><span class="st_h">'] '</span><span
class="sy0">.</span><span class="kw3">mysqli\_connect\_error</span><span
class="br0">(</span><span class="br0">)</span><span
class="br0">)</span><span class="sy0">;</span>\
 <span class="br0">}</span>\
\
      <span class="re0">\$fields</span> <span class="sy0">=</span> <span
class="kw3">explode</span><span class="br0">(</span><span
class="st_h">','</span><span class="sy0">,</span>read\_first\_line<span
class="br0">(</span><span class="re0">\$temp\_file</span><span
class="br0">)</span><span class="br0">)</span><span
class="sy0">;</span>\
      <span class="re0">\$sql</span> <span class="sy0">=</span> <span
class="st_h">'create table if not exists \`'</span><span
class="sy0">.</span><span class="re0">\$table\_name</span><span
class="sy0">.</span><span class="st_h">'\` ('</span><span
class="sy0">;</span>\
      <span class="kw1">for</span> <span class="br0">(</span><span
class="re0">\$i</span><span class="sy0">=</span><span
class="nu0">0</span><span class="sy0">;</span> <span
class="re0">\$i</span> <span class="sy0">\<</span> <span
class="kw3">count</span><span class="br0">(</span><span
class="re0">\$fields</span><span class="br0">)</span><span
class="sy0">;</span> <span class="re0">\$i</span><span
class="sy0">++</span><span class="br0">)</span> <span
class="br0">{</span>\
        <span class="re0">\$sql\_fields</span><span
class="br0">[</span><span class="br0">]</span> <span
class="sy0">=</span> <span class="st0">"field<span
class="es4">{\$i}</span> varchar(50)"</span><span class="sy0">;</span>\
      <span class="br0">}</span>\
      <span class="re0">\$sql\_fields</span><span
class="br0">[</span><span class="br0">]</span> <span
class="sy0">=</span>   <span class="st_h">'id integer not null
auto\_increment primary key'</span><span class="sy0">;</span>\
      <span class="re0">\$sql</span> <span class="sy0">.=</span> <span
class="kw3">implode</span><span class="br0">(</span><span
class="st_h">', '</span><span class="sy0">,</span><span
class="re0">\$sql\_fields</span><span class="br0">)</span><span
class="sy0">;</span>\
      <span class="re0">\$sql</span> <span class="sy0">.=</span> <span
class="st_h">')'</span><span class="sy0">;</span>\
 <span class="sy1">?\></span>\
 \<h2\>\$sql for create table\</h2\>\
 \<pre\><span class="kw2">\<?php</span> <span
class="kw3">var\_dump</span><span class="br0">(</span><span
class="re0">\$sql</span><span class="br0">)</span><span
class="sy0">;</span> <span class="sy1">?\></span>\</pre\>\
\
 <span class="kw2">\<?php</span>\
      <span class="re0">\$r</span> <span class="sy0">=</span> <span
class="re0">\$db</span><span class="sy0">-\></span><span
class="me1">query</span><span class="br0">(</span><span
class="re0">\$sql</span><span class="br0">)</span> or <span
class="kw3">die</span><span class="br0">(</span><span class="st0">"SQL
error: <span class="es4">\$sql</span> ["</span><span
class="sy0">.</span><span class="re0">\$db</span><span
class="sy0">-\></span><span class="me1">errno</span><span
class="sy0">.</span><span class="st_h">'] '</span><span
class="sy0">.</span><span class="re0">\$db</span><span
class="sy0">-\></span><span class="me1">error</span><span
class="br0">)</span><span class="sy0">;</span>\
      <span class="kw3">unset</span><span class="br0">(</span><span
class="re0">\$sql</span><span class="br0">)</span><span
class="sy0">;</span>\
\
 <span class="re0">\$sql</span> <span class="sy0">=</span> <span
class="st0">"load data local infile '"</span><span
class="sy0">.</span><span class="re0">\$temp\_file</span><span
class="sy0">.</span><span class="st0">"' "</span> <span
class="sy0">.</span>\
   <span class="st0">"into table \`"</span><span
class="sy0">.</span><span class="re0">\$table\_name</span><span
class="sy0">.</span><span class="st0">"\` "</span> <span
class="sy0">.</span>\
   <span class="st0">"fields terminated by ',' optionally enclosed by
'<span class="es1">\\"</span>' "</span> <span class="sy0">.</span>\
   <span class="st0">"lines terminated by '<span
class="es1">\\\\</span>n'"</span><span class="sy0">;</span>\
 <span class="sy1">?\></span>\
 \<h2\>\$sql for load data\</h2\>\
 \<pre\><span class="kw2">\<?php</span> <span
class="kw3">var\_dump</span><span class="br0">(</span><span
class="re0">\$sql</span><span class="br0">)</span><span
class="sy0">;</span> <span class="sy1">?\></span>\</pre\>\
 <span class="kw2">\<?php</span>\
      <span class="re0">\$r</span> <span class="sy0">=</span> <span
class="re0">\$db</span><span class="sy0">-\></span><span
class="me1">query</span><span class="br0">(</span><span
class="re0">\$sql</span><span class="br0">)</span> or <span
class="kw3">die</span><span class="br0">(</span><span class="st0">"SQL
Error: <span class="es4">\$sql</span> ["</span><span
class="sy0">.</span><span class="re0">\$db</span><span
class="sy0">-\></span><span class="me1">errno</span><span
class="sy0">.</span><span class="st0">"] "</span><span
class="sy0">.</span><span class="re0">\$db</span><span
class="sy0">-\></span><span class="me1">error</span><span
class="br0">)</span><span class="sy0">;</span>\
 <span class="sy1">?\></span>\
\
 \<h2\>Verify data contents\</h2\>\
      \<p\>Table <span class="kw2">\<?php</span> <span
class="kw1">echo</span> <span class="re0">\$table\_name</span><span
class="sy0">;</span> <span class="sy1">?\></span>\</p\>\
\
 <span class="kw2">\<?php</span>\
      <span class="kw3">unset</span><span class="br0">(</span><span
class="re0">\$sql</span><span class="br0">)</span><span
class="sy0">;</span>\
      <span class="re0">\$sql</span> <span class="sy0">=</span> <span
class="st_h">'select \* from \`'</span><span class="sy0">.</span><span
class="re0">\$table\_name</span><span class="sy0">.</span><span
class="st_h">'\`'</span><span class="sy0">;</span>\
      <span class="kw1">echo</span> <span
class="st_h">'\<pre\>\$sql='</span><span class="sy0">;</span>\
      <span class="kw3">var\_dump</span><span class="br0">(</span><span
class="re0">\$sql</span><span class="br0">)</span><span
class="sy0">;</span>\
      <span class="kw1">echo</span> <span
class="st_h">'\</pre\>'</span><span class="sy0">;</span>\
      <span class="re0">\$r</span> <span class="sy0">=</span> <span
class="re0">\$db</span><span class="sy0">-\></span><span
class="me1">query</span><span class="br0">(</span><span
class="re0">\$sql</span><span class="br0">)</span> or <span
class="kw3">die</span><span class="br0">(</span><span class="st0">"SQL
Error: <span class="es4">\$sql</span> ["</span><span
class="sy0">.</span><span class="re0">\$db</span><span
class="sy0">-\></span><span class="me1">errno</span><span
class="sy0">.</span><span class="st0">"] "</span><span
class="sy0">.</span><span class="re0">\$db</span><span
class="sy0">-\></span><span class="me1">error</span><span
class="br0">)</span><span class="sy0">;</span>\
      <span class="kw1">echo</span> <span
class="st_h">'\<p\>data\</p\>\<pre\>'</span><span class="sy0">;</span>\
      <span class="kw1">while</span> <span class="br0">(</span><span
class="re0">\$row</span> <span class="sy0">=</span> <span
class="re0">\$r</span><span class="sy0">-\></span><span
class="me1">fetch\_row</span><span class="br0">(</span><span
class="br0">)</span><span class="br0">)</span> <span
class="br0">{</span>\
        <span class="kw1">echo</span> <span
class="kw3">var\_dump</span><span class="br0">(</span><span
class="re0">\$row</span><span class="br0">)</span><span
class="sy0">;</span>\
      <span class="br0">}</span>\
      <span class="kw1">echo</span> <span
class="st_h">'\</pre\>'</span><span class="sy0">;</span>\
 <span class="sy1">?\></span>\
\
      <span class="kw2">\<?php</span> <span class="br0">}</span> <span
class="co1">// end if count(\$\_FILES)\>0 ?\></span>\
\
 <span class="sy0">\<</span>form enctype<span class="sy0">=</span><span
class="st0">"multipart/form-data"</span> method<span
class="sy0">=</span><span class="st0">"POST"</span><span
class="sy0">\></span>\
     <span class="sy0">\<</span>input type<span
class="sy0">=</span><span class="st0">"hidden"</span> name<span
class="sy0">=</span><span class="st0">"MAX\_FILE\_SIZE"</span>
value<span class="sy0">=</span><span class="st0">"30000"</span> <span
class="sy0">/\></span>\
     Send this <span class="kw3">file</span><span class="sy0">:</span>
<span class="sy0">\<</span>input name<span class="sy0">=</span><span
class="st0">"userfile"</span> type<span class="sy0">=</span><span
class="st0">"file"</span><span class="sy0">/\></span>\
     <span class="sy0">\<</span>input type<span
class="sy0">=</span><span class="st0">"submit"</span> value<span
class="sy0">=</span><span class="st0">"Send File"</span> <span
class="sy0">/\></span>\
 <span class="sy0">\</</span>form<span class="sy0">\></span>\
\
 <span class="sy0">\</</span>body<span class="sy0">\></span>\
 <span class="sy0">\</</span>html<span class="sy0">\></span><span
class="kw2">\<?php</span>\
\
 <span class="kw2">function</span> csv\_field\_count<span
class="br0">(</span><span class="re0">\$fn</span><span
class="br0">)</span> <span class="br0">{</span>\
   <span class="re0">\$fh</span> <span class="sy0">=</span> <span
class="kw3">fopen</span><span class="br0">(</span><span
class="re0">\$fn</span><span class="sy0">,</span><span
class="st_h">'r'</span><span class="br0">)</span> or <span
class="kw3">die</span><span class="br0">(</span><span class="st0">"Could
not open <span class="es4">\$fn</span>"</span><span
class="br0">)</span><span class="sy0">;</span>\
   <span class="re0">\$line</span> <span class="sy0">=</span> <span
class="kw3">fgetcsv</span><span class="br0">(</span><span
class="re0">\$fh</span><span class="br0">)</span><span
class="sy0">;</span>\
   <span class="kw3">fclose</span><span class="br0">(</span><span
class="re0">\$fh</span><span class="br0">)</span><span
class="sy0">;</span>\
   <span class="re0">\$count</span> <span class="sy0">=</span> <span
class="kw3">count</span><span class="br0">(</span><span
class="re0">\$line</span><span class="br0">)</span><span
class="sy0">;</span>\
   <span class="kw1">return</span> <span class="re0">\$count</span><span
class="sy0">;</span>\
 <span class="br0">}</span>\
\
  

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.UsingUploadedTempFilesToPopulateATableInPHP?action=sourceblock&num=8)

</div>

</div>

<div class="vspace">

</div>

TODO
----

-   Verify data truncation if 2-n lines of the CSV file contain more
    fields than the first line.
-   Ensure that the file uploaded is a CSV file.
-   Ensure that the file name won't otherwise corrupt the <span
    class="wikiword">[MySQL](http://wiki.tamouse.org?n=Technology.MySQL?action=print)</span>
    data base.
-   If the table already exists, decide what to do (truncate and load,
    replace, append, fail and inform).
-   Verify that field data that exceeds the field length is truncated
    and does not produce an error.

</div>
