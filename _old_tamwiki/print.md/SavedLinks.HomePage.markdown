<div id="wikitext">

Blitz - Why Blitz for Load and Performance Testing
--------------------------------------------------

Source
:   <https://www.blitz.io/why-blitz>

Posted
:   August 26, 2013, at 08:49 AM

Tags
:   web development, performance testing, web service, continuous
    everything

<div class="vspace">

</div>

<div class="round lrindent quote">

### Blitz for Application Performance Management

Building mobile applications, websites or <span
class="wikiword">APIs</span> is an iterative process. New features and
capabilities are being added constantly. Your application is rapidly and
iteratively going through several distinct phases - Development,
Staging, Production and Operations. At every step of the way, the
ability to ensure that your application meets the highest levels of user
satisfaction is critical.

Blitz has been purpose built to help application and website developers
like you throughout this lifecycle with powerful yet simple capabilities
including continuous monitoring, performance testing and remediation.

</div>

<div class="vspace">

</div>

------------------------------------------------------------------------

<div class="vspace">

</div>

node.js - <span class="wikiword">[NodeJS](http://wiki.tamouse.org?n=SavedLinks.NodeJS?action=edit)[?](http://wiki.tamouse.org?n=SavedLinks.NodeJS?action=edit)</span> require a global module/package - Stack Overflow
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Source
:   <http://stackoverflow.com/questions/15636367/nodejs-require-a-global-module-package>

Posted
:   August 26, 2013, at 08:39 AM

Tags
:   node.js, global module, FAQ

<div class="vspace">

</div>

<div class="round lrindent quote">

### Question

I'm trying to install globally and then use forever and forever-monitor
like this:

<div class="vspace">

</div>

        npm install -g forever forever-monitor

I see the usual output and also the operations that copy the files to
the global path, but then if I try to require("forever"); I get an error
saying that the module wasn't found.

I'm using latest version of both node and npm and I already know about
the change that npm made in global vs local install, but I really don't
want to install localy on every project and I'm working on a platform
that doesn't support link so npm link after a global install isn't
possible for me.

My question is: why I can't require a globally installed package? Is
that a feature or a bug? Or am I doing something wrong?

PS: Just to make it crystal clear: I don't want to install locally.

<div class="vspace">

</div>

### Answer

In Node.js, require doesn't look in the folder where global modules are
installed.

You can fix this by setting the NODE\_PATH environment variable. In
Linux this will be: export NODE\_PATH=/usr/lib/node\_modules (this
depend on where your global modules are actually installed).

See here:
<http://nodejs.org/api/modules.html#modules_loading_from_the_global_folders>

<div class="vspace">

</div>

### Answer

After you install package globally you have to link the local project
with global package

<div class="vspace">

</div>

        npm install express -g
        cd ~/mynodeproject/
        npm link express  

See [here](http://blog.nodejs.org/2011/04/06/npm-1-0-link/)

<div class="vspace">

</div>

</div>

<div class="vspace">

</div>

------------------------------------------------------------------------

<div class="vspace">

</div>

Sails.js - Realtime MVC Framework for Node.js
---------------------------------------------

Source
:   <http://sailsjs.org/#>!

Posted
:   August 26, 2013, at 08:35 AM

Tags
:   javascript, framework, MVC, web 3.0

<div class="vspace">

</div>

<div class="round lrindent quote">

What Is Sails.js? Sails.js make it easy to build custom,
enterprise-grade Node.js apps. It is designed to mimic the MVC pattern
of frameworks like Ruby on Rails, but with support for the requirements
of modern apps: data-driven <span class="wikiword">APIs</span> with
scalable, service-oriented architecture. It's especially good for
building chat, realtime dashboards, or multiplayer games.

</div>

<div class="vspace">

</div>

------------------------------------------------------------------------

<div class="vspace">

</div>

Watir <span class="wikiword">[WebDriver](http://wiki.tamouse.org?n=SavedLinks.WebDriver?action=edit)[?](http://wiki.tamouse.org?n=SavedLinks.WebDriver?action=edit)</span> - the most elegant way to use webdriver with ruby
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Source
:   <http://watirwebdriver.com/>

Posted
:   December 15, 2012, at 04:55 PM

Tags
:   ruby, rails, watir, webdriver, testing, selenium

<div class="vspace">

</div>

<div class="round lrindent quote">

Watir <span class="wikiword">WebDriver</span>
---------------------------------------------

Welcome to the home of Watir <span class="wikiword">WebDriver</span>:
the most elegant way to use <span class="wikiword">WebDriver</span> with
ruby.

Watir (pronounced Water: I know it’s confusing) stands for Web
Application Testing in Ruby, and the <span
class="wikiword">WebDriver</span> part stands for, um, <span
class="wikiword">WebDriver</span>. What browsers does Watir-<span
class="wikiword">WebDriver</span> support?

Any browser that <span class="wikiword">WebDriver</span> supports:
namely Firefox, Chrome & IE. Safari support is sadly gladly missing now
available.

<div class="vspace">

</div>

How good is Watir-<span class="wikiword">WebDriver</span>?
----------------------------------------------------------

I could make up lots of quotes about how good it is, but I don’t need
to, it’s that good.

<div class="vspace">

</div>

Getting Started
---------------

<div id="sourceblock1" class="sourceblock">

<div class="sourceblocktext">

<div class="bash">

gem <span class="kw2">install</span> watir-webdriver

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=SavedLinks.HomePage?action=sourceblock&num=1)

</div>

</div>

or just add `watir-webdriver` to your `gemfile` if you rock and use
bundler (if you don’t use bundler, you should, right now).

Watir-<span class="wikiword">WebDriver</span> ♥s ruby 1.9.3, but it
won’t complain in older versions nonetheless

</div>

<div class="vspace">

</div>

------------------------------------------------------------------------

<div class="vspace">

</div>

wycats/thor
-----------

Source
:   <https://github.com/wycats/thor>

Posted
:   December 15, 2012, at 04:52 PM

Tags
:   ruby, scripts, thor, dsl

<div class="vspace">

</div>

<div class="round lrindent quote">

Thor
----

### Description

Thor is a simple and efficient tool for building self-documenting
command line utilities. It removes the pain of parsing command line
options, writing "USAGE:" banners, and can also be used as an
alternative to the Rake build tool. The syntax is Rake-like, so it
should be familiar to most Rake users. Installation

<div class="vspace">

</div>

<div id="sourceblock2" class="sourceblock">

<div class="sourceblocktext">

<div class="bash">

gem <span class="kw2">install</span> thor

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=SavedLinks.HomePage?action=sourceblock&num=2)

</div>

</div>

<div class="vspace">

</div>

### Usage and documentation

Please see the [wiki](https://github.com/wycats/thor/wiki) for basic
usage and other documentation on using Thor.

<div class="vspace">

</div>

### License

Released under the MIT License. See the LICENSE file for further
details.

<div class="vspace">

</div>

</div>

<div class="vspace">

</div>

------------------------------------------------------------------------

<div class="vspace">

</div>

intridea/rails\_wizard
----------------------

Source
:   <https://github.com/intridea/rails_wizard>

Posted
:   December 15, 2012, at 04:46 PM

Tags
:   ruby, rails, railswizard, generators, templates, automation

<div class="vspace">

</div>

<div class="round lrindent quote">

<span class="wikiword">RailsWizard</span> Gem
---------------------------------------------

The <span class="wikiword">RailsWizard</span> gem is both the official
repository of recipes for <span class="wikiword">RailsWizard</span> as
well as a stand-alone tool to generate rails templates from the command
line. The website and the gem are kept in version sync, so any recipes
released to the gem will be simultaneously available on the web builder.

</div>

<div class="vspace">

</div>

------------------------------------------------------------------------

<div class="vspace">

</div>

Ruby on Rails Guides: Rails Application Templates
-------------------------------------------------

Source
:   <http://guides.rubyonrails.org/rails_application_templates.html>

Posted
:   December 15, 2012, at 04:44 PM

Tags
:   ruby, rails, templates, generators, automation

<div class="vspace">

</div>

<div class="round lrindent quote">

Rails Application Templates

Application templates are simple Ruby files containing DSL for adding
plugins/gems/initializers etc. to your freshly created Rails project or
an existing Rails project.

By referring to this guide, you will be able to:

<div class="vspace">

</div>

        Use templates to generate/customize Rails applications
        Write your own reusable application templates using the Rails template API

</div>

<div class="vspace">

</div>

------------------------------------------------------------------------

<div class="vspace">

</div>

The Open Photo Project
----------------------

Source
:   <http://theopenphotoproject.org/>

Posted
:   November 17, 2012, at 02:27 PM

Tags
:   testing, this, out

<div class="vspace">

</div>

<div class="round lrindent quote">

All your photos in one spot. Wherever you'd like.

A photo application that lets you store your photos on Dropbox, Amazon
S3 or in your garage. See the difference

<div class="vspace">

</div>

</div>

<div class="vspace">

</div>

------------------------------------------------------------------------

<div class="vspace">

</div>

Test Heading
------------

Stop Using Your Email Inbox Like a Filing Cabinet
-------------------------------------------------

Source:
<http://lifehacker.com/5914851/stop-using-your-email-inbox-like-a-filing-cabinet>\
Posted: October 26, 2012, at 08:55 AM\
Tags: life hack, email, unclutter, simplify, GTD

<div class="vspace">

</div>

<div class="round lrindent quote">

Stop Using Your Email Inbox Like a Filing Cabinet It's easy to let old
emails pile up over time and disappear into a large, unorganized mass in
your inbox. You might think to yourself that someday, perhaps, you'll
need old messages so you should store them forever. Unclutterer
recommends you stop thinking of your inbox as a filing cabinet and get
rid of old emails completely.

Unclutterer suggestss a simple four step process for clearing out your
inbox:

<div class="vspace">

</div>

-   Decide what each message is.
-   Decide what must be done.
-   Do what must be done.
-   Delete the message (or archive it in a separate folder, if that is
    what your employer directs).

The point is that you delete old messages that you don't need to
reference at some point instead of letting them pile up and distract you
when you're looking for something important. If you're always searching
around for that one important email in a sea of junk, spam, and useless
notes, this method might be a good approach to take.

[Your email inbox is not a filing
cabinet](http://unclutterer.com/2012/05/31/your-email-inbox-is-not-a-filing-cabinet/)
*([Unclutterer](http://unclutterer.com))*

<div class="vspace">

</div>

</div>

<div class="vspace">

</div>

BookBlock: A Content Flip Plugin - Codrops
------------------------------------------

Source:
<http://tympanus.net/codrops/2012/09/03/bookblock-a-content-flip-plugin/>\
Posted: September 26, 2012, at 03:39 AM\
Tags: jquery, javascript, plugin, gallery, images

<div class="vspace">

</div>

<div class="round lrindent quote">

\`Bookblock: A content flip book plugin using jQuery

</div>

<div class="vspace">

</div>

Web Blog / The Colorful & Otherworldly Landscapes of Utah by COLOURlovers :: COLOURlovers
-----------------------------------------------------------------------------------------

Source:
<http://www.colourlovers.com/web/blog/2012/09/21/the-colorful-otherworldly-landscapes-of-utah>\
Posted: September 25, 2012, at 09:26 PM\
Tags: colour, landscapes, art

<div class="vspace">

</div>

<div class="round lrindent quote">

The Colorful & Otherworldly Landscapes of Utah By <span
class="wikiword">LeVar</span> Battle // September 21, 2012

I have to say, when I've thought of Utah in the past, color was not a
word that I would have associated with the hot, arid, and rocky terrain
pictured in my mind's eye. That is until my introduction to the
landscape photography of Jeremy Davies. Jeremy is one of the many
fantastic photographers that work with us here at myPhotopipe, and his
work brings depth and visual artistry to a landscape just as vibrant as
his approach and technique. Jeremy has a way of interpreting what he
sees and feels in the world around him into a tangible manifestation the
rest of us can admire from a distance that's oftentimes otherworldly,
yet connect with personally.

Introducing you to the array of chroma Utah's eclectic landscapes has to
offer seems like a natural progression in this budding love affair of
colorful photography we're sharing. Allowing yourself to get lost in the
escapism Jeremy's sensible, yet discerning eye offers will open you up
to a plethora of possible color combinations when examining the color
palettes of his photography.

</div>

<div class="vspace">

</div>

### Some samples from the page:

<div style="text-align: center;">

<div class="vspace">

</div>

<div>

![](http://static.colourlovers.com/uploads/2012/09/Image-3-560x781.jpg)\
<span style="font-size:83%"> Source: [Jeremy
Davies](http://www.sur-realphotography.com/) </span>

</div>

<div class="vspace">

</div>

<div>

![](http://static.colourlovers.com/uploads/2012/09/Image-6-560x373.jpg)\
<span style="font-size:83%"> Source: [Jeremy
Davies](http://www.sur-realphotography.com/) </span>

</div>

<div class="vspace">

</div>

<div>

![](http://static.colourlovers.com/uploads/2012/09/Image-7-560x839.jpg)\
<span style="font-size:83%"> Source: [Jeremy
Davies](http://www.sur-realphotography.com/) </span>

</div>

<div class="vspace">

</div>

</div>

<div class="vspace">

</div>

JPL coding standards
--------------------

Source: <http://lars-lab.jpl.nasa.gov/JPL_Coding_Standard_C.pdf>

<div class="vspace">

</div>

What I Wish I Didn't Know - River Teeth Journal
-----------------------------------------------

Source:
<http://www.riverteethjournal.com/blog/2012/04/25/what-i-wish-i-didnt-know>\
Posted: 2012-6-19 2:14\
Tags: disability, journaling, Jason Dutton

<div class="vspace">

</div>

<div class="round lrindent quote">

What I Wish I Didn't Know
-------------------------

By Jason B. Dutton April 25, 2012

I wanted to be a writer long before I wanted to write about myself. I’ve
been an enthusiastic reader since childhood, and at ten years old genre
lines were very simple. Nonfiction meant reading biographies, or history
books, or newspaper articles; fiction meant devouring the adventures of
the Hardy Boys, or Sherlock Holmes, or Agatha Christie’s Hercule Poirot.
The latter was fun, and the former was not, and it’s no surprise that my
earliest attempts at literary greatness mirrored what I enjoyed reading.
I don’t remember being motivated by childhood dreams of fame and
fortune. In the beginning I hoped I could get lost in my own writing as
easily as that of others. Reading meant entering worlds I loved, and
writing meant creating those worlds.

The worlds of my imagination needed people to live in them, of course,
and a good deal of thought went into just how much of myself would find
its way into my heroes. I could give one my first name, or maybe another
would have blond hair and blue eyes. I could get my characters to act
the way I wished I would act in dangerous situations, but there the
similarities stopped. A hero had to be formed from just enough reality
to feed my fantasy, and just enough fiction to transcend my limitations.
My heroes were not to be short, or scared. They were not to be weak, and
they certainly were not going to be disabled.

I don’t think I made a conscious effort to keep my cerebral palsy out of
my writing. It would be more accurate to say that I didn’t see the point
of including it. Why dwell on what limited me when a blank page offered
the opportunity for so much more? I authored a detective story in
elementary school, and in high school I was dabbling in tales of
adventure, always with a protagonist who was a perfect, able-bodied
version of me, always with a story involving a beautiful girl, some very
bad guys and scenes that belonged in an action movie. It wasn’t until
college that I was properly introduced to the personal essay and the
term “creative nonfiction,” but even as I discovered some skill with the
form, there was something preferable to me about the world of
make-believe.

</div>

<div class="vspace">

</div>

Dead Link
---------

Source: <http://fruit.gs/404>\
Tags: web design, 404 pages, fun\
Posted: 2012-4-3 12:07

<div class="round lrindent quote">

best/worst 404 page? from @thinkgeek

</div>

<div class="vspace">

</div>

Cool Tools: Where There Is No Doctor
------------------------------------

Source: <http://www.kk.org/cooltools/archives/006145.php>]]\
Tags: books, health, medicine, self-help\
Posted: 2012-3-21 16:34

------------------------------------------------------------------------

<div class="round lrindent quote">

Where There Is No Doctor
------------------------

This is the only book in the world that will really help you be your own
doctor. It tells you how to suture a wound, heal burns, make your own
contraception, diagnose tropical skin diseases, and thousands of other
do-it-yourself medical procedures you won7t find elsewhere. Originally
written (in Spanish) for para-medicals in the developing world, the
medical instructions are clear, methodical, reliable, and helpful. Not
all the content is emergency care; a lot is basic hygiene and
preventative care.

This book is crammed with essential, life-saving knowledge for anyone
living or traveling for long periods in undeveloped areas without
doctors close by. It can be found in the packs of transcontinental
bicyclists, arctic explorers, missionaries and Peace Corp folks. The
book is too heavy to lug around in a tourist backpack, but it is also
available as a free PDF. But even with access to modern medical
facilities, I7ve found this book gives me an abbreviated medical school
education. It offers very realistic first aid treatments (more than just
bandages), and very easy-to-understand explanations of what doctors see
in injuries. It can help you talk to doctors. Finally, when you are done
traveling, leave this book behind with someone who can use it.

There is also a companion book, Where There Is No Dentist, equally good.

-- KK

**Where There Is No Doctor**, David Werner, Jane Maxwell, Carol Thuman.
1992, 446 pages. \$20, Free PDF: <http://hesperian.org/>

</div>

<div class="vspace">

</div>

<div style="display: none;">

Summary:This group is a place for me to save websites I come across
Categories: [GroupHomes](http://wiki.tamouse.org?n=Category.GroupHomes),
[Collections](http://wiki.tamouse.org?n=Category.Collections),
[Links](http://wiki.tamouse.org?n=Category.Links) Parent:<span
class="wikiword">[SavedLinks](http://wiki.tamouse.org?n=SavedLinks.HomePage)</span>(.<span
class="wikiword">[HomePage](http://wiki.tamouse.org?n=SavedLinks.HomePage)</span>)
includeme:[SavedLinks.HomePage](http://wiki.tamouse.org?n=SavedLinks.HomePage)

</div>

</div>
