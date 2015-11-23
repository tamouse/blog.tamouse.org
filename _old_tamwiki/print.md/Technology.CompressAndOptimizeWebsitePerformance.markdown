<div id="wikitext">

<span id="excerpt"></span> Optimizing web site delivery is a way of
decreasing the download time of your website to your user's client. To
the extent this can be done beforehand, the better, but you can also
compress things on the server before sending them down. <span
id="excerptend"></span>

The article below discussed a few methods of doing this.

\

Link: [Compress PHP, CSS, JavaScript(JS) & Optimize website
performance.](http://viralpatel.net/blogs/2009/02/compress-php-css-js-javascript-optimize-website-performance.html)

<div class="vspace">

</div>

<div class="round lrindent quote">

<span class="wikiword">GZip</span> using PHP ob\_start() method
---------------------------------------------------------------

If your hosting provider does not support mod\_gzip module, ob\_start()
method can be used to enable compression in PHP file. For this you need
to copy following line in top of the PHP file. You may want to add this
line in start of the header file that gets included in every php.

<div class="vspace">

</div>

<div id="sourceblock1" class="sourceblock">

<div class="sourceblocktext">

<div class="php">

1.  <div class="de1">

    <span class="kw2">\<?php</span>

    </div>

2.  <div class="de1">

    <span class="kw1">if</span> <span class="br0">(</span><span
    class="kw3">substr\_count</span><span class="br0">(</span><span
    class="re0">\$\_SERVER</span><span class="br0">[</span><span
    class="st_h">'HTTP\_ACCEPT\_ENCODING'</span><span
    class="br0">]</span><span class="sy0">,</span> <span
    class="st0">"gzip"</span><span class="br0">)</span><span
    class="br0">)</span>

    </div>

3.  <div class="de1">

        <span class="kw3">ob\_start</span><span
    class="br0">(</span><span class="st0">"ob\_gzhandler"</span><span
    class="br0">)</span><span class="sy0">;</span>

    </div>

4.  <div class="de1">

    <span class="kw1">else</span>

    </div>

5.  <div class="de2">

        <span class="kw3">ob\_start</span><span
    class="br0">(</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

6.  <div class="de1">

    <span class="sy1">?\></span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.CompressAndOptimizeWebsitePerformance?action=sourceblock&num=1)

</div>

</div>

Above code will check whether your browser supports gzip, if yes, then
it send ob\_gzhandler method as handle to ob\_start method which buffers
the output. Thus output is compressed using ob\_gzhandler. Only problem
with this method is that you have to manually edit all PHP files or
should have a header.php file that gets included in all files. There are
still ways to achieve this without touching your PHP files. Read
following trick.

</div>

Posted: 2012-3-20 16:45

<div class="vspace">

</div>

<div style="display: none;">

Summary:a way of optimizing web site delivery by compressing output
Parent:(Technology.)PHP <span
class="wikiword">[IncludeMe](http://wiki.tamouse.org?n=Technology.IncludeMe?action=edit)[?](http://wiki.tamouse.org?n=Technology.IncludeMe?action=edit)</span>:[Technology.PHP](http://wiki.tamouse.org?n=Technology.PHP?action=print)
Categories:[Articles](http://wiki.tamouse.org?n=Category.Articles) Tags:
php, optimization, compression, web development

</div>

<div class="vspace">

</div>

</div>
