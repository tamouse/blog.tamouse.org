<div id="wikitext">

Using list comprehension:

<div class="vspace">

</div>

<div id="sourceblock1" class="sourceblock">

<div class="sourceblocktext">

<div class="python">

1.  <div class="de1">

    <span class="kw1">with</span> <span class="kw2">open</span><span
    class="br0">(</span><span class="st0">"filespec"</span><span
    class="br0">)</span> <span class="kw1">as</span> f:

    </div>

2.  <div class="de1">

        lines <span class="sy0">=</span> <span
    class="br0">[</span>x.<span class="me1">strip</span> <span
    class="kw1">for</span> x <span class="kw1">in</span> f.<span
    class="me1">readlines</span><span class="br0">(</span><span
    class="br0">)</span><span class="br0">]</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.ReadAFileIntoAListStrippingNewlinesInPython?action=sourceblock&num=1)

</div>

</div>

Contrast with the
[perl](http://wiki.tamouse.org?n=Technology.Perl?action=print) idiom:

<div class="vspace">

</div>

<div id="sourceblock2" class="sourceblock">

<div class="sourceblocktext">

<div class="perl">

1.  <div class="de1">

    <span class="kw3">open</span> <span class="br0">(</span>FH<span
    class="sy0">,</span> <span class="st0">"\<filespec"</span><span
    class="br0">)</span><span class="sy0">;</span>

    </div>

2.  <div class="de1">

    <span class="re0">@lines</span> <span class="sy0">=</span> <span
    class="re4">\<FH\></span><span class="sy0">;</span>

    </div>

3.  <div class="de1">

    <span class="kw3">chomp</span><span class="br0">(</span><span
    class="re0">@lines</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.ReadAFileIntoAListStrippingNewlinesInPython?action=sourceblock&num=2)

</div>

</div>

And the same in
[Ruby](http://wiki.tamouse.org?n=Technology.Ruby?action=print):

<div class="vspace">

</div>

<div id="sourceblock3" class="sourceblock">

<div class="sourceblocktext">

<div class="ruby">

lines = <span class="kw4">IO</span>.<span
class="kw3">readlines</span><span class="br0">(</span><span
class="st0">"filespec"</span><span class="br0">)</span>.<span
class="me1">map</span><span class="br0">{</span><span
class="sy0">|</span>l<span class="sy0">|</span> l.<span
class="kw3">chomp</span><span class="br0">}</span>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.ReadAFileIntoAListStrippingNewlinesInPython?action=sourceblock&num=3)

</div>

</div>

<div class="vspace">

</div>

</div>
