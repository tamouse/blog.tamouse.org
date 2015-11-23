<div id="wikitext">

<span id="excerpt"></span> Snarfed from
<http://themurrays.homeip.net/downloads/tivo/s2_hacking/seriesii-mlar.txt>
<span id="excerptend"></span>

<div class="vspace">

</div>

<div id="sourceblock1" class="sourceblock">

<div class="sourceblocktext">

<div class="email">

<span class="sc0"><span class="kw3">From</span><span
class="sy0">:</span> http<span
class="sy0">:</span>//www.dealdatabase.com/forum/showthread.php?s=&threadid=30003</span>\
 <span class="sc0">Author<span class="sy0">:</span> Sleeper</span>\
 <span class="sc0"><span class="kw3">Date</span><span
class="sy0">:</span> 12-02-2003</span>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.SleepersHistoryOfTivoSeriesIIHacks?action=sourceblock&num=1)

</div>

</div>

Yes, you can hack a Series2

Okay, I'm a total newbie at this. I've never hacked a TiVo before. I
haven't used Linux at all for the last 3 years or so. I decided to try
out Tiger's suggestion on how to get a bash prompt. While everything is
still fresh in my head - here is how I did it:

First of all, you need a Linux installation. I grabbed one of my old
PII-450 boxes and installed RedHat 8.0 on it. I grabbed the A drive out
of my TiVo and put it into the machine, and tried to mount a partition..
No luck. As I said, I'm a newbie at this. I figured out that there is
something in the kernel I need to patch. I couldn't find any patches for
the 2.4.18 kernel, so I decided to look at an earlier patch and adapt it
slightly. Basically, you will need to recompile the kernel, and you will
need to change a couple of lines in mac.c

In /usr/src/linux (or wherever you store your linux sources), head into
fs/partitions and open up mac.c in an editor... Find a line looking
something like this (this might vary depending on your kernel version):

<div class="vspace">

</div>

<div id="sourceblock2" class="sourceblock">

<div class="sourceblocktext">

<div class="bash">

<span class="kw1">if</span> <span class="br0">(</span>be16\_to\_cpu<span
class="br0">(</span>md-<span class="sy0">\></span>signature<span
class="br0">)</span> <span class="sy0">!</span>= MAC\_DRIVER\_MAGIC<span
class="br0">)</span> <span class="br0">{</span>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.SleepersHistoryOfTivoSeriesIIHacks?action=sourceblock&num=2)

</div>

</div>

and replace it with:

<div class="vspace">

</div>

<div id="sourceblock3" class="sourceblock">

<div class="sourceblocktext">

<div class="bash">

<span class="kw1">if</span> <span class="br0">(</span>be16\_to\_cpu<span
class="br0">(</span>md-<span class="sy0">\></span>signature<span
class="br0">)</span> <span class="sy0">!</span>= 0x1492<span
class="br0">)</span> <span class="br0">{</span>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.SleepersHistoryOfTivoSeriesIIHacks?action=sourceblock&num=3)

</div>

</div>

right after that if statement you will find a line that sets the
sectorsize, `secsize = be16<something>`, replace this with

<div class="vspace">

</div>

<div id="sourceblock4" class="sourceblock">

<div class="sourceblocktext">

<div class="bash">

secsize = <span class="nu0">512</span>;

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.SleepersHistoryOfTivoSeriesIIHacks?action=sourceblock&num=4)

</div>

</div>

All done. Recompile the kernel and remember to include support for Mac
Partitions.

Also, please note that this patch breaks compatibility with Mac. For me,
it didn't matter. For you, it might.

I was now able to boot up my machine and mount the partitions from my
TiVo disk.

Now, get bootpage.tgz from <http://sekrut.net/~tivo/> and check what the
boot parameters are, in my case:

<div class="vspace">

</div>

<div id="sourceblock5" class="sourceblock">

<div class="sourceblocktext">

<div class="bash">

bootpage <span class="re5">-p</span> <span class="sy0">/</span>dev<span
class="sy0">/</span>hda

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.SleepersHistoryOfTivoSeriesIIHacks?action=sourceblock&num=5)

</div>

</div>

I got "root=/dev/hda7" back from this.. I mounted /dev/hda7,

<div class="vspace">

</div>

<div id="sourceblock6" class="sourceblock">

<div class="sourceblocktext">

<div class="bash">

<span class="kw2">mount</span> <span class="sy0">/</span>dev<span
class="sy0">/</span>hda7 <span class="sy0">/</span>mnt

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.SleepersHistoryOfTivoSeriesIIHacks?action=sourceblock&num=6)

</div>

</div>

and looked at fstab,

<div class="vspace">

</div>

<div id="sourceblock7" class="sourceblock">

<div class="sourceblocktext">

<div class="bash">

<span class="kw2">cat</span> <span class="sy0">/</span>mnt<span
class="sy0">/</span>etc<span class="sy0">/</span>fstab

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.SleepersHistoryOfTivoSeriesIIHacks?action=sourceblock&num=7)

</div>

</div>

and was told that the `/var`{.escaped} partition was on
`/dev/hda9`{.escaped}. I unmounted `/dev/hda7`{.escaped} and mounted
`/dev/hda9`{.escaped}

Now you need to generate the romfs image. first, create a new directory
where you create the hacks file, I created a directory called img and
put a file called hacks in there. I put the following in it (from
Tiger),

<div class="vspace">

</div>

<div id="sourceblock8" class="sourceblock">

<div class="sourceblocktext">

<div class="bash">

<div class="head">

hacks shell script

</div>

<span class="co0">\#!/bin/bash</span>\
\
 <span class="kw3">export</span> <span class="re5">-n</span> BASH\_ENV\
 <span class="re2">BASH\_ENV</span>=\
\
 <span class="br0">(</span>\
 <span class="kw3">exec</span> <span class="nu0">0</span><span
class="sy0">\<\>/</span>dev<span class="sy0">/</span>null <span
class="nu0">1</span><span class="sy0">\>&</span><span
class="nu0">0</span> <span class="nu0">2</span><span
class="sy0">\>&</span><span class="nu0">1</span>\
\
 <span class="kw1">while</span> <span class="br0">[</span> <span
class="sy0">!</span> <span class="re5">-d</span> <span
class="sy0">/</span>var<span class="sy0">/</span>hack <span
class="br0">]</span>; <span class="kw1">do</span>\
 <span class="kw2">sleep</span> <span class="nu0">1</span>\
 <span class="kw1">done</span>\
 <span class="kw3">exec</span> <span class="sy0">/</span>var<span
class="sy0">/</span>hack<span class="sy0">/</span>hackinit\
 <span class="br0">)</span> <span class="sy0">&</span>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.SleepersHistoryOfTivoSeriesIIHacks?action=sourceblock&num=8)

</div>

</div>

make sure it is executable and readable by everyone

<div class="vspace">

</div>

<div id="sourceblock9" class="sourceblock">

<div class="sourceblocktext">

<div class="bash">

<span class="kw2">chmod</span> a+rwx hacks

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.SleepersHistoryOfTivoSeriesIIHacks?action=sourceblock&num=9)

</div>

</div>

now, generate the romfs image. For this you need genromfs. If you don't
already have it, Google is your friend.

<div class="vspace">

</div>

<div id="sourceblock10" class="sourceblock">

<div class="sourceblocktext">

<div class="bash">

genromfs <span class="re5">-f</span> romfs.img <span
class="re5">-d</span> img<span class="sy0">/</span>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.SleepersHistoryOfTivoSeriesIIHacks?action=sourceblock&num=10)

</div>

</div>

this takes all the files from img/ and puts it into romfs.img. I got a
file that was 1024 bytes long.. I dd'd this to /dev/hda16

<div class="vspace">

</div>

<div id="sourceblock11" class="sourceblock">

<div class="sourceblocktext">

<div class="bash">

<span class="kw2">dd</span> <span class="re2">if</span>=romfs.img <span
class="re2">of</span>=<span class="sy0">/</span>dev<span
class="sy0">/</span>hda16 <span class="re2">bs</span>=<span
class="nu0">1024</span> <span class="re2">count</span>=<span
class="nu0">1</span>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.SleepersHistoryOfTivoSeriesIIHacks?action=sourceblock&num=11)

</div>

</div>

All set. Next step is to update the boot parameters, using bootpage.

<div class="vspace">

</div>

<div id="sourceblock12" class="sourceblock">

<div class="sourceblocktext">

<div class="bash">

bootpage <span class="re5">-P</span> <span class="st0">"root=/dev/hda7
BASH\_ENV=\\<span
class="es5">\`mount\\\$IFS-n\\\$IFS/dev/hda16\\\$IFS/mnt;echo\\\$IFS/mnt/hacks\`</span>"</span>
<span class="re5">-C</span> <span class="sy0">/</span>dev<span
class="sy0">/</span>hda

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.SleepersHistoryOfTivoSeriesIIHacks?action=sourceblock&num=12)

</div>

</div>

We now have a setup that will execute anything you put in
/var/hack/hackinit.

I then ported tnlited to Series 2 using subuni's Series 2 MIPS Cross
compiler. I applied the TiVO patches to it and compiled it.. worked out
of the box. I also downloaded a bunch of precompiled binaries from
<http://sekrut.net/~tivo/> and put them in /var/hack/bin

My `/var/hack/hackinit`{.escaped} contains this:

<div class="vspace">

</div>

<div id="sourceblock13" class="sourceblock">

<div class="sourceblocktext">

<div class="bash">

<span class="co0">\#!/bin/bash</span>\
 <span class="sy0">/</span>var<span class="sy0">/</span>hack<span
class="sy0">/</span>bin<span class="sy0">/</span>tnlited <span
class="nu0">23</span> <span class="sy0">/</span>bin<span
class="sy0">/</span><span class="kw2">bash</span>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.SleepersHistoryOfTivoSeriesIIHacks?action=sourceblock&num=13)

</div>

</div>

I also made sure that all files in /var/hack were executable and
readable by everyone,

<div class="vspace">

</div>

<div id="sourceblock14" class="sourceblock">

<div class="sourceblocktext">

<div class="bash">

<span class="kw2">chown</span> <span class="re5">-R</span> a+rwx <span
class="sy0">/</span>var<span class="sy0">/</span>hack

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.SleepersHistoryOfTivoSeriesIIHacks?action=sourceblock&num=14)

</div>

</div>

That's it. I plugged my A drive back in, restarted the TiVO, and voila!
It worked.

A big thanks to Tiger for releasing the solution and subuni for the
cross compiler and tools.

<div class="vspace">

</div>

<div id="sourceblock15" class="sourceblock">

<div class="sourceblocktext">

<div class="bash">

<span class="co4">bash-2.02\# </span><span class="kw2">uname</span>
<span class="re5">-a</span>\
 Linux <span class="br0">(</span>none<span class="br0">)</span>
2.4.4-<span class="sy0">\`</span>TiVo-<span class="nu0">3.0</span> <span
class="co0">\#11 Wed May 8 15:40:02 PDT 2002 mips unknown</span>\
 <span class="co4">bash-2.02\#</span>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.SleepersHistoryOfTivoSeriesIIHacks?action=sourceblock&num=15)

</div>

</div>

<div class="vspace">

</div>

</div>
