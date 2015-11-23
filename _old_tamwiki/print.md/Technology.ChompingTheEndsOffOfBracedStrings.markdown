<div id="wikitext">

<span id="excerpt"></span> I noticed that when there is nothing passed
in an args paramter (a catch-all parameter that sucks up the rest of the
parameters in a proc call), it contains the string "{}". This is an
actual string, not a braced expression. To get rid of those, and to be
able to treat args as a regular string, the following seems to work:

<div class="vspace">

</div>

      [string range $args 1 [expr {[string length $args]-2}]]

<span id="excerptend"></span>

This removes the first character and last character from the string
(strings are basically zero-based).

<div class="vspace">

</div>

</div>
