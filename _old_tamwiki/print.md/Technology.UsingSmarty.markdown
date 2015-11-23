<div id="wikitext">

Using [Smarty](http://wiki.tamouse.org?n=Technology.Smarty?action=print)
is where things start to get complicated. Smarty uses a special
templating language which is supposed easier than using
[PHP](http://wiki.tamouse.org?n=Technology.PHP?action=print) directly.
There is some controversy about this.

If you do choose to use
[Smarty](http://wiki.tamouse.org?n=Technology.Smarty?action=print), you
will need to develop templates for each of your views. Templating
structure is fairly straight-forward as well. Best practice is to make
your templates as structured and modular as possible. Thus, you may have
the following in your main template:

<div class="vspace">

</div>

<div id="sourceblock1" class="sourceblock">

<div class="sourceblocktext">

<div class="php">

<span class="br0">{</span>config\_load <span
class="kw3">file</span><span class="sy0">=</span><span
class="st0">"colors.conf"</span><span class="br0">}</span>\
\
 <span class="br0">{</span><span class="kw1">include</span> <span
class="kw3">file</span><span class="sy0">=</span><span
class="st0">"header.tpl"</span><span class="br0">}</span>\
 <span class="br0">{</span>insert <span class="kw3">file</span><span
class="sy0">=</span><span class="st0">"banner\_ads.tpl"</span>
title<span class="sy0">=</span><span class="st0">"My Site"</span><span
class="br0">}</span>\
\
 <span class="br0">{</span><span class="kw1">if</span> <span
class="re0">\$logged\_in</span><span class="br0">}</span>\
     Welcome<span class="sy0">,</span> <span class="sy0">\<</span>span
style<span class="sy0">=</span><span
class="st0">"color:{\#fontColor\#}"</span><span
class="sy0">\></span><span class="br0">{</span><span
class="re0">\$name</span><span class="br0">}</span><span
class="sy0">!\</</span>span<span class="sy0">\></span>\
 <span class="br0">{</span><span class="kw1">else</span><span
class="br0">}</span>\
     hi<span class="sy0">,</span> <span class="br0">{</span><span
class="re0">\$name</span><span class="br0">}</span>\
 <span class="br0">{</span><span class="sy0">/</span><span
class="kw1">if</span><span class="br0">}</span>\
\
 <span class="br0">{</span><span class="kw1">include</span> <span
class="kw3">file</span><span class="sy0">=</span><span
class="st0">"footer.tpl"</span><span class="br0">}</span>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.UsingSmarty?action=sourceblock&num=1)

</div>

</div>

Here we see some conventions:

<div class="vspace">

</div>

1.  [Smarty](http://wiki.tamouse.org?n=Technology.Smarty?action=print)
    syntax is fairly straight-forward.
2.  There is a
    [PHP-like](http://wiki.tamouse.org?n=Technology.PHP?action=print)
    language (in fact, it *is* PHP with some restrictions)
3.  There are built-in functions for doing various things
4.  There are variables that can be set and passed to
    [Smarty](http://wiki.tamouse.org?n=Technology.Smarty?action=print)

To execute the template, you make the various assignments to pass
variables to
[Smarty](http://wiki.tamouse.org?n=Technology.Smarty?action=print), then
you display the template:

<div class="vspace">

</div>

<div id="sourceblock2" class="sourceblock">

<div class="sourceblocktext">

<div class="php">

<span class="re0">\$smarty</span><span class="sy0">-\></span><span
class="me1">assign</span><span class="br0">(</span><span
class="st_h">'name'</span><span class="sy0">,</span><span
class="st_h">'Dave'</span><span class="br0">)</span><span
class="sy0">;</span>\
\
 <span class="re0">\$smarty</span><span class="sy0">-\></span><span
class="me1">display</span><span class="br0">(</span><span
class="st_h">'main.tpl'</span><span class="br0">)</span><span
class="sy0">;</span>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.UsingSmarty?action=sourceblock&num=2)

</div>

</div>

In [Smarty](http://wiki.tamouse.org?n=Technology.Smarty?action=print)
template files, you mix the Smarty code with HTML, as you would if you
were using [PHP](http://wiki.tamouse.org?n=Technology.PHP?action=print)
directly for display.

See [The Smarty
Documentation](http://www.smarty.net/docs/en/smarty.for.designers.tpl)
for details on writing
[Smarty](http://wiki.tamouse.org?n=Technology.Smarty?action=print)
templates.

<span class="lfloat"><span style="font-size:83%">*\<\< Back to <span
class="wikiword">[ConfiguringSmarty](http://wiki.tamouse.org?n=Technology.ConfiguringSmarty?action=print)</span>*</span></span>

<div class="vspace">

</div>

</div>
