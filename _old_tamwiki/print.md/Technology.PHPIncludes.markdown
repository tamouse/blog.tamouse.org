<div id="wikitext">

<div class="vspace">

</div>

<div class="round lrindent important2">

See also <span
class="wikiword">[AWarningAboutPHPIncludeFiles](http://wiki.tamouse.org?n=Technology.AWarningAboutPHPIncludeFiles?action=print)</span>.

</div>

[PHP](http://wiki.tamouse.org?n=Technology.PHP?action=print) is a
wonderful language to use for all sorts of things, not just web
applications. One of it's great features is the ability to include other
php scripts in the main script. This can lead to some interesting
application architectures.

<div class="vspace">

</div>

The include family
------------------

There are 4 types of include mechanisms:

-   include
-   include\_once
-   require
-   require\_once

These all do similar things, but there are some differences.

<div class="vspace">

</div>

-   The \_once directives will faithfully only allow you to include a
    file one time during the run of the script, thus saving you from
    having to worry about including something more than once in
    different scripts if they use the same features.
    <div class="vspace">

    </div>

-   The difference between the include\* and the require\* directives is
    subtle. Require will issue a compiler error and fail if the file is
    not found in the [include path](#includepath), whereas include will
    issue a warning and continue.

Generally speaking, unless you are going to provide your own error
handlers, on a production application that is open to users, you
probably don't want to use require\*, and use include\* instead to
provide graceful degredation if the features in the included script are
not available. This is much preferrable than presenting a completely
blank page to the user.

<span id="includepath"></span>

The Include Path
----------------

PHP will search it's include path to look for the filespec given in the
directive. This include path is set in the
[`php.ini`{.escaped}](http://us.php.net/manual/en/ini.php) file in the
[`include_path`{.escaped}](http://us.php.net/manual/en/ini.core.php#ini.include-path)
entry. PHP will search this path, then look in the calling scripts
directory and finally the current working directory. (This can make for
some interesting patterns in include directives.)

<div class="vspace">

</div>

Common code, utilities, modularization
--------------------------------------

The most frequent application of includes is to include other parts of
the application. Any code that is used in multiple places or
applications should be written as a separate chunk of php and included
in the application. This is very appropriate for libraries of reusable
code, and also for modularizing an application. It's quite a maintenance
nightmare to have to wade through an application script that is miles
long and having functions and variables all over the place.

In particular, doing object-oriented programming is when to make good
use of includes. Your class is nicely enclosed in it's own php file
which you can include in your main and then instantiate an object of
that class.^[1](#fn1_1)^<span id="fnr1_1"></span>

<div class="vspace">

</div>

Single entry, with functions dispatched via includes
----------------------------------------------------

In this model, there is a single entry script, say index.php, for
example.^[2](#fn1_2)^<span id="fnr1_2"></span> The single entry script
will use include or one of it's siblings to pull in the various pieces
of code to run the application, perhaps including certain files only if
the current conditions warrant it.

This is a classic way of creating a controller for an
[MVC](http://wiki.tamouse.org?n=Technology.ModelViewControllerParadigm?action=edit)[?](http://wiki.tamouse.org?n=Technology.ModelViewControllerParadigm?action=edit)
architecture. The controller pulls in the appropriate models to execute
functions, then pulls in the approprate views to display the output. All
this can easily be done with includes.

<div class="vspace">

</div>

Silly uses of includes
----------------------

The include directives really have no notion of what it is they're
including, they just do something interesting if the file is not there
or is unreadable, otherwise they pass the contents of the file into the
php interpretter. Thus, they don't do any sort of checking to see what
is being included. Thus, you can do some silly sorts of things, like
this:

<div class="vspace">

</div>

<div id="sourceblock1" class="sourceblock">

<div class="sourceblocktext">

<div class="php">

<span class="kw2">\<?php</span>\
 <span class="kw3">header</span><span class="br0">(</span><span
class="st0">"Content-type: image/jpeg"</span><span
class="br0">)</span><span class="sy0">;</span>\
 <span class="kw1">include</span><span class="br0">(</span><span
class="st0">"image.jpg"</span><span class="br0">)</span><span
class="sy0">;</span>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.PHPIncludes?action=sourceblock&num=1)

</div>

</div>

This will work because the php interpretter is looking for instances of
"\<?php" and "?\>" to do anything, which won't appear in the binary
image file.

However, it's best *not* to do these sorts of shennanigans as it will be
hard on the person coming back to maintain and fix something, should
that occur^[3](#fn1_3)^<span id="fnr1_3"></span>

The way to handle to above is to use
[`readfile`{.escaped}](http://us.php.net/manual/en/function.readfile.php)
instead:

<div class="vspace">

</div>

<div id="sourceblock2" class="sourceblock">

<div class="sourceblocktext">

<div class="php">

<span class="kw2">\<?php</span>\
 <span class="kw3">header</span><span class="br0">(</span><span
class="st0">"Content-type: image/jpeg"</span><span
class="br0">)</span><span class="sy0">;</span>\
 <span class="kw3">readfile</span><span class="br0">(</span><span
class="st0">"image.jpg"</span><span class="br0">)</span><span
class="sy0">;</span>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.PHPIncludes?action=sourceblock&num=2)

</div>

</div>

Readfile does not pass anything to the compiler, it simply reads from
the file specified and sends the output to the client directly.

<div class="vspace">

</div>

</div>
