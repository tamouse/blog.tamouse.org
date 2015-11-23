<div id="wikitext">

<div style="display: none;">

Summary: An alternative to mixing Enumerable into your classes to get
similar capability Parent: (Technology.)Ruby <span
class="wikiword">[IncludeMe](http://wiki.tamouse.org?n=Technology.IncludeMe?action=edit)[?](http://wiki.tamouse.org?n=Technology.IncludeMe?action=edit)</span>:
[Ruby](http://wiki.tamouse.org?n=Technology.Ruby?action=print)
Categories: [HowTos](http://wiki.tamouse.org?n=Category.HowTos),
[Technology](http://wiki.tamouse.org?n=Category.Technology),
[Ruby](http://wiki.tamouse.org?n=Category.Ruby) Tags: ruby, enumerator,
enumerable Source:
<http://blog.arkency.com/2014/01/ruby-to-enum-for-enumerator/> Posted:
Mon Jan 13 11:51:26 2014

</div>

<span id="excerpt"></span> Over in
<http://blog.arkency.com/2014/01/ruby-to-enum-for-enumerator/>, [Robert
Pankowecki](http://blog.arkency.com/by/pankowecki/) talks about when to
think of using the (probably underutilized) `Enumerator`{.escaped}
instead of mixing in `Enumerable`{.escaped} to give your class the
ability to handle `each`{.escaped}, `each.with_index`{.escaped} and
other such goodies from `Enumerable`{.escaped} but in the cases where
your class is *not actually implementing a collection*. <span
id="excerptend"></span>

<div class="vspace">

</div>

<div class="round lrindent quote">

TLDR
----

To be consistent with Ruby Standard Library behavior, please return
Enumerator for your yielding methods when block is not provided. Use
this code

<div class="vspace">

</div>

<div id="sourceblock1" class="sourceblock">

<div class="sourceblocktext">

<div class="ruby">

<span class="kw2">return</span> enum\_for<span class="br0">(</span><span
class="re3">:your\_method\_name\_which\_is\_usually\_each</span><span
class="br0">)</span> <span class="kw1">unless</span> block\_given?<span
class="st0">\`</span>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.HowToUsingEnumeratorInsteadOfEnumerable?action=sourceblock&num=1)

</div>

</div>

to just do that.

Your class does not always need to be Enumerable. It is ok if it just
returns Enumerator.

</div>

<div class="vspace">

</div>

References:
-----------

-   [Object\#to\_enum](http://ruby-doc.org/core-2.1.0/Object.html#method-i-to_enum)
    <div class="vspace">

    </div>

-   [Object\#enum\_for](http://ruby-doc.org/core-2.1.0/Object.html#method-i-enum_for)
    <div class="vspace">

    </div>

-   [Enumerator\#new](http://ruby-doc.org/core-2.1.0/Enumerator.html#method-c-new)

<div class="vspace">

</div>

</div>
