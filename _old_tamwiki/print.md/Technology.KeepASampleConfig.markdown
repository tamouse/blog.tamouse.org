<div id="wikitext">

<span id="excerpt"></span> When crafting a web application, it is a good
practice to put configuration details into separate file to be included
in the application code. I typically name this file `config.inc.php`
(Using an .inc.php extension instead of a .php extension indicates that
this is code to be included rather than called directly. **Note:**
always use a .php extension on include files so they can't be downloaded
as text file to a browser.) <span id="excerptend"></span>

A sample snippet of a config file may look like this:

<div class="vspace">

</div>

<div id="sourceblock1" class="sourceblock">

<div class="sourceblocktext">

<div class="php">

<div class="head">

Configuration file fragment

</div>

1.  <div class="de1">

    <span class="co4">/\*\*</span>

    </div>

2.  <div class="de1">

    <span class="co4"> \* Database connectivity constants.</span>

    </div>

3.  <div class="de1">

    <span class="co4"> \* Replace with appropriate values for your local
    installation</span>

    </div>

4.  <div class="de1">

    <span class="co4"> \*\*/</span>

    </div>

5.  <div class="de2">

     

    </div>

6.  <div class="de1">

    <span class="kw3">define</span><span class="br0">(</span><span
    class="st0">"DBHOST"</span><span class="sy0">,</span><span
    class="st_h">'localhost'</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

7.  <div class="de1">

    <span class="kw3">define</span><span class="br0">(</span><span
    class="st0">"DBUSER"</span><span class="sy0">,</span><span
    class="st_h">'someuser'</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

8.  <div class="de1">

    <span class="kw3">define</span><span class="br0">(</span><span
    class="st0">"DBPASS"</span><span class="sy0">,</span><span
    class="st_h">'somepassword'</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

9.  <div class="de1">

    <span class="kw3">define</span><span class="br0">(</span><span
    class="st0">"DBNAME"</span><span class="sy0">,</span><span
    class="st_h">'somedatabase'</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.KeepASampleConfig?action=sourceblock&num=1)

</div>

</div>

If you put your code in a public repository, such as
[Gitorious](http://gitorious.org/), you don't want anyone to be able to
download your database access credentials.

Based on how things work in
[PmWiki](http://wiki.tamouse.org?n=Technology.PmWiki?action=print), I
have created another file, called `sample-config.inc.php` that mirrors
the real `config.inc.php` file save for the details you don't want to
get out. Then, when a person downloads your code, they can create their
own `config.inc.php` file based off the sample one, filling in the
details and customizing their installation.

But when you are working on your application, you don't want to have to
keep track of all the changes you make to `config.inc.php` to keep
`sample-config.inc.php` up-to-date. So, a simple perl script will do the
trick:

<div class="vspace">

</div>

<div id="sourceblock2" class="sourceblock">

<div class="sourceblocktext">

<div class="perl">

<div class="head">

clean\_config.pl

</div>

1.  <div class="de1">

    <span class="co1">\#!/usr/bin/perl -n</span>

    </div>

2.  <div class="de1">

     

    </div>

3.  <div class="de1">

    <span class="co1">\# This program is a filter -- it is intended to
    be run</span>

    </div>

4.  <div class="de1">

    <span class="co1">\# such that an implicit while loop is run on each
    line</span>

    </div>

5.  <div class="de2">

    <span class="co1">\# of the input file(s)</span>

    </div>

6.  <div class="de1">

     

    </div>

7.  <div class="de1">

    <span class="co2">/DBHOST|DBNAME|DBPASS|DBUSER/</span> <span
    class="sy0">&&</span> <span
    class="co2">s/,(['"])[\^'"]\*(['"])\\);/,\\1\\2);/g</span><span
    class="sy0">;</span>

    </div>

8.  <div class="de1">

    <span class="kw3">print</span> <span class="co5">\$\_</span><span
    class="sy0">;</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.KeepASampleConfig?action=sourceblock&num=2)

</div>

</div>

The above script will match any line containing `DBHOST`, `DBNAME`,
`DBPASS`, or `DBUSER` and substitute the contents of any string with the
null string on that line.

If you have other sorts of things you don't want to get out in the wild
(e.g. AWS keys, Login passwords, etc), you can adjust the filter
accordingly.

To use, simply pass the working `config.inc.php` file as `STDIN` and
redirect `STDOUT` to your `sample-config.inc.php` file:

<div class="vspace">

</div>

<div id="sourceblock3" class="sourceblock">

<div class="sourceblocktext">

<div class="bash">

<span class="co4">\$ </span>\~<span class="sy0">/</span>bin<span
class="sy0">/</span>clean\_config.pl <span
class="sy0">\<</span>config.inc.php <span
class="sy0">\></span>sample-config.inc.php

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.KeepASampleConfig?action=sourceblock&num=3)

</div>

</div>

(Set the script to executable first.)

<div class="vspace">

</div>

Update
------

-- [tamara](http://wiki.tamouse.org?n=Profiles.Tamara?action=print)
April 17, 2012, at 09:22 PM

There are many, many ways to do configuration, based on the language and
application at hand. The above is a rather crude method that masks the
setup Wordpress uses in their configuration file.

Credentials and such should really not be stored with the application
source (as I've mentioned) but they should also really not be accessible
from the web server's path.

<div class="vspace">

</div>

</div>
