<div id="wikitext">

<span id="excerpt"></span>
[YaSnippet](https://github.com/capitaomorte/yasnippet) is a great
addition to Emacs, allowing you to easily define and then use snippet
collections. Snippets are a great mechanism for speeding up editing code
by allowing you to store standard programming elements and customizing
them when you insert them. <span id="excerptend"></span>

YaSnippet emulated the TextMate snippet feature pretty well -- well
enough that I don't miss out on the majority of TextMate's snippet
features anyway.

The installation and configuration features on the google code page are
pretty complete. I opted for the normal install instead of the bundle
install, as I wanted to be able to create my own snippets.

<div class="vspace">

</div>

Links
-----

-   [Documentation
    folder](https://github.com/capitaomorte/yasnippet/tree/master/doc)
    <div class="vspace">

    </div>

-   [Snippet
    Development](https://raw.github.com/capitaomorte/yasnippet/master/doc/snippet-development.rst)

<div class="vspace">

</div>

Importing textmate snippets
---------------------------

One **really** nice feature of yasnippet is that it's syntax is close
enough to textmate's that there exist some tools for importing textmate
snippet bundles into yasnippet (although not without some transcription
problems):

[Importing TextMate
Snippets](https://github.com/capitaomorte/yasnippet/blob/master/doc/snippet-development.rst#importing-textmate-snippets)
describes one method of doing this that works pretty well, once you get
everything installed.

I chose to use the ruby tool, textmate\_import.rb. Installing this was
pretty straight-forward, with a couple of caveats.

<div class="vspace">

</div>

1.  you need to make sure the required rubygems are installed. One in
    particular, fileutils, requires that imagemagick libmagick9-dev
    development package be installed. This was somewhat of a surprise,
    but the fileutils package requires the rmagick package, which in
    turn relied on the Magic-config script, which only comes from the
    aforementioned library.
    <div class="vspace">

    </div>

2.  I was running on ubuntu GNU/Linux. The ruby script assumes you are
    running on a Mac, where the plutil program has different switches
    that the one available on linux (you do need to install the plutil
    programs on linux). To make it work under linux, change the line in
    the textmate\_import.rb file from `-convert` to `-i`. The change is
    shown in the following diff output:

<div class="vspace">

</div>

<div id="sourceblock1" class="sourceblock">

<div class="sourceblocktext">

<div>

331c331\
\< if (system "plutil -convert xml1 \#{xml\_or\_binary.shellescape} -o
/tmp/textmate\_import.tmpxml")\
---\
\> if (system "plutil -i \#{xml\_or\_binary.shellescape} -o
/tmp/textmate\_import.tmpxml")\

</div>

</div>

<div class="sourceblocklink">

</div>

</div>

<div class="vspace">

</div>

<div class="indent">

As you can see, the change is quite simple, and then the script works as
expected.

</div>

It wasn't clear from the beginning how to work the script. As there's no
documentation or README file, here are a few things I've gleaned from
using it:

<div class="vspace">

</div>

-   Use the -d, -o and -g tags:

<div id="sourceblock2" class="sourceblock">

<div class="sourceblocktext">

<div class="bash">

textmate\_import.rb <span class="re5">-b</span> path<span
class="sy0">/</span>to<span class="sy0">/</span>snippets<span
class="sy0">/</span>in<span class="sy0">/</span>bundle <span
class="re5">-o</span> path<span class="sy0">/</span>to<span
class="sy0">/</span>yasnippet<span class="sy0">/</span>snippets<span
class="sy0">/</span>mode <span class="re5">-g</span> bundle<span
class="sy0">/</span>info.plist

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.YaSnippets?action=sourceblock&num=2)

</div>

</div>

<div class="vspace">

</div>

Getting snippets
----------------

The coolest thing is that textmate bundles are available on github at
<https://github.com/textmate/>. You simply clone the bundle from the git
repo for that bundle:

<div id="sourceblock3" class="sourceblock">

<div class="sourceblocktext">

<div class="bash">

<span class="kw2">git clone</span> https:<span
class="sy0">//</span>github.com<span class="sy0">/</span>textmate<span
class="sy0">/</span>php.tmbundle.git php.tmbundle

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.YaSnippets?action=sourceblock&num=3)

</div>

</div>

will snag that bundle so you have a local copy of it. Then just run the
importer tool on it:

<div id="sourceblock4" class="sourceblock">

<div class="sourceblocktext">

<div class="bash">

textmate\_import.rb <span class="re5">-b</span> php.tmbundle<span
class="sy0">/</span>Snippets <span class="re5">-o</span> php-mode <span
class="re5">-g</span> php.tmbundle<span class="sy0">/</span>info.plist

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.YaSnippets?action=sourceblock&num=4)

</div>

</div>

will put the converted textmate snippets into the php-mode directory.

<div class="vspace">

</div>

Clean-up: differences between textmate and yasnippet snippets
-------------------------------------------------------------

As mentioned, the conversion is not complete. You should go through the
snippet files to clean up various things. Notably, in yasnippet, the \$0
tab stop can't take any modifiers or text, so it has to sit bare in the
snippet.

Also, some textmate snippets use special textmate variables which you'll
have to go through and clean up.

<div class="vspace">

</div>

Key Bindings
------------

I also added bindings for many of the snippets I use that might be used
to modify selected text rather than simply be typed in and expanded.
Here's an example:

<div class="vspace">

</div>

<div id="sourceblock5" class="sourceblock">

<div class="sourceblocktext">

<div>

\# -\*- mode: snippet -\*-\
\# name: em\
\# key: em\
\# binding: "C-c C-c e m"\
\# --\
\<em\>\$0\</em\>\

</div>

</div>

<div class="sourceblocklink">

</div>

</div>

Note the binding is two control-C's, followed by "e", and "m". This
convention lets me use pretty much anything to trigger a snippet without
doing a text expansion, which is hugely necessary when dealing with
selected text (a region in emacs-speak).

<div class="vspace">

</div>

</div>
