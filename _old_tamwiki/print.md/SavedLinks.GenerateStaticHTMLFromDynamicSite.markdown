<div id="wikitext">

Link:
<http://peeling.hubpages.com/hub/Generate_Static_HTML_Pages_From_A_Database>

<div class="vspace">

</div>

<div class="round lrindent quote">

Static HTML pages have obvious advantages - Fast loading, easy to write,
less load on the server, lower bandwidth costs, search engines prefer
static pages over dynamic ones ( generally speaking ).

Dynamic pages have their own set of advantages - Automatic refreshing of
content ( news, sidebar updates, etc. ), capability to interact with the
user ( web query forms, data output, ecommerce applications, etc. ).

But I want to have the best of both worlds. I want to have a static HTML
page, which is served out of a database, and will refresh itself
automatically at pre-specified intervals. How is this done?

</div>

Answer: Simply, wrap your code in output buffering and save it to a
file:

<div class="vspace">

</div>

<div style="text-align: center;">

![](http://wiki.tamouse.org?n=uploads.SavedLinks.GenerateStaticHTMLFromDynamicSite.makingdynamicstatic1.jpg)

</div>

Saved date:

<div class="vspace">

</div>

</div>
