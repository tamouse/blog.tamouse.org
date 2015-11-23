<div id="wikitext">

<span
class="wikiword">[PmWiki](http://wiki.tamouse.org?n=Technology.PmWiki?action=print)</span>
has the great ability to be "skinned", i.e. the layout and colour scheme
that is presented to the user's browser. It is an extremely flexible
mechanism, allowing per-group and per-page skins.

Below is a conversation from the [pmwiki-users mailing
list](http://www.pmwiki.org/wiki/PmWiki/MailingLists) describing briefly
how one can accomplish this in a couple of ways:

<div class="vspace">

</div>

<div id="sourceblock1" class="sourceblock">

<div class="sourceblocktext">

<div class="email">

<div class="head">

Original Request

</div>

<span class="sc0"><span class="kw3">Subject</span><span
class="sy0">:</span> <span class="sy0">[</span>pmwiki-users<span
class="sy0">]</span> Use separate skin <span class="kw4">for</span>
page</span>\
 <span class="sc0"><span class="kw3">Date</span><span
class="sy0">:</span> <span class="re3">Mon, 26 Mar 2012 <span
class="re4">11:37:39</span> +0200</span></span>\
 <span class="sc0"><span class="kw3">From</span><span
class="sy0">:</span> <span class="sy0">\<</span>publik@...<span
class="sy0">\></span></span>\
 <span class="sc0"><span class="kw3">To</span><span class="sy0">:</span>
pmwiki-users <span class="sy0">\<</span><span
class="re2">pmwiki-users@pmichaud.com</span><span
class="sy0">\></span></span>\
\
 I want/need to use a separate skin for some (a few) pages on my site.\
\
 I think I have found out a couple of ways to do this but none of them\
 "feels right".\
\
 Does anyone "know" the "right" way (AKA "best") to do this in PmWiki?

</div>

</div>

<div class="sourceblocklink">

</div>

</div>

<div class="vspace">

</div>

<div id="sourceblock2" class="sourceblock">

<div class="sourceblocktext">

<div class="email">

<div class="head">

Reply

</div>

<span class="sc0"><span class="kw3">From</span><span
class="sy0">:</span> Peter Bowers <span
class="sy0">\<</span>pbowers@...<span class="sy0">\></span></span>\
 <span class="sc0"><span class="kw3">Date</span><span
class="sy0">:</span> <span class="re3">Mon, 26 Mar 2012 <span
class="re4">12:46:01</span> +0200</span></span>\
\
 On Mon, Mar 26, 2012 at 11:37 AM,  \<publik@...\> wrote:\
 \> I want/need to use a separate skin for some (a few) pages on my
site.\
 \>\
 \> I think I have found out a couple of ways to do this but none of
them\
 \> "feels right".\
 \>\
 \> Does anyone "know" the "right" way (AKA "best") to do this in
PmWiki?\
\
 If it's limited to 3-4 pages or groups then simply a per-page or\
 per-group customization file would be the preferred.  If there are\
 more than that then it would probably be better in a simple\
 conditional in your config.php:\
\
 \$pagename = ResolvePageName(\$pagename);\
 if (in\_array(\$pagename, array('GroupA.PageA', 'GroupB.PageB',
[...])))\
    \$Skin = 'myskin';\
 else\
    \$Skin = 'otherskin';\
\
 Be aware that ResolvePageName() implicitly calls some functions which\
 do caching, so this should be late in your config.php.  Obviously\
 there are other ways to do the conditional besides in\_array\
 (preg\_match with an array of REs comes to mind if they fit patterns)\
 but presumably you've already got that figured out...\
  

</div>

</div>

<div class="sourceblocklink">

</div>

</div>

<div class="vspace">

</div>

<div id="sourceblock3" class="sourceblock">

<div class="sourceblocktext">

<div class="email">

<div class="head">

Reply

</div>

<span class="sc0"><span class="kw3">From</span><span
class="sy0">:</span> Petko Yotov <span class="sy0">\<</span>5ko@...<span
class="sy0">\></span></span>\
 <span class="sc0"><span class="kw3">Date</span><span
class="sy0">:</span> <span class="re3">Mon, 26 Mar 2012 <span
class="re4">13:37:46</span> +0200</span></span>\
\
 On Monday 26 March 2012 11:37:39 publik@... wrote:\
 \> I want/need to use a separate skin for some (a few) pages on my
site.\
 \> Does anyone "know" the "right" way (AKA "best") to do this in
PmWiki?\
\
 If you have limited groups or pages, you can create files\
\
   pmwiki/local/Group1.php\
   pmwiki/local/Group2.Page1.php\
   pmwiki/local/Group2.Page2.php\
\
 And inside each one, place such content:\
\
 \<?php\
   \$Skin = "myotherskin";\
\
 If you want to be able to change the skins with a markup (:skin
myotherskin:)\
 in the wiki page, add something like this in your config.php file:\
\
   Markup('skin', 'directives',
'/\\\\(:skin\\\\s+([-\\\\w]+)\\\\s\*:\\\\)/e',\
     "PZZ(SetSkin(\\\$pagename,'\$1'))");\
\
 Petko\
  

</div>

</div>

<div class="sourceblocklink">

</div>

</div>

<div class="vspace">

</div>

<div style="display: none;">

This goes at the bottom of the page, hidden by comment block class
Summary:how to make your wiki look different for each group or page
Parent:(Technology.)<span class="wikiword">PmWiki</span> <span
class="wikiword">[IncludeMe](http://wiki.tamouse.org?n=Technology.IncludeMe?action=edit)[?](http://wiki.tamouse.org?n=Technology.IncludeMe?action=edit)</span>:[Technology.PmWiki](http://wiki.tamouse.org?n=Technology.PmWiki?action=print)
Categories:[HowTos](http://wiki.tamouse.org?n=Category.HowTos) Tags:
skins, themes, pmwiki

</div>

</div>
