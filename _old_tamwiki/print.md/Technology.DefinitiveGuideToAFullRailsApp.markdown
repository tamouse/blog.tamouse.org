<div id="wikitext">

<span id="excerpt"></span> Recently tilting up a rails application for a
quote data base, and decided to pull everything together into a nice
startup.

**Update:** Look, folks, I'm not burying the lead here. All this below
is interesting and stuff, but just go get [Rails Apps
Composer](https://github.com/RailsApps/rails_apps_composer) which
basically does all the stuff below, only better, cos, yeah, I'm weak.

<span id="excerptend"></span>

Turns out, *everyone* has thought of this. And people have built some
amazing things. If you look up ["rails application
template"](https://www.google.com/search?client=ubuntu&channel=fs&q=rails+application+template&ie=utf-8&oe=utf-8)
on <span style="color: blue;">G</span><span
style="color: red;">o</span><span style="color: yellow;">o</span><span
style="color: blue;">g</span><span style="color: green;">l</span><span
style="color: red;">e</span>, the first few hits give you a wealth of
info:

<div class="vspace">

</div>

-   <http://guides.rubyonrails.org/rails_application_templates.html>
-   [http://edgeguides.rubyonrails.org/rails\_application\_templates.html‎](http://edgeguides.rubyonrails.org/rails_application_templates.html‎)
-   <https://www.ruby-toolbox.com/categories/rails_app_templates>
-   <http://railsapps.github.io/rails-application-templates.html> (which
    lists a *whole* bunch of generators!)

<div class="vspace">

</div>

Rails isn't enough
------------------

Just starting out with `rails new MyApp?` isn't really enough to get
everything together for a very modern rails app. In addition, I wanted
to be running rspec tests, cucumber with a web driver of some kind,
spork to speed up spec tests, watchr to keep running tests when I change
an application file or a spec test, and using haml instead of erb.

Here's the steps I've gone through, and links to web pages where I found
answers.

<div class="vspace">

</div>

Getting Rails 3 running with <span class="wikiword">[RSpec](http://wiki.tamouse.org?n=Technology.RSpec?action=edit)[?](http://wiki.tamouse.org?n=Technology.RSpec?action=edit)</span> 2
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[How To Get Rails 3 and RSpec 2 Running Specs Fast (From
Scratch)](http://www.rubyinside.com/how-to-rails-3-and-rspec-2-4336.html)
by Peter Cooper over at [Ruby Inside](http://www.rubyinside.com) gives a
great tutorial on getting Rails 3 and <span
class="wikiword">[RSpec](http://wiki.tamouse.org?n=Technology.RSpec?action=edit)[?](http://wiki.tamouse.org?n=Technology.RSpec?action=edit)</span>
2 playing together.

It's best to do this integration before you do any work on your
application, as it sets things up really slick.

<div class="vspace">

</div>

### Install a new rails app

<div id="sourceblock1" class="sourceblock">

<div class="sourceblocktext">

<div class="bash">

<div class="head">

Instsall new rails app

</div>

<span class="co4">\$ </span>rails new myapp <span
class="re5">--skip-test-unit</span>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.DefinitiveGuideToAFullRailsApp?action=sourceblock&num=1)

</div>

</div>

<div class="vspace">

</div>

### Edit the `myapp/Gemfile`

Uncomment the following gems:

<div class="vspace">

</div>

-   therubyracer
-   jquery-rails
-   bcrypt-ruby
-   jbuilder
-   unicorn
-   capistrano
-   debugger

Add the following:

<div id="sourceblock2" class="sourceblock">

<div class="sourceblocktext">

<div class="ruby">

<div class="head">

Additions to Gemfile

</div>

1.  <div class="de1">

    gem <span class="st0">'haml'</span>

    </div>

2.  <div class="de1">

     

    </div>

3.  <div class="de1">

    group <span class="re3">:development</span>, <span
    class="re3">:test</span> <span class="kw1">do</span>

    </div>

4.  <div class="de1">

      gem <span class="st0">'rspec-rails'</span>

    </div>

5.  <div class="de2">

      gem <span class="st0">'watchr'</span>

    </div>

6.  <div class="de1">

      gem <span class="st0">'spork'</span>

    </div>

7.  <div class="de1">

    <span class="kw1">end</span>

    </div>

8.  <div class="de1">

     

    </div>

9.  <div class="de1">

    group <span class="re3">:development</span> <span
    class="kw1">do</span>

    </div>

10. <div class="de2">

      gem <span class="st0">'haml-rails'</span>

    </div>

11. <div class="de1">

      gem <span class="st0">'hpricot'</span>

    </div>

12. <div class="de1">

      gem <span class="st0">'ruby\_parser'</span>

    </div>

13. <div class="de1">

      gem <span class="st0">'html2haml'</span>

    </div>

14. <div class="de1">

    <span class="kw1">end</span>

    </div>

15. <div class="de2">

     

    </div>

16. <div class="de1">

    group <span class="re3">:cucumber</span> <span class="kw1">do</span>

    </div>

17. <div class="de1">

      gem <span class="st0">'cucumber-rails'</span>, :<span
    class="kw3">require</span> <span class="sy0">=\></span> <span
    class="kw2">false</span>

    </div>

18. <div class="de1">

      gem <span class="st0">'webrat'</span>

    </div>

19. <div class="de1">

      gem <span class="st0">'database\_cleaner'</span>

    </div>

20. <div class="de2">

    <span class="kw1">end</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.DefinitiveGuideToAFullRailsApp?action=sourceblock&num=2)

</div>

</div>

Then execute:

<div class="vspace">

</div>

<div id="sourceblock3" class="sourceblock">

<div class="sourceblocktext">

<div class="bash">

1.  <div class="de1">

    \$ bundle

    </div>

2.  <div class="de1">

    \$ rails generate rspec:install

    </div>

3.  <div class="de1">

    \$ rails generate cucumber:install

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.DefinitiveGuideToAFullRailsApp?action=sourceblock&num=3)

</div>

</div>

<div class="vspace">

</div>

### Set up watchr

Create `myapp/.watchr.rb`:

<div class="vspace">

</div>

<div id="sourceblock4" class="sourceblock">

<div class="sourceblocktext">

<div class="ruby">

<div class="head">

myapp/.watchr.rb

</div>

1.  <div class="de1">

    <span class="kw1">def</span> run\_spec<span
    class="br0">(</span>file<span class="br0">)</span>

    </div>

2.  <div class="de1">

      <span class="kw1">unless</span> <span
    class="kw4">File</span>.<span class="me1">exist</span>?<span
    class="br0">(</span>file<span class="br0">)</span>

    </div>

3.  <div class="de1">

        <span class="kw3">puts</span> <span class="st0">"\#{file} does
    not exist"</span>

    </div>

4.  <div class="de1">

        <span class="kw2">return</span>

    </div>

5.  <div class="de2">

      <span class="kw1">end</span>

    </div>

6.  <div class="de1">

     

    </div>

7.  <div class="de1">

      <span class="kw3">puts</span> <span class="st0">"Running
    \#{file}"</span>

    </div>

8.  <div class="de1">

      <span class="kw3">system</span> <span class="st0">"bundle exec
    rspec \#{file}"</span>

    </div>

9.  <div class="de1">

      <span class="kw3">puts</span>

    </div>

10. <div class="de2">

    <span class="kw1">end</span>

    </div>

11. <div class="de1">

     

    </div>

12. <div class="de1">

    watch<span class="br0">(</span><span
    class="st0">"spec/.\*/\*\_spec.rb"</span><span class="br0">)</span>
    <span class="kw1">do</span> <span class="sy0">|</span>match<span
    class="sy0">|</span>

    </div>

13. <div class="de1">

      run\_spec match<span class="br0">[</span><span
    class="nu0">0</span><span class="br0">]</span>

    </div>

14. <div class="de1">

    <span class="kw1">end</span>

    </div>

15. <div class="de2">

     

    </div>

16. <div class="de1">

    watch<span class="br0">(</span><span
    class="st0">"app/(.\*/.\*).rb"</span><span class="br0">)</span>
    <span class="kw1">do</span> <span class="sy0">|</span>match<span
    class="sy0">|</span>

    </div>

17. <div class="de1">

      run\_spec <span class="sy0">%</span><span
    class="br0">{</span>spec<span class="sy0">/</span><span
    class="co1">\#{match[1]}\_spec.rb}</span>

    </div>

18. <div class="de1">

    <span class="kw1">end</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.DefinitiveGuideToAFullRailsApp?action=sourceblock&num=4)

</div>

</div>

Create `lib/tasks/watchr.rake`:

<div class="vspace">

</div>

<div id="sourceblock5" class="sourceblock">

<div class="sourceblocktext">

<div class="ruby">

<div class="head">

myapp/lib/tasks/watchr.rake

</div>

1.  <div class="de1">

    desc <span class="st0">"Run watchr"</span>

    </div>

2.  <div class="de1">

    task <span class="re3">:watchr</span> <span class="kw1">do</span>

    </div>

3.  <div class="de1">

      sh <span class="sy0">%</span><span class="br0">{</span>bundle
    <span class="kw3">exec</span> watchr .<span
    class="me1">watchr</span>.<span class="me1">rb</span><span
    class="br0">}</span>

    </div>

4.  <div class="de1">

    <span class="kw1">end</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.DefinitiveGuideToAFullRailsApp?action=sourceblock&num=5)

</div>

</div>

<div class="vspace">

</div>

### Set up spork

Run:

<div class="vspace">

</div>

<div id="sourceblock6" class="sourceblock">

<div class="sourceblocktext">

<div class="bash">

<span class="co4">\$ </span>spork <span class="re5">--bootstrap</span>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.DefinitiveGuideToAFullRailsApp?action=sourceblock&num=6)

</div>

</div>

Then edit `myapp/spec/spec_helper.rb` as stated in the instructions
`spork` just added. (Basically, move everything up into
`Spork.prefork`.)

Edit `myapp/.rspec` by adding `--drb` to the file. File contents should
be:

<div class="vspace">

</div>

<div id="sourceblock7" class="sourceblock">

<div class="sourceblocktext">

<div class="text">

<div class="head">

myapp/.rspec

</div>

1.  <div class="de1">

    --colour

    </div>

2.  <div class="de1">

    --drb

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.DefinitiveGuideToAFullRailsApp?action=sourceblock&num=7)

</div>

</div>

Copy `config/environments/test.rb` to `config/environments/cucumber.rb`.

Edit `config/environments/test.rb` and change `config.cache_classes`
from `true` to `false`.

<div class="vspace">

</div>

Stand up database for first time
--------------------------------

For a new rails application, you have to ensure the database is there to
start developing. To do this, just run:

<div class="vspace">

</div>

<div id="sourceblock8" class="sourceblock">

<div class="sourceblocktext">

<div class="bash">

<span class="co4">\$ </span>bundle <span class="kw3">exec</span> rake
db:migrate

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.DefinitiveGuideToAFullRailsApp?action=sourceblock&num=8)

</div>

</div>

and you'll be good to go.

<div class="vspace">

</div>

------------------------------------------------------------------------

<div class="vspace">

</div>

Standing the application up for development and test
----------------------------------------------------

### Foreman

[Foreman](https://github.com/ddollar/foreman#readme) is a wonderful
utility that can run your rails server, spork, watchr, tail the log
file, and whatever else you need running to make your application fly.

<div class="vspace">

</div>

### Set up the Foreman Procfile

<div id="sourceblock9" class="sourceblock">

<div class="sourceblocktext">

<div class="text">

<div class="head">

Procfile

</div>

1.  <div class="de1">

    web: bundle exec rails server -d

    </div>

2.  <div class="de1">

    spork: spork

    </div>

3.  <div class="de1">

    watchr: bundle exec rake watchr

    </div>

4.  <div class="de1">

    log: tail -f log/development.log

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.DefinitiveGuideToAFullRailsApp?action=sourceblock&num=9)

</div>

</div>

<div class="vspace">

</div>

### Start up Foreman

<div id="sourceblock10" class="sourceblock">

<div class="sourceblocktext">

<div class="bash">

<span class="co4">\$ </span>foreman start

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.DefinitiveGuideToAFullRailsApp?action=sourceblock&num=10)

</div>

</div>

<div class="vspace">

</div>

### Now, run some tests

Nothing is there yet, let's see what passes.

To utilizy `spork` effectively, don't run the standard `rake` task.
Instead run:

<div class="vspace">

</div>

<div id="sourceblock11" class="sourceblock">

<div class="sourceblocktext">

<div class="bash">

<span class="co4">\$ </span>rspec spec

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.DefinitiveGuideToAFullRailsApp?action=sourceblock&num=11)

</div>

</div>

Running cucumber tests is a slightly different matter. We've created a
cucumber environment, so let's use it:

<div class="vspace">

</div>

<div id="sourceblock12" class="sourceblock">

<div class="sourceblocktext">

<div class="bash">

<span class="co4">\$ </span><span class="re2">RAILS\_ENV</span>=<span
class="st_h">'cucumber'</span> rake cucumber

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.DefinitiveGuideToAFullRailsApp?action=sourceblock&num=12)

</div>

</div>

<div class="vspace">

</div>

### Set up HAML

There is nothing you need to particularly do to use HAML other than
include the gems in the `Gemfile` as shown above.

There are some gems that do not play well with HAML though, insisting on
creating erb files instead. Over at [XPressive Code .
com](http://xpressivecode.com) however, they've come up with a
`rake`{.escaped} task to make the conversion easy -\>
<http://xpressivecode.com/2012/2/9/rails-rake-task-for-html2haml.aspx>]].

Create a new task in `lib/tasks` called `erb2haml.rake`:

<div class="vspace">

</div>

<div id="sourceblock13" class="sourceblock">

<div class="sourceblocktext">

<div class="ruby">

<div class="head">

myapp/lib/tasks/erb2haml.rake

</div>

1.  <div class="de1">

    namespace <span class="re3">:erb</span> <span class="kw1">do</span>

    </div>

2.  <div class="de1">

      namespace <span class="re3">:to</span> <span class="kw1">do</span>

    </div>

3.  <div class="de1">

        desc <span class="st0">"Converts all .html.erb files to
    .html.haml"</span>

    </div>

4.  <div class="de1">

        task <span class="re3">:haml</span> <span class="kw1">do</span>

    </div>

5.  <div class="de2">

          <span class="kw3">print</span> <span class="st0">"looking for
    erb views..<span class="es0">\\n</span>"</span>

    </div>

6.  <div class="de1">

          files = <span class="kw4">Dir</span>.<span
    class="me1">glob</span><span class="br0">(</span><span
    class="kw4">File</span>.<span class="me1">join</span><span
    class="br0">(</span>Rails.<span class="me1">root</span>,<span
    class="st0">"app"</span>,<span class="st0">"views"</span>,<span
    class="st0">"\*\*"</span>,<span
    class="st0">"\*.html.erb"</span><span class="br0">)</span><span
    class="br0">)</span>

    </div>

7.  <div class="de1">

          files.<span class="me1">each\_line</span> <span
    class="kw1">do</span> <span class="sy0">|</span>file<span
    class="sy0">|</span>

    </div>

8.  <div class="de1">

            file.<span class="me1">strip</span>!

    </div>

9.  <div class="de1">

            <span class="kw3">print</span> <span class="st0">"parsing
    file: \#{file}<span class="es0">\\n</span>"</span>

    </div>

10. <div class="de2">

            sh <span class="st0">"bundle exec html2haml \#{file} |
    cat \> \#{file.gsub(/<span class="es0">\\.</span>erb\$/,
    "</span>.<span class="me1">haml</span><span class="st0">")}"</span>

    </div>

11. <div class="de1">

            <span class="kw4">File</span>.<span
    class="me1">unlink</span><span class="br0">(</span>file<span
    class="br0">)</span>

    </div>

12. <div class="de1">

          <span class="kw1">end</span>

    </div>

13. <div class="de1">

        <span class="kw1">end</span>

    </div>

14. <div class="de1">

      <span class="kw1">end</span>

    </div>

15. <div class="de2">

    <span class="kw1">end</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.DefinitiveGuideToAFullRailsApp?action=sourceblock&num=13)

</div>

</div>

which can then be used to convert any generated erb files to haml files
thusly:

<div class="vspace">

</div>

<div id="sourceblock14" class="sourceblock">

<div class="sourceblocktext">

<div class="bash">

<span class="co4">\$ </span>rake erb:to:haml

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.DefinitiveGuideToAFullRailsApp?action=sourceblock&num=14)

</div>

</div>

<div class="vspace">

</div>

Proceed with incremental testing and development, with refactoring
------------------------------------------------------------------

Now you can stand up your application, and things should be cool. Write
some spec tests, some cucumber features, and some code. With `watchr`
and `spork` running, new files and changes to files in the `myapp/spec`
and `myapp/app` directories should cause the spec tests to run.

<div class="vspace">

</div>

~~TODO: create a rails application template that does all this~~
----------------------------------------------------------------

**TODONE!** See <https://github.com/RailsApps/rails_apps_composer> for
such a beast.

Rails lets you create application templates that bundle your own version
of a new rails application together to be run with
`rails new`{.escaped}:

<div class="vspace">

</div>

<div id="sourceblock15" class="sourceblock">

<div class="sourceblocktext">

<div class="bash">

<span class="co4">\$ </span>rails new APP\_PATH <span
class="re5">--template</span>=TEMPLATE

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.DefinitiveGuideToAFullRailsApp?action=sourceblock&num=15)

</div>

</div>

<div class="vspace">

</div>

<div style="display: none;">

Summary:How to get a fully-loaded Rails app with rspec, cucumber,
watchr, spork, haml Parent:(Technology.)<span
class="wikiword">[RubyOnRails](http://wiki.tamouse.org?n=Technology.RubyOnRails?action=print)</span>
<span
class="wikiword">[IncludeMe](http://wiki.tamouse.org?n=Technology.IncludeMe?action=edit)[?](http://wiki.tamouse.org?n=Technology.IncludeMe?action=edit)</span>:[RubyOnRails](http://wiki.tamouse.org?n=Technology.RubyOnRails?action=print)
Categories:[HowTos](http://wiki.tamouse.org?n=Category.HowTos) Tags:
ruby, rails, application, web development, setup, howto

</div>

</div>
