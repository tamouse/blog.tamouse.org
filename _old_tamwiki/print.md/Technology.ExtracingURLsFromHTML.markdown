<div id="wikitext">

<span id="excerpt"></span> Extracting <span class="wikiword">URLs</span>
from an HTML file has been a common enough task that it's been written
about all over. Here, I'm taking it a little further, comparing
implementations of the task in perl and ruby using modern libraries that
parse HTML turning it into a tree of DOM objects, just the way your
browser would do it. This makes extraction and subsequent processing
much simpler than older methods of building parser callbacks, or just
using regexps to parse the file. <span id="excerptend"></span>

<div class="vspace">

</div>

Use of Modern Parsing Libraries
-------------------------------

Both implementations make similar use of libraries written for each
language that convert the HTML in a given file into something
traversable by tags, ids, or classes, which makes for extremely simple,
yet powerful manipulation of the DOM tree.

This is very much the same way jQuery handles the DOM, by offering up a
very simple selection syntax to the programmer.

<div class="vspace">

</div>

  Language   Library
  ---------- -----------------------------------------------
  Ruby       Nokogiri
  Perl       HTML::<span class="wikiword">TagParser</span>

<div class="vspace">

</div>

The extract method, side-by-side
--------------------------------

<div style="display: inline-block; width=49%;vertical-align:top;">

<div id="sourceblock1" class="sourceblock">

<div class="sourceblocktext">

<div class="perl">

1.  <div class="de1">

    <span class="kw2">sub</span> extract <span class="br0">{</span>

    </div>

2.  <div class="de1">

            <span class="kw1">my</span> <span class="re0">\$p</span>
    <span class="sy0">=</span> <span class="kw3">shift</span><span
    class="sy0">;</span>

    </div>

3.  <div class="de1">

            <span class="kw1">my</span> <span
    class="re0">@anchors</span> <span class="sy0">=</span> <span
    class="re0">\$p</span><span class="sy0">-\></span><span
    class="me1">getElementsByTagName</span><span
    class="br0">(</span><span class="st_h">'a'</span><span
    class="br0">)</span><span class="sy0">;</span>

    </div>

4.  <div class="de1">

            <span class="kw1">foreach</span> <span class="kw1">my</span>
    <span class="re0">\$anchor</span> <span class="br0">(</span><span
    class="re0">@anchors</span><span class="br0">)</span> <span
    class="br0">{</span>

    </div>

5.  <div class="de2">

                    <span class="kw1">my</span> <span
    class="re0">\$href</span> <span class="sy0">=</span> <span
    class="re0">\$anchor</span><span class="sy0">-\></span><span
    class="me1">getAttribute</span><span class="br0">(</span><span
    class="st_h">'href'</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

6.  <div class="de1">

                    <span class="kw3">print</span> <span
    class="st0">"\$href<span class="es0">\\n</span>"</span> <span
    class="kw1">if</span> <span class="re0">\$href</span><span
    class="sy0">;</span>

    </div>

7.  <div class="de1">

            <span class="br0">}</span>

    </div>

8.  <div class="de1">

            <span class="kw1">my</span> <span class="re0">@images</span>
    <span class="sy0">=</span> <span class="re0">\$p</span><span
    class="sy0">-\></span><span
    class="me1">getElementsByTagName</span><span
    class="br0">(</span><span class="st_h">'img'</span><span
    class="br0">)</span><span class="sy0">;</span>

    </div>

9.  <div class="de1">

            <span class="kw1">foreach</span> <span class="kw1">my</span>
    <span class="re0">\$img</span> <span class="br0">(</span><span
    class="re0">@images</span><span class="br0">)</span> <span
    class="br0">{</span>

    </div>

10. <div class="de2">

                    <span class="kw1">my</span> <span
    class="re0">\$src</span> <span class="sy0">=</span> <span
    class="re0">\$img</span><span class="sy0">-\></span><span
    class="me1">getAttribute</span><span class="br0">(</span><span
    class="st_h">'src'</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

11. <div class="de1">

                    <span class="kw3">print</span> <span
    class="st0">"\$src<span class="es0">\\n</span>"</span> <span
    class="kw1">if</span> <span class="re0">\$src</span><span
    class="sy0">;</span>

    </div>

12. <div class="de1">

            <span class="br0">}</span>

    </div>

13. <div class="de1">

    <span class="br0">}</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.ExtracingURLsFromHTML?action=sourceblock&num=1)

</div>

</div>

</div>

<div style="display: inline-block; width=49%;vertical-align:top;">

<div id="sourceblock2" class="sourceblock">

<div class="sourceblocktext">

<div class="ruby">

1.  <div class="de1">

    <span class="kw1">def</span> extract <span
    class="br0">(</span>doc<span class="br0">)</span>

    </div>

2.  <div class="de1">

            doc.<span class="me1">search</span><span
    class="br0">(</span><span class="st0">"a"</span><span
    class="br0">)</span>.<span class="me1">each</span> <span
    class="kw1">do</span> <span class="sy0">|</span>a<span
    class="sy0">|</span>

    </div>

3.  <div class="de1">

                    <span class="kw3">puts</span> a.<span
    class="me1">attribute</span><span class="br0">(</span><span
    class="st0">'href'</span><span class="br0">)</span>

    </div>

4.  <div class="de1">

            <span class="kw1">end</span>

    </div>

5.  <div class="de2">

            doc.<span class="me1">search</span><span
    class="br0">(</span><span class="st0">"img"</span><span
    class="br0">)</span>.<span class="me1">each</span> <span
    class="kw1">do</span> <span class="sy0">|</span>i<span
    class="sy0">|</span>

    </div>

6.  <div class="de1">

                    <span class="kw3">puts</span> i.<span
    class="me1">attribute</span><span class="br0">(</span><span
    class="st0">'src'</span><span class="br0">)</span>

    </div>

7.  <div class="de1">

            <span class="kw1">end</span>

    </div>

8.  <div class="de1">

    <span class="kw1">end</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.ExtracingURLsFromHTML?action=sourceblock&num=2)

</div>

</div>

</div>

The immediate thing I note is that the size of the ruby version is like
half the size of the perl version, and it looks a lot easier to read to
me (granted, I understand how to read boty langauges easily).

<div class="vspace">

</div>

<div style="display: none;">

Summary:Extracting <span class="wikiword">URLs</span> from HTML in two
languages: Ruby and Perl Parent:(Technology.)Languages <span
class="wikiword">[IncludeMe](http://wiki.tamouse.org?n=Technology.IncludeMe?action=edit)[?](http://wiki.tamouse.org?n=Technology.IncludeMe?action=edit)</span>:[Languages](http://wiki.tamouse.org?n=Technology.Languages?action=print)
Categories:[HowTos](http://wiki.tamouse.org?n=Category.HowTos) Tags:
perl, ruby, extract urls, examples, howtos, comparisons

</div>

</div>
