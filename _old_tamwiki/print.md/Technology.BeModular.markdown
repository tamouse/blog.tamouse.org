<div id="wikitext">

Introduction
------------

<span id="excerpt"></span> Good software design calls for clean,
well-though-out functions. Keeping functions and procedures small and
modular aids several aspects of a good programming practice. <span
id="excerptend"></span>

<div class="vspace">

</div>

The Issue
---------

I've seen some horrendous code that went on for pages and pages. I once
worked on maintaining a piece of code that had one module that covered
15 pages. You just couldn't keep track of where the various parts began
and ended.

One of the two main issues with non-modular code is that it is a
night-mare to maintain if you can't find anything, and you can't reuse
things you've already written without doing a copypasta, and *then* you
have to maintain them in multiple places.

<div class="vspace">

</div>

The Solution
------------

**Modular programming** to the rescue! In modular programming, you write
short, single-purpose functions and methods that can sit comfortably on
a page or a screenful. You don't have to scroll for ages to find the top
or the bottom of a loop, nor is your nesting so awful that you can't
keep track of braces (or whatever is supposed to delimit blocks in the
language of your choice).

As I wrote
[elsewhere](http://wiki.tamouse.org?n=Technology.WriteFunctionsInASeparateInclude?action=print)
code reused is a great way to improve your development time. Writing
more modular, single-functional code is a great way to begin to build a
reusable library of components.

There are basically two ways to approach modular design: [top
down](http://wiki.tamouse.org?n=Technology.TopDownDesign?action=edit)[?](http://wiki.tamouse.org?n=Technology.TopDownDesign?action=edit)
and [bottom
up](http://wiki.tamouse.org?n=Technology.BottomUpDesign?action=edit)[?](http://wiki.tamouse.org?n=Technology.BottomUpDesign?action=edit).
You should employ both, in actuality, and take opportunities to
[refactor](http://wiki.tamouse.org?n=Technology.Refactoring?action=edit)[?](http://wiki.tamouse.org?n=Technology.Refactoring?action=edit)
your code to make it more maintainable and reusable.

<div class="vspace">

</div>

</div>
