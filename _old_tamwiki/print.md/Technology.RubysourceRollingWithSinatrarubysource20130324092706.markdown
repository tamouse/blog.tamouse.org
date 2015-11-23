<div id="wikitext">

<div class="vspace">

</div>

Rolling With Sinatra
--------------------

21 Jan 2013 \* [Interviews](http://rubysource.com/category/interviews/),
[Sinatra](http://rubysource.com/category/sinatra/) \* By [Darren
Jones](http://rubysource.com/author/djones/)

When it comes to web development, Sinatra is amazingly flexible. Unlike
Rails, it isn’t opinionated in the slightest and basically lets you make
all the design decisions. It does have some conventions, such as
automatically looking for view templates in the ‘views’ folder, but
virtually all of these default settings can easily be changed. Sinatra
doesn’t make any decisions for you – you literally start with a blank
slate. Konstantin Haase, maintainer of Sinatra, refers to this as
Sinatra’s biggest strength but also its biggest weakness, since Sinatra
isn’t going to stop you from writing bad code.

Given that there are so many choices that you can make when creating an
application in Sinatra, I decided to ask around and find out how people
roll when they use it. I asked the following questions:

<div class="vspace">

</div>

-   Do you have a set folder structure or coding patterns?
-   Do you tend to use classic or modular style?
-   Do you use any bootstrap code?
-   Do you ever use inline-views?
-   Anything Else?

I got some interesting responses that I thought I’d share on here. You
can also view the whole thread here:

<https://groups.google.com/forum/#!msg/sinatrarb/BFAXCCK3D8I/mXLv6YDoBcAJ>

<div class="vspace">

</div>

Do you have a set folder structure or coding patterns?
------------------------------------------------------

Sinatra has no directory structure to speak of – you don’t even get an
application folder, unless you create it yourself. As mentioned earlier,
it has some nice defaults like automatically keeping view templates in
the ‘views’ directory and public assets in the ‘public’ directory and
using a file called layout.erb as the default layout. All of these can
be easily changed using the set method, like so:

<div class="vspace">

</div>

<div id="sourceblock1" class="sourceblock">

<div class="sourceblocktext">

<div class="ruby">

1.  <div class="de1">

    set <span class="re3">:public\_folder</span>, <span
    class="st0">'assets'</span>

    </div>

2.  <div class="de1">

    set <span class="re3">:views</span>, <span
    class="st0">'templates'</span>

    </div>

3.  <div class="de1">

    set <span class="re3">:erb</span>, <span class="re3">:layout</span>
    =<span class="sy0">&</span>gt; <span class="re3">:base</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.RubysourceRollingWithSinatrarubysource20130324092706?action=sourceblock&num=1)

</div>

</div>

A lot of the people I asked tended to use a Rails-like structure of
‘Models, Views and Controllers’ folders. They also tended to use a
similar structure to that used by <span class="wikiword">RubyGems</span>
with folders such as ‘lib,test/spec/, public’.

Another popular technique was to use a file called ‘init.rb’ that
requires all the other relevant files. This makes it useful for running
your app from the console or during tests.

Blake Mizerany, the creator of Sinatra, said that he preferred to use a
single directory where all of his modules and views were kept in one
place.

I like to keep my folder strucutre very simple, usually with a file
called main.rb that contians most of the application code. I will then
usually use a public and views folder and then leave it at that. Any
extra files will usually go in the root directory.

<div class="vspace">

</div>

Do you tend to use classic or modular style?
--------------------------------------------

Sinatra has two distinct styles of coding – classic and modular. Most
examples that you find on the web are classic applications, here is
another example:

<div class="vspace">

</div>

<div id="sourceblock2" class="sourceblock">

<div class="sourceblocktext">

<div class="ruby">

1.  <div class="de1">

    <span class="kw3">require</span> <span class="st0">'sinatra'</span>

    </div>

2.  <div class="de1">

    get <span class="st0">'/hello'</span> <span class="kw1">do</span>

    </div>

3.  <div class="de1">

      <span class="st0">"Hello World!"</span>

    </div>

4.  <div class="de1">

    <span class="kw1">end</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.RubysourceRollingWithSinatrarubysource20130324092706?action=sourceblock&num=2)

</div>

</div>

The same app done modular style would look like this:

<div class="vspace">

</div>

<div id="sourceblock3" class="sourceblock">

<div class="sourceblocktext">

<div class="ruby">

1.  <div class="de1">

    <span class="kw3">require</span> <span
    class="st0">'sinatra/base'</span>

    </div>

2.  <div class="de1">

    <span class="kw1">class</span> Hello <span class="sy0">\<</span>
    <span class="re2">Sinatra::Base</span>

    </div>

3.  <div class="de1">

      get <span class="st0">'/hello'</span> <span class="kw1">do</span>

    </div>

4.  <div class="de1">

        <span class="st0">"Hello World!"</span>

    </div>

5.  <div class="de2">

      <span class="kw1">end</span>

    </div>

6.  <div class="de1">

    <span class="kw1">end</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.RubysourceRollingWithSinatrarubysource20130324092706?action=sourceblock&num=3)

</div>

</div>

As you can see, the main difference in a modular-style application is
that all of the code is wrapped in a class that is subclassed from
Sinatra::Base. Whereas, in a classic application you just require
‘sinatra’ and get on with it – this tends to be the style used in most
onine tutorials.

Most people who responded to my questions preferred to use the modular
style. Josh Cheek mentioned that classic style is useful for
demonstrating techniques (hence the reason why it’s probably used for
most examples on the web).

John Nunemaker (<span class="wikiword">GitHub</span>) said:

<div class="vspace">

</div>

<div class="indent">

I would never use classic anymore. Too pollutive.

</div>

This refers to the fact that the global namespace can become polluted
with methods of the same name. This is not usually a problem when
writing small applications, but can become more of an issue if you are
writing a large modular application (particularly if different people
are working on different modules).

Jason Rogers also pointed out a useful technique that helps map your
urls to a specific class:

<div class="vspace">

</div>

<div class="indent">

If I’m going to have resources split out under separate paths (eg.
“/admin”, “/api”, etc.) I will use a modular approach and map the
individual modules in Rack under their path name.

</div>

This can be done in the config.ru file using Rack’s `map` method, like
so:

<div class="vspace">

</div>

<div id="sourceblock4" class="sourceblock">

<div class="sourceblocktext">

<div class="ruby">

1.  <div class="de1">

    <span class="kw3">require</span> <span
    class="st0">'sinatra/base'</span>

    </div>

2.  <div class="de1">

    <span class="kw3">require</span> <span class="st0">'./main'</span>

    </div>

3.  <div class="de1">

    map<span class="br0">(</span><span class="st0">'/admin'</span><span
    class="br0">)</span> <span class="br0">{</span> run adminController
    <span class="br0">}</span>

    </div>

4.  <div class="de1">

    map<span class="br0">(</span><span class="st0">'/api'</span><span
    class="br0">)</span> <span class="br0">{</span> run apiController
    <span class="br0">}</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.RubysourceRollingWithSinatrarubysource20130324092706?action=sourceblock&num=4)

</div>

</div>

Personally, I love the to use classic-style applications and think they
are very direct, allowing you to get started writing code quickly. The
downsides are few and it is very easy to move over to a modular-style
application if it grows bigger. If you want to package up your
application as a gem or extension, however, then you really do need to
go for the modular-style.

I should point out that the developers of Sinatra remain committed to
keeping the two different styles of application.

<div class="vspace">

</div>

Do you use any bootstrap code?
------------------------------

Rails has a lot of code generators that will quickly get you up and
running with various bootstrap code. I wondered if people had used
anything similar to get their projects off the ground in Sinatra.

Geoffrey Grosenbach used a little bit of bootstrap code to save setting
up the same things over and over:

<div class="vspace">

</div>

<div class="indent">

Sometimes I start from an existing simple Git repo, especially if I’m
going to be using Backbone or other frameworks that need some setup.

</div>

Others liked to include things like Knockout.js and Twitter Bootstrap
initially (presumablly to make the front end development easier).

User diminish mentioned a code generation tool on Sinatra’s Google
Groups page that was in development and sounded interesting. It would be
good to see if any progress had been made with this.

In my own Sinatra projects, I don’t tend to use any bootstap or
generator code, as it’s so easy to get started with a project. Although,
I have considered putting together a minimalistic file structure that
includes some basic CSS and layouts that I usually use.

There are a number of similar projects available such as
[Sinatra-Bootstrap-Starter](https://bitbucket.org/aleksbasara/sinatra-bootstrap-starter/src),
although these start to take some of the design decisions away from you
– always better to develop your own that works for you!

<div class="vspace">

</div>

Do you ever use inline-views?
-----------------------------

Inline views let you keep all your view code in the same file as your
app. Here’s a quick example:

<div class="vspace">

</div>

<div id="sourceblock5" class="sourceblock">

<div class="sourceblocktext">

<div class="ruby">

1.  <div class="de1">

    <span class="kw3">require</span> <span class="st0">'sinatra'</span>

    </div>

2.  <div class="de1">

    get <span class="st0">'/hello/:name'</span> <span
    class="kw1">do</span>

    </div>

3.  <div class="de1">

      <span class="re1">@name</span> = params<span
    class="br0">[</span><span class="re3">:name</span><span
    class="br0">]</span>

    </div>

4.  <div class="de1">

      erb <span class="re3">:hello</span>

    </div>

5.  <div class="de2">

    <span class="kw1">end</span>

    </div>

6.  <div class="de1">

    \_\_END\_\_

    </div>

7.  <div class="de1">

    @@hello

    </div>

8.  <div class="de1">

    <span class="sy0">\<</span>h1<span class="sy0">\></span>Hello!<span
    class="sy0">\</</span>h1<span class="sy0">\></span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.RubysourceRollingWithSinatrarubysource20130324092706?action=sourceblock&num=5)

</div>

</div>

In this example, the view called ‘hello’ is placed after the `__END__`
declaration. All views are marked by starting with ‘@@’ followed by the
name of the template.

Most people didn’t use these, although one notable exception was Blake
Mizerany, who liked to use them for small applications:

<div class="vspace">

</div>

<div class="indent">

I’ll use inline templates when there are only a few and they are small

</div>

Personally, I often like to use inline views and I think they are one of
Sinatra’s coolest features. When I’m playing around with some code or
starting a project off, I really like the fact that I can create
something all from within one file. In fact, Avdi Grimm managed to
create a Sinatra application that had everything in the same file,
including tests!
(<http://devver.wordpress.com/2009/05/13/single-file-sinatra-apps-with-specs-baked-in/>)

<div class="vspace">

</div>

Anything Else?
--------------

A lot of people use Sinatra differently and the overriding opinion was
that they wanted to choose their own way of doing things.

Geoffrey Grosenbach likes how Sinatra exposes how things work more and
therefore helps you to learn those skills to a greater degree:

<div class="vspace">

</div>

<div class="indent">

Learning and using Sinatra helped me master other tasks better (like
setting up tests).

</div>

He also thought that the extra effort paid off with faster development
time:

<div class="vspace">

</div>

<div class="indent">

Even though there’s a bit of work, I love the speed of working with
Sinatra.

</div>

He also went on to say:

<div class="vspace">

</div>

<div class="indent">

I rarely use Rails generators, and often use a <span
class="wikiword">NoSQL</span> database, so Sinatra is perfect for most
of the apps I want to write.

</div>

Rick Olson (<span class="wikiword">GitHub</span>), liked to use

<div class="vspace">

</div>

<div class="indent">

Lots of Mustache and Rack-Test

</div>

This is different to what other people use, but perfectly easy to do
with Sinatra’s flexibility.

As for the point made by some people that Sinatra lacks functionality,
Jason Rogers counters with:

<div class="vspace">

</div>

<div class="indent">

I’d say that’s what gems are for. One of the great benefits of Sinatra
is its lack of opinions.

</div>

He also pointed out that even in this small sample, people choose to use
Sinatra differently, meaning that everybody could not possibly be
satisfied with a one-size fits all approach. This gets to the heart of
what Sinatra is all about – letting you choose your own way of doing
things, perfect for control freaks who like things done a particular
way!

soldier.coder used a great metaphor for explaining why you might want to
use the fine-grained solution of choosing your own gems offered by
Sinatra:

<div class="vspace">

</div>

<div class="indent">

Why not just use rails? Rails is like bringing a destroyer to a
pirate/hostage situation when you really need a Special Forces or Seal
team. Large applications? Large apps is kind of misleading as it really
depends on the break down of how it is organized. Large and monolithic
is very different than large and modular. Writing software as a service
encourages separation of concerns. Sinatra seems ideal for such
separation.

</div>

This is a good point. Sinatra’s modular style, actively encourages you
to write modular code that can pieced together in large applications.
There are a number of advantages to this – you can reuse modules in
other applications, you can remove a module if it isn’t required any
longer, different teams can work independently on separte modules.

Blake Mizerany also pointed out the benefit of a bit of advance
planning:

<div class="vspace">

</div>

<div class="indent">

In general, I like to put a good amount of forethought into what I’m
doing; This allows me to keep things simple.

</div>

With some planning in advance, you can set up your project in such a way
that its design remains simple and Sinatra will let you do this.

I think all of the feedback I received helps to highlight just why
Sinatra is so flexible: If you want to get something up and running
quickly then you can fire up a classic application with inline views in
no time. If you want to build a big application then you can go modular
with your own bespoke file structure and separate all of your concerns.

Most of these topics are covered in greater depth in my new book, Jump
Start Sinatra.

I hope this article has given a taste of the many different ways there
are to roll with Sinatra. What about you? If you’ve used Sinatra, how do
you roll? If you haven’t tried Sinatra yet, then has this post helped to
show what Sinatra is capable of?

Don’t forget, [Jump Start Sinatra](http://www.sitepoint.com/jumpstart/)
will be out very soon. Go sign up to be notified when it’s ready!

<div class="vspace">

</div>

<div style="display: none;">

Summary: <span
class="wikiword">[RubySource](http://wiki.tamouse.org?n=Technology.RubySource?action=edit)[?](http://wiki.tamouse.org?n=Technology.RubySource?action=edit)</span>
| Fresh thinking for Ruby on Rails Development. Learn - Ruby Tutorials,
Rails Migration, Ruby Gems, Test Driven Development - TDD and much more
Tags: ruby, sinatra, getting started Source:
<http://rubysource.com/rolling-with-sinatra/>
Parent:(Technology.)Sinatra
includeme:[Technology.Sinatra](http://wiki.tamouse.org?n=Technology.Sinatra?action=print)
Categories:[Articles](http://wiki.tamouse.org?n=Category.Articles),
[Technology](http://wiki.tamouse.org?n=Category.Technology),
[Ruby](http://wiki.tamouse.org?n=Category.Ruby),
[Sinatra](http://wiki.tamouse.org?n=Category.Sinatra)

</div>

Page saved at: Sun, 24 Mar 2013 09:27:06 -0500

<div class="vspace">

</div>

</div>
