<div id="wikitext">

The Git Submodule facility is really Great for re-using code from other
projects. By modularizing the code and keeping things in possibly
separate repositories, you have the ability then to mix and match for
your application as you see fit.

Modularization in general is a great thing usually, as well as writing
code that can be reused. Even if you aren't doing OOP, you can still
write many good utilities so you don't have to reinvent the wheel.
Create something with a general interface and function and take it with
you.

The submodule facility is loosely explained in the [Git
Book](http://book.git-scm.com/5_submodules.html) although the
explanation still leaves something to desire. Here are the steps I took
to do this, with specific examples.

First, my php common code is in a repository on <http://gitorious.org>
at:

<div class="vspace">

</div>

      https://gitorious.org/common-php-code

The public URL for getting the code is:

<div class="vspace">

</div>

      https://git.gitorious.org/common-php-code/common-php-code.git

So, first I created my super project, in this case
`earthquakewatch`{.escaped}, initialized it and made an initial commit.
I created a public repository this as well at gitorious:

<div class="vspace">

</div>

      https://gitorious.org/earthquakwatch/earthquakwatch

(Yes, I know it's misspelled)

The public URL for this project is:

<div class="vspace">

</div>

      https://git.gitorious.org/earthquakwatch/earthquakwatch.git

Okay, the structure of this project is:

<div class="vspace">

</div>

      APP_ROOT/
      |
      +-css/                        -- styling stuff
      | |
      | + style.css
      | + images/
      |
      +-docs/           -- application documentation
      | +-sample-config.php         -- sample configuration file to customize
      |
      +-index.php                   -- application main file
      |
      +-js/                 -- javascript stuff
      | +-jquery.js
      +-lib/                -- libraries
      |
      +-local/          -- for local configuration
      |
      +-README
      |
      +-scripts/            -- working scripts of the application
      | |
      | +-init.inc.php
      |
      +-var/            -- data directory

Now, I want to include the common php code underneath the
`lib`{.escaped} directory, I merely add it as a submodule from the
APP\_ROOT directory:

<div class="vspace">

</div>

      $ git submodule add   https://git.gitorious.org/common-php-code/common-php-code.git lib/commoncode

This clones the common code repository as a submodule in the earthquake
project into the directory lib/commoncode. One thing I did in addition
to this to make the common code scripts I'm going to be using
"first-class" scripts is to link them into the lib directory:

<div class="vspace">

</div>

      $ cd lib
      $ ln -s commoncode/class.Debug.php .
      $ ln -s commoncode/functions.inc.php .

And there we have it!

<div class="vspace">

</div>

Cloning your project
--------------------

Cloning your project (say to install it elsewhere to either work on or
as a prodution system) takes a couple more steps.

After running the cloning process:

<div class="vspace">

</div>

      $ git clone https://git.gitorious.org/earthquakwatch/earthquakwatch.git newdir

Initialize and update the submodules:

<div class="vspace">

</div>

      $ cd newdir
      $ git submodule init
      $ git submodule update

<div class="vspace">

</div>

Keeping submodules up to date
-----------------------------

This is pretty straight-forward as well.

<div class="vspace">

</div>

      $ cd APP_ROOT/lib/commoncode
      $ git fetch master

<div class="vspace">

</div>

</div>
