<div id="wikitext">

<span id="excerpt"></span> Javascript, like most other langages, has a
variable type called `string`. Strings are typically delimited either by
a single quote `'`{.escaped} or double quote `"`{.escaped}. If a single
or double quote appears in a string, it must be somehow escaped so that
Javascript handles it correctly. <span id="excerptend"></span>

This can get tricky when mixing Javascript, HTML and PHP.

<div class="vspace">

</div>

Looking at some tricky data
---------------------------

Consider the following test data:

<div class="vspace">

</div>

<div id="sourceblock1" class="sourceblock">

<div class="sourceblocktext">

<div class="php">

1.  <div class="de1">

    <span class="re0">\$testdata</span> <span class="sy0">=</span> <span
    class="kw3">array</span><span class="br0">(</span>

    </div>

2.  <div class="de1">

        <span class="kw3">array</span><span class="br0">(</span><span
    class="st_h">'title'</span><span class="sy0">=\></span><span
    class="st0">"What's New"</span><span class="sy0">,</span><span
    class="st_h">'link'</span><span class="sy0">=\></span><span
    class="st_h">'article/whats-new.html'</span><span
    class="br0">)</span><span class="sy0">,</span>

    </div>

3.  <div class="de1">

        <span class="kw3">array</span><span class="br0">(</span><span
    class="st_h">'title'</span><span class="sy0">=\></span><span
    class="st_h">'Fred "Buster" Cox'</span><span
    class="sy0">,</span><span class="st_h">'link'</span><span
    class="sy0">=\></span><span
    class="st_h">'article/fred-buster-cox.html'</span><span
    class="br0">)</span><span class="sy0">,</span>

    </div>

4.  <div class="de1">

    <span class="br0">)</span><span class="sy0">;</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

</div>

</div>

The first group's title contains a single quote, in this case acting as
an apostrophe. The second group's title contains a pair of double quotes
surrounding a nick name. These are handled differently in Javascript,
PHP, and HTML, so all three must be considered when these are combined
into one application.

<div class="vspace">

</div>

What we want to have happen
---------------------------

The above test data will be processed by PHP as follows:

<div class="vspace">

</div>

<div id="sourceblock2" class="sourceblock">

<div class="sourceblocktext">

<div class="php">

1.  <div class="de1">

    <span class="kw1">echo</span> <span class="st0">"\<ul\><span
    class="es1">\\n</span>"</span><span class="sy0">;</span>

    </div>

2.  <div class="de1">

    <span class="kw1">foreach</span> <span class="br0">(</span><span
    class="re0">\$testdata</span> <span class="kw1">as</span> <span
    class="re0">\$key</span> <span class="sy0">=\></span> <span
    class="re0">\$value</span><span class="br0">)</span> <span
    class="br0">{</span>

    </div>

3.  <div class="de1">

      <span class="re0">\$title\_h</span> <span class="sy0">=</span>
    htmlprotect<span class="br0">(</span><span
    class="re0">\$value</span><span class="br0">[</span><span
    class="st_h">'title'</span><span class="br0">]</span><span
    class="br0">)</span><span class="sy0">;</span>

    </div>

4.  <div class="de1">

      <span class="re0">\$title\_j</span> <span class="sy0">=</span>
    jsprotect<span class="br0">(</span><span
    class="re0">\$value</span><span class="br0">[</span><span
    class="st_h">'title'</span><span class="br0">]</span><span
    class="br0">)</span><span class="sy0">;</span>

    </div>

5.  <div class="de2">

      <span class="re0">\$link</span> <span class="sy0">=</span> <span
    class="re0">\$value</span><span class="br0">[</span><span
    class="st_h">'link'</span><span class="br0">]</span><span
    class="sy0">;</span>

    </div>

6.  <div class="de1">

      <span class="kw1">echo</span> <span class="st0">"\<li\>\<span
    onclick=<span class="es1">\\"</span>insertlink('<span
    class="es4">\$link</span>','<span
    class="es4">\$title\_j</span>')<span class="es1">\\"</span>
    class=<span class="es1">\\"</span>linkSel<span
    class="es1">\\"</span>\><span
    class="es4">\$title\_h</span>\</span\>\</li\><span
    class="es1">\\n</span>"</span><span class="sy0">;</span>

    </div>

7.  <div class="de1">

    <span class="br0">}</span>

    </div>

8.  <div class="de1">

    <span class="kw1">echo</span> <span class="st0">"\</ul\><span
    class="es1">\\n</span>"</span><span class="sy0">;</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

</div>

</div>

And the following shows the `insertlink` javascript function:

<div class="vspace">

</div>

<div id="sourceblock3" class="sourceblock">

<div class="sourceblocktext">

<div class="javascript">

1.  <div class="de1">

    <span class="kw1">function</span> insertlink<span
    class="br0">(</span>l<span class="sy0">,</span>t<span
    class="br0">)</span> <span class="br0">{</span>

    </div>

2.  <div class="de1">

      alert<span class="br0">(</span><span class="st0">"Insert Link
    Function<span class="es0">\\n</span>"</span> <span
    class="sy0">+</span> <span class="st0">"title: "</span> <span
    class="sy0">+</span> t <span class="sy0">+</span> <span
    class="st0">"<span class="es0">\\n</span>"</span> <span
    class="sy0">+</span> <span class="st0">"link: "</span> <span
    class="sy0">+</span> l <span class="sy0">+</span> <span
    class="st0">"<span class="es0">\\n</span>"</span><span
    class="br0">)</span><span class="sy0">;</span>

    </div>

3.  <div class="de1">

    <span class="br0">}</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

</div>

</div>

The link and title from the test data will be passed through to the
javascript function `insertlink`.

So, what we need to do is provide some means of protecting the quotes we
need in the title entries.

<div class="vspace">

</div>

Protecting the strings for HTML
-------------------------------

For php, this is pretty straight-forward and a function is provided for
us:
[htmlentities](http://us2.php.net/manual/en/function.htmlentities.php)

<div class="vspace">

</div>

<div id="sourceblock4" class="sourceblock">

<div class="sourceblocktext">

<div class="php">

<span class="re0">\$title\_h</span> <span class="sy0">=</span> <span
class="kw3">htmlentities</span><span class="br0">(</span><span
class="re0">\$value</span><span class="br0">[</span><span
class="st_h">'title'</span><span class="br0">]</span><span
class="sy0">,</span><span class="kw4">ENT\_QUOTES</span><span
class="sy0">,</span><span class="st0">"utf-8"</span><span
class="br0">)</span><span class="sy0">;</span>

</div>

</div>

<div class="sourceblocklink">

</div>

</div>

For the first title element, it produces:

<div class="vspace">

</div>

<div id="sourceblock5" class="sourceblock">

<div class="sourceblocktext">

<div class="html4strict">

What<span class="sc1">&\#039;</span>s New

</div>

</div>

<div class="sourceblocklink">

</div>

</div>

For the second title element, it produces:

<div class="vspace">

</div>

<div id="sourceblock6" class="sourceblock">

<div class="sourceblocktext">

<div class="html4strict">

Fred <span class="sc1">&quot;</span>Buster<span
class="sc1">&quot;</span> Cox

</div>

</div>

<div class="sourceblocklink">

</div>

</div>

<div class="vspace">

</div>

Protecting the strings for Javascript
-------------------------------------

Neither of these strings, however, will work if passed to the javascript
function `insertlink`. So instead, we have to encode things differently,
and in this case it is by no means obvious what to do. Some discussion
on the php-general mailing list shows that context of the string is
quite important. Here again, the relationship between PHP, HTML and
Javascript is *so* important.

<div class="vspace">

</div>

### First try, addslashes

My first thought was that using the PHP function
[`addslashes`](http://us2.php.net/manual/en/function.addslashes.php)
would do the trick.

<div id="sourceblock7" class="sourceblock">

<div class="sourceblocktext">

<div class="php">

<span class="re0">\$esc\_title</span> <span class="sy0">=</span> <span
class="kw3">addslashes</span><span class="br0">(</span><span
class="re0">\$value</span><span class="br0">[</span><span
class="st_h">'title'</span><span class="br0">]</span><span
class="br0">)</span><span class="sy0">;</span>

</div>

</div>

<div class="sourceblocklink">

</div>

</div>

This time, the first title element is:

<div class="vspace">

</div>

<div id="sourceblock8" class="sourceblock">

<div class="sourceblocktext">

<div class="javascript">

<span class="st0">'What<span class="es0">\\'</span>s New'</span>

</div>

</div>

<div class="sourceblocklink">

</div>

</div>

and the second title element is:

<div class="vspace">

</div>

<div id="sourceblock9" class="sourceblock">

<div class="sourceblocktext">

<div class="javascript">

<span class="st0">'Fred <span class="es0">\\"</span>Buster<span
class="es0">\\"</span> Cox'</span>

</div>

</div>

<div class="sourceblocklink">

</div>

</div>

Thus, what get's emitted by the php code fragment above looks like this:

<div class="vspace">

</div>

<div id="sourceblock10" class="sourceblock">

<div class="sourceblocktext">

<div class="html4strict">

1.  <div class="de1">

    <span class="sc2">\<<span class="kw2">ul</span>\></span>

    </div>

2.  <div class="de1">

    <span class="sc2">\<<span class="kw2">li</span>\>\<<span
    class="kw2">span</span> <span class="kw3">onclick</span><span
    class="sy0">=</span><span
    class="st0">"insertlink('article/whats-new.html','What\\'s
    New')"</span> <span class="kw3">class</span><span
    class="sy0">=</span><span
    class="st0">"linkSel"</span>\></span>What<span
    class="sc1">&\#039;</span>s New<span class="sc2">\<<span
    class="sy0">/</span><span class="kw2">span</span>\>\<<span
    class="sy0">/</span><span class="kw2">li</span>\></span>

    </div>

3.  <div class="de1">

    <span class="sc2">\<<span class="kw2">li</span>\>\<<span
    class="kw2">span</span> <span class="kw3">onclick</span><span
    class="sy0">=</span><span
    class="st0">"insertlink('article/fred-buster-cox.html','Fred
    \\"</span>Buster\\<span class="st0">" Cox')"</span> <span
    class="kw3">class</span><span class="sy0">=</span><span
    class="st0">"linkSel"</span>\></span>Fred <span
    class="sc1">&quot;</span>Buster<span class="sc1">&quot;</span>
    Cox<span class="sc2">\<<span class="sy0">/</span><span
    class="kw2">span</span>\>\<<span class="sy0">/</span><span
    class="kw2">li</span>\></span>

    </div>

4.  <div class="de1">

    <span class="sc2">\<<span class="sy0">/</span><span
    class="kw2">ul</span>\></span>

    </div>

</div>

</div>

<div class="sourceblocklink">

</div>

</div>

but this produces errors in the second case. So something else is
required.

<div class="vspace">

</div>

### Second try: JSON

My second thought was to use JSON encoding. As of PHP 5.3, the
`json_encode` function allows the use of specific encodings. For this
application, since the title strings get wrapped by single quotes in the
HTML output, we only want to encode the single quotes.

<div class="vspace">

</div>

<div id="sourceblock11" class="sourceblock">

<div class="sourceblocktext">

<div class="javascript">

\$title\_j <span class="sy0">=</span> json\_encode<span
class="br0">(</span>\$title<span
class="sy0">,</span>JSON\_HEX\_APOS<span class="br0">)</span><span
class="sy0">;</span>

</div>

</div>

<div class="sourceblocklink">

</div>

</div>

but this didn't work at all, since the value returned by `json_encode`
is also surrounded by quotes:

<div class="vspace">

</div>

<div id="sourceblock12" class="sourceblock">

<div class="sourceblocktext">

<div class="html4strict">

<span class="sc2">\<<span class="kw2">ul</span>\></span>\
 <span class="sc2">\<<span class="kw2">li</span>\>\<<span
class="kw2">span</span> <span class="kw3">onclick</span><span
class="sy0">=</span><span
class="st0">"insertlink('article/whats-new.html','"</span>What\\u0027s
New<span class="st0">"') class="</span>linkSel<span
class="st0">"\></span></span>What<span class="sc1">&\#039;</span>s
New<span class="sc2">\<<span class="sy0">/</span><span
class="kw2">span</span>\>\<<span class="sy0">/</span><span
class="kw2">li</span>\></span>\
 <span class="sc2">\<<span class="kw2">li</span>\>\<<span
class="kw2">span</span> <span class="kw3">onclick</span><span
class="sy0">=</span><span
class="st0">"insertlink('article/fred-buster-cox.html','"</span>Fred
\\<span class="st0">"Buster\\"</span> Cox<span class="st0">"')
class="</span>linkSel<span class="st0">"\></span></span>Fred <span
class="sc1">&quot;</span>Buster<span class="sc1">&quot;</span> Cox<span
class="sc2">\<<span class="sy0">/</span><span
class="kw2">span</span>\>\<<span class="sy0">/</span><span
class="kw2">li</span>\></span>\
 <span class="sc2">\<<span class="sy0">/</span><span
class="kw2">ul</span>\></span>

</div>

</div>

<div class="sourceblocklink">

</div>

</div>

which results in a Javascript error "Uncaught <span
class="wikiword">[SyntaxError](http://wiki.tamouse.org?n=Technology.SyntaxError?action=edit)[?](http://wiki.tamouse.org?n=Technology.SyntaxError?action=edit)</span>:
Unexpected token ILLEGAL (repeated 2 times)".

So, something *else* is needed.

<div class="vspace">

</div>

### Third try, Base 64

So I thought, "Base64"?

This turns out to be a bit problematic, as javascript has no native
support for base64 encoding/decoding. There are numerous resources that
show how to write your own, and it turns out in Gecko and Webkit
browsers, there is [a pair of window functions
available](https://developer.mozilla.org/en/DOM/window.atob) (once again
leaving IE out in the cold). We'll try the `atob` function here, using
PHP to base64 encode the title data before sending it down:

<div class="vspace">

</div>

<div id="sourceblock13" class="sourceblock">

<div class="sourceblocktext">

<div class="php">

<span class="re0">\$title\_j</span> <span class="sy0">=</span> <span
class="kw3">base64\_encode</span><span class="br0">(</span><span
class="re0">\$value</span><span class="br0">[</span><span
class="st_h">'title'</span><span class="br0">]</span><span
class="br0">)</span><span class="sy0">;</span>

</div>

</div>

<div class="sourceblocklink">

</div>

</div>

and add this line in the `insertlink` function before the `alert`:

<div class="vspace">

</div>

<div id="sourceblock14" class="sourceblock">

<div class="sourceblocktext">

<div class="javascript">

t <span class="sy0">=</span> window.<span class="me1">atob</span><span
class="br0">(</span>t<span class="br0">)</span><span
class="sy0">;</span>

</div>

</div>

<div class="sourceblocklink">

</div>

</div>

Which produces:

<div class="vspace">

</div>

<div id="sourceblock15" class="sourceblock">

<div class="sourceblocktext">

<div class="html4strict">

1.  <div class="de1">

    <span class="sc2">\<<span class="kw2">ul</span>\></span>

    </div>

2.  <div class="de1">

    <span class="sc2">\<<span class="kw2">li</span>\>\<<span
    class="kw2">span</span> <span class="kw3">onclick</span><span
    class="sy0">=</span><span
    class="st0">"insertlink('article/whats-new.html','V2hhdCdzIE5ldw==')"</span>
    <span class="kw3">class</span><span class="sy0">=</span><span
    class="st0">"linkSel"</span>\></span>What<span
    class="sc1">&\#039;</span>s New<span class="sc2">\<<span
    class="sy0">/</span><span class="kw2">span</span>\>\<<span
    class="sy0">/</span><span class="kw2">li</span>\></span>

    </div>

3.  <div class="de1">

    <span class="sc2">\<<span class="kw2">li</span>\>\<<span
    class="kw2">span</span> <span class="kw3">onclick</span><span
    class="sy0">=</span><span
    class="st0">"insertlink('article/fred-buster-cox.html','RnJlZCAiQnVzdGVyIiBDb3g=')"</span>
    <span class="kw3">class</span><span class="sy0">=</span><span
    class="st0">"linkSel"</span>\></span>Fred <span
    class="sc1">&quot;</span>Buster<span class="sc1">&quot;</span>
    Cox<span class="sc2">\<<span class="sy0">/</span><span
    class="kw2">span</span>\>\<<span class="sy0">/</span><span
    class="kw2">li</span>\></span>

    </div>

4.  <div class="de1">

    <span class="sc2">\<<span class="sy0">/</span><span
    class="kw2">ul</span>\></span>

    </div>

</div>

</div>

<div class="sourceblocklink">

</div>

</div>

Clicking on the two spans in the browser produces:

<div class="vspace">

</div>

<div>

<span class="frame">
![](http://wiki.tamouse.org?n=uploads.Technology.HandlingQuotesInJavascript.whatsnewalert.png)</span>

</div>

<div class="vspace">

</div>

<div>

<span class="frame">
![](http://wiki.tamouse.org?n=uploads.Technology.HandlingQuotesInJavascript.busteralert.png)</span>

</div>

<div class="vspace">

</div>

### But what about Unicode?

This will work for standard ASCII strings, but utf-8 strings will be
problematic, as it will give character out of range errors. So special
encoding/decoding is needed that further deals with this, as explained
on the [btoa
page](https://developer.mozilla.org/en/DOM/window.btoa#Unicode_Strings).
Taking that solution and reworking it for a PHP + Javascript
application, we need to change the javascript protection to:

<div class="vspace">

</div>

<div id="sourceblock16" class="sourceblock">

<div class="sourceblocktext">

<div class="php">

<span class="re0">\$title\_j</span> <span class="sy0">=</span> <span
class="kw3">base64\_encode</span><span class="br0">(</span><span
class="kw3">rawurlencode</span><span class="br0">(</span><span
class="re0">\$value</span><span class="br0">[</span><span
class="st_h">'title'</span><span class="br0">]</span><span
class="br0">)</span><span class="br0">)</span><span class="sy0">;</span>

</div>

</div>

<div class="sourceblocklink">

</div>

</div>

and modify the `insertlink` function to:

<div class="vspace">

</div>

<div id="sourceblock17" class="sourceblock">

<div class="sourceblocktext">

<div class="javascript">

t <span class="sy0">=</span> decodeURIComponent<span
class="br0">(</span>window.<span class="me1">atob</span><span
class="br0">(</span>t<span class="br0">)</span><span
class="br0">)</span><span class="sy0">;</span>

</div>

</div>

<div class="sourceblocklink">

</div>

</div>

If we throw in some Unicode into the test data:

<div class="vspace">

</div>

<div id="sourceblock18" class="sourceblock">

<div class="sourceblocktext">

<div class="php">

<span class="kw3">array</span><span class="br0">(</span><span
class="st_h">'title'</span> <span class="sy0">=\></span> <span
class="st_h">'Fran??ais ??????'</span><span class="sy0">,</span> <span
class="st_h">'link'</span> <span class="sy0">=\></span> <span
class="st_h">'article/special-chars.html'</span><span
class="br0">)</span><span class="sy0">,</span>

</div>

</div>

<div class="sourceblocklink">

</div>

</div>

Then run the page again, the following is the result of our new piece of
Unicode data:

<div class="vspace">

</div>

<div>

<span class="frame">
![](http://wiki.tamouse.org?n=uploads.Technology.HandlingQuotesInJavascript.utf8alert.png)</span>

</div>

which seems to work, finally. But this isn't the final answer, as it
still leaves IE out. Writing one's own Base64 encode/decode functions
that are Unicode-safe seems to be something available on the
[net](http://www.webtoolkit.info/javascript-base64.html)
[in](http://ntt.cc/2008/01/19/base64-encoder-decoder-with-javascript.html)
[various](http://stackoverflow.com/questions/246801/how-can-you-encode-to-base64-using-javascript)
[places](http://www.nczonline.net/blog/2009/12/08/computer-science-in-javascript-base64-encoding/).

<div class="vspace">

</div>

Final Source Code
-----------------

<div id="sourceblock19" class="sourceblock">

<div class="sourceblocktext">

<div class="php">

1.  <div class="de1">

    <span class="kw2">\<?php</span>

    </div>

2.  <div class="de1">

    <span class="kw3">error\_reporting</span><span
    class="br0">(</span><span class="sy0">-</span><span
    class="nu0">1</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

3.  <div class="de1">

    <span class="kw3">ini\_set</span><span class="br0">(</span><span
    class="st_h">'display\_errors'</span><span class="sy0">,</span><span
    class="kw4">true</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

4.  <div class="de1">

    <span class="kw3">ini\_set</span><span class="br0">(</span><span
    class="st_h">'display\_startup\_errors'</span><span
    class="sy0">,</span><span class="kw4">true</span><span
    class="br0">)</span><span class="sy0">;</span>

    </div>

5.  <div class="de2">

     

    </div>

6.  <div class="de1">

    <span class="re0">\$testdata</span> <span class="sy0">=</span>

    </div>

7.  <div class="de1">

      <span class="kw3">array</span><span class="br0">(</span>

    </div>

8.  <div class="de1">

        <span class="kw3">array</span><span class="br0">(</span><span
    class="st_h">'title'</span> <span class="sy0">=\></span> <span
    class="st0">"What's New"</span><span class="sy0">,</span> <span
    class="st_h">'link'</span> <span class="sy0">=\></span> <span
    class="st_h">'article/whats-new.html'</span><span
    class="br0">)</span><span class="sy0">,</span>

    </div>

9.  <div class="de1">

        <span class="kw3">array</span><span class="br0">(</span><span
    class="st_h">'title'</span> <span class="sy0">=\></span> <span
    class="st0">"Fred <span class="es1">\\"</span>Buster<span
    class="es1">\\"</span> Cox"</span><span class="sy0">,</span> <span
    class="st_h">'link'</span> <span class="sy0">=\></span> <span
    class="st_h">'article/fred-buster-cox.html'</span><span
    class="br0">)</span><span class="sy0">,</span>

    </div>

10. <div class="de2">

        <span class="kw3">array</span><span class="br0">(</span><span
    class="st_h">'title'</span> <span class="sy0">=\></span> <span
    class="st_h">'Fran??ais ??????'</span><span class="sy0">,</span>
    <span class="st_h">'link'</span> <span class="sy0">=\></span> <span
    class="st_h">'article/special-chars.html'</span><span
    class="br0">)</span><span class="sy0">,</span>

    </div>

11. <div class="de1">

    <span class="br0">)</span><span class="sy0">;</span>

    </div>

12. <div class="de1">

     

    </div>

13. <div class="de1">

    <span class="sy1">?\></span>

    </div>

14. <div class="de1">

    \<!DOCTYPE html\>

    </div>

15. <div class="de2">

    \<html\>

    </div>

16. <div class="de1">

    \<head\>

    </div>

17. <div class="de1">

    \<meta http-equiv="Content-type" content="text/html;
    charset=utf-8"\>

    </div>

18. <div class="de1">

      \<title\>test quoting\</title\>

    </div>

19. <div class="de1">

    \<script type="text/javascript"\>

    </div>

20. <div class="de2">

    function insertlink(l,t) {

    </div>

21. <div class="de1">

      t = decodeURIComponent(window.atob(t));

    </div>

22. <div class="de1">

      alert("Insert Link Function\\n" + "Title: " + t + "\\n" + "Link:
    " + l + "\\n");

    </div>

23. <div class="de1">

    }

    </div>

24. <div class="de1">

    \</script\>

    </div>

25. <div class="de2">

    \<style type="text/css" media="screen"\>

    </div>

26. <div class="de1">

      .linkSel {background-color: yellow}

    </div>

27. <div class="de1">

    \</style\>  

    </div>

28. <div class="de1">

      \</head\>

    </div>

29. <div class="de1">

    \<body\>

    </div>

30. <div class="de2">

    \<h1\>test quoting\</h1\>

    </div>

31. <div class="de1">

     

    </div>

32. <div class="de1">

    \<pre\><span class="kw2">\<?php</span> <span
    class="kw3">var\_dump</span><span class="br0">(</span><span
    class="re0">\$testdata</span><span class="br0">)</span><span
    class="sy0">;</span> <span class="sy1">?\></span>\</pre\>

    </div>

33. <div class="de1">

     

    </div>

34. <div class="de1">

     

    </div>

35. <div class="de2">

    <span class="kw2">\<?php</span>

    </div>

36. <div class="de1">

      <span class="kw1">echo</span> <span class="st0">"\<ul\><span
    class="es1">\\n</span>"</span><span class="sy0">;</span>

    </div>

37. <div class="de1">

    <span class="kw1">foreach</span> <span class="br0">(</span><span
    class="re0">\$testdata</span> <span class="kw1">as</span> <span
    class="re0">\$key</span> <span class="sy0">=\></span> <span
    class="re0">\$value</span><span class="br0">)</span> <span
    class="br0">{</span>

    </div>

38. <div class="de1">

      <span class="re0">\$title\_h</span> <span class="sy0">=</span>
    <span class="kw3">htmlentities</span><span class="br0">(</span><span
    class="re0">\$value</span><span class="br0">[</span><span
    class="st_h">'title'</span><span class="br0">]</span><span
    class="sy0">,</span><span class="kw4">ENT\_QUOTES</span><span
    class="sy0">,</span><span class="st0">"utf-8"</span><span
    class="br0">)</span><span class="sy0">;</span>

    </div>

39. <div class="de1">

      <span class="kw1">if</span> <span class="br0">(</span><span
    class="kw3">empty</span><span class="br0">(</span><span
    class="re0">\$title\_h</span><span class="br0">)</span><span
    class="br0">)</span> <span class="br0">{</span>

    </div>

40. <div class="de2">

        <span class="re0">\$title\_h</span> <span class="sy0">=</span>
    <span class="re0">\$value</span><span class="br0">[</span><span
    class="st_h">'title'</span><span class="br0">]</span><span
    class="sy0">;</span> <span class="co1">// put it out as is?</span>

    </div>

41. <div class="de1">

      <span class="br0">}</span>

    </div>

42. <div class="de1">

      <span class="re0">\$title\_j</span> <span class="sy0">=</span>
    <span class="kw3">base64\_encode</span><span
    class="br0">(</span><span class="kw3">rawurlencode</span><span
    class="br0">(</span><span class="re0">\$value</span><span
    class="br0">[</span><span class="st_h">'title'</span><span
    class="br0">]</span><span class="br0">)</span><span
    class="br0">)</span><span class="sy0">;</span>

    </div>

43. <div class="de1">

      <span class="re0">\$link</span> <span class="sy0">=</span> <span
    class="re0">\$value</span><span class="br0">[</span><span
    class="st_h">'link'</span><span class="br0">]</span><span
    class="sy0">;</span>

    </div>

44. <div class="de1">

      <span class="kw1">echo</span> <span class="st0">"\<li\>\<span
    onclick=<span class="es1">\\"</span>insertlink('<span
    class="es4">\$link</span>','<span
    class="es4">\$title\_j</span>')<span class="es1">\\"</span>
    class=<span class="es1">\\"</span>linkSel<span
    class="es1">\\"</span>\><span
    class="es4">\$title\_h</span>\</span\>\</li\><span
    class="es1">\\n</span>"</span><span class="sy0">;</span>

    </div>

45. <div class="de2">

    <span class="br0">}</span>

    </div>

46. <div class="de1">

    <span class="kw1">echo</span> <span class="st0">"\</ul\><span
    class="es1">\\n</span>"</span><span class="sy0">;</span>

    </div>

47. <div class="de1">

    <span class="sy1">?\></span>

    </div>

48. <div class="de1">

     

    </div>

49. <div class="de1">

    \</body\>

    </div>

50. <div class="de2">

    \</html\>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.HandlingQuotesInJavascript?action=sourceblock&num=19)

</div>

</div>

<div style="display: none;">

Summary:Handling a sticky problem in Javascript
Parent:(Technology.)<span
class="wikiword">[JavaScript](http://wiki.tamouse.org?n=Technology.JavaScript?action=print)</span>
Categories:[Articles](http://wiki.tamouse.org?n=Category.Articles),
[HowTos](http://wiki.tamouse.org?n=Category.HowTos) Tags: javascript,
php, html, programming, issues, strings

</div>

<div class="vspace">

</div>

</div>
