<div id="wikitext">

Wikipedia is a great source of information on the web. This script grabs
a summary of a wikipedia page and presents the result back to the
channel the bot was activated from.

The script uses a [functionality](https://dgl.cx/wikipedia-dns) that a
lot of people don't know about: someone has created a small database of
wikipedia summaries that are requested and returned via a DNS query.

Since we're in Perl, there's a nifty Perl implementation as well:

<div id="sourceblock1" class="sourceblock">

<div class="sourceblocktext">

<div class="perl">

<div class="head">

"Getting wikipedia summaries via DNS in Perl"

</div>

1.  <div class="de1">

    <span class="kw2">use</span> Net<span class="sy0">::</span><span
    class="me2">DNS</span><span class="sy0">;</span>

    </div>

2.  <div class="de1">

    <span class="kw1">my</span> <span class="re0">\$res</span> <span
    class="sy0">=</span> Net<span class="sy0">::</span><span
    class="me2">DNS</span><span class="sy0">::</span><span
    class="me2">Resolver</span><span class="sy0">-\></span><span
    class="kw2">new</span><span class="sy0">;</span>

    </div>

3.  <div class="de1">

     

    </div>

4.  <div class="de1">

    <span class="kw2">sub</span> wikipedia <span class="br0">{</span>

    </div>

5.  <div class="de2">

      <span class="kw1">my</span><span class="br0">(</span><span
    class="re0">\$name</span><span class="br0">)</span> <span
    class="sy0">=</span> <span class="co5">@\_</span><span
    class="sy0">;</span>

    </div>

6.  <div class="de1">

      <span class="kw1">my</span> <span class="re0">\$q</span> <span
    class="sy0">=</span> <span class="re0">\$res</span><span
    class="sy0">-\></span><span class="me1">query</span><span
    class="br0">(</span><span class="st0">"\$name.wp.dg.cx"</span><span
    class="sy0">,</span> <span class="st0">"TXT"</span><span
    class="br0">)</span><span class="sy0">;</span>

    </div>

7.  <div class="de1">

      <span class="kw1">if</span><span class="br0">(</span><span
    class="re0">\$q</span><span class="br0">)</span> <span
    class="br0">{</span>

    </div>

8.  <div class="de1">

        <span class="kw1">for</span> <span class="kw1">my</span> <span
    class="re0">\$rr</span><span class="br0">(</span><span
    class="re0">\$q</span><span class="sy0">-\></span><span
    class="me1">answer</span><span class="br0">)</span> <span
    class="br0">{</span>

    </div>

9.  <div class="de1">

          <span class="kw1">next</span> <span class="kw1">unless</span>
    <span class="re0">\$rr</span><span class="sy0">-\></span><span
    class="me1">type</span> <span class="kw1">eq</span> <span
    class="st0">"TXT"</span><span class="sy0">;</span>

    </div>

10. <div class="de2">

          <span class="kw3">return</span> <span class="kw3">join</span>
    <span class="st0">""</span><span class="sy0">,</span> <span
    class="re0">\$rr</span><span class="sy0">-\></span><span
    class="me1">char\_str\_list</span><span class="sy0">;</span>

    </div>

11. <div class="de1">

        <span class="br0">}</span>

    </div>

12. <div class="de1">

      <span class="br0">}</span>

    </div>

13. <div class="de1">

    <span class="br0">}</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw code](http://wiki.tamouse.org?n=Main.Wp?action=sourceblock&num=1)

</div>

</div>

The script responds to a message in a channel or a query containing:

<div class="vspace">

</div>

     !wp <WIKIPEDIA PAGE>

And presents the information back to the channel or query as an action.

The script can be found here:
<http://public.tamaratemple.com/irssi/wp.pl.txt>

<div class="vspace">

</div>

</div>
