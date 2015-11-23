<div id="wikitext">

<div class="round lrindent checkblack">

The following is taken from a write-up I made at [the PmWiki
site](http://www.pmwiki.org/wiki/PmWiki/BackupAndRestore) discussing how
to use rsync to effectively back up only the portions of the wiki you
are interested in using the `--exclude-from`{.escaped} tag and an
exclude file.

</div>

<div class="vspace">

</div>

Using rsync
-----------

<span id="excerpt"></span> `rsync`{.escaped} is an extremely useful
solution to backing up files to or from a remote location, provided you
have ssh access to the remote machine. The rsync man page lists tons of
options and examples for doing this well. <span id="excerptend"></span>

A simple example of using rsync to replicate your wiki:

<div class="vspace">

</div>

<div id="sourceblock1" class="sourceblock">

<div class="sourceblocktext">

<div class="bash">

<span class="co4">\$ </span>rsync <span class="re5">-av</span> user<span
class="sy0">@</span>server:path<span class="sy0">/</span>to<span
class="sy0">/</span>wiki<span class="sy0">/</span> local<span
class="sy0">/</span>path<span class="sy0">/</span>to<span
class="sy0">/</span>backup

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.RsyncBackups?action=sourceblock&num=1)

</div>

</div>

This will bring over **everything**, including the pmwiki software and
such, which you probably don't really need in a backup situation.

<div class="vspace">

</div>

Inclusions and Exclusions: rsync filtering
------------------------------------------

Luckily, rsync let's you include and exclude things by using an
`--exclude-from` parameter that you can drop file glob patterns into.

It's a bit arcane, and the man page is less than helpful, but I've come
up with a set of filter rules that seem to work for backing up the
important content of your wiki.

Create a file called, say, `exclusions`, and fill it with:

``` {.escaped}
    # Exclude stuff from pmwiki except some
    + /cookbook/
    + /wiki.d/
    - /wiki.d/.flock
    - /wiki.d/.pageindex
    - /wiki.d/.lastmod
    - /wiki.d/*,del-*
    - /wiki.d/*/*,del-*
    + /pub/
    + /local/
    + /uploads/
    - /*
    - **~
    - **,v
    - **.bak
    - **.tgz
    - **.zip
    - **.gz
    - **.Z
```

This will allow the files matching include patters (prefix "+") and
prevent the files matching exclude patterns (prefix "-") from being
included in the rsync. Note well that the include patterns need to come
before the exclude patterns. Here's what's going on above:

<div class="vspace">

</div>

  ------------------------ -----------------------------------------------------------------------------------------------------------------------
  `+ /cookbook/`           include the cookbook directory at the top level of the directory tree (i.e. if cookbook reappears in a subdirectory).
  `+ /wiki.d/`             include the wiki.d directory, again at the top level only
  `- /wiki.d/.flock`       **ex**clude the .flock file under wiki.d
  `- /wiki.d/.pageindex`   exclude the .pageindex
  `- /wiki.d/.lastmod`     exclude .lastmod
  `- /wiki.d/*,del-*`      exclude deleted pages
  `- /wiki.d/*/*,del-*`    exclude deleted pages in a Group direcotry setting
  `+ /pub/`                include the pub directory
  `+ /local/`              include the local directory
  `+ /uploads/`            include the uploads directory
  `- /*`                   exclude all other directories and files in root.
  ------------------------ -----------------------------------------------------------------------------------------------------------------------

This last line here is really the key to the whole thing. If you don't
have this line, you'll still get most everything in the installation. It
basically says "exclude everything else from here".

What follows are more miscelaneous matching patterns for various kinds
of files that may appear in the included directories up above.

<div class="vspace">

</div>

  ------------ -------------------------------------------------------------------------------------
  `- **~`      typical editor backupt file, such as emacs. the double star means match everything.
  `- **,v`     RCS vault file
  `- **.bak`   another type of backup file, usually from filters
  `- **.tgz`   tarballs, generally don't want to include those in your personal arvhive.
  `- **.zip`   zip files, similar to tarballs
  `- **.gz`    gzipped files, frequently tarballs are ended .tar.gz
  `- **.Z`     compressed files
  ------------ -------------------------------------------------------------------------------------

*(Note: you may have good reason **not** to exclude some of the types of
files I've shown above. Feel free to modify the above list; add and
subtract entries as needed.)*

Once you have your exclude file set up, then run the following command:

<div class="vspace">

</div>

<div id="sourceblock2" class="sourceblock">

<div class="sourceblocktext">

<div class="bash">

<span class="co4">\$ </span>rsync <span class="re5">-av</span> <span
class="re5">--exclude-from</span>=exclusions user<span
class="sy0">@</span>server:path<span class="sy0">/</span>to<span
class="sy0">/</span>wiki local<span class="sy0">/</span>path<span
class="sy0">/</span>to<span class="sy0">/</span>backup

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.RsyncBackups?action=sourceblock&num=2)

</div>

</div>

<div class="vspace">

</div>

Testing your download before doing it
-------------------------------------

Rsync has a nice parameter, `--dry-run`, which lets you see what it's
going to do before you commit to the download. This is great for
checking yout inclusions and exclusions to make sure nothing comes over
that you don't want.

<div class="vspace">

</div>

Further
-------

There are many more options to rsync that can make it the ideal backup
solution, including making incremental and full backups, etc.

<div class="vspace">

</div>

Important to remember
---------------------

Just keep in mind the 3 most important things:

<div class="vspace">

</div>

<div class="round lrindent important2" style="text-align: center;">

1.  BACKUP!
2.  BACKUP!
3.  BACKUP!

</div>

<div class="vspace">

</div>

</div>
