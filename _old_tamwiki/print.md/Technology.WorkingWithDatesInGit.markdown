<div id="wikitext">

<div class="vspace">

</div>

Working with dates in Git
=========================

<div class="frame rfloat">

### About the author

Alex Peattie is a freelance web developer & designer based in the UK.
He's currently available for hire, so [get in
touch](http://www.alexpeattie.com/contact/).

<div class="vspace">

</div>

### Get in touch

<span class="_deob"><span class="_t">Email Alex</span> -\> <span
class="_m">mailto:alexpeattie<span class="_a"> [snail] </span>gmail<span
class="_d"> [period] </span>com</span></span>\
[Follow Alex on Twitter](http://twitter.com/alexpeattie)\
[Follow Alex on Github](https://github.com/alexpeattie)

</div>

When working in [git](http://git-scm.com/), you most commonly trace a
repository??s history using commits?? SHA-1 hashes. To revert to a
previous commit, you might write something like this:

<div class="vspace">

</div>

<div id="sourceblock1" class="sourceblock">

<div class="sourceblocktext">

<div class="bash">

<span class="kw2">git revert</span> 883c3dc85a49d98da649

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.WorkingWithDatesInGit?action=sourceblock&num=1)

</div>

</div>

The problem is, we tend not to think in hashes. Rather, we wonder what
changes we made *yesterday*, or remember that a now-broken piece of code
worked perfectly *a week ago*. Although we can use `git log` to track
down the commit we want, there has to be an easier way. Luckily git
understands our human quirks, and offers us just that.

<div class="vspace">

</div>

Understanding dates in Git: author date vs. committer date & ??approxidate??
----------------------------------------------------------------------------

There are two kinds of timestamp in git: a `GIT_AUTHOR_DATE` and a
`GIT_COMMITTER_DATE`. Although in most cases they both store the same
value, they serve slightly different purposes. As the [Pro Git
Book](http://progit.org/book/ch2-3.html) explains:

<div class="vspace">

</div>

<div class="indent">

The author is the person who originally wrote the work, whereas the
committer is the person who last applied the work.

</div>

So if, for instance, you send in a patch to a project, the author date
will be when you made the original commit but the committer date will be
when the patch was applied. Another common scenario is rebasing:
rebasing will alter the commit date, but not the author date.

This distinction is worth mentioning because of an inconsistency in git
that [Carl Worth points out](http://cworth.org/hgbook-git/tour/):

<div class="vspace">

</div>

<div class="indent">

By default, ??git log?? displays author dates as ??Date?? but then uses
commit dates when given a ??since option. That seems like broken
defaults to me.

</div>

In other words, all the methods listed below rely on the committer date,
even though you??re used to seeing the author date. As mentioned, most
of the time they??ll be the same, but to see committer dates in the log
just use:

<div class="vspace">

</div>

<div id="sourceblock2" class="sourceblock">

<div class="sourceblocktext">

<div class="bash">

<span class="kw2">git log</span> <span
class="re5">--format</span>=fuller

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.WorkingWithDatesInGit?action=sourceblock&num=2)

</div>

</div>

<div class="vspace">

</div>

#### Date parsing with ??approxidate??

Git employs a kind of date parsing which will be familiar to any
rubyists who??ve used [Chronic](http://chronic.rubyforge.org/). The
parser, called ??approxidate?? is very flexible, and allows both fixed
dates in any format you can dream up (??10-11-1998??, ??Fri Jun 4
15:46:55 2010 +0200??, ??9/9/83??) and relative dates (??today??, ??1
month 2 days ago??, ??six minutes ago??). You can include days of the
week (??last Tuesday??), timezones (??3PM GMT??) and ??named?? times
(??noon??, ??tea time??).

Approxidate isn??t really documented anywhere, but the [code for the
parser](https://github.com/git/git/blob/master/date.c) is very readable,
so check it out to get an idea of the kind of formats git will accept.

<div class="vspace">

</div>

log, whatchanged, ??since and ??until
-------------------------------------

OK, so how about if we want to look at all the commits made since
yesterday? All we need is the `--since` option:

<div class="vspace">

</div>

<div id="sourceblock3" class="sourceblock">

<div class="sourceblocktext">

<div class="bash">

<span class="kw2">git log</span> <span class="re5">--since</span>=<span
class="st0">"yesterday"</span>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.WorkingWithDatesInGit?action=sourceblock&num=3)

</div>

</div>

We can also use `--until` to fetch all commits up to a certain date; or
of course we can use both options in tandem:

<div class="vspace">

</div>

<div id="sourceblock4" class="sourceblock">

<div class="sourceblocktext">

<div class="bash">

<span class="kw2">git log</span> <span class="re5">--since</span>=<span
class="st0">"1 week ago"</span> <span class="re5">--until</span>=<span
class="st0">"yesterday"</span>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.WorkingWithDatesInGit?action=sourceblock&num=4)

</div>

</div>

`--since` and `--until` can also be used with `whatchanged`.

<div class="vspace">

</div>

<div id="sourceblock5" class="sourceblock">

<div class="sourceblocktext">

<div class="bash">

<span class="kw2">git whatchanged</span> <span
class="re5">--since</span>=<span class="st0">"1/1/2010"</span>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.WorkingWithDatesInGit?action=sourceblock&num=5)

</div>

</div>

Worth noting: instead of `--until` and `--since` you can use `--before`
and `--after`, if that??s more your style.

<div class="vspace">

</div>

revert, diff and the @ construct
--------------------------------

Not all git commands have options like `--since` and `--until`. So what
if we wanted to revert back to our repo as it was a month ago? Luckily
git provides us with a more generic way to reference commits using
dates, with the @ construct:

<div class="vspace">

</div>

<div id="sourceblock6" class="sourceblock">

<div class="sourceblocktext">

<div class="bash">

<span class="kw2">git revert</span> master<span
class="sy0">@</span><span class="br0">{</span><span class="st0">"1 month
ago"</span><span class="br0">}</span>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.WorkingWithDatesInGit?action=sourceblock&num=6)

</div>

</div>

(where master is the name of the branch you??re working on).

This lets us do clever things, like:

<div class="vspace">

</div>

<div id="sourceblock7" class="sourceblock">

<div class="sourceblocktext">

<div class="bash">

<span class="kw2">git diff</span> master<span class="sy0">@</span><span
class="br0">{</span><span class="st0">"yesterday"</span><span
class="br0">}</span> master<span class="sy0">@</span><span
class="br0">{</span><span class="st0">"1 year 6 months ago"</span><span
class="br0">}</span>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.WorkingWithDatesInGit?action=sourceblock&num=7)

</div>

</div>

which will compare the repo as it was yesterday, and as it was 1 year, 6
months ago.

<div class="vspace">

</div>

Change history: amending and editing dates
------------------------------------------

There might be certain situations where you want to alter the timestamps
git assigns to commits. There are a couple of ways that you can do this.

<div class="vspace">

</div>

#### Use `--date`

The `--date` option allows you to specify the author date that git
attaches to the commit. Here we can??t use approxidate unfortunately,
only fixed dates will work (YYYY.MM.DD, MM/DD/YYYY, DD.MM.YYYY, [RFC
2822](http://www.apps.ietf.org/rfc/rfc2822.html#sec-3.3) and [ISO
8601](http://en.wikipedia.org/wiki/ISO_8601) are all valid).

<div class="vspace">

</div>

<div id="sourceblock8" class="sourceblock">

<div class="sourceblocktext">

<div class="bash">

<span class="kw2">git commit</span> <span
class="re5">--date</span>=<span class="st0">"Wed Feb 16 14:00
2037 +0100"</span>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.WorkingWithDatesInGit?action=sourceblock&num=8)

</div>

</div>

We can also use `amend` to change the timestamp of a previous commit:

<div class="vspace">

</div>

<div id="sourceblock9" class="sourceblock">

<div class="sourceblocktext">

<div class="bash">

<span class="kw2">git commit</span> <span class="re5">--amend</span>
<span class="re5">--date</span>=<span class="st0">"Wed Feb 16 14:00
2037 +0100"</span>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.WorkingWithDatesInGit?action=sourceblock&num=9)

</div>

</div>

Unfortunately `--date` will only change the `GIT_AUTHOR_DATE`, not
`GIT_COMMITTER_DATE`. If this is a problem, you may need to??

<div class="vspace">

</div>

#### Manually set `GIT_AUTHOR_DATE` and `GIT_COMMITTER_DATE`

A word of warning - overriding `GIT_COMMITER_DATE` is somewhat [frowned
upon](http://www.kernel.org/pub/software/scm/cogito/docs/cg-commit.1.html):

<div class="vspace">

</div>

<div class="indent">

It should be never overridden, unless you know you absolutely need to
override it (to ensure the commit gets the same ID as another or when
migrating history around)

</div>

<div class="vspace">

</div>

<div id="sourceblock10" class="sourceblock">

<div class="sourceblocktext">

<div class="bash">

<span class="kw3">export</span> <span
class="re2">GIT\_AUTHOR\_DATE</span>=<span class="st0">"Wed Feb 16 14:00
2037 +0100"</span>\
 <span class="kw3">export</span> <span
class="re2">GIT\_COMMITTER\_DATE</span>=<span class="st0">"Wed Feb 16
14:00 2037 +0100"</span>\
 <span class="kw2">git commit</span>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.WorkingWithDatesInGit?action=sourceblock&num=10)

</div>

</div>

The code above will alter both timestamps. Amending a commit in the past
is more tricky, but the
[GitFAQ](https://git.wiki.kernel.org/index.php/GitFaq#How_can_I_tweak_the_date_of_a_commit_in_the_repo.3F)
provides us with a handy bash script:

<div class="vspace">

</div>

<div id="sourceblock11" class="sourceblock">

<div class="sourceblocktext">

<div class="bash">

1.  <div class="de1">

    <span class="co0">\#!/bin/sh</span>

    </div>

2.  <div class="de1">

    <span class="co0">\#</span>

    </div>

3.  <div class="de1">

    <span class="co0">\# Rewrite all branches to modify the date of one
    specific commit in a repo.</span>

    </div>

4.  <div class="de1">

    <span class="co0">\#</span>

    </div>

5.  <div class="de2">

    <span class="co0">\# Sample date format: Fri Jan 2 21:38:53
    2009 -0800</span>

    </div>

6.  <div class="de1">

    <span class="co0">\# ISO8601 and RFC822 dates will also work.</span>

    </div>

7.  <div class="de1">

    <span class="co0">\#</span>

    </div>

8.  <div class="de1">

    <span class="co0">\# Note: filter-branch is picky about the commit
    argument. As of 1.7.0.4,</span>

    </div>

9.  <div class="de1">

    <span class="co0">\# a hex ID will work, the symbolic revision HEAD
    will fail silently,</span>

    </div>

10. <div class="de2">

    <span class="co0">\# and the usability of more exotic rev specs was
    not tested by the author.</span>

    </div>

11. <div class="de1">

    <span class="co0">\#</span>

    </div>

12. <div class="de1">

    <span class="co0">\# Copyright (c) Eric S. Raymond, 2010-08-01. BSD
    terms apply (if anybody really thinks that this</span>

    </div>

13. <div class="de1">

    <span class="co0">\# script is long and non-obvious enough to fall
    under copyright law).</span>

    </div>

14. <div class="de1">

    <span class="co0">\#</span>

    </div>

15. <div class="de2">

    <span class="re2">commit</span>=<span class="st0">"\$1"</span>

    </div>

16. <div class="de1">

    <span class="re2">date</span>=<span class="st0">"\$2"</span>

    </div>

17. <div class="de1">

    <span class="kw2">git filter-branch</span> <span
    class="re5">--env-filter</span> \\

    </div>

18. <div class="de1">

        <span class="st0">"if test <span
    class="es1">\\\$</span>GIT\_COMMIT = '<span
    class="es2">\$commit</span>'</span>

    </div>

19. <div class="de1">

    <span class="st0">     then</span>

    </div>

20. <div class="de2">

    <span class="st0">         export GIT\_AUTHOR\_DATE</span>

    </div>

21. <div class="de1">

    <span class="st0">         export GIT\_COMMITTER\_DATE</span>

    </div>

22. <div class="de1">

    <span class="st0">         GIT\_AUTHOR\_DATE='<span
    class="es2">\$date</span>'</span>

    </div>

23. <div class="de1">

    <span class="st0">         GIT\_COMMITTER\_DATE='<span
    class="es2">\$date</span>'</span>

    </div>

24. <div class="de1">

    <span class="st0">     fi"</span> <span class="sy0">&&</span>

    </div>

25. <div class="de2">

    <span class="kw2">rm</span> <span class="re5">-fr</span> <span
    class="st0">"<span class="es4">\$(git
    rev-parse --git-dir)</span>/refs/original/"</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.WorkingWithDatesInGit?action=sourceblock&num=11)

</div>

</div>

<div class="vspace">

</div>

<div style="display: none;">

Summary: Working with Dates in Git - Alex Peattie Blog Post Tags: git
Source: <http://www.alexpeattie.com/blog/working-with-dates-in-git/>
Parent: (Technology.)Git includeme:
[Technology.Git](http://wiki.tamouse.org?n=Technology.Git?action=print)
Categories:[Articles](http://wiki.tamouse.org?n=Category.Articles)

</div>

Page saved at: Thu, 18 Oct 2012 08:09:19 -0500

<div class="vspace">

</div>

</div>
