<div id="wikitext">

<div style="display: none;">

Summary:Chef is an application/server deployment facility profided by
Ops Code both as a hosted and a standalone version
Parent:(Technology.)Tools <span
class="wikiword">[IncludeMe](http://wiki.tamouse.org?n=Technology.IncludeMe?action=edit)[?](http://wiki.tamouse.org?n=Technology.IncludeMe?action=edit)</span>:[Tools](http://wiki.tamouse.org?n=Technology.Tools?action=print)
Categories:[Links](http://wiki.tamouse.org?n=Category.Links) Tags:
tools, deployment, server administration, devops

</div>

<span id="excerpt"></span> If you have an application that has several
moving parts, authentication credentials, and uses various services and
daemons on the target environment, and possibly several target
environments (i.e. production, staging, testing, etc),
[Chef](http://www.opscode.com/chef/) is a tool that can help
tremendously. <span id="excerptend"></span>

<div class="vspace">

</div>

<div class="round lrindent quote">

Reality-Based automation for the Cloud.
---------------------------------------

Chef is an open-source systems integration framework built specifically
for automating the cloud. No matter how complex the realities of your
business, Chef makes it easy to deploy servers and scale applications
throughout your entire infrastructure. Because it combines the
fundamental elements of configuration management and service oriented
architectures with the full power of Ruby, Chef makes it easy to create
an elegant, fully automated infrastructure.

</div>

<div class="vspace">

</div>

Quick hits
----------

<div class="vspace">

</div>

### Editing a secure data bag:

<div id="sourceblock1" class="sourceblock">

<div class="sourceblocktext">

<div class="bash">

<span class="co4">\$ </span>knife data bag edit secure ENV <span
class="re5">--secret-file</span> PATH<span class="sy0">/</span>TO<span
class="sy0">/</span>Data\_Key

</div>

</div>

<div class="sourceblocklink">

</div>

</div>

<div class="vspace">

</div>

### Changing an environment with knife:

<div id="sourceblock2" class="sourceblock">

<div class="sourceblocktext">

<div class="bash">

<span class="co4">\$ </span>knife environment from <span
class="kw2">file</span> environments<span class="sy0">/</span><span
class="re1">\$ENVIRONMENT</span>.rb

</div>

</div>

<div class="sourceblocklink">

</div>

</div>

<div class="vspace">

</div>

### Uploading a new cookbook with knife:

<div id="sourceblock3" class="sourceblock">

<div class="sourceblocktext">

<div class="bash">

<span class="co4">\$ </span>knife cookbook upload <span
class="re1">\$COOKBOOKNAME</span>

</div>

</div>

<div class="sourceblocklink">

</div>

</div>

<div class="vspace">

</div>

Making an update to a cookbook, but only using it in some environments
----------------------------------------------------------------------

Each cookbook has a `metadata.rb`{.escaped} file that contains the
revision of the cookbook:

<div class="vspace">

</div>

<div id="sourceblock4" class="sourceblock">

<div class="sourceblocktext">

<div class="ruby">

<div class="head">

metadata.rb file for the myapp cookbook

</div>

maintainer <span class="st0">"tamouse"</span>\
 maintainer\_email <span class="st0">"tamouse@gmail.com"</span>\
 license <span class="st0">"MIT"</span>\
 description <span class="st0">"Installs/Configures MyApp"</span>\
 long\_description <span class="kw4">IO</span>.<span
class="me1">read</span><span class="br0">(</span><span
class="kw4">File</span>.<span class="me1">join</span><span
class="br0">(</span><span class="kw4">File</span>.<span
class="me1">dirname</span><span class="br0">(</span><span
class="kw2">\_\_FILE\_\_</span><span class="br0">)</span>, <span
class="st0">'README.md'</span><span class="br0">)</span><span
class="br0">)</span>\
 version <span class="st0">"0.2.6"</span> <span class="co1">\# \<----
this is where you manage the version number</span>\
 depends <span class="st0">"unicorn"</span>\
 depends <span class="st0">"application"</span>\
 depends <span class="st0">"application\_ruby"</span>\
 depends <span class="st0">"nodejs"</span>\
 depends <span class="st0">"mysql"</span>\
 depends <span class="st0">"rbenv"</span>\
 depends <span class="st0">"database"</span>\
 depends <span class="st0">"logrotate"</span>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.Chef?action=sourceblock&num=4)

</div>

</div>

the `version`{.escaped} line is set to the latest version of a cookbook.
Hosted Chef keeps track of versions of cookbooks, so environments can
choose which one they want to use. In the environment file, you specify
the set of cookbooks to include using the "cookbooks" JSON object:

<div class="vspace">

</div>

<div id="sourceblock5" class="sourceblock">

<div class="sourceblocktext">

<div class="ruby">

<div class="head">

Partial contents of an environment file in chef

</div>

cookbook\_versions<span class="br0">(</span><span class="br0">{</span>\
                       <span class="st0">"apache2"</span> <span
class="sy0">=\></span> <span class="st0">"= 1.1.10"</span>,\
                       <span class="st0">"application"</span> <span
class="sy0">=\></span> <span class="st0">"= 1.0.1"</span>,\
                       <span class="st0">"application\_java"</span>
<span class="sy0">=\></span> <span class="st0">"= 1.0.0"</span>,\
                       <span class="st0">"application\_ruby"</span>
<span class="sy0">=\></span> <span class="st0">"= 1.0.8"</span>,\
                       <span class="st0">"apt"</span> <span
class="sy0">=\></span> <span class="st0">"= 1.4.2"</span>,\
                       <span class="st0">"aws"</span> <span
class="sy0">=\></span> <span class="st0">"= 0.100.0"</span>,\
                       <span class="st0">"bind9"</span> <span
class="sy0">=\></span> <span class="st0">"= 0.1.3"</span>,\
                       <span class="st0">"bluepill"</span> <span
class="sy0">=\></span> <span class="st0">"= 1.0.4"</span>,\
                       <span class="st0">"build-essential"</span> <span
class="sy0">=\></span> <span class="st0">"= 1.0.2"</span>,\
                       <span class="st0">"chef-client"</span> <span
class="sy0">=\></span> <span class="st0">"= 1.1.3"</span>,\
                       <span class="st0">"chef\_handler"</span> <span
class="sy0">=\></span> <span class="st0">"= 1.0.6"</span>,\
                       <span class="st0">"database"</span> <span
class="sy0">=\></span> <span class="st0">"= 1.2.0"</span>,\
                       <span class="st0">"dmg"</span> <span
class="sy0">=\></span> <span class="st0">"= 1.0.0"</span>,\
                       <span class="st0">"erlang"</span> <span
class="sy0">=\></span> <span class="st0">"= 1.0.0"</span>,\
                       <span class="st0">"git"</span> <span
class="sy0">=\></span> <span class="st0">"= 1.0.0"</span>,\
                       <span class="st0">"gpg"</span> <span
class="sy0">=\></span> <span class="st0">"= 0.0.1"</span>,\
                       <span class="st0">"gunicorn"</span> <span
class="sy0">=\></span> <span class="st0">"= 1.0.0"</span>,\
                       <span class="st0">"haproxy"</span> <span
class="sy0">=\></span> <span class="st0">"= 1.0.5"</span>,\
                       <span class="st0">"iptables"</span> <span
class="sy0">=\></span> <span class="st0">"= 0.10.0"</span>,\
                       <span class="st0">"java"</span> <span
class="sy0">=\></span> <span class="st0">"= 1.5.0"</span>,\
                       <span class="st0">"jetty"</span> <span
class="sy0">=\></span> <span class="st0">"= 0.0.1"</span>,\
                       <span class="st0">"jpackage"</span> <span
class="sy0">=\></span> <span class="st0">"= 0.10.0"</span>,\
                       <span class="st0">"keepalived"</span> <span
class="sy0">=\></span> <span class="st0">"= 0.8.2"</span>,\
                       <span class="st0">"logrotate"</span> <span
class="sy0">=\></span> <span class="st0">"= 0.8.2"</span>,\
                       <span class="st0">"memcached"</span> <span
class="sy0">=\></span> <span class="st0">"= 1.0.3"</span>,\
                       <span class="st0">"myapp"</span> <span
class="sy0">=\></span> <span class="st0">"= 0.2.6"</span>, <span
class="co1">\# \<--- this is where you say which version of the myapp
cookbook to use</span>\
                       <span class="st0">"mysql"</span> <span
class="sy0">=\></span> <span class="st0">"= 1.2.6"</span>,\
                       <span class="st0">"newrelic"</span> <span
class="sy0">=\></span> <span class="st0">"= 0.2.6"</span>,\
                       <span class="st0">"nginx"</span> <span
class="sy0">=\></span> <span class="st0">"= 0.101.6"</span>,\
                       <span class="st0">"nodejs"</span> <span
class="sy0">=\></span> <span class="st0">"= 1.0.1"</span>,\
                       <span class="st0">"ohai"</span> <span
class="sy0">=\></span> <span class="st0">"= 1.0.2"</span>,\
                       <span class="st0">"openssl"</span> <span
class="sy0">=\></span> <span class="st0">"= 1.0.0"</span>,\
                       <span class="st0">"passenger\_apache2"</span>
<span class="sy0">=\></span> <span class="st0">"= 0.99.4"</span>,\
                       <span class="st0">"php"</span> <span
class="sy0">=\></span> <span class="st0">"= 1.0.2"</span>,\
                       <span class="st0">"postfix"</span> <span
class="sy0">=\></span> <span class="st0">"= 1.2.0"</span>,\
                       <span class="st0">"postgresql"</span> <span
class="sy0">=\></span> <span class="st0">"= 0.99.4"</span>,\
                       <span class="st0">"python"</span> <span
class="sy0">=\></span> <span class="st0">"= 1.0.6"</span>,\
                       <span class="st0">"rabbitmq"</span> <span
class="sy0">=\></span> <span class="st0">"= 1.4.2"</span>,\
                       <span class="st0">"rbenv"</span> <span
class="sy0">=\></span> <span class="st0">"= 1.4.0"</span>,\
                       <span class="st0">"rubygems"</span> <span
class="sy0">=\></span> <span class="st0">"= 0.2.0"</span>,\
                       <span class="st0">"runit"</span> <span
class="sy0">=\></span> <span class="st0">"= 0.15.0"</span>,\
                       <span class="st0">"rvm"</span> <span
class="sy0">=\></span> <span class="st0">"= 0.9.1"</span>,\
                       <span class="st0">"scout-agent"</span> <span
class="sy0">=\></span> <span class="st0">"= 1.0.0"</span>,\
                       <span class="st0">"solr-jetty"</span> <span
class="sy0">=\></span> <span class="st0">"= 0.0.1"</span>,\
                       <span class="st0">"solr-tomcat"</span> <span
class="sy0">=\></span> <span class="st0">"= 0.0.3"</span>,\
                       <span class="st0">"sudo"</span> <span
class="sy0">=\></span> <span class="st0">"= 1.1.0"</span>,\
                       <span class="st0">"tomcat"</span> <span
class="sy0">=\></span> <span class="st0">"= 0.10.4"</span>,\
                       <span class="st0">"unicorn"</span> <span
class="sy0">=\></span> <span class="st0">"= 1.0.4"</span>,\
                       <span class="st0">"users"</span> <span
class="sy0">=\></span> <span class="st0">"= 1.1.2"</span>,\
                       <span class="st0">"windows"</span> <span
class="sy0">=\></span> <span class="st0">"= 1.3.0"</span>,\
                       <span class="st0">"wordpress"</span> <span
class="sy0">=\></span> <span class="st0">"= 0.8.8"</span>,\
                       <span class="st0">"xfs"</span> <span
class="sy0">=\></span> <span class="st0">"= 1.0.0"</span>,\
                       <span class="st0">"xml"</span> <span
class="sy0">=\></span> <span class="st0">"= 1.0.4"</span>,\
                       <span class="st0">"yum"</span> <span
class="sy0">=\></span> <span class="st0">"= 0.6.0"</span>,\
                       <span class="st0">"common"</span> <span
class="sy0">=\></span> <span class="st0">"= 0.0.2"</span>\
\
                   <span class="br0">}</span><span class="br0">)</span>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.Chef?action=sourceblock&num=5)

</div>

</div>

If you have multiple environments, then you can rev the myapp cookbook,
and specify the version string for only those environments that need the
new aspects of the cookbook, and leave the others alone. For example,
you may have a handful of testing environments for various reasons, and
you can have a testing envrionment that is the only one that gets the
new version bump for you app until it's tested adequately. As the
features of your app are promoted from development to testing to staging
to production, you can modify each of the corresponding environment
files as necessary.

</div>
