<div id="wikitext">

<div style="display: none;">

Summary:Turning off annoying Press-and-Hold featurette
Parent:(Technology.)OSX <span
class="wikiword">[IncludeMe](http://wiki.tamouse.org?n=Technology.IncludeMe?action=edit)[?](http://wiki.tamouse.org?n=Technology.IncludeMe?action=edit)</span>:[OSX](http://wiki.tamouse.org?n=Technology.OSX?action=print)
Categories:[Articles](http://wiki.tamouse.org?n=Category.Articles),
[HowTos](http://wiki.tamouse.org?n=Category.HowTos),
[Technology](http://wiki.tamouse.org?n=Category.Technology) Tags: apple,
mountain lion, osx, press and hold feature, defaults

</div>

In the latest revision of Mountain Lion (it may have showed up earlier,
but I just noticed it now), instead of getting a key repeated when you
hold it down, a little menu pops with alternate characters (accents
chars, etc) to select instead of the one you just typed.

If you really don't like this behaviour, you can change it by entering
the following into a Terminal.app window:

<div class="vspace">

</div>

<div id="sourceblock1" class="sourceblock">

<div class="sourceblocktext">

<div class="bash">

defaults <span class="kw2">write</span> <span class="re5">-g</span>
ApplePressAndHoldEnabled <span class="re5">-bool</span> <span
class="kw2">false</span>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.ChangePressAndHoldBehaviourInOSXMountainLion?action=sourceblock&num=1)

</div>

</div>

To reverse it and restore the press and hold feature, simply flip the
false to true above:

<div class="vspace">

</div>

<div id="sourceblock2" class="sourceblock">

<div class="sourceblocktext">

<div class="bash">

defaults <span class="kw2">write</span> <span class="re5">-g</span>
ApplePressAndHoldEnabled <span class="re5">-bool</span> <span
class="kw2">true</span>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.ChangePressAndHoldBehaviourInOSXMountainLion?action=sourceblock&num=2)

</div>

</div>

<div class="vspace">

</div>

</div>
