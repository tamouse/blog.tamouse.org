<div id="wikitext">

<span id="excerpt"></span> On the ruby-talk list, someone was trying to
implement method to convert a string to title case, using [stop
words](http://wiki.tamouse.org?n=Technology.StopWords?action=edit)[?](http://wiki.tamouse.org?n=Technology.StopWords?action=edit)
that would not get capitalized.

**Update:** using Modules!

<span id="excerptend"></span>

The original version of this how-to talked about using the [*Open
CLass*](http://wiki.tamouse.org?n=Technology.OpenClass?action=edit)[?](http://wiki.tamouse.org?n=Technology.OpenClass?action=edit)
technique (aka
["Monkeypatching"](http://wiki.tamouse.org?n=Technology.MonkeyPatching?action=edit)[?](http://wiki.tamouse.org?n=Technology.MonkeyPatching?action=edit))
for modifying an existing class. While Open Classing is a viable
technique, it is largely frowned upon for the possibility of injecting
or causing errors which may be hard to find.

The book [*Metaprogramming in
Ruby*](http://wiki.tamaratemple.com/Technology/BookReviewMetaprogrammingInRuby)
makes it clear that one should **Think in Modules**. So, I decided to
rewrite this how-to utilizing Ruby modules instead of the Open Class.

So let's add our titlecase method again, only using a Module.

<div class="vspace">

</div>

Creating the Module
-------------------

Refactoring the end version of the method, we've got it down to a single
chain in both methods, destructive and duplicative.

<div class="vspace">

</div>

<div id="sourceblock1" class="sourceblock">

<div class="sourceblocktext">

<div class="ruby">

<div class="head">

My String Extensions

</div>

1.  <div class="de1">

    <span class="kw1">module</span> MyStringExtensions

    </div>

2.  <div class="de1">

     

    </div>

3.  <div class="de1">

      <span class="co1">\# destructive version</span>

    </div>

4.  <div class="de1">

      <span class="kw1">def</span> titlecase!<span
    class="br0">(</span>stopwords=<span class="sy0">%</span>w<span
    class="br0">{</span><span class="kw1">and</span> <span
    class="kw1">or</span> a an the of <span class="kw1">for</span>
    by<span class="br0">}</span><span class="br0">)</span>

    </div>

5.  <div class="de2">

        <span class="kw2">self</span>.<span
    class="kw3">gsub!</span><span class="br0">(</span><span
    class="sy0">/</span>\\w<span class="sy0">+/</span><span
    class="br0">)</span> <span class="kw1">do</span> <span
    class="sy0">|</span>w<span class="sy0">|</span>

    </div>

6.  <div class="de1">

          stopwords.<span class="me1">map</span><span
    class="br0">(</span><span class="sy0">&</span>:downcase<span
    class="br0">)</span>.<span class="kw1">include</span>?<span
    class="br0">(</span>w.<span class="me1">downcase</span>!<span
    class="br0">)</span> ? w : w.<span class="me1">capitalize</span>

    </div>

7.  <div class="de1">

        <span class="kw1">end</span>.<span class="kw3">gsub!</span><span
    class="br0">(</span><span class="sy0">/</span>\^\\w<span
    class="sy0">/</span>,<span class="sy0">&</span>:capitalize<span
    class="br0">)</span>

    </div>

8.  <div class="de1">

      <span class="kw1">end</span>

    </div>

9.  <div class="de1">

     

    </div>

10. <div class="de2">

      <span class="co1">\# duplicating version</span>

    </div>

11. <div class="de1">

      <span class="kw1">def</span> titlecase<span
    class="br0">(</span>stopwords=<span class="sy0">%</span>w<span
    class="br0">{</span><span class="kw1">and</span> <span
    class="kw1">or</span> a an the of <span class="kw1">for</span>
    by<span class="br0">}</span><span class="br0">)</span>

    </div>

12. <div class="de1">

        dup.<span class="me1">titlecase</span>!<span
    class="br0">(</span>stopwords<span class="br0">)</span>

    </div>

13. <div class="de1">

      <span class="kw1">end</span>

    </div>

14. <div class="de1">

     

    </div>

15. <div class="de2">

    <span class="kw1">end</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.ExtendRubyStringToImplementTitleCase?action=sourceblock&num=1)

</div>

</div>

Now, we'll include the module into the String class via a `send`:

<div class="vspace">

</div>

<div id="sourceblock2" class="sourceblock">

<div class="sourceblocktext">

<div class="ruby">

1.  <div class="de1">

    <span class="kw3">String</span>.<span class="me1">send</span><span
    class="br0">(</span>:<span class="kw1">include</span>,
    MyStringExtensions<span class="br0">)</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.ExtendRubyStringToImplementTitleCase?action=sourceblock&num=2)

</div>

</div>

And, we'll give it a go:

<div class="vspace">

</div>

<div id="sourceblock3" class="sourceblock">

<div class="sourceblocktext">

<div class="text">

irb(main):140:0\> p = 'now is the winter of our discount tent'\
 "now is the winter of our discount tent"\
 irb(main):141:0\> p.titlecase\
 "Now Is the Winter of Our Discount Tent"\
 irb(main):142:0\> p \# UNCHANGED!\
 "now is the winter of our discount tent"\
 irb(main):143:0\> p.titlecase!\
 "Now Is the Winter of Our Discount Tent"\
 irb(main):144:0\> p \# CHANGED!\
 "Now Is the Winter of Our Discount Tent"\
 irb(main):145:0\>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.ExtendRubyStringToImplementTitleCase?action=sourceblock&num=3)

</div>

</div>

<div class="vspace">

</div>

The Open Class way
------------------

In [Ruby](http://wiki.tamouse.org?n=Technology.Ruby?action=print), it's
very simple to add a new method to a class. All you have to do is
re-open the class:

<div class="vspace">

</div>

<div id="sourceblock4" class="sourceblock">

<div class="sourceblocktext">

<div class="ruby">

<div class="head">

titlecase.rb

</div>

1.  <div class="de1">

    <span class="coMULTI">=begin</span>

    </div>

2.  <div class="de1">

     

    </div>

3.  <div class="de1">

    <span class="coMULTI">   In ruby, the String class includes methods
    for converting to upper</span>

    </div>

4.  <div class="de1">

    <span class="coMULTI">   and lower case (upcase and downcase). It
    doesn't seem to include the</span>

    </div>

5.  <div class="de2">

    <span class="coMULTI">   conversion to title case, however, much
    less the opportunity to</span>

    </div>

6.  <div class="de1">

    <span class="coMULTI">   include stop words (words which will not be
    converted).</span>

    </div>

7.  <div class="de1">

     

    </div>

8.  <div class="de1">

    <span class="coMULTI">   This is a quick example to show how to add
    a method to String that</span>

    </div>

9.  <div class="de1">

    <span class="coMULTI">   will do this.</span>

    </div>

10. <div class="de2">

     

    </div>

11. <div class="de1">

    <span class="coMULTI">=end</span>

    </div>

12. <div class="de1">

     

    </div>

13. <div class="de1">

    <span class="kw1">class</span> <span class="kw3">String</span>

    </div>

14. <div class="de1">

     

    </div>

15. <div class="de2">

    <span class="coMULTI">=begin</span>

    </div>

16. <div class="de1">

     

    </div>

17. <div class="de1">

    <span class="coMULTI">   The titlecase method will return a string
    where the words in phrase</span>

    </div>

18. <div class="de1">

    <span class="coMULTI">   are converted to capitalized words, unless
    a word is in the list of</span>

    </div>

19. <div class="de1">

    <span class="coMULTI">   stopwords. The first word will be
    capitalized regardless of whether</span>

    </div>

20. <div class="de2">

    <span class="coMULTI">   it's in the stopword list or not.</span>

    </div>

21. <div class="de1">

     

    </div>

22. <div class="de1">

    <span class="coMULTI">   You can pass in your own list of stopwords
    as well.</span>

    </div>

23. <div class="de1">

     

    </div>

24. <div class="de1">

    <span class="coMULTI">=end</span>

    </div>

25. <div class="de2">

      <span class="kw1">def</span> titlecase<span
    class="br0">(</span>stopwords=<span class="sy0">%</span>w<span
    class="br0">{</span><span class="kw1">and</span> <span
    class="kw1">or</span> <span class="kw1">and</span><span
    class="sy0">/</span><span class="kw1">or</span> a an the of<span
    class="br0">}</span><span class="br0">)</span>

    </div>

26. <div class="de1">

        t = <span class="kw2">self</span>.<span
    class="kw3">split</span>.<span class="me1">each</span> <span
    class="kw1">do</span> <span class="sy0">|</span>w<span
    class="sy0">|</span>

    </div>

27. <div class="de1">

          w<span class="br0">[</span><span class="nu0">0</span><span
    class="br0">]</span>=w<span class="br0">[</span><span
    class="nu0">0</span><span class="br0">]</span>.<span
    class="me1">upcase</span> <span class="kw1">unless</span>
    stopwords.<span class="kw1">include</span>?<span
    class="br0">(</span>w<span class="br0">)</span>

    </div>

28. <div class="de1">

          w

    </div>

29. <div class="de1">

        <span class="kw1">end</span>.<span class="me1">join</span><span
    class="br0">(</span><span class="st0">" "</span><span
    class="br0">)</span>

    </div>

30. <div class="de2">

        t<span class="br0">[</span><span class="nu0">0</span><span
    class="br0">]</span>=t<span class="br0">[</span><span
    class="nu0">0</span><span class="br0">]</span>.<span
    class="me1">upcase</span> <span class="co1">\# force first word to
    upper case, regardless</span>

    </div>

31. <div class="de1">

        t <span class="co1">\# return the full string</span>

    </div>

32. <div class="de1">

      <span class="kw1">end</span>

    </div>

33. <div class="de1">

    <span class="kw1">end</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.ExtendRubyStringToImplementTitleCase?action=sourceblock&num=4)

</div>

</div>

Then:

<div class="vspace">

</div>

<div id="sourceblock5" class="sourceblock">

<div class="sourceblocktext">

<div class="ruby">

<span class="kw3">require</span> <span class="st0">'titlecase'</span>\
\
 <span class="st0">"the quick brown fox or a rabbit in the hen house of
love and his doggie"</span>.<span class="me1">titlecase</span>\
 <span class="co1">\# =\> "The Quick Brown Fox or a Rabbit In the Hen
House of Love and His Doggie" </span>\
\
 <span class="coMULTI">=begin\
\
    Passing in our own list of stop words:\
    Note that the first character of the string is \*\*always\*\*
up-cased.\
\
 =end</span>\
 <span class="st0">"the quick and the dead"</span>.<span
class="me1">titlecase</span><span class="br0">(</span><span
class="sy0">%</span>w<span class="br0">{</span>the dead<span
class="br0">}</span><span class="br0">)</span>\
 <span class="co1">\# =\> "The Quick And the dead" </span>\
  

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.ExtendRubyStringToImplementTitleCase?action=sourceblock&num=5)

</div>

</div>

<div class="vspace">

</div>

### Refactor 1 - use gsub instead of split

And another way to implement the method:

<div class="vspace">

</div>

<div id="sourceblock6" class="sourceblock">

<div class="sourceblocktext">

<div class="ruby">

1.  <div class="de1">

    <span class="kw1">def</span> titlecase<span
    class="br0">(</span>stopwords=<span class="sy0">%</span>w<span
    class="br0">{</span><span class="kw1">and</span> <span
    class="kw1">or</span> a an the of<span class="br0">}</span><span
    class="br0">)</span>

    </div>

2.  <div class="de1">

        t = <span class="kw2">self</span>.<span
    class="kw3">gsub</span><span class="br0">(</span><span
    class="sy0">/</span>\\w<span class="sy0">+/</span><span
    class="br0">)</span> <span class="kw1">do</span> <span
    class="sy0">|</span>w<span class="sy0">|</span>

    </div>

3.  <div class="de1">

          stopwords.<span class="kw1">include</span>?<span
    class="br0">(</span>w.<span class="me1">downcase</span><span
    class="br0">)</span> ? w.<span class="me1">downcase</span> : w.<span
    class="me1">capitalize</span>

    </div>

4.  <div class="de1">

        <span class="kw1">end</span>

    </div>

5.  <div class="de2">

        t<span class="br0">[</span><span class="nu0">0</span><span
    class="br0">]</span>=t<span class="br0">[</span><span
    class="nu0">0</span><span class="br0">]</span>.<span
    class="me1">upcase</span>

    </div>

6.  <div class="de1">

        t <span class="co1">\# return the full string</span>

    </div>

7.  <div class="de1">

      <span class="kw1">end</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.ExtendRubyStringToImplementTitleCase?action=sourceblock&num=6)

</div>

</div>

<div class="vspace">

</div>

### Refactor 2 - without intermediate assignment

And we'll get it down to 3 lines:

<div class="vspace">

</div>

<div id="sourceblock7" class="sourceblock">

<div class="sourceblocktext">

<div class="ruby">

<span class="kw1">def</span> titlecase<span
class="br0">(</span>stopwords=<span class="sy0">%</span>w<span
class="br0">{</span><span class="kw1">and</span> <span
class="kw1">or</span> a an the of<span class="br0">}</span><span
class="br0">)</span>\
   <span class="kw2">self</span>.<span class="kw3">gsub!</span><span
class="br0">(</span><span class="sy0">/</span>\\w<span
class="sy0">+/</span><span class="br0">)</span><span
class="br0">{</span><span class="sy0">|</span>w<span
class="sy0">|</span> stopwords.<span class="kw1">include</span>?<span
class="br0">(</span>w<span class="br0">)</span> ? w.<span
class="me1">downcase</span> : w.<span class="me1">capitalize</span><span
class="br0">}</span>\
   <span class="kw2">self</span><span class="br0">[</span><span
class="nu0">0</span><span class="br0">]</span>=<span
class="kw2">self</span><span class="br0">[</span><span
class="nu0">0</span><span class="br0">]</span>.<span
class="me1">upcase</span>\
   <span class="kw2">self</span>\
 <span class="kw1">end</span>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.ExtendRubyStringToImplementTitleCase?action=sourceblock&num=7)

</div>

</div>

<div class="vspace">

</div>

### Refactor 3 - a more complete implementation

This version offers a destructive (!-method) and non-desctructive
methods. It also more correctly will convert the stop words to lowercase
on comparison, as well as converting them in the substitution.

<div class="vspace">

</div>

<div id="sourceblock8" class="sourceblock">

<div class="sourceblocktext">

<div class="ruby">

<div class="head">

destructive and non-destructive versions

</div>

1.  <div class="de1">

    <span class="kw1">class</span> <span class="kw3">String</span> <span
    class="co1">\# Open Class</span>

    </div>

2.  <div class="de1">

     

    </div>

3.  <div class="de1">

      <span class="co1">\# destructive version</span>

    </div>

4.  <div class="de1">

      <span class="kw1">def</span> titlecase!<span
    class="br0">(</span>stopwords=<span class="sy0">%</span>w<span
    class="br0">{</span><span class="kw1">and</span> <span
    class="kw1">or</span> a an the of<span class="br0">}</span><span
    class="br0">)</span>

    </div>

5.  <div class="de2">

        <span class="kw2">self</span>.<span
    class="kw3">gsub!</span><span class="br0">(</span><span
    class="sy0">/</span>\\w<span class="sy0">+/</span><span
    class="br0">)</span><span class="br0">{</span><span
    class="sy0">|</span>w<span class="sy0">|</span> stopwords.<span
    class="kw1">include</span>?<span class="br0">(</span>w.<span
    class="me1">downcase</span><span class="br0">)</span> ? w.<span
    class="me1">downcase</span>

    </div>

6.  <div class="de1">

          : w.<span class="me1">capitalize</span><span
    class="br0">}</span>

    </div>

7.  <div class="de1">

        <span class="kw2">self</span><span class="br0">[</span><span
    class="nu0">0</span><span class="br0">]</span>=<span
    class="kw2">self</span><span class="br0">[</span><span
    class="nu0">0</span><span class="br0">]</span>.<span
    class="me1">upcase</span>

    </div>

8.  <div class="de1">

        <span class="kw2">self</span>

    </div>

9.  <div class="de1">

      <span class="kw1">end</span>

    </div>

10. <div class="de2">

     

    </div>

11. <div class="de1">

      <span class="co1">\# duplicating version</span>

    </div>

12. <div class="de1">

      <span class="kw1">def</span> titlecase<span
    class="br0">(</span>stopwords=<span class="sy0">%</span>w<span
    class="br0">{</span><span class="kw1">and</span> <span
    class="kw1">or</span> a an the of<span class="br0">}</span><span
    class="br0">)</span>

    </div>

13. <div class="de1">

        t = <span class="kw2">self</span>.<span class="me1">dup</span>

    </div>

14. <div class="de1">

        t.<span class="me1">titlecase</span>!<span
    class="br0">(</span>stopwords<span class="br0">)</span>

    </div>

15. <div class="de2">

      <span class="kw1">end</span>

    </div>

16. <div class="de1">

     

    </div>

17. <div class="de1">

    <span class="kw1">end</span>

    </div>

18. <div class="de1">

     

    </div>

19. <div class="de1">

    <span class="co1">\# assign a string</span>

    </div>

20. <div class="de2">

    <span class="kw3">p</span> = <span class="st0">"the and, without
    further adieu, some international incident or other caused us to
    pray"</span>

    </div>

21. <div class="de1">

    <span class="co1">\# =\> "the and, without further adieu, some
    international incident or other caused us to pray" </span>

    </div>

22. <div class="de1">

     

    </div>

23. <div class="de1">

    <span class="co1">\# Non-destructive form:</span>

    </div>

24. <div class="de1">

    <span class="kw3">p</span>.<span class="me1">titlecase</span>

    </div>

25. <div class="de2">

    <span class="co1">\# =\> "The and, Without Further Adieu, Some
    International Incident or Other Caused Us To Pray" </span>

    </div>

26. <div class="de1">

     

    </div>

27. <div class="de1">

    <span class="co1">\# unchanged from original</span>

    </div>

28. <div class="de1">

    <span class="kw3">p</span>

    </div>

29. <div class="de1">

    <span class="co1">\# =\> "the and, without further adieu, some
    international incident or other caused us to pray" </span>

    </div>

30. <div class="de2">

     

    </div>

31. <div class="de1">

     

    </div>

32. <div class="de1">

    <span class="co1">\# destructive form:</span>

    </div>

33. <div class="de1">

    <span class="kw3">p</span>.<span class="me1">titlecase</span>!

    </div>

34. <div class="de1">

    <span class="co1">\# =\> "The and, Without Further Adieu, Some
    International Incident or Other Caused Us To Pray" </span>

    </div>

35. <div class="de2">

     

    </div>

36. <div class="de1">

    <span class="co1">\# changed original</span>

    </div>

37. <div class="de1">

    <span class="kw3">p</span>

    </div>

38. <div class="de1">

    <span class="co1">\# =\> "The and, Without Further Adieu, Some
    International Incident or Other Caused Us To Pray"</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.ExtendRubyStringToImplementTitleCase?action=sourceblock&num=8)

</div>

</div>

<div class="vspace">

</div>

<div style="display: none;">

Summary:A example of extending a Ruby class, and implementing a useful
method besides. Parent:(Technology.)Ruby <span
class="wikiword">[IncludeMe](http://wiki.tamouse.org?n=Technology.IncludeMe?action=edit)[?](http://wiki.tamouse.org?n=Technology.IncludeMe?action=edit)</span>:[Ruby](http://wiki.tamouse.org?n=Technology.Ruby?action=print)
Categories:[HowTos](http://wiki.tamouse.org?n=Category.HowTos) Tags:
ruby, classes, string, titlecase

</div>

</div>
