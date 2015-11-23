<div id="wikitext">

Show Hidden Files on your Mac
-----------------------------

Launch the Terminal and enter these commands exactly as shown. The first
command activates the ability to see the hidden files:

<div class="vspace">

</div>

<div id="sourceblock1" class="sourceblock">

<div class="sourceblocktext">

<div class="bash">

defaults <span class="kw2">write</span> com.apple.Finder
AppleShowAllFiles TRUE

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.ViewingHiddenFilesInOSX?action=sourceblock&num=1)

</div>

</div>

Now you must relaunch the Finder by killing it, this is how the changes
take effect:

<div class="vspace">

</div>

<div id="sourceblock2" class="sourceblock">

<div class="sourceblocktext">

<div class="bash">

<span class="kw2">killall</span> Finder

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.ViewingHiddenFilesInOSX?action=sourceblock&num=2)

</div>

</div>

If you want to hide hidden files again (those preceded with a .) and go
back to the default Mac settings, you can just type the following:

<div class="vspace">

</div>

<div id="sourceblock3" class="sourceblock">

<div class="sourceblocktext">

<div class="bash">

defaults <span class="kw2">write</span> com.apple.Finder
AppleShowAllFiles FALSE

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.ViewingHiddenFilesInOSX?action=sourceblock&num=3)

</div>

</div>

Again you will need to kill the Finder so that it can relaunch for
changes to take effect:

<div class="vspace">

</div>

<div id="sourceblock4" class="sourceblock">

<div class="sourceblocktext">

<div class="bash">

<span class="kw2">killall</span> Finder

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.ViewingHiddenFilesInOSX?action=sourceblock&num=4)

</div>

</div>

That??s all there is to it!

<div class="vspace">

</div>

Show Hidden Files in a Mac Save Dialogue
----------------------------------------

You can quickly show all hidden files in any Mac OS X save dialogue box
by hitting Command+Shift+Period

<div class="vspace">

</div>

<div style="display: none;">

Summary:How to see dot (hidden) files in OX/X Parent:(Technology.)OSX
includeme:[Technology.OSX](http://wiki.tamouse.org?n=Technology.OSX?action=print)
Categories:[HowTos](http://wiki.tamouse.org?n=Category.HowTos) Tags:
hidden files, osx, finder Source:
<http://osxdaily.com/2009/02/25/show-hidden-files-in-os-x/>

</div>

</div>
