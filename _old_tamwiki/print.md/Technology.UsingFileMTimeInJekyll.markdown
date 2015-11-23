<div id="wikitext">

<div style="display: none;">

Summary: Indicating the current time of a post using the file's mtime.
Parent: (Technology.)Jekyll <span
class="wikiword">[IncludeMe](http://wiki.tamouse.org?n=Technology.IncludeMe?action=edit)[?](http://wiki.tamouse.org?n=Technology.IncludeMe?action=edit)</span>:
[Jekyll](http://wiki.tamouse.org?n=Technology.Jekyll?action=print)
Categories: [HowTos](http://wiki.tamouse.org?n=Category.HowTos) Tags:
jekyll, mtime Source:
<http://jekyll.alphavice.com/destination/jekyll/2013/09/20/leveraging-filesystem-mtime-within-jekyll.html>
Posted: Fri Sep 27 10:16:35 2013

</div>

<span id="excerpt"></span>
[Jekyll](http://wiki.tamouse.org?n=Technology.Jekyll?action=print) posts
include the publication date in their file name, and are published under
that in the destination folder. By default, the date is taken from the
file name, or from the `date:` field in the post's front matter.

However, sometimes you'll want to edit a post, updating some info,
correcting a broken link, adding something new from comments, etc. In
this case, you might want to also indicate the current version of the
file. <span id="excerptend"></span>

This could be done a few ways. This particular way will use the file's
modification time (mtime).

In this case, we'll be using a
[Liquid](http://wiki.tamouse.org?n=Technology.Liquid?action=edit)[?](http://wiki.tamouse.org?n=Technology.Liquid?action=edit)
filter, which lets us do the following in our site files:

<div class="vspace">

</div>

<div id="sourceblock1" class="sourceblock">

<div class="sourceblocktext">

<div class="html5">

<span class="sc2">\<<span class="kw2">ul</span>\></span>\
   <span class="sc2">\<<span class="kw2">li</span> <span
class="kw3">class</span><span class="sy0">=</span><span
class="st0">"meta"</span>\></span>Published on: {{ page.date }}<span
class="sc2">\<<span class="sy0">/</span><span
class="kw2">li</span>\></span>\
   <span class="sc2">\<<span class="kw2">li</span> <span
class="kw3">class</span><span class="sy0">=</span><span
class="st0">"meta"</span>\></span>Last modified on: {{ page.path |
file\_date | date\_to\_rfc822 }}<span class="sc2">\<<span
class="sy0">/</span><span class="kw2">li</span>\></span>\
 <span class="sc2">\<<span class="sy0">/</span><span
class="kw2">ul</span>\></span>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.UsingFileMTimeInJekyll?action=sourceblock&num=1)

</div>

</div>

<div class="vspace">

</div>

Plugin
------

Create a file to hold the plugin code in the `_plugins` directory of
your source directory (creating it if necessary). Add the following to
that file:

<div class="vspace">

</div>

<div id="sourceblock2" class="sourceblock">

<div class="sourceblocktext">

<div class="ruby">

<div class="head">

\_plugins/file\_date.rb

</div>

1.  <div class="de1">

    <span class="kw1">module</span> Jekyll

    </div>

2.  <div class="de1">

      <span class="kw1">module</span> MyFilters

    </div>

3.  <div class="de1">

        <span class="kw1">def</span> file\_date<span
    class="br0">(</span>input<span class="br0">)</span>

    </div>

4.  <div class="de1">

          <span class="kw4">File</span>.<span
    class="me1">mtime</span><span class="br0">(</span>input<span
    class="br0">)</span>

    </div>

5.  <div class="de2">

        <span class="kw1">end</span>

    </div>

6.  <div class="de1">

      <span class="kw1">end</span>

    </div>

7.  <div class="de1">

    <span class="kw1">end</span>

    </div>

8.  <div class="de1">

     

    </div>

9.  <div class="de1">

    <span class="co1">\# this is necessary to tell Jekyll to use the
    filter.</span>

    </div>

10. <div class="de2">

    <span class="re2">Liquid::Template</span>.<span
    class="me1">register\_filter</span><span class="br0">(</span><span
    class="re2">Jekyll::MyFilters</span><span class="br0">)</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.UsingFileMTimeInJekyll?action=sourceblock&num=2)

</div>

</div>

</div>
