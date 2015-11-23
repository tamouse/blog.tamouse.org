<div id="wikitext">

<span id="excerpt"></span> *Slurp* means to read an entire file into a
string variable all in one go. <span id="excerptend"></span>

In perl, a file can easily be read into an array by assigning the array
to the filehandle:

<div class="vspace">

</div>

<div id="sourceblock1" class="sourceblock">

<div class="sourceblocktext">

<div class="perl">

1.  <div class="de1">

    <span class="kw3">open</span><span class="br0">(</span><span
    class="re0">\$fh</span><span class="sy0">,</span><span
    class="st0">"\<"</span><span class="sy0">,</span><span
    class="re0">\$filename</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

2.  <div class="de1">

    <span class="re0">@lines</span> <span class="sy0">=</span> <span
    class="sy0">\<</span><span class="re0">\$fh</span><span
    class="sy0">\>;</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.PerlSlurp?action=sourceblock&num=1)

</div>

</div>

If one wants to have all of the source in one string, you could do the
above and join the lines:

<div class="vspace">

</div>

<div id="sourceblock2" class="sourceblock">

<div class="sourceblocktext">

<div class="perl">

1.  <div class="de1">

    <span class="kw3">open</span><span class="br0">(</span><span
    class="re0">\$fh</span><span class="sy0">,</span><span
    class="st0">"\<"</span><span class="sy0">,</span><span
    class="re0">\$filename</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

2.  <div class="de1">

    <span class="re0">@lines</span> <span class="sy0">=</span> <span
    class="sy0">\<</span><span class="re0">\$fh</span><span
    class="sy0">\>;</span>

    </div>

3.  <div class="de1">

    <span class="re0">\$lines</span> <span class="sy0">=</span> <span
    class="kw3">join</span><span class="br0">(</span><span
    class="st_h">''</span><span class="sy0">,</span><span
    class="re0">@lines</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.PerlSlurp?action=sourceblock&num=2)

</div>

</div>

Alternatively, you can reset the input line separator, `$/`, to undef,
and then read the file directly into a string:

<div class="vspace">

</div>

<div id="sourceblock3" class="sourceblock">

<div class="sourceblocktext">

<div class="perl">

1.  <div class="de1">

    <span class="kw1">my</span> <span class="re0">\$text</span> <span
    class="sy0">=</span> <span class="kw1">do</span> <span
    class="br0">{</span> <span class="kw3">local</span><span
    class="br0">(</span> <span class="sy0">@</span><span
    class="kw2">ARGV</span><span class="sy0">,</span> <span
    class="co5">\$/</span> <span class="br0">)</span> <span
    class="sy0">=</span> <span class="re0">\$filename</span> <span
    class="sy0">;</span> <span class="sy0">\<\></span> <span
    class="br0">}</span> <span class="sy0">;</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.PerlSlurp?action=sourceblock&num=3)

</div>

</div>

If you want to do this with standard input:

<div class="vspace">

</div>

<div id="sourceblock4" class="sourceblock">

<div class="sourceblocktext">

<div class="perl">

1.  <div class="de1">

    <span class="kw1">my</span> <span class="re0">\$text</span> <span
    class="sy0">=</span> <span class="kw1">do</span> <span
    class="br0">{</span> <span class="kw3">local</span><span
    class="br0">(</span> <span class="co5">\$/</span> <span
    class="br0">)</span><span class="sy0">;</span> <span
    class="re4">\<STDIN\></span> <span class="br0">}</span> <span
    class="sy0">;</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.PerlSlurp?action=sourceblock&num=4)

</div>

</div>

<div class="vspace">

</div>

<div style="display: none;">

Summary:Your basic slurp in Perl Parent:(Technology.)Perl <span
class="wikiword">[IncludeMe](http://wiki.tamouse.org?n=Technology.IncludeMe?action=edit)[?](http://wiki.tamouse.org?n=Technology.IncludeMe?action=edit)</span>:[Perl](http://wiki.tamouse.org?n=Technology.Perl?action=print)
Categories:[HowTos](http://wiki.tamouse.org?n=Category.HowTos),[Articles](http://wiki.tamouse.org?n=Category.Articles)
Tags: perl, slurp, reading files, idioms

</div>

</div>
