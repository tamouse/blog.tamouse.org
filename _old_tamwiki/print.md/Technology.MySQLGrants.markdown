<div id="wikitext">

<div style="display: none;">

Summary:Some examples of using `GRANT`{.escaped} in `MySQL`{.escaped}
Parent:(Technology.)<span
class="wikiword">[MySQL](http://wiki.tamouse.org?n=Technology.MySQL?action=print)</span>
<span
class="wikiword">[IncludeMe](http://wiki.tamouse.org?n=Technology.IncludeMe?action=edit)[?](http://wiki.tamouse.org?n=Technology.IncludeMe?action=edit)</span>:[MySQL](http://wiki.tamouse.org?n=Technology.MySQL?action=print)
Categories:[HowTos](http://wiki.tamouse.org?n=Category.HowTos) Tags:
mysql, grant, permissions, howtos Source:
<http://dev.mysql.com/doc/refman/5.6/en/grant.html>

</div>

<span id="excerpt"></span> A few examples lifted from the
`MySQL`{.escaped} documentation, because I always forget the format.
<span id="excerptend"></span>

<div class="vspace">

</div>

<div id="sourceblock1" class="sourceblock">

<div class="sourceblocktext">

<div class="sql">

<div class="head">

examples of setting permissions

</div>

1.  <div class="de1">

    <span class="kw1">CREATE</span> <span class="kw1">USER</span> <span
    class="st0">'jeffrey'</span>@<span class="st0">'localhost'</span>
    <span class="kw1">IDENTIFIED</span> <span class="kw1">BY</span>
    <span class="st0">'mypass'</span>;

    </div>

2.  <div class="de1">

    <span class="kw1">GRANT</span> <span class="kw1">ALL</span> <span
    class="kw1">ON</span> db1<span class="sy0">.\*</span> <span
    class="kw1">TO</span> <span class="st0">'jeffrey'</span>@<span
    class="st0">'localhost'</span>;

    </div>

3.  <div class="de1">

    <span class="kw1">GRANT</span> <span class="kw1">SELECT</span> <span
    class="kw1">ON</span> db2<span class="sy0">.</span>invoice <span
    class="kw1">TO</span> <span class="st0">'jeffrey'</span>@<span
    class="st0">'localhost'</span>;

    </div>

4.  <div class="de1">

    <span class="kw1">GRANT</span> USAGE <span class="kw1">ON</span>
    <span class="sy0">\*.\*</span> <span class="kw1">TO</span> <span
    class="st0">'jeffrey'</span>@<span class="st0">'localhost'</span>
    <span class="kw1">WITH</span> MAX\_QUERIES\_PER\_HOUR <span
    class="nu0">90</span>;

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.MySQLGrants?action=sourceblock&num=1)

</div>

</div>

</div>
