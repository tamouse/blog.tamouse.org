<div id="wikitext">

<span id="excerpt"></span> The URL-shortening service bit.ly has an API
that let's you get a short URL programmatically, thus making it really
useful for including in web apps. <span id="excerptend"></span>

<div class="vspace">

</div>

Links
-----

-   [Bit.ly API
    Documentation](http://code.google.com/p/bitly-api/wiki/ApiDocumentation)
-   [Bit.ly API keys](http://bit.ly/a/your_api_key) - must be logged in
    first -- once logged in, can select from the `Tools` menu.

<div class="vspace">

</div>

<span class="wikiword">[HowTo](http://wiki.tamouse.org?n=Technology.HowTo?action=edit)[?](http://wiki.tamouse.org?n=Technology.HowTo?action=edit)</span>
--------------------------------------------------------------------------------------------------------------------------------------------------------

The basic call to the bit.ly API is as follows:

<div class="vspace">

</div>

``` {.escaped}
 http://api.bit.ly/v3/shorten?login=BITLYLOGIN&apikey=BITLYAPIKEY&longUrl=ESCAPEDURL&format=(txt|json|xml)
```

The `format=` parameter determines how bit.ly will return the shortened
URL.

-   txt - a bare URL without any markup, e.g. `http://bit.ly/code`
-   json - returned in a json-compatible format
-   xml - returned as xml

If bit.ly has errors in generating the URL, it returns a short HTML
page. If it doesn't recognize the login or key, it returns nothing. Thus
you should check for these on return:

<div class="vspace">

</div>

<div id="sourceblock1" class="sourceblock">

<div class="sourceblocktext">

<div class="php">

<div class="head">

PHP example

</div>

1.  <div class="de1">

    <span class="re0">\$longurl</span><span class="sy0">=</span><span
    class="st_h">'http://www.example.com'</span><span
    class="sy0">;</span>

    </div>

2.  <div class="de1">

    <span class="re0">\$bitlylogin</span><span class="sy0">=</span><span
    class="st_h">'BITLY\_LOGIN'</span><span class="sy0">;</span> <span
    class="co1">// your login name here</span>

    </div>

3.  <div class="de1">

    <span class="re0">\$bitlyapikey</span><span
    class="sy0">=</span><span class="st_h">'BITLY\_API\_KEY'</span><span
    class="sy0">;</span> <span class="co1">// your api key here</span>

    </div>

4.  <div class="de1">

    <span class="re0">\$shorturl</span> <span class="sy0">=</span>
    file\_as\_content<span class="br0">(</span><span
    class="st0">"http://api.bit.ly/v3/shorten?login=<span
    class="es4">\$bitlylogin</span>&apikey=<span
    class="es4">\$bitlyapikey</span>&longUrl=' . urlescape(<span
    class="es4">\$longurl</span>) . '&format=txt');</span>

    </div>

5.  <div class="de2">

    <span class="st0">if (!empty(<span class="es4">\$shorturl</span>) &&
    strpos(<span class="es4">\$shorturl</span>,'\<html\>') === false)
    {</span>

    </div>

6.  <div class="de1">

    <span class="st0">   \# procede with the shortened url</span>

    </div>

7.  <div class="de1">

    <span class="st0">}</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.ShorteningLinksWithBitly?action=sourceblock&num=1)

</div>

</div>

<div class="vspace">

</div>

<div id="sourceblock2" class="sourceblock">

<div class="sourceblocktext">

<div class="perl">

<div class="head">

Perl example

</div>

1.  <div class="de1">

    <span class="kw2">use</span> strict<span class="sy0">;</span>

    </div>

2.  <div class="de1">

    <span class="kw2">use</span> LWP<span class="sy0">::</span><span
    class="me2">UserAgent</span><span class="sy0">;</span>

    </div>

3.  <div class="de1">

    <span class="kw2">use</span> URI<span class="sy0">::</span><span
    class="me2">Escape</span><span class="sy0">;</span>

    </div>

4.  <div class="de1">

     

    </div>

5.  <div class="de2">

    <span class="kw1">my</span> <span class="re0">\$longurl</span><span
    class="sy0">=</span><span
    class="st_h">'http://www.example.com'</span><span
    class="sy0">;</span>

    </div>

6.  <div class="de1">

    <span class="kw1">my</span> <span
    class="re0">\$bitlylogin</span><span class="sy0">=</span><span
    class="st_h">'BITLY\_USER'</span><span class="sy0">;</span>

    </div>

7.  <div class="de1">

    <span class="kw1">my</span> <span
    class="re0">\$bitlyapikey</span><span class="sy0">=</span><span
    class="st_h">'BITLY\_API\_KEY'</span><span class="sy0">;</span>

    </div>

8.  <div class="de1">

     

    </div>

9.  <div class="de1">

    <span class="kw1">my</span> <span class="re0">\$ua</span> <span
    class="sy0">=</span> LWP<span class="sy0">::</span><span
    class="me2">UserAgent</span><span class="sy0">-\></span><span
    class="kw2">new</span><span class="sy0">;</span>

    </div>

10. <div class="de2">

    <span class="re0">\$ua</span><span class="sy0">-\></span><span
    class="me1">timeout</span><span class="br0">(</span><span
    class="nu0">10</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

11. <div class="de1">

    <span class="re0">\$ua</span><span class="sy0">-\></span><span
    class="me1">user\_agent</span><span class="br0">(</span><span
    class="st_h">'Mozilla/5.0 (compatible; MSIE 7.0; Windows NT
    6.0'</span><span class="br0">)</span><span class="sy0">;</span>

    </div>

12. <div class="de1">

    <span class="kw1">my</span> <span class="re0">\$response</span>
    <span class="sy0">=</span> <span class="re0">\$ua</span><span
    class="sy0">-\></span><span class="me1">get</span><span
    class="br0">(</span><span
    class="st_h">'http://api.bit.ly/v3/shorten?login=\$bitlylogin&apikey=\$bitlyapikey&longUrl='</span>
    <span class="sy0">.</span> uriescape<span class="br0">(</span><span
    class="re0">\$longurl</span><span class="br0">)</span> <span
    class="sy0">.</span> <span class="st_h">'&format=txt'</span><span
    class="br0">)</span><span class="sy0">;</span>

    </div>

13. <div class="de1">

    <span class="kw3">die</span> <span
    class="re0">\$response</span><span class="sy0">-\></span><span
    class="me1">status\_line</span> <span class="kw1">if</span> <span
    class="br0">(</span><span class="sy0">!</span><span
    class="re0">\$response</span><span class="sy0">-\></span><span
    class="me1">is\_success</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

14. <div class="de1">

    <span class="kw3">print</span> <span
    class="re0">\$response</span><span class="sy0">-\></span><span
    class="me1">decoded\_content</span><span class="sy0">;</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.ShorteningLinksWithBitly?action=sourceblock&num=2)

</div>

</div>

<div class="vspace">

</div>

</div>
