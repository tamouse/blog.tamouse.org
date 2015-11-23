<div id="wikitext">

Article: [Creating (and Maintaining) Perl
Modules](http://mathforum.org/~ken/perl_modules.html)\
Author: Created in 1997 by Ken Williams. Expanded and revised in 1999
for Digital River by Dave Rolsky and Ken Williams. Revised in 2001 by
Ken Williams for general use.\
Revised: 2012-04-10 by Tamara Temple to update to perl 5.10.0\
Posted: 2012-04-10

<div class="vspace">

</div>

Create skeleton files for your module
-------------------------------------

Perl is distributed with a program called h2xs. This program, while
initially intended to help programmers implement C extensions to Perl,
can also be used to generate skeleton files for a new module.

Let's create a module called <span class="wikiword">NewModule</span>.pm
that doesn't do very much. I'll run the h2xs program:

<div class="vspace">

</div>

<div id="sourceblock1" class="sourceblock">

<div class="sourceblocktext">

<div class="bash">

\$ h2xs <span class="re5">-AXc</span> <span class="re5">-n</span>
NewModule\
 Defaulting to backwards compatibility with <span
class="kw2">perl</span> 5.10.0\
 If you intend this module to be compatible with earlier <span
class="kw2">perl</span> versions, please\
 specify a minimum <span class="kw2">perl</span> version with the <span
class="re5">-b</span> option.\
\
 Writing NewModule<span class="sy0">/</span>lib<span
class="sy0">/</span>NewModule.pm\
 Writing NewModule<span class="sy0">/</span>Makefile.PL\
 Writing NewModule<span class="sy0">/</span>README\
 Writing NewModule<span class="sy0">/</span>t<span
class="sy0">/</span>NewModule.t\
 Writing NewModule<span class="sy0">/</span>Changes\
 Writing NewModule<span class="sy0">/</span>MANIFEST

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.CreatingAndMaintainingPerlModules?action=sourceblock&num=1)

</div>

</div>

**README** is the place to write what the module is, how it is acquired
and installed, and any configuration info.

<div class="vspace">

</div>

<div id="sourceblock4" class="codeblock">

<div class="codeblocktext">

    NewModule version 0.01
    ======================

    The README is used to introduce the module and provide instructions on
    how to install the module, any machine dependencies it may have (for
    example C compilers and installed libraries) and any other information
    that should be provided before the module is installed.

    A README file is required for CPAN modules since CPAN extracts the
    README file from a module distribution so that people browsing the
    archive can use it get an idea of the modules uses. It is usually a
    good idea to provide version information here so that people can
    decide whether fixes for the module are worth downloading.

    INSTALLATION

    To install this module type the following:

       perl Makefile.PL
       make
       make test
       make install

    DEPENDENCIES

    This module requires these other modules and libraries:

      blah blah blah

    COPYRIGHT AND LICENCE

    Put the correct copyright and licence information here.

    Copyright (C) 2012 by Tamara Temple

    This library is free software; you can redistribute it and/or modify
    it under the same terms as Perl itself, either Perl version 5.10.0 or,
    at your option, any later version of Perl 5 you may have available.

</div>

<div class="codeblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.CreatingAndMaintainingPerlModules?action=sourceblock&num=4)

</div>

</div>

The **Changes** file is where you might keep track keep track of changes
you make to your module as you write new versions. If you're using RCS
or CVS version control, you shouldn't use the Changes file, since all
your history & logs will be in revision control and is much more
reliable there (you are adding detailed revision notes in version
control, aren't you?). I've found that the best scheme is to
automatically build the Changes file from the revision control history,
but your preferences might vary.

<div class="vspace">

</div>

<div id="sourceblock5" class="codeblock">

<div class="codeblocktext">

    Revision history for Perl extension NewModule.

    0.01  Tue Apr 10 00:47:25 2012
        - original version; created by h2xs 1.23 with options
            -AXc -n NewModule

</div>

<div class="codeblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.CreatingAndMaintainingPerlModules?action=sourceblock&num=5)

</div>

</div>

**MANIFEST** contains a list of files in this directory. If you add new
files to the directory, you should also add them to the MANIFEST. The
MANIFEST is used to create a tarball of your module for distribution,
and it's also checked when people unpack the tarball and install the
module.

<div class="vspace">

</div>

<div id="sourceblock6" class="codeblock">

<div class="codeblocktext">

    Changes
    Makefile.PL
    MANIFEST
    README
    t/NewModule.t
    lib/NewModule.pm

</div>

<div class="codeblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.CreatingAndMaintainingPerlModules?action=sourceblock&num=6)

</div>

</div>

**Makefile.PL** is a Perl program used to create a Unix Makefile. You'll
use this Makefile to test and install your module.

<div class="vspace">

</div>

<div id="sourceblock7" class="codeblock">

<div class="codeblocktext">

    use 5.010000;
    use ExtUtils::MakeMaker;
    # See lib/ExtUtils/MakeMaker.pm for details of how to influence
    # the contents of the Makefile that is written.
    WriteMakefile(
        NAME              => 'NewModule',
        VERSION_FROM      => 'lib/NewModule.pm', # finds $VERSION
        PREREQ_PM         => {}, # e.g., Module::Name => 1.1
        ($] >= 5.005 ?     ## Add these new keywords supported since 5.005
          (ABSTRACT_FROM  => 'lib/NewModule.pm', # retrieve abstract from module
           AUTHOR         => 'Tamara Temple <tamara@local>') : ()),
    );

</div>

<div class="codeblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.CreatingAndMaintainingPerlModules?action=sourceblock&num=7)

</div>

</div>

**lib/<span class="wikiword">NewModule</span>.pm** is your module.
You'll write the code here in the next step.

<div class="vspace">

</div>

<div id="sourceblock2" class="sourceblock">

<div class="sourceblocktext">

<div class="perl">

<span class="kw3">package</span> NewModule<span class="sy0">;</span>\
\
 <span class="kw2">use</span> <span class="nu0">5.010000</span><span
class="sy0">;</span>\
 <span class="kw2">use</span> strict<span class="sy0">;</span>\
 <span class="kw2">use</span> warnings<span class="sy0">;</span>\
\
 <span class="kw3">require</span> Exporter<span class="sy0">;</span>\
\
 <span class="kw1">our</span> <span class="re0">@ISA</span> <span
class="sy0">=</span> <span class="kw3">qw</span><span
class="br0">(</span>Exporter<span class="br0">)</span><span
class="sy0">;</span>\
\
 <span class="co1">\# Items to export into callers namespace by default.
Note: do not export</span>\
 <span class="co1">\# names by default without a very good reason. Use
EXPORT\_OK instead.</span>\
 <span class="co1">\# Do not simply export all your public
functions/methods/constants.</span>\
\
 <span class="co1">\# This allows declaration       use NewModule
':all';</span>\
 <span class="co1">\# If you do not need this, moving things directly
into @EXPORT or @EXPORT\_OK</span>\
 <span class="co1">\# will save memory.</span>\
 <span class="kw1">our</span> <span class="re0">%EXPORT\_TAGS</span>
<span class="sy0">=</span> <span class="br0">(</span> <span
class="st_h">'all'</span> <span class="sy0">=\></span> <span
class="br0">[</span> <span class="kw3">qw</span><span
class="br0">(</span>\
\
 <span class="br0">)</span> <span class="br0">]</span> <span
class="br0">)</span><span class="sy0">;</span>\
\
 <span class="kw1">our</span> <span class="re0">@EXPORT\_OK</span> <span
class="sy0">=</span> <span class="br0">(</span> <span
class="sy0">@</span><span class="br0">{</span> <span
class="re0">\$EXPORT\_TAGS</span><span class="br0">{</span><span
class="st_h">'all'</span><span class="br0">}</span> <span
class="br0">}</span> <span class="br0">)</span><span
class="sy0">;</span>\
\
 <span class="kw1">our</span> <span class="re0">@EXPORT</span> <span
class="sy0">=</span> <span class="kw3">qw</span><span
class="br0">(</span>\
\
 <span class="br0">)</span><span class="sy0">;</span>\
\
 <span class="kw1">our</span> <span class="re0">\$VERSION</span> <span
class="sy0">=</span> <span class="st_h">'0.01'</span><span
class="sy0">;</span>\
\
\
 <span class="co1">\# Preloaded methods go here.</span>\
\
 <span class="nu0">1</span><span class="sy0">;</span>\
 <span class="kw2">\_\_END\_\_</span>\
 <span class="co1">\# Below is stub documentation for your module. You'd
better edit it!</span>\
\
 <span class="coMULTI">=head1 NAME\
\
 NewModule - Perl extension for blah blah blah\
\
 =head1 SYNOPSIS\
\
   use NewModule;\
   blah blah blah\
\
 =head1 DESCRIPTION\
\
 Stub documentation for NewModule, created by h2xs. It looks like the\
 author of the extension was negligent enough to leave the stub\
 unedited.\
\
 Blah blah blah.\
\
 =head2 EXPORT\
\
 None by default.\
\
\
\
 =head1 SEE ALSO\
\
 Mention other useful documentation such as the documentation of\
 related modules or operating system documentation (such as man pages\
 in UNIX), or any relevant external documentation such as RFCs or\
 standards.\
\
 If you have a mailing list set up for your module, mention it here.\
\
 If you have a web site set up for your module, mention it here.\
\
 =head1 AUTHOR\
\
 Tamara Temple, E\<lt\>tamara@localE\<gt\>\
\
 =head1 COPYRIGHT AND LICENSE\
\
 Copyright (C) 2012 by Tamara Temple\
\
 This library is free software; you can redistribute it and/or modify\
 it under the same terms as Perl itself, either Perl version 5.10.0 or,\
 at your option, any later version of Perl 5 you may have available.\
\
\
 =cut</span>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.CreatingAndMaintainingPerlModules?action=sourceblock&num=2)

</div>

</div>

**t/<span class="wikiword">NewModule</span>.t** is a Perl program that
tests your module. You don't run it directly, you type "make test" at a
Unix prompt and it runs it for you. We'll develop this test suite a
little later.

<div class="vspace">

</div>

<div id="sourceblock3" class="sourceblock">

<div class="sourceblocktext">

<div class="perl">

<span class="co1">\# Before \`make install' is performed this script
should be runnable with</span>\
 <span class="co1">\# \`make test'. After \`make install' it should work
as \`perl NewModule.t'</span>\
\
 <span
class="co1">\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#</span>\
\
 <span class="co1">\# change 'tests =\> 1' to 'tests =\>
last\_test\_to\_print';</span>\
\
 <span class="kw2">use</span> Test<span class="sy0">::</span><span
class="me2">More</span> tests <span class="sy0">=\></span> <span
class="nu0">1</span><span class="sy0">;</span>\
 <span class="kw2">BEGIN</span> <span class="br0">{</span> use\_ok<span
class="br0">(</span><span class="st_h">'NewModule'</span><span
class="br0">)</span> <span class="br0">}</span><span
class="sy0">;</span>\
\
 <span
class="co1">\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#</span>\
\
 <span class="co1">\# Insert your test code below, the Test::More module
is use()ed here so read</span>\
 <span class="co1">\# its man page ( perldoc Test::More ) for help
writing this test script.</span>\
  

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.CreatingAndMaintainingPerlModules?action=sourceblock&num=3)

</div>

</div>

<div class="vspace">

</div>

</div>
