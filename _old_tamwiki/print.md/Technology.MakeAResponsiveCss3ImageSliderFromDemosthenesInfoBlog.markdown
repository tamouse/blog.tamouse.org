<div id="wikitext">

Make a Responsive <span class="wikiword">CSS3</span> Image Slider
-----------------------------------------------------------------

Link: [Make A Responsive CSS3 Image
Slider](http://demosthenes.info:80/blog/627/Make-A-Responsive-CSS3-Image-Slider)

<div class="vspace">

</div>

<div class="round lrindent quote">

Previously, I’ve demonstrated how to make a [fixed-width CSS image
slider](http://demosthenes.info:80/blog/495/Make-A-CSS3-Animated-Image-Slider).
Increasingly, web developers desire solutions that not only scale across
viewport sizes, but perform well on
[mobile](http://demosthenes.info:80/blog/mobile) devices. The responsive
solution detailed here is particularly well-suited to those goals, as it
avoids <span class="wikiword">JavaScript</span> entirely, running purely
in <span class="wikiword">CSS3</span> (and thus **faster, smoother, and
with less overhead**).

The idea is very similar to the previous example: an “imagestrip”
containing all the photographs of our slider moving inside a window
element which works to restrict the visibility of elements outside it.
For this example, you’ll need four images, although in practice you
could make a strip with as many images as you wished. The sole condition
is that all the images must be exactly the same size.

<div class="vspace">

</div>

Create A Responsive Frame
-------------------------

First, we need to make the window element responsive. We do this by
inserting a copy of one of the images from the slider inside the
element, and setting an appropriate inline style:

<div class="vspace">

</div>

<div id="sourceblock1" class="sourceblock">

<div class="sourceblocktext">

<div class="html5">

1.  <div class="de1">

    <span class="sc2">\<<span class="kw2">div</span> <span
    class="kw3">id</span><span class="sy0">=</span><span
    class="st0">"window"</span>\></span>

    </div>

2.  <div class="de1">

       <span class="sc2">\<<span class="kw2">img</span> <span
    class="kw3">src</span><span class="sy0">=</span><span
    class="st0">"austin-fireworks.jpg"</span> <span
    class="kw3">alt</span><span class="sy0">=</span><span
    class="st0">""</span> <span class="kw3">style</span><span
    class="sy0">=</span><span class="st0">"max-width:
    100%;"</span>\></span>

    </div>

3.  <div class="de1">

    <span class="sc2">\<<span class="sy0">/</span><span
    class="kw2">div</span>\></span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.MakeAResponsiveCss3ImageSliderFromDemosthenesInfoBlog?action=sourceblock&num=1)

</div>

</div>

(I’m leaving the `alt` attribute blank to save on space; in production,
it would be filled out appropriately for
[accessibility](http://demosthenes.info:80/blog/accessibility) and
[SEO](http://demosthenes.info:80/blog/SEO) purposes).

The window is given a `max-width` that corresponds to the natural width
of the image (1000px, in the case of the example), as we don’t want to
show more of the imagestrip than one image. All images are floated left
to remove space at the bottom of their containers.

<div class="vspace">

</div>

<div id="sourceblock2" class="sourceblock">

<div class="sourceblocktext">

<div class="css">

1.  <div class="de1">

    div<span class="re0">\#window</span> <span class="br0">{</span>

    </div>

2.  <div class="de1">

       <span class="kw1">max-width</span><span class="sy0">:</span>
    <span class="re3">1000px</span><span class="sy0">;</span>

    </div>

3.  <div class="de1">

       <span class="kw1">position</span><span class="sy0">:</span> <span
    class="kw2">relative</span><span class="sy0">;</span>

    </div>

4.  <div class="de1">

       <span class="kw1">overflow</span><span class="sy0">:</span> <span
    class="kw2">hidden</span><span class="sy0">;</span>

    </div>

5.  <div class="de2">

    <span class="br0">}</span>

    </div>

6.  <div class="de1">

    img <span class="br0">{</span> <span class="kw1">float</span><span
    class="sy0">:</span> <span class="kw1">left</span><span
    class="sy0">;</span> <span class="br0">}</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.MakeAResponsiveCss3ImageSliderFromDemosthenesInfoBlog?action=sourceblock&num=2)

</div>

</div>

<div class="vspace">

</div>

Design a Strip of Images
------------------------

With the placeholder image added, we can create the interior imagestrip.
This will immediately obscure the placeholder, but that’s okay: **the
sole purpose of the placeholder is to make the window responsive**; it
doesn’t need to be visible.

Our HTML becomes:

<div class="vspace">

</div>

<div id="sourceblock3" class="sourceblock">

<div class="sourceblocktext">

<div class="html5">

1.  <div class="de1">

    <span class="sc2">\<<span class="kw2">div</span> <span
    class="kw3">id</span><span class="sy0">=</span><span
    class="st0">"window"</span>\></span>

    </div>

2.  <div class="de1">

       <span class="sc2">\<<span class="kw2">img</span> <span
    class="kw3">src</span><span class="sy0">=</span><span
    class="st0">"austin-fireworks.jpg"</span> <span
    class="kw3">alt</span><span class="sy0">=</span><span
    class="st0">""</span> <span class="kw3">style</span><span
    class="sy0">=</span><span class="st0">"max-width:
    100%;"</span>\></span>

    </div>

3.  <div class="de1">

       <span class="sc2">\<<span class="kw2">figure</span> <span
    class="kw3">id</span><span class="sy0">=</span><span
    class="st0">"imagestrip"</span>\></span>

    </div>

4.  <div class="de1">

          <span class="sc2">\<<span class="kw2">img</span> <span
    class="kw3">src</span><span class="sy0">=</span><span
    class="st0">"austin-fireworks.jpg"</span> <span
    class="kw3">alt</span><span class="sy0">=</span><span
    class="st0">""</span>\></span>

    </div>

5.  <div class="de2">

          <span class="sc2">\<<span class="kw2">img</span> <span
    class="kw3">src</span><span class="sy0">=</span><span
    class="st0">"taj-mahal.jpg"</span> <span class="kw3">alt</span><span
    class="sy0">=</span><span class="st0">""</span>\></span>

    </div>

6.  <div class="de1">

          <span class="sc2">\<<span class="kw2">img</span> <span
    class="kw3">src</span><span class="sy0">=</span><span
    class="st0">"ibiza.jpg"</span> <span class="kw3">alt</span><span
    class="sy0">=</span><span class="st0">""</span>\></span>

    </div>

7.  <div class="de1">

          <span class="sc2">\<<span class="kw2">img</span> <span
    class="kw3">src</span><span class="sy0">=</span><span
    class="st0">"ankor-wat.jpg"</span> <span class="kw3">alt</span><span
    class="sy0">=</span><span class="st0">""</span>\></span>

    </div>

8.  <div class="de1">

          <span class="sc2">\<<span class="kw2">img</span> <span
    class="kw3">src</span><span class="sy0">=</span><span
    class="st0">"austin-fireworks.jpg"</span> <span
    class="kw3">alt</span><span class="sy0">=</span><span
    class="st0">""</span>\></span>

    </div>

9.  <div class="de1">

       <span class="sc2">\<<span class="sy0">/</span><span
    class="kw2">figure</span>\></span>

    </div>

10. <div class="de2">

    <span class="sc2">\<<span class="sy0">/</span><span
    class="kw2">div</span>\></span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.MakeAResponsiveCss3ImageSliderFromDemosthenesInfoBlog?action=sourceblock&num=3)

</div>

</div>

Note that the same image is placed at the start and end of the strip,
allowing the animation to repeat in a smooth loop.

In our CSS, the width of `#window` is described as a percentage
multiplier of the `div` that contains it. That is, if imagestrip
contains five images, and the `div` shows just one, the `figure` is 5x
wider, or 500% the width of the container `div`.  It’s also positioned
absolutely, enabling us to describe its position relative to its
container.

<div class="vspace">

</div>

<div id="sourceblock4" class="sourceblock">

<div class="sourceblocktext">

<div class="css">

1.  <div class="de1">

    figure<span class="re0">\#imagestrip</span> <span
    class="br0">{</span>

    </div>

2.  <div class="de1">

       <span class="kw1">position</span><span class="sy0">:</span> <span
    class="kw2">absolute</span><span class="sy0">;</span>

    </div>

3.  <div class="de1">

       <span class="kw1">width</span><span class="sy0">:</span> <span
    class="re3">500%</span><span class="sy0">;</span>

    </div>

4.  <div class="de1">

       <span class="kw1">margin</span><span class="sy0">:</span> <span
    class="nu0">0</span><span class="sy0">;</span>

    </div>

5.  <div class="de2">

       <span class="kw1">top</span><span class="sy0">:</span> <span
    class="nu0">0</span><span class="sy0">;</span>

    </div>

6.  <div class="de1">

       <span class="kw1">left</span><span class="sy0">:</span> <span
    class="nu0">0</span><span class="sy0">;</span>

    </div>

7.  <div class="de1">

    <span class="br0">}</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.MakeAResponsiveCss3ImageSliderFromDemosthenesInfoBlog?action=sourceblock&num=4)

</div>

</div>

We have to evenly divide the photographs inside the imagestrip. We could
use a layout such as flexbox to do so, but the math in standard CSS is
very simple. If we consider the `figure` element to be 100% wide, each
image needs to take up 1/5 of the horizontal space:

<div class="vspace">

</div>

         100% ÷ 5 = 20%

Which leads to the following CSS declaration:

<div class="vspace">

</div>

<div id="sourceblock5" class="sourceblock">

<div class="sourceblocktext">

<div class="css">

figure<span class="re0">\#imagestrip</span> img <span
class="br0">{</span>\
    <span class="kw1">float</span><span class="sy0">:</span> <span
class="kw1">left</span><span class="sy0">;</span>\
    <span class="kw1">width</span><span class="sy0">:</span> <span
class="re3">20%</span><span class="sy0">;</span>\
 <span class="br0">}</span>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.MakeAResponsiveCss3ImageSliderFromDemosthenesInfoBlog?action=sourceblock&num=5)

</div>

</div>

<div class="vspace">

</div>

Animate The Strip
-----------------

Finally, we have to get the imagestrip moving from left to right. If the
containing `div` is 100% wide, then each movement of the imagestrip to
the left will be measured in increments of that distance:

<div class="vspace">

</div>

<div id="sourceblock6" class="sourceblock">

<div class="sourceblocktext">

<div class="css">

1.  <div class="de1">

    <span class="co1">@keyframes slidy {</span>

    </div>

2.  <div class="de1">

       <span class="re3">20%</span> <span class="br0">{</span> <span
    class="kw1">left</span><span class="sy0">:</span> <span
    class="re3">0%</span><span class="sy0">;</span> <span
    class="br0">}</span>

    </div>

3.  <div class="de1">

       <span class="re3">25%</span> <span class="br0">{</span> <span
    class="kw1">left</span><span class="sy0">:</span> <span
    class="re3">-100%</span><span class="sy0">;</span> <span
    class="br0">}</span>

    </div>

4.  <div class="de1">

       <span class="re3">45%</span> <span class="br0">{</span> <span
    class="kw1">left</span><span class="sy0">:</span> <span
    class="re3">-100%</span><span class="sy0">;</span> <span
    class="br0">}</span>

    </div>

5.  <div class="de2">

       <span class="re3">50%</span> <span class="br0">{</span> <span
    class="kw1">left</span><span class="sy0">:</span> <span
    class="re3">-200%</span><span class="sy0">;</span> <span
    class="br0">}</span>

    </div>

6.  <div class="de1">

       <span class="re3">70%</span> <span class="br0">{</span> <span
    class="kw1">left</span><span class="sy0">:</span> <span
    class="re3">-200%</span><span class="sy0">;</span> <span
    class="br0">}</span>

    </div>

7.  <div class="de1">

       <span class="re3">75%</span> <span class="br0">{</span> <span
    class="kw1">left</span><span class="sy0">:</span> <span
    class="re3">-300%</span><span class="sy0">;</span> <span
    class="br0">}</span>

    </div>

8.  <div class="de1">

       <span class="re3">95%</span> <span class="br0">{</span> <span
    class="kw1">left</span><span class="sy0">:</span> <span
    class="re3">-300%</span><span class="sy0">;</span> <span
    class="br0">}</span>

    </div>

9.  <div class="de1">

       <span class="re3">100%</span> <span class="br0">{</span> <span
    class="kw1">left</span><span class="sy0">:</span> <span
    class="re3">-400%</span><span class="sy0">;</span> <span
    class="br0">}</span>&nbsp<span class="sy0">;</span>

    </div>

10. <div class="de2">

    <span class="br0">}</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.MakeAResponsiveCss3ImageSliderFromDemosthenesInfoBlog?action=sourceblock&num=6)

</div>

</div>

Each image in the slider will stay framed in the `div` for 20% of the
total length of the animation, and move for 5%.

We have to call on the animation to get things started:

<div class="vspace">

</div>

<div id="sourceblock7" class="sourceblock">

<div class="sourceblocktext">

<div class="css">

1.  <div class="de1">

    figure <span class="br0">{</span>

    </div>

2.  <div class="de1">

       <span class="kw1">position</span><span class="sy0">:</span> <span
    class="kw2">absolute</span><span class="sy0">;</span>

    </div>

3.  <div class="de1">

       <span class="kw1">width</span><span class="sy0">:</span> <span
    class="re3">500%</span><span class="sy0">;</span>

    </div>

4.  <div class="de1">

       <span class="kw1">margin</span><span class="sy0">:</span> <span
    class="nu0">0</span><span class="sy0">;</span>

    </div>

5.  <div class="de2">

       <span class="kw1">top</span><span class="sy0">:</span> <span
    class="nu0">0</span><span class="sy0">;</span>

    </div>

6.  <div class="de1">

       <span class="kw1">left</span><span class="sy0">:</span> <span
    class="nu0">0</span><span class="sy0">;</span>

    </div>

7.  <div class="de1">

       animation<span class="sy0">:</span> 30s slidy ease-in-out
    infinite<span class="sy0">;</span>

    </div>

8.  <div class="de1">

    <span class="br0">}</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.MakeAResponsiveCss3ImageSliderFromDemosthenesInfoBlog?action=sourceblock&num=7)

</div>

</div>

As you can see, making a responsive slider is in many ways easier than
making a fixed one.

(Both the keyframes and animation code is shown without [vendor
prefixes](http://demosthenes.info:80/blog/217/CSS3-Vendor-Prefixes) in
order to save on space – you can resize your browser window to see the
effect on the slider. Images by the always-excellent [Trey
Radcliff](http://stuckincustoms.com), used with permission).

creative commons licensed
-------------------------

The content of this blog is free to use in whatever way you wish under
the [Creative Commons
license](http://creativecommons.org/licenses/by-nc-sa/2.5/ca).

<div class="vspace">

</div>

</div>

<div class="vspace">

</div>

<div style="display: none;">

Summary: An animated gallery that works on all screens and devices. A
how-to on making an image slider in pure <span
class="wikiword">[CSS3](http://wiki.tamouse.org?n=Technology.CSS3?action=edit)[?](http://wiki.tamouse.org?n=Technology.CSS3?action=edit)</span>
that is responsive (i.e. in this case fluid) to container size Tags:
css, css3, howtos, web design, image slider, responsive design, fluid
design Source:
<http://demosthenes.info/blog/627/Make-A-Responsive-CSS3-Image-Slider>
Parent: (Technology.)CSS
includeme:[Technology.CSS](http://wiki.tamouse.org?n=Technology.CSS?action=print)
Categories:[HowTos](http://wiki.tamouse.org?n=Category.HowTos),
[Design](http://wiki.tamouse.org?n=Category.Design),
[Archives](http://wiki.tamouse.org?n=Category.Archives),
[CSS](http://wiki.tamouse.org?n=Category.CSS)

</div>

Page saved at: Sun, 09 Dec 2012 14:15:18 -0600

<div class="vspace">

</div>

</div>
