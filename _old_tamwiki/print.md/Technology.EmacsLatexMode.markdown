<div id="wikitext">

Introduction
------------

<span id="excerpt"></span> [<span class="texhtml"
style="font-family:cmr10, LMRoman10-Regular, Times, serif;">L<span
style="text-transform: uppercase; font-size: 70%; margin-left: -0.36em; vertical-align: 0.3em; line-height: 0; margin-right: -0.15em;">a</span>T<span
style="text-transform: uppercase; margin-left: -0.1667em; vertical-align: -0.5ex; line-height: 0; margin-right: -0.125em;">e</span>X</span>](http://wiki.tamouse.org?n=Technology.LaTeX?action=print)
is a fabulous mark-up language for creating all kinds of documents, from
simple to complex, that is mostly intended for typeset works. (There are
tools to convert <span class="texhtml"
style="font-family:cmr10, LMRoman10-Regular, Times, serif;">L<span
style="text-transform: uppercase; font-size: 70%; margin-left: -0.36em; vertical-align: 0.3em; line-height: 0; margin-right: -0.15em;">a</span>T<span
style="text-transform: uppercase; margin-left: -0.1667em; vertical-align: -0.5ex; line-height: 0; margin-right: -0.125em;">e</span>X</span>
to HTML, but if you are doing dual-deployment, it may be better to start
off from a different, but common format that can be converted into
either.) <span id="excerptend"></span>

<div class="vspace">

</div>

my-latex-mode
-------------

`latex-mode` is invoked on a file by the [usual
means](http://wiki.tamouse.org?n=Technology.EmacsModes?action=edit)[?](http://wiki.tamouse.org?n=Technology.EmacsModes?action=edit)
and has some pretty nice features. I like to use the `pdflatex`
toolchain for running <span class="texhtml"
style="font-family:cmr10, LMRoman10-Regular, Times, serif;">L<span
style="text-transform: uppercase; font-size: 70%; margin-left: -0.36em; vertical-align: 0.3em; line-height: 0; margin-right: -0.15em;">a</span>T<span
style="text-transform: uppercase; margin-left: -0.1667em; vertical-align: -0.5ex; line-height: 0; margin-right: -0.125em;">e</span>X</span>
on my files, but this also presents a problem with the standard
`tex-view` and `tex-print` functions, as they *hard-wire* in the need
for a `.dvi` file. I wrote a file that can be loaded whenever `tex-mode`
or `latex-mode` is invoked via the standard Emacs
[hooks](http://wiki.tamouse.org?n=Technology.EmacsUsingHooks?action=edit)[?](http://wiki.tamouse.org?n=Technology.EmacsUsingHooks?action=edit)
mechanism.

The file creates a new set of customisable variables and functions
geared toward handling PDFs instead of `.dvi` files. The keyboard
commands normally associated with `tex-view` and `tex-print` are
remapped to these new functions.

<div class="vspace">

</div>

### New variables:

`tex-pdf-print-command`
:   Command used to print a pdf (default: "xpdf")

`tex-alt-pdf-print-command`
:   An alternate command to print the pdf (default: "xpdf")

`tex-pdf-view-commant`
:   Command used to view a pdf
    -   X Windows default: "xpdf"
    -   MS Windows default: "acroread"
    -   Non-specified: "open" *(this is mostly used for OS/X.)*

<div class="vspace">

</div>

### New functions:

`tex-pdf-print`
:   Prints the pdf created

`tex-alt-pdf-print`
:   Alternative method for printing the pdf

`tex-pdf-view`
:   View the pdf

<div class="vspace">

</div>

### Obtaining my-latex-mode

Repository
:   <https://gitorious.org/latex-stuff/my-latex-mode>

Clone the repository into a temporary directory, then move
`my-latex-mode.el` to a directory on your `emacs` `load-path`.

<div class="vspace">

</div>

### Installing my-latex-mode

Modify your `.emacs` file with the following:

<div class="vspace">

</div>

<div id="sourceblock1" class="sourceblock">

<div class="sourceblocktext">

<div class="lisp">

<span class="br0">(</span>add-hook 'latex-mode-hook <span
class="br0">(</span>require 'my-latex-mode<span
class="br0">)</span><span class="br0">)</span>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.EmacsLatexMode?action=sourceblock&num=1)

</div>

</div>

Then, whenever you load a latex file, these functions will also be
available. The file remaps the `C-c C-v`{.escaped} and
`C-c C-p`{.escaped} keys to use the new pdf functions.

<div class="vspace">

</div>

<div style="display: none;">

Metadata stays at end

Summary:a mode for editing <span class="texhtml"
style="font-family:cmr10, LMRoman10-Regular, Times, serif;">L<span
style="text-transform: uppercase; font-size: 70%; margin-left: -0.36em; vertical-align: 0.3em; line-height: 0; margin-right: -0.15em;">a</span>T<span
style="text-transform: uppercase; margin-left: -0.1667em; vertical-align: -0.5ex; line-height: 0; margin-right: -0.125em;">e</span>X</span>
files Parent:(Technology.)Emacs <span
class="wikiword">[IncludeMe](http://wiki.tamouse.org?n=Technology.IncludeMe?action=edit)[?](http://wiki.tamouse.org?n=Technology.IncludeMe?action=edit)</span>:[Technology.Emacs](http://wiki.tamouse.org?n=Technology.Emacs?action=print)
Categories:[Articles](http://wiki.tamouse.org?n=Category.Articles) Tags:
emacs, latex, editing, word processing

</div>

<div class="vspace">

</div>

</div>
