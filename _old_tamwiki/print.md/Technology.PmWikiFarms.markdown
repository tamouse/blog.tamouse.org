<div id="wikitext">

<span id="excerpt"></span> I've been implementing wiki farms with pmwiki
for some time now. At first I was confused by the original documentation
that seemed to me that all the farms had to reside under the same
domain. This is **not** true, however. After chasing after the
alternative to farming described in
[Cookbook:WikiFarmAlternative](http://www.pmwiki.org/wiki/Cookbook/WikiFarmAlternative),
I came back the standard method explained in
[PmWiki:WikiFarms](http://www.pmwiki.org/wiki/PmWiki/WikiFarms) and
allied pages. (See [Links](#links) below.)

After reading through the estimable
[Cookbook:FarmSetupByExample](http://www.pmwiki.org/wiki/Cookbook/FarmSetupByExample)
(*really* recommend reading through this!), I wanted to go back to the
notion of implementing a (more) secure version of the field in a farm.
(I've written a comment at
[Cookbook:FarmSetupByExample-Talk](http://www.pmwiki.org/wiki/Cookbook/FarmSetupByExample-Talk)
with a summary. This is a more detailed explanation.) <span
id="excerptend"></span>

<div class="vspace">

</div>

Why would you want to do this?
------------------------------

The basic configuration that pmwiki comes with enables farms almost
out-of-the-box, with some pretty easy configuration as shown in
[FarmSetupByExample](http://www.pmwiki.org/wiki/Cookbook/FarmSetupByExample).

Pmwiki also provides an `.htaccess` file for each directory that should
not be explorable by browser, the method employed under Apache servers
(although the Apache mavens feel this is not desirable as it causes
performance issues in the server).

Two desires confluence on a more viable solution:

<div class="vspace">

</div>

1.  desire to run pmwiki under either
    [Lighttpd](http://wiki.tamouse.org?n=Technology.Lighttpd?action=edit)[?](http://wiki.tamouse.org?n=Technology.Lighttpd?action=edit)
    or
    [Nginx](http://wiki.tamouse.org?n=Technology.Nginx?action=edit)[?](http://wiki.tamouse.org?n=Technology.Nginx?action=edit),
    neither of which grok Apache's `.htaccess` files, and require their
    own method of blocking access to regions and subdirectories under
    the document root. (Too complex for discussion here.)
    <div class="vspace">

    </div>

2.  desire to ensure that browsers cannot access wiki data directly.

<div class="vspace">

</div>

<div class="round lrindent important2">

Honestly, if you have no real strong need to do this, don't bother. The
.htaccess file method works fine with Apache, albeit at some cost of
performance. The steps here will always be complicated and they involve
some knowledge of the internals of pmwiki as well as unix file systems.

</div>

<div class="vspace">

</div>

Have a farm wiki set up
-----------------------

I installed my farm in a non-accessible place as well, to keep it from
ever being invoked. It resides in `/var/www/newfarm/pmwiki-latest` which
is symlinked to whatever the latest pmwiki version is installed.

The only concern is are the cookbook, local, and pub directories that
pmwiki will need for it's farming. What I've had to do is for each new
version of pmwiki I download, and re-symlink to pmwiki-latest, is remove
the cookbook, local, and pub directories from the pmwiki-latest
directory, and symlink them to where the actual directories reside.

I keep these in the newfarm directory itself.

The procedure looks like so:

<div class="vspace">

</div>

<div id="sourceblock1" class="sourceblock">

<div class="sourceblocktext">

<div class="bash">

1.  <div class="de1">

    \$ <span class="kw3">cd</span> <span class="sy0">/</span>var<span
    class="sy0">/</span>www<span class="sy0">/</span>newfarm

    </div>

2.  <div class="de1">

    \$ curl http:<span class="sy0">//</span>www.pmwiki.org<span
    class="sy0">/</span>pub<span class="sy0">/</span>pmwiki<span
    class="sy0">/</span>pmwiki-latest.zip

    </div>

3.  <div class="de1">

    \$ <span class="kw2">unzip</span> pmwiki-latest.zip

    </div>

4.  <div class="de1">

    \$ <span class="kw2">rm</span> pmwiki-latest

    </div>

5.  <div class="de2">

    \$ <span class="kw2">ln</span> <span class="re5">-s</span>
    pmwiki-<span class="nu0">2.2</span>.xx pmwiki-latest <span
    class="co0">\# whatever the zip file unpacked to</span>

    </div>

6.  <div class="de1">

    \$ <span class="kw2">rm</span> <span class="re5">-rf</span>
    pmwiki-latest<span class="sy0">/</span>cookbook pmwiki-latest<span
    class="sy0">/</span><span class="kw3">local</span>
    pmwiki-latest<span class="sy0">/</span>pub

    </div>

7.  <div class="de1">

    \$ <span class="kw2">ln</span> <span class="re5">-s</span> cookbook
    pmwiki-latest<span class="sy0">/</span>cookbook

    </div>

8.  <div class="de1">

    \$ <span class="kw2">ln</span> <span class="re5">-s</span> <span
    class="kw3">local</span> pmwiki-latest<span
    class="sy0">/</span><span class="kw3">local</span>

    </div>

9.  <div class="de1">

    \$ <span class="kw2">ln</span> <span class="re5">-s</span> pub
    pmwiki-latest<span class="sy0">/</span>pub

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.PmWikiFarms?action=sourceblock&num=1)

</div>

</div>

This is what the newfarm directory looks like after a new pmwiki version
is installed:

<div class="vspace">

</div>

<div id="sourceblock2" class="sourceblock">

<div class="sourceblocktext">

<div class="text">

drwxr-sr-x 2 tamara   tamara   4096 Dec  2 14:09 cookbook\
 drwxr-sr-x 2 tamara   tamara   4096 Feb  9 13:44 local\
 drwxr-sr-x 8 tamara   tamara   4096 Dec 17 23:00 pmwiki-2.2.43\
 drwxr-sr-x 8 tamara   tamara   4096 Dec  2 14:09 pmwiki-2.2.45\
 drwxr-sr-x 5 tamara   tamara   4096 Feb  9 13:43 pmwiki-2.2.46\
 lrwxrwxrwx 1 tamara   tamara     13 Feb  9 12:53 pmwiki-latest -\>
pmwiki-2.2.46\
 -rw-rw-r-- 1 tamara   tamara 521934 Feb  9 12:52 pmwiki-latest.zip\
 drwxr-sr-x 5 tamara   tamara   4096 Dec  2 14:09 pub

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.PmWikiFarms?action=sourceblock&num=2)

</div>

</div>

This is what the newfarm/pmwiki-latest directory looks like:

<div class="vspace">

</div>

<div id="sourceblock3" class="sourceblock">

<div class="sourceblocktext">

<div class="text">

lrwxrwxrwx 1 tamara tamara    25 Feb  9 13:43 cookbook -\>
/var/www/newfarm/cookbook\
 drwxr-sr-x 2 tamara tamara  4096 Jan  7 07:26 docs\
 lrwxrwxrwx 1 tamara tamara    22 Feb  9 13:43 local -\>
/var/www/newfarm/local\
 -rwxr-xr-x 1 tamara tamara 86008 Jan  7 06:34 pmwiki.php\
 lrwxrwxrwx 1 tamara tamara    20 Feb  9 13:43 pub -\>
/var/www/newfarm/pub\
 -rw-r--r-- 1 tamara tamara  1992 Jun  2  2006 README.txt\
 drwxr-sr-x 2 tamara tamara  4096 Jan  7 07:26 scripts\
 drwxr-sr-x 2 tamara tamara  4096 Jan  7 07:26 wikilib.d

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.PmWikiFarms?action=sourceblock&num=3)

</div>

</div>

The `farmconfig.php` file resides in `/var/www/newfarm/local`:

<div class="vspace">

</div>

<div id="sourceblock4" class="sourceblock">

<div class="sourceblocktext">

<div class="php">

1.  <div class="de1">

    <span class="kw2">\<?php</span> <span class="kw1">if</span><span
    class="br0">(</span><span class="sy0">!</span><span
    class="kw3">defined</span><span class="br0">(</span><span
    class="st_h">'PmWiki'</span><span class="br0">)</span><span
    class="br0">)</span> <span class="kw3">exit</span><span
    class="br0">(</span><span class="st0">"Must be run inside
    PmWiki"</span><span class="br0">)</span><span class="sy0">;</span>

    </div>

2.  <div class="de1">

    <span class="re0">\$FarmPubDirUrl</span> <span class="sy0">=</span>
    <span class="st_h">'/pub/'</span><span class="sy0">;</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.PmWikiFarms?action=sourceblock&num=4)

</div>

</div>

And that `pub` directory is made server-accessible via another symlink:

<div class="vspace">

</div>

<div id="sourceblock5" class="sourceblock">

<div class="sourceblocktext">

<div class="text">

lrwxrwxrwx 1 tamara tamara 20 Feb  9 12:54 /var/www/htdocs/pub -\>
/var/www/newfarm/pub

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.PmWikiFarms?action=sourceblock&num=5)

</div>

</div>

Okay, we are go for farming!

<div class="vspace">

</div>

Two areas needed: Server-Accessible and Server-Inaccessible
-----------------------------------------------------------

In my testing, I made two directories:

1.  `~/public_html/testfield/`
2.  `~/testfield.data/`

<div class="vspace">

</div>

### Directory 1

`testfield`, is the document root for the wiki field and contains:

<div id="sourceblock6" class="sourceblock">

<div class="sourceblocktext">

<div class="text">

+-- testfield/\
 |--    inddex.php\
 \`--    local/\
    |--   config.php\
 \`--    pub/

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.PmWikiFarms?action=sourceblock&num=6)

</div>

</div>

<div class="vspace">

</div>

### Directory 2

`testfield.data`, is the area where the wiki's information will actually
be stored, and needs the following directories:

<div class="vspace">

</div>

<div id="sourceblock7" class="sourceblock">

<div class="sourceblocktext">

<div class="text">

+-- testfield.data/\
 \`-- local/\
    |-- config.php\
 \`-- wiki.d/\
 \`-- wikilib.d/\
 \`-- workdir/

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.PmWikiFarms?action=sourceblock&num=7)

</div>

</div>

Setting permissions so the server can write to the `wiki.d`,
`wikilib.d`, and `workdir` are crucial. I set the permission to 775, and
set the owner to the user the server is running at (e.g., www-data under
the default Ubuntu Apache install). At the end, the `testfield.data`
directory looks like:

<div class="vspace">

</div>

<div id="sourceblock8" class="sourceblock">

<div class="sourceblocktext">

<div class="text">

drwxrwsr-x 2 tamara   tamara 4096 Feb  9 11:47 local\
 drwxrwsr-x 2 www-data tamara 4096 Feb  9 14:16 wiki.d\
 drwxrwsr-x 2 www-data tamara 4096 Feb  9 10:38 wikilib.d\
 drwxrwsr-x 2 www-data tamara 4096 Feb  9 14:16 workdir

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.PmWikiFarms?action=sourceblock&num=8)

</div>

</div>

If you want to make them safer even on the server, you can set
permissions to 770, but make sure that www-data (or equivalent) has
read/execute permission to the local directory as well.

<div class="vspace">

</div>

<div class="round lrindent nutshell">

Under lightttpd or nginx, this permission stuff becomes an non-issue, as
php-fpm runs under the file owner's permissions.

</div>

<div class="vspace">

</div>

Now comes the magic!!
---------------------

The whole thing rides on resetting a few standard pmwiki variables:

<div class="vspace">

</div>

-   [\$WikiDir](http://www.pmwiki.org/wiki/PmWiki/PathVariables#WikiDir) --
    sets the page store for this wikifield (aka, `wiki.d`)
-   [\$WikiLibDirs](http://www.pmwiki.org/wiki/PmWiki/PathVariables#WikiLibDirs) --
    sets the array of page stores in which to find wiki pages
-   [\$WorkDir](http://www.pmwiki.org/wiki/PmWiki/PathVariables#WorkDir) --
    sets the working directory for the field.

Here's the field's local config file: `testfield/local/config.php` with
the appropriate settings:

<div class="vspace">

</div>

<div id="sourceblock9" class="sourceblock">

<div class="sourceblocktext">

<div class="php">

1.  <div class="de1">

    <span class="kw2">\<?php</span> <span class="kw1">if</span> <span
    class="br0">(</span><span class="sy0">!</span><span
    class="kw3">defined</span><span class="br0">(</span><span
    class="st_h">'PmWiki'</span><span class="br0">)</span><span
    class="br0">)</span> <span class="kw3">exit</span><span
    class="br0">(</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

2.  <div class="de1">

    <span class="co1">// field config.php -- This is the file that goes
    in the field's local directory.</span>

    </div>

3.  <div class="de1">

    <span class="co1">// It sets up the storage to look at another
    directory outside of the docroot</span>

    </div>

4.  <div class="de1">

    <span class="co1">// See
    http://www.tamaratemple.com/Technology/PmWikiFarms for more
    info.</span>

    </div>

5.  <div class="de2">

    <span class="re0">\$FieldD</span> <span class="sy0">=</span> <span
    class="st0">"/path/to/testfield.data"</span><span
    class="sy0">;</span>

    </div>

6.  <div class="de1">

    <span class="re0">\$WikiDir</span> <span class="sy0">=</span> <span
    class="kw2">new</span> PageStore<span class="br0">(</span><span
    class="st0">"<span class="es4">\$FieldD</span>/wiki.d/{<span
    class="es1">\\\$</span>FullName}"</span><span
    class="br0">)</span><span class="sy0">;</span>

    </div>

7.  <div class="de1">

    <span class="re0">\$WorkDir</span> <span class="sy0">=</span> <span
    class="st0">"<span class="es4">\$FieldD</span>/workdir/"</span><span
    class="sy0">;</span>

    </div>

8.  <div class="de1">

    <span class="re0">\$WikiLibDir</span> <span class="sy0">=</span>
    <span class="kw3">array</span><span class="br0">(</span><span
    class="sy0">&</span><span class="re0">\$WikiDir</span><span
    class="sy0">,</span>

    </div>

9.  <div class="de1">

                        <span class="kw2">new</span> PageStore<span
    class="br0">(</span><span class="st0">"<span
    class="es4">\$FieldD</span>/wikilib2.d/{<span
    class="es1">\\\$</span>FullName}"</span><span
    class="br0">)</span><span class="sy0">,</span>

    </div>

10. <div class="de2">

                        <span class="kw2">new</span> PageStore<span
    class="br0">(</span><span class="st0">"<span
    class="es4">\$FarmD</span>/wikilib.d/{<span
    class="es1">\\\$</span>FullName}"</span><span
    class="br0">)</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

11. <div class="de1">

    <span class="kw1">include\_once</span><span
    class="br0">(</span><span class="st0">"<span
    class="es4">\$FieldD</span>/local/config.php"</span><span
    class="br0">)</span><span class="sy0">;</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.PmWikiFarms?action=sourceblock&num=9)

</div>

</div>

The last line makes it so the remainder of the field's configuration is
kept out of the docroot as well. Just to show,
`testfield.data/local/config.php` contains:

<div class="vspace">

</div>

<div id="sourceblock10" class="sourceblock">

<div class="sourceblocktext">

<div class="php">

1.  <div class="de1">

    <span class="kw2">\<?php</span> <span class="kw1">if</span> <span
    class="br0">(</span><span class="sy0">!</span><span
    class="kw3">defined</span><span class="br0">(</span><span
    class="st_h">'PmWiki'</span><span class="br0">)</span><span
    class="br0">)</span> <span class="kw3">exit</span><span
    class="br0">(</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

2.  <div class="de1">

    <span class="co2">\#\#  This is a sample config.php file.  To use
    this file, copy it to</span>

    </div>

3.  <div class="de1">

    <span class="co2">\#\#  local/config.php, then edit it for whatever
    customizations you want.</span>

    </div>

4.  <div class="de1">

    <span class="co2">\#\#  Also, be sure to take a look at
    http://www.pmwiki.org/wiki/Cookbook</span>

    </div>

5.  <div class="de2">

    <span class="co2">\#\#  for more details on the types of
    customizations that can be added</span>

    </div>

6.  <div class="de1">

    <span class="co2">\#\#  to PmWiki.</span>

    </div>

7.  <div class="de1">

     

    </div>

8.  <div class="de1">

    <span class="co2">\#\#  \$WikiTitle is the name that appears in the
    browser's title bar.</span>

    </div>

9.  <div class="de1">

    <span class="re0">\$WikiTitle</span> <span class="sy0">=</span>
    <span class="st_h">'TestWikiField'</span><span class="sy0">;</span>

    </div>

10. <div class="de2">

     

    </div>

11. <div class="de1">

    <span class="co2">\#\# ... and so on ...</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.PmWikiFarms?action=sourceblock&num=10)

</div>

</div>

<span id="links"></span>

Links
-----

Great links on pmwiki.org for learning about wiki farming:

-   [PmWiki:WikiFarms](http://www.pmwiki.org/wiki/PmWiki/WikiFarms) --
    the starting point.
-   [PmWiki:WikiFarmsTerminology](http://www.pmwiki.org/wiki/PmWiki/WikiFarmsTerminology) --
    some of the terms are not used consistently throughout the
    documentation; this page should help.
-   [PmWiki:WikiFarmsAdvanced](http://www.pmwiki.org/wiki/PmWiki/WikiFarmsAdvanced)
-   [Cookbook:FarmSetupByExample](http://www.pmwiki.org/wiki/Cookbook/FarmSetupByExample) --
    great tutorial walks you through the setup steps.
-   [Cookbook:WikiFarmAlternative](http://www.pmwiki.org/wiki/Cookbook/WikiFarmAlternative) --
    a rather complex setup to keep your wiki pages, configurations, and
    so on outside the wiki field's root folder (and thus inaccessible to
    browsers).
    -   **N.B.:** This was the path I started down, and abandoned, even
        after redoing it somewhat to fit my own tastes. Pm has provided
        a fantastic way of doing farms without resorting to such
        shenannigans.

<div class="vspace">

</div>

<div style="display: none;">

Summary:Implementing a (more) secure Wiki farm using <span
class="wikiword">[PmWiki](http://wiki.tamouse.org?n=Technology.PmWiki?action=print)</span>
Parent:(Technology.)<span class="wikiword">PmWiki</span> <span
class="wikiword">[IncludeMe](http://wiki.tamouse.org?n=Technology.IncludeMe?action=edit)[?](http://wiki.tamouse.org?n=Technology.IncludeMe?action=edit)</span>:[PmWiki](http://wiki.tamouse.org?n=Technology.PmWiki?action=print)
Categories:[HowTos](http://wiki.tamouse.org?n=Category.HowTos),
[Articles](http://wiki.tamouse.org?n=Category.Articles) Tags: pmwiki,
wiki, wikifarms, pmwikifarms, howtos

</div>

</div>
