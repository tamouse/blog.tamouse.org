<div id="wikitext">

Link: [Float containment - Articles - Colin Aarts, freelance web
developer](http://colinaarts.com/articles/float-containment/#summary)

<div class="vspace">

</div>

<div class="round lrindent quote">

Summary
-------

<span id="excerpt"></span> Cross-browser float containment can be
achieved by applying `overflow: hidden` (for modern browsers) and
`hasLayout` (for legacy versions of Internet Explorer) to the containing
element of the float(s). The following code shows the easiest-to-use
setup, in my opinion. `#foo` represents the containing element. <span
id="excerptend"></span>

<div class="vspace">

</div>

<div id="sourceblock1" class="sourceblock">

<div class="sourceblocktext">

<div class="css">

1.  <div class="de1">

    <span class="re0">\#foo</span> <span class="br0">{</span>

    </div>

2.  <div class="de1">

      <span class="kw1">overflow</span><span class="sy0">:</span> <span
    class="kw2">hidden</span><span class="sy0">;</span> <span
    class="coMULTI">/\* For modern browsers and IE7 \*/</span>

    </div>

3.  <div class="de1">

      <span class="kw1">display</span><span class="sy0">:</span>
    inline-block<span class="sy0">;</span> <span class="coMULTI">/\* For
    IE6 \*/</span>

    </div>

4.  <div class="de1">

    <span class="br0">}</span>

    </div>

5.  <div class="de2">

     

    </div>

6.  <div class="de1">

    <span class="re0">\#foo</span> <span class="br0">{</span> <span
    class="kw1">display</span><span class="sy0">:</span> <span
    class="kw2">block</span><span class="sy0">;</span> <span
    class="br0">}</span> <span class="coMULTI">/\* For IE6 \*/</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.CSSFloatContainment?action=sourceblock&num=1)

</div>

</div>

If you cannot use overflow: hidden due to the fact that you need to have
overflowing content, the following code is recommended:

<div class="vspace">

</div>

<div id="sourceblock2" class="sourceblock">

<div class="sourceblocktext">

<div class="css">

1.  <div class="de1">

    <span class="re0">\#foo</span><span class="re2">:before</span><span
    class="sy0">,</span> <span class="coMULTI">/\* For modern
    browsers \*/</span>

    </div>

2.  <div class="de1">

    <span class="re0">\#foo</span><span class="re2">:after </span><span
    class="br0">{</span>

    </div>

3.  <div class="de1">

      <span class="kw1">content</span><span class="sy0">:</span> <span
    class="nu0">77</span><span class="sy0">;</span>

    </div>

4.  <div class="de1">

      <span class="kw1">display</span><span class="sy0">:</span>
    table<span class="sy0">;</span>

    </div>

5.  <div class="de2">

    <span class="br0">}</span>

    </div>

6.  <div class="de1">

     

    </div>

7.  <div class="de1">

    <span class="re0">\#foo</span><span class="re2">:after </span><span
    class="br0">{</span>

    </div>

8.  <div class="de1">

      <span class="kw1">clear</span><span class="sy0">:</span> <span
    class="kw2">both</span><span class="sy0">;</span>

    </div>

9.  <div class="de1">

    <span class="br0">}</span>

    </div>

10. <div class="de2">

     

    </div>

11. <div class="de1">

    <span class="re0">\#foo</span> <span class="br0">{</span> <span
    class="kw1">display</span><span class="sy0">:</span>
    inline-block<span class="sy0">;</span> <span class="br0">}</span>
    <span class="coMULTI">/\* For IE6/7 \*/</span>

    </div>

12. <div class="de1">

    <span class="re0">\#foo</span> <span class="br0">{</span> <span
    class="kw1">display</span><span class="sy0">:</span> <span
    class="kw2">block</span><span class="sy0">;</span> <span
    class="br0">}</span> <span class="coMULTI">/\* For IE6/7 \*/</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.CSSFloatContainment?action=sourceblock&num=2)

</div>

</div>

<div class="vspace">

</div>

</div>

Posted: 2012-4-6 14:38

<div class="vspace">

</div>

<div style="display: none;">

Summary:Link to an article describing in depth how to contain floated
elements Parent:(Technology.)CSS <span
class="wikiword">[IncludeMe](http://wiki.tamouse.org?n=Technology.IncludeMe?action=edit)[?](http://wiki.tamouse.org?n=Technology.IncludeMe?action=edit)</span>:[Technology.CSS](http://wiki.tamouse.org?n=Technology.CSS?action=print)
Categories:[Links](http://wiki.tamouse.org?n=Category.Links),
[BestPractices](http://wiki.tamouse.org?n=Category.BestPractices)

</div>

</div>
