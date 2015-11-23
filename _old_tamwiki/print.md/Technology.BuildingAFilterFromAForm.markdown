<div id="wikitext">

<div style="display: none;">

Summary:A PHP example of building a query filter from a form submission
of filter values Parent:(Technology.)PHP <span
class="wikiword">[IncludeMe](http://wiki.tamouse.org?n=Technology.IncludeMe?action=edit)[?](http://wiki.tamouse.org?n=Technology.IncludeMe?action=edit)</span>:[PHP](http://wiki.tamouse.org?n=Technology.PHP?action=print)
Categories:[HowTos](http://wiki.tamouse.org?n=Category.HowTos),
[BestPractices](http://wiki.tamouse.org?n=Category.BestPractices) Tags:
php, sql, best practices, examples

</div>

<span id="excerpt"></span> From a recent question submitted on the
php-general mailing list, someone was building a filter for a query
based on submitted form values. The code was very WET, and could have
been simplified a lot. This is a way to implement this concept. <span
id="excerptend"></span>

<div class="vspace">

</div>

Filtering
---------

When an application displays a table of data, sometimes the user may
want to restrict the records that get shown. This is a classic filtering
of data task.

On the displayed page, you can display a form that will let the user
enter various values, often best with some guidance as to what kinds of
things can be filtered. Upon submission, your application will take the
submitted values and build a new query that only retrieves the matching
records and display those.

The example here will only show the portion of code that deals with
building the `WHERE` clause of the sql query. The parts that are needed
to clean and decontaminate the data entered by the user are not covered
here.

<div class="vspace">

</div>

The Data
--------

Let's suppose the data is coming from a single table in the database,
let's call it `cars`. A plausable table description might be:

<div class="vspace">

</div>

<div id="sourceblock1" class="sourceblock">

<div class="sourceblocktext">

<div class="sql">

<span class="kw1">CREATE</span> <span class="kw1">TABLE</span> cars
<span class="br0">(</span>\
   id <span class="kw1">INT</span> <span class="kw1">NOT</span> <span
class="kw1">NULL</span> <span class="kw1">AUTO\_INCREMENT</span> <span
class="kw1">PRIMARY</span> <span class="kw1">KEY</span><span
class="sy0">,</span>\
   make <span class="kw1">VARCHAR</span><span class="br0">(</span><span
class="nu0">30</span><span class="br0">)</span><span
class="sy0">,</span>\
   model <span class="kw1">VARCHAR</span><span class="br0">(</span><span
class="nu0">30</span><span class="br0">)</span><span
class="sy0">,</span>\
   <span class="kw1">YEAR</span> <span class="kw1">INT</span><span
class="br0">(</span><span class="nu0">10</span><span
class="br0">)</span><span class="sy0">,</span>\
   color <span class="kw1">VARCHAR</span><span class="br0">(</span><span
class="nu0">30</span><span class="br0">)</span><span
class="sy0">,</span>\
   price <span class="kw1">NUMERIC</span><span class="br0">(</span><span
class="nu0">10</span><span class="sy0">,</span><span
class="nu0">2</span><span class="br0">)</span>\
 <span class="br0">)</span> ENGINE<span class="sy0">=</span>INNODB;

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.BuildingAFilterFromAForm?action=sourceblock&num=1)

</div>

</div>

<div class="vspace">

</div>

The Initial Query
-----------------

The initial query in this example is probably very straight-forward,
just select all the table fields:

<div class="vspace">

</div>

<div id="sourceblock2" class="sourceblock">

<div class="sourceblocktext">

<div class="php">

1.  <div class="de1">

    <span class="re0">\$select\_all\_from\_cars\_sql</span> <span
    class="sy0">=</span> <span class="st0">"SELECT \* FROM
    cars"</span><span class="sy0">;</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.BuildingAFilterFromAForm?action=sourceblock&num=2)

</div>

</div>

<div class="vspace">

</div>

Filtered Queries
----------------

After the user submits the filter form, the query is modified based on
the fields the user filled out, for example, the following is the
intended query:

<div class="vspace">

</div>

<div id="sourceblock3" class="sourceblock">

<div class="sourceblocktext">

<div class="php">

1.  <div class="de1">

    <span class="re0">\$select\_all\_from\_cars\_sql</span> <span
    class="sy0">=</span> <span class="st0">"SELECT \* FROM cars WHERE
    make LIKE <span class="es4">\$make\_filter</span> AND year \> <span
    class="es4">\$since\_year\_filter</span>"</span><span
    class="sy0">;</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.BuildingAFilterFromAForm?action=sourceblock&num=3)

</div>

</div>

Where `$make_filter` and `$since_year_filter` are based on values the
user submitted in the form, suitably decontaminated.

But how to build this?

Keeping things
[DRY](http://wiki.tamouse.org?n=Technology.DontRepeatYourself?action=edit)[?](http://wiki.tamouse.org?n=Technology.DontRepeatYourself?action=edit)
as possible, the following shows how to build up the `WHERE` clause:

<div class="vspace">

</div>

<div id="sourceblock4" class="sourceblock">

<div class="sourceblocktext">

<div class="php">

1.  <div class="de1">

    <span class="co1">// we start in the same place</span>

    </div>

2.  <div class="de1">

    <span class="re0">\$select\_all\_from\_cars\_sql</span> <span
    class="sy0">=</span> <span class="st0">"SELECT \* FROM
    cars"</span><span class="sy0">;</span>

    </div>

3.  <div class="de1">

     

    </div>

4.  <div class="de1">

    <span class="co1">// initilize the \$filters array to empty</span>

    </div>

5.  <div class="de2">

    <span class="re0">\$filters</span> <span class="sy0">=</span> <span
    class="kw3">Array</span><span class="br0">(</span><span
    class="br0">)</span><span class="sy0">;</span>

    </div>

6.  <div class="de1">

     

    </div>

7.  <div class="de1">

    <span class="co1">// walk through the filter form fields, cleaning
    the inputs and building the filters array</span>

    </div>

8.  <div class="de1">

    <span class="co1">// NOTE: you will have to do something a little
    different if you're using multiselect options, checkboxes,
    etc.</span>

    </div>

9.  <div class="de1">

    <span class="co1">//       this code assumes that the form fields
    contain actual comparison values.</span>

    </div>

10. <div class="de2">

    <span class="kw1">foreach</span> <span class="br0">(</span><span
    class="kw3">array</span><span class="br0">(</span><span
    class="st_h">'make'</span><span class="sy0">,</span> <span
    class="st_h">'model'</span><span class="sy0">,</span> <span
    class="st_h">'year\_lower'</span><span class="sy0">,</span> <span
    class="st_h">'year\_upper'</span><span class="sy0">,</span> <span
    class="st_h">'color'</span><span class="sy0">,</span> <span
    class="st_h">'price\_lower'</span><span class="sy0">,</span> <span
    class="st_h">'price\_upper'</span><span class="br0">)</span> <span
    class="kw1">as</span> <span class="re0">\$field</span><span
    class="br0">)</span>

    </div>

11. <div class="de1">

    <span class="br0">{</span>

    </div>

12. <div class="de1">

      <span class="kw1">if</span> <span class="br0">(</span><span
    class="kw3">array\_key\_exists</span><span class="br0">(</span><span
    class="re0">\$field</span><span class="sy0">,</span><span
    class="re0">\$\_POST</span><span class="br0">)</span><span
    class="br0">)</span> <span class="br0">{</span>

    </div>

13. <div class="de1">

        <span class="re0">\$filters</span><span
    class="br0">[</span><span class="re0">\$field</span><span
    class="br0">]</span> <span class="sy0">=</span> cleanse<span
    class="br0">(</span><span class="re0">\$\_POST</span><span
    class="br0">[</span><span class="re0">\$field</span><span
    class="br0">]</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

14. <div class="de1">

      <span class="br0">}</span>

    </div>

15. <div class="de2">

    <span class="br0">}</span>

    </div>

16. <div class="de1">

     

    </div>

17. <div class="de1">

    <span class="co1">// now build out the query with the where
    clause</span>

    </div>

18. <div class="de1">

    <span class="kw1">if</span> <span class="br0">(</span><span
    class="sy0">!</span><span class="kw3">empty</span><span
    class="br0">(</span><span class="re0">\$filters</span><span
    class="br0">)</span><span class="br0">)</span> <span
    class="br0">{</span>

    </div>

19. <div class="de1">

      <span class="co1">// initialize an array to hold the clauses to be
    ANDed</span>

    </div>

20. <div class="de2">

      <span class="re0">\$where</span> <span class="sy0">=</span> <span
    class="kw3">Array</span><span class="br0">(</span><span
    class="br0">)</span><span class="sy0">;</span>

    </div>

21. <div class="de1">

      <span class="kw1">foreach</span><span class="br0">(</span><span
    class="re0">\$filters</span> <span class="kw1">as</span> <span
    class="re0">\$field</span> <span class="sy0">=\></span> <span
    class="re0">\$value</span><span class="br0">)</span> <span
    class="br0">{</span>

    </div>

22. <div class="de1">

        <span class="kw1">switch</span><span class="br0">(</span><span
    class="re0">\$field</span><span class="br0">)</span> <span
    class="br0">{</span>

    </div>

23. <div class="de1">

          <span class="kw1">case</span> <span
    class="st_h">'make'</span><span class="sy0">:</span>

    </div>

24. <div class="de1">

          <span class="kw1">case</span> <span
    class="st_h">'model'</span><span class="sy0">:</span>

    </div>

25. <div class="de2">

          <span class="kw1">case</span> <span
    class="st_h">'color'</span><span class="sy0">:</span>

    </div>

26. <div class="de1">

             <span class="re0">\$where</span><span
    class="br0">[</span><span class="br0">]</span> <span
    class="sy0">=</span> <span class="st0">"<span
    class="es4">\$field</span> LIKE '%<span
    class="es4">\$value</span>%'"</span><span class="sy0">;</span>

    </div>

27. <div class="de1">

             <span class="kw1">break</span><span class="sy0">;</span>

    </div>

28. <div class="de1">

     

    </div>

29. <div class="de1">

          <span class="kw1">case</span> <span
    class="st_h">'year\_lower'</span><span class="sy0">:</span>

    </div>

30. <div class="de2">

             <span class="re0">\$where</span><span
    class="br0">[</span><span class="br0">]</span> <span
    class="sy0">=</span> <span class="st0">"year \>= <span
    class="es4">\$value</span>"</span><span class="sy0">;</span>

    </div>

31. <div class="de1">

             <span class="kw1">break</span><span class="sy0">;</span>

    </div>

32. <div class="de1">

     

    </div>

33. <div class="de1">

          <span class="kw1">case</span> <span
    class="st_h">'year\_upper'</span><span class="sy0">:</span>

    </div>

34. <div class="de1">

             <span class="re0">\$where</span><span
    class="br0">[</span><span class="br0">]</span> <span
    class="sy0">=</span> <span class="st0">"year \<= <span
    class="es4">\$value</span>"</span><span class="sy0">;</span>

    </div>

35. <div class="de2">

             <span class="kw1">break</span><span class="sy0">;</span>

    </div>

36. <div class="de1">

     

    </div>

37. <div class="de1">

          <span class="kw1">case</span> <span
    class="st_h">'price\_lower'</span><span class="sy0">:</span>

    </div>

38. <div class="de1">

            <span class="re0">\$where</span><span
    class="br0">[</span><span class="br0">]</span> <span
    class="sy0">=</span> <span class="st0">"price \>= <span
    class="es4">\$value</span>"</span><span class="sy0">;</span>

    </div>

39. <div class="de1">

            <span class="kw1">break</span><span class="sy0">;</span>

    </div>

40. <div class="de2">

     

    </div>

41. <div class="de1">

          <span class="kw1">case</span> <span
    class="st_h">'price\_higher'</span><span class="sy0">:</span>

    </div>

42. <div class="de1">

            <span class="re0">\$where</span><span
    class="br0">[</span><span class="br0">]</span> <span
    class="sy0">=</span> <span class="st0">"price \<= <span
    class="es4">\$value</span>"</span><span class="sy0">;</span>

    </div>

43. <div class="de1">

            <span class="kw1">break</span><span class="sy0">;</span>

    </div>

44. <div class="de1">

     

    </div>

45. <div class="de2">

          <span class="kw1">default</span><span class="sy0">:</span>

    </div>

46. <div class="de1">

            <span class="kw1">break</span><span class="sy0">;</span>

    </div>

47. <div class="de1">

        <span class="br0">}</span>

    </div>

48. <div class="de1">

      <span class="br0">}</span>

    </div>

49. <div class="de1">

      <span class="re0">\$select\_all\_from\_cars\_sql</span> <span
    class="sy0">.=</span> <span class="st0">" WHERE "</span> <span
    class="sy0">.</span> <span class="kw3">implode</span><span
    class="br0">(</span><span class="st0">" AND "</span><span
    class="sy0">,</span><span class="re0">\$where</span><span
    class="br0">)</span><span class="sy0">;</span>

    </div>

50. <div class="de2">

    <span class="br0">}</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.BuildingAFilterFromAForm?action=sourceblock&num=4)

</div>

</div>

<div class="vspace">

</div>

Even <span class="wikiword">[DRYer](http://wiki.tamouse.org?n=Technology.DRYer?action=edit)[?](http://wiki.tamouse.org?n=Technology.DRYer?action=edit)</span>
-------------------------------------------------------------------------------------------------------------------------------------------------------------

It's possible to make this code even <span
class="wikiword">[DRYer](http://wiki.tamouse.org?n=Technology.DRYer?action=edit)[?](http://wiki.tamouse.org?n=Technology.DRYer?action=edit)</span>
by building a table that maps filter field, comparison type, and value
format.

<div class="vspace">

</div>

<div id="sourceblock5" class="sourceblock">

<div class="sourceblocktext">

<div class="php">

1.  <div class="de1">

    <span class="re0">\$filter\_map</span> <span class="sy0">=</span>
    <span class="kw3">Array</span><span class="br0">(</span><span
    class="br0">)</span><span class="sy0">;</span>

    </div>

2.  <div class="de1">

    <span class="re0">\$filter\_map</span><span
    class="br0">[</span><span class="st_h">'make'</span><span
    class="br0">]</span>  <span class="sy0">=</span> <span
    class="kw3">array</span><span class="br0">(</span><span
    class="st_h">'op'</span> <span class="sy0">=\></span> <span
    class="st_h">'LIKE'</span><span class="sy0">,</span><span
    class="st_h">'valuefmt'</span> <span class="sy0">=\></span> <span
    class="st_h">'"%%%s%%"'</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

3.  <div class="de1">

    <span class="re0">\$filter\_map</span><span
    class="br0">[</span><span class="st_h">'model'</span><span
    class="br0">]</span> <span class="sy0">=</span> <span
    class="re0">\$filter\_map</span><span class="br0">[</span><span
    class="st_h">'make'</span><span class="br0">]</span><span
    class="sy0">;</span>

    </div>

4.  <div class="de1">

    <span class="re0">\$filter\_map</span><span
    class="br0">[</span><span class="st_h">'color'</span><span
    class="br0">]</span> <span class="sy0">=</span> <span
    class="re0">\$filter\_map</span><span class="br0">[</span><span
    class="st_h">'make'</span><span class="br0">]</span><span
    class="sy0">;</span>

    </div>

5.  <div class="de2">

    <span class="re0">\$filter\_map</span><span
    class="br0">[</span><span class="st_h">'year\_lower'</span><span
    class="br0">]</span> <span class="sy0">=</span> <span
    class="kw3">array</span><span class="br0">(</span><span
    class="st_h">'op'</span> <span class="sy0">=\></span> <span
    class="st_h">'\>='</span><span class="sy0">,</span> <span
    class="st_h">'valuefmt'</span> <span class="sy0">=\></span> <span
    class="sy0">%</span>d<span class="br0">)</span><span
    class="sy0">;</span>

    </div>

6.  <div class="de1">

    <span class="re0">\$filter\_map</span><span
    class="br0">[</span><span class="st_h">'year\_upper'</span><span
    class="br0">]</span> <span class="sy0">=</span> <span
    class="kw3">array</span><span class="br0">(</span><span
    class="st_h">'op'</span> <span class="sy0">=\></span> <span
    class="st_h">'\<='</span><span class="sy0">,</span> <span
    class="st_h">'valuefmt'</span> <span class="sy0">=\></span> <span
    class="sy0">%</span>d<span class="br0">)</span><span
    class="sy0">;</span>

    </div>

7.  <div class="de1">

    <span class="re0">\$filter\_map</span><span
    class="br0">[</span><span class="st_h">'price\_lower'</span><span
    class="br0">]</span> <span class="sy0">=</span> <span
    class="re0">\$filter\_map</span><span class="br0">[</span><span
    class="st_h">'year\_lower'</span><span class="br0">]</span><span
    class="sy0">;</span>

    </div>

8.  <div class="de1">

    <span class="re0">\$filter\_map</span><span
    class="br0">[</span><span class="st_h">'price\_upper'</span><span
    class="br0">]</span> <span class="sy0">=</span> <span
    class="re0">\$filter\_map</span><span class="br0">[</span><span
    class="st_h">'year\_upper'</span><span class="br0">]</span><span
    class="sy0">;</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.BuildingAFilterFromAForm?action=sourceblock&num=5)

</div>

</div>

Then, the code to build the filter becomes even shorter:

<div class="vspace">

</div>

<div id="sourceblock6" class="sourceblock">

<div class="sourceblocktext">

<div class="php">

1.  <div class="de1">

    <span class="co1">// we start in the same place</span>

    </div>

2.  <div class="de1">

    <span class="re0">\$select\_all\_from\_cars\_sql</span> <span
    class="sy0">=</span> <span class="st0">"SELECT \* FROM
    cars"</span><span class="sy0">;</span>

    </div>

3.  <div class="de1">

     

    </div>

4.  <div class="de1">

    <span class="co1">// initilize the \$where clause</span>

    </div>

5.  <div class="de2">

    <span class="re0">\$where</span> <span class="sy0">=</span> <span
    class="kw3">Array</span><span class="br0">(</span><span
    class="br0">)</span><span class="sy0">;</span>

    </div>

6.  <div class="de1">

     

    </div>

7.  <div class="de1">

    <span class="co1">// walk through the filter form fields, cleaning
    the inputs and building the where clause</span>

    </div>

8.  <div class="de1">

    <span class="co1">// NOTE: you will have to do something a little
    different if you're using multiselect options, checkboxes,
    etc.</span>

    </div>

9.  <div class="de1">

    <span class="co1">//       this code assumes that the form fields
    contain actual comparison values.</span>

    </div>

10. <div class="de2">

    <span class="kw1">foreach</span> <span class="br0">(</span><span
    class="kw3">array</span><span class="br0">(</span><span
    class="st_h">'make'</span><span class="sy0">,</span> <span
    class="st_h">'model'</span><span class="sy0">,</span> <span
    class="st_h">'year\_lower'</span><span class="sy0">,</span> <span
    class="st_h">'year\_upper'</span><span class="sy0">,</span> <span
    class="st_h">'color'</span><span class="sy0">,</span> <span
    class="st_h">'price\_lower'</span><span class="sy0">,</span> <span
    class="st_h">'price\_upper'</span><span class="br0">)</span> <span
    class="kw1">as</span> <span class="re0">\$field</span><span
    class="br0">)</span>

    </div>

11. <div class="de1">

    <span class="br0">{</span>

    </div>

12. <div class="de1">

      <span class="kw1">if</span> <span class="br0">(</span><span
    class="kw3">array\_key\_exists</span><span class="br0">(</span><span
    class="re0">\$field</span><span class="sy0">,</span><span
    class="re0">\$\_POST</span><span class="br0">)</span><span
    class="br0">)</span> <span class="br0">{</span>

    </div>

13. <div class="de1">

        <span class="re0">\$where</span><span class="br0">[</span><span
    class="br0">]</span><span class="sy0">=</span> <span
    class="st0">"<span class="es4">\$field</span> "</span><span
    class="sy0">.</span><span class="re0">\$filter\_map</span><span
    class="br0">[</span><span class="re0">\$field</span><span
    class="br0">]</span><span class="br0">[</span><span
    class="st_h">'op'</span><span class="br0">]</span><span
    class="sy0">.</span><span class="st_h">' '</span><span
    class="sy0">.</span><span class="kw3">sprintf</span><span
    class="br0">(</span><span class="re0">\$filter\_map</span><span
    class="br0">[</span><span class="re0">\$field</span><span
    class="br0">]</span><span class="br0">[</span><span
    class="st_h">'valuefmt'</span><span class="br0">]</span><span
    class="sy0">,</span>cleanse<span class="br0">(</span><span
    class="re0">\$\_POST</span><span class="br0">[</span><span
    class="re0">\$field</span><span class="br0">]</span><span
    class="br0">)</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

14. <div class="de1">

      <span class="br0">}</span>

    </div>

15. <div class="de2">

    <span class="br0">}</span>

    </div>

16. <div class="de1">

     

    </div>

17. <div class="de1">

    <span class="kw1">if</span> <span class="br0">(</span><span
    class="sy0">!</span><span class="kw3">empty</span><span
    class="br0">(</span><span class="re0">\$where</span><span
    class="br0">)</span><span class="br0">)</span> <span
    class="br0">{</span>

    </div>

18. <div class="de1">

      <span class="re0">\$select\_all\_from\_cars\_sql</span> <span
    class="sy0">.=</span> <span class="st0">" WHERE "</span> <span
    class="sy0">.</span> <span class="kw3">implode</span><span
    class="br0">(</span><span class="st0">" AND "</span><span
    class="sy0">,</span><span class="re0">\$where</span><span
    class="br0">)</span><span class="sy0">;</span>

    </div>

19. <div class="de1">

    <span class="br0">}</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.BuildingAFilterFromAForm?action=sourceblock&num=6)

</div>

</div>

</div>
