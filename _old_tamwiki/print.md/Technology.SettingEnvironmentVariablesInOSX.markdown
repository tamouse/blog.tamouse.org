<div id="wikitext">

In
<http://stackoverflow.com/questions/135688/setting-environment-variables-in-os-x>,
the general consensus is to change the `/etc/launch.conf` file. The
simplest way is to use the `launchctl` command:

<div class="vspace">

</div>

<div id="sourceblock1" class="sourceblock">

<div class="sourceblocktext">

<div class="bash">

<span class="kw2">sudo</span> launchctl setenv PATH <span
class="sy0">/</span>usr<span class="sy0">/</span>local<span
class="sy0">/</span>bin:<span class="sy0">/</span>usr<span
class="sy0">/</span>local<span class="sy0">/</span>sbin:<span
class="sy0">/</span>opt<span class="sy0">/</span>local<span
class="sy0">/</span>bin:<span class="sy0">/</span>opt<span
class="sy0">/</span>local<span class="sy0">/</span>sbin:<span
class="sy0">/</span>bin:<span class="sy0">/</span>sbin:<span
class="sy0">/</span>usr<span class="sy0">/</span>bin:<span
class="sy0">/</span>usr<span class="sy0">/</span>sbin

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.SettingEnvironmentVariablesInOSX?action=sourceblock&num=1)

</div>

</div>

One can also set the path by putting the command in the
`/etc/launch.conf` file:

<div class="vspace">

</div>

<div id="sourceblock2" class="sourceblock">

<div class="sourceblocktext">

<div>

setenv PATH
/usr/local/bin:/usr/local/sbin:/opt/local/bin:/opt/local/sbin:/bin:/sbin:/usr/bin:/usr/sbin\

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.SettingEnvironmentVariablesInOSX?action=sourceblock&num=2)

</div>

</div>

<div class="vspace">

</div>

</div>
