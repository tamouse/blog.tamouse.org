<div id="wikitext">

<span id="excerpt"></span> **Navigation** in webs can be a tricky thing.
There are a few norms, which of course are violated every day of the
week on any given web site. However, there are a few things that bear
mentioning. <span id="excerptend"></span>

<div class="vspace">

</div>

Page Titles
-----------

Every page should have a meaningful title. The \<title\>\</title\> tag
in the header is the most useful place to put this. Sometimes, the title
is calculated or derived from some other place; with luck, this will be
done before the browser sees it (see <span
class="wikiword">[ServerSidePageGeneration](http://wiki.tamouse.org?n=Technology.ServerSidePageGeneration?action=print)</span>).

The page title appears in the title bar of the window. Another really
nice place to have it is right at the top of the displayed page. But, I
hear you complaining "but I don't \*want\* to have to retype it!" --
fear not. The way around this is with a bit of JavaScript, which can be
included in your Page Template:

<div class="vspace">

</div>

         <script type="text/javascript" charset="utf-8">
            document.writeln(document.title)
        </script>

Pretty nifty, eh? And if you include it inside the H1 tag, it looks like
a great page title.

(See more on <span
class="wikiword">[PageTitling](http://wiki.tamouse.org?n=Technology.PageTitling?action=print)</span>)

<div class="vspace">

</div>

------------------------------------------------------------------------

<div class="vspace">

</div>

Site Navigation
---------------

Most often navigation within pages is handled using links (especially
within the WikiWeb). However, some common navigational aids are useful.
Major functions or areas of the site are frequently put along the
left-hand side or along the top of the page. Sometimes this is done with
frames, other times with tables (see <span
class="wikiword">[FramesVsTables](http://wiki.tamouse.org?n=Technology.FramesVsTables?action=edit)[?](http://wiki.tamouse.org?n=Technology.FramesVsTables?action=edit)</span>).
For this site, the navigation is at the top and the bottom of the page.
(in the Wiki web in particular, much of the functionality is at the
bottom of the page.) In any case, having a way of moving through the
site by major chunk is useful for many people.

Every page should allow the user to go to the front or home page of the
site; this is so people who may have come to your page via a link from
another site won't be confused about how to get around your site once
they are there.

(See more on <span
class="wikiword">[SiteNavigation](http://wiki.tamouse.org?n=Technology.SiteNavigation?action=print)</span>)

<div class="vspace">

</div>

------------------------------------------------------------------------

<div class="vspace">

</div>

Page Navigation
---------------

Within the page, there may be internal links to various parts of the
page. For long pages, having a <span
class="wikiword">[TableOfContents](http://wiki.tamouse.org?n=Technology.TableOfContents?action=edit)[?](http://wiki.tamouse.org?n=Technology.TableOfContents?action=edit)</span>
at the top is nice. If you do have a very long page, breaking it up into
screenfuls is nice (although contrary to some, I don't think it is
necessary to break it up into separate *page*. (See <span
class="wikiword">[PageBreakingUpIsHardToDo](http://wiki.tamouse.org?n=Technology.PageBreakingUpIsHardToDo?action=print)</span>).
As each screenful goes by, however, it is also nice to give the reader a
pause with a divider or a simple graphic, as well as a link to go back
up to the top of the page or table of contents.

Doing this is really straightforward.

Simply done:

<div class="vspace">

</div>

     <a name="pagetop"></a>

at the top of the page, and:

<div class="vspace">

</div>

     <a href="#pagetop">Go to top of page</a>

<div class="vspace">

</div>

<div class="round lrindent important2">

***Caution:*** watch out for the `base` tag in the page header -- if it
is there, your local references will be modified.

</div>

(See more on <span
class="wikiword">[PageNavigation](http://wiki.tamouse.org?n=Technology.PageNavigation?action=print)</span>)

<div class="vspace">

</div>

</div>
