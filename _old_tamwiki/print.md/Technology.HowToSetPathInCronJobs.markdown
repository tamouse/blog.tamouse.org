<div id="wikitext">

<div style="display: none;">

Summary: The unix command cron(1) runs in a different environment than
your login environment. Here is how to get it back. Parent:
(Technology.)Linux <span
class="wikiword">[IncludeMe](http://wiki.tamouse.org?n=Technology.IncludeMe?action=edit)[?](http://wiki.tamouse.org?n=Technology.IncludeMe?action=edit)</span>:
[Linux](http://wiki.tamouse.org?n=Technology.Linux?action=print)
Categories: [HowTos](http://wiki.tamouse.org?n=Category.HowTos),
[Technology](http://wiki.tamouse.org?n=Category.Technology),
[Linux](http://wiki.tamouse.org?n=Category.Linux) Tags: linux,
environment, cron, crontab Source: Posted: Wed Jan 29 06:58:01 2014

</div>

<span id="excerpt"></span> Getting some jobs to run under
`cron(1)`{.escaped} can be confusing and difficult since
`cron`{.escaped} executes tasks in the `crontab((5)`{.escaped} file with
a different underlying environment than a user normally runs in. What
works from you login shell command line often won't from a
`cron`{.escaped} job. Here is how to get it back. <span
id="excerptend"></span>

<div class="vspace">

</div>

What determines cron's environment?
-----------------------------------

By default, `cron`{.escaped} runs with the barest environment. You can
discover this by running the following in your `crontab`{.escaped}:

<div class="vspace">

</div>

        * * * * * (/usr/bin/date ; /usr/bin/env | /usr/bin/sort) >> /tmp/my_cron_env 2>&1

This will run the task every minute, with `stdout`{.escaped} and
`stderr`{.escaped} sent to the file. You should make sure to remove or
comment out this line after a minute or so or you'll build up quite a
long file.

<div class="vspace">

</div>

<div class="indent">

*If you have a local email system running, you can leave off the output
redirection and the output from the cron task will be emailed to your
local user instead. I sort of prefer the append-to-file approach, but
the email is interesting as well.*
<div class="vspace">

</div>

</div>

<div class="indent">

*Note also the command stream is wrapped in parens -- this executes them
as a subshell, and collects all the output from the subshell to add to
the file.*

</div>

<div class="vspace">

</div>

Changing the environment in the crontab
---------------------------------------

It is rather easy to change some things in the `crontab`{.escaped} file.
You can set environment variables as you would for the standard unix
shell `/bin/sh`{.escaped}:

<div class="vspace">

</div>

<div id="sourceblock1" class="sourceblock">

<div class="sourceblocktext">

<div class="bash">

<span class="re2">SHELL</span>=<span class="sy0">/</span>bin<span
class="sy0">/</span><span class="kw2">bash</span>\
 <span class="re2">PATH</span>=<span class="sy0">/</span>usr<span
class="sy0">/</span>local<span class="sy0">/</span>bin:<span
class="sy0">/</span>usr<span class="sy0">/</span>bin<span
class="sy0">/</span>:bin

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.HowToSetPathInCronJobs?action=sourceblock&num=1)

</div>

</div>

Cron will not interpret the typical environment variables while setting
environment variables like this. Thus you need to use absolute paths and
such when executing command and setting environment variables.

<div class="vspace">

</div>

Changing the environment in a cron task
---------------------------------------

This seems to be a common way amongst the
[ruby](http://wiki.tamouse.org?n=Technology.Ruby?action=print) community
because of strange things like ruby environment managers such as
[rbenv](http://wiki.tamouse.org?n=Technology.Rbenv?action=edit)[?](http://wiki.tamouse.org?n=Technology.Rbenv?action=edit),
[rvm](http://wiki.tamouse.org?n=Technology.Rvm?action=edit)[?](http://wiki.tamouse.org?n=Technology.Rvm?action=edit),
[chruby](http://wiki.tamouse.org?n=Technology.Chruby?action=edit)[?](http://wiki.tamouse.org?n=Technology.Chruby?action=edit)
and the like. On a server, things might be a little different, but this
method seems to work well.

The gist of it is run your usual login shell in a login environment. Add
the following to your `crontab`{.escaped} to see what happens:

<div class="vspace">

</div>

        * * * * * /bin/bash -l -c 'date ; env | sort' >>/tmp/my_cron_bash_env 2>&1

Basically, everything inside the argument to the `-c`{.escaped}
parameter will run inside your login environment. Under `bash`{.escaped}
this will execute `/etc/profile`{.escaped}, the contents of
`/etc/profile.d/`{.escaped}, and `.bash_profile`{.escaped} or
`.profile`{.escaped} depending which it finds first. This should give
you everything you normally have when you log in, and things should work
just the same.

<div class="vspace">

</div>

</div>
