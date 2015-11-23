<div id="wikitext">

<div style="display: none;">

Summary:What can you do when a file contains strings with mixed
character set encodings? Parent:(Technology.)Development <span
class="wikiword">[IncludeMe](http://wiki.tamouse.org?n=Technology.IncludeMe?action=edit)[?](http://wiki.tamouse.org?n=Technology.IncludeMe?action=edit)</span>:[Development](http://wiki.tamouse.org?n=Technology.Development?action=print)
Categories:[HowTos](http://wiki.tamouse.org?n=Category.HowTos) Tags:
character sets, encoding, problems, solutions

</div>

<span id="excerpt"></span> I recently was working on a Rails application
and had to deal with a data file that contained strings with different
encodings. Each line was internally consistent, however, one line might
be in ISO-8859-1, while another might be in UTF-8. This is how I solved
the problem in Ruby and PHP. <span id="excerptend"></span>

<div class="vspace">

</div>

The Problem
-----------

The data file was a collection of quotes that were submitted by patrons
of an IRC channel. The person who implemented the quote collector
decided to use the Pilcro, "??", as the internal line separator for
multi-line quotes. This sounded like a good idea; the pilcrow being the
international mark for a paragraph and all.

The problem is that pilcrow occupies different codebases on different
character sets. For several people submitting quotes, from an older
windows-based irc client, the character set used is ISO-8859-1. For
other people, using more recent clients, UTF-8 is the standard.

The result was that the pilcrow would appear in the file in two ways:

<div class="vspace">

</div>

-   0xB6 - a single byte character as per ISO-8859-1
-   0x00B6 - a two-byte character as per UTF-8

<div class="vspace">

</div>

<div id="sourceblock1" class="sourceblock">

<div class="sourceblocktext">

<div class="text">

<div class="head">

Examples as Ruby sees them:

</div>

ISO-8859-1: "\<orangejuice\> Clive Anderson was nervous as
hell.\\xB6\<kbeetl\> No, he was British.\\xB6\<kbeetl\> It's subtle, but
there's a difference.\\n"\
 UTF-8: "\<MildBill\> What's odd???\<FreeTrav\> About half of the
natural numbers.\\n"

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.DealingWithMixedEncodingInAFile?action=sourceblock&num=1)

</div>

</div>

<div class="vspace">

</div>

Ruby solution
-------------

Ruby by default reads files in UTF-8. The resulting array of strings in
the file, thus, will have different encodings. To test what a particular
string is encoded as, you need to do the following construction:

<div class="vspace">

</div>

<div id="sourceblock2" class="sourceblock">

<div class="sourceblocktext">

<div class="ruby">

s.<span class="me1">force\_encoding</span><span
class="br0">(</span>encoding<span class="br0">)</span>.<span
class="me1">valid\_encoding</span>?

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.DealingWithMixedEncodingInAFile?action=sourceblock&num=2)

</div>

</div>

where encoding is the name of the character set you are testing.

So we end up with this sort of thing:

<div class="vspace">

</div>

<div id="sourceblock3" class="sourceblock">

<div class="sourceblocktext">

<div class="ruby">

<div class="head">

convert quote file line separators to something we can use:

</div>

1.  <div class="de1">

    <span class="co1">\# get the source file</span>

    </div>

2.  <div class="de1">

    quotes.<span class="me1">collect</span>! <span class="kw1">do</span>
    <span class="sy0">|</span>q<span class="sy0">|</span>

    </div>

3.  <div class="de1">

      <span class="kw1">if</span> q.<span
    class="me1">force\_encoding</span><span class="br0">(</span><span
    class="st0">"UTF-8"</span><span class="br0">)</span>.<span
    class="me1">valid\_encoding</span>?

    </div>

4.  <div class="de1">

        q.<span class="kw3">gsub!</span><span class="br0">(</span><span
    class="sy0">/</span>??<span class="sy0">/</span>, <span
    class="st0">"<span class="es0">\\n</span>"</span><span
    class="br0">)</span>

    </div>

5.  <div class="de2">

      <span class="kw1">else</span>

    </div>

6.  <div class="de1">

        q = q.<span class="me1">force\_encoding</span><span
    class="br0">(</span><span class="st0">"ISO-8859-1"</span><span
    class="br0">)</span>.

    </div>

7.  <div class="de1">

          <span class="kw3">gsub</span><span class="br0">(</span><span
    class="sy0">/</span><span
    class="co1">\#{0xb6.chr.force\_encoding("ISO-8859-1")}/,
    "\\n")</span>

    </div>

8.  <div class="de1">

      <span class="kw1">end</span>

    </div>

9.  <div class="de1">

      q

    </div>

10. <div class="de2">

    <span class="kw1">end</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.DealingWithMixedEncodingInAFile?action=sourceblock&num=3)

</div>

</div>

*Note:* I put the test for UTF-8 first, as most lines will match that if
they don't include the one-byte pilcrow.

<div class="vspace">

</div>

</div>
