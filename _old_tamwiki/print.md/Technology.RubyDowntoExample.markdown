<div id="wikitext">

<span id="excerpt"></span> A small snippet showing how to use the
`#downto` method. <span id="excerptend"></span>

<div class="vspace">

</div>

<div id="sourceblock1" class="sourceblock">

<div class="sourceblocktext">

<div class="ruby">

<div class="head">

The Beer Song

</div>

1.  <div class="de1">

    <span class="kw1">def</span> beersong<span
    class="br0">(</span>bb=<span class="nu0">99</span><span
    class="br0">)</span>

    </div>

2.  <div class="de1">

     

    </div>

3.  <div class="de1">

      bb.<span class="me1">downto</span><span class="br0">(</span><span
    class="nu0">1</span><span class="br0">)</span> <span
    class="kw1">do</span> <span class="sy0">|</span>n<span
    class="sy0">|</span>

    </div>

4.  <div class="de1">

     

    </div>

5.  <div class="de2">

        <span class="kw3">puts</span> <span class="co4">\<\<SONG</span>

    </div>

6.  <div class="de1">

    <span class="co4">\#{n} bottles of beer on the wall,</span>

    </div>

7.  <div class="de1">

    <span class="co4">\#{n} bottles of beer!</span>

    </div>

8.  <div class="de1">

    <span class="co4">Take one down and pass it around,</span>

    </div>

9.  <div class="de1">

    <span class="co4">\#{n\>1 ? n-1 : "No more"} bottles of beer on the
    wall!"</span>

    </div>

10. <div class="de2">

     

    </div>

11. <div class="de1">

    <span class="co4">SONG</span>

    </div>

12. <div class="de1">

     

    </div>

13. <div class="de1">

      <span class="kw1">end</span>

    </div>

14. <div class="de1">

     

    </div>

15. <div class="de2">

      <span class="kw3">puts</span> <span class="st0">" .. they all fell
    down drunk!"</span>

    </div>

16. <div class="de1">

     

    </div>

17. <div class="de1">

    <span class="kw1">end</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.RubyDowntoExample?action=sourceblock&num=1)

</div>

</div>

<div class="vspace">

</div>

<div id="sourceblock2" class="sourceblock">

<div class="sourceblocktext">

<div class="text">

<div class="head">

Output:

</div>

irb(main):337:0\> beersong 2\
 2 bottles of beer on the wall,\
 2 bottles of beer!\
 Take one down and pass it around,\
 1 bottles of beer on the wall!"\
\
 1 bottles of beer on the wall,\
 1 bottles of beer!\
 Take one down and pass it around,\
 No more bottles of beer on the wall!"\
\
  .. they all fell down drunk!\
 nil\
 irb(main):338:0\>\
  

</div>

</div>

<div class="sourceblocklink">

</div>

</div>

<div class="vspace">

</div>

</div>
