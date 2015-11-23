<div id="wikitext">

Installing
[Smarty](http://wiki.tamouse.org?n=Technology.Smarty?action=print) is
really quite simple on certain distributions.

<div class="vspace">

</div>

Debian/Ubuntu and derivatives
-----------------------------

Simple as running apt-get:

<div class="vspace">

</div>

<div id="sourceblock1" class="sourceblock">

<div class="sourceblocktext">

<div class="bash">

<span class="co4">\# </span><span class="kw2">apt-get install</span>
smarty

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.InstallingSmarty?action=sourceblock&num=1)

</div>

</div>

and Bob's your uncle.

The above command puts the smarty installation in one of the standard
php library include paths, so you can include it in your
[PHP](http://wiki.tamouse.org?n=Technology.PHP?action=print) code with:

<div class="vspace">

</div>

<div id="sourceblock2" class="sourceblock">

<div class="sourceblocktext">

<div class="php">

<span class="kw1">require\_once</span><span class="br0">(</span><span
class="st_h">'smarty/Smarty.class.php'</span><span
class="br0">)</span><span class="sy0">;</span>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.InstallingSmarty?action=sourceblock&num=2)

</div>

</div>

<div class="vspace">

</div>

OS/X
----

It's a little more difficult to do on OS/X, since there are a few
different possibilities, depending on how and where you've installed
[PHP](http://wiki.tamouse.org?n=Technology.PHP?action=print).

You can always install
[Smarty](http://wiki.tamouse.org?n=Technology.Smarty?action=print)
directly yourself, which is simply a matter of downloading the files
from <http://www.smarty.net/download> -- you probably want the latest
stable release.

Unpack the .zip file someplace temporarily (I often just do this in my
\~/Downloads directory). Then, move the files from the libs directory to
an appropriate place on your
[PHP](http://wiki.tamouse.org?n=Technology.PHP?action=print) [include
path](http://us.php.net/manual/en/ini.core.php#ini.include-path). You
can place them directly in a directory on the include path, or you can
do like the Debian install does and put them in a sub-directory called
"smarty".

If you've installed the
[Smarty](http://wiki.tamouse.org?n=Technology.Smarty?action=print)
libraries directly on the include path, then the line to include it in
your application is:

<div class="vspace">

</div>

<div id="sourceblock3" class="sourceblock">

<div class="sourceblocktext">

<div class="php">

<span class="kw1">require\_once</span><span class="br0">(</span><span
class="st_h">'Smarty.class.php'</span><span class="br0">)</span><span
class="sy0">;</span>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.InstallingSmarty?action=sourceblock&num=3)

</div>

</div>

If you've installed
[Smarty](http://wiki.tamouse.org?n=Technology.Smarty?action=print) in a
sub-directory on your include path, then:

<div class="vspace">

</div>

<div id="sourceblock4" class="sourceblock">

<div class="sourceblocktext">

<div class="php">

<span class="kw1">require\_once</span><span class="br0">(</span><span
class="st_h">'smarty/Smarty.class.php'</span><span
class="br0">)</span><span class="sy0">;</span>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.InstallingSmarty?action=sourceblock&num=4)

</div>

</div>

If you've installed
[Smarty](http://wiki.tamouse.org?n=Technology.Smarty?action=print)
someplace else entirely, you will need to do 2 things:

<div class="vspace">

</div>

1.  Define the constant SMARTY\_DIR to point to the absolute path where
    [Smarty](http://wiki.tamouse.org?n=Technology.Smarty?action=print)
    lives.
2.  Use the SMARTY\_DIR define in your `require_once`{.escaped}
    directive:

<div class="vspace">

</div>

<div id="sourceblock5" class="sourceblock">

<div class="sourceblocktext">

<div class="php">

<span class="kw3">define</span><span class="br0">(</span><span
class="st_h">'SMARTY\_DIR'</span><span class="sy0">,</span><span
class="st_h">'/path/to/smarty/library/'</span><span
class="br0">)</span><span class="sy0">;</span> <span class="co1">//
SMARTY\_DIR \*\*MUST\*\* include the trailing slash</span>\
 <span class="kw1">require\_once</span><span
class="br0">(</span>SMARTY\_DIR<span class="sy0">.</span><span
class="st_h">'Smarty.class.php'</span><span class="br0">)</span><span
class="sy0">;</span>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.InstallingSmarty?action=sourceblock&num=5)

</div>

</div>

<span class="rfloat"><span style="font-size:83%">*On to <span
class="wikiword">[ConfiguringSmarty](http://wiki.tamouse.org?n=Technology.ConfiguringSmarty?action=print)</span> \>\>*</span></span>

\

<div class="vspace">

</div>

</div>
