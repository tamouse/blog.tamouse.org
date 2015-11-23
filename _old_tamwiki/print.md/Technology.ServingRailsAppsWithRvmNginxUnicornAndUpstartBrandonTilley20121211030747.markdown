<div id="wikitext">

<div class="round lrindent quote">

Serving Rails Apps with RVM, Nginx, Unicorn and Upstart
=======================================================

-   Posted Saturday, January 29, 2011
-   [Brandon Tilley.com](http://brandontilley.com)

Ever since reading [GitHub’s blog post on
Unicorn](https://github.com/blog/517-unicorn), I’ve been interested in
trying it out. This post will document the process I used to get Unicorn
serving a Rails application behind Nginx, with RVM managing Ruby. If
you’ve read <span class="wikiword">GitHub</span>’s post, some of the
config will look very familiar. Ideally, though, you should be able to
follow this post from start to finish and have a working setup going.

<div class="vspace">

</div>

Introduction
============

I installed this setup on Ubuntu 10.04 LTS Server Edition, 64-bit. You
should be able to follow along pretty well on any sane system; that
being said, I do use Upstart to manage the services toward the end of
the guide. If you don’t use Upstart, you will need to substitute in your
own <span class="wikiword">SysVinit</span> scripts (or scripts for
whatever you use instead).

In a few listings, I use curl with Gist <span
class="wikiword">URLs</span> to fetch the contents of files; the
contents of these files are shown below the shell commands, for
reference.

<div class="vspace">

</div>

Installing RVM
==============

Since we’ll use RVM to manage our Rubies and gemsets on the server,
we’ll start with a server-wide install of RVM. We’ll start out by
installing curl and git, if necessary, then RVM, and finally the other
packages RVM asks us to install. (Be sure to pay attention to these; you
can view them again via `rvm notes`. You may need to install additional
packages for your distro of Linux or for the Rubies you wish to use).
I’m using Ruby 1.9.2-p136 here.

We’ll also take care to add the current user to the ‘rvm’ group.
Finally, we’ll create a user called ‘unicorn’ to own our test
application, later.

<div class="vspace">

</div>

<div id="sourceblock1" class="sourceblock">

<div class="sourceblocktext">

<div class="bash">

<span class="co0">\# Install RVM and dependencies</span>\
 <span class="kw2">sudo</span> <span class="kw2">aptitude</span> <span
class="kw2">install</span> curl git-core\
 <span class="kw2">sudo</span> <span class="kw2">bash</span> <span
class="sy0">\<</span> <span class="sy0">\<</span><span
class="br0">(</span> curl <span class="re5">-L</span> http:<span
class="sy0">//</span>bit.ly<span
class="sy0">/</span>rvm-install-system-wide <span class="br0">)</span>\
 <span class="kw2">sudo</span> <span class="kw2">aptitude</span> <span
class="kw2">install</span> build-essential <span
class="kw2">bison</span> openssl libreadline6 libreadline6-dev curl
git-core zlib1g zlib1g-dev libssl-dev libyaml-dev libsqlite3-<span
class="nu0">0</span> libsqlite3-dev sqlite3 libxml2-dev libxslt-dev
<span class="kw2">autoconf</span> libc6-dev\
 <span class="kw2">sudo</span> adduser <span class="sy0">\`</span><span
class="kw2">whoami</span><span class="sy0">\`</span> rvm\
 <span class="kw3">echo</span> <span class="st_h">'source
/usr/local/lib/rvm'</span> <span class="sy0">\>\></span> \~<span
class="sy0">/</span>.bashrc\
 <span class="co0">\# Set up users and groups</span>\
 <span class="kw2">sudo</span> useradd <span class="re5">--home</span>
<span class="sy0">/</span>var<span class="sy0">/</span>www <span
class="re5">--create-home</span> <span class="re5">--groups</span> rvm
unicorn <span class="sy0">&&</span> <span class="kw2">sudo</span> <span
class="kw2">chmod</span> g+<span class="kw2">w</span> <span
class="sy0">/</span>var<span class="sy0">/</span>www\
 <span class="kw2">sudo</span> adduser <span class="sy0">\`</span><span
class="kw2">whoami</span><span class="sy0">\`</span> unicorn\
 <span class="co0">\#</span>\
 <span class="co0">\# \>\> Log out and back in to SSH, open a new shell,
etc. -- something to reload your environment</span>\
 <span class="co0">\#</span>\
 <span class="co0">\# Install Ruby 1.9.2-p136 and make it
default</span>\
 rvm <span class="kw2">install</span> ruby-1.9.2-p136\
 <span class="co0">\# Make a sandwich while you wait (or have someone
make you one: http://xkcd.com/149/)</span>\
 rvm use ruby-1.9.2-p136 <span class="re5">--default</span>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.ServingRailsAppsWithRvmNginxUnicornAndUpstartBrandonTilley20121211030747?action=sourceblock&num=1)

</div>

</div>

<div class="vspace">

</div>

Installing and Configuring Nginx
================================

For simplicity’s sake, we’ll be using Nginx from APT. To make sure we’re
up to date, we’ll use Nginx’s PPA.

You can see in the configuration file that I’ve jumped the gun and
included the location of the shared socket we’ll use with our Unicorn
application.

<div class="vspace">

</div>

<div id="sourceblock2" class="sourceblock">

<div class="sourceblocktext">

<div class="bash">

<span class="co0">\# Install Nginx</span>\
 <span class="kw2">sudo</span> <span class="kw2">bash</span> <span
class="re5">-c</span> <span class="st_h">'echo "deb
http://ppa.launchpad.net/nginx/stable/ubuntu \$(lsb\_release -cs)
main" \>
/etc/apt/sources.list.d/nginx-stable-\$(lsb\_release -cs).list'</span>\
 <span class="kw2">sudo</span> <span class="kw2">apt-key adv</span>
<span class="re5">--keyserver</span> keyserver.ubuntu.com <span
class="re5">--recv-keys</span> C300EE8C <span class="sy0">&&</span>
<span class="kw2">sudo</span> <span class="kw2">aptitude</span> update\
 <span class="kw2">sudo</span> <span class="kw2">aptitude</span> <span
class="kw2">install</span> nginx\
 <span class="kw2">sudo</span> <span class="kw2">bash</span> <span
class="re5">-c</span> <span class="st_h">'curl -L
https://gist.github.com/raw/802568/3a62636146eb2615cf42081b2574e8602d199658/nginx.conf \>
/etc/nginx/nginx.conf'</span>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.ServingRailsAppsWithRvmNginxUnicornAndUpstartBrandonTilley20121211030747?action=sourceblock&num=2)

</div>

</div>

<div class="vspace">

</div>

<div id="sourceblock3" class="sourceblock">

<div class="sourceblocktext">

<div class="text">

<div class="head">

/etc/nginx/nginx.conf

</div>

worker\_processes 1;\
 user www-data www-data;\
\
 pid /tmp/nginx.pid;\
 error\_log /tmp/nginx.error.log;\
\
 events {\
   worker\_connections 1024;\
   accept\_mutex off;\
 }\
\
 http {\
   include mime.types;\
   default\_type application/octet-stream;\
   access\_log /tmp/nginx.access.log combined;\
\
   sendfile on;\
   tcp\_nopush on;\
   tcp\_nodelay off;\
\
   gzip on;\
   gzip\_http\_version 1.0;\
   gzip\_proxied any;\
   gzip\_min\_length 500;\
   gzip\_disable "MSIE [1-6]\\.";\
   gzip\_types text/plain text/html text/xml text/css\
              text/comma-separated-values\
              text/javascript application/x-javascript\
              application/atom+xml;\
\
   upstream unicorn\_test {\
     server unix:/var/www/test\_app/tmp/sockets/unicorn.sock
fail\_timeout=0;\
   }\
\
   server {\
     listen 80;\
     client\_max\_body\_size 4G;\
     server\_name \_;\
\
     keepalive\_timeout 5;\
\
     root /var/www/test\_app/public;\
\
     location / {\
       proxy\_set\_header X-Forwarded-For
\$proxy\_add\_x\_forwarded\_for;\
       proxy\_set\_header Host \$http\_host;\
       proxy\_redirect off;\
\
       if (!-f \$request\_filename) {\
         proxy\_pass http://unicorn\_test;\
         break;\
       }\
     }\
\
     error\_page 500 502 503 504 /500.html;\
     location = /500.html {\
       root /var/www/test\_app/public;\
     }\
   }\
 }

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.ServingRailsAppsWithRvmNginxUnicornAndUpstartBrandonTilley20121211030747?action=sourceblock&num=3)

</div>

</div>

<div class="vspace">

</div>

Configuring Upstart for Nginx
=============================

If you don’t use Upstart, or you don’t want to use Upstart, feel free to
skip this section. By default, you can start Nginx with
`sudo /etc/init.d/nginx start`.

<div class="vspace">

</div>

<div id="sourceblock4" class="sourceblock">

<div class="sourceblocktext">

<div class="bash">

<span class="kw2">sudo</span> <span class="kw2">rm</span> <span
class="sy0">/</span>etc<span class="sy0">/</span>init.d<span
class="sy0">/</span>nginx\
 <span class="kw1">for</span> <span class="kw2">file</span> <span
class="kw1">in</span> \$<span class="br0">(</span><span
class="kw2">ls</span> <span class="sy0">/</span>etc<span
class="sy0">/</span>rc<span class="sy0">\*/\*</span>nginx<span
class="br0">)</span>; <span class="kw1">do</span> <span
class="kw2">sudo</span> <span class="kw2">rm</span> <span
class="re1">\$file</span>; <span class="kw1">done</span>\
 <span class="kw2">sudo</span> <span class="kw2">bash</span> <span
class="re5">-c</span> <span class="st_h">'curl -L
https://gist.github.com/raw/802568/e210f8754abdf137027daeb4c41db8cc301b36ad/nginx.conf \>
/etc/init/nginx.conf'</span>\
 <span class="kw2">sudo</span> start nginx

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.ServingRailsAppsWithRvmNginxUnicornAndUpstartBrandonTilley20121211030747?action=sourceblock&num=4)

</div>

</div>

<div class="vspace">

</div>

<div id="sourceblock5" class="sourceblock">

<div class="sourceblocktext">

<div class="text">

<div class="head">

"/etc/init/nginx.conf

</div>

description "nginx http daemon"\
\
 start on runlevel [2]\
 stop on runlevel [016]\
\
 console owner\
\
 exec /usr/sbin/nginx -c /etc/nginx/nginx.conf -g "daemon off;"\
\
 respawn

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.ServingRailsAppsWithRvmNginxUnicornAndUpstartBrandonTilley20121211030747?action=sourceblock&num=5)

</div>

</div>

<div class="vspace">

</div>

Creating a Sample Rails Application
===================================

Now we’ll create a test Rails application in /var/www/test\_app. We’ll
use a gemset called rails\_app to demonstrate Unicorn’s ability to
figure out which gemset it should use for our application (for more
details on this, check out step four in [my earlier post on Unicorn and
Upstart](http://brandontilley.com:80/2011/01/29/rvm-unicorn-and-upstart.html)).
For this to work, we’ll also create an RVM wrapper for Unicorn. And, of
course, don’t forget your config/unicorn.rb file.

Again, we’ll use Upstart to start and manage our Unicorn process, but
you can use whatever you’d like. If you just want to test it out, try
running `unicorn -c /var/www/test_app/config/unicorn.rb` from the
‘global’ gemset.

<div class="vspace">

</div>

<div id="sourceblock6" class="sourceblock">

<div class="sourceblocktext">

<div class="bash">

<span class="co0">\# Install Unicorn in the global gemset, and create a
wrapper (yo yo yo in the hooouuuuuse!?)</span>\
 rvm use ruby-1.9.2-p136<span class="sy0">@</span>global\
 gem <span class="kw2">install</span> unicorn <span
class="re5">--no-ri</span> <span class="re5">--no-rdoc</span>\
 rvm wrapper ruby-1.9.2-p136 r192 unicorn\
 <span class="co0">\# Create and switch to a new gemset</span>\
 rvm gemset create rails\_app <span class="sy0">&&</span> rvm gemset use
rails\_app\
 gem <span class="kw2">install</span> rails <span
class="re5">--no-ri</span> <span class="re5">--no-rdoc</span>\
 <span class="co0">\# Create a sample Rails application</span>\
 <span class="kw3">cd</span> <span class="sy0">/</span>var<span
class="sy0">/</span>www\
 rails new test\_app\
 <span class="kw3">echo</span> <span class="st_h">'rvm use
ruby-1.9.2-p136@rails\_app --create'</span> <span class="sy0">\></span>
test\_app<span class="sy0">/</span>.rvmrc\
 <span class="kw3">cd</span> test\_app\
 <span class="co0">\#</span>\
 <span class="co0">\# \>\> Accept the .rvmrc warning</span>\
 <span class="co0">\#</span>\
 <span class="kw3">echo</span> <span class="st0">"gem 'unicorn'"</span>
<span class="sy0">\>\></span> Gemfile <span class="sy0">&&</span> bundle
<span class="kw2">install</span>\
 curl <span class="re5">-L</span> https:<span
class="sy0">//</span>gist.github.com<span class="sy0">/</span>raw<span
class="sy0">/</span><span class="nu0">802568</span><span
class="sy0">/</span>998ac7c702e43d600f94fc3ee63ea05179315a0d<span
class="sy0">/</span>unicorn.rb <span class="sy0">\></span> config<span
class="sy0">/</span>unicorn.rb\
 <span class="kw2">sudo</span> <span class="kw2">bash</span> <span
class="re5">-c</span> <span class="st_h">'curl -L
https://gist.github.com/raw/802568/ee3f5f320c34ec2e1d1b55521776d7dccd9140d4/test\_app.conf \>
/etc/init/test\_app.conf'</span>\
 <span class="kw2">sudo</span> start test\_app

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.ServingRailsAppsWithRvmNginxUnicornAndUpstartBrandonTilley20121211030747?action=sourceblock&num=6)

</div>

</div>

<div class="vspace">

</div>

<div id="sourceblock7" class="sourceblock">

<div class="sourceblocktext">

<div class="text">

<div class="head">

/etc/init/test\_app.conf

</div>

description "Test rails application"\
\
 start on runlevel [2]\
 stop on runlevel [016]\
\
 console owner\
\
 exec /usr/local/rvm/bin/r192\_unicorn -c
/var/www/test\_app/config/unicorn.rb\
\
 respawn

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.ServingRailsAppsWithRvmNginxUnicornAndUpstartBrandonTilley20121211030747?action=sourceblock&num=7)

</div>

</div>

<div class="vspace">

</div>

<div id="sourceblock8" class="sourceblock">

<div class="sourceblocktext">

<div class="ruby">

<div class="head">

/var/www/test\_app/config/unicorn.rb

</div>

APP\_ROOT = <span class="kw4">File</span>.<span
class="me1">expand\_path</span><span class="br0">(</span><span
class="kw4">File</span>.<span class="me1">dirname</span><span
class="br0">(</span><span class="kw4">File</span>.<span
class="me1">dirname</span><span class="br0">(</span><span
class="kw2">\_\_FILE\_\_</span><span class="br0">)</span><span
class="br0">)</span><span class="br0">)</span>\
\
 <span class="kw1">if</span> ENV<span class="br0">[</span><span
class="st0">'MY\_RUBY\_HOME'</span><span class="br0">]</span> <span
class="sy0">&&</span> ENV<span class="br0">[</span><span
class="st0">'MY\_RUBY\_HOME'</span><span class="br0">]</span>.<span
class="kw1">include</span>?<span class="br0">(</span><span
class="st0">'rvm'</span><span class="br0">)</span>\
   <span class="kw1">begin</span>\
     rvm\_path = <span class="kw4">File</span>.<span
class="me1">dirname</span><span class="br0">(</span><span
class="kw4">File</span>.<span class="me1">dirname</span><span
class="br0">(</span>ENV<span class="br0">[</span><span
class="st0">'MY\_RUBY\_HOME'</span><span class="br0">]</span><span
class="br0">)</span><span class="br0">)</span>\
     rvm\_lib\_path = <span class="kw4">File</span>.<span
class="me1">join</span><span class="br0">(</span>rvm\_path, <span
class="st0">'lib'</span><span class="br0">)</span>\
     <span class="re0">\$LOAD\_PATH</span>.<span
class="me1">unshift</span> rvm\_lib\_path\
     <span class="kw3">require</span> <span class="st0">'rvm'</span>\
     RVM.<span class="me1">use\_from\_path</span>! APP\_ROOT\
   <span class="kw1">rescue</span> <span class="kw4">LoadError</span>\
     <span class="kw3">raise</span> <span class="st0">"RVM ruby lib is
currently unavailable."</span>\
   <span class="kw1">end</span>\
 <span class="kw1">end</span>\
\
 ENV<span class="br0">[</span><span
class="st0">'BUNDLE\_GEMFILE'</span><span class="br0">]</span> = <span
class="kw4">File</span>.<span class="me1">expand\_path</span><span
class="br0">(</span><span class="st0">'../Gemfile'</span>, <span
class="kw4">File</span>.<span class="me1">dirname</span><span
class="br0">(</span><span class="kw2">\_\_FILE\_\_</span><span
class="br0">)</span><span class="br0">)</span>\
 <span class="kw3">require</span> <span
class="st0">'bundler/setup'</span>\
\
 worker\_processes <span class="nu0">4</span>\
 working\_directory APP\_ROOT\
\
 preload\_app <span class="kw2">true</span>\
\
 timeout <span class="nu0">30</span>\
\
 listen APP\_ROOT <span class="sy0">+</span> <span
class="st0">"/tmp/sockets/unicorn.sock"</span>, <span
class="re3">:backlog</span> <span class="sy0">=\></span> <span
class="nu0">64</span>\
\
 pid APP\_ROOT <span class="sy0">+</span> <span
class="st0">"/tmp/pids/unicorn.pid"</span>\
\
 stderr\_path APP\_ROOT <span class="sy0">+</span> <span
class="st0">"/log/unicorn.stderr.log"</span>\
 stdout\_path APP\_ROOT <span class="sy0">+</span> <span
class="st0">"/log/unicorn.stdout.log"</span>\
\
 before\_fork <span class="kw1">do</span> <span
class="sy0">|</span>server, worker<span class="sy0">|</span>\
   <span class="kw1">defined</span>?<span class="br0">(</span><span
class="re2">ActiveRecord::Base</span><span class="br0">)</span> <span
class="sy0">&&</span> <span class="re2">ActiveRecord::Base</span>.<span
class="me1">connection</span>.<span class="me1">disconnect</span>!\
\
   old\_pid = RAILS\_ROOT <span class="sy0">+</span> <span
class="st0">'/tmp/pids/unicorn.pid.oldbin'</span>\
   <span class="kw1">if</span> <span class="kw4">File</span>.<span
class="me1">exists</span>?<span class="br0">(</span>old\_pid<span
class="br0">)</span> <span class="sy0">&&</span> server.<span
class="me1">pid</span> != old\_pid\
     <span class="kw1">begin</span>\
       <span class="kw4">Process</span>.<span
class="me1">kill</span><span class="br0">(</span><span
class="st0">"QUIT"</span>, <span class="kw4">File</span>.<span
class="me1">read</span><span class="br0">(</span>old\_pid<span
class="br0">)</span>.<span class="me1">to\_i</span><span
class="br0">)</span>\
     <span class="kw1">rescue</span> <span
class="kw4">Errno</span>::ENOENT, <span class="kw4">Errno</span>::ESRCH\
       <span class="kw3">puts</span> <span class="st0">"Old master
alerady dead"</span>\
     <span class="kw1">end</span>\
   <span class="kw1">end</span>\
 <span class="kw1">end</span>\
\
 after\_fork <span class="kw1">do</span> <span
class="sy0">|</span>server, worker<span class="sy0">|</span>\
   <span class="kw1">defined</span>?<span class="br0">(</span><span
class="re2">ActiveRecord::Base</span><span class="br0">)</span> <span
class="sy0">&&</span> <span class="re2">ActiveRecord::Base</span>.<span
class="me1">establish\_connection</span>\
 <span class="kw1">end</span>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.ServingRailsAppsWithRvmNginxUnicornAndUpstartBrandonTilley20121211030747?action=sourceblock&num=8)

</div>

</div>

<div class="vspace">

</div>

Profit!
=======

And that’s that! Upstart will manage both Nginx and Unicorn (although
either could benefit from something like Monit or God, but I’ll leave
that as an exercise for the reader and/or a future blog post).

</div>

<div class="vspace">

</div>

<div style="display: none;">

Summary: Setting up a rails application for deployment Tags: rails,
applicaitons, web development, deployment, rvm, nginx, unicorn, upstart
Source:
<http://brandontilley.com/2011/01/29/serving-rails-apps-with-rvm-nginx-unicorn-and-upstart.html>
Parent: (Technology.)<span
class="wikiword">[RubyOnRails](http://wiki.tamouse.org?n=Technology.RubyOnRails?action=print)</span>
includeme:[Technology.RubyOnRails](http://wiki.tamouse.org?n=Technology.RubyOnRails?action=print)
Categories:[HowTos](http://wiki.tamouse.org?n=Category.HowTos),
[Saved](http://wiki.tamouse.org?n=Category.Saved)

</div>

Page saved at: Tue, 11 Dec 2012 03:07:47 -0600

<div class="vspace">

</div>

</div>
