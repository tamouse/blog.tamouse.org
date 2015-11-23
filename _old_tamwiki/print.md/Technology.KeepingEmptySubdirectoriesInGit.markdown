<div id="wikitext">

<span id="excerpt"></span> Normally,
[Git](http://wiki.tamouse.org?n=Technology.Git?action=print) does not
track empty subdirectories. This is a method to make sure they are
included. <span id="excerptend"></span>

<div class="vspace">

</div>

The Problem:
------------

Git does not add empty subdirectories to the tree when doing a
`git add --all` or `git commit -a`. This is sometimes a problem where
you want to create a package that will have directories defined, but may
not be filled in until after the package is installed somewhere.

<div class="vspace">

</div>

One Solution:
-------------

A convention has emerged to place a file called `.gitkeep` in the
subdirectory. This file has no meaning to git, it is merely a place
holder that forces git to add the subdirectory to the tree.

<div class="vspace">

</div>

A Better Solution:
------------------

A *better* option, I feel, is to add a `README` file to the subdirectory
with a bit of explanation as to what the purpose of the subdirectory is.
This docments to the user what to expect in the subdirectory.

<div class="vspace">

</div>

<div style="display: none;">

Summary:Making sure empty subdirectories are loaded into the Git tree
Parent:(Technology.)Git <span
class="wikiword">[IncludeMe](http://wiki.tamouse.org?n=Technology.IncludeMe?action=edit)[?](http://wiki.tamouse.org?n=Technology.IncludeMe?action=edit)</span>:[Git](http://wiki.tamouse.org?n=Technology.Git?action=print)
Categories:[Articles](http://wiki.tamouse.org?n=Category.Articles) Tags:
git, empty subdirectories

</div>

</div>
