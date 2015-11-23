<div id="wikitext">

<span id="excerpt"></span> Using <span
class="wikiword">[JavaScript](http://wiki.tamouse.org?n=Technology.JavaScript?action=print)</span>,
one can construct a set of timers to schedule an inactivity timeout.
Inactivity is indicated by the lack of keyboard and mouse button
presses. If there is a way to indicate mouse movement, that would be
useful, as well. We'll be using
[jQuery](http://wiki.tamouse.org?n=Technology.JQuery?action=print), so
look out for that, and remember to include the
[jQuery](http://wiki.tamouse.org?n=Technology.JQuery?action=print)
javascript in your code. <span id="excerptend"></span>

<div class="vspace">

</div>

------------------------------------------------------------------------

<span id="example1"></span>

Example 1
---------

First, assuming we are using
[PHP](http://wiki.tamouse.org?n=Technology.PHP?action=print), we can set
a couple of configuration variables:

<div class="vspace">

</div>

<div id="sourceblock1" class="sourceblock">

<div class="sourceblocktext">

<div class="php">

1.  <div class="de1">

    <span class="co1">// Number of milliseconds to wait before timing
    out the page due to inactivity </span>

    </div>

2.  <div class="de1">

     <span class="re0">\$page\_timeout</span> <span class="sy0">=</span>
    <span class="nu0">1000</span> <span class="sy0">\*</span> <span
    class="nu0">60</span> <span class="sy0">\*</span> <span
    class="nu0">30</span><span class="sy0">;</span> <span class="co1">//
    30 minutes </span>

    </div>

3.  <div class="de1">

     <span class="re0">\$page\_timeout\_warning\_timeout</span> <span
    class="sy0">=</span> <span class="nu0">1000</span> <span
    class="sy0">\*</span> <span class="nu0">30</span><span
    class="sy0">;</span> <span class="co1">// 30 seconds</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.InactivityTimeoutOnAPage?action=sourceblock&num=1)

</div>

</div>

Next, in the code that emits the header:

<div class="vspace">

</div>

<div id="sourceblock2" class="sourceblock">

<div class="sourceblocktext">

<div class="javascript">

1.  <div class="de1">

    <span class="sy0">\<?</span>php <span class="kw1">if</span> <span
    class="br0">(</span>\$page\_timeout <span class="sy0">\></span>
    <span class="nu0">0</span><span class="br0">)</span> <span
    class="br0">{</span> <span class="sy0">?\></span>

    </div>

2.  <div class="de1">

            <span class="kw1">var</span> autoCloseTimer<span
    class="sy0">;</span>

    </div>

3.  <div class="de1">

            <span class="kw1">var</span> timeoutObject<span
    class="sy0">;</span>

    </div>

4.  <div class="de1">

            <span class="kw1">var</span> timePeriod <span
    class="sy0">=</span> <span class="sy0">\<?</span>php echo
    \$page\_timeout <span class="sy0">?\>;</span>

    </div>

5.  <div class="de2">

            <span class="kw1">var</span> warnPeriod <span
    class="sy0">=</span> <span class="sy0">\<?</span>php echo
    \$page\_timeout\_warning\_timeout <span class="sy0">?\>;</span>

    </div>

6.  <div class="de1">

     

    </div>

7.  <div class="de1">

            <span class="kw1">function</span> promptForClose<span
    class="br0">(</span><span class="br0">)</span>

    </div>

8.  <div class="de1">

            <span class="br0">{</span>

    </div>

9.  <div class="de1">

            \$<span class="br0">(</span><span
    class="st0">'\#autoCloseDiv'</span><span class="br0">)</span>.<span
    class="me1">css</span><span class="br0">(</span><span
    class="st0">'display'</span><span class="sy0">,</span><span
    class="st0">'block'</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

10. <div class="de2">

             autoCloseTimer <span class="sy0">=</span> setTimeout<span
    class="br0">(</span><span
    class="st0">"definitelyClose()"</span><span
    class="sy0">,</span>warnPeriod<span class="br0">)</span><span
    class="sy0">;</span>

    </div>

11. <div class="de1">

            <span class="br0">}</span>

    </div>

12. <div class="de1">

     

    </div>

13. <div class="de1">

     

    </div>

14. <div class="de1">

            <span class="kw1">function</span> autoClose<span
    class="br0">(</span><span class="br0">)</span>

    </div>

15. <div class="de2">

            <span class="br0">{</span>

    </div>

16. <div class="de1">

                    <span class="co1">//alert("auto close
    prompt");</span>

    </div>

17. <div class="de1">

             \$<span class="br0">(</span><span
    class="st0">'\#autoCloseDiv'</span><span class="br0">)</span>.<span
    class="me1">css</span><span class="br0">(</span><span
    class="st0">'display'</span><span class="sy0">,</span><span
    class="st0">'block'</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

18. <div class="de1">

             autoCloseTimer <span class="sy0">=</span> setTimeout<span
    class="br0">(</span><span
    class="st0">"definitelyClose()"</span><span
    class="sy0">,</span>timePeriod<span class="br0">)</span><span
    class="sy0">;</span> <span class="co1">//starts countdown to
    closure</span>

    </div>

19. <div class="de1">

            <span class="br0">}</span>

    </div>

20. <div class="de2">

     

    </div>

21. <div class="de1">

            <span class="kw1">function</span> cancelClose<span
    class="br0">(</span><span class="br0">)</span>

    </div>

22. <div class="de1">

            <span class="br0">{</span>

    </div>

23. <div class="de1">

     

    </div>

24. <div class="de1">

             clearTimeout<span class="br0">(</span>autoCloseTimer<span
    class="br0">)</span><span class="sy0">;</span> <span
    class="co1">//stops auto-close timer</span>

    </div>

25. <div class="de2">

             \$<span class="br0">(</span><span
    class="st0">'\#autoCloseDiv'</span><span class="br0">)</span>.<span
    class="me1">css</span><span class="br0">(</span><span
    class="st0">'display'</span><span class="sy0">,</span><span
    class="st0">'none'</span><span class="br0">)</span><span
    class="sy0">;</span> <span class="co1">//hides message</span>

    </div>

26. <div class="de1">

            <span class="co1">//alert("canceled close");</span>

    </div>

27. <div class="de1">

            <span class="br0">}</span>

    </div>

28. <div class="de1">

     

    </div>

29. <div class="de1">

            <span class="kw1">function</span> resetTimeout<span
    class="br0">(</span><span class="br0">)</span>

    </div>

30. <div class="de2">

            <span class="br0">{</span>

    </div>

31. <div class="de1">

                    <span class="co1">//alert("timer reset");</span>

    </div>

32. <div class="de1">

              clearTimeout<span class="br0">(</span>timeoutObject<span
    class="br0">)</span><span class="sy0">;</span> <span
    class="co1">//stops timer</span>

    </div>

33. <div class="de1">

              timeoutObject <span class="sy0">=</span> setTimeout<span
    class="br0">(</span><span class="st0">"promptForClose()"</span><span
    class="sy0">,</span>timePeriod<span class="br0">)</span><span
    class="sy0">;</span> <span class="co1">//restarts timer from
    0</span>

    </div>

34. <div class="de1">

            <span class="br0">}</span>

    </div>

35. <div class="de2">

     

    </div>

36. <div class="de1">

     

    </div>

37. <div class="de1">

            <span class="kw1">function</span> definitelyClose<span
    class="br0">(</span><span class="br0">)</span> <span
    class="br0">{</span>

    </div>

38. <div class="de1">

                    <span class="co1">//alert("logging off")</span>

    </div>

39. <div class="de1">

                location.<span class="me1">href</span><span
    class="sy0">=</span><span class="st0">"logoff.php"</span><span
    class="sy0">;</span> <span class="co1">// for example, log the user
    off if inactive</span>

    </div>

40. <div class="de2">

            <span class="br0">}</span>

    </div>

41. <div class="de1">

     <span class="sy0">\<?</span>php <span class="br0">}</span> <span
    class="co1">// close if (\$page\_timeout) ?\></span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.InactivityTimeoutOnAPage?action=sourceblock&num=2)

</div>

</div>

Next, we need to set the `<body>` tags appropriately:

<div class="vspace">

</div>

<div id="sourceblock3" class="sourceblock">

<div class="sourceblocktext">

<div class="html4strict">

1.  <div class="de1">

    <span class="sc2">\<<span class="kw2">body</span> <span
    class="kw3">onLoad</span> <span class="sy0">=</span><span
    class="st0">"timeoutObject=setTimeout('promptForClose()',timePeriod);"</span>\<?php</span>

    </div>

2.  <div class="de1">

    <span class="sc2">                <span class="sy0">//</span> only
    set the triggers if a user is logged in</span>

    </div>

3.  <div class="de1">

    <span class="sc2">                if <span
    class="br0">(</span>\$page\_timeout \></span> 0): ?\>

    </div>

4.  <div class="de1">

                    onkeydown='resetTimeout();'
    onmousedown='resetTimeout();'

    </div>

5.  <div class="de2">

                    <span class="sc2">\<?php endif: ?\></span>\>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.InactivityTimeoutOnAPage?action=sourceblock&num=3)

</div>

</div>

Finally, we create a `<div>` in the `<body>` of the document to serve as
our pop-up indicator that the session is closing:

<div class="vspace">

</div>

<div id="sourceblock4" class="sourceblock">

<div class="sourceblocktext">

<div class="html4strict">

1.  <div class="de1">

    <span class="sc2">\<<span class="kw2">div</span> <span
    class="kw3">id</span><span class="sy0">=</span><span
    class="st0">'autoCloseDiv'</span> <span
    class="kw3">style</span><span class="sy0">=</span><span
    class="st0">"display:none;"</span>\></span>

    </div>

2.  <div class="de1">

                    <span class="sc2">\<<span
    class="kw2">h3</span>\>\<?php echo get\_vocab<span
    class="br0">(</span><span
    class="st0">'inactivitywarning'</span><span class="br0">)</span>
    ?\>\<<span class="sy0">/</span><span class="kw2">h3</span>\></span>

    </div>

3.  <div class="de1">

                    <span class="sc2">\<<span
    class="kw2">p</span>\>\<?php echo get\_vocab<span
    class="br0">(</span><span class="st0">'warningmessage'</span><span
    class="br0">)</span> ?\>\<<span class="sy0">/</span><span
    class="kw2">p</span>\></span>

    </div>

4.  <div class="de1">

                    <span class="sc2">\<<span class="kw2">div</span>
    <span class="kw3">class</span><span class="sy0">=</span><span
    class="st0">"submit\_buttons"</span>\></span>

    </div>

5.  <div class="de2">

                    <span class="sc2">\<<span class="kw2">input</span>
    <span class="kw3">type</span><span class="sy0">=</span><span
    class="st0">'button'</span> <span class="kw3">value</span><span
    class="sy0">=</span><span class="st0">'\<?php echo
    get\_vocab('</span>closebutton<span class="st0">')
    ?\></span></span>' onclick='definitelyClose();' /\>

    </div>

6.  <div class="de1">

                    <span class="sc2">\<<span class="kw2">input</span>
    <span class="kw3">type</span><span class="sy0">=</span><span
    class="st0">'button'</span> <span class="kw3">value</span><span
    class="sy0">=</span><span class="st0">'\<?php echo
    get\_vocab('</span>cancelbutton<span class="st0">')
    ?\></span></span>' onclick='cancelClose();' /\>

    </div>

7.  <div class="de1">

                    <span class="sc2">\<<span class="sy0">/</span><span
    class="kw2">div</span>\></span>

    </div>

8.  <div class="de1">

            <span class="sc2">\<<span class="sy0">/</span><span
    class="kw2">div</span>\></span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.InactivityTimeoutOnAPage?action=sourceblock&num=4)

</div>

</div>

*Note use of language substitution function `get_vocab()`. This is done
with
[PHPLocalization](http://wiki.tamouse.org?n=Technology.PHPLocalization?action=edit)[?](http://wiki.tamouse.org?n=Technology.PHPLocalization?action=edit).*

In addition, the following
[CSS](http://wiki.tamouse.org?n=Technology.CSS?action=print) is useful
for displaying the `autoCloseDiv`:

<div class="vspace">

</div>

<div id="sourceblock5" class="sourceblock">

<div class="sourceblocktext">

<div class="css">

1.  <div class="de1">

    <span class="re0">\#autoCloseDiv</span> <span class="br0">{</span>

    </div>

2.  <div class="de1">

             <span class="kw1">background-color</span><span
    class="sy0">:</span> <span class="re0">\#FFF</span><span
    class="sy0">;</span>

    </div>

3.  <div class="de1">

            <span class="kw1">color</span><span class="sy0">:</span>
    <span class="re0">\#000</span>

    </div>

4.  <div class="de1">

            <span class="kw1">margin-left</span><span
    class="sy0">:</span> <span class="re3">-100px</span><span
    class="sy0">;</span>

    </div>

5.  <div class="de2">

            <span class="kw1">margin-top</span><span
    class="sy0">:</span> <span class="re3">-100px</span><span
    class="sy0">;</span>

    </div>

6.  <div class="de1">

            <span class="kw1">width</span><span class="sy0">:</span>
    <span class="re3">200px</span><span class="sy0">;</span>

    </div>

7.  <div class="de1">

            <span class="kw1">height</span><span class="sy0">:</span>
    <span class="re3">200px</span><span class="sy0">;</span>

    </div>

8.  <div class="de1">

            <span class="kw1">position</span><span class="sy0">:</span>
    <span class="kw2">absolute</span><span class="sy0">;</span>

    </div>

9.  <div class="de1">

            <span class="kw1">top</span><span class="sy0">:</span> <span
    class="re3">50%</span><span class="sy0">;</span>

    </div>

10. <div class="de2">

            <span class="kw1">left</span><span class="sy0">:</span>
    <span class="re3">50%</span><span class="sy0">;</span>

    </div>

11. <div class="de1">

            <span class="kw1">text-align</span><span
    class="sy0">:</span> <span class="kw2">center</span><span
    class="sy0">;</span>

    </div>

12. <div class="de1">

            <span class="kw1">border</span><span class="sy0">:</span>
    <span class="re3">1px</span> <span class="kw2">solid</span> <span
    class="re0">\#999</span><span class="sy0">;</span>

    </div>

13. <div class="de1">

     <span class="br0">}</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.InactivityTimeoutOnAPage?action=sourceblock&num=5)

</div>

</div>

**Edit:** Turns out there is a mouse movement event handler. jQuery
example of such is shown at [jQuery mousemove
handler](http://api.jquery.com/mousemove/). So for the above example,
adding the following should suffice:

<div class="vspace">

</div>

<div id="sourceblock6" class="sourceblock">

<div class="sourceblocktext">

<div class="html4strict">

1.  <div class="de1">

    <span class="sc2">\<<span class="kw2">script</span>\></span>

    </div>

2.  <div class="de1">

        \$("body").mousemove(resetTimeout());

    </div>

3.  <div class="de1">

      <span class="sc2">\<<span class="sy0">/</span><span
    class="kw2">script</span>\></span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.InactivityTimeoutOnAPage?action=sourceblock&num=6)

</div>

</div>

<div class="vspace">

</div>

------------------------------------------------------------------------

<span id="example2"></span>

Example 2
---------

This is a more complete
[jQuery](http://wiki.tamouse.org?n=Technology.JQuery?action=print) UI
example. Here, I've recast the functions as anonymous functions assigned
to variables, so they can be used in assignments to the jQuery
callbacks. Also, not that everything that is needed by the code inside
the \$(document).ready function must reside within that function's
scope. If you access something outside that scope, the
[jQuery](http://wiki.tamouse.org?n=Technology.JQuery?action=print) UI
functions will fail, and you'll get very odd results. Also, there is
additional code below that will reset the timeout functions once in the
logged-off state.

<div class="vspace">

</div>

<div id="sourceblock7" class="sourceblock">

<div class="sourceblocktext">

<div class="javascript">

1.  <div class="de1">

    <span class="sy0">\<</span>script type<span
    class="sy0">=</span><span class="st0">"text/javascript"</span>
    charset<span class="sy0">=</span><span
    class="st0">"utf-8"</span><span class="sy0">\></span>

    </div>

2.  <div class="de1">

     <span class="coMULTI">/\* \<![CDATA[ \*/</span>

    </div>

3.  <div class="de1">

     \$<span class="br0">(</span><span class="kw1">function</span><span
    class="br0">(</span><span class="br0">)</span><span
    class="br0">{</span>

    </div>

4.  <div class="de1">

            <span class="kw1">var</span> autoCloseTimer<span
    class="sy0">;</span>

    </div>

5.  <div class="de2">

            <span class="kw1">var</span> timeoutObject<span
    class="sy0">;</span>

    </div>

6.  <div class="de1">

            <span class="kw1">var</span> timePeriod <span
    class="sy0">=</span> <span class="nu0">5</span> <span
    class="sy0">\*</span> <span class="nu0">1000</span><span
    class="sy0">;</span>  <span class="co1">// n \* 1000 - number of
    seconds until timeout</span>

    </div>

7.  <div class="de1">

            <span class="kw1">var</span> warnPeriod <span
    class="sy0">=</span> <span class="nu0">5</span> <span
    class="sy0">\*</span> <span class="nu0">1000</span><span
    class="sy0">;</span> <span class="co1">// n \* 1000 - number of
    seconds to show warning before timing out</span>

    </div>

8.  <div class="de1">

     

    </div>

9.  <div class="de1">

            <span class="kw1">var</span> promptForClose <span
    class="sy0">=</span> <span class="kw1">function</span><span
    class="br0">(</span><span class="br0">)</span>

    </div>

10. <div class="de2">

            <span class="br0">{</span>

    </div>

11. <div class="de1">

                    \$<span class="br0">(</span><span
    class="st0">'\#autoCloseDiv'</span><span class="br0">)</span>.<span
    class="me1">dialog</span><span class="br0">(</span><span
    class="st0">'open'</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

12. <div class="de1">

                    autoCloseTimer <span class="sy0">=</span>
    setTimeout<span class="br0">(</span>definitelyClose<span
    class="sy0">,</span>warnPeriod<span class="br0">)</span><span
    class="sy0">;</span>

    </div>

13. <div class="de1">

            <span class="br0">}</span>

    </div>

14. <div class="de1">

     

    </div>

15. <div class="de2">

            <span class="kw1">var</span> cancelClose <span
    class="sy0">=</span> <span class="kw1">function</span><span
    class="br0">(</span><span class="br0">)</span>

    </div>

16. <div class="de1">

            <span class="br0">{</span>

    </div>

17. <div class="de1">

                    \$<span class="br0">(</span><span
    class="st0">'\#autoCloseDiv'</span><span class="br0">)</span>.<span
    class="me1">dialog</span><span class="br0">(</span><span
    class="st0">'close'</span><span class="br0">)</span><span
    class="sy0">;</span> <span class="co1">//hides message</span>

    </div>

18. <div class="de1">

                    clearTimeout<span
    class="br0">(</span>autoCloseTimer<span class="br0">)</span><span
    class="sy0">;</span> <span class="co1">//stops auto-close
    timer</span>

    </div>

19. <div class="de1">

                    resetTimeout<span class="br0">(</span><span
    class="br0">)</span><span class="sy0">;</span>

    </div>

20. <div class="de2">

            <span class="br0">}</span>

    </div>

21. <div class="de1">

     

    </div>

22. <div class="de1">

            <span class="kw1">var</span>  resetTimeout <span
    class="sy0">=</span> <span class="kw1">function</span><span
    class="br0">(</span><span class="br0">)</span>

    </div>

23. <div class="de1">

            <span class="br0">{</span>

    </div>

24. <div class="de1">

                    clearTimeout<span
    class="br0">(</span>timeoutObject<span class="br0">)</span><span
    class="sy0">;</span> <span class="co1">//stops timer</span>

    </div>

25. <div class="de2">

                    <span class="kw1">if</span> <span
    class="br0">(</span>timePeriod <span class="sy0">\></span> <span
    class="nu0">0</span><span class="br0">)</span> <span
    class="br0">{</span>

    </div>

26. <div class="de1">

                            timeoutObject <span class="sy0">=</span>
    setTimeout<span class="br0">(</span>promptForClose<span
    class="sy0">,</span>timePeriod<span class="br0">)</span><span
    class="sy0">;</span> <span class="co1">//restarts timer from
    0</span>

    </div>

27. <div class="de1">

                    <span class="br0">}</span>

    </div>

28. <div class="de1">

            <span class="br0">}</span>

    </div>

29. <div class="de1">

     

    </div>

30. <div class="de2">

     

    </div>

31. <div class="de1">

            <span class="kw1">var</span> definitelyClose <span
    class="sy0">=</span> <span class="kw1">function</span><span
    class="br0">(</span><span class="br0">)</span> <span
    class="br0">{</span>

    </div>

32. <div class="de1">

                    clearTimeout<span
    class="br0">(</span>autoCloseTimer<span class="br0">)</span><span
    class="sy0">;</span>

    </div>

33. <div class="de1">

                    \$<span class="br0">(</span><span
    class="st0">'\#autoCloseDiv'</span><span class="br0">)</span>.<span
    class="me1">dialog</span><span class="br0">(</span><span
    class="st0">'close'</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

34. <div class="de1">

                    timePeriod <span class="sy0">=</span> <span
    class="nu0">0</span><span class="sy0">;</span>

    </div>

35. <div class="de2">

                    \$<span class="br0">(</span><span
    class="st0">"\#junk-text"</span><span class="br0">)</span>.<span
    class="me1">hide</span><span class="br0">(</span><span
    class="st0">'slow'</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

36. <div class="de1">

                    \$<span class="br0">(</span><span
    class="st0">"\#logged-off"</span><span class="br0">)</span>.<span
    class="me1">show</span><span class="br0">(</span><span
    class="st0">'slow'</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

37. <div class="de1">

            <span class="br0">}</span>

    </div>

38. <div class="de1">

     

    </div>

39. <div class="de1">

            \$<span class="br0">(</span><span
    class="st0">"\#logged-off"</span><span class="br0">)</span>.<span
    class="me1">hide</span><span class="br0">(</span><span
    class="br0">)</span><span class="sy0">;</span>

    </div>

40. <div class="de2">

            \$<span class="br0">(</span><span
    class="st0">"\#logged-off"</span><span class="br0">)</span>.<span
    class="me1">text</span><span class="br0">(</span><span
    class="st0">"Logged off - click to reset"</span><span
    class="br0">)</span><span class="sy0">;</span>

    </div>

41. <div class="de1">

            \$<span class="br0">(</span><span
    class="st0">"\#logged-off"</span><span class="br0">)</span>.<span
    class="me1">addClass</span><span class="br0">(</span><span
    class="st0">'ui-state-highlight'</span><span
    class="br0">)</span><span class="sy0">;</span>

    </div>

42. <div class="de1">

            \$<span class="br0">(</span><span
    class="st0">"\#logged-off"</span><span class="br0">)</span>.<span
    class="me1">addClass</span><span class="br0">(</span><span
    class="st0">'ui-corner-all'</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

43. <div class="de1">

            \$<span class="br0">(</span><span
    class="st0">"\#logged-off"</span><span class="br0">)</span>.<span
    class="me1">css</span><span class="br0">(</span><span
    class="br0">{</span><span class="st0">'width'</span> <span
    class="sy0">:</span> <span class="st0">'100px'</span><span
    class="sy0">,</span> <span class="st0">'text-align'</span> <span
    class="sy0">:</span> <span class="st0">'center'</span><span
    class="br0">}</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

44. <div class="de1">

            \$<span class="br0">(</span><span
    class="st0">"\#logged-off"</span><span class="br0">)</span>.<span
    class="me1">attr</span><span class="br0">(</span><span
    class="st0">'title'</span><span class="sy0">,</span><span
    class="st0">'click to reset'</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

45. <div class="de2">

            \$<span class="br0">(</span><span
    class="st0">"\#logged-off"</span><span class="br0">)</span>.<span
    class="me1">click</span><span class="br0">(</span><span
    class="kw1">function</span><span class="br0">(</span><span
    class="br0">)</span><span class="br0">{</span>

    </div>

46. <div class="de1">

                    timePeriod <span class="sy0">=</span> <span
    class="nu0">5</span> <span class="sy0">\*</span> <span
    class="nu0">1000</span><span class="sy0">;</span>

    </div>

47. <div class="de1">

                    resetTimeout<span class="br0">(</span><span
    class="br0">)</span><span class="sy0">;</span>

    </div>

48. <div class="de1">

                    \$<span class="br0">(</span><span
    class="kw1">this</span><span class="br0">)</span>.<span
    class="me1">hide</span><span class="br0">(</span><span
    class="st0">'slide'</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

49. <div class="de1">

                    \$<span class="br0">(</span><span
    class="st0">"\#junk-text"</span><span class="br0">)</span>.<span
    class="me1">show</span><span class="br0">(</span><span
    class="st0">'slow'</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

50. <div class="de2">

                    <span class="kw1">return</span> <span
    class="kw2">false</span><span class="sy0">;</span> <span
    class="co1">// prevent anything else from happenning</span>

    </div>

51. <div class="de1">

            <span class="br0">}</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

52. <div class="de1">

     

    </div>

53. <div class="de1">

            \$<span class="br0">(</span><span
    class="st0">'\#inactivitytimeout'</span><span
    class="br0">)</span>.<span class="me1">click</span><span
    class="br0">(</span>resetTimeout<span class="br0">)</span><span
    class="sy0">;</span>

    </div>

54. <div class="de1">

            \$<span class="br0">(</span><span
    class="st0">'\#inactivitytimeout'</span><span
    class="br0">)</span>.<span class="me1">keypress</span><span
    class="br0">(</span>resetTimeout<span class="br0">)</span><span
    class="sy0">;</span>

    </div>

55. <div class="de2">

            \$<span class="br0">(</span><span class="st0">'\#topnav
    a:first-child'</span><span class="br0">)</span>.<span
    class="me1">focus</span><span class="br0">(</span><span
    class="br0">)</span><span class="sy0">;</span> <span class="co1">//
    must provide a focus on the body for something to accept a keydown
    event</span>

    </div>

56. <div class="de1">

     

    </div>

57. <div class="de1">

            resetTimeout<span class="br0">(</span><span
    class="br0">)</span><span class="sy0">;</span>

    </div>

58. <div class="de1">

            <span class="kw1">var</span> warnSeconds <span
    class="sy0">=</span> warnPeriod <span class="sy0">/</span> <span
    class="nu0">1000</span><span class="sy0">;</span>

    </div>

59. <div class="de1">

            \$<span class="br0">(</span><span
    class="st0">"\#warn-seconds"</span><span class="br0">)</span>.<span
    class="me1">text</span><span class="br0">(</span>warnSeconds<span
    class="br0">)</span><span class="sy0">;</span>

    </div>

60. <div class="de2">

            \$<span class="br0">(</span><span
    class="st0">"\#autoCloseDiv"</span><span class="br0">)</span>.<span
    class="me1">dialog</span><span class="br0">(</span><span
    class="br0">{</span>

    </div>

61. <div class="de1">

                    autoOpen<span class="sy0">:</span> <span
    class="kw2">false</span><span class="sy0">,</span>

    </div>

62. <div class="de1">

                    buttons<span class="sy0">:</span> <span
    class="br0">{</span>

    </div>

63. <div class="de1">

                            <span class="st0">'Log off'</span> <span
    class="sy0">:</span> definitelyClose<span class="sy0">,</span>

    </div>

64. <div class="de1">

                            <span class="st0">'Continue'</span> <span
    class="sy0">:</span> cancelClose

    </div>

65. <div class="de2">

                    <span class="br0">}</span>

    </div>

66. <div class="de1">

            <span class="br0">}</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

67. <div class="de1">

     

    </div>

68. <div class="de1">

     <span class="br0">}</span><span class="br0">)</span>

    </div>

69. <div class="de1">

     

    </div>

70. <div class="de2">

     <span class="coMULTI">/\* ]]\> \*/</span>

    </div>

71. <div class="de1">

     <span class="sy0">\</</span>script<span class="sy0">\></span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.InactivityTimeoutOnAPage?action=sourceblock&num=7)

</div>

</div>

The page body would have:

<div class="vspace">

</div>

<div id="sourceblock8" class="sourceblock">

<div class="sourceblocktext">

<div class="html4strict">

1.  <div class="de1">

    <span class="sc2">\<<span class="kw2">body</span> <span
    class="kw3">id</span><span class="sy0">=</span><span
    class="st0">"inactivitytimeout"</span> <span
    class="kw3">title</span><span class="sy0">=</span><span
    class="st0">"inactivitytimeout"</span> <span
    class="kw3">lang</span><span class="sy0">=</span><span
    class="st0">"en-US"</span>\></span>

    </div>

2.  <div class="de1">

            <span class="sc2">\<<span class="kw2">div</span> <span
    class="kw3">id</span><span class="sy0">=</span><span
    class="st0">"autoCloseDiv"</span> <span
    class="kw3">title</span><span class="sy0">=</span><span
    class="st0">"Warning!"</span> <span class="kw3">style</span><span
    class="sy0">=</span><span class="st0">"display:
    block"</span>\></span>

    </div>

3.  <div class="de1">

                    <span class="sc2">\<<span class="kw2">span</span>
    <span class="kw3">class</span><span class="sy0">=</span><span
    class="st0">"ui-icon ui-icon-alert"</span> <span
    class="kw3">style</span><span class="sy0">=</span><span
    class="st0">"float:left; margin:0 7px 20px 0;"</span>\>\<<span
    class="sy0">/</span><span class="kw2">span</span>\></span>

    </div>

4.  <div class="de1">

                    Session will close in <span class="sc2">\<<span
    class="kw2">span</span> <span class="kw3">id</span><span
    class="sy0">=</span><span class="st0">"warn-seconds"</span>\>\<<span
    class="sy0">/</span><span class="kw2">span</span>\></span> seconds.

    </div>

5.  <div class="de2">

            <span class="sc2">\<<span class="sy0">/</span><span
    class="kw2">div</span>\></span>

    </div>

6.  <div class="de1">

     

    </div>

7.  <div class="de1">

     <span class="sc2">\<<span class="kw2">div</span> <span
    class="kw3">id</span><span class="sy0">=</span><span
    class="st0">"topnav"</span>\>\<<span class="kw2">a</span> <span
    class="kw3">href</span><span class="sy0">=</span><span
    class="st0">"\#"</span>\>\<<span class="sy0">/</span><span
    class="kw2">a</span>\>\<<span class="sy0">/</span><span
    class="kw2">div</span>\></span>

    </div>

8.  <div class="de1">

     <span class="sc2">\<<span class="kw2">div</span> <span
    class="kw3">id</span><span class="sy0">=</span><span
    class="st0">"content"</span>\></span>

    </div>

9.  <div class="de1">

     <span class="sc2">\<<span class="kw2">p</span> <span
    class="kw3">id</span><span class="sy0">=</span><span
    class="st0">"junk-text"</span>\></span>Lorem ipsum dolor sit amet,
    consectetur adipiscing elit. Vestibulum sem dui, laoreet ut
    scelerisque quis, dictum vitae nisi. Nulla facilisi. Nunc a turpis
    sed lectus hendrerit pulvinar at vel sapien. Vivamus placerat auctor
    iaculis. Nam gravida gravida felis, in viverra eros vehicula at.
    Praesent vulputate blandit lectus, ut scelerisque erat laoreet
    auctor. Maecenas blandit pharetra nisl, sit amet pretium lorem
    congue non. Praesent dignissim, lectus nec tristique lobortis, felis
    metus placerat risus, id fermentum lectus nisl id mauris. Nullam
    viverra accumsan massa eget congue. Nam neque lacus, tempus vel
    fringilla eget, molestie dapibus diam. Proin sapien est, luctus
    vitae congue eget, ultricies a enim. <span class="sc2">\<<span
    class="sy0">/</span><span class="kw2">p</span>\></span>

    </div>

10. <div class="de2">

     <span class="sc2">\<<span class="kw2">p</span> <span
    class="kw3">id</span><span class="sy0">=</span><span
    class="st0">"logged-off"</span>\>\<<span class="sy0">/</span><span
    class="kw2">p</span>\></span>

    </div>

11. <div class="de1">

     <span class="sc2">\<<span class="sy0">/</span><span
    class="kw2">div</span>\></span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.InactivityTimeoutOnAPage?action=sourceblock&num=8)

</div>

</div>

<div class="vspace">

</div>

</div>
