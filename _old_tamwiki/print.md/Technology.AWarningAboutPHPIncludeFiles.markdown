<div id="wikitext">

<span id="includestart"></span> <span id="excerpt"></span> I had been
using the `.inc` extension on include files, but this is a really bad
idea. Normally these files aren't interpretted by the PHP interpretter
and are passed directly back to the browser as plain text. If they
include sensitive code or data, this could be a real security breach.
Instead, make sure to append `.php` to the file name so they will be
interpretted instead. <span id="excerptend"></span> <span
id="includeend"></span>

<div class="vspace">

</div>

<div style="display: none;">

Summary:making sure your include files don't get sent raw
Parent:(Technology.)PHP <span
class="wikiword">[IncludeMe](http://wiki.tamouse.org?n=Technology.IncludeMe?action=edit)[?](http://wiki.tamouse.org?n=Technology.IncludeMe?action=edit)</span>:[Technology.PHP](http://wiki.tamouse.org?n=Technology.PHP?action=print)
Categories:[Articles](http://wiki.tamouse.org?n=Category.Articles),[BestPractices](http://wiki.tamouse.org?n=Category.BestPractices),[HowTos](http://wiki.tamouse.org?n=Category.HowTos)
Tags: php, howto, security, web development

</div>

<div class="vspace">

</div>

</div>
