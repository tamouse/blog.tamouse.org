<div id="wikitext">

<span id="excerpt"></span> When it comes to choosing when to use the
`switch` control structure, vs. a chain of `if-elseif-else` statements,
there are many opinions. Many find chains of `if-elseif-else` statements
to be crude and ugly. That said, sometimes there is no alternative.
Fortunately, in PHP and Perl, there usually are alternative. The
`switch` control structure is remarkably flexible in what it can do.
<span id="excerptend"></span>

<div class="vspace">

</div>

Let's compare
-------------

A typical cascading `if-elseif-else` structure:

<div class="vspace">

</div>

<div id="sourceblock1" class="sourceblock">

<div class="sourceblocktext">

<div class="php">

1.  <div class="de1">

    <span class="kw1">if</span> <span class="br0">(</span><span
    class="re0">\$result</span> <span class="sy0">==</span> <span
    class="st_h">'image/jpeg'</span><span class="br0">)</span> <span
    class="br0">{</span>

    </div>

2.  <div class="de1">

        <span class="re0">\$ext</span> <span class="sy0">=</span> <span
    class="st_h">'jpg'</span><span class="sy0">;</span>

    </div>

3.  <div class="de1">

    <span class="br0">}</span> <span class="kw1">elseif</span> <span
    class="br0">(</span><span class="re0">\$result</span> <span
    class="sy0">==</span> <span class="st0">"image/gif"</span><span
    class="br0">)</span> <span class="br0">{</span>

    </div>

4.  <div class="de1">

        <span class="re0">\$ext</span> <span class="sy0">=</span> <span
    class="st0">"gif"</span><span class="sy0">;</span>

    </div>

5.  <div class="de2">

    <span class="br0">}</span> <span class="kw1">elseif</span> <span
    class="br0">(</span><span class="re0">\$result</span> <span
    class="sy0">==</span> <span class="st0">"image/png"</span><span
    class="br0">)</span> <span class="br0">{</span>

    </div>

6.  <div class="de1">

        <span class="re0">\$ext</span> <span class="sy0">=</span> <span
    class="st0">"png"</span><span class="sy0">;</span>

    </div>

7.  <div class="de1">

    <span class="br0">}</span> <span class="kw1">else</span> <span
    class="br0">{</span>

    </div>

8.  <div class="de1">

        <span class="re0">\$ext</span> <span class="sy0">=</span> <span
    class="st0">"dat"</span><span class="sy0">;</span>

    </div>

9.  <div class="de1">

    <span class="br0">}</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.ToSwitchOrNotToSwitch?action=sourceblock&num=1)

</div>

</div>

Whereas, if we were to use a `switch` statement, we'd get:

<div class="vspace">

</div>

<div id="sourceblock2" class="sourceblock">

<div class="sourceblocktext">

<div class="php">

1.  <div class="de1">

    <span class="kw1">switch</span> <span class="br0">(</span><span
    class="re0">\$result</span><span class="br0">)</span> <span
    class="br0">{</span>

    </div>

2.  <div class="de1">

        <span class="kw1">case</span> <span
    class="st_h">'image/jpeg'</span><span class="sy0">:</span> <span
    class="re0">\$ext</span> <span class="sy0">=</span> <span
    class="st0">"jpg"</span><span class="sy0">;</span> <span
    class="kw1">break</span><span class="sy0">;</span>

    </div>

3.  <div class="de1">

        <span class="kw1">case</span> <span
    class="st_h">'image/gif'</span><span class="sy0">:</span> <span
    class="re0">\$ext</span> <span class="sy0">=</span> <span
    class="st0">"gif"</span><span class="sy0">;</span> <span
    class="kw1">break</span><span class="sy0">;</span>     

    </div>

4.  <div class="de1">

        <span class="kw1">case</span> <span
    class="st_h">'image/png'</span><span class="sy0">:</span> <span
    class="re0">\$ext</span> <span class="sy0">=</span> <span
    class="st0">"png"</span><span class="sy0">;</span> <span
    class="kw1">break</span><span class="sy0">;</span>     

    </div>

5.  <div class="de2">

        <span class="kw1">default</span><span class="sy0">:</span> <span
    class="re0">\$ext</span> <span class="sy0">=</span> <span
    class="st0">"dat"</span><span class="sy0">;</span> <span
    class="kw1">break</span><span class="sy0">;</span>

    </div>

6.  <div class="de1">

      <span class="br0">}</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.ToSwitchOrNotToSwitch?action=sourceblock&num=2)

</div>

</div>

Which seems more elegant and readable to you? I tend to vote for the
`switch` implementation over the cascading `if-elseif-else` structure.

<div class="vspace">

</div>

Another alternative
-------------------

While the above example shows the difference plainly between
`if-elseif-else` and `switch` statements, there is actually a better
alternative in this case: a lookup table.

Somewhere in your source, create a lookup table:

<div id="sourceblock3" class="sourceblock">

<div class="sourceblocktext">

<div class="php">

1.  <div class="de1">

    <span class="re0">\$mapmimetoextension</span> <span
    class="sy0">=</span> <span class="br0">(</span>

    </div>

2.  <div class="de1">

        <span class="st_h">'image/jpeg'</span> <span
    class="sy0">=\></span> <span class="st_h">'jpg'</span><span
    class="sy0">,</span>

    </div>

3.  <div class="de1">

        <span class="st_h">'image/gif'</span> <span
    class="sy0">=\></span> <span class="st_h">'gif'</span><span
    class="sy0">,</span>

    </div>

4.  <div class="de1">

        <span class="st_h">'image/png'</span> <span
    class="sy0">=\></span> <span class="st_h">'png'</span><span
    class="sy0">,</span>

    </div>

5.  <div class="de2">

        <span class="co2">\# ... and so on</span>

    </div>

6.  <div class="de1">

    <span class="br0">)</span><span class="sy0">;</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.ToSwitchOrNotToSwitch?action=sourceblock&num=3)

</div>

</div>

Then, to determine the extension given the mimetype, you could simply
do:

<div id="sourceblock4" class="sourceblock">

<div class="sourceblocktext">

<div class="php">

1.  <div class="de1">

    <span class="re0">\$ext</span> <span class="sy0">=</span> <span
    class="kw3">isset</span><span class="br0">(</span><span
    class="re0">\$mapmimetoextension</span><span
    class="br0">[</span><span class="re0">\$mimetype</span><span
    class="br0">]</span> ? <span
    class="re0">\$mapmimetoextension</span><span
    class="br0">[</span><span class="re0">\$mimetype</span><span
    class="br0">]</span> <span class="sy0">:</span> <span
    class="st_h">'dat'</span><span class="sy0">;</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.ToSwitchOrNotToSwitch?action=sourceblock&num=4)

</div>

</div>

Which seems a lot cheaper than either the cascading `if-elseif-else` or
the `switch`. Given the desire to keep code modular, it would also
likely save on a procedure call.

That's fine for PHP, what about Perl?

<div class="vspace">

</div>

Perl Switch Constructs
----------------------

Unlike some other programming languages, Perl has no official switch or
case statement. That's because Perl doesn't need one, having many ways
to do the same thing. A bare block is particularly convenient for doing
case structures (multiway switches). Here's one:

<div class="vspace">

</div>

<div id="sourceblock5" class="sourceblock">

<div class="sourceblocktext">

<div class="perl">

1.  <div class="de1">

    SWITCH<span class="sy0">:</span> <span class="br0">{</span>

    </div>

2.  <div class="de1">

        <span class="kw1">if</span> <span class="br0">(</span><span
    class="co2">/\^abc/</span><span class="br0">)</span> <span
    class="br0">{</span> <span class="re0">\$abc</span> <span
    class="sy0">=</span> <span class="nu0">1</span><span
    class="sy0">;</span> <span class="kw1">last</span> SWITCH<span
    class="sy0">;</span> <span class="br0">}</span>

    </div>

3.  <div class="de1">

        <span class="kw1">if</span> <span class="br0">(</span><span
    class="co2">/\^def/</span><span class="br0">)</span> <span
    class="br0">{</span> <span class="re0">\$def</span> <span
    class="sy0">=</span> <span class="nu0">1</span><span
    class="sy0">;</span> <span class="kw1">last</span> SWITCH<span
    class="sy0">;</span> <span class="br0">}</span>

    </div>

4.  <div class="de1">

        <span class="kw1">if</span> <span class="br0">(</span><span
    class="co2">/\^xyz/</span><span class="br0">)</span> <span
    class="br0">{</span> <span class="re0">\$xyz</span> <span
    class="sy0">=</span> <span class="nu0">1</span><span
    class="sy0">;</span> <span class="kw1">last</span> SWITCH<span
    class="sy0">;</span> <span class="br0">}</span>

    </div>

5.  <div class="de2">

        <span class="re0">\$nothing</span> <span class="sy0">=</span>
    <span class="nu0">1</span><span class="sy0">;</span>

    </div>

6.  <div class="de1">

    <span class="br0">}</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.ToSwitchOrNotToSwitch?action=sourceblock&num=5)

</div>

</div>

and here's another:

<div class="vspace">

</div>

<div id="sourceblock6" class="sourceblock">

<div class="sourceblocktext">

<div class="perl">

1.  <div class="de1">

    SWITCH<span class="sy0">:</span> <span class="br0">{</span>

    </div>

2.  <div class="de1">

        <span class="co2">/\^abc/</span>      <span
    class="sy0">&&</span> <span class="kw1">do</span> <span
    class="br0">{</span> <span class="re0">\$abc</span> <span
    class="sy0">=</span> <span class="nu0">1</span><span
    class="sy0">;</span> <span class="kw1">last</span> SWITCH<span
    class="sy0">;</span> <span class="br0">}</span><span
    class="sy0">;</span>

    </div>

3.  <div class="de1">

        <span class="co2">/\^def/</span>      <span
    class="sy0">&&</span> <span class="kw1">do</span> <span
    class="br0">{</span> <span class="re0">\$def</span> <span
    class="sy0">=</span> <span class="nu0">1</span><span
    class="sy0">;</span> <span class="kw1">last</span> SWITCH<span
    class="sy0">;</span> <span class="br0">}</span><span
    class="sy0">;</span>

    </div>

4.  <div class="de1">

        <span class="co2">/\^xyz/</span>      <span
    class="sy0">&&</span> <span class="kw1">do</span> <span
    class="br0">{</span> <span class="re0">\$xyz</span> <span
    class="sy0">=</span> <span class="nu0">1</span><span
    class="sy0">;</span> <span class="kw1">last</span> SWITCH<span
    class="sy0">;</span> <span class="br0">}</span><span
    class="sy0">;</span>

    </div>

5.  <div class="de2">

        <span class="re0">\$nothing</span> <span class="sy0">=</span>
    <span class="nu0">1</span><span class="sy0">;</span>

    </div>

6.  <div class="de1">

    <span class="br0">}</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.ToSwitchOrNotToSwitch?action=sourceblock&num=6)

</div>

</div>

Both of these constructs operate on matching the `$_` variable. I prefer
the second form (no nasty if's going on there. Note that the both forms
can be much more convoluted there. There is no need to necessarily
restrict one's self to making comparisons with the `$_` variable.
Basically *any* test can be made in the case portion of the switch
construct.

What makes this work is the `last SWITCH;` statement. It basically quits
the switch when it is executed.

<div class="vspace">

</div>

</div>
