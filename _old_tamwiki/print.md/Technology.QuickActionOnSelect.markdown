<div id="wikitext">

<span id="excerpt"></span> This is a quick and dirty way of getting your
web page to respond to a change in value of a non-form-enclosed
`<select>` tag. This is useful for causing changes to happen based on
some specific set of values that you want to offer the user. First I
will give the general form, then offer a specific example from some
recent work I have done. <span id="excerptend"></span>

<span id="generalform"></span>

General Form
------------

The concept here is that we use the `onchange` attribute of the
`<select>` tag to trigger a little javascript to do something with the
value of the `<option>` tag that has been selected.

<div class="vspace">

</div>

<div id="sourceblock1" class="sourceblock">

<div class="sourceblocktext">

<div class="html4strict">

1.  <div class="de1">

    <span class="sc2">\<<span class="kw2">select</span> <span
    class="kw3">name</span><span class="sy0">=</span><span
    class="st0">"myselect"</span> <span class="kw3">id</span><span
    class="sy0">=</span><span class="st0">"myselect"</span> <span
    class="kw3">onchange</span><span class="sy0">=</span><span
    class="st0">"dosomething(this.value)"</span> <span
    class="kw3">size</span><span class="sy0">=</span><span
    class="st0">"1"</span>\></span>

    </div>

2.  <div class="de1">

        <span class="sc2">\<<span class="kw2">option</span> <span
    class="kw3">value</span><span class="sy0">=</span><span
    class="st0">"option1"</span>\></span>option1<span
    class="sc2">\<<span class="sy0">/</span><span
    class="kw2">option</span>\></span>

    </div>

3.  <div class="de1">

        <span class="sc2">\<<span class="kw2">option</span> <span
    class="kw3">value</span><span class="sy0">=</span><span
    class="st0">"option2"</span>\></span>option2<span
    class="sc2">\<<span class="sy0">/</span><span
    class="kw2">option</span>\></span>

    </div>

4.  <div class="de1">

    <span class="sc2">\<<span class="sy0">/</span><span
    class="kw2">select</span>\></span>

    </div>

5.  <div class="de2">

    <span class="sc2">\<<span class="kw2">script</span> <span
    class="kw3">type</span><span class="sy0">=</span><span
    class="st0">"text/javascript"</span> <span
    class="kw3">charset</span><span class="sy0">=</span><span
    class="st0">"utf-8"</span>\></span>

    </div>

6.  <div class="de1">

    /\* <span class="sc-2">\<![CDATA[ \*/</span>

    </div>

7.  <div class="de1">

    <span class="sc-2">    function dosomething (argument) {</span>

    </div>

8.  <div class="de1">

    <span class="sc-2">        alert("Option " + argument + "
    selected");</span>

    </div>

9.  <div class="de1">

    <span class="sc-2">    }</span>

    </div>

10. <div class="de2">

    <span class="sc-2">/\* ]]\></span> \*/

    </div>

11. <div class="de1">

    <span class="sc2">\<<span class="sy0">/</span><span
    class="kw2">script</span>\></span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.QuickActionOnSelect?action=sourceblock&num=1)

</div>

</div>

<div class="vspace">

</div>

### Before changing the option:

[Attach:before.png](http://wiki.tamouse.org?n=Technology.QuickActionOnSelect?action=upload&upname=before.png)[ Δ](http://wiki.tamouse.org?n=Technology.QuickActionOnSelect?action=upload&upname=before.png)

### Result:

[Attach:after.png](http://wiki.tamouse.org?n=Technology.QuickActionOnSelect?action=upload&upname=after.png)[ Δ](http://wiki.tamouse.org?n=Technology.QuickActionOnSelect?action=upload&upname=after.png)

<span id="example"></span>

An Example
----------

Here's a specific example from some work I've done recently to enable
fast theme switching based on applying a parameter to the current
location's URL.

<div class="vspace">

</div>

<div id="sourceblock2" class="sourceblock">

<div class="sourceblocktext">

<div class="php">

1.  <div class="de1">

    <span class="kw2">\<?php</span>

    </div>

2.  <div class="de1">

     

    </div>

3.  <div class="de1">

    <span class="re0">\$themes</span> <span class="sy0">=</span> <span
    class="kw3">array</span><span class="br0">(</span><span
    class="br0">)</span><span class="sy0">;</span>

    </div>

4.  <div class="de1">

    <span class="kw1">if</span> <span class="br0">(</span><span
    class="re0">\$cssdir</span> <span class="sy0">=</span> <span
    class="kw3">opendir</span><span class="br0">(</span><span
    class="st_h">'css'</span><span class="br0">)</span><span
    class="br0">)</span> <span class="br0">{</span>

    </div>

5.  <div class="de2">

        <span class="kw1">while</span> <span class="br0">(</span><span
    class="re0">\$file</span> <span class="sy0">=</span> <span
    class="kw3">readdir</span><span class="br0">(</span><span
    class="re0">\$cssdir</span><span class="br0">)</span><span
    class="br0">)</span> <span class="br0">{</span>

    </div>

6.  <div class="de1">

            <span class="kw1">if</span> <span class="br0">(</span><span
    class="kw3">preg\_match</span><span class="br0">(</span><span
    class="st_h">'/\^theme\_(.\*)\\.css\$/'</span><span
    class="sy0">,</span> <span class="re0">\$file</span><span
    class="sy0">,</span> <span class="re0">\$matches</span><span
    class="br0">)</span><span class="br0">)</span> <span
    class="br0">{</span>

    </div>

7.  <div class="de1">

                <span class="re0">\$themes</span><span
    class="br0">[</span><span class="br0">]</span> <span
    class="sy0">=</span> <span class="re0">\$matches</span><span
    class="br0">[</span><span class="nu0">1</span><span
    class="br0">]</span><span class="sy0">;</span>

    </div>

8.  <div class="de1">

            <span class="br0">}</span>

    </div>

9.  <div class="de1">

        <span class="br0">}</span>

    </div>

10. <div class="de2">

     

    </div>

11. <div class="de1">

        <span class="kw1">echo</span> <span class="st_h">'\<p\>Select a
    theme:'</span><span class="sy0">.</span>PHP\_EOL<span
    class="sy0">;</span>

    </div>

12. <div class="de1">

        <span class="kw1">echo</span> <span class="st_h">'\<select
    name="themeswitcher" id="themeswitcher"
    onchange="settheme(this.value)" size="1"\>'</span><span
    class="sy0">.</span>PHP\_EOL<span class="sy0">;</span>

    </div>

13. <div class="de1">

        <span class="kw1">foreach</span> <span class="br0">(</span><span
    class="re0">\$themes</span> <span class="kw1">as</span> <span
    class="re0">\$themename</span><span class="br0">)</span> <span
    class="br0">{</span>

    </div>

14. <div class="de1">

            <span class="kw1">echo</span> <span class="st_h">'\<option
    value="'</span><span class="sy0">.</span><span
    class="re0">\$themename</span><span class="sy0">.</span><span
    class="st_h">'"'</span><span class="sy0">.</span><span
    class="br0">(</span><span class="re0">\$themename</span> <span
    class="sy0">==</span> <span class="re0">\$GLOBALS</span><span
    class="br0">[</span><span class="st_h">'theme'</span><span
    class="br0">]</span>?<span class="st_h">' selected '</span><span
    class="sy0">:</span><span class="st_h">''</span><span
    class="br0">)</span><span class="sy0">.</span><span
    class="st_h">'\>'</span><span class="sy0">.</span><span
    class="re0">\$themename</span><span class="sy0">.</span><span
    class="st_h">'\</option\>'</span><span
    class="sy0">.</span>PHP\_EOL<span class="sy0">;</span>

    </div>

15. <div class="de2">

        <span class="br0">}</span>

    </div>

16. <div class="de1">

        <span class="kw1">echo</span> <span
    class="st_h">'\</select\>'</span><span
    class="sy0">.</span>PHP\_EOL<span class="sy0">;</span>

    </div>

17. <div class="de1">

        <span class="kw1">echo</span> <span
    class="st_h">'\</p\>'</span><span class="sy0">.</span>PHP\_EOL<span
    class="sy0">;</span>

    </div>

18. <div class="de1">

    <span class="sy1">?\></span>

    </div>

19. <div class="de1">

     

    </div>

20. <div class="de2">

    \<script type="text/javascript" charset="utf-8"\>

    </div>

21. <div class="de1">

    /\* \<![CDATA[ \*/

    </div>

22. <div class="de1">

        function settheme   (theme) {

    </div>

23. <div class="de1">

            window.location=location.href + '&theme=' + theme;

    </div>

24. <div class="de1">

        }

    </div>

25. <div class="de2">

    /\* ]]\> \*/

    </div>

26. <div class="de1">

    \</script\>

    </div>

27. <div class="de1">

     

    </div>

28. <div class="de1">

    <span class="kw2">\<?php</span>

    </div>

29. <div class="de1">

     

    </div>

30. <div class="de2">

    <span class="br0">}</span> <span class="kw1">else</span> <span
    class="br0">{</span>

    </div>

31. <div class="de1">

        <span class="kw3">error\_log</span><span
    class="br0">(</span><span class="st0">"ERROR: Could not open css
    directory<span class="es1">\\n</span>"</span><span
    class="br0">)</span><span class="sy0">;</span>

    </div>

32. <div class="de1">

    <span class="br0">}</span>

    </div>

33. <div class="de1">

    <span class="sy1">?\></span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.QuickActionOnSelect?action=sourceblock&num=2)

</div>

</div>

In this example, I'm setting up a means for the user to choose a
different theme than the one presented. The means to do this are by
reloading the page with a query string parameter of `theme=newtheme`.
The various themes are held in the `css` subdirectory of the
application, and have the file naming specification of "theme\_" + theme
name + ".css". This makes the theme choices easy to pick out amongst the
other possible css and other files in the directory.

The css directory is scanned, using the `readdir` function in php, which
returns the files in the directory handle `$cssdir` one at a time. The
file is run through `preg_match` to weed out the files we don't want,
and when a matching file is found the theme name is extracted into the
second element of the \$matches array (subscript 1). This is appended to
an array of theme names for use in setting the options below in the
`<select>` block.

A little label is given to show the user what to do. In this case, I do
not use the alternative of setting the first option in the switch block
to be some sort of instruction, as I need to have the current theme name
selected. After the label, the select block is started. Of note is the
`onchange` attribute, which is set to the javascript function we're
going to call whenever the select block changes:

<div class="vspace">

</div>

<div id="sourceblock3" class="sourceblock">

<div class="sourceblocktext">

<div class="html4strict">

onchange="settheme(this.value)"

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.QuickActionOnSelect?action=sourceblock&num=3)

</div>

</div>

will call the `settheme` function with the currently selected value of
the switch block. `this.value` is a particularly handy way of passing on
that currently selected value.

In the foreach loop, we have to check which option corresponds to the
currently selected theme, so we can present the user with something to
actually change. The currently selected theme is held in the php
`$GLOBALS` array as key `theme`. The resulting HTML emitted looks like
this:

<div class="vspace">

</div>

<div id="sourceblock4" class="sourceblock">

<div class="sourceblocktext">

<div class="html4strict">

1.  <div class="de1">

    <span class="sc2">\<<span class="kw2">p</span>\></span>Select a
    theme:

    </div>

2.  <div class="de1">

    <span class="sc2">\<<span class="kw2">select</span> <span
    class="kw3">name</span><span class="sy0">=</span><span
    class="st0">"themeswitcher"</span> <span class="kw3">id</span><span
    class="sy0">=</span><span class="st0">"themeswitcher"</span> <span
    class="kw3">onchange</span><span class="sy0">=</span><span
    class="st0">"settheme(this.value)"</span> <span
    class="kw3">size</span><span class="sy0">=</span><span
    class="st0">"1"</span>\></span>

    </div>

3.  <div class="de1">

     

    </div>

4.  <div class="de1">

    <span class="sc2">\<<span class="kw2">option</span> <span
    class="kw3">value</span><span class="sy0">=</span><span
    class="st0">"dark"</span> <span
    class="kw3">selected</span> \></span>dark<span class="sc2">\<<span
    class="sy0">/</span><span class="kw2">option</span>\></span>

    </div>

5.  <div class="de2">

    <span class="sc2">\<<span class="kw2">option</span> <span
    class="kw3">value</span><span class="sy0">=</span><span
    class="st0">"purple"</span>\></span>purple<span class="sc2">\<<span
    class="sy0">/</span><span class="kw2">option</span>\></span>

    </div>

6.  <div class="de1">

    <span class="sc2">\<<span class="sy0">/</span><span
    class="kw2">select</span>\></span>

    </div>

7.  <div class="de1">

    <span class="sc2">\<<span class="sy0">/</span><span
    class="kw2">p</span>\></span>

    </div>

8.  <div class="de1">

     

    </div>

9.  <div class="de1">

    <span class="sc2">\<<span class="kw2">script</span> <span
    class="kw3">type</span><span class="sy0">=</span><span
    class="st0">"text/javascript"</span> <span
    class="kw3">charset</span><span class="sy0">=</span><span
    class="st0">"utf-8"</span>\></span>

    </div>

10. <div class="de2">

    /\* <span class="sc-2">\<![CDATA[ \*/</span>

    </div>

11. <div class="de1">

    <span class="sc-2">    function settheme   (theme) {</span>

    </div>

12. <div class="de1">

    <span class="sc-2">        window.location=location.href +
    '&theme=' + theme;</span>

    </div>

13. <div class="de1">

    <span class="sc-2">    }</span>

    </div>

14. <div class="de1">

    <span class="sc-2">/\* ]]\></span> \*/

    </div>

15. <div class="de2">

    <span class="sc2">\<<span class="sy0">/</span><span
    class="kw2">script</span>\></span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.QuickActionOnSelect?action=sourceblock&num=4)

</div>

</div>

As you can see, the currently selected theme is "purple" and the other
option is "dark"

<div class="vspace">

</div>

### Before:

[Attach:examplebefore.png](http://wiki.tamouse.org?n=Technology.QuickActionOnSelect?action=upload&upname=examplebefore.png)[ Δ](http://wiki.tamouse.org?n=Technology.QuickActionOnSelect?action=upload&upname=examplebefore.png)

<div class="vspace">

</div>

### After

[Attach:exampleafter.png](http://wiki.tamouse.org?n=Technology.QuickActionOnSelect?action=upload&upname=exampleafter.png)[ Δ](http://wiki.tamouse.org?n=Technology.QuickActionOnSelect?action=upload&upname=exampleafter.png)

You can see that the theme changed!

<div class="vspace">

</div>

</div>
