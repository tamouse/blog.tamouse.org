<div id="wikitext">

<div style="display: none;">

Summary: A Simple Way to Handle Multiple Checkboxes In a Form in PHP:
Gathering, Storing and Retrieving Sets of Values, a Simple Approach
Parent:(Technology.)PHP <span
class="wikiword">[IncludeMe](http://wiki.tamouse.org?n=Technology.IncludeMe?action=edit)[?](http://wiki.tamouse.org?n=Technology.IncludeMe?action=edit)</span>:[PHP](http://wiki.tamouse.org?n=Technology.PHP?action=print)
Categories: [HowTos](http://wiki.tamouse.org?n=Category.HowTos),
[Articles](http://wiki.tamouse.org?n=Category.Articles) Tags: php,
forms, checkboxes, howtos

</div>

<span id="excerpt"></span> From a recent correspondence with someone on
the PHP-DB list, the question of how to handle checkboxes in forms in
PHP is something that comes up fairly often. This is a simple method
that will work for very simple relationships. <span
id="excerptend"></span>

<div class="vspace">

</div>

The original email request
--------------------------

<div id="sourceblock1" class="sourceblock">

<div class="sourceblocktext">

<div class="email">

<div class="head">

The Original Email Request

</div>

<span class="sc0"><span class="kw3">From</span><span
class="sy0">:</span> Tamara Temple <span
class="sy0">\<</span>tamouse.lists-----<span
class="sy0">\></span></span>\
 <span class="sc0"><span class="kw3">To</span><span
class="sy0">:</span> -----</span>\
 <span class="sc0"><span class="kw3">Subject</span><span
class="sy0">:</span> Re<span class="sy0">:</span> Writing multi-checkbox
values to MySQL</span>\
 <span class="sc0"><span class="kw3">Date</span><span
class="sy0">:</span> <span class="re3">Fri, 28 Jun 2013 <span
class="re4">06:21:16</span> -0500</span></span>\
\
 \> Hello,\
\
 \> You were a tremendous help to me a few months ago when I was\
 \> floundering with a PHP question.  Well, I thought I knew form\
 \> processing until I got to multiple checkbox inputs and writing the\
 \> values to a MySQL table.  The form I'm working on has three
separate\
 \> multi-checkbox fields and I'm having a bit of trouble writing the\
 \> values to a table.  I've done some searching to find an example
that\
 \> matches what I'm trying to do but so far I haven't turned anything
up.\
\
 This is one of the places things can get more complicated, and it's\
 often a source of confusion.\
\
 \> Here's an abbreviated version of my form code:\
 \>\
 \>
\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\
  

</div>

</div>

<div class="sourceblocklink">

</div>

</div>

<div class="vspace">

</div>

<div id="sourceblock2" class="sourceblock">

<div class="sourceblocktext">

<div class="html4strict">

<div class="head">

html form

</div>

1.  <div class="de1">

    <span class="sc2">\<<span class="kw2">html</span>\></span>

    </div>

2.  <div class="de1">

    <span class="sc2">\<<span class="kw2">head</span>\></span>

    </div>

3.  <div class="de1">

    <span class="sc2">\<<span class="kw2">title</span>\></span>Example
    Outreach Form<span class="sc2">\<<span class="sy0">/</span><span
    class="kw2">title</span>\></span>

    </div>

4.  <div class="de1">

    <span class="sc2">\<<span class="kw2">meta</span> <span
    class="kw3">charset</span><span class="sy0">=</span><span
    class="st0">"utf-8"</span> <span class="sy0">/</span>\></span>

    </div>

5.  <div class="de2">

    <span class="sc2">\<<span class="sy0">/</span><span
    class="kw2">head</span>\></span>

    </div>

6.  <div class="de1">

    <span class="sc2">\<<span class="kw2">body</span>\></span>

    </div>

7.  <div class="de1">

    <span class="sc2">\<<span class="kw2">h1</span>\></span>Example
    Outreach Form<span class="sc2">\<<span class="sy0">/</span><span
    class="kw2">h1</span>\></span>

    </div>

8.  <div class="de1">

     

    </div>

9.  <div class="de1">

     

    </div>

10. <div class="de2">

    <span class="sc2">\<<span class="kw2">form</span> <span
    class="kw3">method</span><span class="sy0">=</span><span
    class="st0">"post"</span> <span class="kw3">action</span><span
    class="sy0">=</span><span
    class="st0">"outreach\_activity\_process.php"</span>\></span>

    </div>

11. <div class="de1">

    <span class="sc2">\<<span class="kw2">p</span>\>\<<span
    class="kw2">label</span> <span class="kw3">for</span><span
    class="sy0">=</span><span
    class="st0">"your\_name"</span>\></span>Your Name:<span
    class="sc2">\<<span class="sy0">/</span><span
    class="kw2">label</span>\>\<<span class="kw2">br</span>\></span>

    </div>

12. <div class="de1">

    <span class="sc2">\<<span class="kw2">input</span> <span
    class="kw3">type</span><span class="sy0">=</span><span
    class="st0">"text"</span> <span class="kw3">name</span><span
    class="sy0">=</span><span class="st0">"your\_name"</span> <span
    class="kw3">id</span><span class="sy0">=</span><span
    class="st0">"your\_name"</span> <span class="kw3">size</span><span
    class="sy0">=</span><span class="st0">"50"</span> <span
    class="kw3">maxlength</span><span class="sy0">=</span><span
    class="st0">"255"</span>\>\<<span class="sy0">/</span><span
    class="kw2">p</span>\></span>

    </div>

13. <div class="de1">

     

    </div>

14. <div class="de1">

    <span class="sc2">\<<span class="kw2">p</span>\>\<<span
    class="kw2">label</span> <span class="kw3">for</span><span
    class="sy0">=</span><span
    class="st0">"proj\_title"</span>\></span>1. NLM Project Title (<span
    class="sc2">\<<span class="kw2">i</span>\></span>if applicable<span
    class="sc2">\<<span class="sy0">/</span><span
    class="kw2">i</span>\></span>):<span class="sc2">\<<span
    class="sy0">/</span><span class="kw2">label</span>\>\<<span
    class="kw2">br</span>\></span>

    </div>

15. <div class="de2">

    <span class="sc2">\<<span class="kw2">input</span> <span
    class="kw3">type</span><span class="sy0">=</span><span
    class="st0">"text"</span> <span class="kw3">name</span><span
    class="sy0">=</span><span class="st0">"proj\_title"</span> <span
    class="kw3">id</span><span class="sy0">=</span><span
    class="st0">"proj\_title"</span> <span class="kw3">size</span><span
    class="sy0">=</span><span class="st0">"50"</span> <span
    class="kw3">maxlength</span><span class="sy0">=</span><span
    class="st0">"255"</span>\>\<<span class="sy0">/</span><span
    class="kw2">p</span>\></span>

    </div>

16. <div class="de1">

    <span class="sc2">\<<span class="kw2">p</span>\></span>6. Type(s) of
    Organization(s) Involved in Activity:

    </div>

17. <div class="de1">

    <span class="sc2">\<<span class="kw2">br</span>\></span>

    </div>

18. <div class="de1">

    <span class="sc2">\<<span class="kw2">input</span> <span
    class="kw3">type</span><span class="sy0">=</span><span
    class="st0">"checkbox"</span> <span class="kw3">name</span><span
    class="sy0">=</span><span class="st0">"org\_type[]"</span> <span
    class="kw3">value</span><span class="sy0">=</span><span
    class="st0">"Health Sciences Library"</span>\></span> Health
    Sciences Library

    </div>

19. <div class="de1">

    <span class="sc2">\<<span class="kw2">br</span>\></span>

    </div>

20. <div class="de2">

    <span class="sc2">\<<span class="kw2">input</span> <span
    class="kw3">type</span><span class="sy0">=</span><span
    class="st0">"checkbox"</span> <span class="kw3">name</span><span
    class="sy0">=</span><span class="st0">"org\_type[]"</span> <span
    class="kw3">value</span><span class="sy0">=</span><span
    class="st0">"Public Library"</span>\></span> Public Library

    </div>

21. <div class="de1">

    <span class="sc2">\<<span class="kw2">br</span> <span
    class="sy0">/</span>\></span>

    </div>

22. <div class="de1">

    <span class="sc2">\<<span class="kw2">input</span> <span
    class="kw3">type</span><span class="sy0">=</span><span
    class="st0">"checkbox"</span> <span class="kw3">name</span><span
    class="sy0">=</span><span class="st0">"org\_type[]"</span> <span
    class="kw3">value</span><span class="sy0">=</span><span
    class="st0">"Government Agency"</span>\></span> Government Agency

    </div>

23. <div class="de1">

    <span class="sc2">\<<span class="kw2">br</span> <span
    class="sy0">/</span>\></span>

    </div>

24. <div class="de1">

    <span class="sc2">\<<span class="kw2">input</span> <span
    class="kw3">type</span><span class="sy0">=</span><span
    class="st0">"checkbox"</span> <span class="kw3">name</span><span
    class="sy0">=</span><span class="st0">"org\_type[]"</span> <span
    class="kw3">value</span><span class="sy0">=</span><span
    class="st0">"Public Health"</span>\></span> Public Health

    </div>

25. <div class="de2">

    <span class="sc2">\<<span class="sy0">/</span><span
    class="kw2">p</span>\></span>

    </div>

26. <div class="de1">

    <span class="sc2">\<<span class="kw2">p</span>\></span>7. Session
    Content:

    </div>

27. <div class="de1">

    <span class="sc2">\<<span class="kw2">br</span> <span
    class="sy0">/</span>\></span>

    </div>

28. <div class="de1">

    <span class="sc2">\<<span class="kw2">input</span> <span
    class="kw3">type</span><span class="sy0">=</span><span
    class="st0">"checkbox"</span> <span class="kw3">name</span><span
    class="sy0">=</span><span class="st0">"session\_content[]"</span>
    <span class="kw3">value</span><span class="sy0">=</span><span
    class="st0">"PubMed"</span>\></span> PubMed

    </div>

29. <div class="de1">

    <span class="sc2">\<<span class="kw2">br</span> <span
    class="sy0">/</span>\></span>

    </div>

30. <div class="de2">

    <span class="sc2">\<<span class="kw2">input</span> <span
    class="kw3">type</span><span class="sy0">=</span><span
    class="st0">"checkbox"</span> <span class="kw3">name</span><span
    class="sy0">=</span><span class="st0">"session\_content[]"</span>
    <span class="kw3">value</span><span class="sy0">=</span><span
    class="st0">"MedlinePlus"</span>\></span> MedlinePlus

    </div>

31. <div class="de1">

    <span class="sc2">\<<span class="kw2">br</span> <span
    class="sy0">/</span>\></span>

    </div>

32. <div class="de1">

    <span class="sc2">\<<span class="kw2">input</span> <span
    class="kw3">type</span><span class="sy0">=</span><span
    class="st0">"checkbox"</span> <span class="kw3">name</span><span
    class="sy0">=</span><span class="st0">"session\_content[]"</span>
    <span class="kw3">value</span><span class="sy0">=</span><span
    class="st0">"ClinicalTrials.gov"</span>\></span> ClinicalTrials.gov

    </div>

33. <div class="de1">

    <span class="sc2">\<<span class="kw2">br</span> <span
    class="sy0">/</span>\></span>

    </div>

34. <div class="de1">

    <span class="sc2">\<<span class="kw2">input</span> <span
    class="kw3">type</span><span class="sy0">=</span><span
    class="st0">"checkbox"</span> <span class="kw3">name</span><span
    class="sy0">=</span><span class="st0">"session\_content[]"</span>
    <span class="kw3">value</span><span class="sy0">=</span><span
    class="st0">"NCBI"</span>\></span> NCBI

    </div>

35. <div class="de2">

    <span class="sc2">\<<span class="sy0">/</span><span
    class="kw2">p</span>\></span>

    </div>

36. <div class="de1">

    <span class="sc2">\<<span class="kw2">p</span>\>\<<span
    class="kw2">input</span> <span class="kw3">type</span><span
    class="sy0">=</span><span class="st0">"submit"</span> <span
    class="kw3">name</span><span class="sy0">=</span><span
    class="st0">"submit"</span> <span class="kw3">value</span><span
    class="sy0">=</span><span class="st0">"Submit Activity Data"</span>
    <span class="sy0">/</span>\></span>

    </div>

37. <div class="de1">

    <span class="sc2">\<<span class="kw2">input</span> <span
    class="kw3">type</span><span class="sy0">=</span><span
    class="st0">"reset"</span> <span class="kw3">name</span><span
    class="sy0">=</span><span class="st0">"reset"</span> <span
    class="kw3">value</span><span class="sy0">=</span><span
    class="st0">"Clear the Form"</span> <span
    class="sy0">/</span>\>\<<span class="sy0">/</span><span
    class="kw2">p</span>\></span>

    </div>

38. <div class="de1">

    <span class="sc2">\<<span class="sy0">/</span><span
    class="kw2">form</span>\></span>

    </div>

39. <div class="de1">

     

    </div>

40. <div class="de2">

    <span class="sc2">\<<span class="sy0">/</span><span
    class="kw2">body</span>\></span> <span class="sc2">\<<span
    class="sy0">/</span><span class="kw2">html</span>\></span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.DealingWithCheckboxesInPHP?action=sourceblock&num=2)

</div>

</div>

<div class="vspace">

</div>

<div id="sourceblock3" class="sourceblock">

<div class="sourceblocktext">

<div class="email">

\> Here's the corresponding processing code that I have so far:

</div>

</div>

<div class="sourceblocklink">

</div>

</div>

<div class="vspace">

</div>

<div id="sourceblock4" class="sourceblock">

<div class="sourceblocktext">

<div class="php">

<div class="head">

outreach\_activity\_process.php

</div>

1.  <div class="de1">

    <span class="kw2">\<?php</span>

    </div>

2.  <div class="de1">

     

    </div>

3.  <div class="de1">

    <span class="kw1">include</span> <span
    class="st_h">'db.inc.php'</span><span class="sy0">;</span>

    </div>

4.  <div class="de1">

     

    </div>

5.  <div class="de2">

    <span class="re0">\$fields</span> <span class="sy0">=</span> <span
    class="kw3">array</span><span class="br0">(</span><span
    class="st_h">'your\_name'</span><span class="sy0">,</span><span
    class="st_h">'proj\_title'</span><span class="sy0">,</span><span
    class="st_h">'org\_type'</span><span
    class="sy0">,</span>??session\_content??<span
    class="br0">)</span><span class="sy0">;</span>

    </div>

6.  <div class="de1">

     

    </div>

7.  <div class="de1">

    <span class="kw1">foreach</span> <span class="br0">(</span><span
    class="re0">\$fields</span> <span class="kw1">as</span> <span
    class="re0">\$field</span><span class="br0">)</span> <span
    class="br0">{</span>

    </div>

8.  <div class="de1">

            <span class="kw1">if</span> <span class="br0">(</span><span
    class="kw3">isset</span><span class="br0">(</span><span
    class="re0">\$\_POST</span><span class="br0">[</span><span
    class="re0">\$field</span><span class="br0">]</span><span
    class="br0">)</span><span class="br0">)</span> <span
    class="re0">\$\$field</span> <span class="sy0">=</span> <span
    class="kw3">mysqli\_real\_escape\_string</span><span
    class="br0">(</span><span class="re0">\$link</span><span
    class="sy0">,</span> <span class="re0">\$\_POST</span><span
    class="br0">[</span><span class="re0">\$field</span><span
    class="br0">]</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

9.  <div class="de1">

    <span class="br0">}</span>

    </div>

10. <div class="de2">

            <span class="re0">\$sql</span> <span class="sy0">=</span>
    <span class="st_h">'INSERT INTO</span>

    </div>

11. <div class="de1">

    <span
    class="st_h">my\_table(your\_name,proj\_title,org\_type,session\_content)
    VALUES("'</span> <span class="sy0">.</span> <span
    class="re0">\$your\_name</span> <span class="sy0">.</span> <span
    class="st_h">'","'</span> <span class="sy0">.</span> <span
    class="re0">\$proj\_title</span> <span class="sy0">.</span> <span
    class="st_h">'","'</span> <span class="sy0">.</span> <span
    class="re0">\$org\_type</span> <span class="sy0">.</span> ????<span
    class="sy0">,</span>???? <span class="sy0">.</span>

    </div>

12. <div class="de1">

    <span class="re0">\$session\_content</span> <span
    class="sy0">.</span> ????<span class="br0">)</span>??<span
    class="sy0">;</span>

    </div>

13. <div class="de1">

     

    </div>

14. <div class="de1">

            <span class="kw1">if</span> <span class="br0">(</span><span
    class="sy0">!</span><span class="kw3">mysqli\_query</span><span
    class="br0">(</span><span class="re0">\$link</span><span
    class="sy0">,</span> <span class="re0">\$sql</span><span
    class="br0">)</span><span class="br0">)</span>

    </div>

15. <div class="de2">

            <span class="br0">{</span>

    </div>

16. <div class="de1">

                    <span class="re0">\$error</span> <span
    class="sy0">=</span> <span class="st_h">'Error adding submitted
    Outreach activity details: '</span> <span class="sy0">.</span> <span
    class="kw3">mysqli\_error</span><span class="br0">(</span><span
    class="re0">\$link</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

17. <div class="de1">

                    <span class="kw1">include</span> <span
    class="st_h">'error.html.php'</span><span class="sy0">;</span>

    </div>

18. <div class="de1">

                    <span class="kw3">exit</span><span
    class="br0">(</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

19. <div class="de1">

            <span class="br0">}</span>

    </div>

20. <div class="de2">

            <span class="kw3">header</span><span
    class="br0">(</span><span class="st_h">'Location: .'</span><span
    class="br0">)</span><span class="sy0">;</span>

    </div>

21. <div class="de1">

            <span class="kw3">exit</span><span class="br0">(</span><span
    class="br0">)</span><span class="sy0">;</span>

    </div>

22. <div class="de1">

    <span class="sy1">?\></span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.DealingWithCheckboxesInPHP?action=sourceblock&num=4)

</div>

</div>

<div class="vspace">

</div>

<div id="sourceblock5" class="sourceblock">

<div class="sourceblocktext">

<div class="email">

\> This code works well enough if only one box is checked but if I\
 \> check more tha n one, only one value gets passed to the table.  I\
 \> understand that in my form code I need to have the name values as\
 \> 'org\_type[]' and 'session\_content[]' but beyond that I don't know
what\
 \> I'm doing. Shouldn't the foreach in the processing code pull in all\
 \> the checkbox values?  How can I pass all checked values to the
table?\
\
 There is both a "simple" and a "useful" way of addressing this, but
they\
 aren't the same.\
  

</div>

</div>

<div class="sourceblocklink">

</div>

</div>

<div class="vspace">

</div>

The Simple Method
-----------------

The simple one, is, as you have seen, to add the `[]`{.escaped} to your
field names. This will get you all the checked items. However, this is
where simple falls down: how will you usefull store and extract that
info? Some people answer this by packing all the info stored into a
string in a single field in the table. This works, and may be the way
you choose to go, but using this method tends to fall down when you have
anything even a bit more complex.

It will probably be instructive for you to make a simple html page with
the form you have above, and a simple script to receive the form
submission. In the simple script, just dump `$_POST`{.escaped} and
examine the contents to get an understanding of what gets returned. In
your `outreach_activity_process.php`{.escaped} file, at the top, after
the opening `<?php`{.escaped}, put:

<div class="vspace">

</div>

<div id="sourceblock6" class="sourceblock">

<div class="sourceblocktext">

<div class="php">

<div class="head">

dump \$\_POST contents

</div>

1.  <div class="de1">

    <span class="kw3">header</span><span class="br0">(</span><span
    class="st0">"Content-type: text/plain;"</span><span
    class="br0">)</span><span class="sy0">;</span>

    </div>

2.  <div class="de1">

    <span class="kw3">var\_dump</span><span class="br0">(</span><span
    class="re0">\$\_POST</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

3.  <div class="de1">

    <span class="kw3">exit</span><span class="br0">(</span><span
    class="br0">)</span><span class="sy0">;</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.DealingWithCheckboxesInPHP?action=sourceblock&num=6)

</div>

</div>

Then submit the form with different values checked and unchecked and you
can see what you're getting:

<div class="vspace">

</div>

<div id="sourceblock7" class="sourceblock">

<div class="sourceblocktext">

<div class="text">

<div class="head">

output from form submission

</div>

1.  <div class="de1">

    array(5) {

    </div>

2.  <div class="de1">

      ["your\_name"]=\>

    </div>

3.  <div class="de1">

      string(6) "glithc"

    </div>

4.  <div class="de1">

      ["proj\_title"]=\>

    </div>

5.  <div class="de2">

      string(4) "asdf"

    </div>

6.  <div class="de1">

      ["org\_type"]=\>

    </div>

7.  <div class="de1">

      array(2) {

    </div>

8.  <div class="de1">

        [0]=\>

    </div>

9.  <div class="de1">

        string(23) "Health Sciences Library"

    </div>

10. <div class="de2">

        [1]=\>

    </div>

11. <div class="de1">

        string(17) "Government Agency"

    </div>

12. <div class="de1">

      }

    </div>

13. <div class="de1">

      ["session\_content"]=\>

    </div>

14. <div class="de1">

      array(2) {

    </div>

15. <div class="de2">

        [0]=\>

    </div>

16. <div class="de1">

        string(11) "MedlinePlus"

    </div>

17. <div class="de1">

        [1]=\>

    </div>

18. <div class="de1">

        string(18) "ClinicalTrials.gov"

    </div>

19. <div class="de1">

      }

    </div>

20. <div class="de2">

      ["submit"]=\>

    </div>

21. <div class="de1">

      string(20) "Submit Activity Data"

    </div>

22. <div class="de1">

    }

    </div>

</div>

</div>

<div class="sourceblocklink">

</div>

</div>

So you can now see that `$_POST['org_type']`{.escaped} is an array that
contains `"['Health Sciences Library', 'Government Agency']"`{.escaped}
(and similar for session content). The question is how to store that
usefully.

Some people simply pack the array values into a string with a separator
and save that in the table. That's usually dead simple:

<div class="vspace">

</div>

<div id="sourceblock8" class="sourceblock">

<div class="sourceblocktext">

<div class="php">

<span class="re0">\$org\_type</span> <span class="sy0">=</span> <span
class="kw3">implode</span><span class="br0">(</span><span
class="st0">"|"</span><span class="sy0">,</span><span
class="re0">\$org\_type</span><span class="br0">)</span><span
class="sy0">;</span>\
 <span class="re0">\$session\_content</span> <span class="sy0">=</span>
<span class="kw3">implode</span><span class="br0">(</span><span
class="st0">"|"</span><span class="sy0">,</span><span
class="re0">\$session\_content</span><span class="br0">)</span><span
class="sy0">;</span>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.DealingWithCheckboxesInPHP?action=sourceblock&num=8)

</div>

</div>

Then when you pull it out, do the opposite. Say you have your data
record that you've retrieved from the database in a variable \$row,
using column keys as indexes:

<div class="vspace">

</div>

<div id="sourceblock9" class="sourceblock">

<div class="sourceblocktext">

<div class="php">

<span class="re0">\$org\_type</span> <span class="sy0">=</span> <span
class="kw3">explode</span><span class="br0">(</span><span
class="st0">"|"</span><span class="sy0">,</span><span
class="re0">\$row</span><span class="br0">[</span><span
class="st_h">'org\_type'</span><span class="br0">]</span><span
class="br0">)</span><span class="sy0">;</span>\
 <span class="re0">\$session\_content</span> <span class="sy0">=</span>
<span class="kw3">explode</span><span class="br0">(</span><span
class="st0">"|"</span><span class="sy0">,</span><span
class="re0">\$row</span><span class="br0">[</span><span
class="st_h">'session\_content]'</span><span class="br0">)</span><span
class="sy0">;</span>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.DealingWithCheckboxesInPHP?action=sourceblock&num=9)

</div>

</div>

However, this breaks if you ever have an org\_type or session\_content
with the separator symbol ("|") in it. Instead of that, I would suggest
converting the array into a JSON data object and storing that, as it
makes getting the info back out in a more usable form easier:

<div class="vspace">

</div>

<div id="sourceblock10" class="sourceblock">

<div class="sourceblocktext">

<div class="php">

<span class="re0">\$org\_type</span> <span class="sy0">=</span> <span
class="kw3">json\_encode</span><span class="br0">(</span><span
class="re0">\$org\_type</span><span class="br0">)</span><span
class="sy0">;</span>\
 <span class="re0">\$session\_content</span> <span class="sy0">=</span>
<span class="kw3">json\_encode</span><span class="br0">(</span><span
class="re0">\$session\_content</span><span class="br0">)</span><span
class="sy0">;</span>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.DealingWithCheckboxesInPHP?action=sourceblock&num=10)

</div>

</div>

before you create the `$sql`{.escaped} statement.

Then, when you pull the data and use it someplace, just perform the
reverse operation.

<div class="vspace">

</div>

<div id="sourceblock11" class="sourceblock">

<div class="sourceblocktext">

<div class="php">

<span class="re0">\$org\_type</span> <span class="sy0">=</span> <span
class="kw3">json\_decode</span><span class="br0">(</span><span
class="re0">\$row</span><span class="br0">[</span><span
class="st_h">'org\_type'</span><span class="br0">]</span><span
class="br0">)</span><span class="sy0">;</span>\
 <span class="re0">\$session\_content</span> <span class="sy0">=</span>
<span class="kw3">json\_decode</span><span class="br0">(</span><span
class="re0">\$row</span><span class="br0">[</span><span
class="st_h">'session\_content'</span><span class="br0">]</span><span
class="br0">)</span><span class="sy0">;</span>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.DealingWithCheckboxesInPHP?action=sourceblock&num=11)

</div>

</div>

This is what things look like:

<div class="vspace">

</div>

<div id="sourceblock12" class="sourceblock">

<div class="sourceblocktext">

<div class="text">

Encoded JSON strings:\
 org\_type:\
 string(47) "["Health Sciences Library","Government Agency"]"\
 session\_content:\
 string(36) "["MedlinePlus","ClinicalTrials.gov"]"\
\
 Decoded JSON strings:\
 org\_type:\
 array(2) {\
   [0]=\>\
   string(23) "Health Sciences Library"\
   [1]=\>\
   string(17) "Government Agency"\
 }\
 session\_content:\
 array(2) {\
   [0]=\>\
   string(11) "MedlinePlus"\
   [1]=\>\
   string(18) "ClinicalTrials.gov"\
 }

</div>

</div>

<div class="sourceblocklink">

</div>

</div>

Let's say you want to search for all outreach records that have a
session content of `ClinicalTrials.gov`{.escaped}? Since JSON data is
**cleartext**, you can do something like:

<div class="vspace">

</div>

<div id="sourceblock13" class="sourceblock">

<div class="sourceblocktext">

<div class="sql">

<span class="kw1">SELECT</span> <span class="sy0">\*</span> <span
class="kw1">FROM</span> my\_table <span class="kw1">WHERE</span> <span
class="st0">\`session\_content\`</span> <span class="kw1">LIKE</span>\
    <span class="st0">'%ClinicalTrials.gov%'</span>;

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.DealingWithCheckboxesInPHP?action=sourceblock&num=13)

</div>

</div>

This should give you all the records where the
`ClinicalTrials.gov`{.escaped} checkbox was set and saved. Then use the
above `json_decode`{.escaped} calls to extract the info.

Simple? Yes. But only for simple data. Go with this for now unless you
find yourself doing all kinds of things with such strings of data.

<div class="vspace">

</div>

The Useful Method
-----------------

What you really have here is a relationship between 3 kinds of data:
Outreaches, Organization Types, and Session Content. If you application
is going to use any of this information in a more general way, you will
probably want to use the "useful" method rather than the simple method
above. :)

What you will need to look at here are the relationships between the
kinds of data you are trying to work with. We need to step back a bit
from the code and think about the data models.

Your first model, it seems, might be called an Outreach. It seems to
consist of information regarding the person and their project.

Two other models show up now with the multiple check boxes: Organization
Types and Session Content although 'Session' is so overloaded inside
most web application softwares and frameworks that I would not use this
name. Looking at the actual values you've expressed there, I would call
these Sources instead of Sessions. (Don't let me railroad you into
choosing names, though!)

The Outreach has what is known as a one-to-many relationship with both
Organization and Source.

However, both Organization and Source can also be related to many
Outreaches.

Thus you end up with a many-to-many relationship between Outreach and
Organization, and a many-to-many relationship between Outreach and
Source.

If you haven't already, I suggest studying up on data base
relationships, especially things like one-to-one, one-to-many,
many-to-many, and how these are implemented in various database systems,
as they all involve setting things up in your database that can become
rather complicated and arcane, including such fun things as foreign
keys.

(In an object-relationship management system, such as employed by Rails,
this all becomes extremely trivial. In PHP, there are many frameworks
which also do this. This may be left for a future discussion.)

<div class="vspace">

</div>

------------------------------------------------------------------------

<div class="vspace">

</div>

<div id="sourceblock14" class="sourceblock">

<div class="sourceblocktext">

<div class="email">

\_\_\_\_\_, for now, to get you started, I suggest following the
"simple"\
 route I outlined above. The "useful" route can be picked up later,\
 provided you keep your application very modular, to allow easy\
 substituted parts.\
\
 Take care, hope this helps.

</div>

</div>

<div class="sourceblocklink">

</div>

</div>

<div class="vspace">

</div>

<div class="indent">

— [tamara](http://wiki.tamouse.org?n=Profiles.Tamara?action=print) June
28, 2013, at 07:41 AM

</div>

<div class="vspace">

</div>

</div>
