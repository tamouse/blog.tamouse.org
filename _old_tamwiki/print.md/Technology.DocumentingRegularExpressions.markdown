<div id="wikitext">

<div style="display: none;">

Summary:Utilizing the x modifier in order to enable well-documented
regular expressions Parent:(Technology.)Development <span
class="wikiword">[IncludeMe](http://wiki.tamouse.org?n=Technology.IncludeMe?action=edit)[?](http://wiki.tamouse.org?n=Technology.IncludeMe?action=edit)</span>:[Development](http://wiki.tamouse.org?n=Technology.Development?action=print)
Categories:[BestPractices](http://wiki.tamouse.org?n=Category.BestPractices)
Tags: regex, pcre, documentation

</div>

<span id="excerpt"></span> Regular Expressions (commonly referred to as
'regexes') can be highly opaque voodunesque constructions that often are
difficult to decipher and thus modify when the time comes. Regexes seem
to be a black art to many people, and something that takes a while to
understand and master. Documenting regexes is something practically no
one does, yet could be so helpful for many people. <span
id="excerptend"></span>

<div class="vspace">

</div>

PCRE modifiers
--------------

[PCRE](http://pcre.org) (Perl Compatible Regular Expressions) has
several modifiers that do various things to the action of the regex.
These are the ones defined for PCRE:

<div class="vspace">

</div>

i
:   make the match case insensitive

m
:   multiline

s
:   dot matches newlines

x
:   ignore white spaces in specification

<div class="vspace">

</div>

Enter the **x** modifier
------------------------

The **x** modifier is where we can take advantage of the regex ignoring
white space between pattern elements to beautify the regex and insert
comments.

<div class="vspace">

</div>

<div id="sourceblock1" class="sourceblock">

<div class="sourceblocktext">

<div class="perl">

<div class="head">

A simple regex to detect blank lines

</div>

<span class="re0">\$is\_blank\_re</span> <span class="sy0">=</span>
<span class="kw3">qr</span><span class="br0">{</span><span
class="sy0">\^</span>\\<span class="kw3">s</span><span
class="sy0">\*</span>\$<span class="br0">}</span><span
class="sy0">;</span>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.DocumentingRegularExpressions?action=sourceblock&num=1)

</div>

</div>

The above regex is quite simple, most people should understand it well
enough. But for illustration, let's break this up a bit, beautify it,
and add some comments:

<div class="vspace">

</div>

<div id="sourceblock2" class="sourceblock">

<div class="sourceblocktext">

<div class="perl">

<div class="head">

Documented regex

</div>

1.  <div class="de1">

    <span class="re0">\$is\_blank\_re</span> <span class="sy0">=</span>

    </div>

2.  <div class="de1">

        <span class="kw3">qr</span><span class="br0">{</span>

    </div>

3.  <div class="de1">

           <span class="sy0">\^</span>                    <span
    class="co1">\# match the beginning of the string</span>

    </div>

4.  <div class="de1">

           \\<span class="kw3">s</span><span class="sy0">\*</span>      
               <span class="co1">\# match zero or more white
    spaces</span>

    </div>

5.  <div class="de2">

           \$                    <span class="co1">\# match the end of
    the string</span>

    </div>

6.  <div class="de1">

          <span class="br0">}</span>x<span class="sy0">;</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.DocumentingRegularExpressions?action=sourceblock&num=2)

</div>

</div>

This at least makes it clearer what each element of the regex *is* and
what it *does*. Using the regex defined is the same in either case:

<div class="vspace">

</div>

<div id="sourceblock3" class="sourceblock">

<div class="sourceblocktext">

<div class="perl">

<div class="head">

example skipping blank lines in a file

</div>

1.  <div class="de1">

    <span class="kw1">while</span> <span class="br0">(</span><span
    class="re0">\$line</span> <span class="sy0">=</span> <span
    class="re4">\<STDIN\></span><span class="br0">)</span> <span
    class="br0">{</span>

    </div>

2.  <div class="de1">

        <span class="kw1">next</span> <span class="kw1">if</span> <span
    class="br0">(</span> <span class="re0">\$line</span> <span
    class="sy0">=\~</span> <span class="kw3">m</span><span
    class="br0">{</span><span class="re0">\$is\_blank\_re</span><span
    class="br0">}</span> <span class="br0">)</span><span
    class="sy0">;</span>

    </div>

3.  <div class="de1">

        <span class="co1">\# process the line</span>

    </div>

4.  <div class="de1">

    <span class="br0">}</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.DocumentingRegularExpressions?action=sourceblock&num=3)

</div>

</div>

<div class="vspace">

</div>

Links for a few languages using regular expressions
---------------------------------------------------

-   [PCRE](http://pcre.org)
-   [Perl](http://perldoc.perl.org/perlre.html)
-   [PHP](http://us3.php.net/manual/en/reference.pcre.pattern.modifiers.php)
-   [Ruby](http://www.ruby-doc.org/core-1.9.3/Regexp.html)

</div>
