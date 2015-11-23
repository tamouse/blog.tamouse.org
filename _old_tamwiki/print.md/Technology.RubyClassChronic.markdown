<div id="wikitext">

<span id="excerpt"></span> [Chronic](http://chronic.rubyforge.org) is a
[Ruby](http://wiki.tamouse.org?n=Technology.Ruby?action=print) gem that
can parse a huge variety of date and time formats. <span
id="excerptend"></span>

<div class="vspace">

</div>

Synopsis
--------

Taken from [README](http://chronic.rubyforge.org/files/README.html)
file:

<div class="vspace">

</div>

<div id="sourceblock1" class="sourceblock">

<div class="sourceblocktext">

<div class="bash">

<div class="head">

Installing Chronic

</div>

<span class="co4">\$ </span><span class="kw2">sudo</span> gem <span
class="kw2">install</span> chronic

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.RubyClassChronic?action=sourceblock&num=1)

</div>

</div>

<div class="vspace">

</div>

<div id="sourceblock2" class="sourceblock">

<div class="sourceblocktext">

<div class="ruby">

<div class="head">

Using Chronic

</div>

1.  <div class="de1">

    <span class="kw3">require</span> <span class="st0">'chronic'</span>

    </div>

2.  <div class="de1">

     

    </div>

3.  <div class="de1">

    <span class="kw4">Time</span>.<span class="me1">now</span>

    </div>

4.  <div class="de1">

     <span class="co1">\# =\> 2012-11-08 12:06:49 -0600 </span>

    </div>

5.  <div class="de2">

     

    </div>

6.  <div class="de1">

    Chronic.<span class="me1">parse</span><span
    class="br0">(</span><span class="st0">"tomorrow"</span><span
    class="br0">)</span>

    </div>

7.  <div class="de1">

      <span class="co1">\# =\> 2012-11-09 12:00:00 -0600 </span>

    </div>

8.  <div class="de1">

     

    </div>

9.  <div class="de1">

    Chronic.<span class="me1">parse</span><span
    class="br0">(</span><span class="st0">"monday"</span>, <span
    class="re3">:context</span> <span class="sy0">=\></span> <span
    class="re3">:past</span><span class="br0">)</span>

    </div>

10. <div class="de2">

      <span class="co1">\# =\> 2012-11-05 12:00:00 -0600</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.RubyClassChronic?action=sourceblock&num=2)

</div>

</div>

*Note: This module might make a* great *improvement over the
[remind](http://wiki.tamouse.org?n=Technology.Remind?action=print)
tool's syntax.*

<div class="vspace">

</div>

Some gotchas
------------

Chronic is good, but sometimes it's a little.. errmmm "chronic".

*(Note: these are run with `Chronic.debug=true`{.escaped})*

<div class="vspace">

</div>

### Next Hour On the Hour

Just giving "next hour" always seems to give half past the next hour
mark:

<div class="vspace">

</div>

<div id="sourceblock3" class="sourceblock">

<div class="sourceblocktext">

<div class="ruby">

Chronic.<span class="me1">parse</span> <span class="st0">"next
hour"</span>\
 <span
class="co1">\# +---------------------------------------------------</span>\
 <span class="co1">\# | [next(grabber-next) , hour(repeater-hour)
]</span>\
 <span
class="co1">\# +---------------------------------------------------</span>\
 <span class="co1">\# -anchor</span>\
 <span class="co1">\# Handler: handle\_r</span>\
 <span class="co1">\# Handler-class: Chronic::RepeaterHour</span>\
 <span class="co1">\# --(2013-06-06 13:00:00 -0500..2013-06-06
14:00:00 -0500)</span>\
 <span class="co1">\#--(2013-06-06 13:00:00 -0500..2013-06-06
14:00:00 -0500)</span>\
 <span class="co1">\# =\> 2013-06-06 13:30:00 -0500</span>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.RubyClassChronic?action=sourceblock&num=3)

</div>

</div>

Okay, this doesn't actually work:

<div class="vspace">

</div>

<div id="sourceblock4" class="sourceblock">

<div class="sourceblocktext">

<div class="ruby">

Chronic.<span class="me1">parse</span> <span class="st0">"next hour on
the hour"</span>\
 <span
class="co1">\# +---------------------------------------------------</span>\
 <span class="co1">\# | [next(grabber-next) , hour(repeater-hour) ,
on(separator-on) , hour(repeater-hour) ]</span>\
 <span
class="co1">\# +---------------------------------------------------</span>\
 <span class="co1">\# -none</span>\
 <span class="co1">\# =\> nil</span>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.RubyClassChronic?action=sourceblock&num=4)

</div>

</div>

Nor does this:

<div class="vspace">

</div>

<div id="sourceblock5" class="sourceblock">

<div class="sourceblocktext">

<div class="ruby">

Chronic.<span class="me1">parse</span> <span class="st0">"next hour at 0
minutes"</span>\
 <span
class="co1">\# +---------------------------------------------------</span>\
 <span class="co1">\# | [next(grabber-next) , hour(repeater-hour) ,
at(separator-at) , 0(repeater-time-0?, scalar, scalar-year-2000) ,
minutes(repeater-minute) ]</span>\
 <span
class="co1">\# +---------------------------------------------------</span>\
 <span class="co1">\# -anchor</span>\
 <span class="co1">\# Handler: handle\_r</span>\
 <span class="co1">\# Handler-class: Chronic::RepeaterDayPortion</span>\
 <span class="co1">\# --(2013-06-07 06:00:00 -0500..2013-06-07
18:00:00 -0500)</span>\
 <span class="co1">\# --(2013-06-07 06:00:00 -0500..2013-06-07
18:00:00 -0500)</span>\
 <span class="co1">\# --(2013-06-07 06:00:00 -0500..2013-06-07
07:00:00 -0500)</span>\
 <span class="co1">\# --(2013-06-07 06:00:00 -0500..2013-06-07
06:01:00 -0500)</span>\
 <span class="co1">\#  =\> nil</span>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.RubyClassChronic?action=sourceblock&num=5)

</div>

</div>

<div class="vspace">

</div>

#### Solution?

I came up with this fugly thing:

<div class="vspace">

</div>

<div id="sourceblock6" class="sourceblock">

<div class="sourceblocktext">

<div class="ruby">

Chronic.<span class="me1">parse</span><span class="br0">(</span><span
class="st0">"next hour"</span>, guess: <span
class="kw2">false</span><span class="br0">)</span>.<span
class="me1">first</span>\
 <span
class="co1">\# +---------------------------------------------------</span>\
 <span class="co1">\# | [next(grabber-next) , hour(repeater-hour)
]</span>\
 <span
class="co1">\# +---------------------------------------------------</span>\
 <span class="co1">\# -anchor</span>\
 <span class="co1">\# Handler: handle\_r</span>\
 <span class="co1">\# Handler-class: Chronic::RepeaterHour</span>\
 <span class="co1">\# --(2013-06-06 13:00:00 -0500..2013-06-06
14:00:00 -0500)</span>\
 <span class="co1">\# --(2013-06-06 13:00:00 -0500..2013-06-06
14:00:00 -0500)</span>\
 <span class="co1">\#  =\> 2013-06-06 13:00:00 -0500</span>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.RubyClassChronic?action=sourceblock&num=6)

</div>

</div>

<div class="vspace">

</div>

<div style="display: none;">

Summary:Chronic is a Ruby class that allows you to find timestamps based
on natural (human) language" Parent:(Technology.)Ruby <span
class="wikiword">[IncludeMe](http://wiki.tamouse.org?n=Technology.IncludeMe?action=edit)[?](http://wiki.tamouse.org?n=Technology.IncludeMe?action=edit)</span>:[Ruby](http://wiki.tamouse.org?n=Technology.Ruby?action=print)
Categories:[Articles](http://wiki.tamouse.org?n=Category.Articles),[HowTos](http://wiki.tamouse.org?n=Category.HowTos)
Tags: ruby, date parsing, gems

</div>

</div>
