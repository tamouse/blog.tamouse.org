<div id="wikitext">

Update:
-------

While the below is useful and interesting in many cases, making a class
`Enumerable`{.escaped} may be overkill in many cases. You can also
simply return an `Enumerator`{.escaped} for the `:each`{.escaped} method
to get much the same capability. As outlined in
<http://blog.arkency.com/2014/01/ruby-to-enum-for-enumerator/>, use of
`Enumerable`{.escaped} should be limited to classes which are actually
collections.

<div class="vspace">

</div>

<div class="round lrindent quote">

In such case I prefer to go Java-way and provide external Enumerator for
those who need to call one of the many useful Enumerable methods on the
collection. I think that we need to ask ourselves a question: Is that
class a collection?. If it really is then it absolutely makes sense to
include Enumerable. If however it is not a collection, but rather a
class which happens contain something else, or providing a collection,
well then maybe external Enumerator is your solution.

</div>

See
[HowToUsingEnumeratorInsteadOfEnumerable](http://wiki.tamouse.org?n=Technology.HowToUsingEnumeratorInsteadOfEnumerable?action=print).

<div class="vspace">

</div>

<div class="round lrindent quote">

[Andrea's Blog](http://andreacfm.com:80/)
=========================================

Make Your Ruby Classes Comparable and Enumerable
================================================

Jul 27th, 2011

Something very cool in ruby are mixins. As the word says mixin is a
technique to mixed a module into a class using the statement “include”.
While including a module is a very large topic I focused on the
opportunity to include module defined in the Ruby standard library into
your class to take advantages of the methods and abilities that these
modules provide. The
[Comparable](http://www.ruby-doc.org/core/classes/Comparable.html)
module in ruby define methods like ` < <= <==> >= > between?`{.escaped}.
What if I want to achieve is making my class instances **comparable** so
that I can ask to ruby if `class_a > class_b`{.escaped}.

Here an example:

<div class="vspace">

</div>

<div id="sourceblock1" class="sourceblock">

<div class="sourceblocktext">

<div class="ruby">

<div class="head">

Comparable

</div>

1.  <div class="de1">

    <span class="kw1">class</span> Person

    </div>

2.  <div class="de1">

       <span class="kw1">include</span> <span
    class="kw4">Comparable</span>

    </div>

3.  <div class="de1">

     

    </div>

4.  <div class="de1">

       attr\_reader <span class="re3">:name</span>

    </div>

5.  <div class="de2">

     

    </div>

6.  <div class="de1">

       <span class="kw1">def</span> initialize<span
    class="br0">(</span>name<span class="br0">)</span>

    </div>

7.  <div class="de1">

         <span class="re1">@name</span> = name

    </div>

8.  <div class="de1">

       <span class="kw1">end</span>

    </div>

9.  <div class="de1">

     

    </div>

10. <div class="de2">

       <span class="kw1">def</span> <span class="sy0">\<=\></span> other

    </div>

11. <div class="de1">

         <span class="kw2">self</span>.<span class="me1">name</span>
    <span class="sy0">\<=\></span> other.<span class="me1">name</span>

    </div>

12. <div class="de1">

       <span class="kw1">end</span>

    </div>

13. <div class="de1">

    <span class="kw1">end</span>

    </div>

14. <div class="de1">

     

    </div>

15. <div class="de2">

    p1 = Person.<span class="me1">new</span> <span
    class="st0">'Andrea'</span>

    </div>

16. <div class="de1">

    p2 = Person.<span class="me1">new</span> <span
    class="st0">'Fabio'</span>

    </div>

17. <div class="de1">

    p3 = Person.<span class="me1">new</span> <span
    class="st0">'Luigi'</span>

    </div>

18. <div class="de1">

     

    </div>

19. <div class="de1">

    <span class="kw3">p</span> p1 <span class="sy0">\<</span> p2 <span
    class="co1">\#true </span>

    </div>

20. <div class="de2">

    <span class="kw3">p</span> p2 <span class="sy0">\></span> p1 <span
    class="co1">\#false</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.MakeYourRubyClassesComparableAndEnumerable?action=sourceblock&num=1)

</div>

</div>

The Person class include the module Comparable and implements one single
method (\<=\>). This methods is used by the Comparable module to perform
the logic of any of the operator that the module provide.In the example
I say to the Person class to compare instances through the @name
attribute. But we even gain more functionalities. Once that our classes
are able to be compared they are also able to be sorted if placed inside
an array. Amazing!!!

<div class="vspace">

</div>

<div id="sourceblock2" class="sourceblock">

<div class="sourceblocktext">

<div class="ruby">

<div class="head">

sorting

</div>

1.  <div class="de1">

    <span class="br0">[</span>p2,p3,p1<span class="br0">]</span>.<span
    class="me1">sort</span> <span class="co1">\#[\#\<Person:0x104f09d80
    @name="Andrea"\>, \#\<Person:0x104f09d30 @name="Fabio"\>,
    \#\<Person:0x104f09ce0 @name="Luigi"\>]</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

</div>

</div>

But what if I want to find Persons by name?? Then we can use for this
purpose the
[Enumerable](http://www.ruby-doc.org/core/classes/Enumerable.html)
module. What we can do is to create a custom <span
class="wikiword">PersonEnumerator</span> class like this:

<div class="vspace">

</div>

<div id="sourceblock3" class="sourceblock">

<div class="sourceblocktext">

<div class="ruby">

<div class="head">

Enumerable

</div>

1.  <div class="de1">

    <span class="kw1">class</span> PersonEnumerator

    </div>

2.  <div class="de1">

       <span class="kw1">include</span> <span
    class="kw4">Enumerable</span>

    </div>

3.  <div class="de1">

     

    </div>

4.  <div class="de1">

       attr\_reader <span class="re3">:persons</span>

    </div>

5.  <div class="de2">

     

    </div>

6.  <div class="de1">

       <span class="kw1">def</span> initialize<span
    class="br0">(</span>persons<span class="br0">)</span>

    </div>

7.  <div class="de1">

         <span class="re1">@persons</span> = persons

    </div>

8.  <div class="de1">

       <span class="kw1">end</span>

    </div>

9.  <div class="de1">

     

    </div>

10. <div class="de2">

       <span class="kw1">def</span> each <span class="sy0">&</span>block

    </div>

11. <div class="de1">

         <span class="re1">@persons</span>.<span class="me1">each</span>
    <span class="kw1">do</span> <span class="sy0">|</span>person<span
    class="sy0">|</span>

    </div>

12. <div class="de1">

           <span class="kw1">if</span> block\_given?

    </div>

13. <div class="de1">

             block.<span class="me1">call</span> person

    </div>

14. <div class="de1">

           <span class="kw1">else</span>

    </div>

15. <div class="de2">

             <span class="kw1">yield</span> person

    </div>

16. <div class="de1">

           <span class="kw1">end</span>

    </div>

17. <div class="de1">

         <span class="kw1">end</span>

    </div>

18. <div class="de1">

       <span class="kw1">end</span>

    </div>

19. <div class="de1">

    <span class="kw1">end</span>

    </div>

20. <div class="de2">

     

    </div>

21. <div class="de1">

    en = PersonEnumerator.<span class="me1">new</span> <span
    class="br0">[</span>p1,p2,p3<span class="br0">]</span>

    </div>

22. <div class="de1">

    <span class="kw3">p</span> en.<span class="me1">find</span> <span
    class="br0">{</span><span class="sy0">|</span>person<span
    class="sy0">|</span> person.<span class="me1">name</span> == <span
    class="st0">'Andrea'</span><span class="br0">}</span> <span
    class="co1">\#\<Person:0x10e61d4d8 @name="Andrea"\></span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.MakeYourRubyClassesComparableAndEnumerable?action=sourceblock&num=3)

</div>

</div>

Including the Enumerable module and implementing the each method we gain
most of the many methods that the module expose. In our example I
**find** a person object passing a block that filters each Person by
name.

The mixin technique applied to the ruby standard library is very
powerful. Your code code gets more elegant and more **Ruby Way** for you
to maintain and for your collaborator to read and understand

Ruby amazes me any day more!

Posted by Andrea Campolonghi Jul 27th, 2011
[Ruby](http://andreacfm.com:80/blog/categories/ruby/)

Copyright © 2013 - Andrea Campolonghi - Powered by
[Octopress](http://octopress.org)

</div>

<div class="vspace">

</div>

And a fun example, combined with using Struct
---------------------------------------------

<div id="sourceblock4" class="sourceblock">

<div class="sourceblocktext">

<div class="ruby">

<div class="head">

struct\_play

</div>

1.  <div class="de1">

    <span class="kw1">class</span> MyClass <span class="sy0">\<</span>
    <span class="kw4">Struct</span>.<span class="me1">new</span> <span
    class="re3">:stuff</span>, :<span class="kw1">and</span>, <span
    class="re3">:nonsense</span>

    </div>

2.  <div class="de1">

      <span class="kw1">def</span> initialize

    </div>

3.  <div class="de1">

        <span class="kw2">self</span>.<span class="me1">stuff</span> =
    <span class="kw3">Array</span>.<span class="me1">new</span>

    </div>

4.  <div class="de1">

        <span class="kw2">self</span>.<span class="kw1">and</span> =
    <span class="kw4">Hash</span>.<span class="me1">new</span>

    </div>

5.  <div class="de2">

        <span class="kw2">self</span>.<span class="me1">nonsense</span>
    = <span class="kw3">String</span>.<span class="me1">new</span>

    </div>

6.  <div class="de1">

      <span class="kw1">end</span>

    </div>

7.  <div class="de1">

     

    </div>

8.  <div class="de1">

      <span class="kw1">include</span> <span
    class="kw4">Enumerable</span>

    </div>

9.  <div class="de1">

     

    </div>

10. <div class="de2">

      <span class="co1">\# Defining the \#each method gives a whole lot
    of other goodies coming from Enumerable</span>

    </div>

11. <div class="de1">

      <span class="kw1">def</span> each <span class="sy0">&</span>block

    </div>

12. <div class="de1">

        <span class="kw2">self</span>.<span
    class="me1">stuff</span>.<span class="me1">each</span> <span
    class="kw1">do</span> <span class="sy0">|</span>s<span
    class="sy0">|</span>

    </div>

13. <div class="de1">

          <span class="kw1">if</span> block\_given?

    </div>

14. <div class="de1">

            block.<span class="me1">call</span> s

    </div>

15. <div class="de2">

          <span class="kw1">else</span>

    </div>

16. <div class="de1">

            <span class="kw1">yield</span> s

    </div>

17. <div class="de1">

          <span class="kw1">end</span>

    </div>

18. <div class="de1">

        <span class="kw1">end</span>

    </div>

19. <div class="de1">

      <span class="kw1">end</span>

    </div>

20. <div class="de2">

     

    </div>

21. <div class="de1">

      <span class="co1">\# This little ditty appends objects to the
    stuff inst\_var so you can do</span>

    </div>

22. <div class="de1">

      <span class="co1">\# neat things like:</span>

    </div>

23. <div class="de1">

      <span class="co1">\#</span>

    </div>

24. <div class="de1">

      <span class="co1">\#     c \<\< 1 \<\< 'a' \<\< :one</span>

    </div>

25. <div class="de2">

      <span class="kw1">def</span> <span class="sy0">\<\<</span> obj

    </div>

26. <div class="de1">

        <span class="kw2">self</span>.<span class="me1">stuff</span>
    <span class="sy0">\<\<</span> obj

    </div>

27. <div class="de1">

      <span class="kw1">end</span>

    </div>

28. <div class="de1">

     

    </div>

29. <div class="de1">

      <span class="co1">\# Give a nice output for the object</span>

    </div>

30. <div class="de2">

      <span class="kw1">def</span> to\_s

    </div>

31. <div class="de1">

        <span class="st0">"\#{self.nonsense.to\_s} \#{self.and.inspect}
    \#{self.stuff.inspect}"</span>

    </div>

32. <div class="de1">

      <span class="kw1">end</span>

    </div>

33. <div class="de1">

     

    </div>

34. <div class="de1">

      <span class="co1">\# Provides a means of getting at both
    containers in the class.</span>

    </div>

35. <div class="de2">

      <span class="co1">\# Integer values for idx simply return the
    value at stuff[idx] while</span>

    </div>

36. <div class="de1">

      <span class="co1">\# Non-Integer values act as keys to the hash
    and.</span>

    </div>

37. <div class="de1">

      <span class="kw1">def</span> <span class="br0">[</span><span
    class="br0">]</span> idx

    </div>

38. <div class="de1">

        <span class="kw1">case</span> idx

    </div>

39. <div class="de1">

        <span class="kw1">when</span> <span class="kw3">Integer</span>

    </div>

40. <div class="de2">

          <span class="kw2">self</span>.<span
    class="me1">stuff</span><span class="br0">[</span>idx<span
    class="br0">]</span>

    </div>

41. <div class="de1">

        <span class="kw1">else</span>

    </div>

42. <div class="de1">

          <span class="kw2">self</span>.<span
    class="kw1">and</span><span class="br0">[</span>idx<span
    class="br0">]</span>

    </div>

43. <div class="de1">

        <span class="kw1">end</span>

    </div>

44. <div class="de1">

      <span class="kw1">end</span>

    </div>

45. <div class="de2">

     

    </div>

46. <div class="de1">

      <span class="co1">\# Counterpart to the above, this is the
    setter</span>

    </div>

47. <div class="de1">

      <span class="kw1">def</span> <span class="br0">[</span><span
    class="br0">]</span>= idx, obj

    </div>

48. <div class="de1">

        <span class="kw1">case</span> idx

    </div>

49. <div class="de1">

        <span class="kw1">when</span> <span class="kw3">Integer</span>

    </div>

50. <div class="de2">

          <span class="kw2">self</span>.<span
    class="me1">stuff</span><span class="br0">[</span>idx<span
    class="br0">]</span>=obj

    </div>

51. <div class="de1">

        <span class="kw1">else</span>

    </div>

52. <div class="de1">

          <span class="kw2">self</span>.<span
    class="kw1">and</span><span class="br0">[</span>idx<span
    class="br0">]</span>=obj

    </div>

53. <div class="de1">

        <span class="kw1">end</span>

    </div>

54. <div class="de1">

      <span class="kw1">end</span>

    </div>

55. <div class="de2">

     

    </div>

56. <div class="de1">

      <span class="co1">\# Makes this class's objects comparable, so
    they can be sorted</span>

    </div>

57. <div class="de1">

      <span class="co1">\# and other neat tricks.</span>

    </div>

58. <div class="de1">

      <span class="kw1">include</span> <span
    class="kw4">Comparable</span>

    </div>

59. <div class="de1">

     

    </div>

60. <div class="de2">

      <span class="co1">\# The basic comparison operator.</span>

    </div>

61. <div class="de1">

      <span class="co1">\# In this case, it's just the nonsense content
    that's being compared.</span>

    </div>

62. <div class="de1">

      <span class="kw1">def</span> <span class="sy0">\<=\></span> other

    </div>

63. <div class="de1">

        <span class="kw2">self</span>.<span class="me1">nonsense</span>
    <span class="sy0">\<=\></span> other.<span
    class="me1">nonsense</span>

    </div>

64. <div class="de1">

      <span class="kw1">end</span>

    </div>

65. <div class="de2">

     

    </div>

66. <div class="de1">

    <span class="kw1">end</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.MakeYourRubyClassesComparableAndEnumerable?action=sourceblock&num=4)

</div>

</div>

Which lets me do fun things like this:

<div class="vspace">

</div>

<div id="sourceblock5" class="sourceblock">

<div class="sourceblocktext">

<div class="text">

irb(main):001:0\> load 'struct\_play.rb'\
 true\
 irb(main):002:0\> c = MyClass.new\
 \#\<struct MyClass stuff=[], and={}, nonsense=""\>\
 irb(main):003:0\> c \<\< 1 \<\< 'a' \<\< :one\
 [1, "a", :one]\
 irb(main):004:0\> c.nonsense = "This is nonsense"\
 "This is nonsense"\
 irb(main):005:0\> c[:a] = %{some words of dissent}\
 "some words of dissent"\
 irb(main):006:0\> c['wax'] = %w{wax on wax off}\
 ["wax", "on", "wax", "off"]\
 irb(main):007:0\> puts c.to\_s\
 This is nonsense {:a=\>"some words of dissent", "wax"=\>["wax", "on",
"wax", "off"]} [1, "a", :one]\
 nil\
 irb(main):008:0\> c1 = MyClass.new\
 \#\<struct MyClass stuff=[], and={}, nonsense=""\>\
 irb(main):009:0\> c1.nonsense = "Another fine mess"\
 "Another fine mess"\
 irb(main):010:0\> c2 = MyClass.new\
 \#\<struct MyClass stuff=[], and={}, nonsense=""\>\
 irb(main):011:0\> c2.nonsense = "the bees knees"\
 "the bees knees"\
 irb(main):012:0\> [c,c1,c2].sort\
 [\#\<struct MyClass stuff=[], and={}, nonsense="Another fine mess"\>,
\#\<struct MyClass stuff=[1, "a", :one], and={:a=\>"some words of
dissent", "wax"=\>["wax", "on", "wax", "off"]}, nonsense="This is
nonsense"\>, \#\<struct MyClass stuff=[], and={}, nonsense="the bees
knees"\>]\
 irb(main):013:0\> [c,c1,c2].each {|x| puts x}\
 This is nonsense {:a=\>"some words of dissent", "wax"=\>["wax", "on",
"wax", "off"]} [1, "a", :one]\
 Another fine mess {} []\
 the bees knees {} []\
 [\#\<struct MyClass stuff=[1, "a", :one], and={:a=\>"some words of
dissent", "wax"=\>["wax", "on", "wax", "off"]}, nonsense="This is
nonsense"\>, \#\<struct MyClass stuff=[], and={}, nonsense="Another fine
mess"\>, \#\<struct MyClass stuff=[], and={}, nonsense="the bees
knees"\>]\
 irb(main):014:0\> [c,c1,c2].sort.each {|x| puts x}\
 Another fine mess {} []\
 This is nonsense {:a=\>"some words of dissent", "wax"=\>["wax", "on",
"wax", "off"]} [1, "a", :one]\
 the bees knees {} []\
 [\#\<struct MyClass stuff=[], and={}, nonsense="Another fine mess"\>,
\#\<struct MyClass stuff=[1, "a", :one], and={:a=\>"some words of
dissent", "wax"=\>["wax", "on", "wax", "off"]}, nonsense="This is
nonsense"\>, \#\<struct MyClass stuff=[], and={}, nonsense="the bees
knees"\>]\
 irb(main):015:0\> c.and.keys\
 [:a, "wax"]\
 irb(main):016:0\> c.keys\
 NoMethodError: undefined method \`keys' for \#\<MyClass:0x97f50f4\>\
         from (irb):16\
         from /home/tamara/.rvm/rubies/ruby-2.0.0-p195/bin/irb:13:in
\`\<main\>'\
 irb(main):017:0\>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.MakeYourRubyClassesComparableAndEnumerable?action=sourceblock&num=5)

</div>

</div>

<div class="vspace">

</div>

<div style="display: none;">

Summary: Something very cool in ruby are mixins. As the word says mixin
is a technique to mixed a module into a class using the statement
'include' Tags: ruby, Comparable, Enumerable Source:
<http://andreacfm.com/2011/07/27/make-your-ruby-classes-comparable-and-enumerable/>
Parent: (Technology.)Ruby includeme:
[Technology.Ruby](http://wiki.tamouse.org?n=Technology.Ruby?action=print)
Categories:[Articles](http://wiki.tamouse.org?n=Category.Articles)

</div>

Page saved at: Sun, 17 Feb 2013 08:10:08 -0600

</div>
