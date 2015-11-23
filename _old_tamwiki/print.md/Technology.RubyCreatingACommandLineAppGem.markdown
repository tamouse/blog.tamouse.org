<div id="wikitext">

<div style="display: none;">

Summary:Steps to create a ruby command line application as a gem
Parent:(Technology.)Ruby <span
class="wikiword">[IncludeMe](http://wiki.tamouse.org?n=Technology.IncludeMe?action=edit)[?](http://wiki.tamouse.org?n=Technology.IncludeMe?action=edit)</span>:[Ruby](http://wiki.tamouse.org?n=Technology.Ruby?action=print)
Categories:[HowTos](http://wiki.tamouse.org?n=Category.HowTos) Tags:
ruby, gem, application, development

</div>

<span id="excerpt"></span> After asking around and hunting up some
information, I've come up with a set of steps that are helpful in
setting up the development environment for a
[Ruby](http://wiki.tamouse.org?n=Technology.Ruby?action=print)
[Gem](http://wiki.tamouse.org?n=Technology.RubyGems?action=edit)[?](http://wiki.tamouse.org?n=Technology.RubyGems?action=edit)
that is a single command line application. <span id="excerptend"></span>

<div class="vspace">

</div>

The Problem
-----------

While automatically generating a
[Rails](http://wiki.tamouse.org?n=Technology.RubyOnRails?action=print)
application is really well documented, creating a single command line
application as a Gem doesn't seem to be easy to find. I finally resorted
to asking on the mailing list, and got a couple of really fine answers.
I'm going to use the [GLI](http://davetron5000.github.com/gli/) method
here, which is great for developing a command line app with mulitple
subcommands (a la git).

(An alternate method, `bundle gem GEMNAME` is described
[here](http://gembundler.com/rubygems.html).)

(At <http://davetron5000.github.com/methadone/> , another method for
generating a simpler sort of command line application is given as well.
The steps below are similar.)

<div class="vspace">

</div>

The Steps
---------

### Install and prepare

<div id="sourceblock1" class="sourceblock">

<div class="sourceblocktext">

<div class="bash">

gem <span class="kw2">install</span> gli <span class="co0">\# Install
gli</span>\
\
 gli init APP\_NAME action1 action2 action3 ... <span class="co0">\#
Initialize the development tree</span>\
\
 <span class="kw3">pushd</span> APP\_NAME <span class="co0">\# make the
development tree root current working directory</span>\
\
 bundle <span class="kw3">exec</span> bin<span
class="sy0">/</span>APP\_NAME <span class="kw3">help</span> <span
class="co0">\# run the new app</span>\
\
 rake <span class="kw3">test</span> <span class="co0">\# test the new
app</span>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.RubyCreatingACommandLineAppGem?action=sourceblock&num=1)

</div>

</div>

<div class="vspace">

</div>

### Add [rspec](http://wiki.tamouse.org?n=Technology.RubyRSpec?action=edit)[?](http://wiki.tamouse.org?n=Technology.RubyRSpec?action=edit) to the project ([cucumber](http://wiki.tamouse.org?n=Technology.RubyCucumber?action=edit)[?](http://wiki.tamouse.org?n=Technology.RubyCucumber?action=edit) has already been added)

<div id="sourceblock2" class="sourceblock">

<div class="sourceblocktext">

<div class="bash">

rspec <span class="re5">--init</span>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.RubyCreatingACommandLineAppGem?action=sourceblock&num=2)

</div>

</div>

If necessary, update the `Gemfile` by adding the following line:

<div class="vspace">

</div>

<div id="sourceblock3" class="sourceblock">

<div class="sourceblocktext">

<div class="ruby">

gem <span class="st0">'rspec'</span>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.RubyCreatingACommandLineAppGem?action=sourceblock&num=3)

</div>

</div>

Modify the `Rakefile` to add the spec task:

<div class="vspace">

</div>

<div id="sourceblock4" class="sourceblock">

<div class="sourceblocktext">

<div class="ruby">

<span class="kw3">require</span> <span
class="st0">'rspec/core/rake\_task'</span>\
 <span class="re2">RSpec::Core::RakeTask</span>.<span
class="me1">new</span><span class="br0">(</span><span
class="st0">'spec'</span><span class="br0">)</span>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.RubyCreatingACommandLineAppGem?action=sourceblock&num=4)

</div>

</div>

Add spec tests to the rake default task, if desired.

<div class="vspace">

</div>

<div id="sourceblock5" class="sourceblock">

<div class="sourceblocktext">

<div class="ruby">

task <span class="re3">:default</span> <span class="sy0">=\></span>
<span class="br0">[</span><span
class="re3">:spec</span>,:test,:features<span class="br0">]</span>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.RubyCreatingACommandLineAppGem?action=sourceblock&num=5)

</div>

</div>

(Of course, you'll want to put this immediately under source code
control, preferably via
[Git](http://wiki.tamouse.org?n=Technology.Git?action=print).)

</div>
