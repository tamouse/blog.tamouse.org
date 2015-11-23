<div id="wikitext">

<span id="excerpt"></span> Pop-up meta links or windows are all the
rage. They let you hide away and then expose additional content at the
click of a button. The [first example](#onclick) is very old school,
just tieing the onClick event of the link to a <span
class="wikiword">[JavaScript](http://wiki.tamouse.org?n=Technology.JavaScript?action=print)</span>
call to open a window. Very crude and very Web 1.0. The [second
example](#javascriptex) is a bit better, using <span
class="wikiword">[JavaScript](http://wiki.tamouse.org?n=Technology.JavaScript?action=print)</span>
to add an event handler to a link which opens the window based on the
href attribute in the link. The [third example](#jqueryex) goes all the
way to Web 2.0 utilizing
[jQuery](http://wiki.tamouse.org?n=Technology.JQuery?action=print) to
assign the event handlers to the link elements and to cause a hidden
\<div\> to float out in front of the window. Very sexy! <span
id="excerptend"></span>

<div class="vspace">

</div>

------------------------------------------------------------------------

<span id="onclick"></span>

Example 1: Use of \`onClick to directly call a some javascript with the new window to open
------------------------------------------------------------------------------------------

<div id="sourceblock1" class="sourceblock">

<div class="sourceblocktext">

<div class="html4strict">

<span class="sc2">\<<span class="kw2">A</span></span>\
 <span class="sc2">     window.status<span class="sy0">=</span><span
class="st0">'status bar text on rollover'</span></span>\
 <span class="sc2">     <span class="kw3">onClick</span><span
class="sy0">=</span><span class="st0">'window.open("url", "name",
</span>\
 <span class="sc2"> "toolbar=no, location=no, directories=no,
menubar=no, scrollbars=auto, status=no, RESIZE, width=300,
height=300")'</span></span>\
 <span class="sc2">     <span class="kw3">href</span><span
class="sy0">=</span><span
class="st0">'javascript:void(0)'</span></span>\
 <span class="sc2">  \></span>blah blah<span class="sc2">\<<span
class="sy0">/</span><span class="kw2">A</span>\></span>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.GreatExampleOfAPopUpMetaLink?action=sourceblock&num=1)

</div>

</div>

NOTE the use of the `javascript:void(0)` in the `href=` to basically do
nothing!! cool idea. Example of use:

<div class="vspace">

</div>

<div id="sourceblock2" class="sourceblock">

<div class="sourceblocktext">

<div class="html4strict">

<span class="sc2">\<<span class="kw2">p</span>\></span>While it's true
that science hasn't yet created a Stepford Society,\
  it's not for lack of trying. Our age might have once\
  qualified as a scary Sci-Fi vision:  Boomermen assert their  \
  Viagra-pumped sexuality, age-defiant women subject themselves to
poison\
  <span class="sc2">\<<span class="kw2">A</span> window.status<span
class="sy0">=</span><span class="st0">'MetaLink'</span> <span
class="kw3">onClick</span><span class="sy0">=</span><span
class="st0">"window.open('http://www.feedmag.com/html/filter/98.06cruz/98.06cruz\_margin4.html',
</span>\
 <span class="sc2"> 'margin', 'toolbar=no, location=no, directories=no,
menubar=no, scrollbars=auto, status=no, RESIZE, width=300,
height=300')"</span> </span>\
 <span class="sc2"> <span class="kw3">href</span><span
class="sy0">=</span><span
class="st0">"javascript:void(0)"</span>\></span>Botox<span
class="sc2">\<<span class="sy0">/</span><span
class="kw2">A</span>\></span>\
  injections, hyperactive children and neurotic adults get Ritalin to\
  calm down, and dieters surrender to a gleaming array of liposculpture\
  devices. If Dr. Plomin and germline genetic engineering prove
successful,\
  the old saying may well  become obsolete. There will, in fact,  be a\
  cure for stupidity. Maybe they'll find one for scientific hubris
along\
  the way.<span class="sc2">\<<span class="sy0">/</span><span
class="kw2">p</span>\></span>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.GreatExampleOfAPopUpMetaLink?action=sourceblock&num=2)

</div>

</div>

<div class="vspace">

</div>

<div class="round lrindent tip">

There are better ways to do this with javascript and invisible
\<div\>'s, mouse-over events. See [jQuery example](#jqueryex) below.

</div>

<div class="vspace">

</div>

------------------------------------------------------------------------

<span id="javascriptex"></span>

Example 2: Using javascript to modify the behavior of a link element
--------------------------------------------------------------------

The following uses stock javascript in order to make the links in the
container become pop-up links instead of jumping to the page directly.

<div class="vspace">

</div>

<div id="sourceblock3" class="sourceblock">

<div class="sourceblocktext">

<div class="css">

\<style type<span class="sy0">=</span><span
class="st0">"text/css"</span><span class="sy0">\></span>\
   <span class="sy0">\*</span> <span class="br0">{</span>\
         <span class="kw1">margin</span><span class="sy0">:</span><span
class="re3">0px</span><span class="sy0">;</span>\
         <span class="kw1">padding</span><span class="sy0">:</span><span
class="re3">0px</span><span class="sy0">;</span>\
   <span class="br0">}</span>\
   <span class="re0">\#container</span> <span class="br0">{</span>\
         <span class="kw1">color</span><span class="sy0">:</span><span
class="re0">\#555</span><span class="sy0">;</span>\
         <span class="kw1">font-size</span><span
class="sy0">:</span><span class="re3">10pt</span><span
class="sy0">;</span>\
         <span class="kw1">font-family</span><span
class="sy0">:</span><span class="st0">"Trebuchet MS"</span><span
class="sy0">,</span> Arial<span class="sy0">,</span> Verdana<span
class="sy0">,</span> Tahoma<span class="sy0">;</span>\
         <span class="kw1">width</span><span class="sy0">:</span><span
class="re3">630px</span><span class="sy0">;</span>\
         <span class="kw1">height</span><span class="sy0">:</span><span
class="re3">530px</span><span class="sy0">;</span>\
         <span class="kw1">margin-top</span><span
class="sy0">:</span><span class="re3">-215px</span><span
class="sy0">;</span>\
         <span class="kw1">margin-left</span><span
class="sy0">:</span><span class="re3">-315px</span><span
class="sy0">;</span>\
         <span class="kw1">margin</span><span class="sy0">:</span><span
class="re3">20px</span> <span class="kw2">auto</span><span
class="sy0">;</span>\
   <span class="br0">}</span>\
   ul <span class="br0">{</span>\
         <span class="kw1">list-style-type</span><span
class="sy0">:</span><span class="kw2">none</span><span
class="sy0">;</span>\
   <span class="br0">}</span>\
   ul li <span class="br0">{</span>\
         <span class="kw1">float</span><span class="sy0">:</span><span
class="kw1">left</span><span class="sy0">;</span>\
         <span class="kw1">margin</span><span class="sy0">:</span><span
class="re3">10px</span> <span class="re3">3px</span><span
class="sy0">;</span>\
   <span class="br0">}</span>\
   ul li a img <span class="br0">{</span>\
         <span class="kw1">width</span><span class="sy0">:</span><span
class="re3">200px</span><span class="sy0">;</span>\
         <span class="kw1">height</span><span class="sy0">:</span><span
class="re3">150px</span><span class="sy0">;</span>\
         <span class="kw1">padding</span><span class="sy0">:</span><span
class="re3">1px</span><span class="sy0">;</span>\
         <span class="kw1">border</span><span class="sy0">:</span><span
class="re3">1px</span> <span class="kw2">solid</span> <span
class="re0">\#999</span><span class="sy0">;</span>\
   <span class="br0">}</span>\
   \</style<span class="sy0">\></span>\
  

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.GreatExampleOfAPopUpMetaLink?action=sourceblock&num=3)

</div>

</div>

First, we add the event listener to the load event of the window. This
will cause the openNewWin function to execute once the document is
loaded. This is so the function does execute prematurely before there is
html to act upon. Note requirement to be compliant with both Firefox and
Internet Explorer.

<div class="vspace">

</div>

<div id="sourceblock4" class="sourceblock">

<div class="sourceblocktext">

<div class="javascript">

<span class="sy0">\<</span>script type<span class="sy0">=</span><span
class="st0">"text/javascript"</span><span class="sy0">\></span>\
      <span class="coMULTI">/\* \<[CDATA[ \*/</span>\
        window.<span class="me1">addEventListener</span> <span
class="sy0">?</span>\
               window.<span class="me1">addEventListener</span><span
class="br0">(</span><span class="st0">'load'</span><span
class="sy0">,</span>\
                     <span class="kw1">function</span> <span
class="br0">(</span><span class="br0">)</span> <span
class="br0">{</span>\
                         openNewWin<span class="br0">(</span><span
class="br0">)</span><span class="sy0">;</span>\
                     <span class="br0">}</span><span
class="sy0">,</span>\
                     <span class="kw2">false</span><span
class="br0">)</span> <span class="co1">// FF</span>\
         <span class="sy0">:</span>\
               window.<span class="me1">attachEvent</span><span
class="br0">(</span><span class="st0">'onload'</span><span
class="sy0">,</span>\
                     <span class="kw1">function</span> <span
class="br0">(</span><span class="br0">)</span> <span
class="br0">{</span>\
                         openNewWin<span class="br0">(</span><span
class="br0">)</span><span class="sy0">;</span>\
                      <span class="br0">}</span><span
class="br0">)</span><span class="sy0">;</span> <span class="co1">//
 IE</span>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.GreatExampleOfAPopUpMetaLink?action=sourceblock&num=4)

</div>

</div>

Here is the function that runs at load time and attaches an event to
every \<a\> element inside container.

<div class="vspace">

</div>

<div id="sourceblock5" class="sourceblock">

<div class="sourceblocktext">

<div class="javascript">

<span class="kw1">function</span> openNewWin<span
class="br0">(</span><span class="br0">)</span> <span
class="br0">{</span>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.GreatExampleOfAPopUpMetaLink?action=sourceblock&num=5)

</div>

</div>

Get an array of \<a\> elements inside the container \<div\>

<div class="vspace">

</div>

<div id="sourceblock6" class="sourceblock">

<div class="sourceblocktext">

<div class="javascript">

<span class="kw1">var</span> imgA <span class="sy0">=</span>
document.<span class="me1">getElementById</span><span
class="br0">(</span><span class="st0">'container'</span><span
class="br0">)</span>.<span class="me1">getElementsByTagName</span><span
class="br0">(</span><span class="st0">'a'</span><span
class="br0">)</span><span class="sy0">;</span>\
\
 <span class="coMULTI">/\* Cycle through each &lt;a&gt;
element \*/</span>\
\
     <span class="kw1">for</span> <span class="br0">(</span><span
class="kw1">var</span> i <span class="sy0">=</span> <span
class="nu0">0</span> <span class="sy0">;</span> i <span
class="sy0">\<</span> imgA.<span class="me1">length</span><span
class="sy0">;</span> i<span class="sy0">++</span><span
class="br0">)</span> <span class="br0">{</span>\
     <span class="coMULTI">/\* Assign an event handler to the click
event of each &lt;a&gt; element \*/</span>\
         imgA<span class="br0">[</span>i<span class="br0">]</span>.<span
class="me1">onclick</span> <span class="sy0">=</span> <span
class="kw1">function</span> <span class="br0">(</span><span
class="br0">)</span> <span class="br0">{</span>\
             <span class="coMULTI">/\* when clicked, the window will
open with the url set to\
              \* the href attribute of the given &lt;a&gt;
tag \*/</span>\
             window.<span class="me1">open</span><span
class="br0">(</span><span class="kw1">this</span>.<span
class="me1">getAttribute</span><span class="br0">(</span><span
class="st0">'href'</span><span class="br0">)</span><span
class="sy0">,</span><span class="st0">'mywin'</span><span
class="sy0">,</span><span class="st0">'width=500,height=400'</span><span
class="br0">)</span><span class="sy0">;</span>\
             <span class="coMULTI">/\* negate the remainder of the
&lt;a&gt; tags function \*/</span>\
             <span class="kw1">return</span> <span
class="kw2">false</span><span class="sy0">;</span>\
         <span class="br0">}</span> <span class="co1">// end
function</span>\
      <span class="br0">}</span> <span class="co1">// end for</span>\
 <span class="br0">}</span> <span class="co1">// end openNewWin</span>\
 <span class="coMULTI">/\* ]]\> \*/</span>\
 <span class="sy0">\</</span>script<span class="sy0">\></span>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.GreatExampleOfAPopUpMetaLink?action=sourceblock&num=6)

</div>

</div>

Nothing spectacular here, it's all done with CSS and <span
class="wikiword">[JavaScript](http://wiki.tamouse.org?n=Technology.JavaScript?action=print)</span>.

<div class="vspace">

</div>

<div id="sourceblock7" class="sourceblock">

<div class="sourceblocktext">

<div class="html4strict">

<span class="sc2">\<<span class="kw2">div</span> <span
class="kw3">id</span><span class="sy0">=</span><span
class="st0">"container"</span>\></span>\
         <span class="sc2">\<<span class="kw2">ul</span>\></span>\
         <span class="sc2">\<<span class="kw2">li</span>\>\<<span
class="kw2">a</span> <span class="kw3">href</span><span
class="sy0">=</span><span class="st0">"Picture1.jpg"</span>\></span>
<span class="sc2">\<<span class="kw2">img</span> <span
class="kw3">src</span><span class="sy0">=</span><span
class="st0">"Picture1.jpg"</span> <span class="kw3">alt</span><span
class="sy0">=</span><span class="st0">"MyPics"</span>\></span> <span
class="sc2">\<<span class="sy0">/</span><span
class="kw2">a</span>\></span> <span class="sc2">\<<span
class="sy0">/</span><span class="kw2">li</span>\></span>\
         <span class="sc2">\<<span class="kw2">li</span>\>\<<span
class="kw2">a</span> <span class="kw3">href</span><span
class="sy0">=</span><span class="st0">"Picture2.jpg"</span>\></span>
<span class="sc2">\<<span class="kw2">img</span> <span
class="kw3">src</span><span class="sy0">=</span><span
class="st0">"Picture2.jpg"</span> <span class="kw3">alt</span><span
class="sy0">=</span><span class="st0">"MyPics"</span>\></span> <span
class="sc2">\<<span class="sy0">/</span><span
class="kw2">a</span>\></span> <span class="sc2">\<<span
class="sy0">/</span><span class="kw2">li</span>\></span>\
         <span class="sc2">\<<span class="kw2">li</span>\>\<<span
class="kw2">a</span> <span class="kw3">href</span><span
class="sy0">=</span><span class="st0">"Picture3.jpg"</span>\></span>
<span class="sc2">\<<span class="kw2">img</span> <span
class="kw3">src</span><span class="sy0">=</span><span
class="st0">"Picture3.jpg"</span> <span class="kw3">alt</span><span
class="sy0">=</span><span class="st0">"MyPics"</span>\></span> <span
class="sc2">\<<span class="sy0">/</span><span
class="kw2">a</span>\></span> <span class="sc2">\<<span
class="sy0">/</span><span class="kw2">li</span>\></span>\
         <span class="sc2">\<<span class="kw2">li</span>\>\<<span
class="kw2">a</span> <span class="kw3">href</span><span
class="sy0">=</span><span class="st0">"Picture4.jpg"</span>\></span>
<span class="sc2">\<<span class="kw2">img</span> <span
class="kw3">src</span><span class="sy0">=</span><span
class="st0">"Picture4.jpg"</span> <span class="kw3">alt</span><span
class="sy0">=</span><span class="st0">"MyPics"</span>\></span> <span
class="sc2">\<<span class="sy0">/</span><span
class="kw2">a</span>\></span> <span class="sc2">\<<span
class="sy0">/</span><span class="kw2">li</span>\></span>\
         <span class="sc2">\<<span class="kw2">li</span>\>\<<span
class="kw2">a</span> <span class="kw3">href</span><span
class="sy0">=</span><span class="st0">"Picture5.jpg"</span>\></span>
<span class="sc2">\<<span class="kw2">img</span> <span
class="kw3">src</span><span class="sy0">=</span><span
class="st0">"Picture5.jpg"</span> <span class="kw3">alt</span><span
class="sy0">=</span><span class="st0">"MyPics"</span>\></span> <span
class="sc2">\<<span class="sy0">/</span><span
class="kw2">a</span>\></span> <span class="sc2">\<<span
class="sy0">/</span><span class="kw2">li</span>\></span>\
         <span class="sc2">\<<span class="kw2">li</span>\>\<<span
class="kw2">a</span> <span class="kw3">href</span><span
class="sy0">=</span><span class="st0">"Picture6.jpg"</span>\></span>
<span class="sc2">\<<span class="kw2">img</span> <span
class="kw3">src</span><span class="sy0">=</span><span
class="st0">"Picture6.jpg"</span> <span class="kw3">alt</span><span
class="sy0">=</span><span class="st0">"MyPics"</span>\></span> <span
class="sc2">\<<span class="sy0">/</span><span
class="kw2">a</span>\></span> <span class="sc2">\<<span
class="sy0">/</span><span class="kw2">li</span>\></span>\
         <span class="sc2">\<<span class="kw2">li</span>\>\<<span
class="kw2">a</span> <span class="kw3">href</span><span
class="sy0">=</span><span class="st0">"Picture7.jpg"</span>\></span>
<span class="sc2">\<<span class="kw2">img</span> <span
class="kw3">src</span><span class="sy0">=</span><span
class="st0">"Picture7.jpg"</span> <span class="kw3">alt</span><span
class="sy0">=</span><span class="st0">"MyPics"</span>\></span> <span
class="sc2">\<<span class="sy0">/</span><span
class="kw2">a</span>\></span> <span class="sc2">\<<span
class="sy0">/</span><span class="kw2">li</span>\></span>\
         <span class="sc2">\<<span class="kw2">li</span>\>\<<span
class="kw2">a</span> <span class="kw3">href</span><span
class="sy0">=</span><span class="st0">"Picture8.jpg"</span>\></span>
<span class="sc2">\<<span class="kw2">img</span> <span
class="kw3">src</span><span class="sy0">=</span><span
class="st0">"Picture8.jpg"</span> <span class="kw3">alt</span><span
class="sy0">=</span><span class="st0">"MyPics"</span>\></span> <span
class="sc2">\<<span class="sy0">/</span><span
class="kw2">a</span>\></span> <span class="sc2">\<<span
class="sy0">/</span><span class="kw2">li</span>\></span>\
         <span class="sc2">\<<span class="kw2">li</span>\>\<<span
class="kw2">a</span> <span class="kw3">href</span><span
class="sy0">=</span><span class="st0">"Picture9.jpg"</span>\></span>
<span class="sc2">\<<span class="kw2">img</span> <span
class="kw3">src</span><span class="sy0">=</span><span
class="st0">"Picture9.jpg"</span> <span class="kw3">alt</span><span
class="sy0">=</span><span class="st0">"MyPics"</span>\></span> <span
class="sc2">\<<span class="sy0">/</span><span
class="kw2">a</span>\></span> <span class="sc2">\<<span
class="sy0">/</span><span class="kw2">li</span>\></span>\
         <span class="sc2">\<<span class="sy0">/</span><span
class="kw2">ul</span>\></span>\
  <span class="sc2">\<<span class="sy0">/</span><span
class="kw2">div</span>\></span>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.GreatExampleOfAPopUpMetaLink?action=sourceblock&num=7)

</div>

</div>

This example is implemented
[here](http://portfolio.tamaratemple.com/javascriptexamples/popupwindow1.html).

<div class="vspace">

</div>

------------------------------------------------------------------------

<span id="jqueryex"></span>

Example 3: jQuery Example!
--------------------------

Same example as above only implemented using
[jQuery](http://wiki.tamouse.org?n=Technology.JQuery?action=print) and a
pop-up \<div\>.

<div class="vspace">

</div>

<div id="sourceblock8" class="sourceblock">

<div class="sourceblocktext">

<div class="css">

\<style type<span class="sy0">=</span><span
class="st0">"text/css"</span><span class="sy0">\></span>\
          <span class="sy0">\*</span> <span class="br0">{</span>\
                 <span class="kw1">margin</span><span
class="sy0">:</span><span class="re3">0px</span><span
class="sy0">;</span>\
                 <span class="kw1">padding</span><span
class="sy0">:</span><span class="re3">0px</span><span
class="sy0">;</span>\
          <span class="br0">}</span>\
          <span class="re0">\#container</span> <span
class="br0">{</span>\
                 <span class="kw1">color</span><span
class="sy0">:</span><span class="re0">\#555</span><span
class="sy0">;</span>\
                 <span class="kw1">font-size</span><span
class="sy0">:</span><span class="re3">10pt</span><span
class="sy0">;</span>\
                 <span class="kw1">font-family</span><span
class="sy0">:</span><span class="st0">"Trebuchet MS"</span><span
class="sy0">,</span> Arial<span class="sy0">,</span> Verdana<span
class="sy0">,</span> Tahoma<span class="sy0">;</span>\
                 <span class="kw1">width</span><span
class="sy0">:</span><span class="re3">60%</span><span
class="sy0">;</span>\
                 <span class="kw1">margin</span><span
class="sy0">:</span><span class="re3">20px</span> <span
class="kw2">auto</span><span class="sy0">;</span>\
          <span class="br0">}</span>\
          ul <span class="br0">{</span>\
                 <span class="kw1">list-style-type</span><span
class="sy0">:</span><span class="kw2">none</span><span
class="sy0">;</span>\
          <span class="br0">}</span>\
          ul li <span class="br0">{</span>\
                 <span class="kw1">float</span><span
class="sy0">:</span><span class="kw1">left</span><span
class="sy0">;</span>\
                 <span class="kw1">margin</span><span
class="sy0">:</span><span class="re3">10px</span> <span
class="re3">3px</span><span class="sy0">;</span>\
          <span class="br0">}</span>\
          ul li a img <span class="br0">{</span>\
                 <span class="kw1">width</span><span
class="sy0">:</span><span class="re3">100px</span><span
class="sy0">;</span>\
                 <span class="kw1">height</span><span
class="sy0">:</span><span class="re3">100px</span><span
class="sy0">;</span>\
                 <span class="kw1">padding</span><span
class="sy0">:</span><span class="re3">1px</span><span
class="sy0">;</span>\
                 <span class="kw1">border</span><span
class="sy0">:</span><span class="re3">1px</span> <span
class="kw2">solid</span> <span class="re0">\#999</span><span
class="sy0">;</span>\
          <span class="br0">}</span>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.GreatExampleOfAPopUpMetaLink?action=sourceblock&num=8)

</div>

</div>

Here we set up the CSS attributes for the viewer \<div\>. Of note,
z-index is set to a very high value to ensure that this \<div\> always
floats on top. We position it absolutely, then set it to be centered in
the viewport. Also important is that display:none be set so that the
\<div\> doesn't render immediately upon loading. We want to wait to
render it when the user clicks on one of the thumbnails.

Continuing:

<div id="sourceblock9" class="sourceblock">

<div class="sourceblocktext">

<div class="css">

<span class="re0">\#viewer</span> <span class="br0">{</span>\
                 <span class="kw1">z-index</span><span
class="sy0">:</span> <span class="nu0">99</span><span
class="sy0">;</span>\
                 <span class="kw1">width</span><span
class="sy0">:</span> <span class="re3">500px</span><span
class="sy0">;</span>\
                 <span class="kw1">height</span><span
class="sy0">:</span> <span class="re3">500px</span><span
class="sy0">;</span>\
                 <span class="kw1">position</span><span
class="sy0">:</span> <span class="kw2">absolute</span><span
class="sy0">;</span>\
                 <span class="kw1">display</span><span
class="sy0">:</span> <span class="kw2">none</span><span
class="sy0">;</span>\
                 <span class="kw1">left</span><span class="sy0">:</span>
<span class="re3">50%</span><span class="sy0">;</span>\
                 <span class="kw1">top</span><span class="sy0">:</span>
<span class="re3">50%</span><span class="sy0">;</span>\
                 <span class="kw1">margin-left</span><span
class="sy0">:</span> <span class="re3">-250px</span><span
class="sy0">;</span>\
                 <span class="kw1">margin-top</span><span
class="sy0">:</span> <span class="re3">-250px</span><span
class="sy0">;</span>\
                 <span class="kw1">text-align</span><span
class="sy0">:</span> <span class="kw2">center</span><span
class="sy0">;</span>\
                 <span class="kw1">background-color</span><span
class="sy0">:</span> <span class="re0">\#999900</span><span
class="sy0">;</span>\
         <span class="br0">}</span>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.GreatExampleOfAPopUpMetaLink?action=sourceblock&num=9)

</div>

</div>

This sets up the CSS for the \<img\> tab inside the viewer \<div\>.
Nothing really remarkable here.

<div class="vspace">

</div>

<div id="sourceblock10" class="sourceblock">

<div class="sourceblocktext">

<div class="css">

<span class="re0">\#viewer</span> img <span class="br0">{</span>\
                 <span class="kw1">width</span><span
class="sy0">:</span> <span class="re3">400px</span><span
class="sy0">;</span>\
                 <span class="kw1">height</span><span
class="sy0">:</span> <span class="re3">400px</span><span
class="sy0">;</span>\
                 <span class="kw1">margin</span><span
class="sy0">:</span> <span class="kw2">auto</span><span
class="sy0">;</span>\
                 <span class="kw1">padding</span><span
class="sy0">:</span> <span class="re3">10px</span><span
class="sy0">;</span>\
                 <span class="kw1">border</span><span
class="sy0">:</span> <span class="re3">1px</span> <span
class="kw2">solid</span> <span class="re0">\#999</span><span
class="sy0">;</span>\
         <span class="br0">}</span>\
         \</style<span class="sy0">\></span>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.GreatExampleOfAPopUpMetaLink?action=sourceblock&num=10)

</div>

</div>

This is all the jQuery that is needed to render the functionality we
want. Much simpler and shorter than the <span
class="wikiword">[JavaScript](http://wiki.tamouse.org?n=Technology.JavaScript?action=print)</span>
above!

<div class="vspace">

</div>

<div id="sourceblock11" class="sourceblock">

<div class="sourceblocktext">

<div class="javascript">

<span class="sy0">\<</span>script type<span class="sy0">=</span><span
class="st0">"text/javascript"</span> charset<span
class="sy0">=</span><span class="st0">"utf-8"</span><span
class="sy0">\></span>\
         <span class="coMULTI">/\* \<![CDATA[ \*/</span>\
                 \$<span class="br0">(</span>document<span
class="br0">)</span>.<span class="me1">ready</span><span
class="br0">(</span><span class="kw1">function</span><span
class="br0">(</span><span class="br0">)</span><span class="br0">{</span>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.GreatExampleOfAPopUpMetaLink?action=sourceblock&num=11)

</div>

</div>

First, tell the viewer to hide. This should already be true, but it's
best to make sure.

<div class="vspace">

</div>

<div id="sourceblock12" class="sourceblock">

<div class="sourceblocktext">

<div class="javascript">

\$<span class="br0">(</span><span class="st0">"\#viewer"</span><span
class="br0">)</span>.<span class="me1">hide</span><span
class="br0">(</span><span class="br0">)</span><span class="sy0">;</span>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.GreatExampleOfAPopUpMetaLink?action=sourceblock&num=12)

</div>

</div>

This goes through every \<a\> tag in container and binds an event
handler to the click event of each tag. The event handler changes the
viewer's \<img\> tag src attribute to be that of the \<a\> tags href
attribute, then causes the viewer to appear in a nice sweeping motion.

<div class="vspace">

</div>

<div id="sourceblock13" class="sourceblock">

<div class="sourceblocktext">

<div class="javascript">

\$<span class="br0">(</span><span class="st0">"a"</span><span
class="sy0">,</span><span class="st0">"\#container"</span><span
class="br0">)</span>.<span class="me1">click</span><span
class="br0">(</span><span class="kw1">function</span><span
class="br0">(</span>event<span class="br0">)</span><span
class="br0">{</span>\
                                 \$<span class="br0">(</span><span
class="st0">"img"</span><span class="sy0">,</span><span
class="st0">"\#viewer"</span><span class="br0">)</span>.<span
class="me1">attr</span><span class="br0">(</span><span
class="st0">"src"</span><span class="sy0">,</span> \$<span
class="br0">(</span><span class="kw1">this</span><span
class="br0">)</span>.<span class="me1">attr</span><span
class="br0">(</span><span class="st0">"href"</span><span
class="br0">)</span><span class="br0">)</span><span
class="sy0">;</span>\
                                 \$<span class="br0">(</span><span
class="st0">"\#viewer"</span><span class="br0">)</span>.<span
class="me1">show</span><span class="br0">(</span><span
class="nu0">200</span><span class="br0">)</span><span
class="sy0">;</span>\
                                 event.<span
class="me1">preventDefault</span><span class="br0">(</span><span
class="br0">)</span><span class="sy0">;</span>\
                         <span class="br0">}</span><span
class="br0">)</span><span class="sy0">;</span>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.GreatExampleOfAPopUpMetaLink?action=sourceblock&num=13)

</div>

</div>

This binds an event to the input button on the viewer \<div\> that
causes the viewer to shrink down and disappear in a nice animation.

<div class="vspace">

</div>

<div id="sourceblock14" class="sourceblock">

<div class="sourceblocktext">

<div class="javascript">

\$<span class="br0">(</span><span class="st0">"input:button"</span><span
class="sy0">,</span><span class="st0">"\#viewer"</span><span
class="br0">)</span>.<span class="me1">click</span><span
class="br0">(</span><span class="kw1">function</span><span
class="br0">(</span><span class="br0">)</span><span
class="br0">{</span>\
                                 \$<span class="br0">(</span><span
class="st0">"\#viewer"</span><span class="br0">)</span>.<span
class="me1">hide</span><span class="br0">(</span><span
class="nu0">200</span><span class="br0">)</span><span
class="sy0">;</span>\
                         <span class="br0">}</span><span
class="br0">)</span><span class="sy0">;</span>\
                 <span class="br0">}</span><span
class="br0">)</span><span class="sy0">;</span>\
         <span class="coMULTI">/\* ]]\> \*/</span>\
         <span class="sy0">\</</span>script<span class="sy0">\></span>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.GreatExampleOfAPopUpMetaLink?action=sourceblock&num=14)

</div>

</div>

Same container structure as before.

<div class="vspace">

</div>

<div id="sourceblock15" class="sourceblock">

<div class="sourceblocktext">

<div class="html4strict">

<span class="sc2">\<<span class="kw2">div</span> <span
class="kw3">id</span><span class="sy0">=</span><span
class="st0">"container"</span>\></span>\
 <span class="sc2">\<<span class="kw2">ul</span>\></span>\
 <span class="sc2">\<<span class="kw2">li</span>\>\<<span
class="kw2">a</span> <span class="kw3">href</span><span
class="sy0">=</span><span
class="st0">"images/Picture1.jpg"</span>\></span> <span
class="sc2">\<<span class="kw2">img</span> <span
class="kw3">src</span><span class="sy0">=</span><span
class="st0">"images/Picture1.jpg"</span> <span
class="kw3">alt</span><span class="sy0">=</span><span
class="st0">"MyPics"</span><span class="sy0">/</span>\></span> <span
class="sc2">\<<span class="sy0">/</span><span
class="kw2">a</span>\></span> <span class="sc2">\<<span
class="sy0">/</span><span class="kw2">li</span>\></span>\
 <span class="sc2">\<<span class="kw2">li</span>\>\<<span
class="kw2">a</span> <span class="kw3">href</span><span
class="sy0">=</span><span
class="st0">"images/Picture2.jpg"</span>\></span> <span
class="sc2">\<<span class="kw2">img</span> <span
class="kw3">src</span><span class="sy0">=</span><span
class="st0">"images/Picture2.jpg"</span> <span
class="kw3">alt</span><span class="sy0">=</span><span
class="st0">"MyPics"</span><span class="sy0">/</span>\></span> <span
class="sc2">\<<span class="sy0">/</span><span
class="kw2">a</span>\></span> <span class="sc2">\<<span
class="sy0">/</span><span class="kw2">li</span>\></span>\
 <span class="sc2">\<<span class="kw2">li</span>\>\<<span
class="kw2">a</span> <span class="kw3">href</span><span
class="sy0">=</span><span
class="st0">"images/Picture3.jpg"</span>\></span> <span
class="sc2">\<<span class="kw2">img</span> <span
class="kw3">src</span><span class="sy0">=</span><span
class="st0">"images/Picture3.jpg"</span> <span
class="kw3">alt</span><span class="sy0">=</span><span
class="st0">"MyPics"</span><span class="sy0">/</span>\></span> <span
class="sc2">\<<span class="sy0">/</span><span
class="kw2">a</span>\></span> <span class="sc2">\<<span
class="sy0">/</span><span class="kw2">li</span>\></span>\
 <span class="sc2">\<<span class="kw2">li</span>\>\<<span
class="kw2">a</span> <span class="kw3">href</span><span
class="sy0">=</span><span
class="st0">"images/Picture4.jpg"</span>\></span> <span
class="sc2">\<<span class="kw2">img</span> <span
class="kw3">src</span><span class="sy0">=</span><span
class="st0">"images/Picture4.jpg"</span> <span
class="kw3">alt</span><span class="sy0">=</span><span
class="st0">"MyPics"</span><span class="sy0">/</span>\></span> <span
class="sc2">\<<span class="sy0">/</span><span
class="kw2">a</span>\></span> <span class="sc2">\<<span
class="sy0">/</span><span class="kw2">li</span>\></span>\
 <span class="sc2">\<<span class="kw2">li</span>\>\<<span
class="kw2">a</span> <span class="kw3">href</span><span
class="sy0">=</span><span
class="st0">"images/Picture5.jpg"</span>\></span> <span
class="sc2">\<<span class="kw2">img</span> <span
class="kw3">src</span><span class="sy0">=</span><span
class="st0">"images/Picture5.jpg"</span> <span
class="kw3">alt</span><span class="sy0">=</span><span
class="st0">"MyPics"</span><span class="sy0">/</span>\></span> <span
class="sc2">\<<span class="sy0">/</span><span
class="kw2">a</span>\></span> <span class="sc2">\<<span
class="sy0">/</span><span class="kw2">li</span>\></span>\
 <span class="sc2">\<<span class="kw2">li</span>\>\<<span
class="kw2">a</span> <span class="kw3">href</span><span
class="sy0">=</span><span
class="st0">"images/Picture6.jpg"</span>\></span> <span
class="sc2">\<<span class="kw2">img</span> <span
class="kw3">src</span><span class="sy0">=</span><span
class="st0">"images/Picture6.jpg"</span> <span
class="kw3">alt</span><span class="sy0">=</span><span
class="st0">"MyPics"</span><span class="sy0">/</span>\></span> <span
class="sc2">\<<span class="sy0">/</span><span
class="kw2">a</span>\></span> <span class="sc2">\<<span
class="sy0">/</span><span class="kw2">li</span>\></span>\
 <span class="sc2">\<<span class="kw2">li</span>\>\<<span
class="kw2">a</span> <span class="kw3">href</span><span
class="sy0">=</span><span
class="st0">"images/Picture7.jpg"</span>\></span> <span
class="sc2">\<<span class="kw2">img</span> <span
class="kw3">src</span><span class="sy0">=</span><span
class="st0">"images/Picture7.jpg"</span> <span
class="kw3">alt</span><span class="sy0">=</span><span
class="st0">"MyPics"</span><span class="sy0">/</span>\></span> <span
class="sc2">\<<span class="sy0">/</span><span
class="kw2">a</span>\></span> <span class="sc2">\<<span
class="sy0">/</span><span class="kw2">li</span>\></span>\
 <span class="sc2">\<<span class="kw2">li</span>\>\<<span
class="kw2">a</span> <span class="kw3">href</span><span
class="sy0">=</span><span
class="st0">"images/Picture8.jpg"</span>\></span> <span
class="sc2">\<<span class="kw2">img</span> <span
class="kw3">src</span><span class="sy0">=</span><span
class="st0">"images/Picture8.jpg"</span> <span
class="kw3">alt</span><span class="sy0">=</span><span
class="st0">"MyPics"</span><span class="sy0">/</span>\></span> <span
class="sc2">\<<span class="sy0">/</span><span
class="kw2">a</span>\></span> <span class="sc2">\<<span
class="sy0">/</span><span class="kw2">li</span>\></span>\
 <span class="sc2">\<<span class="kw2">li</span>\>\<<span
class="kw2">a</span> <span class="kw3">href</span><span
class="sy0">=</span><span
class="st0">"images/Picture9.jpg"</span>\></span> <span
class="sc2">\<<span class="kw2">img</span> <span
class="kw3">src</span><span class="sy0">=</span><span
class="st0">"images/Picture9.jpg"</span> <span
class="kw3">alt</span><span class="sy0">=</span><span
class="st0">"MyPics"</span><span class="sy0">/</span>\></span> <span
class="sc2">\<<span class="sy0">/</span><span
class="kw2">a</span>\></span> <span class="sc2">\<<span
class="sy0">/</span><span class="kw2">li</span>\></span>\
 <span class="sc2">\<<span class="kw2">li</span>\>\<<span
class="kw2">a</span> <span class="kw3">href</span><span
class="sy0">=</span><span
class="st0">"images/Picture10.jpg"</span>\></span> <span
class="sc2">\<<span class="kw2">img</span> <span
class="kw3">src</span><span class="sy0">=</span><span
class="st0">"images/Picture10.jpg"</span> <span
class="kw3">alt</span><span class="sy0">=</span><span
class="st0">"MyPics"</span><span class="sy0">/</span>\></span> <span
class="sc2">\<<span class="sy0">/</span><span
class="kw2">a</span>\></span> <span class="sc2">\<<span
class="sy0">/</span><span class="kw2">li</span>\></span>\
 <span class="sc2">\<<span class="sy0">/</span><span
class="kw2">ul</span>\></span>\
 <span class="sc2">\<<span class="kw2">div</span> <span
class="kw3">style</span><span class="sy0">=</span><span
class="st0">"clear:both"</span>\>\<<span class="sy0">/</span><span
class="kw2">div</span>\></span>\
 <span class="sc2">\<<span class="sy0">/</span><span
class="kw2">div</span>\></span>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.GreatExampleOfAPopUpMetaLink?action=sourceblock&num=15)

</div>

</div>

Here is the viewer \<div\> which is pretty simple, Just an image and a
button to display.

<div class="vspace">

</div>

<div id="sourceblock16" class="sourceblock">

<div class="sourceblocktext">

<div class="html4strict">

<span class="sc2">\<<span class="kw2">div</span> <span
class="kw3">id</span><span class="sy0">=</span><span
class="st0">"viewer"</span>\></span>\
 <span class="sc2">\<<span class="kw2">img</span><span
class="sy0">/</span>\></span>\
 <span class="sc2">\<<span class="kw2">br</span> <span
class="sy0">/</span>\></span>\
 <span class="sc2">\<<span class="kw2">input</span> <span
class="kw3">type</span><span class="sy0">=</span><span
class="st0">"button"</span> <span class="kw3">name</span><span
class="sy0">=</span><span class="st0">"close"</span> <span
class="kw3">value</span><span class="sy0">=</span><span
class="st0">"Close"</span> <span class="sy0">/</span>\></span>\
 <span class="sc2">\<<span class="sy0">/</span><span
class="kw2">div</span>\></span>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.GreatExampleOfAPopUpMetaLink?action=sourceblock&num=16)

</div>

</div>

A demo of this is available
[here](http://portfolio.tamaratemple.com/javascriptexamples/popupwindow2.html).

<div class="vspace">

</div>

------------------------------------------------------------------------

<span id="jqueryuiex"></span>

Example 4: A jQuery UI example
------------------------------

**Update:** From a commenter on facebook, comes the following
utilitizing jQueryUI, an extention to jQuery:

Kate wrote:\
btw... Including jQueryUI and popups are even simpler.

<div class="vspace">

</div>

<div id="sourceblock17" class="sourceblock">

<div class="sourceblocktext">

<div class="javascript">

\$<span class="br0">(</span> <span
class="st0">'button\#somebutton'</span> <span class="br0">)</span>.<span
class="me1">click</span><span class="br0">(</span> <span
class="kw1">function</span><span class="br0">(</span><span
class="br0">)</span> <span class="br0">{</span>\
\
      \$<span class="br0">(</span> <span class="st0">'\<div title="Popup
Title"\>Popup Text\</div\>'</span> <span class="br0">)</span>.<span
class="me1">dialog</span><span class="br0">(</span> <span
class="br0">{</span>\
\
         buttons<span class="sy0">:</span> <span class="br0">{</span>\
            <span class="st0">'Done'</span> <span class="sy0">:</span>
<span class="kw1">function</span><span class="br0">(</span><span
class="br0">)</span> <span class="br0">{</span> \$<span
class="br0">(</span> <span class="kw1">this</span> <span
class="br0">)</span>.<span class="me1">dialog</span><span
class="br0">(</span> <span class="st0">'close'</span> <span
class="br0">)</span><span class="sy0">;</span> <span
class="br0">}</span>\
         <span class="br0">}</span>\
\
      <span class="br0">}</span> <span class="br0">)</span><span
class="sy0">;</span>\
\
   <span class="br0">}</span> <span class="br0">)</span><span
class="sy0">;</span><span class="st0">"</span>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.GreatExampleOfAPopUpMetaLink?action=sourceblock&num=17)

</div>

</div>

Here below is the example above reworked to use jQuery UI widgets:

First the css:

<div class="vspace">

</div>

<div id="sourceblock18" class="sourceblock">

<div class="sourceblocktext">

<div class="css">

\<style type<span class="sy0">=</span><span
class="st0">"text/css"</span><span class="sy0">\></span>\
 <span class="sy0">\*</span> <span class="br0">{</span>\
    <span class="kw1">margin</span><span class="sy0">:</span><span
class="re3">0px</span><span class="sy0">;</span>\
    <span class="kw1">padding</span><span class="sy0">:</span><span
class="re3">0px</span><span class="sy0">;</span>\
 <span class="br0">}</span>\
 <span class="re0">\#container</span> <span class="br0">{</span>\
    <span class="kw1">color</span><span class="sy0">:</span><span
class="re0">\#555</span><span class="sy0">;</span>\
    <span class="kw1">font-size</span><span class="sy0">:</span><span
class="re3">10pt</span><span class="sy0">;</span>\
    <span class="kw1">font-family</span><span class="sy0">:</span><span
class="st0">"Trebuchet MS"</span><span class="sy0">,</span> Arial<span
class="sy0">,</span> Verdana<span class="sy0">,</span> Tahoma<span
class="sy0">;</span>\
    <span class="kw1">width</span><span class="sy0">:</span><span
class="re3">60%</span><span class="sy0">;</span>\
    <span class="kw1">margin</span><span class="sy0">:</span><span
class="re3">20px</span> <span class="kw2">auto</span><span
class="sy0">;</span>\
 <span class="br0">}</span>\
 ul <span class="br0">{</span>\
    <span class="kw1">list-style-type</span><span
class="sy0">:</span><span class="kw2">none</span><span
class="sy0">;</span>\
 <span class="br0">}</span>\
 ul li <span class="br0">{</span>\
    <span class="kw1">float</span><span class="sy0">:</span><span
class="kw1">left</span><span class="sy0">;</span>\
    <span class="kw1">margin</span><span class="sy0">:</span><span
class="re3">10px</span> <span class="re3">3px</span><span
class="sy0">;</span>\
 <span class="br0">}</span>\
 ul li a img <span class="br0">{</span>\
    <span class="kw1">width</span><span class="sy0">:</span><span
class="re3">100px</span><span class="sy0">;</span>\
    <span class="kw1">height</span><span class="sy0">:</span><span
class="re3">100px</span><span class="sy0">;</span>\
    <span class="kw1">padding</span><span class="sy0">:</span><span
class="re3">1px</span><span class="sy0">;</span>\
    <span class="kw1">border</span><span class="sy0">:</span><span
class="re3">1px</span> <span class="kw2">solid</span> <span
class="re0">\#999</span><span class="sy0">;</span>\
 <span class="br0">}</span>\
 \</style<span class="sy0">\></span>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.GreatExampleOfAPopUpMetaLink?action=sourceblock&num=18)

</div>

</div>

Next, the jQuery to set up the dialog box:

<div class="vspace">

</div>

<div id="sourceblock19" class="sourceblock">

<div class="sourceblocktext">

<div class="javascript">

<span class="sy0">\<</span>script type<span class="sy0">=</span><span
class="st0">"text/javascript"</span> charset<span
class="sy0">=</span><span class="st0">"utf-8"</span><span
class="sy0">\></span>\
 <span class="coMULTI">/\* \<![CDATA[ \*/</span>\
 \$<span class="br0">(</span>document<span class="br0">)</span>.<span
class="me1">ready</span><span class="br0">(</span><span
class="kw1">function</span><span class="br0">(</span><span
class="br0">)</span><span class="br0">{</span>\
   \$<span class="br0">(</span><span class="st0">"a"</span><span
class="sy0">,</span><span class="st0">"\#container"</span><span
class="br0">)</span>.<span class="me1">click</span><span
class="br0">(</span><span class="kw1">function</span><span
class="br0">(</span>event<span class="br0">)</span><span
class="br0">{</span>\
   \$<span class="br0">(</span><span class="st0">"img"</span><span
class="sy0">,</span><span class="st0">"\#viewer"</span><span
class="br0">)</span>.<span class="me1">attr</span><span
class="br0">(</span><span class="st0">"src"</span><span
class="sy0">,</span> \$<span class="br0">(</span><span
class="kw1">this</span><span class="br0">)</span>.<span
class="me1">attr</span><span class="br0">(</span><span
class="st0">"href"</span><span class="br0">)</span><span
class="br0">)</span><span class="sy0">;</span>\
   \$<span class="br0">(</span><span class="st0">"\#viewer"</span><span
class="br0">)</span>.<span class="me1">dialog</span><span
class="br0">(</span><span class="st0">'open'</span><span
class="br0">)</span><span class="sy0">;</span>\
   event.<span class="me1">preventDefault</span><span
class="br0">(</span><span class="br0">)</span><span
class="sy0">;</span>\
 <span class="br0">}</span><span class="br0">)</span><span
class="sy0">;</span>\
\
 <span class="kw1">var</span> dialogOpts <span class="sy0">=</span>
<span class="br0">{</span>\
   autoOpen<span class="sy0">:</span> <span
class="kw2">false</span><span class="sy0">,</span>\
   modal<span class="sy0">:</span> <span class="kw2">true</span><span
class="sy0">,</span>\
   show<span class="sy0">:</span> <span class="st0">'fold'</span><span
class="sy0">,</span>\
   hide<span class="sy0">:</span> <span class="st0">'fold'</span><span
class="sy0">,</span>\
   height<span class="sy0">:</span> <span class="nu0">600</span><span
class="sy0">,</span>\
   width<span class="sy0">:</span> <span class="nu0">450</span><span
class="sy0">,</span>\
   buttons<span class="sy0">:</span> <span class="br0">{</span><span
class="st0">"Close"</span> <span class="sy0">:</span>\
     <span class="kw1">function</span><span class="br0">(</span><span
class="br0">{</span>\$<span class="br0">(</span><span
class="kw1">this</span><span class="br0">)</span>.<span
class="me1">dialog</span><span class="br0">(</span><span
class="st0">'close'</span><span class="br0">)</span><span
class="br0">}</span><span class="br0">}</span><span
class="br0">}</span>\
 \$<span class="br0">(</span><span class="st0">"\#viewer"</span><span
class="br0">)</span>.<span class="me1">dialog</span><span
class="br0">(</span>dialogOpts<span class="br0">)</span><span
class="sy0">;</span>\
 <span class="br0">}</span><span class="br0">)</span><span
class="sy0">;</span>\
 <span class="coMULTI">/\* ]]\> \*/</span>\
 <span class="sy0">\</</span>script<span class="sy0">\></span>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.GreatExampleOfAPopUpMetaLink?action=sourceblock&num=19)

</div>

</div>

The body of the document is mostly unchanged, except for the viewer
\<div\>:

<div class="vspace">

</div>

<div id="sourceblock20" class="sourceblock">

<div class="sourceblocktext">

<div class="html4strict">

<span class="sc2">\<<span class="kw2">div</span> <span
class="kw3">id</span><span class="sy0">=</span><span
class="st0">"viewer"</span> <span class="kw3">title</span><span
class="sy0">=</span><span class="st0">"Image Viewer"</span>\></span>\
   <span class="sc2">\<<span class="kw2">p</span>\>\<<span
class="kw2">img</span><span class="sy0">/</span> <span
class="kw3">style</span><span class="sy0">=</span><span
class="st0">"width: 400px; height: 400px; border: 1pt solid \#DDD;
padding: 10px;"</span>\>\<<span class="sy0">/</span><span
class="kw2">p</span>\></span>\
 <span class="sc2">\<<span class="sy0">/</span><span
class="kw2">div</span>\></span>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.GreatExampleOfAPopUpMetaLink?action=sourceblock&num=20)

</div>

</div>

An example of this is shown
[here](http://portfolio.tamaratemple.com/javascriptexamples/popupwindow3.html).

There's not a whole lot of difference between the two jQuery examples,
but the it's possibly simpler to use the jQuery UI dialog function as it
is styled according to the jquery ui style sheet. jQuery styles can be
created and downloaded via the ThemeRoller application on the [jQuery UI
web site](http://www.jqueryui.com).

<div class="vspace">

</div>

------------------------------------------------------------------------

So there you have it. Pop-ups in four different flavours. I know which
one I'll be using from now on.

<div class="vspace">

</div>

[How to create a stunning and smooth popup using jQuery - yensdesign - Tutorials, Web Design and Coding](http://yensdesign.com/2008/09/how-to-create-a-stunning-and-smooth-popup-using-jquery/)
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<div class="round lrindent quote">

Nowadays, websites are more and more rich and interactive and users are
becoming more and more critical with all things in websites. Using
windows popup to show important information are in the air and We are
going to learn how to create a stunning and great window popup from the
scratch using jQuery in a simple and clean tutorial, the first one of
this new blog.

</div>

<div class="vspace">

</div>

<div style="display: none;">

Summary:a javascript web programming example showing how to make a popup
link Parent:(Technology.)<span
class="wikiword">[JavaScript](http://wiki.tamouse.org?n=Technology.JavaScript?action=print)</span>
<span
class="wikiword">[IncludeMe](http://wiki.tamouse.org?n=Technology.IncludeMe?action=edit)[?](http://wiki.tamouse.org?n=Technology.IncludeMe?action=edit)</span>:[JavaScript](http://wiki.tamouse.org?n=Technology.JavaScript?action=print)
Categories:[Articles](http://wiki.tamouse.org?n=Category.Articles) Tags:
javascript, web development popups

</div>

</div>
