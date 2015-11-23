<div id="wikitext">

<span id="excerpt"></span>
[CSS](http://wiki.tamouse.org?n=Technology.CSS?action=print) is a
powerful little language for specifying all sorts of things you can do
with layouts and elements on a web page. Here we look at bringing an old
typography trick for books to the modern web: '''Drop Caps". <span
id="excertpend"></span>

**Drop Caps** are pretty much what the name implies: the first letter of
a paragraph is enlarged and dropped to the left of the first paragraph
on the page. This is seen in books, newspapers, and magazines all over.
It is a classic design trick that can be successfully brought to a web
page to give it a bit of elegance.

<div class="vspace">

</div>

### :first-letter pseudo-class

The trick is to use the pseudo-class `:first-letter` on the paragraph
you are styling. This selector allows you to just pick the first letter
off a paragraph without the need for spans. An example shown here:

<div class="vspace">

</div>

<div id="sourceblock1" class="sourceblock">

<div class="sourceblocktext">

<div class="css">

1.  <div class="de1">

    <span class="re1">.firstpar</span><span class="re2">:first-letter
    </span><span class="br0">{</span> <span class="coMULTI">/\* this
    creates a drop cap \*/</span>

    </div>

2.  <div class="de1">

        <span class="kw1">font-family</span> Futura<span
    class="sy0">,</span> Trebuchet<span class="sy0">,</span> <span
    class="st0">"MS Trebucht"</span> <span
    class="kw2">sans-serif</span><span class="sy0">;</span>

    </div>

3.  <div class="de1">

        <span class="kw1">font-size</span><span class="sy0">:</span>
    <span class="re3">200%</span><span class="sy0">;</span>

    </div>

4.  <div class="de1">

        <span class="kw1">font-weight</span><span class="sy0">:</span>
    <span class="kw2">bold</span><span class="sy0">;</span>

    </div>

5.  <div class="de2">

        <span class="kw1">float</span><span class="sy0">:</span> <span
    class="kw1">left</span><span class="sy0">;</span>

    </div>

6.  <div class="de1">

        <span class="kw1">padding-left</span><span class="sy0">:</span>
    <span class="nu0">0</span><span class="sy0">;</span>

    </div>

7.  <div class="de1">

        <span class="kw1">padding-top</span><span class="sy0">:</span>
    <span class="re3">5px</span><span class="sy0">;</span>

    </div>

8.  <div class="de1">

        <span class="kw1">padding-right</span><span class="sy0">:</span>
    <span class="re3">5px</span><span class="sy0">;</span>

    </div>

9.  <div class="de1">

        <span class="kw1">padding-bottom</span><span
    class="sy0">:</span> <span class="re3">5px</span><span
    class="sy0">;</span>

    </div>

10. <div class="de2">

    <span class="br0">}</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.DropCapsWithCSS?action=sourceblock&num=1)

</div>

</div>

`.firstpar` is a class we've created that is applied to the first
paragraph tag (`<p class="firstpar">`) to get it to react to the
definition we're providing. Appending the pseudo-class `:first-letter`
to the class name gives us further control over what is affected.

The letter is given a type face and size commensurate with a dropped cap
in this design. I chose to use the same type face as the heading font
for page consistency. We make it big and bold. Next comes the tricky
part: we make this character float left on the paragraph. This is what
makes it a drop cap. When you float the character, it becomes a block
display, and drops down compared to the rest of the first line. But it's
not quite there yet. We have to add some padding to make it go into just
the right position and give it a little space in which to sit. We want
it to go flush to the left edge of the container, but give it a little
easement around the other 3 edges. If we don't specify some top padding,
the character actually will float up a bit if you've got any padding
before the paragraph itself. The other padding (right, bottom) are just
to give it a comfy space from the rest of the paragraph body.

Here's the corresponding html:

<div class="vspace">

</div>

<div id="sourceblock2" class="sourceblock">

<div class="sourceblocktext">

<div class="html4strict">

1.  <div class="de1">

    <span class="sc2">\<<span class="kw2">body</span>\></span>

    </div>

2.  <div class="de1">

        <span class="sc2">\<<span class="kw2">h1</span>\></span>This is
    an example of how to do a drop cap<span class="sc2">\<<span
    class="sy0">/</span><span class="kw2">h1</span>\></span>

    </div>

3.  <div class="de1">

        <span class="sc2">\<<span class="kw2">p</span> <span
    class="kw3">class</span><span class="sy0">=</span><span
    class="st0">"firstpar"</span>\></span>Lorem ipsum dolor sit amet,
    consectetur adipisicing elit,

    </div>

4.  <div class="de1">

        sed do eiusmod tempor incididunt ut labore et dolore magna

    </div>

5.  <div class="de2">

        aliqua. Ut enim ad minim veniam, quis nostrud exercitation

    </div>

6.  <div class="de1">

        ullamco laboris nisi ut aliquip ex ea commodo consequat.

    </div>

7.  <div class="de1">

        Duis aute irure dolor in reprehenderit in voluptate velit

    </div>

8.  <div class="de1">

        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint

    </div>

9.  <div class="de1">

        occaecat cupidatat non proident, sunt in culpa qui officia

    </div>

10. <div class="de2">

        deserunt mollit anim id est laborum.<span class="sc2">\<<span
    class="sy0">/</span><span class="kw2">p</span>\></span>

    </div>

11. <div class="de1">

        <span class="sc2">\<<span class="kw2">p</span>\></span>Lorem
    ipsum dolor sit amet, consectetur adipisicing elit,

    </div>

12. <div class="de1">

        sed do eiusmod tempor incididunt ut labore et dolore magna

    </div>

13. <div class="de1">

        aliqua. Ut enim ad minim veniam, quis nostrud exercitation

    </div>

14. <div class="de1">

        ullamco laboris nisi ut aliquip ex ea commodo consequat.

    </div>

15. <div class="de2">

        Duis aute irure dolor in reprehenderit in voluptate velit

    </div>

16. <div class="de1">

        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint

    </div>

17. <div class="de1">

        occaecat cupidatat non proident, sunt in culpa qui officia

    </div>

18. <div class="de1">

        deserunt mollit anim id est laborum.<span class="sc2">\<<span
    class="sy0">/</span><span class="kw2">p</span>\></span>

    </div>

19. <div class="de1">

     

    </div>

20. <div class="de2">

    <span class="sc2">\<<span class="sy0">/</span><span
    class="kw2">body</span>\></span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.DropCapsWithCSS?action=sourceblock&num=2)

</div>

</div>

Here's what our example looks like rendered:

<div class="vspace">

</div>

<div>

![](http://wiki.tamouse.org?n=uploads.Technology.DropCapsWithCSS.drop-cap-example.png)

</div>

<div class="vspace">

</div>

</div>
