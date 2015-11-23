<div id="wikitext">

<div style="display: none;">

Summary: The best answer from stackoverflow on this question Source:
<http://stackoverflow.com/questions/1230741/convert-a-nokogiri-document-to-a-ruby-hash>
Parent:(Technology.)Ruby
includeme:[Technology.Ruby](http://wiki.tamouse.org?n=Technology.Ruby?action=print)
Posted: March 24, 2013, at 08:45 AM Tags: ruby, xml, hash, conversion,
howto, stackoverflow

</div>

<div class="vspace">

</div>

xml - Convert a Nokogiri document to a Ruby Hash - Stack Overflow
-----------------------------------------------------------------

<div class="round lrindent quote">

If you want to convert a Nokogiri xml document to a hash, just do the
following:

<div class="vspace">

</div>

<div id="sourceblock1" class="sourceblock">

<div class="sourceblocktext">

<div class="ruby">

1.  <div class="de1">

    <span class="kw3">require</span> <span
    class="st0">'active\_support/core\_ext/hash/conversions'</span>

    </div>

2.  <div class="de1">

    hash = <span class="kw4">Hash</span>.<span
    class="me1">from\_xml</span><span
    class="br0">(</span>nokogiri\_document.<span
    class="me1">to\_s</span><span class="br0">)</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.HowToConvertXMLToHashInRuby?action=sourceblock&num=1)

</div>

</div>

<div class="vspace">

</div>

-   <span style="font-size:83%">answered Sep 20 '11 at 16:09 by
    Guillaume Roderick</span>
-   <span style="font-size:83%">edited Jul 27 '12 at 20:59 by
    grosser</span>

</div>

<div class="vspace">

</div>

------------------------------------------------------------------------

</div>
