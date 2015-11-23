<div id="wikitext">

<div style="display: none;">

Summary:A gem providing "time travel" and "time freezing" capabilities,
making it dead simple to test time-dependent code. It provides a unified
method to mock Time.now, Date.today, and <span
class="wikiword">[DateTime](http://wiki.tamouse.org?n=Technology.DateTime?action=edit)[?](http://wiki.tamouse.org?n=Technology.DateTime?action=edit)</span>.now
in a single call. Parent:(Technology.)Ruby <span
class="wikiword">[IncludeMe](http://wiki.tamouse.org?n=Technology.IncludeMe?action=edit)[?](http://wiki.tamouse.org?n=Technology.IncludeMe?action=edit)</span>:[Ruby](http://wiki.tamouse.org?n=Technology.Ruby?action=print)
Categories:[Articles](http://wiki.tamouse.org?n=Category.Articles),
[HowTos](http://wiki.tamouse.org?n=Category.HowTos) Tags: ruby, gem,
testing, time

</div>

<span id="excerpt"></span>

<div class="round lrindent nutshell">

<span style="font-size:120%"> ***Incomplete*** </span>

</div>

[Timecop](https://github.com/travisjeffery/timecop) is a nifty ruby gem
that is a great aid in testing code that is time-dependent. You can set
the time a test will think it's running at, or freeze time to a certain
point. <span id="excerptend"></span>

<div class="vspace">

</div>

Links:
------

-   [Github repo for Timecop](https://github.com/travisjeffery/timecop)
-   [Blog post announcing Timecop with some usage
    info](http://blog.smartlogicsolutions.com/2008/11/19/timecop-freeze-time-in-ruby-for-better-testing/)
-   [Timecop README
    page](https://github.com/travisjeffery/timecop/blob/master/README.markdown)
-   [Timecop rdoc](http://johntrupiano.rubyforge.org/timecop/)

<div class="vspace">

</div>

Basic usage
-----------

<div id="sourceblock1" class="sourceblock">

<div class="sourceblocktext">

<div class="ruby">

<div class="head">

spec test

</div>

1.  <div class="de1">

    <span class="kw3">require</span> <span
    class="st0">'spec\_helper'</span>

    </div>

2.  <div class="de1">

     

    </div>

3.  <div class="de1">

    describe <span class="st0">"Time"</span> <span class="kw1">do</span>

    </div>

4.  <div class="de1">

     

    </div>

5.  <div class="de2">

      context <span class="st0">"now"</span> <span class="kw1">do</span>

    </div>

6.  <div class="de1">

        it <span class="st0">"should report the current time"</span>
    <span class="kw1">do</span>

    </div>

7.  <div class="de1">

          <span class="kw4">Time</span>.<span
    class="me1">now</span>.<span class="me1">should</span> ==
    Chronic.<span class="me1">parse</span><span
    class="br0">(</span><span class="st0">"now"</span><span
    class="br0">)</span>

    </div>

8.  <div class="de1">

        <span class="kw1">end</span>

    </div>

9.  <div class="de1">

      <span class="kw1">end</span>

    </div>

10. <div class="de2">

     

    </div>

11. <div class="de1">

      context <span class="st0">"future"</span> <span
    class="kw1">do</span>

    </div>

12. <div class="de1">

        before <span class="kw1">do</span>

    </div>

13. <div class="de1">

          Timecop.<span class="me1">travel</span><span
    class="br0">(</span><span class="nu0">1</span>.<span
    class="me1">week</span><span class="br0">)</span>

    </div>

14. <div class="de1">

        <span class="kw1">end</span>

    </div>

15. <div class="de2">

     

    </div>

16. <div class="de1">

        after <span class="kw1">do</span>

    </div>

17. <div class="de1">

          Timecop.<span class="kw2">return</span>

    </div>

18. <div class="de1">

        <span class="kw1">end</span>

    </div>

19. <div class="de1">

     

    </div>

20. <div class="de2">

        it <span class="st0">"should report the time a week from
    now"</span> <span class="kw1">do</span>

    </div>

21. <div class="de1">

          <span class="kw4">Time</span>.<span
    class="me1">now</span>.<span class="me1">should</span> ==
    Chronic.<span class="me1">parse</span><span
    class="br0">(</span><span class="st0">"next week"</span><span
    class="br0">)</span>

    </div>

22. <div class="de1">

        <span class="kw1">end</span>

    </div>

23. <div class="de1">

      <span class="kw1">end</span>

    </div>

24. <div class="de1">

    <span class="kw1">end</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.TimecopRubyGem?action=sourceblock&num=1)

</div>

</div>

<div class="vspace">

</div>

Using Timecop with Chronic
--------------------------

Timecop, in combination with
[Chronic](http://wiki.tamouse.org?n=Technology.ChronicRubyGem?action=edit)[?](http://wiki.tamouse.org?n=Technology.ChronicRubyGem?action=edit)
makes for some dandy testing ability:

<div class="vspace">

</div>

<div id="sourceblock2" class="sourceblock">

<div class="sourceblocktext">

<div class="ruby">

<div class="head">

Using Timecop with Chronic

</div>

1.  <div class="de1">

    Timecop.<span class="me1">travel</span><span
    class="br0">(</span>Chronic.<span class="me1">parse</span><span
    class="br0">(</span><span class="st0">'this tuesday
    5:00'</span><span class="br0">)</span><span class="br0">)</span>
    <span class="kw1">do</span>

    </div>

2.  <div class="de1">

      <span class="co1">\# test-fu</span>

    </div>

3.  <div class="de1">

    <span class="kw1">end</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

</div>

</div>

<div class="vspace">

</div>

</div>
