<div id="wikitext">

<div style="display: none;">

Summary: A brief description of how to get PostgreSQL set up on a Linux
system for development. Parent: (Technology.)<span
class="wikiword">[PostgreSQL](http://wiki.tamouse.org?n=Technology.PostgreSQL?action=print)</span>
<span
class="wikiword">[IncludeMe](http://wiki.tamouse.org?n=Technology.IncludeMe?action=edit)[?](http://wiki.tamouse.org?n=Technology.IncludeMe?action=edit)</span>:
[PostgreSQL](http://wiki.tamouse.org?n=Technology.PostgreSQL?action=print)
Categories: [HowTos](http://wiki.tamouse.org?n=Category.HowTos) Tags:
howto, linux, postgresql, postgres, setup Source: various Posted: Mon
Jan 20 12:49:00 2014

</div>

<span id="excerpt"></span> Setting up a PostgreSQL service on a new,
fresh Linux install is pretty easy, but it's a bit more complicated than
expected. Since I don't do this very often, I thought it best to put the
info in a place I won't have to hunt for it. <span
id="excerptend"></span>

<div class="vspace">

</div>

Before Installing
-----------------

If you're running Ubuntu 12.04 (precise) then you need to get the
repositories for versions later than 9.1.

<div class="vspace">

</div>

<div class="round lrindent quote">

Create the file /etc/apt/sources.list.d/pgdg.list, and add a line for
the repository

<div class="vspace">

</div>

        deb http://apt.postgresql.org/pub/repos/apt/ precise-pgdg main

Import the repository signing key, and update the package lists

<div class="vspace">

</div>

        wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc |       sudo apt-key add -
        sudo apt-get update

</div>

<div class="vspace">

</div>

Installing postgresql
---------------------

        $ sudo apt-get install postgresql-9.3

<div class="vspace">

</div>

Configuring users/roles
-----------------------

<span
class="wikiword">[PostgreSQL](http://wiki.tamouse.org?n=Technology.PostgreSQL?action=print)</span>
users and roles are treated interchangeably in the documentation. By
default, the only user/role is `postgres`{.escaped}. You can leave it at
this if you wish, or you can set things up a little easier to use with
vagrant.

<div class="vspace">

</div>

        $ sudo -u postgres createuser --superuser vagrant

<div class="vspace">

</div>

Using UTF-8 encoding
--------------------

As shipped, postgresql uses <span
class="wikiword">[LATIN1](http://wiki.tamouse.org?n=Technology.LATIN1?action=edit)[?](http://wiki.tamouse.org?n=Technology.LATIN1?action=edit)</span>
encoding, so you have to fix it. [This stackoverflow
post](http://stackoverflow.com/questions/13115692/encoding-utf8-does-not-match-locale-en-us-the-chosen-lc-ctype-setting-requires)
discusses how to fix this.

<div class="vspace">

</div>

### Create a file:

        nano /etc/profile.d/lang.sh

<div class="vspace">

</div>

### Add the following

<div id="sourceblock1" class="sourceblock">

<div class="sourceblocktext">

<div class="bash">

<span class="kw3">export</span> <span class="re2">LANGUAGE</span>=<span
class="st0">"en\_US.UTF-8"</span>\
 <span class="kw3">export</span> <span class="re2">LANG</span>=<span
class="st0">"en\_US.UTF-8"</span>\
 <span class="kw3">export</span> <span class="re2">LC\_ALL</span>=<span
class="st0">"en\_US.UTF-8"</span>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.HowToSetUpPostgreSQLonLinux?action=sourceblock&num=1)

</div>

</div>

Save it and restart your system.

<div class="vspace">

</div>

### Reconfigure so the encoding can be <span class="wikiword">[UTF8](http://wiki.tamouse.org?n=Technology.UTF8?action=edit)[?](http://wiki.tamouse.org?n=Technology.UTF8?action=edit)</span>

<div id="sourceblock2" class="sourceblock">

<div class="sourceblocktext">

<div class="bash">

<span class="kw2">sudo</span> <span class="kw2">su</span> postgres\
 psql

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.HowToSetUpPostgreSQLonLinux?action=sourceblock&num=2)

</div>

</div>

<div id="sourceblock3" class="sourceblock">

<div class="sourceblocktext">

<div class="sql">

<span class="kw1">UPDATE</span> pg\_database <span
class="kw1">SET</span> datistemplate<span class="sy0">=</span><span
class="kw1">FALSE</span> <span class="kw1">WHERE</span> datname<span
class="sy0">=</span><span class="st0">'template1'</span>;\
 <span class="kw1">DROP</span> <span class="kw1">DATABASE</span>
Template1;\
 <span class="kw1">CREATE</span> <span class="kw1">DATABASE</span>
template1 <span class="kw1">WITH</span> owner<span
class="sy0">=</span>postgres encoding<span class="sy0">=</span><span
class="st0">'UTF-8'</span> lc\_collate<span class="sy0">=</span><span
class="st0">'en\_US.UTF-8'</span> lc\_ctype<span
class="sy0">=</span><span class="st0">'en\_US.UTF-8'</span> template
template0;\
 <span class="kw1">UPDATE</span> pg\_database <span
class="kw1">SET</span> datistemplate<span class="sy0">=</span><span
class="kw1">TRUE</span> <span class="kw1">WHERE</span> datname<span
class="sy0">=</span><span class="st0">'template1'</span>;

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.HowToSetUpPostgreSQLonLinux?action=sourceblock&num=3)

</div>

</div>

Use template1 for db creation.

<div class="vspace">

</div>

Addendum for Vagrant
--------------------

Assuming you're using a precise32 or precise64 box, the following
provisioning script works:

<div class="vspace">

</div>

<div id="sourceblock4" class="sourceblock">

<div class="sourceblocktext">

<div class="ruby">

config.<span class="me1">vm</span>.<span class="me1">provision</span>
<span class="st0">"shell"</span> <span class="kw1">do</span> <span
class="sy0">|</span>s<span class="sy0">|</span>\
     s.<span class="me1">inline</span> = <span
class="sy0">%</span>Q<span class="br0">{</span>\
 echo <span class="st0">'export LANGUAGE="en\_US.UTF-8"'</span> <span
class="sy0">\></span>  <span class="sy0">/</span>etc<span
class="sy0">/</span>profile.<span class="me1">d</span><span
class="sy0">/</span>lang.<span class="me1">sh</span>\
 echo <span class="st0">'export LANG="en\_US.UTF-8"'</span>     <span
class="sy0">\>\></span> <span class="sy0">/</span>etc<span
class="sy0">/</span>profile.<span class="me1">d</span><span
class="sy0">/</span>lang.<span class="me1">sh</span>\
 echo <span class="st0">'export LC\_ALL="en\_US.UTF-8"'</span>   <span
class="sy0">\>\></span> <span class="sy0">/</span>etc<span
class="sy0">/</span>profile.<span class="me1">d</span><span
class="sy0">/</span>lang.<span class="me1">sh</span>\
 source <span class="sy0">/</span>etc<span
class="sy0">/</span>profile.<span class="me1">d</span><span
class="sy0">/</span>lang.<span class="me1">sh</span>\
\
 apt<span class="sy0">-</span>get update\
 apt<span class="sy0">-</span>get <span class="sy0">-</span>y install
build<span class="sy0">-</span>essential\
 apt<span class="sy0">-</span>get <span class="sy0">-</span>y install
curl\
 apt<span class="sy0">-</span>get <span class="sy0">-</span>y install
git<span class="sy0">-</span>core\
 apt<span class="sy0">-</span>get <span class="sy0">-</span>y install
emacs23<span class="sy0">-</span>nox\
 echo <span class="st0">'deb http://apt.postgresql.org/pub/repos/apt/
precise-pgdg main'</span> <span class="sy0">\></span> <span
class="sy0">/</span>etc<span class="sy0">/</span>apt<span
class="sy0">/</span>sources.<span class="me1">list</span>.<span
class="me1">d</span><span class="sy0">/</span>pgdg.<span
class="me1">list</span>\
 wget <span class="sy0">--</span>quiet <span class="sy0">-</span>O <span
class="sy0">-</span> https:<span class="sy0">//</span>www.<span
class="me1">postgresql</span>.<span class="me1">org</span><span
class="sy0">/</span>media<span class="sy0">/</span>keys<span
class="sy0">/</span>ACCC4CF8.<span class="me1">asc</span> <span
class="sy0">|</span> apt<span class="sy0">-</span>key add <span
class="sy0">-</span>\
 apt<span class="sy0">-</span>get update\
 apt<span class="sy0">-</span>get <span class="sy0">-</span>y install
postgresql<span class="sy0">-</span><span class="nu0">9.2</span>\
\
\
 echo <span class="st0">"update pg\_database set datistemplate=false
where datname='template1';"</span> <span class="sy0">\></span> <span
class="sy0">/</span>tmp<span class="sy0">/</span>psql<span
class="sy0">-</span>encoding.<span class="me1">sql</span>\
 echo <span class="st0">"drop database Template1;"</span> <span
class="sy0">\>\></span> <span class="sy0">/</span>tmp<span
class="sy0">/</span>psql<span class="sy0">-</span>encoding.<span
class="me1">sql</span>\
 echo <span class="st0">"create database template1 with owner=postgres
encoding='UTF-8' lc\_collate='en\_US.UTF-8' lc\_ctype='en\_US.UTF-8'
template template0;"</span> <span class="sy0">\>\></span> <span
class="sy0">/</span>tmp<span class="sy0">/</span>psql<span
class="sy0">-</span>encoding.<span class="me1">sql</span>\
 echo <span class="st0">"update pg\_database set datistemplate=true
where datname='template1';"</span> <span class="sy0">\>\></span> <span
class="sy0">/</span>tmp<span class="sy0">/</span>psql<span
class="sy0">-</span>encoding.<span class="me1">sql</span>\
 sudo su postgres <span class="sy0">-</span>c <span class="st0">'psql \<
/tmp/psql-encoding.sql'</span>\
\
 apt<span class="sy0">-</span>get <span class="sy0">-</span>y install
imagemagick\
 <span class="br0">}</span>\
   <span class="kw1">end</span>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.HowToSetUpPostgreSQLonLinux?action=sourceblock&num=4)

</div>

</div>

</div>
