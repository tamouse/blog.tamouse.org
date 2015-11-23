<div id="wikitext">

<span id="excerpt"></span> Along with
[modularity](http://wiki.tamouse.org?n=Technology.BeModular?action=print)
and [reusable
libraries](http://wiki.tamouse.org?n=Technology.WriteFunctionsInASeparateInclude?action=print),
making functions flexible is a helpful thing in making functions more
reusable. PHP has a rich feature set that makes creating flexible and
useful functions a reality. While is does add some structural complexity
sometimes, it is often worth it in terms of only coding what is
necessary for a particular application, rather than redoing things over
again that you've done 1000 times before. <span id="excerptend"></span>

(See also: <span
class="wikiword">[BestPracticeForBuildingSQLQueries](http://wiki.tamouse.org?n=Technology.BestPracticeForBuildingSQLQueries?action=print)</span>:)

<div class="vspace">

</div>

Flexible functions
------------------

One way to achieve flexibility in functions is to pass in options that
can be used to modify and extend the behaviour of the function. (Note:
this is a purely procedural discussion. OOP allows other ways of
extending functions and should be encouraged as well.)

One such way is to optionally pass an array into the function, that is
set up as an associative array with keys indicating parts to modify and
values the ways to modify the function. One such function that lends
itself well to this is an SQL SELECT query function.

In my `functions.inc.php` file, I have defined such a flexible function:
`get_all_array()`, which takes nominally the data base descriptor (in
this case, a mysqli database descriptor object), a table specification,
and an optional argument of options to possibly modify the query. Here
is is:

<div class="vspace">

</div>

<div id="sourceblock1" class="sourceblock">

<div class="sourceblocktext">

<div class="php">

<div class="head">

function get\_all\_array

</div>

1.  <div class="de1">

    <span class="co4">/\*\*</span>

    </div>

2.  <div class="de1">

    <span class="co4"> \* Get All records from a table, returning them
    </span>

    </div>

3.  <div class="de1">

    <span class="co4"> \* in an indexed array of records as associative
    arrays</span>

    </div>

4.  <div class="de1">

    <span class="co4"> \*</span>

    </div>

5.  <div class="de2">

    <span class="co4"> \*  \$db and \$tblname are a required
    paramters</span>

    </div>

6.  <div class="de1">

    <span class="co4"> \*</span>

    </div>

7.  <div class="de1">

    <span class="co4"> \* This function supports an array of options
    that may be </span>

    </div>

8.  <div class="de1">

    <span class="co4"> \* used to customize the sql query.</span>

    </div>

9.  <div class="de1">

    <span class="co4"> \*  \$options= array(</span>

    </div>

10. <div class="de2">

    <span class="co4"> \*    'columns'=\>scalar column specification or
    </span>

    </div>

11. <div class="de1">

    <span class="co4">                           
    array('column1','column2','column3'...),</span>

    </div>

12. <div class="de1">

    <span class="co4"> \*    'where'=\>scalar where clause or  </span>

    </div>

13. <div class="de1">

    <span class="co4"> \*                      array('where
    clause1','where clause2',...),</span>

    </div>

14. <div class="de1">

    <span class="co4"> \*    'sort'=\>scalar sort clause or </span>

    </div>

15. <div class="de2">

    <span class="co4"> \*                 array('sort clause1','sort
    clause2',...)</span>

    </div>

16. <div class="de1">

    <span class="co4"> \*                 )</span>

    </div>

17. <div class="de1">

    <span class="co4"> \*</span>

    </div>

18. <div class="de1">

    <span class="co4"> \* If any of these are omitted (and they're all
    optional), </span>

    </div>

19. <div class="de1">

    <span class="co4"> \* the following behaviour is used:</span>

    </div>

20. <div class="de2">

    <span class="co4"> \*    if columns is empty or missing, use "\*" as
    the </span>

    </div>

21. <div class="de1">

    <span class="co4"> \*      column selector</span>

    </div>

22. <div class="de1">

    <span class="co4"> \*    if sort is empty or missing, don't do any
    ordering </span>

    </div>

23. <div class="de1">

    <span class="co4"> \*      of the records on retrieval</span>

    </div>

24. <div class="de1">

    <span class="co4"> \*    if where is empty or missing, don't provide
    any </span>

    </div>

25. <div class="de2">

    <span class="co4"> \*     selection criteria</span>

    </div>

26. <div class="de1">

    <span class="co4"> \*</span>

    </div>

27. <div class="de1">

    <span class="co4"> \* Thus, calling get\_all\_array(\$db,TABLENAME)
    </span>

    </div>

28. <div class="de1">

    <span class="co4"> \* will return all rows of the table specified by
    TABLENAME</span>

    </div>

29. <div class="de1">

    <span class="co4"> \*</span>

    </div>

30. <div class="de2">

    <span class="co4"> \* This function uses mysqli object oriented
    calls. </span>

    </div>

31. <div class="de1">

    <span class="co4"> \* The database descriptor is passed in
    \$db.</span>

    </div>

32. <div class="de1">

    <span class="co4"> \*</span>

    </div>

33. <div class="de1">

    <span class="co4"> \*\*/</span>

    </div>

34. <div class="de1">

    <span class="kw2">function</span> get\_all\_array<span
    class="br0">(</span><span class="re0">\$db</span><span
    class="sy0">,</span><span class="re0">\$tblname</span><span
    class="sy0">,</span><span class="re0">\$options</span><span
    class="sy0">=</span><span class="kw4">NULL</span><span
    class="br0">)</span>

    </div>

35. <div class="de2">

    <span class="br0">{</span>

    </div>

36. <div class="de1">

        <span class="kw1">if</span> <span class="br0">(</span><span
    class="kw3">isset</span><span class="br0">(</span><span
    class="re0">\$options</span><span class="br0">)</span><span
    class="br0">)</span> <span class="br0">{</span>

    </div>

37. <div class="de1">

            <span class="kw1">if</span> <span class="br0">(</span><span
    class="sy0">!</span><span class="kw3">is\_array</span><span
    class="br0">(</span><span class="re0">\$options</span><span
    class="br0">)</span><span class="br0">)</span> <span
    class="kw1">return</span> <span class="kw4">FALSE</span><span
    class="sy0">;</span> <span class="co1">// options MUST be an
    array</span>

    </div>

38. <div class="de1">

            <span class="co1">// ensure each part of options is actually
    an array</span>

    </div>

39. <div class="de1">

            <span class="kw1">foreach</span> <span
    class="br0">(</span><span class="re0">\$options</span> <span
    class="kw1">as</span> <span class="re0">\$key</span> <span
    class="sy0">=\></span> <span class="re0">\$value</span><span
    class="br0">)</span> <span class="br0">{</span>

    </div>

40. <div class="de2">

                <span class="kw1">switch</span> <span
    class="br0">(</span><span class="re0">\$key</span><span
    class="br0">)</span> <span class="br0">{</span>

    </div>

41. <div class="de1">

                    <span class="kw1">case</span> <span
    class="st_h">'columns'</span><span class="sy0">:</span>

    </div>

42. <div class="de1">

                        <span class="kw1">if</span> <span
    class="br0">(</span><span class="kw3">is\_array</span><span
    class="br0">(</span><span class="re0">\$value</span><span
    class="br0">)</span><span class="br0">)</span> <span
    class="br0">{</span>

    </div>

43. <div class="de1">

                            <span class="re0">\$columns</span> <span
    class="sy0">=</span> <span class="re0">\$value</span><span
    class="sy0">;</span>

    </div>

44. <div class="de1">

                        <span class="br0">}</span> <span
    class="kw1">else</span> <span class="br0">{</span>

    </div>

45. <div class="de2">

                            <span class="re0">\$columns</span><span
    class="br0">[</span><span class="br0">]</span> <span
    class="sy0">=</span> <span class="re0">\$value</span><span
    class="sy0">;</span>

    </div>

46. <div class="de1">

                        <span class="br0">}</span>

    </div>

47. <div class="de1">

                        <span class="kw1">break</span><span
    class="sy0">;</span>

    </div>

48. <div class="de1">

                    <span class="kw1">case</span> <span
    class="st_h">'sort'</span><span class="sy0">:</span>

    </div>

49. <div class="de1">

                        <span class="kw1">if</span> <span
    class="br0">(</span><span class="kw3">is\_array</span><span
    class="br0">(</span><span class="re0">\$value</span><span
    class="br0">)</span><span class="br0">)</span> <span
    class="br0">{</span>

    </div>

50. <div class="de2">

                            <span class="re0">\$orderparts</span> <span
    class="sy0">=</span> <span class="re0">\$value</span><span
    class="sy0">;</span>

    </div>

51. <div class="de1">

                        <span class="br0">}</span> <span
    class="kw1">else</span> <span class="br0">{</span>

    </div>

52. <div class="de1">

                            <span class="re0">\$orderparts</span><span
    class="br0">[</span><span class="br0">]</span> <span
    class="sy0">=</span> <span class="re0">\$value</span><span
    class="sy0">;</span>

    </div>

53. <div class="de1">

                        <span class="br0">}</span>

    </div>

54. <div class="de1">

                        <span class="kw1">break</span><span
    class="sy0">;</span>

    </div>

55. <div class="de2">

     

    </div>

56. <div class="de1">

                    <span class="kw1">case</span> <span
    class="st_h">'where'</span><span class="sy0">:</span>

    </div>

57. <div class="de1">

                        <span class="kw1">if</span> <span
    class="br0">(</span><span class="kw3">is\_array</span><span
    class="br0">(</span><span class="re0">\$value</span><span
    class="br0">)</span><span class="br0">)</span> <span
    class="br0">{</span>

    </div>

58. <div class="de1">

                            <span class="re0">\$whereparts</span> <span
    class="sy0">=</span> <span class="re0">\$value</span><span
    class="sy0">;</span>

    </div>

59. <div class="de1">

                        <span class="br0">}</span> <span
    class="kw1">else</span> <span class="br0">{</span>

    </div>

60. <div class="de2">

                            <span class="re0">\$whereparts</span><span
    class="br0">[</span><span class="br0">]</span> <span
    class="sy0">=</span> <span class="re0">\$value</span><span
    class="sy0">;</span>

    </div>

61. <div class="de1">

                        <span class="br0">}</span>

    </div>

62. <div class="de1">

                        <span class="kw1">break</span><span
    class="sy0">;</span>

    </div>

63. <div class="de1">

     

    </div>

64. <div class="de1">

                    <span class="kw1">default</span><span
    class="sy0">:</span>

    </div>

65. <div class="de2">

                        <span class="co2">\# code...</span>

    </div>

66. <div class="de1">

                        <span class="kw1">break</span><span
    class="sy0">;</span>

    </div>

67. <div class="de1">

                <span class="br0">}</span>

    </div>

68. <div class="de1">

            <span class="br0">}</span>

    </div>

69. <div class="de1">

        <span class="br0">}</span>

    </div>

70. <div class="de2">

     

    </div>

71. <div class="de1">

        <span class="re0">\$sql\_a</span> <span class="sy0">=</span>
    <span class="kw3">Array</span><span class="br0">(</span><span
    class="br0">)</span><span class="sy0">;</span> <span
    class="coMULTI">/\* initialize the sql query \*/</span>

    </div>

72. <div class="de1">

        <span class="re0">\$sql\_a</span><span class="br0">[</span><span
    class="br0">]</span> <span class="sy0">=</span> <span
    class="st0">"SELECT"</span><span class="sy0">;</span>

    </div>

73. <div class="de1">

        <span class="re0">\$sql\_a</span><span class="br0">[</span><span
    class="br0">]</span> <span class="sy0">=</span> <span
    class="br0">(</span><span class="sy0">!</span><span
    class="kw3">empty</span><span class="br0">(</span><span
    class="re0">\$columns</span><span class="br0">)</span> ? <span
    class="kw3">join</span><span class="br0">(</span><span
    class="st0">", "</span><span class="sy0">,</span><span
    class="re0">\$columns</span><span class="br0">)</span> <span
    class="sy0">:</span> <span class="st0">"\*"</span><span
    class="br0">)</span><span class="sy0">;</span>

    </div>

74. <div class="de1">

        <span class="re0">\$sql\_a</span><span class="br0">[</span><span
    class="br0">]</span> <span class="sy0">=</span> <span
    class="st0">"FROM <span class="es4">\$tblname</span>"</span><span
    class="sy0">;</span>

    </div>

75. <div class="de2">

        <span class="kw1">if</span> <span class="br0">(</span><span
    class="sy0">!</span><span class="kw3">empty</span><span
    class="br0">(</span><span class="re0">\$whereparts</span><span
    class="br0">)</span><span class="br0">)</span> <span
    class="re0">\$sql\_a</span><span class="br0">[</span><span
    class="br0">]</span> <span class="sy0">=</span> <span class="st0">"
    WHERE "</span><span class="sy0">.</span><span
    class="kw3">join</span><span class="br0">(</span><span class="st0">"
    AND "</span><span class="sy0">,</span><span
    class="re0">\$whereparts</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

76. <div class="de1">

        <span class="kw1">if</span> <span class="br0">(</span><span
    class="sy0">!</span><span class="kw3">empty</span><span
    class="br0">(</span><span class="re0">\$orderparts</span><span
    class="br0">)</span><span class="br0">)</span> <span
    class="re0">\$sql\_a</span><span class="br0">[</span><span
    class="br0">]</span> <span class="sy0">=</span> <span class="st0">"
    ORDER BY "</span><span class="sy0">.</span><span
    class="kw3">join</span><span class="br0">(</span><span
    class="st0">","</span><span class="sy0">,</span><span
    class="re0">\$orderparts</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

77. <div class="de1">

        <span class="re0">\$sql\_s</span> <span class="sy0">=</span>
    <span class="kw3">join</span><span class="br0">(</span><span
    class="st0">" "</span><span class="sy0">,</span><span
    class="re0">\$sql\_a</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

78. <div class="de1">

        <span class="re0">\$result</span><span class="sy0">=</span><span
    class="re0">\$db</span><span class="sy0">-\></span><span
    class="me1">query</span><span class="br0">(</span><span
    class="re0">\$sql\_s</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

79. <div class="de1">

        <span class="kw1">if</span> <span class="br0">(</span><span
    class="re0">\$result</span> <span class="sy0">===</span> <span
    class="kw4">FALSE</span><span class="br0">)</span> <span
    class="kw1">return</span> <span class="kw4">FALSE</span><span
    class="sy0">;</span> <span class="co1">// you may want to do
    something more here, such as showing an error, etc</span>

    </div>

80. <div class="de2">

        <span class="re0">\$all\_rows</span> <span class="sy0">=</span>
    <span class="kw3">Array</span><span class="br0">(</span><span
    class="br0">)</span><span class="sy0">;</span>

    </div>

81. <div class="de1">

        <span class="kw1">if</span> <span class="br0">(</span><span
    class="re0">\$result</span><span class="sy0">-\></span><span
    class="me1">num\_rows</span> <span class="sy0">\></span> <span
    class="nu0">0</span><span class="br0">)</span> <span
    class="br0">{</span>

    </div>

82. <div class="de1">

            <span class="kw1">if</span> <span class="br0">(</span><span
    class="kw3">method\_exists</span><span class="br0">(</span><span
    class="st_h">'mysqli\_result'</span><span class="sy0">,</span><span
    class="st_h">'fetch\_all'</span><span class="br0">)</span><span
    class="br0">)</span> <span class="br0">{</span>

    </div>

83. <div class="de1">

                <span class="re0">\$all\_rows</span> <span
    class="sy0">=</span> <span class="re0">\$result</span><span
    class="sy0">-\></span><span class="me1">fetch\_all</span><span
    class="br0">(</span>MYSQLI\_ASSOC<span class="br0">)</span><span
    class="sy0">;</span>

    </div>

84. <div class="de1">

            <span class="br0">}</span> <span class="kw1">else</span>
    <span class="br0">{</span>

    </div>

85. <div class="de2">

                <span class="coMULTI">/\* version is too old, have to do
    it by hand \*/</span>

    </div>

86. <div class="de1">

                <span class="kw1">while</span> <span
    class="br0">(</span><span class="re0">\$row</span> <span
    class="sy0">=</span> <span class="re0">\$result</span><span
    class="sy0">-\></span><span class="me1">fetch\_assoc</span><span
    class="br0">(</span><span class="br0">)</span><span
    class="br0">)</span> <span class="br0">{</span>

    </div>

87. <div class="de1">

                    <span class="re0">\$all\_rows</span><span
    class="br0">[</span><span class="br0">]</span> <span
    class="sy0">=</span> <span class="re0">\$row</span><span
    class="sy0">;</span>

    </div>

88. <div class="de1">

                <span class="br0">}</span>

    </div>

89. <div class="de1">

            <span class="br0">}</span>

    </div>

90. <div class="de2">

        <span class="br0">}</span>

    </div>

91. <div class="de1">

        <span class="re0">\$result</span><span
    class="sy0">-\></span><span class="me1">free</span><span
    class="br0">(</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

92. <div class="de1">

        <span class="kw1">return</span> <span
    class="re0">\$all\_rows</span><span class="sy0">;</span>

    </div>

93. <div class="de1">

    <span class="br0">}</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.FlexibleQueryFunctions?action=sourceblock&num=1)

</div>

</div>

There are several things to note here.

<div class="vspace">

</div>

1.  the options parameter defaults to NULL -- if nothing gets passed in
    then there will be nothing to modify the function -- this is good,
    because it allows a default behaviour to be defined. Including the
    assignment in the parameter list means PHP won't squawk if this
    parameter is omitted.
    <div class="vspace">

    </div>

2.  The database descriptor is passed in. This means the function
    doesn't have to rely on any globals being defined other than a few
    constants.
    <div class="vspace">

    </div>

3.  The options processing is flexible. If the value of any particular
    array item is a scalar, it is turned into an array item. Otherwise
    the value is assigned to the modifier array (in this case: columns,
    whereparts, orderparts).
    <div class="vspace">

    </div>

4.  This still isn't fully defensive in that the options structure may
    be made more complicated than expected, which will cause the
    eventual sql statement to fail. Given that this is solely a SELECT
    statement, there should be no data corruption possible with this.
    <div class="vspace">

    </div>

    -   TODO: make this work with prepared statements.
        [tamara](http://wiki.tamouse.org?n=Profiles.Tamara?action=print)
        March 21, 2012, at 01:29 AM

    <div class="vspace">

    </div>

5.  The function makes use of the <span
    class="wikiword">[BestPracticeForBuildingSQLQueries](http://wiki.tamouse.org?n=Technology.BestPracticeForBuildingSQLQueries?action=print)</span>
    by building each element of the SELECT statement as an array item
    and then joining the array elements together to form the eventual
    string that gets passed to the mysqli query method.
    <div class="vspace">

    </div>

6.  The one option that doesn't follow the <span
    class="wikiword">[BestPracticeForBuildingSQLQueries](http://wiki.tamouse.org?n=Technology.BestPracticeForBuildingSQLQueries?action=print)</span>
    is the `$tblname`. I chose that because it isn't often that I find
    myself with complicated joins, etc, and most often with just a
    single table name. However, this is a possible enhancement for the
    future. `$tblname` could be a scalar or an array, much like the
    choices in the options parameter. More complicated table
    specifications can still be made by simply assigning a string of
    them to the `$tblname` parameter, such as
    `"customers as c, orders as o, deliveries as d"`. Ideally, I think I
    would want to represent that as an array rather than a single
    string:

<div class="vspace">

</div>

<div id="sourceblock2" class="sourceblock">

<div class="sourceblocktext">

<div class="php">

1.  <div class="de1">

    <span class="re0">\$tblspec</span> <span class="sy0">=</span> <span
    class="kw3">array</span><span class="br0">(</span>

    </div>

2.  <div class="de1">

        <span class="st0">"customers as c"</span><span
    class="sy0">,</span>

    </div>

3.  <div class="de1">

        <span class="st0">"orders as o"</span><span class="sy0">,</span>

    </div>

4.  <div class="de1">

        <span class="st0">"deliveries as d"</span>

    </div>

5.  <div class="de2">

        <span class="br0">)</span><span class="sy0">;</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.FlexibleQueryFunctions?action=sourceblock&num=2)

</div>

</div>

<div class="vspace">

</div>

<div class="indent">

Then the array could be joined into the sql array in the function.

</div>

<div class="vspace">

</div>

<div style="display: none;">

Summary:How to create flexible, reusable query functions
Parent:(Technology.)PHP <span
class="wikiword">[IncludeMe](http://wiki.tamouse.org?n=Technology.IncludeMe?action=edit)[?](http://wiki.tamouse.org?n=Technology.IncludeMe?action=edit)</span>:[Technology.PHP](http://wiki.tamouse.org?n=Technology.PHP?action=print)
Categories:[BestPractices](http://wiki.tamouse.org?n=Category.BestPractices),[Articles](http://wiki.tamouse.org?n=Category.Articles)
Tags: php, reuse, best practices, modularity, reuse

</div>

<div class="vspace">

</div>

</div>
