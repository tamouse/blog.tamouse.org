<div id="wikitext">

*Page saved from
<http://www.sgvulcan.com/installing-debian-using-only-ssh/>*

<div class="vspace">

</div>

Installing Debian using only SSH
================================

January 6, 2010 By [silviu](http://www.sgvulcan.com/author/admin/)
[Tweet](https://twitter.com/share)
[digg](http://digg.com/submit?url=http://www.sgvulcan.com/installing-debian-using-only-ssh/&title=Installing+Debian+using+only+SSH)

I have a headless machine at home that I plan to use as a backup and
development server. Even though I’m a Skackware guy I chose to install
Debian on it. Of course I could have hooked a monitor and keyboard to it
but for the sake of exercise I wanted to see if it’s possible to install
debian using ssh from the very beginning.

The short answer: **it’s possible … maybe**. Your headless machine
should already be set to boot of cd if one is present, otherwise it will
not work.

Here are the steps needed to start you off:

1\. Download the netinst cd image

<div class="vspace">

</div>

<div id="sourceblock1" class="sourceblock">

<div class="sourceblocktext">

<div class="bash">

<span class="kw2">wget</span> http:<span
class="sy0">//</span>mirrors.kernel.org<span
class="sy0">/</span>debian-cd<span class="sy0">/</span>5.0.3<span
class="sy0">/</span>i386<span class="sy0">/</span>iso-cd<span
class="sy0">/</span>debian-<span class="nu0">503</span>-i386-netinst.iso

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.InstallingDebianUsingOnlySshSgVulcan20120926031353?action=sourceblock&num=1)

</div>

</div>

2\. Mount the ISO to a folder, let’s call it isoorig

<div class="vspace">

</div>

<div id="sourceblock2" class="sourceblock">

<div class="sourceblocktext">

<div class="bash">

<span class="kw2">mkdir</span> isoorig\
 <span class="kw2">mount</span> <span class="re5">-o</span> loop <span
class="re5">-t</span> iso9660 debian-<span
class="nu0">503</span>-i386-netinst.iso isoorig

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.InstallingDebianUsingOnlySshSgVulcan20120926031353?action=sourceblock&num=2)

</div>

</div>

3\. Extract to new folder called isonew

<div class="vspace">

</div>

<div id="sourceblock3" class="sourceblock">

<div class="sourceblocktext">

<div class="bash">

<span class="kw2">mkdir</span> isonew\
 rsync <span class="re5">-a</span> <span class="re5">-H</span> ??<span
class="re2">exclude</span>=TRANS.TBL isoorig<span class="sy0">/</span>
isonew

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.InstallingDebianUsingOnlySshSgVulcan20120926031353?action=sourceblock&num=3)

</div>

</div>

4\. Change the menu to load SSH on boot by default

<div class="vspace">

</div>

<div id="sourceblock4" class="sourceblock">

<div class="sourceblocktext">

<div class="bash">

<span class="kw3">cd</span> isonew\
 <span class="kw2">nano</span> isolinux<span class="sy0">/</span>txt.cfg

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.InstallingDebianUsingOnlySshSgVulcan20120926031353?action=sourceblock&num=4)

</div>

</div>

DELETE: remove "menu default" from "label install"

ADD:

<div class="vspace">

</div>

<div id="sourceblock5" class="sourceblock">

<div class="sourceblocktext">

<div>

label netinstall\
menu label \^Install Over SSH\
menu default\
kernel /install.386/vmlinuz\
append auto=true vga=normal file=/cdrom/preseed.cfg
initrd=/install.386/initrd.gz locale=en\_US
console-keymaps-at/keymap=us\

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.InstallingDebianUsingOnlySshSgVulcan20120926031353?action=sourceblock&num=5)

</div>

</div>

CHANGE:\
“default install” to “default netinstall”

EDIT: both files below and change “timeout 0″ to “timeout 4″ to make it
auto select netinstall

<div class="vspace">

</div>

<div id="sourceblock6" class="sourceblock">

<div class="sourceblocktext">

<div class="bash">

<span class="kw2">nano</span> isolinux<span
class="sy0">/</span>isolinux.cfg\
 <span class="kw2">nano</span> isolinux<span
class="sy0">/</span>prompt.cfg\
 <span class="br0">(</span>:souceend:<span class="br0">)</span>\
\
 <span class="nu0">5</span>. Create preseed.cfg <span
class="kw2">file</span>\
\
 <span class="br0">(</span>:source <span
class="re2">lang</span>=bash:<span class="br0">)</span>\
 <span class="kw2">nano</span> isonew<span
class="sy0">/</span>preseed.cfg

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.InstallingDebianUsingOnlySshSgVulcan20120926031353?action=sourceblock&num=6)

</div>

</div>

6\. PASTE this to the preseed file:

<div class="vspace">

</div>

<div id="sourceblock7" class="sourceblock">

<div class="sourceblocktext">

<div>

\#\#\#\# Contents of the preconfiguration file\
\#\#\# Localization\
\# Locale sets language and country.\
d-i debian-installer/locale select en\_US\
\# Keyboard selection.\
d-i console-keymaps-at/keymap select us\
\#\#\# Network configuration\
\# netcfg will choose an interface that has link if possible. This makes
it\
\# skip displaying a list if there is more than one interface.\
d-i netcfg/choose\_interface select auto\
\# Any hostname and domain names assigned from dhcp take precedence
over\
\# values set here. However, setting the values still prevents the
questions\
\# from being shown, even if values come from dhcp.\
d-i netcfg/get\_hostname string newdebian\
d-i netcfg/get\_domain string local\
\# Disable that annoying WEP key dialog.\
d-i netcfg/wireless\_wep string\
\# The wacky dhcp hostname that some ISPs use as a password of sorts.\
\#d-i netcfg/dhcp\_hostname string radish\
d-i preseed/early\_command string anna-install network-console\
\# Setup ssh password\
d-i network-console/password password install\
d-i network-console/password-again password install\

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.InstallingDebianUsingOnlySshSgVulcan20120926031353?action=sourceblock&num=7)

</div>

</div>

7\. Recreate md5sum.txt file

<div id="sourceblock8" class="sourceblock">

<div class="sourceblocktext">

<div class="bash">

md5sum <span class="sy0">\`</span><span class="kw2">find</span> <span
class="re5">-follow</span> <span class="re5">-type</span> f<span
class="sy0">\`</span> <span class="sy0">\></span> md5sum.txt

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.InstallingDebianUsingOnlySshSgVulcan20120926031353?action=sourceblock&num=8)

</div>

</div>

8\. Create your new iso image

<div class="vspace">

</div>

<div id="sourceblock9" class="sourceblock">

<div class="sourceblocktext">

<div class="bash">

mkisofs <span class="re5">-o</span> ..<span
class="sy0">/</span>custom\_install.iso <span class="re5">-r</span>
<span class="re5">-J</span> <span class="re5">-no-emul-boot</span> <span
class="re5">-boot-load-size</span> <span class="nu0">4</span> <span
class="re5">-boot-info-table</span> <span class="re5">-b</span>
isolinux<span class="sy0">/</span>isolinux.bin <span
class="re5">-c</span> isolinux<span class="sy0">/</span>boot.cat ..<span
class="sy0">/</span>isonew

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.InstallingDebianUsingOnlySshSgVulcan20120926031353?action=sourceblock&num=9)

</div>

</div>

The image you just obtained is ready to burn. This loads everything
automatically and goes to the SSH screen.

Thanks go to people on various debian forums, this information was
collected via trial and error and by combining info found around. Have
fun with your shiny new headless debian box.

<div class="vspace">

</div>

<div style="display: none;">

Summary: I have a headless machine at home that I plan to use as a
backup and development server. Tags: debian,ssh,headless Source:
<http://www.sgvulcan.com/installing-debian-using-only-ssh/>
Parent:(Technology.)Linux
includeme:[Technology.Linux](http://wiki.tamouse.org?n=Technology.Linux?action=print)
Categories:[Articles](http://wiki.tamouse.org?n=Category.Articles),[HowTos](http://wiki.tamouse.org?n=Category.HowTos)

</div>

Page saved at: Wed, 26 Sep 2012 03:13:53 -0500

<div class="vspace">

</div>

</div>
