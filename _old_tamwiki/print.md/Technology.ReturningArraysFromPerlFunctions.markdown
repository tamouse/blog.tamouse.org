<div id="wikitext">

<span id="excerpt"></span> It can be tricky to figure out how to return
mutliple values or non-scalar objects from a perl function. One has to
be aware of the context that one is working, and whether one is
returning a reference or not. <span id="excerptend"></span>

<div class="vspace">

</div>

Returning an Array
------------------

Let's initialize an array:

<div class="vspace">

</div>

<div id="sourceblock1" class="sourceblock">

<div class="sourceblocktext">

<div class="perl">

<span class="kw1">my</span> <span class="re0">@a</span> <span
class="sy0">=</span> <span class="br0">(</span><span
class="br0">)</span><span class="sy0">;</span> <span class="co1">\# this
sets up an empty array and assigns it to @a</span>

</div>

</div>

<div class="sourceblocklink">

</div>

</div>

In the above code, we declare an array variable ` @a `{.escaped} and
assign an empty (or null) array to it. This will be useful when writing
a function that will store it's return values in an array:

<div class="vspace">

</div>

<div id="sourceblock2" class="sourceblock">

<div class="sourceblocktext">

<div class="perl">

<div class="head">

A simple function

</div>

<span class="kw2">sub</span> my\_function <span class="br0">{</span>\
     <span class="kw1">my</span> <span class="re0">\$n</span> <span
class="sy0">=</span> <span class="kw3">shift</span><span
class="sy0">;</span> <span class="co1">\# get the first paramter</span>\
     <span class="kw1">my</span> <span class="re0">@a</span> <span
class="sy0">=</span> <span class="br0">(</span><span
class="br0">)</span><span class="sy0">;</span> <span class="co1">\#
initialize the array</span>\
     <span class="kw1">for</span> <span class="br0">(</span><span
class="kw1">my</span> <span class="re0">\$i</span> <span
class="sy0">=</span> <span class="nu0">0</span><span
class="sy0">;</span> <span class="re0">\$i</span> <span
class="sy0">\<</span> <span class="re0">\$n</span><span
class="sy0">;</span> <span class="re0">\$i</span><span
class="sy0">++</span><span class="br0">)</span> <span
class="br0">{</span>\
         <span class="kw3">push</span> <span class="re0">@a</span><span
class="sy0">,</span> <span class="re0">\$i</span><span
class="sy0">;</span> <span class="co1">\# pushes the current value of
\$i to the array @a</span>\
     <span class="br0">}</span>\
     <span class="kw3">return</span> <span class="re0">@a</span><span
class="sy0">;</span>\
 <span class="br0">}</span>

</div>

</div>

<div class="sourceblocklink">

</div>

</div>

The last line of the function returns the array `@a`{.escaped}, which
will in fact return an array reference to the calling routine. Let's see
how this works:

<div class="vspace">

</div>

<div id="sourceblock3" class="sourceblock">

<div class="sourceblocktext">

<div class="perl">

<div class="head">

Calling the function

</div>

<span class="kw1">my</span> <span class="re0">@my\_a</span> <span
class="sy0">=</span> my\_function<span class="br0">(</span><span
class="nu0">10</span><span class="br0">)</span><span
class="sy0">;</span>\
 <span class="kw3">print</span> <span class="kw3">join</span><span
class="br0">(</span><span class="st0">", "</span><span
class="sy0">,</span><span class="re0">@my\_a</span><span
class="br0">)</span><span class="sy0">.</span><span class="st0">"<span
class="es0">\\n</span>"</span><span class="sy0">;</span>

</div>

</div>

<div class="sourceblocklink">

</div>

</div>

The output from the above will be:

``` {.escaped}
0, 1, 2, 3, 4, 5, 6, 7, 8, 9
```

So it's really very simple to return an array.

<div class="vspace">

</div>

Returning multiple values
-------------------------

If you aren't really working with an array, you can still return
multiple values from a function. In this case, we'll create an array
reference instead.

<div class="vspace">

</div>

<div id="sourceblock4" class="sourceblock">

<div class="sourceblocktext">

<div class="perl">

<div class="head">

function that returns a pair of values

</div>

<span class="kw2">sub</span> my\_other\_function <span
class="br0">{</span>\
     <span class="kw1">my</span> <span class="re0">\$first</span> <span
class="sy0">=</span> <span class="st_h">'first'</span><span
class="sy0">;</span>\
     <span class="kw1">my</span> <span class="re0">\$second</span> <span
class="sy0">=</span> <span class="st_h">'second'</span><span
class="sy0">;</span>\
\
     <span class="co1">\# maybe do something</span>\
\
     <span class="kw3">return</span> <span class="br0">(</span><span
class="re0">\$first</span><span class="sy0">,</span> <span
class="re0">\$second</span><span class="br0">)</span><span
class="sy0">;</span> <span class="co1">\# this creates an anonymous
array reference</span>\
 <span class="br0">}</span>

</div>

</div>

<div class="sourceblocklink">

</div>

</div>

To call and use the values in `my_other_function`{.escaped}, simply
recapitulate the array environment in the assignment:

<div class="vspace">

</div>

<div id="sourceblock5" class="sourceblock">

<div class="sourceblocktext">

<div class="perl">

<span class="kw1">my</span> <span class="br0">(</span><span
class="re0">\$f</span><span class="sy0">,</span><span
class="re0">\$s</span><span class="br0">)</span> <span
class="sy0">=</span> my\_other\_function<span class="br0">(</span><span
class="br0">)</span><span class="sy0">;</span>\
 <span class="kw3">print</span> <span class="st0">"<span
class="es0">\\\$</span>f=\$f, <span class="es0">\\\$</span>s=\$s<span
class="es0">\\n</span>"</span><span class="sy0">;</span>

</div>

</div>

<div class="sourceblocklink">

</div>

</div>

The output of the above is:

``` {.escaped}
$f=first, $s=second
```

Just as we expect;

<div class="vspace">

</div>

<div style="display: none;">

Summary:a short howto explaining about returning non-scalar values from
a perl function Parent:(Technology.)Perl <span
class="wikiword">[IncludeMe](http://wiki.tamouse.org?n=Technology.IncludeMe?action=edit)[?](http://wiki.tamouse.org?n=Technology.IncludeMe?action=edit)</span>:[Technology.Perl](http://wiki.tamouse.org?n=Technology.Perl?action=print)
Categories:[HowTos](http://wiki.tamouse.org?n=Category.HowTos),
[Articles](http://wiki.tamouse.org?n=Category.Articles) Tags: perl,
howtos, examples

</div>

</div>
