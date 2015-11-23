<div id="wikitext">

<span id="excerpt"></span> Originally looked at an old Rails
application, Citer, and tried to update it to the latest and greatest
version of Rails. But that wasn't working out so great, and there were
some real oddities in the code. So I decided to rewrite it from scratch.
So far, it's working out okay. I've had to figure out a few things here
and there, such as associations. The original author had them all
screwed up, but I've got them sussed out now. <span
id="excerptend"></span>

The core data structure is the publication. Associated data structures
are people, who can be authors or editors; organizations, and tags.

I've got the core of the application up and running now -- I can add new
publications to the data base. People, Organizations and Tags get saved,
but I haven't got them all the way hooked in to where I can manage them
and use them.

Also, there is **no** web design on this yet, it's just the bare bones
files as rendered automatically by rails' generator. A lot of work still
to be done, for sure. I hope to offer this on my home server sometime,
but will have to be sure to add in protections to keep it from getting
spammed.

Of course, once it's done, the fun of adding entries begins!

The structure of the publication data set is based around BibTex, an old
and venerated bibliography maintenance system. I plan on writing
importers and exporters so I can keep things in line with other text
management systems. I will also be supporting XML export, and possibly
RSS feeds.

Other ideas:

-   cover art
-   table of contents
-   misc attachments
-   import/export to GoodReads.com
-   interface with wiki
-   interface with twitter/facebook

Still lots of debugging and development to do

-   redo Organization, make it many to one (a publication has one
    organization, an organization has many publications)
-   get authors, editors, and tags fully working
-   write tests
-   do some design - make it look pretty
-   list pagination
-   auto completion
-   write rdoc

<div class="vspace">

</div>

<div style="display: none;">

Summary:A Ruby on Rails application to manage a bibliography data base
Parent:(Technology.)<span
class="wikiword">[RubyOnRails](http://wiki.tamouse.org?n=Technology.RubyOnRails?action=print)</span>
<span
class="wikiword">[IncludeMe](http://wiki.tamouse.org?n=Technology.IncludeMe?action=edit)[?](http://wiki.tamouse.org?n=Technology.IncludeMe?action=edit)</span>:[RubyOnRails](http://wiki.tamouse.org?n=Technology.RubyOnRails?action=print)
Categories:[Articles](http://wiki.tamouse.org?n=Category.Articles) Tags:
ruby, rails, bibtex, projects

</div>

</div>
