<div id="wikitext">

What Is My IP?
--------------

<span id="excerpt"></span> Since many people live behind a router, your
machine's address is a local one, typically in the 192.168.x.x range, or
10.x.x.x. Sometimes it is desirable to know your external address, i.e.,
the one you are known by on the internet. Typically this is the address
that connects directly to your router from outside. <span
id="excerptend"></span>

<div class="vspace">

</div>

External Services
-----------------

There are a large handfull of sites that will give you your external IP
address. The simplest one offered to the public (and recommended by me)
is <http://whatismyip.org>. It just returns your external IP address in
plain text. To use in curl, simply:

<div class="vspace">

</div>

``` {.escaped}
 curl -s http://whatismyip.org
```

will show you the address.

<div class="vspace">

</div>

Home Brew PHP script
--------------------

If you have an external server, and would like to host your own script,
here's a simple PHP script that will do it:

<div class="vspace">

</div>

<div id="sourceblock1" class="sourceblock">

<div class="sourceblocktext">

<div class="php">

<div class="head">

Return just the caller's IP address

</div>

1.  <div class="de1">

    <span class="kw2">\<?php</span>

    </div>

2.  <div class="de1">

    <span class="kw3">header</span><span class="br0">(</span><span
    class="st0">"Content-type: text/plain;"</span><span
    class="br0">)</span><span class="sy0">;</span> <span class="co1">//
    we're just sending plain text, no HTML</span>

    </div>

3.  <div class="de1">

    <span class="kw1">echo</span> <span
    class="re0">\$\_SERVER</span><span class="br0">[</span><span
    class="st_h">'REMOTE\_ADDR'</span><span class="br0">]</span> <span
    class="sy0">.</span> PHP\_EOL<span class="sy0">;</span> <span
    class="co1">// the caller's address is in the server
    variables</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.WhatIsMyIp?action=sourceblock&num=1)

</div>

</div>

<div class="vspace">

</div>

Home Brew Perl CGI script
-------------------------

An equally simple perl script if you only have CGI abilities:

<div class="vspace">

</div>

<div id="sourceblock2" class="sourceblock">

<div class="sourceblocktext">

<div class="perl">

<div class="head">

Perl version of what is my ip?

</div>

1.  <div class="de1">

    <span class="co1">\#!/usr/bin/perl</span>

    </div>

2.  <div class="de1">

    <span class="kw3">print</span> <span class="st0">"Content-type:
    text/plain;<span class="es0">\\n</span><span
    class="es0">\\n</span>"</span><span class="sy0">;</span> <span
    class="co1">\# two linefeeds gives a space after header</span>

    </div>

3.  <div class="de1">

    <span class="kw3">print</span> <span class="re0">\$ENV</span><span
    class="br0">{</span><span class="st_h">'REMOTE\_ADDR'</span><span
    class="br0">}</span><span class="sy0">.</span><span
    class="st0">"<span class="es0">\\n</span>"</span><span
    class="sy0">;</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.WhatIsMyIp?action=sourceblock&num=2)

</div>

</div>

My version is at: <http://tamouse.org/cgi-bin/myip.cgi>

<div class="vspace">

</div>

<div style="display: none;">

Summary:how to determine your external (network-facing) IP address
Parent:(Technology.)Tools <span
class="wikiword">[IncludeMe](http://wiki.tamouse.org?n=Technology.IncludeMe?action=edit)[?](http://wiki.tamouse.org?n=Technology.IncludeMe?action=edit)</span>:[Technology.Tools](http://wiki.tamouse.org?n=Technology.Tools?action=print)
Categories:[HowTos](http://wiki.tamouse.org?n=Category.HowTos) Tags:
networking, ip address

</div>

<div class="vspace">

</div>

</div>
