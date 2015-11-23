<div id="wikitext">

<span id="excerpt"></span> In a recent
[post](http://www.ruby-forum.com/topic/4407569) on the [ruby-talk
mailing list](http://www.ruby-forum.com/forum/ruby), a poster asked how
they could get a field from a few records out of a file on one line.
<span id="excerptend"></span>

This was the OP's starting point:

<div class="vspace">

</div>

<div id="sourceblock1" class="sourceblock">

<div class="sourceblocktext">

<div class="ruby">

<div class="head">

Original Poster's concept:

</div>

output=<span class="st0">\`cat \#{file} | grep  "up    down" | grep
"aenet" | awk '{print \$6}'\`</span>\
 <span class="kw3">puts</span> output

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.AnExerciseInRefactoringToOneLineInRuby?action=sourceblock&num=1)

</div>

</div>

Really not quite getting the power of `awk` here, I think.

The data file we were tasked to work with:

<div class="vspace">

</div>

<div id="sourceblock2" class="sourceblock">

<div class="sourceblocktext">

<div>

xe-0/0/2.0 up up aenet --\> ae1.0\
xe-0/0/3 up up\
xe-0/0/3.0 up up aenet --\> ae1.0\
\
xe-10/0/6.0 up down aenet --\> ae40.0\
xe-24/0/3.0 up down aenet --\> ae30.0\

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.AnExerciseInRefactoringToOneLineInRuby?action=sourceblock&num=2)

</div>

</div>

(There was more cruft, but it's really irrelevant.)

There were a few respondents with some longish rubyisms:

<div class="vspace">

</div>

<div id="sourceblock3" class="sourceblock">

<div class="sourceblocktext">

<div class="ruby">

<div class="head">

Another Respondent's Attempt:

</div>

1.  <div class="de1">

    <span class="kw3">require</span> <span class="st0">'stringio'</span>

    </div>

2.  <div class="de1">

     

    </div>

3.  <div class="de1">

    f = <span class="kw4">StringIO</span>.<span
    class="me1">new</span><span class="br0">(</span><span
    class="sy0">\<\<</span>ENDOFSTRING<span class="br0">)</span>

    </div>

4.  <div class="de1">

    xe<span class="sy0">-</span><span class="nu0">0</span><span
    class="sy0">/</span><span class="nu0">0</span><span
    class="sy0">/</span><span class="nu0">2.0</span>      up    up  
    aenet    <span class="sy0">--\></span> ae1.0

    </div>

5.  <div class="de2">

    xe<span class="sy0">-</span><span class="nu0">0</span><span
    class="sy0">/</span><span class="nu0">0</span><span
    class="sy0">/</span><span class="nu0">3</span>        up    up

    </div>

6.  <div class="de1">

    xe<span class="sy0">-</span><span class="nu0">0</span><span
    class="sy0">/</span><span class="nu0">0</span><span
    class="sy0">/</span><span class="nu0">3.0</span>      up    up  
    aenet    <span class="sy0">--\></span> ae1.0

    </div>

7.  <div class="de1">

     

    </div>

8.  <div class="de1">

    xe<span class="sy0">-</span><span class="nu0">10</span><span
    class="sy0">/</span><span class="nu0">0</span><span
    class="sy0">/</span><span class="nu0">6.0</span>     up    down
    aenet    <span class="sy0">--\></span> ae40.0

    </div>

9.  <div class="de1">

    xe<span class="sy0">-</span><span class="nu0">24</span><span
    class="sy0">/</span><span class="nu0">0</span><span
    class="sy0">/</span><span class="nu0">3.0</span>     up    down
    aenet    <span class="sy0">--\></span> ae30.0

    </div>

10. <div class="de2">

    ENDOFSTRING

    </div>

11. <div class="de1">

     

    </div>

12. <div class="de1">

    target\_column = <span class="nu0">6</span>

    </div>

13. <div class="de1">

     

    </div>

14. <div class="de1">

    results = <span class="st0">""</span>

    </div>

15. <div class="de2">

     

    </div>

16. <div class="de1">

    f.<span class="me1">each</span> <span class="kw1">do</span> <span
    class="sy0">|</span>line<span class="sy0">|</span>

    </div>

17. <div class="de1">

      md = line.<span class="me1">match</span><span
    class="br0">(</span><span class="sy0">/</span>up\\s<span
    class="sy0">\*</span>down\\s<span class="sy0">\*</span>aenet.<span
    class="sy0">\*</span>?<span class="sy0">--\></span>\\s<span
    class="sy0">\*</span><span class="br0">(</span>.<span
    class="sy0">\*</span><span class="br0">)</span>\\n\\z<span
    class="sy0">/</span>xms<span class="br0">)</span>

    </div>

18. <div class="de1">

     

    </div>

19. <div class="de1">

      <span class="kw1">if</span> md

    </div>

20. <div class="de2">

        results <span class="sy0">\<\<</span> \$1 <span
    class="sy0">\<\<</span> <span class="st0">" "</span>

    </div>

21. <div class="de1">

      <span class="kw1">end</span>

    </div>

22. <div class="de1">

    <span class="kw1">end</span>

    </div>

23. <div class="de1">

     

    </div>

24. <div class="de1">

    <span class="kw3">p</span> results.<span class="me1">rstrip</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.AnExerciseInRefactoringToOneLineInRuby?action=sourceblock&num=3)

</div>

</div>

Although the number of lines shown is a lot because of including the
file data, it still seemed a tad clunky.

After offering the OP a quick way to do what they wanted with `awk`, a
pure ruby method seemed necessary to follow up:

<div class="vspace">

</div>

<div id="sourceblock4" class="sourceblock">

<div class="sourceblocktext">

<div class="ruby">

<div class="head">

first try

</div>

1.  <div class="de1">

    lines = <span class="kw4">IO</span>.<span
    class="kw3">readlines</span><span class="br0">(</span><span
    class="st0">"data"</span><span class="br0">)</span>

    </div>

2.  <div class="de1">

    lines.<span class="me1">each</span> <span class="kw1">do</span>
    <span class="sy0">|</span>l<span class="sy0">|</span>

    </div>

3.  <div class="de1">

      <span class="kw1">if</span> l.<span class="me1">match</span><span
    class="br0">(</span><span class="sy0">/</span>up\\s<span
    class="sy0">+</span>down\\s<span class="sy0">+</span>aenet<span
    class="sy0">/</span><span class="br0">)</span>

    </div>

4.  <div class="de1">

        <span class="kw3">print</span> l.<span
    class="kw3">split</span><span class="br0">[</span><span
    class="nu0">5</span><span class="br0">]</span>, <span class="st0">"
    "</span>

    </div>

5.  <div class="de2">

      <span class="kw1">end</span>

    </div>

6.  <div class="de1">

    <span class="kw1">end</span>

    </div>

7.  <div class="de1">

    <span class="kw3">print</span> <span class="st0">"<span
    class="es0">\\n</span>"</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.AnExerciseInRefactoringToOneLineInRuby?action=sourceblock&num=4)

</div>

</div>

First thing, no need for the extra `lines` variable:

<div class="vspace">

</div>

<div id="sourceblock5" class="sourceblock">

<div class="sourceblocktext">

<div class="ruby">

<div class="head">

second try

</div>

1.  <div class="de1">

    <span class="kw4">IO</span>.<span class="kw3">readlines</span><span
    class="br0">(</span><span class="st0">"data"</span><span
    class="br0">)</span>.<span class="me1">each</span> <span
    class="kw1">do</span> <span class="sy0">|</span>l<span
    class="sy0">|</span>

    </div>

2.  <div class="de1">

      <span class="kw1">if</span> l.<span class="me1">match</span><span
    class="br0">(</span><span class="sy0">/</span>up\\s<span
    class="sy0">+</span>down\\s<span class="sy0">+</span>aenet<span
    class="sy0">/</span><span class="br0">)</span>

    </div>

3.  <div class="de1">

        <span class="kw3">print</span> l.<span
    class="kw3">split</span><span class="br0">[</span><span
    class="nu0">5</span><span class="br0">]</span>, <span class="st0">"
    "</span>

    </div>

4.  <div class="de1">

      <span class="kw1">end</span>

    </div>

5.  <div class="de2">

    <span class="kw1">end</span>

    </div>

6.  <div class="de1">

    <span class="kw3">print</span> <span class="st0">"<span
    class="es0">\\n</span>"</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.AnExerciseInRefactoringToOneLineInRuby?action=sourceblock&num=5)

</div>

</div>

This gets the job done, but I felt I could do better. Using the fact
that you can chain calls onto objects, I thought it would compress to
this:

<div class="vspace">

</div>

<div id="sourceblock6" class="sourceblock">

<div class="sourceblocktext">

<div class="ruby">

<div class="head">

third try

</div>

1.  <div class="de1">

    output = <span class="br0">[</span><span class="br0">]</span>

    </div>

2.  <div class="de1">

    <span class="kw4">IO</span>.<span class="kw3">readlines</span><span
    class="br0">(</span><span class="st0">"data"</span><span
    class="br0">)</span>.<span class="me1">map</span><span
    class="br0">{</span><span class="sy0">|</span>l<span
    class="sy0">|</span> output <span class="sy0">\<\<</span> l.<span
    class="kw3">split</span><span class="br0">[</span><span
    class="nu0">5</span><span class="br0">]</span> <span
    class="kw1">if</span> l.<span class="me1">match</span><span
    class="br0">(</span><span class="sy0">/</span>up\\s<span
    class="sy0">+</span>down\\s<span class="sy0">+</span>aenet<span
    class="sy0">/</span><span class="br0">)</span> <span
    class="br0">}</span>

    </div>

3.  <div class="de1">

    <span class="kw3">puts</span> output.<span class="me1">join</span>
    <span class="st0">" "</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.AnExerciseInRefactoringToOneLineInRuby?action=sourceblock&num=6)

</div>

</div>

Why map every line with a test, when grep does something similar, then
you can map the rest? Also, why have the extra output assignments at
all? Why not just build what's needed and shoot it out directly?

<div class="vspace">

</div>

<div id="sourceblock7" class="sourceblock">

<div class="sourceblocktext">

<div class="ruby">

<div class="head">

final one line version

</div>

1.  <div class="de1">

    <span class="kw3">puts</span> <span class="kw4">IO</span>.<span
    class="kw3">readlines</span><span class="br0">(</span><span
    class="st0">"data"</span><span class="br0">)</span>.<span
    class="me1">grep</span><span class="br0">(</span><span
    class="sy0">/</span>up\\s<span class="sy0">+</span>down\\s<span
    class="sy0">+</span>aenet<span class="sy0">/</span><span
    class="br0">)</span>.<span class="me1">map</span><span
    class="br0">{</span><span class="sy0">|</span>l<span
    class="sy0">|</span> l.<span class="kw3">split</span><span
    class="br0">[</span><span class="nu0">5</span><span
    class="br0">]</span><span class="br0">}</span>.<span
    class="me1">join</span> <span class="st0">" "</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.AnExerciseInRefactoringToOneLineInRuby?action=sourceblock&num=7)

</div>

</div>

So it's down to one line only, from an initial 10-ish.

I feel like Keith Richards.

<div class="vspace">

</div>

<div style="display: none;">

Summary:Taking an example from someone looking for a simple solution and
iteratively refactoring it down to one line
Parent:(Technology.)Development <span
class="wikiword">[IncludeMe](http://wiki.tamouse.org?n=Technology.IncludeMe?action=edit)[?](http://wiki.tamouse.org?n=Technology.IncludeMe?action=edit)</span>:[Development](http://wiki.tamouse.org?n=Technology.Development?action=print)
Categories:[HowTos](http://wiki.tamouse.org?n=Category.HowTos) Tags:
refactoring, ruby, oneliners

</div>

</div>
