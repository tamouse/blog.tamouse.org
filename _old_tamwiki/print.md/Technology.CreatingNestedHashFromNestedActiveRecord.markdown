<div id="wikitext">

<div class="round lrindent quote">

[Rails] Creating nested hash from nested active record results
--------------------------------------------------------------

Clem Rock \<lists@ruby-forum.com\> Wed, May 22, 2013 at 9:53 AM\
To: rubyonrails-talk@googlegroups.com

Hello,

I'm trying to find a very abstract and "one size fits all" for\
converting nested active record results to nested hashes. It's easy,\
to do one level deep as such:

<div class="vspace">

</div>

<div id="sourceblock1" class="sourceblock">

<div class="sourceblocktext">

<div class="ruby">

results\_to\_hash = <span class="kw4">Hash</span><span
class="br0">[</span> found\_categories.<span class="me1">map</span><span
class="br0">{</span> <span class="sy0">|</span>c<span
class="sy0">|</span> <span class="br0">[</span>c.<span
class="me1">id</span>, c.<span class="me1">title</span><span
class="br0">]</span><span class="br0">}</span><span class="br0">]</span>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.CreatingNestedHashFromNestedActiveRecord?action=sourceblock&num=1)

</div>

</div>

But, when I try to add another collection to the mix, it completely\
borks and the results\_to\_hash only returns an empty hash IE:

<div class="vspace">

</div>

<div id="sourceblock2" class="sourceblock">

<div class="sourceblocktext">

<div class="ruby">

results\_to\_hash = <span class="kw4">Hash</span><span
class="br0">[</span> found\_categories.<span class="me1">map</span><span
class="br0">{</span> <span class="sy0">|</span>c<span
class="sy0">|</span> <span class="br0">[</span>c.<span
class="me1">id</span>, c.<span class="me1">title</span>, c.<span
class="me1">categories</span><span class="br0">]</span><span
class="br0">}</span><span class="br0">]</span>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.CreatingNestedHashFromNestedActiveRecord?action=sourceblock&num=2)

</div>

</div>

Ultimately, I'd like it to be smart enough to detect if a model object\
contains a collection (IE:
`object.class.reflect_on_all_associations`{.escaped}),\
and automatically convert those to hashes.

Any ideas?

Thanks,\
Eric

<div class="vspace">

</div>

------------------------------------------------------------------------

gsw \<garysweaver@gmail.com\> Wed, May 22, 2013 at 2:12 PM\
To: rubyonrails-talk@googlegroups.com

Would this work?

<div class="vspace">

</div>

<div id="sourceblock3" class="sourceblock">

<div class="sourceblocktext">

<div class="ruby">

MyModel.<span class="me1">last</span>.<span
class="me1">serializable\_hash</span> methods: MyModel.<span
class="me1">reflections</span>.<span class="me1">keys</span>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.CreatingNestedHashFromNestedActiveRecord?action=sourceblock&num=3)

</div>

</div>

Or is that too much?

Look at the options that you can pass into
`serializable_hash`{.escaped}.

However, if you are doing this for json/etc. serialization in the
controller, check out `ActiveModel::Serializers`{.escaped}.

<div class="vspace">

</div>

------------------------------------------------------------------------

gsw \<garysweaver@gmail.com\> Wed, May 22, 2013 at 2:18 PM\
To: rubyonrails-talk@googlegroups.com

One note about this: this can hit n+1 queries pretty hard. Unless you
put include: in your associations (which I wouldn't not recommend unless
it makes sense, and it probably doesn't) you have to know at query time
what to include (or use joins), and what I just posted would make that
difficult.

If you do use `ActiveModel::Serializers`{.escaped} instead and have big
serialized objects, look at yodo to help you identify the value for
include: in your queries to avoid n+1:

<https://github.com/garysweaver/yodo>

You could also look at bullet in that regard:

<https://github.com/flyerhzm/bullet>

<div class="vspace">

</div>

</div>

<div style="display: none;">

Summary:email discussion of making a nested hash from a nested
activerecord\
Parent:(Technology.)<span
class="wikiword">[RubyOnRails](http://wiki.tamouse.org?n=Technology.RubyOnRails?action=print)</span>\
includeme:(Technology.)<span
class="wikiword">[RubyOnRails](http://wiki.tamouse.org?n=Technology.RubyOnRails?action=print)</span>\
Categories:[HowTos](http://wiki.tamouse.org?n=Category.HowTos),
[Technology](http://wiki.tamouse.org?n=Category.Technology),
[Ruby](http://wiki.tamouse.org?n=Category.Ruby),
[RubyOnRails](http://wiki.tamouse.org?n=Category.RubyOnRails)\
Tags: ruby, rails, hashes, nesting, activerecord

</div>

</div>
