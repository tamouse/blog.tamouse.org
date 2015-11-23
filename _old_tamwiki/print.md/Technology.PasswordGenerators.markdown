<div id="wikitext">

Here's a little one-liner in bash to generate a strong password (works
on linux and os x systems, at least:

<div class="vspace">

</div>

<div id="sourceblock1" class="sourceblock">

<div class="sourceblocktext">

<div class="bash">

1.  <div class="de1">

    <span class="kw2">cat</span> <span class="sy0">/</span>dev<span
    class="sy0">/</span>urandom <span class="sy0">|</span> <span
    class="kw2">strings</span> <span class="sy0">|</span> <span
    class="kw2">grep</span> <span class="re5">-o</span> <span
    class="st_h">'[[:alnum:]!@%\_-+=., ]'</span> <span
    class="sy0">|</span> <span class="kw2">head</span> <span
    class="re5">-n</span> <span class="nu0">15</span> <span
    class="sy0">|</span> <span class="kw2">tr</span> <span
    class="re5">-d</span> <span class="st_h">'\\n'</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.PasswordGenerators?action=sourceblock&num=1)

</div>

</div>

generates a password that looks like:

<div class="vspace">

</div>

``` {.escaped}
 oJhh!j0bNAiZNDa
```

</div>
