<div id="wikitext">

<div id="sourceblock1" class="codeblock">

<div class="codeblocktext">

    [20120416|2336.10] < DouglasK> Say, is there a web page with the series of commands one uses to do a full world update on a gentoo box?
    [20120416|2336.33] < tamouse__> not a gentoo person meself
    [20120416|2336.45] < tamouse__> doubt my g-fu is better than yours
    [20120416|2336.58]  * Oberon- hasn't mucked with gentoo in some years.
    [20120416|2337.33] < tamouse__> it wouldn't be as simple as emerge world, i suppose
    [20120416|2337.36] < jonored_> emerge --sync; emerge --update --deep world; revdep-rebuild; emerge --depclean
    [20120416|2340.56] < jonored_> sync brings the portage tree up-to-date, --update --deep world 
                                   updates to new versions of packages; revdep-rebuild rebuilds things 
                                   to use the new libraries where the library updated and the thing 
                                   that uses it didn't, and depclean clears out things that aren't 
                                   needed anymore.

</div>

<div class="codeblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.RebuildingTheWorldOnGentoo?action=sourceblock&num=1)

</div>

</div>

Thus:

<div class="vspace">

</div>

<div id="sourceblock2" class="sourceblock">

<div class="sourceblocktext">

<div class="bash">

<div class="head">

Full World Update on a Gentoo Box

</div>

1.  <div class="de1">

    emerge <span class="re5">--sync</span>

    </div>

2.  <div class="de1">

    emerge <span class="re5">--update</span> <span
    class="re5">--deep</span> world

    </div>

3.  <div class="de1">

    revdep-rebuild

    </div>

4.  <div class="de1">

    emerge <span class="re5">--depclean</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.RebuildingTheWorldOnGentoo?action=sourceblock&num=2)

</div>

</div>

<div class="vspace">

</div>

<div style="display: none;">

This goes at the bottom of the page, hidden by comment block class
Summary:Quick answer to the question Parent:(Technology.)<span
class="wikiword">[GenToo](http://wiki.tamouse.org?n=Technology.GenToo?action=print)</span>
<span
class="wikiword">[IncludeMe](http://wiki.tamouse.org?n=Technology.IncludeMe?action=edit)[?](http://wiki.tamouse.org?n=Technology.IncludeMe?action=edit)</span>:[Technology.GenToo](http://wiki.tamouse.org?n=Technology.GenToo?action=print)
Categories:[HowTos](http://wiki.tamouse.org?n=Category.HowTos) Tags:
gentoo, emerge

</div>

</div>
