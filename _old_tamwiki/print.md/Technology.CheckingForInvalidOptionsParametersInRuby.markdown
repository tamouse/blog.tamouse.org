<div id="wikitext">

<div style="display: none;">

Summary: When passing in option parameters, sometimes it is useful to
check that only valid options have been entered. Parent:
(Technology.)Ruby <span
class="wikiword">[IncludeMe](http://wiki.tamouse.org?n=Technology.IncludeMe?action=edit)[?](http://wiki.tamouse.org?n=Technology.IncludeMe?action=edit)</span>:
[Ruby](http://wiki.tamouse.org?n=Technology.Ruby?action=print)
Categories: [HowTos](http://wiki.tamouse.org?n=Category.HowTos),
[FAQ](http://wiki.tamouse.org?n=Category.FAQ) Tags: ruby, options,
parameters Source: none Posted: Mon Dec 9 07:04:19 2013

</div>

<div class="vspace">

</div>

<div class="faq">

How do I check that only valid options have been passed to my method?

Take the difference between the option hash keys and an array of valid
keys.

</div>

In ruby, one can pass options to a method via an inferred hash by
placing the options at the end of the method call parameter list:

<div class="vspace">

</div>

        my_method(object, option1: true)

for example.

<div class="vspace">

</div>

Define the method with an options hash
--------------------------------------

<div id="sourceblock1" class="sourceblock">

<div class="sourceblocktext">

<div class="ruby">

<div class="head">

method definition

</div>

1.  <div class="de1">

    <span class="kw1">def</span> my\_method<span
    class="br0">(</span>parm1, parm2, options=<span
    class="br0">{</span><span class="br0">}</span><span
    class="br0">)</span>

    </div>

2.  <div class="de1">

      <span class="co1">\# ... (code)</span>

    </div>

3.  <div class="de1">

    <span class="kw1">end</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.CheckingForInvalidOptionsParametersInRuby?action=sourceblock&num=1)

</div>

</div>

<div class="vspace">

</div>

Create a constant array with the list of valid option parameters
----------------------------------------------------------------

<div id="sourceblock2" class="sourceblock">

<div class="sourceblocktext">

<div class="ruby">

<div class="head">

Valid method option parameters

</div>

1.  <div class="de1">

    VALID\_OPTIONS = <span class="br0">[</span>

    </div>

2.  <div class="de1">

      <span class="re3">:option1</span>,

    </div>

3.  <div class="de1">

      <span class="re3">:option2</span>,

    </div>

4.  <div class="de1">

      <span class="re3">:option3</span>

    </div>

5.  <div class="de2">

    <span class="br0">]</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.CheckingForInvalidOptionsParametersInRuby?action=sourceblock&num=2)

</div>

</div>

<div class="vspace">

</div>

Take the array difference between the options keys and the valid options
------------------------------------------------------------------------

<div id="sourceblock3" class="sourceblock">

<div class="sourceblocktext">

<div class="ruby">

<div class="head">

check options

</div>

1.  <div class="de1">

    <span class="kw1">unless</span> options.<span
    class="kw2">nil</span>?

    </div>

2.  <div class="de1">

      invalid\_options = options.<span class="me1">keys</span> <span
    class="sy0">-</span> VALID\_OPTIONS

    </div>

3.  <div class="de1">

      <span class="kw3">raise</span> <span class="st0">"Invalid options
    given: \#{invalid\_options}"</span> <span class="kw1">unless</span>
    invalid\_options.<span class="me1">empty</span>?

    </div>

4.  <div class="de1">

    <span class="kw1">end</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.CheckingForInvalidOptionsParametersInRuby?action=sourceblock&num=3)

</div>

</div>

<div class="vspace">

</div>

DRY it up
---------

If you do this a lot (say more than twice :) ) you should consider
making the check for invalid parameters a method:

<div class="vspace">

</div>

<div id="sourceblock4" class="sourceblock">

<div class="sourceblocktext">

<div class="ruby">

<div class="head">

check\_options

</div>

1.  <div class="de1">

    <span class="kw1">def</span> check\_options<span
    class="br0">(</span>options=<span class="br0">{</span><span
    class="br0">}</span>, valid\_options=<span class="br0">[</span><span
    class="br0">]</span><span class="br0">)</span>

    </div>

2.  <div class="de1">

      <span class="kw3">raise</span> <span
    class="kw4">ArgumentError</span>.<span class="me1">new</span><span
    class="br0">(</span><span class="st0">"options not a Hash:
    \#{options.class}"</span><span class="br0">)</span> <span
    class="kw1">unless</span> options.<span class="kw2">nil</span>?
    <span class="sy0">||</span> options.<span
    class="me1">kind\_of</span>?<span class="br0">(</span><span
    class="kw4">Hash</span><span class="br0">)</span>

    </div>

3.  <div class="de1">

      <span class="kw2">return</span> <span class="br0">[</span><span
    class="br0">]</span> <span class="kw1">if</span> options.<span
    class="kw2">nil</span>?

    </div>

4.  <div class="de1">

      options.<span class="me1">keys</span> <span class="sy0">-</span>
    valid\_options

    </div>

5.  <div class="de2">

    <span class="kw1">end</span>

    </div>

6.  <div class="de1">

     

    </div>

7.  <div class="de1">

    <span class="kw1">def</span> check\_options!<span
    class="br0">(</span>options, valid\_options<span
    class="br0">)</span>

    </div>

8.  <div class="de1">

      invalid\_options = check\_options

    </div>

9.  <div class="de1">

      <span class="kw3">raise</span> <span class="st0">"Invalid options
    given: \#{invalid\_options}"</span> <span class="kw1">unless</span>
    invalid\_options.<span class="me1">empty</span>?

    </div>

10. <div class="de2">

    <span class="kw1">end</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.CheckingForInvalidOptionsParametersInRuby?action=sourceblock&num=4)

</div>

</div>

The first method simply returns an array of invalid options, or an empty
array if there were no invalid options. Note that a nil options set is
valid.

The second method is dangerous in that it will raise an exception if
invalid options were given.

In your method, then, you can do this:

<div class="vspace">

</div>

<div id="sourceblock5" class="sourceblock">

<div class="sourceblocktext">

<div class="ruby">

<div class="head">

my method with options vetting

</div>

1.  <div class="de1">

    <span class="kw1">def</span> my\_method<span
    class="br0">(</span>parm1, parm2, options=<span
    class="br0">{</span><span class="br0">}</span><span
    class="br0">)</span>

    </div>

2.  <div class="de1">

      check\_options!<span class="br0">(</span>options, <span
    class="br0">[</span><span class="re3">:option1</span>, <span
    class="re3">:option2</span>, <span class="re3">:option3</span><span
    class="br0">]</span><span class="br0">)</span>

    </div>

3.  <div class="de1">

     

    </div>

4.  <div class="de1">

      <span class="co1">\# ... (code)</span>

    </div>

5.  <div class="de2">

    <span class="kw1">end</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.CheckingForInvalidOptionsParametersInRuby?action=sourceblock&num=5)

</div>

</div>

<div class="vspace">

</div>

Finally, a module
-----------------

Here is a complete module for vetting options parameters:

<div class="vspace">

</div>

<div id="sourceblock6" class="sourceblock">

<div class="sourceblocktext">

<div class="ruby">

<div class="head">

CheckOptionsParameters Module

</div>

1.  <div class="de1">

    <span class="kw1">module</span> CheckOptionsParameters

    </div>

2.  <div class="de1">

     

    </div>

3.  <div class="de1">

      <span class="kw1">def</span> check\_for\_invalid\_options<span
    class="br0">(</span>options=<span class="br0">{</span><span
    class="br0">}</span>,valid\_options=<span class="br0">[</span><span
    class="br0">]</span><span class="br0">)</span>

    </div>

4.  <div class="de1">

        <span class="kw3">raise</span><span class="br0">(</span><span
    class="kw4">ArgumentError</span>.<span class="me1">new</span><span
    class="br0">(</span><span class="st0">"options is not a Hash:
    \#{options.class}"</span><span class="br0">)</span><span
    class="br0">)</span> <span class="kw1">unless</span> options.<span
    class="kw2">nil</span>? <span class="sy0">||</span> options.<span
    class="me1">kind\_of</span>?<span class="br0">(</span><span
    class="kw4">Hash</span><span class="br0">)</span>

    </div>

5.  <div class="de2">

        valid\_options = <span class="kw3">Array</span><span
    class="br0">(</span>valid\_options<span class="br0">)</span>

    </div>

6.  <div class="de1">

        <span class="kw2">return</span> <span class="br0">[</span><span
    class="br0">]</span> <span class="kw1">if</span> options.<span
    class="kw2">nil</span>? <span class="sy0">||</span> options.<span
    class="me1">keys</span>.<span class="me1">empty</span>? <span
    class="sy0">||</span> valid\_options.<span class="kw2">nil</span>?
    <span class="sy0">||</span> valid\_options.<span
    class="me1">empty</span>?

    </div>

7.  <div class="de1">

        options.<span class="me1">keys</span> <span class="sy0">-</span>
    valid\_options

    </div>

8.  <div class="de1">

      <span class="kw1">end</span>

    </div>

9.  <div class="de1">

     

    </div>

10. <div class="de2">

      <span class="kw1">def</span> check\_for\_invalid\_options!<span
    class="br0">(</span>options=<span class="br0">{</span><span
    class="br0">}</span>,valid\_options=<span class="br0">[</span><span
    class="br0">]</span><span class="br0">)</span>

    </div>

11. <div class="de1">

        invalid\_options = check\_option\_parameters<span
    class="br0">(</span>options, valid\_options<span
    class="br0">)</span>

    </div>

12. <div class="de1">

        <span class="kw3">raise</span> <span class="st0">"Invalid
    options given: \#{invalid\_options}"</span> <span
    class="kw1">unless</span> invalid\_options.<span
    class="me1">empty</span>?

    </div>

13. <div class="de1">

      <span class="kw1">end</span>

    </div>

14. <div class="de1">

     

    </div>

15. <div class="de2">

      <span class="kw1">def</span> invalid\_options?<span
    class="br0">(</span>options=<span class="br0">{</span><span
    class="br0">}</span>, valid\_options=<span class="br0">[</span><span
    class="br0">]</span><span class="br0">)</span>

    </div>

16. <div class="de1">

        check\_for\_invalid\_options.<span class="me1">empty</span>?

    </div>

17. <div class="de1">

      <span class="kw1">end</span>

    </div>

18. <div class="de1">

     

    </div>

19. <div class="de1">

     

    </div>

20. <div class="de2">

      <span class="kw1">def</span> check\_for\_missing\_options<span
    class="br0">(</span>options=<span class="br0">{</span><span
    class="br0">}</span>, required\_options=<span
    class="br0">[</span><span class="br0">]</span><span
    class="br0">)</span>

    </div>

21. <div class="de1">

        <span class="kw3">raise</span><span class="br0">(</span><span
    class="kw4">ArgumentError</span>.<span class="me1">new</span><span
    class="br0">(</span><span class="st0">"options is not a Hash:
    \#{options.class}"</span><span class="br0">)</span><span
    class="br0">)</span> <span class="kw1">unless</span> options.<span
    class="me1">kind\_of</span>?<span class="br0">(</span><span
    class="kw4">Hash</span><span class="br0">)</span>

    </div>

22. <div class="de1">

        required\_options = <span class="kw3">Array</span><span
    class="br0">(</span>required\_options<span class="br0">)</span>

    </div>

23. <div class="de1">

        <span class="kw2">return</span> <span class="br0">[</span><span
    class="br0">]</span> <span class="kw1">if</span>
    required\_options.<span class="me1">empty</span>?    

    </div>

24. <div class="de1">

        required\_options <span class="sy0">-</span> options.<span
    class="me1">keys</span>

    </div>

25. <div class="de2">

      <span class="kw1">end</span>

    </div>

26. <div class="de1">

     

    </div>

27. <div class="de1">

      <span class="kw1">def</span> check\_for\_missing\_options!<span
    class="br0">(</span>options=<span class="br0">{</span><span
    class="br0">}</span>, required\_options=<span
    class="br0">[</span><span class="br0">]</span><span
    class="br0">)</span>

    </div>

28. <div class="de1">

        missing\_options = check\_for\_missing\_options<span
    class="br0">(</span>options, required\_options<span
    class="br0">)</span>

    </div>

29. <div class="de1">

        <span class="kw3">raise</span> <span class="st0">"Required
    options missing: \#{missing\_options}"</span> <span
    class="kw1">unless</span> missing\_options.<span
    class="me1">empty</span>?

    </div>

30. <div class="de2">

      <span class="kw1">end</span>

    </div>

31. <div class="de1">

     

    </div>

32. <div class="de1">

      <span class="kw1">def</span> missing\_options?<span
    class="br0">(</span>options=<span class="br0">{</span><span
    class="br0">}</span>, require\_options=<span
    class="br0">[</span><span class="br0">]</span><span
    class="br0">)</span>

    </div>

33. <div class="de1">

        check\_for\_missing\_options<span class="br0">(</span>options,
    require\_options<span class="br0">)</span>.<span
    class="me1">empty</span>?

    </div>

34. <div class="de1">

      <span class="kw1">end</span>

    </div>

35. <div class="de2">

     

    </div>

36. <div class="de1">

    <span class="kw1">end</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.CheckingForInvalidOptionsParametersInRuby?action=sourceblock&num=6)

</div>

</div>

</div>
