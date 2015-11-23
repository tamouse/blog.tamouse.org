<div id="wikitext">

Link:
<http://google-caja.googlecode.com/svn/changes/mikesamuel/string-interpolation-29-Jan-2008/trunk/src/js/com/google/caja/interp/index.html>

*Mike Samuel - 29-Jan-2008*

<div class="vspace">

</div>

<div class="round lrindent quote">

String Interpolation, the "Hello \$name\_of\_planet!" style of
generating strings, familiar to Perl, PHP, and Ruby programmers,
provides a simple and intuitive way of specifying content in many
languages from HTML to SQL to URLS.

It also makes it very easy to introduce serious security problems. SQL
Injection, Script Injection, XML External Entity Injection (XXE), and
Cross Site Scripting (XSS) attacks are results of a failure to properly
escape user-supplied data before splicing it into a web-page, a SQL
query, or a shell command.

These problems are not inherent to String Interpolation though. The
strings themselves contain more than enough information to figure out
how to safely incorporate user data. Consider the code snippet:

<div class="vspace">

</div>

<div id="sourceblock1" class="sourceblock">

<div class="sourceblocktext">

<div class="html4strict">

<span class="sc2">\<<span class="kw2">html</span>\></span>\
   <span class="sc2">\<<span class="kw2">head</span>\></span>\
     <span class="sc2">\<<span class="kw2">title</span>\></span>Hello
\$name\_of\_planet!<span class="sc2">\<<span class="sy0">/</span><span
class="kw2">title</span>\></span>\
   <span class="sc2">\<<span class="sy0">/</span><span
class="kw2">head</span>\></span>\
   <span class="sc2">\<<span class="kw2">body</span>\></span>\
     <span class="sc2">\<<span class="kw2">h1</span>\></span>We come in
peace.<span class="sc2">\<<span class="sy0">/</span><span
class="kw2">h1</span>\></span>\
     <span class="sc2">\<<span class="kw2">p</span>\></span>Take us to
your\
       <span class="sc2">\<<span class="kw2">abbr</span> <span
class="kw3">title</span><span class="sy0">=</span><span class="st0">"May
(s)he live for many \$time\_units!"</span>\></span>\
         \$title\_of\_potentate\
       <span class="sc2">\<<span class="sy0">/</span><span
class="kw2">abbr</span>\></span>.\
     <span class="sc2">\<<span class="sy0">/</span><span
class="kw2">p</span>\></span>\
   <span class="sc2">\<<span class="sy0">/</span><span
class="kw2">body</span>\></span>\
 <span class="sc2">\<<span class="sy0">/</span><span
class="kw2">html</span>\></span>

</div>

</div>

<div class="sourceblocklink">

</div>

</div>

It should be clear that the programmer intended the substitutions
\$name\_of\_planet and \$title\_of\_potentate to be text in an html
page, and that \$time\_units is part of an HTML attribute. Obviously,
the browser can handle all those distinctions when the time comes to
render a page, but at the time the string interpolation is executed, it
has no way to tell that one string is HTML, and another is not. The
problem is one of early binding — acting before enough information is
available to make good decisions.

Below I discuss the benefits of string interpolation, outline some of
the alternatives to string interpolation, show how interpolation can
benefit from late binding, and explain how it can be bolted onto
languages like Javascript. I use Javascript throughout the examples
since Javascript examples can be run in browser, but the security
problems discussed herein occur in code written in many languages.

</div>

</div>
