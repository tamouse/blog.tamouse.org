<div id="wikitext">

Oh, the `remind` program, how I love and loathe thee. Remind is a
program that is used to remind you of appointments, holidays, and the
like, and can be used to generate appointment calendars. It's a farily
nifty program, but the syntax is rather horrendous.

<div class="vspace">

</div>

Obtaining and installing remind
-------------------------------

You can obtain remind from
<http://www.roaringpenguin.com/products/remind>, who now supports it.
Installation is simple, it's very self-contained.

<div class="vspace">

</div>

Ecosystem
---------

There's a remind mailing list at
:   <http://lists.roaringpenguin.com/cgi-bin/mailman/listinfo/remind-fans>

There is also a remind wiki at
:   <http://www.roaringpenguin.com/wiki/index.php/Remind>

<div class="vspace">

</div>

Using remind
------------

Remind reads a `.rem` file, alternatively, it can read a directory of
`.rem` files. The command line is basically:

<div class="vspace">

</div>

``` {.escaped}
  remind [OPTIONS] filename [date] [*rep] [time]
```

*filename* can either be a single file, or a directory, of which only
the files ending in `.rem` will be read.

Things like birthdays and holidays are very simple to do in remind:

<div class="vspace">

</div>

``` {.escaped}
  REM 13 December MSG Dad's Birthday!
```

Remind has this somewhat annoying feature that every message it spits
out has an extra line feed. To avoid this, place a percent (%) sign at
the end of the message:

<div class="vspace">

</div>

``` {.escaped}
  REM 13 December MSG Dad's Birthday! %
```

<div class="vspace">

</div>

### Something a little more advanced:

``` {.escaped}
  REM 13 SATISFY [wkdaynum($T) == 5] MSG Happy Triskaidekaphilia Day!%
```

`SATISFY` is used to determine whether to fire the reminder based on
some characteristics other than the actual trigger date. The above only
fires when the 13th falls on a Friday (weekday number 5).

<div class="vspace">

</div>

Collections of remind files
---------------------------

I have been keeping a collection of remind files as a git repository at
<https://gitorious.org/nix-utilities/remind-files> which includes at
least one file you really want to have: `00-defs.rem` as this sets up
several useful and interesting definitions that can be used in your
reminder recipes.

<div class="vspace">

</div>

Making your .rem files available everywhere
-------------------------------------------

I work on several different computers and portable devices. The simplest
way to keep all these computers in sync with the same remind files is to
use something like [Dropbox](http://dropbox.com) and putting your .rem
files in a directory in your `~/Dropbox` directory. They you just point
the `remind` command at that directory:

<div class="vspace">

</div>

``` {.escaped}
  remind [options] ~/Dropbox/Reminders
```

and Bob's your Uncle.

<div class="vspace">

</div>

<div style="display: none;">

Summary:An event reminder tool for Linux Parent:(Technology.)Tools
includeme:[Tools](http://wiki.tamouse.org?n=Technology.Tools?action=print)
Categories:[Articles](http://wiki.tamouse.org?n=Category.Articles) Tags:
reminders, calendars, hard landscape

</div>

</div>
