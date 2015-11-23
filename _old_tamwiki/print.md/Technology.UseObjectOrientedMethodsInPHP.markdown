<div id="wikitext">

<span id="excerpt"></span>
[OOP](http://wiki.tamouse.org?n=Technology.Glossary?action=edit)[?](http://wiki.tamouse.org?n=Technology.Glossary?action=edit)
is the way to go for writing clean, expressive code. Several languages
support OOP concepts, including
[PHP](http://wiki.tamouse.org?n=Technology.PHP?action=print),
[RubyOnRails](http://wiki.tamouse.org?n=RonR.RubyOnRails?action=edit)[?](http://wiki.tamouse.org?n=RonR.RubyOnRails?action=edit),
[JavaScript](http://wiki.tamouse.org?n=Technology.JavaScript?action=print)
and of course, old stand-bies like C++ and Java. <span
id="excerptend"></span>

<div class="vspace">

</div>

Some examples of good use of OOP
--------------------------------

In [PHP](http://wiki.tamouse.org?n=Technology.PHP?action=print) the
mysqli functions for database access are expressed in an object-oriented
way (they also have a procedural interface if you do choose to go that
way).

Setting it up is as easy as:

<div class="vspace">

</div>

<div id="sourceblock1" class="sourceblock">

<div class="sourceblocktext">

<div class="php">

1.  <div class="de1">

    <span class="re0">\$db</span> <span class="sy0">=</span> <span
    class="kw2">new</span> mysqli<span class="br0">(</span>DBHOST<span
    class="sy0">,</span> DBUSER<span class="sy0">,</span> DBPASS<span
    class="sy0">,</span> DBNAME<span class="br0">)</span><span
    class="sy0">;</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.UseObjectOrientedMethodsInPHP?action=sourceblock&num=1)

</div>

</div>

And *voila!* -- you've got a database connection and handle that can be
used to interact with the database.

In addition, mysqli defines a result object and a statement object that
give good handles on using the interface.

<div class="vspace">

</div>

<div id="sourceblock2" class="sourceblock">

<div class="sourceblocktext">

<div class="php">

1.  <div class="de1">

    <span class="re0">\$result</span> <span class="sy0">=</span> <span
    class="re0">\$db</span><span class="sy0">-\></span><span
    class="me1">query</span><span class="br0">(</span><span
    class="re0">\$sql\_stmt</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

2.  <div class="de1">

    <span class="kw1">if</span> <span class="br0">(</span><span
    class="sy0">!</span><span class="re0">\$result</span><span
    class="br0">)</span> handle\_error<span class="br0">(</span><span
    class="re0">\$db</span><span class="sy0">-\></span><span
    class="me1">error</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

3.  <div class="de1">

     

    </div>

4.  <div class="de1">

    <span class="re0">\$rows</span> <span class="sy0">=</span> <span
    class="kw3">Array</span><span class="br0">(</span><span
    class="br0">)</span><span class="sy0">;</span>

    </div>

5.  <div class="de2">

    <span class="kw1">while</span> <span class="br0">(</span><span
    class="re0">\$row</span> <span class="sy0">=</span> <span
    class="re0">\$result</span><span class="sy0">-\></span><span
    class="me1">fetch\_assoc</span><span class="br0">(</span><span
    class="br0">)</span><span class="br0">)</span> <span
    class="br0">{</span>

    </div>

6.  <div class="de1">

        <span class="re0">\$rows</span><span class="br0">[</span><span
    class="br0">]</span><span class="sy0">=</span><span
    class="re0">\$row</span><span class="sy0">;</span>

    </div>

7.  <div class="de1">

    <span class="br0">}</span>

    </div>

8.  <div class="de1">

    <span class="re0">\$result</span><span class="sy0">-\></span><span
    class="me1">free</span><span class="br0">(</span><span
    class="br0">)</span><span class="sy0">;</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.UseObjectOrientedMethodsInPHP?action=sourceblock&num=2)

</div>

</div>

Now you got a sequential array of the associative array corresponding to
each row in the query

<div class="vspace">

</div>

Writing your own classes
------------------------

The documentation at <http://php.net> is not too bad for how to write
the syntax for classes and using them as objects, but it doesn't say
anything about when to do this. In general, the deciding factor for
going procedural vs. OO is somewhat arbitrary. If you have to associate
data with certain functions, or if you want to keep certain areas of
your application separate from other areas, OO is the way to go.

In general, the way of writing a class is to declare the class, create a
constructor, and write all the public and private functions and
variables for the class. Elsewhere, I talk about
[debugging](http://wiki.tamouse.org?n=Tags.Debugging?action=print) in
PHP. Here is an example of class that can be used to handle the
debugging functions:

<div class="vspace">

</div>

<div id="sourceblock3" class="sourceblock">

<div class="sourceblocktext">

<div class="php">

1.  <div class="de1">

    <span class="kw2">class</span> MyClass <span class="br0">{</span>

    </div>

2.  <div class="de1">

      <span class="kw2">function</span> \_\_construct <span
    class="br0">(</span><span class="br0">)</span> <span
    class="br0">{</span>

    </div>

3.  <div class="de1">

      <span class="br0">}</span>

    </div>

4.  <div class="de1">

    <span class="br0">}</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.UseObjectOrientedMethodsInPHP?action=sourceblock&num=3)

</div>

</div>

To instatiate this object, first you include it, then create a debugging
object:

<div class="vspace">

</div>

<div id="sourceblock4" class="sourceblock">

<div class="sourceblocktext">

<div class="php">

1.  <div class="de1">

    <span class="kw1">include</span><span class="br0">(</span><span
    class="st_h">'MyClass.php'</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

2.  <div class="de1">

     

    </div>

3.  <div class="de1">

    <span class="re0">\$objext</span> <span class="sy0">=</span> <span
    class="kw2">new</span> MyClass<span class="br0">(</span><span
    class="br0">)</span><span class="sy0">;</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.UseObjectOrientedMethodsInPHP?action=sourceblock&num=4)

</div>

</div>

There are probably many, many application features that can be better
encapsulated in a class, and thus preparing the way for more [reuse of
code](http://wiki.tamouse.org?n=Technology.Reuse?action=edit)[?](http://wiki.tamouse.org?n=Technology.Reuse?action=edit).

<div class="vspace">

</div>

</div>
