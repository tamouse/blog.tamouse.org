<div id="wikitext">

Getting pop-up notifications on various platforms
-------------------------------------------------

At the suggestion of the remind author, I set up remind to use something
that can be defined separately for each platform, but called the same in
the remind file.

David's suggestion was to write a script that could be called for each
platform:

<div id="sourceblock1" class="sourceblock">

<div class="sourceblocktext">

<div class="email">

On Fri, Apr 06, 2012 at 02:08:55PM -0400, David F. Skoll wrote:\
 \> On Fri, 6 Apr 2012 12:49:29 -0500\
 \> tamouse mailing lists wrote:\
 \>\
 \>\> I'd like to be able to have a conditional that determines which
OS\
 \>\> is running (possibly by querying uname) and set the program in
the\
 \>\> reminder file itself. Any suggestions as to how I might do this?\
 \>\
 \> Wouldn't it be easier to write a little shell script called\
 \> "popup-reminder" or something and have that call the appropriate\
 \> program on each system?  The Linux "popup-reminder" would call the
Linux\
 \> program and the Mac OS one would call the Mac OS program.\
 \>\
 \> Then in your Reminders file, you just use:\
 \>\
 \> REM ... RUN /usr/local/bin/popup-reminder ...\
 \>\
 \> Regards,\
 \> David.

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.RemindGettingPopupsOnDifferentPlatforms?action=sourceblock&num=1)

</div>

</div>

This solution would probably work, but I was a bit reluctant to put
something in a global directory *(I don't know **why** exactly -- I'm
the only user on both systems.)* so instead I used an
[envar](http://en.wikipedia.org/wiki/Environment_variable) to give the
shell command to execute for the popup.

<div class="vspace">

</div>

NOTIFY Enironment Variable
--------------------------

NOTIFY is an [environment
variable](http://en.wikipedia.org/wiki/Environment_variable) that
contains a string for a shell command to execute to pop up the reminder.

On Ubuntu, the NOTIFY command that works best is:

         NOTIFY='/usr/bin/notify-send -t 0 REMINDER'

On Mac, the NOTIFY command should be:

         NOTIFY='/usr/local/bin/growlnotify --sticky --message'

For this to work the entire message must be quoted

On non-Ubuntu linuxen or other unixen with X Windows, you can probably
gin something up with xmessage:

         NOTIFY='/usr/bin/xmessage -center'

Best place to set this is in your `$HOME/.profile`.

<div class="vspace">

</div>

<div class="round lrindent important2">

DON'T FORGET TO EXPORT NOTIFY.

</div>

To use this feature, run remind in server-mode:

<div class="vspace">

</div>

      remind -z <remind-files> &

(Include the & to send it to the background.)

<div class="vspace">

</div>

Creating events that use the pop-up
-----------------------------------

The way the RUN directive works, however, means you effectively have to
put the event in twice:

1.  so it shows up in the regular run of remind -q (no events)
2.  so it can be used to run a pop-up notification using the \$NOTIFY
    envar

In your .rem file, create an event as follows:

<div class="vspace">

</div>

<div id="sourceblock2" class="codeblock">

<div class="codeblocktext">

    REM <datespec> MSG '<reminder text>'
    REM <datespec> AT <timespec> RUN $NOTIFY '<reminder text>'

</div>

<div class="codeblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.RemindGettingPopupsOnDifferentPlatforms?action=sourceblock&num=2)

</div>

</div>

For example:

<div id="sourceblock3" class="codeblock">

<div class="codeblocktext">

    REM 8 Sep 2012 MSG Doctor Appointment at 2:30pm
    REM 8 Sep 2012 AT 14:30 +1 RUN $NOTIFY 'Doctor Appointment at 2:20pm'

</div>

<div class="codeblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.RemindGettingPopupsOnDifferentPlatforms?action=sourceblock&num=3)

</div>

</div>

<div class="vspace">

</div>

<div class="round lrindent important2">

Keep the reminder text quoted so that it ends up being one shell
parameter when the \$NOTIFY command is called. This is due to the way
growlnotify works on os/x.

</div>

<div class="vspace">

</div>

<div style="display: none;">

Summary:Different platforms have different programs to display a pop-up
message, Growl on the Mac, D-Sub on Ubuntu, others on other nixen. This
describes a technique to make the remind files agnostic, yet giving the
capability to the user to handle this Parent:(Technology.)Remind <span
class="wikiword">[IncludeMe](http://wiki.tamouse.org?n=Technology.IncludeMe?action=edit)[?](http://wiki.tamouse.org?n=Technology.IncludeMe?action=edit)</span>:[Remind](http://wiki.tamouse.org?n=Technology.Remind?action=print)
Categories:[Articles](http://wiki.tamouse.org?n=Category.Articles),[HowTos](http://wiki.tamouse.org?n=Category.HowTos)
Tags: remind, cross-platform, tools

</div>

</div>
