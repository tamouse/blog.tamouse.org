<div id="wikitext">

[Ruby on Rails Guides: A Guide to Active Record Associations: Polymorphic Associations](http://guides.rubyonrails.org/association_basics.html#polymorphic-associations)
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

Posted: November 17, 2012, at 08:36 AM

<div class="vspace">

</div>

<div class="round lrindent quote">

2.9 Polymorphic Associations

A slightly more advanced twist on associations is the polymorphic
association. With polymorphic associations, a model can belong to more
than one other model, on a single association. For example, you might
have a picture model that belongs to either an employee model or a
product model. Here’s how this could be declared:

<div class="vspace">

</div>

<div id="sourceblock1" class="sourceblock">

<div class="sourceblocktext">

<div class="ruby">

1.  <div class="de1">

    <span class="kw1">class</span> Picture <span class="sy0">\<</span>
    <span class="re2">ActiveRecord::Base</span>

    </div>

2.  <div class="de1">

      belongs\_to <span class="re3">:imageable</span>, <span
    class="re3">:polymorphic</span> <span class="sy0">=\></span> <span
    class="kw2">true</span>

    </div>

3.  <div class="de1">

    <span class="kw1">end</span>

    </div>

4.  <div class="de1">

     

    </div>

5.  <div class="de2">

    <span class="kw1">class</span> Employee <span class="sy0">\<</span>
    <span class="re2">ActiveRecord::Base</span>

    </div>

6.  <div class="de1">

      has\_many <span class="re3">:pictures</span>, <span
    class="re3">:as</span> <span class="sy0">=\></span> <span
    class="re3">:imageable</span>

    </div>

7.  <div class="de1">

    <span class="kw1">end</span>

    </div>

8.  <div class="de1">

     

    </div>

9.  <div class="de1">

    <span class="kw1">class</span> Product <span class="sy0">\<</span>
    <span class="re2">ActiveRecord::Base</span>

    </div>

10. <div class="de2">

      has\_many <span class="re3">:pictures</span>, <span
    class="re3">:as</span> <span class="sy0">=\></span> <span
    class="re3">:imageable</span>

    </div>

11. <div class="de1">

    <span class="kw1">end</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.PolymorphicTables?action=sourceblock&num=1)

</div>

</div>

You can think of a polymorphic `belongs_to` declaration as setting up an
interface that any other model can use. From an instance of the Employee
model, you can retrieve a collection of pictures:` @employee.pictures`.

Similarly, you can retrieve ` @product.pictures`.

If you have an instance of the Picture model, you can get to its parent
via ` @picture.imageable`. To make this work, you need to declare both a
foreign key column and a type column in the model that declares the
polymorphic interface:

<div class="vspace">

</div>

<div id="sourceblock2" class="sourceblock">

<div class="sourceblocktext">

<div class="ruby">

1.  <div class="de1">

    <span class="kw1">class</span> CreatePictures <span
    class="sy0">\<</span> <span
    class="re2">ActiveRecord::Migration</span>

    </div>

2.  <div class="de1">

      <span class="kw1">def</span> change

    </div>

3.  <div class="de1">

        create\_table <span class="re3">:pictures</span> <span
    class="kw1">do</span> <span class="sy0">|</span>t<span
    class="sy0">|</span>

    </div>

4.  <div class="de1">

          t.<span class="kw3">string</span>  <span
    class="re3">:name</span>

    </div>

5.  <div class="de2">

          t.<span class="kw3">integer</span> <span
    class="re3">:imageable\_id</span>

    </div>

6.  <div class="de1">

          t.<span class="kw3">string</span>  <span
    class="re3">:imageable\_type</span>

    </div>

7.  <div class="de1">

          t.<span class="me1">timestamps</span>

    </div>

8.  <div class="de1">

        <span class="kw1">end</span>

    </div>

9.  <div class="de1">

      <span class="kw1">end</span>

    </div>

10. <div class="de2">

    <span class="kw1">end</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.PolymorphicTables?action=sourceblock&num=2)

</div>

</div>

This migration can be simplified by using the t.references form:

<div class="vspace">

</div>

<div id="sourceblock3" class="sourceblock">

<div class="sourceblocktext">

<div class="ruby">

1.  <div class="de1">

    <span class="kw1">class</span> CreatePictures <span
    class="sy0">\<</span> <span
    class="re2">ActiveRecord::Migration</span>

    </div>

2.  <div class="de1">

      <span class="kw1">def</span> change

    </div>

3.  <div class="de1">

        create\_table <span class="re3">:pictures</span> <span
    class="kw1">do</span> <span class="sy0">|</span>t<span
    class="sy0">|</span>

    </div>

4.  <div class="de1">

          t.<span class="kw3">string</span> <span
    class="re3">:name</span>

    </div>

5.  <div class="de2">

          t.<span class="me1">references</span> <span
    class="re3">:imageable</span>, <span class="re3">:polymorphic</span>
    <span class="sy0">=\></span> <span class="kw2">true</span>

    </div>

6.  <div class="de1">

          t.<span class="me1">timestamps</span>

    </div>

7.  <div class="de1">

        <span class="kw1">end</span>

    </div>

8.  <div class="de1">

      <span class="kw1">end</span>

    </div>

9.  <div class="de1">

    <span class="kw1">end</span>

    </div>

10. <div class="de2">

     

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.PolymorphicTables?action=sourceblock&num=3)

</div>

</div>

<div class="vspace">

</div>

<div>

![Polymorphic Association
Diagram](http://guides.rubyonrails.org/images/polymorphic.png "Polymorphic Association Diagram")

</div>

<div class="vspace">

</div>

</div>

<div class="vspace">

</div>

<div style="display: none;">

Summary:In
[Rails](http://wiki.tamouse.org?n=Technology.RubyOnRails?action=print),
the concept of a [polymorphic
table](https://en.wikipedia.org/wiki/Polymorphism_%28computer_science%29)
allows an object to know which object of different types it belongs to.
Parent:(Technology.)<span
class="wikiword">[RubyOnRails](http://wiki.tamouse.org?n=Technology.RubyOnRails?action=print)</span>
<span
class="wikiword">[IncludeMe](http://wiki.tamouse.org?n=Technology.IncludeMe?action=edit)[?](http://wiki.tamouse.org?n=Technology.IncludeMe?action=edit)</span>:[RubyOnRails](http://wiki.tamouse.org?n=Technology.RubyOnRails?action=print)
Categories:[Articles](http://wiki.tamouse.org?n=Category.Articles) Tags:
ruby, rails, polymorphism, data relationships

</div>

</div>
