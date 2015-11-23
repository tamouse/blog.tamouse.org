<div id="wikitext">

### [How to remove duplicates in a hash in Ruby on Rails?](http://stackoverflow.com:80/questions/5208344/how-to-remove-duplicates-in-a-hash-in-ruby-on-rails)

I have a hash like so:

<div class="vspace">

</div>

<div id="sourceblock1" class="sourceblock">

<div class="sourceblocktext">

<div class="ruby">

1.  <div class="de1">

    <span class="br0">[</span>

    </div>

2.  <div class="de1">

      <span class="br0">{</span>

    </div>

3.  <div class="de1">

        <span class="re3">:lname</span> <span class="sy0">=\></span>
    <span class="st0">"Brown"</span>,

    </div>

4.  <div class="de1">

        <span class="re3">:email</span> <span class="sy0">=\></span>
    <span class="st0">"james@intuit.com"</span>,

    </div>

5.  <div class="de2">

        <span class="re3">:fname</span> <span class="sy0">=\></span>
    <span class="st0">"James"</span>

    </div>

6.  <div class="de1">

      <span class="br0">}</span>,

    </div>

7.  <div class="de1">

      <span class="br0">{</span>

    </div>

8.  <div class="de1">

        <span class="re3">:lname</span> <span class="sy0">=\></span>
    <span class="kw2">nil</span>,

    </div>

9.  <div class="de1">

        <span class="re3">:email</span> <span class="sy0">=\></span>
    <span class="st0">"brad@intuit.com"</span>,

    </div>

10. <div class="de2">

        <span class="re3">:fname</span> <span class="sy0">=\></span>
    <span class="kw2">nil</span>

    </div>

11. <div class="de1">

      <span class="br0">}</span>,

    </div>

12. <div class="de1">

      <span class="br0">{</span>

    </div>

13. <div class="de1">

        <span class="re3">:lname</span> <span class="sy0">=\></span>
    <span class="st0">"Smith"</span>,

    </div>

14. <div class="de1">

        <span class="re3">:email</span> <span class="sy0">=\></span>
    <span class="st0">"brad@intuit.com"</span>,

    </div>

15. <div class="de2">

        <span class="re3">:fname</span> <span class="sy0">=\></span>
    <span class="st0">"Brad"</span>

    </div>

16. <div class="de1">

      <span class="br0">}</span>,

    </div>

17. <div class="de1">

      <span class="br0">{</span>

    </div>

18. <div class="de1">

        <span class="re3">:lname</span> <span class="sy0">=\></span>
    <span class="kw2">nil</span>,

    </div>

19. <div class="de1">

        <span class="re3">:email</span> <span class="sy0">=\></span>
    <span class="st0">"brad@intuit.com"</span>,

    </div>

20. <div class="de2">

        <span class="re3">:fname</span> <span class="sy0">=\></span>
    <span class="kw2">nil</span>

    </div>

21. <div class="de1">

      <span class="br0">}</span>,

    </div>

22. <div class="de1">

      <span class="br0">{</span>

    </div>

23. <div class="de1">

        <span class="re3">:lname</span> <span class="sy0">=\></span>
    <span class="st0">"Smith"</span>,

    </div>

24. <div class="de1">

        <span class="re3">:email</span> <span class="sy0">=\></span>
    <span class="st0">"brad@intuit.com"</span>,

    </div>

25. <div class="de2">

        <span class="re3">:fname</span> <span class="sy0">=\></span>
    <span class="st0">"Brad"</span>

    </div>

26. <div class="de1">

      <span class="br0">}</span>,

    </div>

27. <div class="de1">

      <span class="br0">{</span>

    </div>

28. <div class="de1">

        <span class="re3">:lname</span> <span class="sy0">=\></span>
    <span class="kw2">nil</span>,

    </div>

29. <div class="de1">

        <span class="re3">:email</span> <span class="sy0">=\></span>
    <span class="st0">"brad@intuit.com"</span>,

    </div>

30. <div class="de2">

        <span class="re3">:fname</span> <span class="sy0">=\></span>
    <span class="kw2">nil</span>

    </div>

31. <div class="de1">

      <span class="br0">}</span>

    </div>

32. <div class="de1">

    <span class="br0">]</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.HowToRemoveDuplicatesInAHashInRubyOnRailsStackOverflow20130724030841?action=sourceblock&num=1)

</div>

</div>

What I would like to learn how to do is how to remove a record if it is
duplicate. Meaning, see how there are several "brad@intuit.com" how can
I remove the duplicate records, meaning remove all the others that have
an email of "brad@intuit.com".... Making email the key not the other
fields?

I know this is an old thread, but Rails has a method on 'Enumerable'
called 'index\_by' which can be handy in this case:

Now you can get the unique rows as follows:

<div class="vspace">

</div>

<div id="sourceblock2" class="sourceblock">

<div class="sourceblocktext">

<div class="ruby">

list.<span class="me1">index\_by</span> <span class="br0">{</span><span
class="sy0">|</span>r<span class="sy0">|</span> r<span
class="br0">[</span><span class="re3">:email</span><span
class="br0">]</span><span class="br0">}</span>.<span
class="me1">values</span>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.HowToRemoveDuplicatesInAHashInRubyOnRailsStackOverflow20130724030841?action=sourceblock&num=2)

</div>

</div>

To merge the rows with the same email id.

<div class="vspace">

</div>

<div id="sourceblock3" class="sourceblock">

<div class="sourceblocktext">

<div class="ruby">

list.<span class="me1">group\_by</span><span class="br0">{</span><span
class="sy0">|</span>r<span class="sy0">|</span> r<span
class="br0">[</span><span class="re3">:email</span><span
class="br0">]</span><span class="br0">}</span>.<span
class="me1">map</span> <span class="kw1">do</span> <span
class="sy0">|</span>k, v<span class="sy0">|</span> v.<span
class="me1">inject</span><span class="br0">(</span><span
class="br0">{</span><span class="br0">}</span><span class="br0">)</span>
<span class="br0">{</span><span class="sy0">|</span>r, h<span
class="sy0">|</span> r.<span class="me1">merge</span><span
class="br0">(</span>h<span class="br0">)</span><span
class="br0">{</span> <span class="sy0">|</span>key, o, n<span
class="sy0">|</span> o <span class="sy0">||</span> n <span
class="br0">}</span> <span class="br0">}</span> <span
class="kw1">end</span>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.HowToRemoveDuplicatesInAHashInRubyOnRailsStackOverflow20130724030841?action=sourceblock&num=3)

</div>

</div>

Custom but efficient method:

<div class="vspace">

</div>

<div id="sourceblock4" class="sourceblock">

<div class="sourceblocktext">

<div class="ruby">

list.<span class="me1">inject</span><span class="br0">(</span><span
class="br0">{</span><span class="br0">}</span><span class="br0">)</span>
<span class="kw1">do</span> <span class="sy0">|</span>r, h<span
class="sy0">|</span> <span class="br0">(</span>r<span
class="br0">[</span>h<span class="br0">[</span><span
class="re3">:email</span><span class="br0">]</span><span
class="br0">]</span> <span class="sy0">||</span>= <span
class="br0">{</span><span class="br0">}</span><span
class="br0">)</span>.<span class="me1">merge</span>!<span
class="br0">(</span>h<span class="br0">)</span><span
class="br0">{</span> <span class="sy0">|</span>key, old, new<span
class="sy0">|</span> old <span class="sy0">||</span> new <span
class="br0">}</span>  r <span class="kw1">end</span>.<span
class="me1">values</span>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.HowToRemoveDuplicatesInAHashInRubyOnRailsStackOverflow20130724030841?action=sourceblock&num=4)

</div>

</div>

answered Mar 15 '11 at 18:39 [Harish
Shetty](http://stackoverflow.com:80/users/163203/harish-shetty)

In Ruby 1.9.2, `Array#uniq` will accept a block parameter which it will
use when comparing your objects:

<div class="vspace">

</div>

<div id="sourceblock5" class="sourceblock">

<div class="sourceblocktext">

<div class="ruby">

arrays.<span class="me1">uniq</span> <span class="br0">{</span> <span
class="sy0">|</span>h<span class="sy0">|</span> h<span
class="br0">[</span><span class="re3">:email</span><span
class="br0">]</span> <span class="br0">}</span>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.HowToRemoveDuplicatesInAHashInRubyOnRailsStackOverflow20130724030841?action=sourceblock&num=5)

</div>

</div>

[Dan Cheail](http://stackoverflow.com:80/users/190985/dan-cheail)

Ok, this (delete duplicates) is what you asked for:

<div class="vspace">

</div>

<div id="sourceblock6" class="sourceblock">

<div class="sourceblocktext">

<div class="ruby">

a.<span class="me1">sort\_by</span> <span class="br0">{</span> <span
class="sy0">|</span>e<span class="sy0">|</span> e<span
class="br0">[</span><span class="re3">:email</span><span
class="br0">]</span> <span class="br0">}</span>.<span
class="me1">inject</span><span class="br0">(</span><span
class="br0">[</span><span class="br0">]</span><span class="br0">)</span>
<span class="br0">{</span> <span class="sy0">|</span>m,e<span
class="sy0">|</span> m.<span class="me1">last</span>.<span
class="kw2">nil</span>? ? <span class="br0">[</span>e<span
class="br0">]</span> : m.<span class="me1">last</span><span
class="br0">[</span><span class="re3">:email</span><span
class="br0">]</span> == e<span class="br0">[</span><span
class="re3">:email</span><span class="br0">]</span> ? m : m <span
class="sy0">&</span>lt;<span class="sy0">&</span>lt; e <span
class="br0">}</span>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.HowToRemoveDuplicatesInAHashInRubyOnRailsStackOverflow20130724030841?action=sourceblock&num=6)

</div>

</div>

But I think this (merge values) is what you want:

<div class="vspace">

</div>

<div id="sourceblock7" class="sourceblock">

<div class="sourceblocktext">

<div class="ruby">

a.<span class="me1">sort\_by</span> <span class="br0">{</span> <span
class="sy0">|</span>e<span class="sy0">|</span> e<span
class="br0">[</span><span class="re3">:email</span><span
class="br0">]</span> <span class="br0">}</span>.<span
class="me1">inject</span><span class="br0">(</span><span
class="br0">[</span><span class="br0">]</span><span class="br0">)</span>
<span class="br0">{</span> <span class="sy0">|</span>m,e<span
class="sy0">|</span> m.<span class="me1">last</span>.<span
class="kw2">nil</span>? ? <span class="br0">[</span>e<span
class="br0">]</span> : m.<span class="me1">last</span><span
class="br0">[</span><span class="re3">:email</span><span
class="br0">]</span> == e<span class="br0">[</span><span
class="re3">:email</span><span class="br0">]</span> ? <span
class="br0">(</span>m.<span class="me1">last</span>.<span
class="me1">merge</span>!<span class="br0">(</span>e<span
class="br0">)</span> <span class="br0">{</span> <span
class="sy0">|</span>k,o,n<span class="sy0">|</span> o  n <span
class="br0">}</span>; m<span class="br0">)</span> : m <span
class="sy0">&</span>lt;<span class="sy0">&</span>lt; e <span
class="br0">}</span>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.HowToRemoveDuplicatesInAHashInRubyOnRailsStackOverflow20130724030841?action=sourceblock&num=7)

</div>

</div>

Perhaps I'm stretching the one-liner idea a bit unreasonably, so with
different formatting and a test case:

<div class="vspace">

</div>

<div id="sourceblock8" class="sourceblock">

<div class="sourceblocktext">

<div class="ruby">

<div class="head">

mergedups

</div>

<span class="kw3">require</span> <span class="st0">'pp'</span>\
\
 a = <span class="br0">[</span><span class="br0">{</span>:fname<span
class="sy0">=\></span><span class="st0">"James"</span>, <span
class="re3">:lname</span><span class="sy0">=\></span><span
class="st0">"Brown"</span>, <span class="re3">:email</span><span
class="sy0">=\></span><span class="st0">"james@intuit.com"</span><span
class="br0">}</span>,\
      <span class="br0">{</span>:fname<span class="sy0">=\></span><span
class="kw2">nil</span>,     <span class="re3">:lname</span><span
class="sy0">=\></span><span class="kw2">nil</span>,     <span
class="re3">:email</span><span class="sy0">=\></span><span
class="st0">"brad@intuit.com"</span><span class="br0">}</span>,\
      <span class="br0">{</span>:fname<span class="sy0">=\></span><span
class="st0">"Brad"</span>,  <span class="re3">:lname</span><span
class="sy0">=\></span><span class="st0">"Smith"</span>, <span
class="re3">:email</span><span class="sy0">=\></span><span
class="st0">"brad@intuit.com"</span><span class="br0">}</span>,\
      <span class="br0">{</span>:fname<span class="sy0">=\></span><span
class="kw2">nil</span>,     <span class="re3">:lname</span><span
class="sy0">=\></span><span class="kw2">nil</span>,     <span
class="re3">:email</span><span class="sy0">=\></span><span
class="st0">"brad@intuit.com"</span><span class="br0">}</span>,\
      <span class="br0">{</span>:fname<span class="sy0">=\></span><span
class="st0">"Brad"</span>,  <span class="re3">:lname</span><span
class="sy0">=\></span><span class="st0">"Smith"</span>, <span
class="re3">:email</span><span class="sy0">=\></span><span
class="st0">"brad@intuit.com"</span><span class="br0">}</span>,\
      <span class="br0">{</span>:fname<span class="sy0">=\></span><span
class="st0">"Brad"</span>,  <span class="re3">:lname</span><span
class="sy0">=\></span><span class="st0">"Smith"</span>, <span
class="re3">:email</span><span class="sy0">=\></span><span
class="st0">"brad@intuit.com"</span><span class="br0">}</span><span
class="br0">]</span>\
\
 pp<span class="br0">(</span>\
   a.<span class="me1">sort\_by</span> <span class="br0">{</span> <span
class="sy0">|</span>e<span class="sy0">|</span> e<span
class="br0">[</span><span class="re3">:email</span><span
class="br0">]</span> <span class="br0">}</span>.<span
class="me1">inject</span><span class="br0">(</span><span
class="br0">[</span><span class="br0">]</span><span class="br0">)</span>
<span class="kw1">do</span> <span class="sy0">|</span>m,e<span
class="sy0">|</span>\
     m.<span class="me1">last</span>.<span class="kw2">nil</span>? ?
<span class="br0">[</span>e<span class="br0">]</span> :\
       m.<span class="me1">last</span><span class="br0">[</span><span
class="re3">:email</span><span class="br0">]</span> == e<span
class="br0">[</span><span class="re3">:email</span><span
class="br0">]</span> ? <span class="br0">(</span>m.<span
class="me1">last</span>.<span class="me1">merge</span>!<span
class="br0">(</span>e<span class="br0">)</span> <span
class="br0">{</span> <span class="sy0">|</span>k,o,n<span
class="sy0">|</span> o <span class="sy0">||</span> n <span
class="br0">}</span>; m<span class="br0">)</span> :\
         m <span class="sy0">\<\<</span> e\
   <span class="kw1">end</span>\
 <span class="br0">)</span>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.HowToRemoveDuplicatesInAHashInRubyOnRailsStackOverflow20130724030841?action=sourceblock&num=8)

</div>

</div>

<div class="vspace">

</div>

<div id="sourceblock9" class="sourceblock">

<div class="sourceblocktext">

<div class="ruby">

<div class="head">

output

</div>

<span class="br0">[</span><span class="br0">{</span>:email<span
class="sy0">=\></span><span class="st0">"brad@intuit.com"</span>, <span
class="re3">:fname</span><span class="sy0">=\></span><span
class="st0">"Brad"</span>, <span class="re3">:lname</span><span
class="sy0">=\></span><span class="st0">"Smith"</span><span
class="br0">}</span>,\
  <span class="br0">{</span>:email<span class="sy0">=\></span><span
class="st0">"james@intuit.com"</span>, <span
class="re3">:fname</span><span class="sy0">=\></span><span
class="st0">"James"</span>, <span class="re3">:lname</span><span
class="sy0">=\></span><span class="st0">"Brown"</span><span
class="br0">}</span><span class="br0">]</span>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.HowToRemoveDuplicatesInAHashInRubyOnRailsStackOverflow20130724030841?action=sourceblock&num=9)

</div>

</div>

answered Mar 6 '11 at 3:26
[DigitalRoss](http://stackoverflow.com:80/users/140740/digitalross)

<div class="vspace">

</div>

<div style="display: none;">

Summary: a few ways to removing records with duplicate values residing
in a hash, or merging records with duplicate values Tags: saved page,
ruby, hash, duplicate values Source:
<http://stackoverflow.com/questions/5208344/how-to-remove-duplicates-in-a-hash-in-ruby-on-rails>
Parent: (Technology.)Ruby includeme:
[Technology.Ruby](http://wiki.tamouse.org?n=Technology.Ruby?action=print)
Categories:[Articles](http://wiki.tamouse.org?n=Category.Articles),
[HowTos](http://wiki.tamouse.org?n=Category.HowTos)

</div>

Page saved at: Wed, 24 Jul 2013 03:08:41 -0500

<div class="vspace">

</div>

</div>
