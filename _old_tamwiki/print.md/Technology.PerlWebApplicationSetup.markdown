<div id="wikitext">

<div style="display: none;">

Summary:How to set up a perl web application under Debian-based distros
Parent:(Technology.)Perl <span
class="wikiword">[IncludeMe](http://wiki.tamouse.org?n=Technology.IncludeMe?action=edit)[?](http://wiki.tamouse.org?n=Technology.IncludeMe?action=edit)</span>:[Perl](http://wiki.tamouse.org?n=Technology.Perl?action=print)
Categories:[HowTos](http://wiki.tamouse.org?n=Category.HowTos) Tags:
perl, web application, web development, environments

</div>

<span id="excerpt"></span> While setting up a
[PHP](http://wiki.tamouse.org?n=Technology.PHP?action=print) web
application under Apache is fairly straight-forward and often requires
little configuration, setting up a Perl web application is a little
different. <span id="excerptend"></span>

Apache has long included the ability to run perl programs, utilizing
`mod_perl` and other extensions. This will look at setting up an
application that uses the
[CGI](http://wiki.tamouse.org?n=Technology.CGI?action=edit)[?](http://wiki.tamouse.org?n=Technology.CGI?action=edit)
interface to run perl programs explicitly not under the server process
directly.

<div class="vspace">

</div>

Configuring Apache to run perl programs
---------------------------------------

Apache on Debian-based systems allows execution of cgi scripts within
the special directory \<DOCUMENTROOT\>/cgi-bin, and
\<USERDIR\>/public\_html/cgi-bin. These are great for one-off scripts or
special tools, but is not really great for a perl-based web application.

Assuming you want your web application to be self-contained under one
directory structure, you can set up a special directory in it for perl
scripts, assets, and other aspects of your application, here is one way
of organizing the applicaiton:

<div class="vspace">

</div>

<div id="sourceblock1" class="sourceblock">

<div class="sourceblocktext">

<div>

APP\_ROOT/\
 scripts/ -- containing perl scripts to run the application\
 static/ -- containing static elements of the application\
 css/ -- style files\
 js/ -- javascript files\
 ...\

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.PerlWebApplicationSetup?action=sourceblock&num=1)

</div>

</div>

Thus, all the scripts to run the application are in the scripts folder,
while all the other elements of the site in other subdirectories.

Further, let's say the main script of the site, which could be a
dispatcher for other modules, routes, etc, in your applicaiton, is
called `routes.pl`. Put this under the scripts/ subdirectory.

An entry in the apache configuration file could look like:

Map the path `http://<HOST>/myapp/`{.escaped} to the directory where the
app is located using the `Alias` directive. Then, Set up the app
directory to process clean web requests (such as
`http://<HOST>/myapp/`{.escaped} or
`http://<HOST>/myapp/route/`{.escaped}). Finally, set up the scripts
directory to process perl scripts as cgi files.

<div class="vspace">

</div>

<div id="sourceblock2" class="sourceblock">

<div class="sourceblocktext">

<div class="apache">

<span class="kw1">Alias</span> /myapp/ <span
class="st0">"/home/tamara/myapp/"</span>\
\
     \<<span class="kw3">Directory</span> <span
class="st0">"/home/tamara/myapp/"</span>\>\
         <span class="kw1">RewriteEngine</span> <span
class="kw2">On</span>\
         <span class="kw1">RewriteBase</span> /myapp\
         <span class="kw1">RewriteRule</span> \^\$          
scripts/routes.pl  [L]\
         <span class="kw1">RewriteCond</span> %{REQUEST\_FILENAME} !-f\
         <span class="kw1">RewriteCond</span> %{REQUEST\_FILENAME} !-d\
         <span class="kw1">RewriteCond</span> %{REQUEST\_FILENAME} !-l\
         <span class="kw1">RewriteRule</span> \^(.\*)\$
scripts/routes.pl/\$1  [QSA,L]\
     \</<span class="kw3">Directory</span>\>\
\
     \<<span class="kw3">Directory</span> <span
class="st0">"/home/tamara/myapp/scripts"</span>\>\
         <span class="kw1">Options</span> <span
class="kw2">FollowSymLinks</span> ExecCGI\
         <span class="kw1">AddHandler</span> cgi-<span
class="kw1">script</span> .pl\
         <span class="kw1">AllowOverride</span> <span
class="kw2">None</span>\
     \</<span class="kw3">Directory</span>\>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.PerlWebApplicationSetup?action=sourceblock&num=2)

</div>

</div>

*<span style="font-size:83%">(For more information on the rewrite rules
processing, see [Apache mod\_rewrite
documentation](http://httpd.apache.org/docs/2.2/mod/mod_rewrite.html).)</span>*

<div class="vspace">

</div>

</div>
