<div id="wikitext">

<span id="excerpt"></span> On a recent post in ruby-talk, the question
was asked how to convert something to
[YAML](http://wiki.tamouse.org?n=Technology.YAML?action=print).
Extending this generally to
[Ruby](http://wiki.tamouse.org?n=Technology.Ruby?action=print) Objects,
I went searching for something that would work besides a brute-force
creation of a Hash.

Finding a useful answer on
[stackoverflow](http://stackoverflow.com/questions/7638982/better-way-to-convert-several-instance-variables-into-hash-with-ruby)
and digging into the
[code](https://github.com/rails/rails/blob/c20838596bcb40bf1590f27f6ba735d0a5f4fe8f/activesupport/lib/active_support/core_ext/object/instance_variables.rb#L12)
given in one of the responses, I came up with the following, which can
be
[monkey-patched](http://wiki.tamouse.org?n=Technology.WhatsAllThisAboutMonkeyPatchingInRuby?action=edit)[?](http://wiki.tamouse.org?n=Technology.WhatsAllThisAboutMonkeyPatchingInRuby?action=edit)
into Object. <span id="excerptend"></span>

**Update:** for a neat way to do this with nested <span
class="wikiword">[ActiveRecord](http://wiki.tamouse.org?n=Technology.ActiveRecord?action=edit)[?](http://wiki.tamouse.org?n=Technology.ActiveRecord?action=edit)</span>
models, see <span
class="wikiword">[CreatingNestedHashFromNestedActiveRecord](http://wiki.tamouse.org?n=Technology.CreatingNestedHashFromNestedActiveRecord?action=print)</span>.

<div class="vspace">

</div>

Introduction
------------

The original request was to be able to generate the following YAML from
a result:

<div class="vspace">

</div>

<div id="sourceblock1" class="sourceblock">

<div class="sourceblocktext">

<div class="yaml">

<div class="head">

YAML result

</div>

1.  <div class="de1">

    <span class="sy1">---</span>

    </div>

2.  <div class="de1">

    <span class="co3">- name</span><span class="sy2">:
    </span>device-<span class="nu0">1</span>

    </div>

3.  <div class="de1">

    <span class="co4">  parameters</span>:

    </div>

4.  <div class="de1">

    <span class="co3">    app\_folder</span><span class="sy2">:
    </span>deploy\_project

    </div>

5.  <div class="de2">

    <span class="co3">    app\_id</span><span class="sy2">: </span><span
    class="st0">"1"</span>

    </div>

6.  <div class="de1">

    <span class="co3">    tar\_file</span><span class="sy2">:
    </span>deploy\_project.tar.gz

    </div>

7.  <div class="de1">

    <span class="co3">    profile\_id</span><span class="sy2">:
    </span><span class="st0">"3"</span>

    </div>

8.  <div class="de1">

    <span class="co3">    version\_id</span><span class="sy2">:
    </span><span class="st0">"2"</span>

    </div>

9.  <div class="de1">

    <span class="co4">  classes</span>:

    </div>

10. <div class="de2">

     - install

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.ConvertingInstanceVariablesToAHashInRuby?action=sourceblock&num=1)

</div>

</div>

If one were to take that and feed it back into Ruby via YAML.load, one
gets the following structure:

<div class="vspace">

</div>

<div id="sourceblock2" class="sourceblock">

<div class="sourceblocktext">

<div class="ruby">

<div class="head">

ruby structure from yaml

</div>

1.  <div class="de1">

    <span class="br0">[</span><span class="br0">{</span><span
    class="st0">"name"</span><span class="sy0">=\></span><span
    class="st0">"device-1"</span>,

    </div>

2.  <div class="de1">

      <span class="st0">"parameters"</span><span
    class="sy0">=\></span><span class="br0">{</span><span
    class="st0">"app\_folder"</span><span class="sy0">=\></span><span
    class="st0">"deploy\_project"</span>,

    </div>

3.  <div class="de1">

         <span class="st0">"app\_id"</span><span
    class="sy0">=\></span><span class="st0">"1"</span>,

    </div>

4.  <div class="de1">

         <span class="st0">"tar\_file"</span><span
    class="sy0">=\></span><span
    class="st0">"deploy\_project.tar.gz"</span>,

    </div>

5.  <div class="de2">

         <span class="st0">"profile\_id"</span><span
    class="sy0">=\></span><span class="st0">"3"</span>,

    </div>

6.  <div class="de1">

         <span class="st0">"version\_id"</span><span
    class="sy0">=\></span><span class="st0">"2"</span><span
    class="br0">}</span>,

    </div>

7.  <div class="de1">

       <span class="st0">"classes"</span><span
    class="sy0">=\></span><span class="br0">[</span><span
    class="st0">"install"</span><span class="br0">]</span><span
    class="br0">}</span><span class="br0">]</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.ConvertingInstanceVariablesToAHashInRuby?action=sourceblock&num=2)

</div>

</div>

So an obvious structure is revealed. However, simply brute-forcing this
from a result seemed not quite what I would want, so I went searching.

<div class="vspace">

</div>

What happens if you yamlize an Object directly
----------------------------------------------

Let's say we build a couple of classes that can be used with the above
information (ignoring that it may have come from a database for the
non).

<div class="vspace">

</div>

<div id="sourceblock3" class="sourceblock">

<div class="sourceblocktext">

<div class="ruby">

<div class="head">

Deply and Params classes

</div>

1.  <div class="de1">

    <span class="kw1">class</span> Deploy

    </div>

2.  <div class="de1">

      attr\_accessor <span class="re3">:name</span>, <span
    class="re3">:parameters</span>, <span class="re3">:classes</span>

    </div>

3.  <div class="de1">

      <span class="kw1">def</span> initialize<span
    class="br0">(</span>n,<span class="kw3">p</span>,c<span
    class="br0">)</span>

    </div>

4.  <div class="de1">

        <span class="kw2">self</span>.<span class="me1">name</span> = n

    </div>

5.  <div class="de2">

        <span class="kw2">self</span>.<span
    class="me1">parameters</span> = <span class="kw3">p</span>

    </div>

6.  <div class="de1">

        <span class="kw2">self</span>.<span class="me1">classes</span> =
    c

    </div>

7.  <div class="de1">

      <span class="kw1">end</span>

    </div>

8.  <div class="de1">

    <span class="kw1">end</span>

    </div>

9.  <div class="de1">

     

    </div>

10. <div class="de2">

    <span class="kw1">class</span> Params

    </div>

11. <div class="de1">

      attr\_accessor <span class="re3">:folder</span>, <span
    class="re3">:id</span>, <span class="re3">:file</span>, <span
    class="re3">:profile</span>, <span class="re3">:version</span>

    </div>

12. <div class="de1">

      <span class="kw1">def</span> initialize<span
    class="br0">(</span>fo, id, fi, <span class="kw3">p</span>, v<span
    class="br0">)</span>

    </div>

13. <div class="de1">

        <span class="kw2">self</span>.<span class="me1">folder</span> =
    fo

    </div>

14. <div class="de1">

        <span class="kw2">self</span>.<span class="me1">id</span> = id

    </div>

15. <div class="de2">

        <span class="kw2">self</span>.<span class="me1">file</span> = fi

    </div>

16. <div class="de1">

        <span class="kw2">self</span>.<span class="me1">profile</span> =
    <span class="kw3">p</span>

    </div>

17. <div class="de1">

        <span class="kw2">self</span>.<span class="me1">version</span> =
    v

    </div>

18. <div class="de1">

      <span class="kw1">end</span>

    </div>

19. <div class="de1">

    <span class="kw1">end</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.ConvertingInstanceVariablesToAHashInRuby?action=sourceblock&num=3)

</div>

</div>

If we load up an array with the above classes using the data from the
original request, we can see this:

<div class="vspace">

</div>

<div id="sourceblock4" class="sourceblock">

<div class="sourceblocktext">

<div class="ruby">

1.9.3<span class="sy0">-</span>head :074 <span class="sy0">\></span>
d=<span class="kw3">Array</span>.<span class="me1">new</span>\
  <span class="sy0">=\></span> <span class="br0">[</span><span
class="br0">]</span>\
 1.9.3<span class="sy0">-</span>head :075 <span class="sy0">\></span>
d<span class="sy0">\<\<</span>Deploy.<span class="me1">new</span><span
class="br0">(</span><span class="st0">'dev01'</span>,Params.<span
class="me1">new</span><span class="br0">(</span><span
class="st0">'dep1'</span>,<span class="nu0">1</span>,<span
class="st0">'dep1.tar.gz'</span>,<span class="nu0">1</span>,<span
class="nu0">1</span><span class="br0">)</span>,<span
class="br0">[</span><span class="st0">'install'</span><span
class="br0">]</span><span class="br0">)</span>\
  <span class="sy0">=\></span> <span class="br0">[</span><span
class="co1">\#\<Deploy:0xa06bf80 @name="dev01",
@parameters=\#\<Params:0xa06bfbc @folder="dep1", @id=1,
@file="dep1.tar.gz", @profile=1, @version=1\>, @classes=["install"]\>]
</span>\
 1.9.3<span class="sy0">-</span>head :077 <span class="sy0">\></span>
<span class="kw3">puts</span> d.<span class="me1">to\_yaml</span>\
 <span class="sy0">---</span>\
 <span class="sy0">-</span> !ruby<span
class="sy0">/</span>object:Deploy\
   name: dev01\
   parameters: !ruby<span class="sy0">/</span>object:Params\
     folder: dep1\
     id: <span class="nu0">1</span>\
     file: dep1.<span class="me1">tar</span>.<span
class="me1">gz</span>\
     profile: <span class="nu0">1</span>\
     version: <span class="nu0">1</span>\
   classes:\
   <span class="sy0">-</span> install\
  <span class="sy0">=\></span> <span class="kw2">nil</span>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.ConvertingInstanceVariablesToAHashInRuby?action=sourceblock&num=4)

</div>

</div>

Simply yamlizing an Object doesn't give us what we want -- when loaded,
it will look for the classes Deploy and Params to create objects from.
We don't want this, exactly, we just want it in the form originally
requested.

<div class="vspace">

</div>

How to just get the instance variables into a Hash?
---------------------------------------------------

In [this
question](http://stackoverflow.com/questions/7638982/better-way-to-convert-several-instance-variables-into-hash-with-ruby)
on stackoverflow, one of the respondents points to the `instance_values`
method on `Object` in
[Rails](http://wiki.tamouse.org?n=Technology.RubyOnRails?action=print)
([github
code](https://github.com/rails/rails/blob/c20838596bcb40bf1590f27f6ba735d0a5f4fe8f/activesupport/lib/active_support/core_ext/object/instance_variables.rb#L12)).
This is pretty simple, and could be more helpful in a non-Rails
environment. I decided to write a recursive version that can be
monkey-patched into the Object class:

<div class="vspace">

</div>

<div id="sourceblock5" class="sourceblock">

<div class="sourceblocktext">

<div class="ruby">

<div class="head">

instance\_values\_recurse

</div>

1.  <div class="de1">

    <span class="kw1">class</span> <span class="kw4">Object</span>

    </div>

2.  <div class="de1">

      <span class="kw1">def</span> instance\_values\_recurse

    </div>

3.  <div class="de1">

        <span class="kw4">Hash</span><span
    class="br0">[</span>instance\_variables.<span class="me1">map</span>
    <span class="kw1">do</span> <span class="sy0">|</span>name<span
    class="sy0">|</span>

    </div>

4.  <div class="de1">

               <span class="br0">[</span>name.<span
    class="me1">to\_s</span><span class="br0">[</span><span
    class="nu0">1</span>..<span class="sy0">-</span><span
    class="nu0">1</span><span class="br0">]</span>,

    </div>

5.  <div class="de2">

                instance\_variable\_get<span
    class="br0">(</span>name<span class="br0">)</span>.<span
    class="me1">instance\_variables</span>.<span
    class="me1">count</span> <span class="sy0">\<</span> <span
    class="nu0">1</span> ?

    </div>

6.  <div class="de1">

                instance\_variable\_get<span
    class="br0">(</span>name<span class="br0">)</span> :

    </div>

7.  <div class="de1">

                instance\_variable\_get<span
    class="br0">(</span>name<span class="br0">)</span>.<span
    class="me1">instance\_values\_recurse</span>

    </div>

8.  <div class="de1">

               <span class="br0">]</span>

    </div>

9.  <div class="de1">

             <span class="kw1">end</span>

    </div>

10. <div class="de2">

            <span class="br0">]</span>

    </div>

11. <div class="de1">

      <span class="kw1">end</span>

    </div>

12. <div class="de1">

    <span class="kw1">end</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.ConvertingInstanceVariablesToAHashInRuby?action=sourceblock&num=5)

</div>

</div>

Using that same data above, we can get;

<div class="vspace">

</div>

<div id="sourceblock6" class="sourceblock">

<div class="sourceblocktext">

<div class="ruby">

1.9.3p335 :035 <span class="sy0">\></span> <span class="kw3">puts</span>
d.<span class="me1">map</span><span class="br0">{</span><span
class="sy0">|</span>e<span class="sy0">|</span> e.<span
class="me1">instance\_values\_recurse</span><span
class="br0">}</span>.<span class="me1">to\_yaml</span>\
 <span class="sy0">---</span>\
 <span class="sy0">-</span> name: dev01\
   parameters:\
     folder: dep1\
     id: <span class="nu0">1</span>\
     file: dep1.<span class="me1">tar</span>.<span
class="me1">gz</span>\
     profile: <span class="nu0">1</span>\
     version: <span class="nu0">1</span>\
   classes:\
   <span class="sy0">-</span> install

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.ConvertingInstanceVariablesToAHashInRuby?action=sourceblock&num=6)

</div>

</div>

and Voila!

This won't do \*everything\* in-and-of-itself. For instance, if any of
the instance variables consists of an Array of Objects, it won't recurse
into them. Refinement will be needed.

Still, an interesting exercise!

<div class="vspace">

</div>

<div style="display: none;">

Summary:How To: Convert an Object's Instance Variables to a Hash
(recursively) in Ruby Parent:(Technology.)Ruby <span
class="wikiword">[IncludeMe](http://wiki.tamouse.org?n=Technology.IncludeMe?action=edit)[?](http://wiki.tamouse.org?n=Technology.IncludeMe?action=edit)</span>:[Ruby](http://wiki.tamouse.org?n=Technology.Ruby?action=print)
Categories:[Technology](http://wiki.tamouse.org?n=Category.Technology),
[Languages](http://wiki.tamouse.org?n=Category.Languages),
[Ruby](http://wiki.tamouse.org?n=Category.Ruby),
[HowTos](http://wiki.tamouse.org?n=Category.HowTos) Tags: ruby,
languages, technology, howto

</div>

</div>
