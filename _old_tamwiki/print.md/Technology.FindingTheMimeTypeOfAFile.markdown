<div id="wikitext">

<span id="excerpt"></span> On \*nix systems, the type of a file is
called it's
[mimetype](http://wiki.tamouse.org?n=Main.Glossary?action=print).
Sometimes it is necessary to know the type of the file one is dealing
with. You can't always rely on the file extension (there may not be one,
or it may be incorrect). Thus, one has to check the type of the file by
different means. <span id="excerptend"></span>

<div class="vspace">

</div>

`file()` command
----------------

In \*nix, there is a command called `file()` which returns a description
of the file type. The options on `file()` vary on \*nix platforms, but
generally the following incantation will deliver just the file's
mimetype:

<div class="vspace">

</div>

<div id="sourceblock1" class="sourceblock">

<div class="sourceblocktext">

<div class="bash">

<span class="kw2">file</span> <span class="re5">-b</span> <span
class="re5">--mime</span> <span class="sy0">/</span>path<span
class="sy0">/</span>to<span class="sy0">/</span><span
class="kw2">file</span>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.FindingTheMimeTypeOfAFile?action=sourceblock&num=1)

</div>

</div>

will return the mimetype as it would be set in a `Content-type:` mail or
http header. For example:

<div class="vspace">

</div>

<div id="sourceblock5" class="codeblock">

<div class="codeblocktext">

    $ file -b --mime Main/Cartoons/aarp-eyechart.jpg 
    image/jpeg

</div>

<div class="codeblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.FindingTheMimeTypeOfAFile?action=sourceblock&num=5)

</div>

</div>

<div class="vspace">

</div>

`File::MimeInfo` perl module
----------------------------

This can be used, but it does have some limitations. Instead, I use a
Perl package called
[File::MimeInfo](http://search.cpan.org/~pardus/File-MimeInfo-0.15/lib/File/MimeInfo.pm).
It includes a program called `mimetype` with the proper parameters will
return the mimetype of the file. With this information, you can do
things like send an approrpriate Content-type header for an HTTP
Response, or use it in setting Content-type for Mime mail or RSS
enclosures.

Also important is to have a good database of MIME data. One such source
is the Shared MIME data resource at Freedesktop.org:
<http://www.freedesktop.org/wiki/Software/shared-mime-info>. On my main
development machine, I have this database saved into `/sw/share/mime`,
so I have aliased the mimetype program to:
`mimetype --database=/sw/share/mime`.

<div class="vspace">

</div>

Using mimetype in PHP
---------------------

As of 5.3.0, PHP has the
[fileinfo](http://us2.php.net/manual/en/book.fileinfo.php) class. This
makes it easy to determine the true file type of a given file. Using the
[`finfo_file`
function](http://us2.php.net/manual/en/function.finfo-file.php), it is
easy to obtain the mime type:

<div class="vspace">

</div>

<div id="sourceblock2" class="sourceblock">

<div class="sourceblocktext">

<div class="php">

1.  <div class="de1">

    <span class="re0">\$finfo</span> <span class="sy0">=</span> <span
    class="kw2">new</span> finfo<span
    class="br0">(</span>FILEINFO\_MIME\_TYPE<span
    class="br0">)</span><span class="sy0">;</span>

    </div>

2.  <div class="de1">

    <span class="re0">\$mimetype</span> <span class="sy0">=</span> <span
    class="re0">\$finfo</span><span class="sy0">-\></span><span
    class="kw3">file</span><span class="br0">(</span><span
    class="re0">\$filename</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.FindingTheMimeTypeOfAFile?action=sourceblock&num=2)

</div>

</div>

For example:

<div class="vspace">

</div>

<div id="sourceblock6" class="codeblock">

<div class="codeblocktext">

    $ php -r '$finfo = new finfo(FILEINFO_MIME_TYPE);print $finfo->file("Main/Cartoons/aarp-eyechart.jpg"). "\n";'
    image/jpeg

</div>

<div class="codeblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.FindingTheMimeTypeOfAFile?action=sourceblock&num=6)

</div>

</div>

Subsequently, doing something with that mimetype can become:

<div class="vspace">

</div>

<div id="sourceblock3" class="sourceblock">

<div class="sourceblocktext">

<div class="php">

1.  <div class="de1">

    <span class="re0">\$finfo</span> <span class="sy0">=</span> <span
    class="kw2">new</span> finfo<span
    class="br0">(</span>FILEINFO\_MIME\_TYPE<span
    class="br0">)</span><span class="sy0">;</span>

    </div>

2.  <div class="de1">

    <span class="kw1">switch</span> <span class="br0">(</span><span
    class="re0">\$finfo</span><span class="sy0">-\></span><span
    class="kw3">file</span><span class="br0">(</span><span
    class="re0">\$filename</span><span class="br0">)</span><span
    class="br0">)</span> <span class="br0">{</span>

    </div>

3.  <div class="de1">

      <span class="kw1">case</span> <span
    class="st_h">'image/jpeg'</span><span class="sy0">:</span> <span
    class="re0">\$ext</span> <span class="sy0">=</span> <span
    class="st0">"jpg"</span><span class="sy0">;</span>  <span
    class="kw1">break</span><span class="sy0">;</span>

    </div>

4.  <div class="de1">

      <span class="kw1">case</span> <span
    class="st_h">'image/gif'</span><span class="sy0">:</span> <span
    class="re0">\$ext</span> <span class="sy0">=</span> <span
    class="st0">"gif"</span><span class="sy0">;</span> <span
    class="kw1">break</span><span class="sy0">;</span>

    </div>

5.  <div class="de2">

      <span class="kw1">case</span> <span
    class="st_h">'image/png'</span><span class="sy0">:</span> <span
    class="re0">\$ext</span> <span class="sy0">=</span> <span
    class="st0">"png"</span><span class="sy0">;</span> <span
    class="kw1">break</span><span class="sy0">;</span>

    </div>

6.  <div class="de1">

      <span class="kw1">default</span><span class="sy0">:</span> <span
    class="re0">\$ext</span> <span class="sy0">=</span> <span
    class="st0">"dat"</span><span class="sy0">;</span> <span
    class="kw1">break</span><span class="sy0">;</span>

    </div>

7.  <div class="de1">

    <span class="br0">}</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.FindingTheMimeTypeOfAFile?action=sourceblock&num=3)

</div>

</div>

Or, using a table:

<div class="vspace">

</div>

<div id="sourceblock4" class="sourceblock">

<div class="sourceblocktext">

<div class="php">

1.  <div class="de1">

    <span class="re0">\$mime2ext</span> <span class="sy0">=</span> <span
    class="kw3">array</span><span class="br0">(</span>

    </div>

2.  <div class="de1">

      <span class="st_h">'image/jpeg'</span> <span
    class="sy0">=\></span> <span class="st_h">'jpg'</span><span
    class="sy0">,</span>

    </div>

3.  <div class="de1">

      <span class="st_h">'image/jpg'</span> <span class="sy0">=\></span>
    <span class="st_h">'jpg'</span><span class="sy0">,</span>

    </div>

4.  <div class="de1">

      <span class="st_h">'image/gif'</span> <span class="sy0">=\></span>
    <span class="st_h">'gif'</span><span class="sy0">,</span>

    </div>

5.  <div class="de2">

      <span class="st_h">'image/png'</span> <span class="sy0">=\></span>
    <span class="st_h">'png'</span><span class="sy0">,</span>

    </div>

6.  <div class="de1">

    <span class="br0">)</span><span class="sy0">;</span>

    </div>

7.  <div class="de1">

     

    </div>

8.  <div class="de1">

    <span class="co1">// later, in code</span>

    </div>

9.  <div class="de1">

     

    </div>

10. <div class="de2">

    <span class="re0">\$ext</span> <span class="sy0">=</span> <span
    class="br0">(</span><span class="kw3">isset</span><span
    class="br0">(</span><span class="re0">\$mime2ext</span><span
    class="br0">[</span><span class="re0">\$finfo</span><span
    class="sy0">-\></span><span class="kw3">file</span><span
    class="br0">(</span><span class="re0">\$filename</span><span
    class="br0">)</span><span class="br0">]</span><span
    class="br0">)</span><span class="br0">)</span> ? <span
    class="re0">\$mime2ext</span><span class="br0">[</span><span
    class="re0">\$finfo</span><span class="sy0">-\></span><span
    class="kw3">file</span><span class="br0">(</span><span
    class="re0">\$filename</span><span class="br0">)</span><span
    class="br0">]</span> <span class="sy0">:</span> <span
    class="st_h">'dat'</span><span class="sy0">;</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.FindingTheMimeTypeOfAFile?action=sourceblock&num=4)

</div>

</div>

<div class="vspace">

</div>

</div>
