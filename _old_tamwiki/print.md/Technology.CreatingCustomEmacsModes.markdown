<div id="wikitext">

Using `define-derived-mode`{.escaped}
-------------------------------------

This method seems to be quite the easiest, although getting font stuff
to work if you're defining your own fonts can be quite the task.

<div class="vspace">

</div>

### Simple start-up

At a minimum, you need to provide the following to define a new major
mode:

<div class="vspace">

</div>

<div id="sourceblock1" class="sourceblock">

<div class="sourceblocktext">

<div class="lisp">

1.  <div class="de1">

    <span class="br0">(</span>define-derived-mode mynew-mode text-mode

    </div>

2.  <div class="de1">

      <span class="st0">"MyNew"</span>

    </div>

3.  <div class="de1">

      <span class="st0">"New mode for my stuff</span>

    </div>

4.  <div class="de1">

    <span class="st0">  <span
    class="es0">\\\\</span>{mynew-mode-map}"</span>

    </div>

5.  <div class="de2">

      <span class="br0">)</span>

    </div>

6.  <div class="de1">

     

    </div>

7.  <div class="de1">

    <span class="br0">(</span>provide 'mynew-mode<span
    class="br0">)</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.CreatingCustomEmacsModes?action=sourceblock&num=1)

</div>

</div>

This makes a new mode, named `mynew-mode` which is derived from
`text-mode`. You can use any mode you wish to start from.

You should provide a means for customizing the mode parameters. First
create a customization group and set the parent group appropriately for
this mode:

<div class="vspace">

</div>

<div id="sourceblock2" class="sourceblock">

<div class="sourceblocktext">

<div class="lisp">

<div class="head">

Add customization group

</div>

1.  <div class="de1">

    <span class="br0">(</span>defgroup mynew <span
    class="kw1">nil</span>

    </div>

2.  <div class="de1">

      <span class="st0">"New customization group for demo"</span>

    </div>

3.  <div class="de1">

      <span class="sy0">:</span><span class="me1">prefix</span> <span
    class="st0">"mynew-"</span>

    </div>

4.  <div class="de1">

      <span class="sy0">:</span><span class="me1">group</span> 'wp<span
    class="br0">)</span>

    </div>

5.  <div class="de2">

     

    </div>

6.  <div class="de1">

     

    </div>

7.  <div class="de1">

    <span class="br0">(</span>define-derived-mode mynew-mode
    fundamental-mode

    </div>

8.  <div class="de1">

      <span class="st0">"MyNew"</span>

    </div>

9.  <div class="de1">

      <span class="st0">"Major mode for demonstration.</span>

    </div>

10. <div class="de2">

     

    </div>

11. <div class="de1">

    <span class="st0"><span
    class="es0">\\\\</span>{mynew-mode-map}"</span>

    </div>

12. <div class="de1">

    <span class="co1">;; add customization group</span>

    </div>

13. <div class="de1">

      <span class="sy0">:</span><span class="me1">group</span> 'mynew

    </div>

14. <div class="de1">

      <span class="br0">)</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.CreatingCustomEmacsModes?action=sourceblock&num=2)

</div>

</div>

<div class="vspace">

</div>

### Specifying emacs fonts

Emacs has a nice font scheme it calls *Faces* that will allow you to
perform syntax markup on your files. However, setting faces can be quite
a chore. You have to specify the set of keywords that will determine
what face to apply. Keywords are really regular expressions that match
strings in your file. There is a nifty function called `regexp-opt`
which you pass a list of strings containing your keywords and it returns
an optimized regexp:

<div class="vspace">

</div>

<div id="sourceblock3" class="sourceblock">

<div class="sourceblocktext">

<div class="lisp">

<div class="head">

regexp-opt example

</div>

1.  <div class="de1">

    <span class="br0">(</span>regexp-opt '<span
    class="br0">(</span><span class="st0">"if"</span> <span
    class="st0">"else"</span> <span class="st0">"elseif"</span> <span
    class="st0">"while"</span> <span class="st0">"unless"</span> <span
    class="st0">"for"</span> <span class="st0">"foreach"</span> <span
    class="st0">"switch"</span> <span class="st0">"do"</span><span
    class="br0">)</span> t<span class="br0">)</span>

    </div>

2.  <div class="de1">

     

    </div>

3.  <div class="de1">

    Returns<span class="sy0">:</span>

    </div>

4.  <div class="de1">

     

    </div>

5.  <div class="de2">

    <span class="st0">"<span class="es0">\\\\</span>(do<span
    class="es0">\\\\</span>|else<span class="es0">\\\\</span>(?:if<span
    class="es0">\\\\</span>)?<span class="es0">\\\\</span>|for<span
    class="es0">\\\\</span>(?:each<span class="es0">\\\\</span>)?<span
    class="es0">\\\\</span>|if<span class="es0">\\\\</span>|switch<span
    class="es0">\\\\</span>|unless<span
    class="es0">\\\\</span>|while<span class="es0">\\\\</span>)"</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.CreatingCustomEmacsModes?action=sourceblock&num=3)

</div>

</div>

You then plug that optimized regexp into a constant for the mode:

<div class="vspace">

</div>

<div id="sourceblock4" class="sourceblock">

<div class="sourceblocktext">

<div class="lisp">

<div class="head">

define keyword constants

</div>

1.  <div class="de1">

    <span class="br0">(</span>defconst
    mynew-mode-font-lock-keywords-basic-syntax

    </div>

2.  <div class="de1">

      <span class="br0">(</span><span class="kw1">list</span>

    </div>

3.  <div class="de1">

       '<span class="br0">(</span><span class="st0">"<span
    class="es0">\\\\</span>\<<span class="es0">\\\\</span>(do<span
    class="es0">\\\\</span>|else<span class="es0">\\\\</span>(?:if<span
    class="es0">\\\\</span>)?<span class="es0">\\\\</span>|for<span
    class="es0">\\\\</span>(?:each<span class="es0">\\\\</span>)?<span
    class="es0">\\\\</span>|if<span class="es0">\\\\</span>|switch<span
    class="es0">\\\\</span>|unless<span
    class="es0">\\\\</span>|while<span class="es0">\\\\</span>)<span
    class="es0">\\\\</span>\>"</span> <span class="sy0">.</span>
    font-lock-keyword-face<span class="br0">)</span>

    </div>

4.  <div class="de1">

       '<span class="br0">(</span><span class="st0">"<span
    class="es0">\\\\</span>(<span class="es0">\\\\</span>\$<span
    class="es0">\\\\</span>w\*<span class="es0">\\\\</span>)"</span>
    <span class="sy0">.</span> font-lock-variable-name-face<span
    class="br0">)</span><span class="br0">)</span>

    </div>

5.  <div class="de2">

      <span class="st0">"Minimal markup of language syntax and variable
    names"</span><span class="br0">)</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.CreatingCustomEmacsModes?action=sourceblock&num=4)

</div>

</div>

To use these, you need to modify the `define-derived-mode` macro once
again:

<div class="vspace">

</div>

<div id="sourceblock5" class="sourceblock">

<div class="sourceblocktext">

<div class="lisp">

<div class="head">

add font lock info

</div>

1.  <div class="de1">

    <span class="br0">(</span>define-derived-mode mynew-mode
    fundamental-mode

    </div>

2.  <div class="de1">

      <span class="st0">"MyNew"</span>

    </div>

3.  <div class="de1">

      <span class="st0">"Major mode for demonstration.</span>

    </div>

4.  <div class="de1">

     

    </div>

5.  <div class="de2">

    <span class="st0"><span
    class="es0">\\\\</span>{mynew-mode-map}"</span>

    </div>

6.  <div class="de1">

      <span class="sy0">:</span><span class="me1">group</span> 'mynew

    </div>

7.  <div class="de1">

      <span class="br0">(</span><span class="kw1">set</span> <span
    class="br0">(</span>make-local-variable 'font-lock-defaults<span
    class="br0">)</span> '<span
    class="br0">(</span>mynew-mode-font-lock-keywords-basic-syntax<span
    class="br0">)</span><span class="br0">)</span>

    </div>

8.  <div class="de1">

      <span class="br0">)</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.CreatingCustomEmacsModes?action=sourceblock&num=5)

</div>

</div>

<div class="vspace">

</div>

### Defining your own face names

When I started out on this, I didn't realize this, but you need to
define variables to use your face names appropriately. So, for each new
face name you want:

<div class="vspace">

</div>

<div id="sourceblock6" class="sourceblock">

<div class="sourceblocktext">

<div class="lisp">

<div class="head">

creating new face names

</div>

1.  <div class="de1">

    <span class="br0">(</span>defgroup mynew-faces <span
    class="kw1">nil</span>

    </div>

2.  <div class="de1">

      <span class="st0">"New face customization group for demo"</span>

    </div>

3.  <div class="de1">

      <span class="sy0">:</span><span class="me1">group</span> 'mynew

    </div>

4.  <div class="de1">

      <span class="sy0">:</span><span class="me1">group</span>
    'faces<span class="br0">)</span>

    </div>

5.  <div class="de2">

     

    </div>

6.  <div class="de1">

    <span class="br0">(</span>defvar mynew-syntax-face
    'mynew-syntax-face<span class="br0">)</span>

    </div>

7.  <div class="de1">

     

    </div>

8.  <div class="de1">

    <span class="br0">(</span>defface mynew-syntax-face

    </div>

9.  <div class="de1">

      '<span class="br0">(</span><span class="br0">(</span>t <span
    class="sy0">:</span><span class="me1">color</span> blue3<span
    class="br0">)</span><span class="br0">)</span>

    </div>

10. <div class="de2">

      <span class="st0">"Face for syntax keywords"</span>

    </div>

11. <div class="de1">

      <span class="sy0">:</span><span class="me1">group</span>
    'mynew-faces<span class="br0">)</span>

    </div>

12. <div class="de1">

     

    </div>

13. <div class="de1">

    <span class="br0">(</span>defvar mynew-variable-face
    'mynew-variable-face<span class="br0">)</span>

    </div>

14. <div class="de1">

     

    </div>

15. <div class="de2">

    <span class="br0">(</span>defface mynew-variable-face

    </div>

16. <div class="de1">

      '<span class="br0">(</span><span class="br0">(</span>t <span
    class="sy0">:</span><span class="me1">color</span> green<span
    class="br0">)</span><span class="br0">)</span>

    </div>

17. <div class="de1">

      <span class="st0">"Face for variable names"</span>

    </div>

18. <div class="de1">

      <span class="sy0">:</span><span class="me1">group</span>
    'mynew-faces<span class="br0">)</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.CreatingCustomEmacsModes?action=sourceblock&num=6)

</div>

</div>

And change the font lock keywords definition

<div class="vspace">

</div>

<div id="sourceblock7" class="sourceblock">

<div class="sourceblocktext">

<div class="lisp">

<div class="head">

use new face names

</div>

1.  <div class="de1">

    <span class="br0">(</span>defconst
    mynew-mode-font-lock-keywords-basic-syntax

    </div>

2.  <div class="de1">

      <span class="br0">(</span><span class="kw1">list</span>

    </div>

3.  <div class="de1">

       '<span class="br0">(</span><span class="st0">"<span
    class="es0">\\\\</span>\<<span class="es0">\\\\</span>(do<span
    class="es0">\\\\</span>|else<span class="es0">\\\\</span>(?:if<span
    class="es0">\\\\</span>)?<span class="es0">\\\\</span>|for<span
    class="es0">\\\\</span>(?:each<span class="es0">\\\\</span>)?<span
    class="es0">\\\\</span>|if<span class="es0">\\\\</span>|switch<span
    class="es0">\\\\</span>|unless<span
    class="es0">\\\\</span>|while<span class="es0">\\\\</span>)<span
    class="es0">\\\\</span>\>"</span> <span class="sy0">.</span>
    mynew-syntax-face<span class="br0">)</span>

    </div>

4.  <div class="de1">

       '<span class="br0">(</span><span class="st0">"<span
    class="es0">\\\\</span>(<span class="es0">\\\\</span>\$<span
    class="es0">\\\\</span>w\*<span class="es0">\\\\</span>)"</span>
    <span class="sy0">.</span> mynew-variable-face<span
    class="br0">)</span><span class="br0">)</span>

    </div>

5.  <div class="de2">

      <span class="st0">"Minimal markup of language syntax and variable
    names"</span><span class="br0">)</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.CreatingCustomEmacsModes?action=sourceblock&num=7)

</div>

</div>

<div class="vspace">

</div>

Using `generic-mode`{.escaped}
------------------------------

Link: [emacs-fu: creating custom modes the easy way with
generic-mode](http://emacs-fu.blogspot.com/2010/04/creating-custom-modes-easy-way-with.html)

<div class="vspace">

</div>

<div class="round lrindent quote">

Syntax highlighting is useful when editing configuration files, programs
and so on, as it helps to prevent errors and makes it easier to quickly
scan documents.

Emacs supports syntax highlighting (font locking in emacs lingo) for
many different file types. For many common cases (e.g. editing for many
programming languages, org-mode), emacs' support goes much further than
merely colorizing keywords, and offers all kinds of 'magic'
(auto-completion, 'electricity', special key bindings, …). For some
other file types, at least keywords are given some different color.

Still, there are files that are not recognized by emacs as having some
special format; these are displayed as plain text. This may be the case
for less-common configuration files, or your own specific formats.

Defining a full 'mode' for such file types can be a lot of work.
Fortunately, emacs offers a easier way: generic-mode. generic-mode
defines a whole lot of mode of modes for common formats, but also
defines the define-generic-mode macro to create your own modes.

</div>

<div class="vspace">

</div>

<div style="display: none;">

This goes at the bottom of the page, hidden by comment block class
Summary:Some ways to create a major mode in emacs
Parent:(Technology.)Emacs <span
class="wikiword">[IncludeMe](http://wiki.tamouse.org?n=Technology.IncludeMe?action=edit)[?](http://wiki.tamouse.org?n=Technology.IncludeMe?action=edit)</span>:[Technology.Emacs](http://wiki.tamouse.org?n=Technology.Emacs?action=print)
Categories:[HowTos](http://wiki.tamouse.org?n=Category.HowTos)

</div>

</div>
