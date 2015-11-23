<div id="wikitext">

<span id="excerpt"></span>
[Tcl](http://wiki.tamouse.org?n=Technology.TclTk?action=print) is very
finicky about where things are placed. Unlike other programming
languages, location and white space seem to make a big difference to
Tcl. <span id="excerptend"></span>

For example, compare the brace placement on this snippet:

<div class="vspace">

</div>

<div id="sourceblock1" class="sourceblock">

<div class="sourceblocktext">

<div>

1.  proc ::testegg::msg\_test {nick userhost hand text}
2.  {
3.  set msg "nick=\$nick. userhost=\$userhost. hand=\$hand. text=\$text"
4.  putcmdlog [concat "testegg: " \$msg]
5.  putserv [concat "PRIVMSG " \$nick " :" \$msg]
6.  return 1
7.  }

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.AlwaysLeaveTheBodyBraceOnTheSameLineAsTheProc?action=sourceblock&num=1)

</div>

</div>

to the brace placement on this one:

<div class="vspace">

</div>

<div id="sourceblock2" class="sourceblock">

<div class="sourceblocktext">

<div>

1.  proc ::testegg::msg\_test {nick userhost hand text} {
2.  set msg "nick=\$nick. userhost=\$userhost. hand=\$hand. text=\$text"
3.  putcmdlog [concat "testegg: " \$msg]
4.  putserv [concat "PRIVMSG " \$nick " :" \$msg]
5.  return 1
6.  }

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.AlwaysLeaveTheBodyBraceOnTheSameLineAsTheProc?action=sourceblock&num=2)

</div>

</div>

The first example will fail, because Tcl wants the body opening brace to
be on the same line as the proc command.

I think it took me about 3 hours to figure that out...

<div class="vspace">

</div>

</div>
