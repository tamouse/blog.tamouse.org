<div id="wikitext">

<span id="excerpt"></span> Homebrew is a neat whizzy package manager a
la Fink and Macports, but using the great new tools of
[Git](http://wiki.tamouse.org?n=Technology.Git?action=print) and
[Ruby](http://wiki.tamouse.org?n=Technology.Ruby?action=print). It will
make your life so much easier. <span id="excerptend"></span>

<div class="vspace">

</div>

<div class="round lrindent quote">

[Homebrew](http://mxcl.github.com:80/)
======================================

**The missing package manager for OS X**

<div class="vspace">

</div>

Homebrew installs the stuff you need that Apple didn't.
-------------------------------------------------------

<div id="sourceblock1" class="sourceblock">

<div class="sourceblocktext">

<div class="bash">

<span class="co4">\$ </span>brew <span class="kw2">install</span> <span
class="kw2">wget</span>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.OSXHomeBrew?action=sourceblock&num=1)

</div>

</div>

<div class="vspace">

</div>

Homebrew installs packages to their own directory and then symlinks their files into `/usr/local`.
--------------------------------------------------------------------------------------------------

<div id="sourceblock2" class="sourceblock">

<div class="sourceblocktext">

<div class="bash">

\$ <span class="kw3">cd</span> <span class="sy0">/</span>usr<span
class="sy0">/</span><span class="kw3">local</span>\
 \$ <span class="kw2">find</span> Cellar\
 Cellar<span class="sy0">/</span>wget<span class="sy0">/</span><span
class="nu0">1.12</span>\
 Cellar<span class="sy0">/</span>wget<span class="sy0">/</span><span
class="nu0">1.12</span><span class="sy0">/</span>bin<span
class="sy0">/</span><span class="kw2">wget</span>\
 Cellar<span class="sy0">/</span>wget<span class="sy0">/</span><span
class="nu0">1.12</span><span class="sy0">/</span>share<span
class="sy0">/</span>man<span class="sy0">/</span>man1<span
class="sy0">/</span>wget.1\
\
 \$ <span class="kw2">ls</span> <span class="re5">-l</span> bin\
 bin<span class="sy0">/</span><span class="kw2">wget</span> -<span
class="sy0">\></span> ..<span class="sy0">/</span>Cellar<span
class="sy0">/</span>wget<span class="sy0">/</span><span
class="nu0">1.12</span><span class="sy0">/</span>bin<span
class="sy0">/</span><span class="kw2">wget</span>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.OSXHomeBrew?action=sourceblock&num=2)

</div>

</div>

<div class="vspace">

</div>

Homebrew won't install files outside its prefix, and you can place a Homebrew installation wherever you like.
-------------------------------------------------------------------------------------------------------------

Trivially create your own Homebrew packages.
--------------------------------------------

<div id="sourceblock3" class="sourceblock">

<div class="sourceblocktext">

<div class="bash">

\$ brew create http:<span class="sy0">//</span>foo.com<span
class="sy0">/</span>bar-<span class="nu0">1.0</span>.tgz\
 Created <span class="sy0">/</span>usr<span
class="sy0">/</span>local<span class="sy0">/</span>Library<span
class="sy0">/</span>Formula<span class="sy0">/</span>bar.rb

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.OSXHomeBrew?action=sourceblock&num=3)

</div>

</div>

<div class="vspace">

</div>

It's all git and ruby underneath, so hack away with the knowledge that you can easily revert your modifications and merge upstream updates.
-------------------------------------------------------------------------------------------------------------------------------------------

<div id="sourceblock4" class="sourceblock">

<div class="sourceblocktext">

<div class="bash">

<span class="co4">\$ </span>brew edit <span class="kw2">wget</span>
<span class="co0">\# opens in \$EDITOR!</span>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.OSXHomeBrew?action=sourceblock&num=4)

</div>

</div>

<div class="vspace">

</div>

Homebrew formula are simple Ruby scripts:
-----------------------------------------

<div id="sourceblock5" class="sourceblock">

<div class="sourceblocktext">

<div class="ruby">

<span class="kw3">require</span> <span class="st0">'formula'</span>\
\
 <span class="kw1">class</span> Wget <span class="sy0">\<</span>
Formula\
   homepage <span class="st0">'http://www.gnu.org/wget/'</span>\
   url <span class="st0">'http://ftp.gnu.org/wget-1.12.tar.gz'</span>\
   md5 <span class="st0">'308a5476fc096a8a525d07279a6f6aa3'</span>\
\
   <span class="kw1">def</span> install\
     <span class="kw3">system</span> <span
class="st0">"./configure --prefix=\#{prefix}"</span>\
     <span class="kw3">system</span> <span class="st0">'make
install'</span>\
   <span class="kw1">end</span>\
 <span class="kw1">end</span>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.OSXHomeBrew?action=sourceblock&num=5)

</div>

</div>

<div class="vspace">

</div>

Homebrew complements OS X. Install your gems with `gem`, and their dependencies with `brew`.
--------------------------------------------------------------------------------------------

Install Homebrew
----------------

<div id="sourceblock6" class="sourceblock">

<div class="sourceblocktext">

<div class="bash">

ruby <span class="re5">-e</span> <span class="st0">"<span
class="es4">\$(curl -fsSkL
raw.github.com/mxcl/homebrew/go)</span>"</span>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.OSXHomeBrew?action=sourceblock&num=6)

</div>

</div>

Paste that at a Terminal prompt.The script explains what it will do and
then pauses before it does it. There are more installation options
[here](https://github.com/mxcl/homebrew/wiki/Installation).

<div class="vspace">

</div>

Further Documentation:
----------------------

[Homebrew Wiki](https://github.com/mxcl/homebrew/wiki)

<div class="vspace">

</div>

</div>

<div class="vspace">

</div>

<div style="display: none;">

Summary: **The missing package manager for OS X** Tags: saved page,
homebrew, brew, packages, package manager, tools, osx Source:
<http://mxcl.github.com/homebrew/> Parent: (Technology.)OSX includeme:
[Technology.OSX](http://wiki.tamouse.org?n=Technology.OSX?action=print)
Categories:[Articles](http://wiki.tamouse.org?n=Category.Articles),[Links](http://wiki.tamouse.org?n=Category.Links),[Tools](http://wiki.tamouse.org?n=Category.Tools)

</div>

Page snagged at: Fri, 26 Oct 2012 17:02:47 -0500

</div>
