<div id="wikitext">

<div style="display: none;">

Summary: a nice set of methods to temporarily redirect, capture or
slience STDERR Source:
<http://stackoverflow.com/questions/4459330/how-do-i-temporarily-redirect-stderr-in-ruby>
Posted: July 26, 2013, at 02:07 PM Tags: ruby, faq, stderr, capture
Parent: (Technology.)Ruby includeme:
[Technology.Ruby](http://wiki.tamouse.org?n=Technology.Ruby?action=print)
Categories: [Links](http://wiki.tamouse.org?n=Category.Links),
[HowTos](http://wiki.tamouse.org?n=Category.HowTos)

</div>

<div class="vspace">

</div>

How do I temporarily redirect stderr in Ruby?
---------------------------------------------

<div class="vspace">

</div>

<div id="sourceblock1" class="sourceblock">

<div class="sourceblocktext">

<div class="ruby">

<div class="head">

molf's version

</div>

1.  <div class="de1">

    <span class="kw3">require</span> <span class="st0">"stringio"</span>

    </div>

2.  <div class="de1">

     

    </div>

3.  <div class="de1">

    <span class="kw1">def</span> capture\_stderr

    </div>

4.  <div class="de1">

      <span class="co1">\# The output stream must be an IO-like object.
    In this case we capture it in</span>

    </div>

5.  <div class="de2">

      <span class="co1">\# an in-memory IO object so we can return the
    string value. You can assign any</span>

    </div>

6.  <div class="de1">

      <span class="co1">\# IO object here.</span>

    </div>

7.  <div class="de1">

      previous\_stderr, <span class="re0">\$stderr</span> = <span
    class="re0">\$stderr</span>, <span class="kw4">StringIO</span>.<span
    class="me1">new</span>

    </div>

8.  <div class="de1">

      <span class="kw1">yield</span>

    </div>

9.  <div class="de1">

      <span class="re0">\$stderr</span>.<span class="kw3">string</span>

    </div>

10. <div class="de2">

    <span class="kw1">ensure</span>

    </div>

11. <div class="de1">

      <span class="co1">\# Restore the previous value of stderr
    (typically equal to STDERR).</span>

    </div>

12. <div class="de1">

      <span class="re0">\$stderr</span> = previous\_stderr

    </div>

13. <div class="de1">

    <span class="kw1">end</span>

    </div>

14. <div class="de1">

     

    </div>

15. <div class="de2">

    <span class="co1">\# Usage:</span>

    </div>

16. <div class="de1">

    captured\_output = capture\_stderr <span class="kw1">do</span>

    </div>

17. <div class="de1">

      <span class="co1">\# Does not output anything directly.</span>

    </div>

18. <div class="de1">

      <span class="re0">\$stderr</span>.<span class="kw3">puts</span>
    <span class="st0">"test"</span>

    </div>

19. <div class="de1">

    <span class="kw1">end</span>

    </div>

20. <div class="de2">

     

    </div>

21. <div class="de1">

    captured\_output

    </div>

22. <div class="de1">

    <span class="co1">\#=\> "test\\n"</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.RubyFAQTemporarilyRedirectStderr?action=sourceblock&num=1)

</div>

</div>

<div class="vspace">

</div>

<div id="sourceblock2" class="sourceblock">

<div class="sourceblocktext">

<div class="ruby">

<div class="head">

DHH version

</div>

1.  <div class="de1">

    <span class="kw1">def</span> silence\_streams<span
    class="br0">(</span><span class="sy0">\*</span>streams<span
    class="br0">)</span>

    </div>

2.  <div class="de1">

      on\_hold = streams.<span class="me1">collect</span> <span
    class="br0">{</span> <span class="sy0">|</span>stream<span
    class="sy0">|</span> stream.<span class="me1">dup</span> <span
    class="br0">}</span>

    </div>

3.  <div class="de1">

      streams.<span class="me1">each</span> <span class="kw1">do</span>
    <span class="sy0">|</span>stream<span class="sy0">|</span>

    </div>

4.  <div class="de1">

        stream.<span class="me1">reopen</span><span
    class="br0">(</span><span class="kw4">File</span>::NULL<span
    class="br0">)</span>

    </div>

5.  <div class="de2">

        stream.<span class="me1">sync</span> = <span
    class="kw2">true</span>

    </div>

6.  <div class="de1">

      <span class="kw1">end</span>

    </div>

7.  <div class="de1">

      <span class="kw1">yield</span>

    </div>

8.  <div class="de1">

    <span class="kw1">ensure</span>

    </div>

9.  <div class="de1">

      streams.<span class="me1">each\_with\_index</span> <span
    class="kw1">do</span> <span class="sy0">|</span>stream, i<span
    class="sy0">|</span>

    </div>

10. <div class="de2">

        stream.<span class="me1">reopen</span><span
    class="br0">(</span>on\_hold<span class="br0">[</span>i<span
    class="br0">]</span><span class="br0">)</span>

    </div>

11. <div class="de1">

      <span class="kw1">end</span>

    </div>

12. <div class="de1">

    <span class="kw1">end</span>

    </div>

13. <div class="de1">

     

    </div>

14. <div class="de1">

    <span class="co1">\#Usage:</span>

    </div>

15. <div class="de2">

     

    </div>

16. <div class="de1">

    silence\_streams<span class="br0">(</span>STDERR<span
    class="br0">)</span> <span class="br0">{</span> do\_something <span
    class="br0">}</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.RubyFAQTemporarilyRedirectStderr?action=sourceblock&num=2)

</div>

</div>

<div class="vspace">

</div>

</div>
