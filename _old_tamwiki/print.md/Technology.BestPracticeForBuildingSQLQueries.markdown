<div id="wikitext">

<span id="excerpt"></span> Writing and maintaining SQL queries can
become rather tiresome. I've found the best way to write queries is to
build them programmatically, placing each element in an array and then
joining the array with whatever appropriate separator is needed. <span
id="excerptend"></span>

(See also: <span
class="wikiword">[FlexibleQueryFunctions](http://wiki.tamouse.org?n=Technology.FlexibleQueryFunctions?action=print)</span>)

Here's an example:

<div class="vspace">

</div>

<div id="sourceblock1" class="sourceblock">

<div class="sourceblocktext">

<div class="php">

1.  <div class="de1">

    <span class="kw2">\<?php</span>

    </div>

2.  <div class="de1">

    <span class="re0">\$csj\_columns</span><span
    class="br0">[</span><span class="br0">]</span> <span
    class="sy0">=</span> <span class="st_h">'c.\`id\`'</span><span
    class="sy0">;</span>

    </div>

3.  <div class="de1">

    <span class="re0">\$csj\_columns</span><span
    class="br0">[</span><span class="br0">]</span> <span
    class="sy0">=</span> <span
    class="st_h">'c.\`subscription\_id\`'</span><span
    class="sy0">;</span>

    </div>

4.  <div class="de1">

    <span class="re0">\$csj\_columns</span><span
    class="br0">[</span><span class="br0">]</span> <span
    class="sy0">=</span> <span class="st_h">'s.\`name\`'</span><span
    class="sy0">;</span>

    </div>

5.  <div class="de2">

    <span class="re0">\$csj\_columns</span><span
    class="br0">[</span><span class="br0">]</span> <span
    class="sy0">=</span> <span class="st_h">'s.\`uri\`'</span><span
    class="sy0">;</span>

    </div>

6.  <div class="de1">

    <span class="re0">\$csj\_columns</span><span
    class="br0">[</span><span class="br0">]</span> <span
    class="sy0">=</span> <span class="st_h">'c.\`imgsrc\`'</span><span
    class="sy0">;</span>

    </div>

7.  <div class="de1">

    <span class="re0">\$csj\_columns</span><span
    class="br0">[</span><span class="br0">]</span> <span
    class="sy0">=</span> <span class="st_h">'c.\`filespec\`'</span><span
    class="sy0">;</span>

    </div>

8.  <div class="de1">

    <span class="re0">\$csj\_columns</span><span
    class="br0">[</span><span class="br0">]</span> <span
    class="sy0">=</span> <span
    class="st_h">'c.\`comicdate\`'</span><span class="sy0">;</span>

    </div>

9.  <div class="de1">

    <span class="re0">\$csj\_columns</span><span
    class="br0">[</span><span class="br0">]</span> <span
    class="sy0">=</span> <span class="st_h">'c.\`pulltime\`'</span><span
    class="sy0">;</span>

    </div>

10. <div class="de2">

     

    </div>

11. <div class="de1">

    <span class="re0">\$from\_parts</span><span
    class="br0">[</span><span class="br0">]</span> <span
    class="sy0">=</span> COMICSTBL<span class="sy0">.</span><span
    class="st_h">' as c'</span><span class="sy0">;</span>

    </div>

12. <div class="de1">

    <span class="re0">\$from\_parts</span><span
    class="br0">[</span><span class="br0">]</span> <span
    class="sy0">=</span> SUBSCRIPTIONSTBL<span class="sy0">.</span><span
    class="st_h">' as s'</span><span class="sy0">;</span>

    </div>

13. <div class="de1">

     

    </div>

14. <div class="de1">

    <span class="re0">\$where\_parts</span><span
    class="br0">[</span><span class="br0">]</span> <span
    class="sy0">=</span> <span class="st_h">'c.\`id\`= ? '</span><span
    class="sy0">;</span> <span class="co1">// for use in a prepared
    statement</span>

    </div>

15. <div class="de2">

    <span class="re0">\$where\_parts</span><span
    class="br0">[</span><span class="br0">]</span> <span
    class="sy0">=</span> <span
    class="st_h">'c.\`subscription\_id\`=s.\`id\`'</span><span
    class="sy0">;</span>

    </div>

16. <div class="de1">

     

    </div>

17. <div class="de1">

    <span class="re0">\$sql</span><span class="br0">[</span><span
    class="br0">]</span> <span class="sy0">=</span> <span
    class="st0">"SELECT"</span><span class="sy0">;</span>

    </div>

18. <div class="de1">

    <span class="re0">\$sql</span><span class="br0">[</span><span
    class="br0">]</span> <span class="sy0">=</span> <span
    class="kw3">join</span><span class="br0">(</span><span
    class="st_h">', '</span><span class="sy0">,</span> <span
    class="re0">\$csj\_columns</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

19. <div class="de1">

    <span class="re0">\$sql</span><span class="br0">[</span><span
    class="br0">]</span> <span class="sy0">=</span> <span
    class="st_h">'FROM'</span><span class="sy0">;</span>

    </div>

20. <div class="de2">

    <span class="re0">\$sql</span><span class="br0">[</span><span
    class="br0">]</span> <span class="sy0">=</span> <span
    class="kw3">join</span><span class="br0">(</span><span
    class="st_h">', '</span><span class="sy0">,</span> <span
    class="re0">\$from\_parts</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

21. <div class="de1">

    <span class="re0">\$sql</span><span class="br0">[</span><span
    class="br0">]</span> <span class="sy0">=</span> <span
    class="st_h">'WHERE'</span><span class="sy0">;</span>

    </div>

22. <div class="de1">

    <span class="re0">\$sql</span><span class="br0">[</span><span
    class="br0">]</span> <span class="sy0">=</span> <span
    class="kw3">join</span><span class="br0">(</span><span class="st0">"
    AND "</span><span class="sy0">,</span><span
    class="re0">\$where\_parts</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

23. <div class="de1">

    <span class="re0">\$sql</span><span class="br0">[</span><span
    class="br0">]</span> <span class="sy0">=</span> <span
    class="st_h">'LIMIT 1'</span><span class="sy0">;</span>

    </div>

24. <div class="de1">

     

    </div>

25. <div class="de2">

    <span class="re0">\$sql\_s</span> <span class="sy0">=</span> <span
    class="kw3">join</span><span class="br0">(</span><span class="st0">"
    "</span><span class="sy0">,</span><span
    class="re0">\$sql</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

26. <div class="de1">

    <span class="sy1">?\></span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.BestPracticeForBuildingSQLQueries?action=sourceblock&num=1)

</div>

</div>

You can see how the select columns and the where clause were put
together in an array by pushing the individual column definittions, and
then joining them with a ', ' separator. The resulting SQL statement
looks like this:

<div class="vspace">

</div>

<div id="sourceblock2" class="sourceblock">

<div class="sourceblocktext">

<div class="sql">

<span class="kw1">SELECT</span> c<span class="sy0">.</span><span
class="st0">\`id\`</span><span class="sy0">,</span> c<span
class="sy0">.</span><span class="st0">\`subscription\_id\`</span><span
class="sy0">,</span> s<span class="sy0">.</span><span
class="st0">\`name\`</span><span class="sy0">,</span> s<span
class="sy0">.</span><span class="st0">\`uri\`</span><span
class="sy0">,</span> c<span class="sy0">.</span><span
class="st0">\`imgsrc\`</span><span class="sy0">,</span> c<span
class="sy0">.</span><span class="st0">\`filespec\`</span><span
class="sy0">,</span> c<span class="sy0">.</span><span
class="st0">\`comicdate\`</span><span class="sy0">,</span> c<span
class="sy0">.</span><span class="st0">\`pulltime\`</span> <span
class="kw1">FROM</span> cg\_comics <span class="kw1">AS</span> c<span
class="sy0">,</span> cg\_subscriptions <span class="kw1">AS</span> s
<span class="kw1">WHERE</span> c<span class="sy0">.</span><span
class="st0">\`id\`</span><span class="sy0">=</span> ? <span
class="kw1">AND</span> c<span class="sy0">.</span><span
class="st0">\`subscription\_id\`</span><span class="sy0">=</span>s<span
class="sy0">.</span><span class="st0">\`id\`</span> <span
class="kw1">LIMIT</span> <span class="nu0">1</span>

</div>

</div>

<div class="sourceblocklink">

</div>

</div>

Using a single, multidimensional array for the parts of the statement
might make a more interesting approach.

<div class="vspace">

</div>

<div id="sourceblock3" class="sourceblock">

<div class="sourceblocktext">

<div class="php">

1.  <div class="de1">

    <span class="kw2">\<?php</span>

    </div>

2.  <div class="de1">

    <span class="re0">\$stmt\_a</span><span class="br0">[</span><span
    class="st_h">'columns'</span><span class="br0">]</span><span
    class="br0">[</span><span class="br0">]</span> <span
    class="sy0">=</span> <span class="st_h">'c.\`id\`'</span><span
    class="sy0">;</span>

    </div>

3.  <div class="de1">

    <span class="re0">\$stmt\_a</span><span class="br0">[</span><span
    class="st_h">'columns'</span><span class="br0">]</span><span
    class="br0">[</span><span class="br0">]</span> <span
    class="sy0">=</span> <span
    class="st_h">'c.\`subscription\_id\`'</span><span
    class="sy0">;</span>

    </div>

4.  <div class="de1">

    <span class="re0">\$stmt\_a</span><span class="br0">[</span><span
    class="st_h">'columns'</span><span class="br0">]</span><span
    class="br0">[</span><span class="br0">]</span> <span
    class="sy0">=</span> <span class="st_h">'s.\`name\`'</span><span
    class="sy0">;</span>

    </div>

5.  <div class="de2">

    <span class="re0">\$stmt\_a</span><span class="br0">[</span><span
    class="st_h">'columns'</span><span class="br0">]</span><span
    class="br0">[</span><span class="br0">]</span> <span
    class="sy0">=</span> <span class="st_h">'s.\`uri\`'</span><span
    class="sy0">;</span>

    </div>

6.  <div class="de1">

    <span class="re0">\$stmt\_a</span><span class="br0">[</span><span
    class="st_h">'columns'</span><span class="br0">]</span><span
    class="br0">[</span><span class="br0">]</span> <span
    class="sy0">=</span> <span class="st_h">'c.\`imgsrc\`'</span><span
    class="sy0">;</span>

    </div>

7.  <div class="de1">

    <span class="re0">\$stmt\_a</span><span class="br0">[</span><span
    class="st_h">'columns'</span><span class="br0">]</span><span
    class="br0">[</span><span class="br0">]</span> <span
    class="sy0">=</span> <span class="st_h">'c.\`filespec\`'</span><span
    class="sy0">;</span>

    </div>

8.  <div class="de1">

    <span class="re0">\$stmt\_a</span><span class="br0">[</span><span
    class="st_h">'columns'</span><span class="br0">]</span><span
    class="br0">[</span><span class="br0">]</span> <span
    class="sy0">=</span> <span
    class="st_h">'c.\`comicdate\`'</span><span class="sy0">;</span>

    </div>

9.  <div class="de1">

    <span class="re0">\$stmt\_a</span><span class="br0">[</span><span
    class="st_h">'columns'</span><span class="br0">]</span><span
    class="br0">[</span><span class="br0">]</span> <span
    class="sy0">=</span> <span class="st_h">'c.\`pulltime\`'</span><span
    class="sy0">;</span>

    </div>

10. <div class="de2">

     

    </div>

11. <div class="de1">

    <span class="re0">\$stmt\_a</span><span class="br0">[</span><span
    class="st_h">'from'</span><span class="br0">]</span><span
    class="br0">[</span><span class="br0">]</span> <span
    class="sy0">=</span> COMICSTBL<span class="sy0">.</span><span
    class="st_h">' as c'</span><span class="sy0">;</span>

    </div>

12. <div class="de1">

    <span class="re0">\$stmt\_a</span><span class="br0">[</span><span
    class="st_h">'from'</span><span class="br0">]</span><span
    class="br0">[</span><span class="br0">]</span> <span
    class="sy0">=</span> SUBSCRIPTIONSTBL<span class="sy0">.</span><span
    class="st_h">' as s'</span><span class="sy0">;</span>

    </div>

13. <div class="de1">

     

    </div>

14. <div class="de1">

    <span class="re0">\$stmt\_a</span><span class="br0">[</span><span
    class="st_h">'where'</span><span class="br0">]</span><span
    class="br0">[</span><span class="br0">]</span> <span
    class="sy0">=</span> <span class="st_h">'c.\`id\`= ? '</span><span
    class="sy0">;</span> <span class="co1">// for use in a prepared
    statement</span>

    </div>

15. <div class="de2">

    <span class="re0">\$stmt\_a</span><span class="br0">[</span><span
    class="st_h">'where'</span><span class="br0">]</span><span
    class="br0">[</span><span class="br0">]</span> <span
    class="sy0">=</span> <span
    class="st_h">'c.\`subscription\_id\`=s.\`id\`'</span><span
    class="sy0">;</span>

    </div>

16. <div class="de1">

     

    </div>

17. <div class="de1">

    <span class="re0">\$sql</span><span class="br0">[</span><span
    class="br0">]</span> <span class="sy0">=</span> <span
    class="st0">"SELECT"</span><span class="sy0">;</span>

    </div>

18. <div class="de1">

    <span class="re0">\$sql</span><span class="br0">[</span><span
    class="br0">]</span> <span class="sy0">=</span> <span
    class="kw3">join</span><span class="br0">(</span><span
    class="st_h">', '</span><span class="sy0">,</span> <span
    class="re0">\$stmt\_a</span><span class="br0">[</span><span
    class="st_h">'columns'</span><span class="br0">]</span><span
    class="br0">)</span><span class="sy0">;</span>

    </div>

19. <div class="de1">

    <span class="re0">\$sql</span><span class="br0">[</span><span
    class="br0">]</span> <span class="sy0">=</span> <span
    class="st_h">'FROM'</span><span class="sy0">;</span>

    </div>

20. <div class="de2">

    <span class="re0">\$sql</span><span class="br0">[</span><span
    class="br0">]</span> <span class="sy0">=</span> <span
    class="kw3">join</span><span class="br0">(</span><span
    class="st_h">', '</span><span class="sy0">,</span> <span
    class="re0">\$stmt\_a</span><span class="br0">[</span><span
    class="st_h">'from'</span><span class="br0">]</span><span
    class="br0">)</span><span class="sy0">;</span>

    </div>

21. <div class="de1">

    <span class="kw1">if</span> <span class="br0">(</span><span
    class="kw3">array\_key\_exists</span><span class="br0">(</span><span
    class="st_h">'where'</span><span class="sy0">,</span><span
    class="re0">\$stmt\_a</span><span class="br0">)</span><span
    class="br0">)</span> <span class="br0">{</span>

    </div>

22. <div class="de1">

      <span class="re0">\$sql</span><span class="br0">[</span><span
    class="br0">]</span> <span class="sy0">=</span> <span
    class="st_h">'WHERE'</span><span class="sy0">;</span>

    </div>

23. <div class="de1">

      <span class="re0">\$sql</span><span class="br0">[</span><span
    class="br0">]</span> <span class="sy0">=</span> <span
    class="kw3">join</span><span class="br0">(</span><span class="st0">"
    AND "</span><span class="sy0">,</span><span
    class="re0">\$stmt\_a</span><span class="br0">[</span><span
    class="st_h">'where'</span><span class="br0">]</span><span
    class="br0">)</span><span class="sy0">;</span>

    </div>

24. <div class="de1">

    <span class="br0">}</span>

    </div>

25. <div class="de2">

     

    </div>

26. <div class="de1">

    <span class="re0">\$sql\_s</span> <span class="sy0">=</span> <span
    class="kw3">join</span><span class="br0">(</span><span class="st0">"
    "</span><span class="sy0">,</span><span
    class="re0">\$sql</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

27. <div class="de1">

    <span class="sy1">?\></span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.BestPracticeForBuildingSQLQueries?action=sourceblock&num=3)

</div>

</div>

and obviously, you can go on from there adding SQL query statement
parts.

<div class="vspace">

</div>

</div>
