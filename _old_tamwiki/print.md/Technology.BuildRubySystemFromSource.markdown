<div id="wikitext">

<span id="excerpt"></span> Installing
[Ruby](http://wiki.tamouse.org?n=Technology.Ruby?action=print) can be
difficult sometimes. With the number of different operating system
distributions, number of versions, and possible local configurations, it
is hard to make a one-stop install that fits every user's need.

The primary resource for installing
[Ruby](http://wiki.tamouse.org?n=Technology.Ruby?action=print) remains
the [download page](http://www.ruby-lang.org/en/downloads/) on the
[ruby-lang](http://www.ruby-lang.org) site itself.

If you can, you should first try to install
[Ruby](http://wiki.tamouse.org?n=Technology.Ruby?action=print) using
tools such as
[rvm](http://wiki.tamouse.org?n=Technology.Rvm?action=edit)[?](http://wiki.tamouse.org?n=Technology.Rvm?action=edit),
[rbenv](http://wiki.tamouse.org?n=Technology.Rbenv?action=edit)[?](http://wiki.tamouse.org?n=Technology.Rbenv?action=edit),
[ruby-build](http://wiki.tamouse.org?n=Technology.Ruby-build?action=edit)[?](http://wiki.tamouse.org?n=Technology.Ruby-build?action=edit),
and so on.

These represent the minimal set of steps to install
[Ruby](http://wiki.tamouse.org?n=Technology.Ruby?action=print) on a
[Linux](http://wiki.tamouse.org?n=Technology.Linux?action=print) system
from the source. To install
[Ruby](http://wiki.tamouse.org?n=Technology.Ruby?action=print) from on a
Mac, use
[HomeBrew](http://wiki.tamouse.org?n=Technology.HomeBrew?action=edit)[?](http://wiki.tamouse.org?n=Technology.HomeBrew?action=edit).
To install
[Ruby](http://wiki.tamouse.org?n=Technology.Ruby?action=print) on
[Windows](http://wiki.tamouse.org?n=Technology.Windows?action=print),
please see [RubyInstaller](http://rubyinstaller.org/). <span
id="excerptend"></span>

<div class="vspace">

</div>

Install your favourite distribution
-----------------------------------

These instructions work for any [Debian-based](http://debian.org) linux
system, as well as some others.

The Debian system installer,
[apt](http://wiki.tamouse.org?n=Technology.Apt?action=edit)[?](http://wiki.tamouse.org?n=Technology.Apt?action=edit),
is assumed here. Other linux distributions have different installers,
and potentially other package names.

<div class="vspace">

</div>

Log in as root
--------------

<div id="sourceblock1" class="sourceblock">

<div class="sourceblocktext">

<div class="bash">

\$ <span class="kw2">sudo</span> <span class="re5">-i</span>\
 Password: <span class="co0">\# enter your user's password</span>\
 \$

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.BuildRubySystemFromSource?action=sourceblock&num=1)

</div>

</div>

<div class="vspace">

</div>

Install Packages Ruby Needs to Build from Source
------------------------------------------------

<div id="sourceblock2" class="sourceblock">

<div class="sourceblocktext">

<div class="bash">

<span class="co4">\$ </span><span class="kw2">apt-get install</span>
<span class="sy0">\<</span>package<span class="sy0">\></span> <span
class="co0">\# see list below</span>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.BuildRubySystemFromSource?action=sourceblock&num=2)

</div>

</div>

<div class="vspace">

</div>

### Ruby needs these to build correctly.

-   build-essential
-   git-core
-   curl
-   bison
-   openssl
-   libreadline6
-   libreadline6-dev
-   zlib1g
-   zlib1g-dev
-   libssl-dev
-   libyaml-dev
-   libxml2-dev
-   libxslt-dev
-   autoconf
-   libc6-dev
-   ncurses-dev
-   libcurl4-openssl-dev
-   libopenssl-ruby
-   apache2-prefork-dev
-   libapr1-dev
-   libaprutil1-dev
-   libx11-dev
-   libffi-dev
-   tcl-dev
-   tk-dev

These will pull in other packages as needed.

<div class="vspace">

</div>

<div id="sourceblock3" class="sourceblock">

<div class="sourceblocktext">

<div class="bash">

1.  <div class="de1">

    \$ <span class="kw2">apt-get install</span> build-essential git-core
    curl <span class="kw2">bison</span> openssl \\

    </div>

2.  <div class="de1">

    libreadline6  libreadline6-dev zlib1g zlib1g-dev libssl-dev \\

    </div>

3.  <div class="de1">

    libyaml-dev libxml2-dev libxslt-dev <span
    class="kw2">autoconf</span> libc6-dev ncurses-dev \\

    </div>

4.  <div class="de1">

    libcurl4-openssl-dev libopenssl-ruby apache2-prefork-dev libapr1-dev
    \\

    </div>

5.  <div class="de2">

    libaprutil1-dev libx11-dev libffi-dev tcl-dev tk-dev

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.BuildRubySystemFromSource?action=sourceblock&num=3)

</div>

</div>

<div class="vspace">

</div>

Acquire the Ruby Source
-----------------------

Download the latest version of Ruby here:
<http://www.ruby-lang.org/en/downloads/> under the Compiling Ruby ??
Source code section.

<div class="vspace">

</div>

<div id="sourceblock4" class="sourceblock">

<div class="sourceblocktext">

<div class="bash">

<span class="kw3">cd</span> <span class="sy0">/</span>usr<span
class="sy0">/</span>src\
 <span class="kw2">wget</span> http:<span
class="sy0">//</span>cache.ruby-lang.org<span
class="sy0">/</span>pub<span class="sy0">/</span>ruby<span
class="sy0">/</span><span class="nu0">2.1</span><span
class="sy0">/</span>ruby-2.1.0.tar.gz\
 <span class="kw2">tar</span> zxvf ruby-2.1.0.tar.gz\
 <span class="kw3">cd</span> ruby-2.1.0

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.BuildRubySystemFromSource?action=sourceblock&num=4)

</div>

</div>

<div class="vspace">

</div>

Do the needful
--------------

This is the point where you will actually configure, build, and install
ruby onto your system. Deciding where to put the new version is
something you have to consider.

Installing into `/usr` directory will replace the existing system ruby.
This isn't a bad idea in all cases, but some packages and utilities may
rely on features in the old version of ruby. Still, I haven't
encountered any problems in do this on a modern running debian-based
system.

Installing into `/usr/local` is a popular option, but you need to ensure
that you have your environment set up to know which ruby to run. When
logged in, it is rather simple to keep the `/usr/local` directory before
the `/usr` directory in your `PATH` environment variable, which is all
that should really be necessary. However, in other environments, such as
`crontab` and other system settings, you might need to do a little more
to ensure the `PATH` is set correctly.

<div class="vspace">

</div>

<div id="sourceblock5" class="sourceblock">

<div class="sourceblocktext">

<div class="bash">

.<span class="sy0">/</span>configure <span
class="re5">--prefix</span>=<span class="sy0">/</span>usr <span
class="co0">\# default setups</span>\
 <span class="kw2">make</span> <span class="co0">\# compiles the
source</span>\
 <span class="kw2">make</span> <span class="kw2">install</span> <span
class="co0">\# installs the programs in /usr/bin, etc</span>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.BuildRubySystemFromSource?action=sourceblock&num=5)

</div>

</div>

<div class="vspace">

</div>

Test the install
----------------

<div id="sourceblock6" class="sourceblock">

<div class="sourceblocktext">

<div class="bash">

<span class="kw3">cd</span>\
 <span class="kw2">which</span> ruby; ruby <span
class="re5">--version</span>\
 <span class="kw2">which</span> irb; irb <span
class="re5">--version</span>\
 <span class="kw2">which</span> gem; gem <span
class="re5">--version</span>\
 <span class="kw2">which</span> rake; rake <span
class="re5">--version</span>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.BuildRubySystemFromSource?action=sourceblock&num=6)

</div>

</div>

<div class="vspace">

</div>

Install some gems
-----------------

<div id="sourceblock7" class="sourceblock">

<div class="sourceblocktext">

<div class="bash">

gem <span class="kw2">install</span> bundler\
 gem <span class="kw2">install</span> rails

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.BuildRubySystemFromSource?action=sourceblock&num=7)

</div>

</div>

[`bundler`](http://bundler.io) is probably the most important gem to
install. It is used to manage gems for developing programs, libraries,
ruby packages, and applications. Install it, and be happy.

[Rails](http://wiki.tamouse.org?n=Technology.RubyOnRails?action=print)
is the premier web application framework based on
[Ruby](http://wiki.tamouse.org?n=Technology.Ruby?action=print) and is
the reason so many people learn Ruby. It's not the only one, so you
don't have to install it, but it's really a good test of a new
installation of ruby.

<div class="vspace">

</div>

Logout from root, login as user
-------------------------------

Of note, since you've compiled and installed ruby as the system ruby,
you will need to continue installing gems as the superuser, unless you
set the environment variable `GEM_PATH` in your user's `.profile` to
something you can write to. This is the best way to do development, with
your own local per-user set of gems. When you deploy your ruby projects,
you'll be able to decide at that point where and how to install
necessary gems.

<div class="vspace">

</div>

Create a new gem
----------------

<div id="sourceblock8" class="sourceblock">

<div class="sourceblocktext">

<div class="bash">

1.  <div class="de1">

    \$ <span class="kw2">mkdir</span> <span class="re5">-p</span>
    \~<span class="sy0">/</span>Projects<span
    class="sy0">/</span>ruby\_projects

    </div>

2.  <div class="de1">

    \$ <span class="kw3">cd</span> \~<span
    class="sy0">/</span>Projects<span class="sy0">/</span>ruby\_projects

    </div>

3.  <div class="de1">

    \$ bundle gem my\_test\_gem

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.BuildRubySystemFromSource?action=sourceblock&num=8)

</div>

</div>

<div class="vspace">

</div>

Create a test rails app
-----------------------

<div id="sourceblock9" class="sourceblock">

<div class="sourceblocktext">

<div class="bash">

1.  <div class="de1">

    \$ <span class="kw2">mkdir</span> <span class="re5">-p</span>
    \~<span class="sy0">/</span>Websites<span class="sy0">/</span>rails

    </div>

2.  <div class="de1">

    \$ <span class="kw3">cd</span> \~<span
    class="sy0">/</span>Websites<span class="sy0">/</span>rails

    </div>

3.  <div class="de1">

    \$ rails new my\_test\_rails

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.BuildRubySystemFromSource?action=sourceblock&num=9)

</div>

</div>

<div class="vspace">

</div>

<div style="display: none;">

Summary: A step-by-step recording of building a Ruby dev system from
source Parent:(Technology.)Ruby <span
class="wikiword">[IncludeMe](http://wiki.tamouse.org?n=Technology.IncludeMe?action=edit)[?](http://wiki.tamouse.org?n=Technology.IncludeMe?action=edit)</span>:[Ruby](http://wiki.tamouse.org?n=Technology.Ruby?action=print)
Categories:[Articles](http://wiki.tamouse.org?n=Category.Articles),
[HowTos](http://wiki.tamouse.org?n=Category.HowTos) Tags: ruby, howtos

</div>

</div>
