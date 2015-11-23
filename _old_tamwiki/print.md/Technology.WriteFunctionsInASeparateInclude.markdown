<div id="wikitext">

<span id="excerpt"></span> Many times, I'll find a function I've written
can be reused in several places. Rather than storing the function in any
particular script, I'll include it in a library file created just for
that purpose. I call my library file `functions.inc.php`. In it, I put
generic functions that can be used across different projects with some
minor customization, or in many cases, no customization at all. Examples
include some of the functions listed
[elsewhere](http://wiki.tamouse.org?n=Technology.PHP?action=print).
<span id="excerptend"></span>

My current PHP functions library is available from [git
repo](https://gitorious.org/common-php-code/common-php-code).

Code reuse is a proven means to cut down on the time it takes to write
an application. As one gets more experience writing applications, once
can accumulate a significant library of code to reuse. It often takes
just a little more work to make something reusable, but is well worth
the effort.

<span id="includestart"></span> I had been using the `.inc` extension on
include files, but this is a really bad idea. Normally these files
aren't interpretted by the PHP interpretter and are passed directly back
to the browser as plain text. If they include sensitive code or data,
this could be a real security breach. Instead, make sure to append
`.php` to the file name so they will be interpretted instead.

<div class="vspace">

</div>

</div>
