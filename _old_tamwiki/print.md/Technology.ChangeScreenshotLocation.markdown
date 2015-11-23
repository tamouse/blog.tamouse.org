<div id="wikitext">

From: [OSX
Daily](http://osxdaily.com/2011/01/26/change-the-screenshot-save-file-location-in-mac-os-x/)

<div class="vspace">

</div>

Change the Screenshot Save File Location in Mac OS X
----------------------------------------------------

Mac OS X, Tips & Tricks - January 26th, 2011

<span id="excerpt"></span> By default, anytime you take a screen capture
in Mac OS X it will save the screenshot file to the current users
desktop. You can adjust where Mac OS X saves a captured screenshot to
any other location, here is how to do this: <span
id="excerptend"></span>

Launch Terminal and use the following syntax:

<div class="vspace">

</div>

      defaults write com.apple.screencapture location /path/

For example, if I want to have the screenshots appear in my Pictures
folder, I would use:

<div class="vspace">

</div>

      defaults write com.apple.screencapture location ~/Pictures/

To have the changes take effect, you then must type:

<div class="vspace">

</div>

      killall SystemUIServer

So the next time you take a screenshot (or as Windows converts like to
say, Print Screen on a Mac), the screenshot file will appear at the
location you specified.

You can change the saved screenshot location back to the default setting
by specifying the desktop again:

<div class="vspace">

</div>

      defaults write com.apple.screencapture location ~/Desktop/

Again, you??d need to kill SystemUIServer for changes to take effect.

<div class="vspace">

</div>

</div>
