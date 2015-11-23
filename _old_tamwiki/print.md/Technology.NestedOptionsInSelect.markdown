<div id="wikitext">

<span id="excerpt"></span> From a recent php-general mailing list entry,
someone was wondering how to set up a select block if you have nested
items to select from. The way to do this is with the `<optgroup>` tag,
which, as the name suggests, groups sets of options: <span
id="excerptend"></span>

<div class="vspace">

</div>

<div id="sourceblock1" class="sourceblock">

<div class="sourceblocktext">

<div class="html4strict">

1.  <div class="de1">

    <span class="sc2">\<<span class="kw2">p</span>\></span>A selection
    widget about cars. Notice groupings.<span class="sc2">\<<span
    class="sy0">/</span><span class="kw2">p</span>\></span>

    </div>

2.  <div class="de1">

    <span class="sc2">\<<span class="kw2">select</span>\></span>

    </div>

3.  <div class="de1">

        <span class="sc2">\<<span class="kw2">optgroup</span> <span
    class="kw3">label</span><span class="sy0">=</span><span
    class="st0">"Swedish Cars"</span>\></span>

    </div>

4.  <div class="de1">

            <span class="sc2">\<<span class="kw2">option</span> <span
    class="kw3">value</span><span class="sy0">=</span><span
    class="st0">"volvo"</span>\></span>Volvo<span class="sc2">\<<span
    class="sy0">/</span><span class="kw2">option</span>\></span>

    </div>

5.  <div class="de2">

            <span class="sc2">\<<span class="kw2">option</span> <span
    class="kw3">value</span><span class="sy0">=</span><span
    class="st0">"saab"</span>\></span>Saab<span class="sc2">\<<span
    class="sy0">/</span><span class="kw2">option</span>\></span>

    </div>

6.  <div class="de1">

        <span class="sc2">\<<span class="sy0">/</span><span
    class="kw2">optgroup</span>\></span>

    </div>

7.  <div class="de1">

        <span class="sc2">\<<span class="kw2">optgroup</span> <span
    class="kw3">label</span><span class="sy0">=</span><span
    class="st0">"German Cars"</span>\></span>

    </div>

8.  <div class="de1">

            <span class="sc2">\<<span class="kw2">option</span> <span
    class="kw3">value</span><span class="sy0">=</span><span
    class="st0">"mercedes"</span>\></span>Mercedes<span
    class="sc2">\<<span class="sy0">/</span><span
    class="kw2">option</span>\></span>

    </div>

9.  <div class="de1">

            <span class="sc2">\<<span class="kw2">option</span> <span
    class="kw3">value</span><span class="sy0">=</span><span
    class="st0">"audi"</span>\></span>Audi<span class="sc2">\<<span
    class="sy0">/</span><span class="kw2">option</span>\></span>

    </div>

10. <div class="de2">

        <span class="sc2">\<<span class="sy0">/</span><span
    class="kw2">optgroup</span>\></span>

    </div>

11. <div class="de1">

    <span class="sc2">\<<span class="sy0">/</span><span
    class="kw2">select</span>\></span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.NestedOptionsInSelect?action=sourceblock&num=1)

</div>

</div>

<div class="vspace">

</div>

Unselected
:   [Attach:ex1unselected.png](http://wiki.tamouse.org?n=Technology.NestedOptionsInSelect?action=upload&upname=ex1unselected.png)[ Δ](http://wiki.tamouse.org?n=Technology.NestedOptionsInSelect?action=upload&upname=ex1unselected.png)

Drop Down Enabled
:   [Attach:ex1dropdown.png](http://wiki.tamouse.org?n=Technology.NestedOptionsInSelect?action=upload&upname=ex1dropdown.png)[ Δ](http://wiki.tamouse.org?n=Technology.NestedOptionsInSelect?action=upload&upname=ex1dropdown.png)

As you can see above, there are two groups, "Swedish Cars" and "German
Cars" with different options inside of them.

You can put `optgroup`s inside of `optgroup`s for further nesting:

<div class="vspace">

</div>

<div id="sourceblock2" class="sourceblock">

<div class="sourceblocktext">

<div class="html4strict">

1.  <div class="de1">

    <span class="sc2">\<<span class="kw2">p</span>\></span>Another
    selection widget about cars. Notice the nested groupings<span
    class="sc2">\<<span class="sy0">/</span><span
    class="kw2">p</span>\></span>

    </div>

2.  <div class="de1">

    <span class="sc2">\<<span class="kw2">select</span>\></span>

    </div>

3.  <div class="de1">

        <span class="sc2">\<<span class="kw2">optgroup</span> <span
    class="kw3">label</span><span class="sy0">=</span><span
    class="st0">"Swedish Cars"</span>\></span>

    </div>

4.  <div class="de1">

            <span class="sc2">\<<span class="kw2">optgroup</span> <span
    class="kw3">label</span><span class="sy0">=</span><span
    class="st0">"&nbsp;Volvo"</span>\></span>

    </div>

5.  <div class="de2">

                <span class="sc2">\<<span class="kw2">option</span>
    <span class="kw3">value</span><span class="sy0">=</span><span
    class="st0">"240s"</span>\></span>240 Sedan<span class="sc2">\<<span
    class="sy0">/</span><span class="kw2">option</span>\></span>

    </div>

6.  <div class="de1">

                <span class="sc2">\<<span class="kw2">option</span>
    <span class="kw3">value</span><span class="sy0">=</span><span
    class="st0">"240w"</span>\></span>240 Wagon<span class="sc2">\<<span
    class="sy0">/</span><span class="kw2">option</span>\></span>

    </div>

7.  <div class="de1">

                <span class="sc2">\<<span class="kw2">option</span>
    <span class="kw3">value</span><span class="sy0">=</span><span
    class="st0">"740s"</span>\></span>740 Sedan<span class="sc2">\<<span
    class="sy0">/</span><span class="kw2">option</span>\></span>

    </div>

8.  <div class="de1">

                <span class="sc2">\<<span class="kw2">option</span>
    <span class="kw3">value</span><span class="sy0">=</span><span
    class="st0">"740w"</span>\></span>740 Wagon<span class="sc2">\<<span
    class="sy0">/</span><span class="kw2">option</span>\></span>

    </div>

9.  <div class="de1">

            <span class="sc2">\<<span class="sy0">/</span><span
    class="kw2">optgroup</span>\></span>

    </div>

10. <div class="de2">

            <span class="sc2">\<<span class="kw2">optgroup</span> <span
    class="kw3">label</span><span class="sy0">=</span><span
    class="st0">"&nbsp;Saab"</span>\></span>

    </div>

11. <div class="de1">

                <span class="sc2">\<<span class="kw2">option</span>
    <span class="kw3">value</span><span class="sy0">=</span><span
    class="st0">"900s"</span>\></span>900s<span class="sc2">\<<span
    class="sy0">/</span><span class="kw2">option</span>\></span>

    </div>

12. <div class="de1">

            <span class="sc2">\<<span class="sy0">/</span><span
    class="kw2">optgroup</span>\></span>

    </div>

13. <div class="de1">

        <span class="sc2">\<<span class="sy0">/</span><span
    class="kw2">optgroup</span>\></span>

    </div>

14. <div class="de1">

        <span class="sc2">\<<span class="kw2">optgroup</span> <span
    class="kw3">label</span><span class="sy0">=</span><span
    class="st0">"German Cars"</span>\></span>

    </div>

15. <div class="de2">

            <span class="sc2">\<<span class="kw2">optgroup</span> <span
    class="kw3">label</span><span class="sy0">=</span><span
    class="st0">"&nbsp;Mercedes"</span>\></span>

    </div>

16. <div class="de1">

                <span class="sc2">\<<span class="kw2">option</span>
    <span class="kw3">value</span><span class="sy0">=</span><span
    class="st0">"300SD"</span>\></span>300SD<span class="sc2">\<<span
    class="sy0">/</span><span class="kw2">option</span>\></span>

    </div>

17. <div class="de1">

                <span class="sc2">\<<span class="kw2">option</span>
    <span class="kw3">value</span><span class="sy0">=</span><span
    class="st0">"S350"</span>\></span>S350<span class="sc2">\<<span
    class="sy0">/</span><span class="kw2">option</span>\></span>

    </div>

18. <div class="de1">

                <span class="sc2">\<<span class="kw2">option</span>
    <span class="kw3">value</span><span class="sy0">=</span><span
    class="st0">"400SE"</span>\></span>400SE<span class="sc2">\<<span
    class="sy0">/</span><span class="kw2">option</span>\></span>

    </div>

19. <div class="de1">

                <span class="sc2">\<<span class="kw2">option</span>
    <span class="kw3">value</span><span class="sy0">=</span><span
    class="st0">"500SEL"</span>\></span>500SEL<span class="sc2">\<<span
    class="sy0">/</span><span class="kw2">option</span>\></span>

    </div>

20. <div class="de2">

                <span class="sc2">\<<span class="kw2">option</span>
    <span class="kw3">value</span><span class="sy0">=</span><span
    class="st0">"600SEL"</span>\></span>600SEL<span class="sc2">\<<span
    class="sy0">/</span><span class="kw2">option</span>\></span>

    </div>

21. <div class="de1">

            <span class="sc2">\<<span class="sy0">/</span><span
    class="kw2">optgroup</span>\></span>

    </div>

22. <div class="de1">

            <span class="sc2">\<<span class="kw2">optgroup</span> <span
    class="kw3">label</span><span class="sy0">=</span><span
    class="st0">"&nbsp;Audi"</span>\></span>

    </div>

23. <div class="de1">

                <span class="sc2">\<<span class="kw2">option</span>
    <span class="kw3">value</span><span class="sy0">=</span><span
    class="st0">"2011TTSCoupe"</span>\></span>2011 TTS Coupe<span
    class="sc2">\<<span class="sy0">/</span><span
    class="kw2">option</span>\></span>

    </div>

24. <div class="de1">

                <span class="sc2">\<<span class="kw2">option</span>
    <span class="kw3">value</span><span class="sy0">=</span><span
    class="st0">"2011TTSRoadster"</span>\></span>2011 TTS Roadster<span
    class="sc2">\<<span class="sy0">/</span><span
    class="kw2">option</span>\></span>

    </div>

25. <div class="de2">

                <span class="sc2">\<<span class="kw2">option</span>
    <span class="kw3">value</span><span class="sy0">=</span><span
    class="st0">"S5Coupe"</span>\></span>S5 Coupe<span
    class="sc2">\<<span class="sy0">/</span><span
    class="kw2">option</span>\></span>

    </div>

26. <div class="de1">

                <span class="sc2">\<<span class="kw2">option</span>
    <span class="kw3">value</span><span class="sy0">=</span><span
    class="st0">"S5Cabriolet"</span>\></span>S5 Cabriolet<span
    class="sc2">\<<span class="sy0">/</span><span
    class="kw2">option</span>\></span>

    </div>

27. <div class="de1">

                <span class="sc2">\<<span class="kw2">option</span>
    <span class="kw3">value</span><span class="sy0">=</span><span
    class="st0">"S6Sedan"</span>\></span>S6 Sedan<span
    class="sc2">\<<span class="sy0">/</span><span
    class="kw2">option</span>\></span>

    </div>

28. <div class="de1">

            <span class="sc2">\<<span class="sy0">/</span><span
    class="kw2">optgroup</span>\></span>

    </div>

29. <div class="de1">

        <span class="sc2">\<<span class="sy0">/</span><span
    class="kw2">optgroup</span>\></span>

    </div>

30. <div class="de2">

    <span class="sc2">\<<span class="sy0">/</span><span
    class="kw2">select</span>\></span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.NestedOptionsInSelect?action=sourceblock&num=2)

</div>

</div>

<span class="round lrindent tip"> Notice the use of the &nbsp; in the
example above to set off the supgroupings a little from the
parent.</span>

<div class="vspace">

</div>

Unselected
:   [Attach:ex2unselected.png](http://wiki.tamouse.org?n=Technology.NestedOptionsInSelect?action=upload&upname=ex2unselected.png)[ Δ](http://wiki.tamouse.org?n=Technology.NestedOptionsInSelect?action=upload&upname=ex2unselected.png)

Drop Down Enabled
:   [Attach:ex2dropdown.png](http://wiki.tamouse.org?n=Technology.NestedOptionsInSelect?action=upload&upname=ex2dropdown.png)[ Δ](http://wiki.tamouse.org?n=Technology.NestedOptionsInSelect?action=upload&upname=ex2dropdown.png)

<div class="vspace">

</div>

-   [Demo
    page](http://portfolio.tamaratemple.com/htmlcssexamples/nestedoptions.shtml)

<div class="vspace">

</div>

Creating nested options via PHP
-------------------------------

This should be drop dead easy, but I'll include an example anyway.

<div class="vspace">

</div>

<div id="sourceblock3" class="sourceblock">

<div class="sourceblocktext">

<div class="php">

1.  <div class="de1">

    <span class="kw2">\<?php</span>

    </div>

2.  <div class="de1">

    <span class="re0">\$categories</span><span class="br0">[</span><span
    class="br0">]</span> <span class="sy0">=</span> <span
    class="kw3">array</span><span class="br0">(</span><span
    class="st_h">'id'</span> <span class="sy0">=\></span> <span
    class="nu0">1</span><span class="sy0">,</span> <span
    class="st_h">'name'</span> <span class="sy0">=\></span> <span
    class="st_h">'cars'</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

3.  <div class="de1">

    <span class="re0">\$categories</span><span class="br0">[</span><span
    class="br0">]</span> <span class="sy0">=</span> <span
    class="kw3">array</span><span class="br0">(</span><span
    class="st_h">'id'</span> <span class="sy0">=\></span> <span
    class="nu0">2</span><span class="sy0">,</span> <span
    class="st_h">'name'</span> <span class="sy0">=\></span> <span
    class="st_h">'trucks'</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

4.  <div class="de1">

    <span class="re0">\$categories</span><span class="br0">[</span><span
    class="br0">]</span> <span class="sy0">=</span> <span
    class="kw3">array</span><span class="br0">(</span><span
    class="st_h">'id'</span> <span class="sy0">=\></span> <span
    class="nu0">3</span><span class="sy0">,</span> <span
    class="st_h">'name'</span> <span class="sy0">=\></span> <span
    class="st_h">'motorcycles'</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

5.  <div class="de2">

     

    </div>

6.  <div class="de1">

    <span class="re0">\$pages</span><span class="br0">[</span><span
    class="br0">]</span> <span class="sy0">=</span> <span
    class="kw3">array</span><span class="br0">(</span><span
    class="st_h">'id'</span> <span class="sy0">=\></span> <span
    class="nu0">1</span><span class="sy0">,</span> <span
    class="st_h">'name'</span> <span class="sy0">=\></span> <span
    class="st_h">'Neon'</span><span class="sy0">,</span> <span
    class="st_h">'cat\_id'</span> <span class="sy0">=\></span> <span
    class="nu0">1</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

7.  <div class="de1">

    <span class="re0">\$pages</span><span class="br0">[</span><span
    class="br0">]</span> <span class="sy0">=</span> <span
    class="kw3">array</span><span class="br0">(</span><span
    class="st_h">'id'</span> <span class="sy0">=\></span> <span
    class="nu0">2</span><span class="sy0">,</span> <span
    class="st_h">'name'</span> <span class="sy0">=\></span> <span
    class="st_h">'Saturn'</span><span class="sy0">,</span> <span
    class="st_h">'cat\_id'</span> <span class="sy0">=\></span> <span
    class="nu0">1</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

8.  <div class="de1">

    <span class="re0">\$pages</span><span class="br0">[</span><span
    class="br0">]</span> <span class="sy0">=</span> <span
    class="kw3">array</span><span class="br0">(</span><span
    class="st_h">'id'</span> <span class="sy0">=\></span> <span
    class="nu0">3</span><span class="sy0">,</span> <span
    class="st_h">'name'</span> <span class="sy0">=\></span> <span
    class="st_h">'F150'</span><span class="sy0">,</span> <span
    class="st_h">'cat\_id'</span> <span class="sy0">=\></span> <span
    class="nu0">2</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

9.  <div class="de1">

    <span class="re0">\$pages</span><span class="br0">[</span><span
    class="br0">]</span> <span class="sy0">=</span> <span
    class="kw3">array</span><span class="br0">(</span><span
    class="st_h">'id'</span> <span class="sy0">=\></span> <span
    class="nu0">4</span><span class="sy0">,</span> <span
    class="st_h">'name'</span> <span class="sy0">=\></span> <span
    class="st_h">'Ram 2500'</span><span class="sy0">,</span> <span
    class="st_h">'cat\_id'</span> <span class="sy0">=\></span> <span
    class="nu0">2</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

10. <div class="de2">

    <span class="re0">\$pages</span><span class="br0">[</span><span
    class="br0">]</span> <span class="sy0">=</span> <span
    class="kw3">array</span><span class="br0">(</span><span
    class="st_h">'id'</span> <span class="sy0">=\></span> <span
    class="nu0">5</span><span class="sy0">,</span> <span
    class="st_h">'name'</span> <span class="sy0">=\></span> <span
    class="st_h">'Suzuki'</span><span class="sy0">,</span> <span
    class="st_h">'cat\_id'</span> <span class="sy0">=\></span> <span
    class="nu0">2</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

11. <div class="de1">

    <span class="re0">\$pages</span><span class="br0">[</span><span
    class="br0">]</span> <span class="sy0">=</span> <span
    class="kw3">array</span><span class="br0">(</span><span
    class="st_h">'id'</span> <span class="sy0">=\></span> <span
    class="nu0">6</span><span class="sy0">,</span> <span
    class="st_h">'name'</span> <span class="sy0">=\></span> <span
    class="st_h">'Honda'</span><span class="sy0">,</span> <span
    class="st_h">'cat\_id'</span> <span class="sy0">=\></span> <span
    class="nu0">3</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

12. <div class="de1">

     

    </div>

13. <div class="de1">

    <span class="kw1">echo</span> <span class="st0">"\<select id=<span
    class="es1">\\"</span>page\_id<span class="es1">\\"</span>\><span
    class="es1">\\n</span>"</span><span class="sy0">;</span>

    </div>

14. <div class="de1">

     

    </div>

15. <div class="de2">

    <span class="kw1">foreach</span> <span class="br0">(</span><span
    class="re0">\$categories</span> <span class="kw1">AS</span> <span
    class="re0">\$cat</span><span class="br0">)</span> <span
    class="br0">{</span>

    </div>

16. <div class="de1">

        <span class="re0">\$c\_cat\_name</span> <span
    class="sy0">=</span> <span class="kw3">htmlspecialchars</span><span
    class="br0">(</span><span class="re0">\$cat</span><span
    class="br0">[</span><span class="st_h">'name'</span><span
    class="br0">]</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

17. <div class="de1">

        <span class="kw1">echo</span> <span class="st0">"<span
    class="es1">\\t</span>\<optgroup label=<span
    class="es1">\\"</span><span class="es4">{\$c\_cat\_name}</span><span
    class="es1">\\"</span>\><span class="es1">\\n</span>"</span><span
    class="sy0">;</span>

    </div>

18. <div class="de1">

     

    </div>

19. <div class="de1">

        <span class="kw1">foreach</span> <span class="br0">(</span><span
    class="re0">\$pages</span> <span class="kw1">AS</span> <span
    class="re0">\$page</span><span class="br0">)</span> <span
    class="br0">{</span>

    </div>

20. <div class="de2">

            <span class="kw1">if</span> <span class="br0">(</span> <span
    class="re0">\$page</span><span class="br0">[</span><span
    class="st_h">'cat\_id'</span><span class="br0">]</span> <span
    class="sy0">==</span> <span class="re0">\$cat</span><span
    class="br0">[</span><span class="st_h">'id'</span><span
    class="br0">]</span> <span class="br0">)</span> <span
    class="br0">{</span>

    </div>

21. <div class="de1">

                <span class="re0">\$c\_page\_id</span> <span
    class="sy0">=</span> <span class="kw3">htmlspecialchars</span><span
    class="br0">(</span><span class="br0">(</span>int<span
    class="br0">)</span><span class="re0">\$page</span><span
    class="br0">[</span><span class="st_h">'id'</span><span
    class="br0">]</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

22. <div class="de1">

                <span class="re0">\$c\_page\_name</span> <span
    class="sy0">=</span> <span class="kw3">htmlspecialchars</span><span
    class="br0">(</span><span class="re0">\$page</span><span
    class="br0">[</span><span class="st_h">'name'</span><span
    class="br0">]</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

23. <div class="de1">

                <span class="kw1">echo</span> <span class="st0">"<span
    class="es1">\\t</span><span class="es1">\\t</span>\<option
    value=<span class="es1">\\"</span><span
    class="es4">{\$c\_page\_id}</span><span
    class="es1">\\"</span>\><span
    class="es4">{\$c\_page\_name}</span>\</option\><span
    class="es1">\\n</span>"</span><span class="sy0">;</span>

    </div>

24. <div class="de1">

            <span class="br0">}</span>

    </div>

25. <div class="de2">

        <span class="br0">}</span>

    </div>

26. <div class="de1">

        <span class="co2">\# Reset pages so you can loop through it
    again</span>

    </div>

27. <div class="de1">

        <span class="kw3">reset</span><span class="br0">(</span><span
    class="re0">\$pages</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

28. <div class="de1">

        <span class="kw1">echo</span> <span class="st0">"<span
    class="es1">\\t</span>\</optgroup\><span
    class="es1">\\n</span>"</span><span class="sy0">;</span>

    </div>

29. <div class="de1">

    <span class="br0">}</span>

    </div>

30. <div class="de2">

     

    </div>

31. <div class="de1">

    <span class="kw1">echo</span> <span class="st0">"\</select\><span
    class="es1">\\n</span>"</span><span class="sy0">;</span>

    </div>

32. <div class="de1">

    <span class="sy1">?\></span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.NestedOptionsInSelect?action=sourceblock&num=3)

</div>

</div>

Which returns the following HTML:

<div class="vspace">

</div>

<div id="sourceblock4" class="sourceblock">

<div class="sourceblocktext">

<div class="html4strict">

1.  <div class="de1">

    <span class="sc2">\<<span class="kw2">select</span> <span
    class="kw3">id</span><span class="sy0">=</span><span
    class="st0">"page\_id"</span>\></span>

    </div>

2.  <div class="de1">

        <span class="sc2">\<<span class="kw2">optgroup</span> <span
    class="kw3">label</span><span class="sy0">=</span><span
    class="st0">"cars"</span>\></span>

    </div>

3.  <div class="de1">

            <span class="sc2">\<<span class="kw2">option</span> <span
    class="kw3">value</span><span class="sy0">=</span><span
    class="st0">"1"</span>\></span>Neon<span class="sc2">\<<span
    class="sy0">/</span><span class="kw2">option</span>\></span>

    </div>

4.  <div class="de1">

            <span class="sc2">\<<span class="kw2">option</span> <span
    class="kw3">value</span><span class="sy0">=</span><span
    class="st0">"2"</span>\></span>Saturn<span class="sc2">\<<span
    class="sy0">/</span><span class="kw2">option</span>\></span>

    </div>

5.  <div class="de2">

        <span class="sc2">\<<span class="sy0">/</span><span
    class="kw2">optgroup</span>\></span>

    </div>

6.  <div class="de1">

        <span class="sc2">\<<span class="kw2">optgroup</span> <span
    class="kw3">label</span><span class="sy0">=</span><span
    class="st0">"trucks"</span>\></span>

    </div>

7.  <div class="de1">

            <span class="sc2">\<<span class="kw2">option</span> <span
    class="kw3">value</span><span class="sy0">=</span><span
    class="st0">"3"</span>\></span>F150<span class="sc2">\<<span
    class="sy0">/</span><span class="kw2">option</span>\></span>

    </div>

8.  <div class="de1">

            <span class="sc2">\<<span class="kw2">option</span> <span
    class="kw3">value</span><span class="sy0">=</span><span
    class="st0">"4"</span>\></span>Ram 2500<span class="sc2">\<<span
    class="sy0">/</span><span class="kw2">option</span>\></span>

    </div>

9.  <div class="de1">

            <span class="sc2">\<<span class="kw2">option</span> <span
    class="kw3">value</span><span class="sy0">=</span><span
    class="st0">"5"</span>\></span>Suzuki<span class="sc2">\<<span
    class="sy0">/</span><span class="kw2">option</span>\></span>

    </div>

10. <div class="de2">

        <span class="sc2">\<<span class="sy0">/</span><span
    class="kw2">optgroup</span>\></span>

    </div>

11. <div class="de1">

        <span class="sc2">\<<span class="kw2">optgroup</span> <span
    class="kw3">label</span><span class="sy0">=</span><span
    class="st0">"motorcycles"</span>\></span>

    </div>

12. <div class="de1">

            <span class="sc2">\<<span class="kw2">option</span> <span
    class="kw3">value</span><span class="sy0">=</span><span
    class="st0">"6"</span>\></span>Honda<span class="sc2">\<<span
    class="sy0">/</span><span class="kw2">option</span>\></span>

    </div>

13. <div class="de1">

        <span class="sc2">\<<span class="sy0">/</span><span
    class="kw2">optgroup</span>\></span>

    </div>

14. <div class="de1">

    <span class="sc2">\<<span class="sy0">/</span><span
    class="kw2">select</span>\></span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.NestedOptionsInSelect?action=sourceblock&num=4)

</div>

</div>

<div class="vspace">

</div>

-   [Demo](http://portfolio.tamaratemple.com/phpexamples/optiongroup.php)

<div class="vspace">

</div>

</div>
