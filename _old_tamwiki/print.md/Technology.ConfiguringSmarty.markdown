<div id="wikitext">

So now you have
[Smarty](http://wiki.tamouse.org?n=Technology.Smarty?action=print)
[installed](http://wiki.tamouse.org?n=Technology.InstallingSmarty?action=print)
and it's time to get it configured in you
[PHP](http://wiki.tamouse.org?n=Technology.PHP?action=print)
application.

As we saw in <span
class="wikiword">[InstallingSmarty](http://wiki.tamouse.org?n=Technology.InstallingSmarty?action=print)</span>,
adding
[Smarty](http://wiki.tamouse.org?n=Technology.Smarty?action=print) to
you application is as simple as including it somewhere in your code and
instatiating a smarty object:

<div class="vspace">

</div>

<div id="sourceblock1" class="sourceblock">

<div class="sourceblocktext">

<div class="php">

<span class="kw1">require\_once</span><span class="br0">(</span><span
class="st_h">'smarty/Smarty.class.php'</span><span
class="br0">)</span><span class="sy0">;</span>\
 <span class="re0">\$smarty</span> <span class="sy0">=</span> <span
class="kw2">new</span> Smarty<span class="br0">(</span><span
class="br0">)</span><span class="sy0">;</span>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.ConfiguringSmarty?action=sourceblock&num=1)

</div>

</div>

<div class="vspace">

</div>

Setting [Smarty](http://wiki.tamouse.org?n=Technology.Smarty?action=print) environment
--------------------------------------------------------------------------------------

Smarty typically expects things to be in a standard place:

<div class="vspace">

</div>

1.  templates is a subdirectory of your application's root
2.  templates\_c is a subdirectory of your application's root and must
    be write-able by the server user/group.

If this is not the case, you can set where
[Smarty](http://wiki.tamouse.org?n=Technology.Smarty?action=print) will
find things explicitly:

<div class="vspace">

</div>

<div id="sourceblock2" class="sourceblock">

<div class="sourceblocktext">

<div class="php">

<span class="re0">\$smarty</span><span class="sy0">-\></span><span
class="me1">setTemplateDir</span><span class="br0">(</span><span
class="st_h">'/abs/path/to/your/application/templates/'</span><span
class="br0">)</span><span class="sy0">;</span>\
 <span class="re0">\$smarty</span><span class="sy0">-\></span><span
class="me1">setCompileDir</span><span class="br0">(</span><span
class="st_h">'/abs/path/to/your/application/templates\_c/'</span><span
class="br0">)</span><span class="sy0">;</span>\
 <span class="re0">\$smarty</span><span class="sy0">-\></span><span
class="me1">setConfigDir</span><span class="br0">(</span><span
class="st_h">'/abs/path/to/your/application/configs/'</span><span
class="br0">)</span><span class="sy0">;</span>\
 <span class="re0">\$smarty</span><span class="sy0">-\></span><span
class="me1">setCacheDir</span><span class="br0">(</span><span
class="st_h">'/abs/path/to/your/application/cache/'</span><span
class="br0">)</span><span class="sy0">;</span>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.ConfiguringSmarty?action=sourceblock&num=2)

</div>

</div>

The above sets absolute paths to the directories
[Smarty](http://wiki.tamouse.org?n=Technology.Smarty?action=print) wants
to use. Again, make sure the web server user/group has permission to
write to the templates\_c and cache directories.

In practice, but putting `templates`{.escaped} and
`templates_c`{.escaped} in the application root and
`chown`{.escaped}-ing the latter to `www-data:www-data`{.escaped} seems
sufficent without specifying paths directly.

<span class="lfloat">*\<\< back to <span
class="wikiword">[InstallingSmarty](http://wiki.tamouse.org?n=Technology.InstallingSmarty?action=print)</span>*</span>

<span class="rfloat">*On to <span
class="wikiword">[UsingSmarty](http://wiki.tamouse.org?n=Technology.UsingSmarty?action=print)</span> \>\>*</span>

\

<div class="vspace">

</div>

</div>
