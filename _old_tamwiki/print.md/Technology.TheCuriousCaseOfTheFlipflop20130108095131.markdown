<div id="wikitext">

<span id="excerpt"></span> Today I learned what a ruby flip-flop is. I
had never seen nor heard of this before now. Below is the article
someone pointed me at to explain how it works. I'm still wonering why it
works, but I guess this is good enough for now. <span
id="excerptend"></span>

The article mentions flip-flops in awk, sed and perl, and I don't know
what the author is referring to there, either.

([some more examples from ruby and perl below](#examples).)

<div class="vspace">

</div>

<div class="round lrindent quote">

The Curious Case of the Flip-Flop
=================================

By [Michael
Morin](http://ruby.about.com:80/bio/Michael-Morin-44924.htm), About.com
Guide

When the
[Range](http://ruby.about.com:80/od/rubysbasicfeatures/ss/Ranges.htm)
operator is used in a [conditional
statement](http://ruby.about.com:80/od/beginningruby/a/loopconditional.htm),
it does something totally unexpected: it doesn't create a Range object.
Instead, it acts as a "flip-flop" operator, a feature carried over from
archaic text processing languages such as awk, sed and
[Perl](http://perl.about.com/). Though it is a Range analog, of sorts.

But first, a warning. The flip-flop operator is a hotly contested
feature of Ruby. It's still struggling to find an
[idiomatic](http://ruby.about.com:80/od/gl/g/Idiom.htm) use case, except
for a few very rarely needed things. It's not something you'll likely
reach for on a daily, weekly or even monthly basis. The only thing you
really need to know about it is what it does, and that's only in case
you encounter it in someone else's code. Many even go as far to say not
to use the flip-flop operator, that it only adds confusion. The choice
is yours though.

These types of flip-flop expressions look at bit different. First,
they're usually in the conditional portion of an
[if](http://ruby.about.com:80/od/beginningruby/a/loopconditional.htm) or
[while](http://ruby.about.com:80/od/rubyfeatures/a/loops.htm) statement.
Second, the left and right of the Range expression itself are usually
boolean expressions. For, for example, it might look something like
this.

<div class="vspace">

</div>

<div id="sourceblock1" class="sourceblock">

<div class="sourceblocktext">

<div class="ruby">

<span class="kw1">if</span> a==<span class="nu0">3</span> .. <span
class="me1">a</span>==<span class="nu0">5</span>\
   <span class="co1">\# Do something </span>\
 <span class="kw1">end</span>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.TheCuriousCaseOfTheFlipflop20130108095131?action=sourceblock&num=1)

</div>

</div>

The flip-flop expression will
[evaluate](http://ruby.about.com:80/od/control/a/Boolean-Expressions.htm)
to false until the first (left hand) expression is true. The flip-flop
expression will then evaluate to true until the right-hand expression
evaluates to true. It will then continue to evaluate to false until the
left-hand expression evaluates to true again, and then it will flip the
other way. It flips and flops between the true and false state, hence
the name "flip-flop."

The flip-flop expression can also be exclusive. With the typical double
dot version, when the second expression evaluates to false, the
flip-flop expression will evaluate to true that one last time. When
using the three dot notation, the flip-flop expression will evaluate to
false as soon as the second expression evaluates to false.

So how is this a "range analog" as was mentioned before? In the example
above, assuming `a` is a range of 1 to 10, the flip-flop will be true
from the values of `a` from 3 to 5 (including 5). In addition, if there
are any additional 3's in the sequence, it will also be true for any
future sequence of 3 to 5.

<div class="vspace">

</div>

Usage
-----

Describing how to use the flip-flop operator can be tough. Firstly, it's
not used very often. In fact, many say not to use it at all. It's
archaic, not expressive and can easily lead to confusion. Though it's
there in your toolbox, and should you find a need to use it, there's no
strong reason not to use it.

It's most often seen used with [regular
expressions](http://ruby.about.com:80/od/regularexpressions/Regular_Expressions.htm).
Say you want to print all lines from a text file starting with the line
that begins with `BEGIN` and ends with the line that begins with `END`.
You could simply iterate over all the lines of the file, use a single
flip-flop in an `if` statement and `puts` the lines.

First, the data file.

<div class="vspace">

</div>

<div id="sourceblock2" class="sourceblock">

<div class="sourceblocktext">

<div class="text">

These lines won't be printed.\
 They're here for debugging purposes only\
 and as notes for other programmers.\
 BEGIN\
 Welcome to Awesome\
 Program 3.1415\
 Press X to begin!\
 END\
 And these lines won't be\
 printed either.

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.TheCuriousCaseOfTheFlipflop20130108095131?action=sourceblock&num=2)

</div>

</div>

And the code. Note that the .. and … operators bind very loosely, so
there's no need for parentheses.

<div class="vspace">

</div>

<div id="sourceblock3" class="sourceblock">

<div class="sourceblocktext">

<div class="ruby">

1.  <div class="de1">

    <span class="co1">\#!/usr/bin/env ruby</span>

    </div>

2.  <div class="de1">

    <span class="kw4">File</span>.<span
    class="kw3">readlines</span><span class="br0">(</span>ARGV<span
    class="br0">[</span><span class="nu0">0</span><span
    class="br0">]</span><span class="br0">)</span>.<span
    class="me1">each</span> <span class="kw1">do</span><span
    class="sy0">|</span>l<span class="sy0">|</span>

    </div>

3.  <div class="de1">

      <span class="kw1">if</span> l =\~ <span
    class="sy0">/</span>\^BEGIN<span class="sy0">/</span> .. <span
    class="me1">l</span> =\~ <span class="sy0">/</span>\^END<span
    class="sy0">/</span>

    </div>

4.  <div class="de1">

        <span class="kw3">puts</span> l

    </div>

5.  <div class="de2">

      <span class="kw1">end</span>

    </div>

6.  <div class="de1">

    <span class="kw1">end</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.TheCuriousCaseOfTheFlipflop20130108095131?action=sourceblock&num=3)

</div>

</div>

You could also use it to extract ranges of objects from sequences. For
example, you have the range of numbers from 1 to 100 and you way to
select only the numbers between a multiple of 5 and the next highest
multiple of 8. So from 5 to 8, then from 10 to 16, then 20 to 24, etc.
Your first try might be something like this (but it would be wrong).

<div class="vspace">

</div>

<div id="sourceblock4" class="sourceblock">

<div class="sourceblocktext">

<div class="ruby">

<span class="br0">(</span><span class="nu0">1</span>..<span
class="nu0">100</span><span class="br0">)</span>.<span
class="kw3">select</span><span class="br0">{</span><span
class="sy0">|</span>i<span class="sy0">|</span> i<span
class="sy0">%</span>5==<span class="nu0">0</span> .. <span
class="me1">i</span><span class="sy0">%</span>8==<span
class="nu0">0</span> <span class="br0">}</span>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.TheCuriousCaseOfTheFlipflop20130108095131?action=sourceblock&num=4)

</div>

</div>

This looks reasonable, so why is it wrong? Remember that the flip-flop
operator can only be used inside of conditional statements. Here, the
`select` [block](http://ruby.about.com:80/od/beginningruby/a/blocks.htm)
is merely acting on the truthiness of the result of the block passed to
it, there is no conditional statement here. The conditional statement
must exist to trigger the creation of the flip-flop, it's a special
behind the scenes thing that has to happen just right. So you'll have to
add a bit of superfluous code to satisfy this need.

<div class="vspace">

</div>

<div id="sourceblock5" class="sourceblock">

<div class="sourceblocktext">

<div class="ruby">

<span class="br0">(</span><span class="nu0">1</span>..<span
class="nu0">100</span><span class="br0">)</span>.<span
class="kw3">select</span><span class="br0">{</span><span
class="sy0">|</span>i<span class="sy0">|</span> <span
class="kw2">true</span> <span class="kw1">if</span> i<span
class="sy0">%</span>5==<span class="nu0">0</span> .. <span
class="me1">i</span><span class="sy0">%</span>8==<span
class="nu0">0</span> <span class="br0">}</span>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.TheCuriousCaseOfTheFlipflop20130108095131?action=sourceblock&num=5)

</div>

</div>

That looks a bit silly, "true if this other thing is true," but it
works. Also, the flip-flop can be used wherever a conditional expression
is expected, not only in `if` statements. This includes loops and the
`conditional operator`.

©2013 About.com. All rights reserved.

</div>

<div class="vspace">

</div>

<div style="display: none;">

Summary: The flip-flop operator is a strange case indeed: part range,
part conditional. Tags: ruby, range, flip flop Source:
<http://ruby.about.com/od/convolutedconstructions/ss/The-Curious-Case-Of-The-Flip-Flop.htm>
Parent:(Technology.)Ruby
includeme:[Technology.Ruby](http://wiki.tamouse.org?n=Technology.Ruby?action=print)
Categories:[Articles](http://wiki.tamouse.org?n=Category.Articles),
[Links](http://wiki.tamouse.org?n=Category.Links),
[Programming](http://wiki.tamouse.org?n=Category.Programming),
[Technology](http://wiki.tamouse.org?n=Category.Technology),
[Ruby](http://wiki.tamouse.org?n=Category.Ruby),
[HowTos](http://wiki.tamouse.org?n=Category.HowTos)

</div>

Page saved at: Tue, 08 Jan 2013 09:51:31 -0600

<span id="examples"></span>

Some more examples from [Ruby](http://wiki.tamouse.org?n=Technology.Ruby?action=print) and [Perl](http://wiki.tamouse.org?n=Technology.Perl?action=print)
---------------------------------------------------------------------------------------------------------------------------------------------------------

In [Perlop Range
Operators](http://perldoc.perl.org/perlop.html#Range-Operators), the
flip-flop action is the first use of the `..` operator. This makes me
very curious since I have never even heard of this usage and I've been
using perl for *decades*.

It seems particularly useful in both Perl and Ruby as away of extracting
lines from a file between two delimited text elements:

<div class="vspace">

</div>

### Perl version

<div id="sourceblock6" class="sourceblock">

<div class="sourceblocktext">

<div class="perl">

<div class="head">

The source:

</div>

1.  <div class="de1">

    <span class="re0">@lines</span> <span class="sy0">=</span> <span
    class="br0">(</span><span class="st0">" - Foo"</span><span
    class="sy0">,</span>

    </div>

2.  <div class="de1">

              <span class="st0">"01 - Bar"</span><span
    class="sy0">,</span>

    </div>

3.  <div class="de1">

              <span class="st0">"1 - Baz"</span><span
    class="sy0">,</span>

    </div>

4.  <div class="de1">

              <span class="st0">" - Quux"</span><span
    class="br0">)</span><span class="sy0">;</span>

    </div>

5.  <div class="de2">

     

    </div>

6.  <div class="de1">

    <span class="kw3">print</span> <span class="st0">"The source:<span
    class="es0">\\n</span>"</span><span class="sy0">;</span>

    </div>

7.  <div class="de1">

    <span class="kw3">print</span> <span class="kw3">join</span><span
    class="br0">(</span><span class="st0">"<span
    class="es0">\\n</span>"</span><span class="sy0">,</span><span
    class="re0">@lines</span><span class="br0">)</span><span
    class="sy0">.</span><span class="st0">"<span
    class="es0">\\n</span>"</span><span class="sy0">;</span>

    </div>

8.  <div class="de1">

     

    </div>

9.  <div class="de1">

    <span class="kw3">print</span> <span class="st0">"<span
    class="es0">\\n</span>Exclusive, double-dot:<span
    class="es0">\\n</span>"</span><span class="sy0">;</span>

    </div>

10. <div class="de2">

    <span class="kw1">foreach</span> <span class="br0">(</span><span
    class="re0">@lines</span><span class="br0">)</span> <span
    class="br0">{</span>

    </div>

11. <div class="de1">

        <span class="kw1">if</span> <span class="br0">(</span><span
    class="co2">/0/</span> <span class="sy0">..</span> <span
    class="co2">/1/</span><span class="br0">)</span> <span
    class="br0">{</span>

    </div>

12. <div class="de1">

            <span class="kw3">print</span> <span class="st0">"\$\_<span
    class="es0">\\n</span>"</span><span class="sy0">;</span>

    </div>

13. <div class="de1">

        <span class="br0">}</span>

    </div>

14. <div class="de1">

    <span class="br0">}</span>

    </div>

15. <div class="de2">

     

    </div>

16. <div class="de1">

    <span class="kw3">print</span> <span class="st0">"<span
    class="es0">\\n</span>Inclusive, triple-dot:<span
    class="es0">\\n</span>"</span><span class="sy0">;</span>

    </div>

17. <div class="de1">

    <span class="kw1">foreach</span> <span class="br0">(</span><span
    class="re0">@lines</span><span class="br0">)</span> <span
    class="br0">{</span>

    </div>

18. <div class="de1">

        <span class="kw1">if</span> <span class="br0">(</span><span
    class="co2">/0/</span> <span class="sy0">...</span> <span
    class="co2">/1/</span><span class="br0">)</span> <span
    class="br0">{</span>

    </div>

19. <div class="de1">

            <span class="kw3">print</span> <span class="st0">"\$\_<span
    class="es0">\\n</span>"</span><span class="sy0">;</span>

    </div>

20. <div class="de2">

        <span class="br0">}</span>

    </div>

21. <div class="de1">

    <span class="br0">}</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.TheCuriousCaseOfTheFlipflop20130108095131?action=sourceblock&num=6)

</div>

</div>

<div class="vspace">

</div>

<div id="sourceblock7" class="sourceblock">

<div class="sourceblocktext">

<div class="text">

<div class="head">

The output:

</div>

The source:\
  - Foo\
 01 - Bar\
 1 - Baz\
  - Quux\
\
 Exclusive, double-dot:\
 01 - Bar\
\
 Inclusive, triple-dot:\
 01 - Bar\
 1 - Baz

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.TheCuriousCaseOfTheFlipflop20130108095131?action=sourceblock&num=7)

</div>

</div>

<div class="vspace">

</div>

### Ruby version

<div id="sourceblock8" class="sourceblock">

<div class="sourceblocktext">

<div class="ruby">

<div class="head">

The source:

</div>

1.  <div class="de1">

    lines = <span class="br0">[</span><span class="st0">" - Foo"</span>,

    </div>

2.  <div class="de1">

             <span class="st0">"01 - Bar"</span>,

    </div>

3.  <div class="de1">

             <span class="st0">"1 - Baz"</span>,

    </div>

4.  <div class="de1">

             <span class="st0">" - Quux"</span><span
    class="br0">]</span>;

    </div>

5.  <div class="de2">

     

    </div>

6.  <div class="de1">

    <span class="kw3">puts</span> <span class="st0">"Source:"</span>

    </div>

7.  <div class="de1">

    <span class="kw3">puts</span> lines

    </div>

8.  <div class="de1">

     

    </div>

9.  <div class="de1">

    <span class="kw3">puts</span>

    </div>

10. <div class="de2">

    <span class="kw3">puts</span> <span class="st0">"Exclusive,
    double-dot:"</span>

    </div>

11. <div class="de1">

    lines.<span class="me1">each</span> <span class="kw1">do</span>
    <span class="sy0">|</span>l<span class="sy0">|</span>

    </div>

12. <div class="de1">

      <span class="kw1">if</span> <span class="br0">(</span>l.<span
    class="me1">match</span><span class="br0">(</span><span
    class="sy0">/</span><span class="nu0">0</span><span
    class="sy0">/</span><span class="br0">)</span> .. <span
    class="me1">l</span>.<span class="me1">match</span><span
    class="br0">(</span><span class="sy0">/</span><span
    class="nu0">1</span><span class="sy0">/</span><span
    class="br0">)</span><span class="br0">)</span>

    </div>

13. <div class="de1">

        <span class="kw3">puts</span> <span class="st0">"\#{l}<span
    class="es0">\\n</span>"</span>;

    </div>

14. <div class="de1">

      <span class="kw1">end</span>

    </div>

15. <div class="de2">

    <span class="kw1">end</span>

    </div>

16. <div class="de1">

     

    </div>

17. <div class="de1">

    <span class="kw3">puts</span>

    </div>

18. <div class="de1">

    <span class="kw3">puts</span> <span class="st0">"Inclusive,
    triple-dot:"</span>

    </div>

19. <div class="de1">

    lines.<span class="me1">each</span> <span class="kw1">do</span>
    <span class="sy0">|</span>l<span class="sy0">|</span>

    </div>

20. <div class="de2">

      <span class="kw1">if</span> <span class="br0">(</span>l.<span
    class="me1">match</span><span class="br0">(</span><span
    class="sy0">/</span><span class="nu0">0</span><span
    class="sy0">/</span><span class="br0">)</span> ... <span
    class="me1">l</span>.<span class="me1">match</span><span
    class="br0">(</span><span class="sy0">/</span><span
    class="nu0">1</span><span class="sy0">/</span><span
    class="br0">)</span><span class="br0">)</span>

    </div>

21. <div class="de1">

        <span class="kw3">puts</span> <span class="st0">"\#{l}<span
    class="es0">\\n</span>"</span>;

    </div>

22. <div class="de1">

      <span class="kw1">end</span>

    </div>

23. <div class="de1">

    <span class="kw1">end</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.TheCuriousCaseOfTheFlipflop20130108095131?action=sourceblock&num=8)

</div>

</div>

<div class="vspace">

</div>

<div id="sourceblock9" class="sourceblock">

<div class="sourceblocktext">

<div class="text">

<div class="head">

The output:

</div>

Source:\
  - Foo\
 01 - Bar\
 1 - Baz\
  - Quux\
\
 Exclusive, double-dot:\
 01 - Bar\
\
 Inclusive, triple-dot:\
 01 - Bar\
 1 - Baz

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.TheCuriousCaseOfTheFlipflop20130108095131?action=sourceblock&num=9)

</div>

</div>

</div>
