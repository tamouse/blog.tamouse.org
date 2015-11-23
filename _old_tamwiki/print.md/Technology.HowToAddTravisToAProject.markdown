<div id="wikitext">

<div style="display: none;">

Summary: A slightly more detailed how-to on adding a specific
application to Travis CI involving setting environment variables,
changing server software, initializing the build node, and running the
tests. Parent: (Technolog.)Testing <span
class="wikiword">[IncludeMe](http://wiki.tamouse.org?n=Technology.IncludeMe?action=edit)[?](http://wiki.tamouse.org?n=Technology.IncludeMe?action=edit)</span>:
[Testing](http://wiki.tamouse.org?n=Technolog.Testing?action=edit)[?](http://wiki.tamouse.org?n=Technolog.Testing?action=edit)
Categories: [HowTos](http://wiki.tamouse.org?n=Category.HowTos),
[Testing](http://wiki.tamouse.org?n=Category.Testing) Tags: travis,
continuous integration, CI, testing Source: none Posted: Mon Dec 23
16:25:03 2013

</div>

A&D has a private [Travis-CI](http://travis-ci.com)
[server](https://magnum.travis-ci.com/) that is used to verify changes
to our private repos. Initially, this repo did not use travis, since it
didn't really have any automated tests to run.

As I started adding RSpec tests, one of the lead devs recommended
including the repo in the travis CI environment as well. This wasn't
quite as straight-forward as initially thought, so this attempts to
document the pieces in pulling this together.

<div class="vspace">

</div>

Configuring `.travis.yml`{.escaped}
-----------------------------------

The first part of getting a repository ready to run under Travis is to
create a `.travis.yml`{.escaped} file to tell Travis how to build and
test your repository.

The Travis documentation is fairly easy to understand, but no set of
documentation is going to understand your specific repository's needs.
There aren't enough examples for every possibly scenario, thus you need
to really understand the environment needs of your application.

There are various elements that you need to set up:

1\. The language and language version 2. Environment variables 3. Other
applications, libraries, servers, and so on that your

       application needs in order to run (e.g. Postgresql)

4\. Travis behavioural elements, such as caching, building, and so on

`.travis.yml`{.escaped} is (obviously) a YAML file, which is the
standard for ruby applications.

<div class="vspace">

</div>

1.  Setting the language

Since we're testing a Rails application here, ruby is our language. The
version we're using is 2.0.0 (with no particular build set at this
point). The two sections we need in the `.travis.yml`{.escaped} file
are:

<div class="vspace">

</div>

<div id="sourceblock1" class="sourceblock">

<div class="sourceblocktext">

<div class="yaml">

1.  <div class="de1">

    <span class="co3">language</span><span class="sy2">: </span>ruby

    </div>

2.  <div class="de1">

    <span class="co4">rvm</span>:

    </div>

3.  <div class="de1">

     - 2.0.0

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.HowToAddTravisToAProject?action=sourceblock&num=1)

</div>

</div>

You can set multiple values in the `rvm`{.escaped} section, to tell
travis to run a build on each version. This can explode into a large
build matrix, though, so be circumspect. This repo contains a
`.ruby-version`{.escaped} file so it was easy to limit the versions to
build with.

This would be the minimum required to get any Rails app running, but
ours has a few more requirements.

<div class="vspace">

</div>

### Environment Variables

Performark-Events has some values it needs to pick up from the
environment to run correctly. With the current set of tests, the Devise
configuration parameter `secret_key_base`{.escaped} must be set. The
`env_vars-sample.rb`{.escaped} file is used as a template for the
`env_vars.rb`{.escaped} file that is used to set defaults if the values
aren't set explicitly in the environment.

For the current set of tests, the only env\_var needed is
`SECRET_KEY_BASE`{.escaped} to make the Devise gem happy. Environment
variables are set in the `env`{.escaped} section of the
`.travis.yml`{.escaped} file:

<div class="vspace">

</div>

<div id="sourceblock2" class="sourceblock">

<div class="sourceblocktext">

<div class="yaml">

1.  <div class="de1">

    <span class="co4">env</span>:

    </div>

2.  <div class="de1">

     SECRET\_KEY\_BASE=<span class="st0">"\$(bundle exec rake
    secret)"</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.HowToAddTravisToAProject?action=sourceblock&num=2)

</div>

</div>

There is some secret sauce going on here. The `rake secret`{.escaped}
task is one provided by the standard Rails installation that will
re-generate a secret token, which is just a hashed string, and is quite
suitable for the secret key base. The above setting results in travis
running the following at the start of the build:

<div class="vspace">

</div>

<div id="sourceblock3" class="sourceblock">

<div class="sourceblocktext">

<div class="bash">

1.  <div class="de1">

    <span class="kw3">export</span> <span
    class="re2">SECRET\_KEY\_BASE</span>=<span class="st0">"<span
    class="es4">\$(bundle exec rake secret)</span>"</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.HowToAddTravisToAProject?action=sourceblock&num=3)

</div>

</div>

which gives us exactly what we need for the run.

Although it is a travis default, I've also set the `RAILS_ENV`{.escaped}
envar to `'test'`{.escaped} to ensure we're running in a test situation.

<div class="vspace">

</div>

### Additional Software

The database used in Performark-Events is Postgresql version 9.2,
because it makes use of the JSON variable type that was introduced at
that version. Travis by default uses Postgresql v. 9.1, so we need to
tell it what to use. The `addons`{.escaped} section lets us specify the
version:

<div class="vspace">

</div>

<div id="sourceblock4" class="sourceblock">

<div class="sourceblocktext">

<div class="yaml">

1.  <div class="de1">

    <span class="co4">addons</span>:

    </div>

2.  <div class="de1">

    <span class="co3">  postgresql</span><span class="sy2">:
    </span><span class="nu0">9.2</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.HowToAddTravisToAProject?action=sourceblock&num=4)

</div>

</div>

<div class="vspace">

</div>

### Prerequisite Steps

Travis has hooks that will run before and after certain events in the
build. We need to make sure we have the right configuration files
created and the database created that will work for our repo.

The `before_script`{.escaped} section lets us give bash commands that
will run just before the test script starts.

<div class="vspace">

</div>

#### Configuration Files

Every Rails app needs a `config/database.yml`{.escaped} file which must
be modified by the user when starting up the application. However, a
good rails practice is to make a sample configuration file which can be
included in the repository, but not the specific configuration file
which might contain passwords or other credentials that you don't want
to put out in public or even semi-public.

In addition, Performark-Events has an environment variable
initialization file, that has similar credential secrets that we don't
want explicitly in the repository, so there is a
`config/env_vars.sample.rb`{.escaped} file that is copied and modified
if necessary.

Since the sample defaults will work for our needs in the Travis CI
environment, we can just copy them over directly. If the specific values
in the non-sample files need to be set, you could run the sample file
through sed, awk, perl, ruby or whatever to make the appropriate edits.

We want to make sure we're putting our work in the proper directory.
Travis provides a few environment variables to us, one of which is the
`TRAVIS_BUILD_DIR`{.escaped} envar, that points to the directory of the
current build.

(Note these might be done quite differently when creating the production
environment.)

<div class="vspace">

</div>

<div id="sourceblock5" class="sourceblock">

<div class="sourceblocktext">

<div class="yaml">

1.  <div class="de1">

    <span class="co4">before\_script</span>:

    </div>

2.  <div class="de1">

     - /bin/cp \$TRAVIS\_BUILD\_DIR/config/database.sample.yml
    \$TRAVIS\_BUILD\_DIR/config/database.yml

    </div>

3.  <div class="de1">

      - /bin/cp \$TRAVIS\_BUILD\_DIR/config/env\_vars.sample.rb
    \$TRAVIS\_BUILD\_DIR/config/env\_vars.rb

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.HowToAddTravisToAProject?action=sourceblock&num=5)

</div>

</div>

<div class="vspace">

</div>

#### Creating The Testing Database

For each travis run, we must create the testing database anew (travis
does not persist databases across runs). Since we're using Postgresql,
we simply run the client and create the database with the default user,
`postgres`{.escaped} as specified by travis.

<div class="vspace">

</div>

<div id="sourceblock6" class="sourceblock">

<div class="sourceblocktext">

<div class="yaml">

1.  <div class="de1">

    <span class="co4">before\_script</span>:

    </div>

2.  <div class="de1">

     - psql -c 'create database performark\_events\_test;' -U postgres

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.HowToAddTravisToAProject?action=sourceblock&num=6)

</div>

</div>

<div class="vspace">

</div>

#### The `before_script`{.escaped} Section

Combining the previous two subsections, the resultant
`before_script`{.escaped} section that runs all these is:

<div class="vspace">

</div>

<div id="sourceblock7" class="sourceblock">

<div class="sourceblocktext">

<div class="yaml">

1.  <div class="de1">

    <span class="co4">before\_script</span>:

    </div>

2.  <div class="de1">

     - /bin/cp \$TRAVIS\_BUILD\_DIR/config/database.sample.yml
    \$TRAVIS\_BUILD\_DIR/config/database.yml

    </div>

3.  <div class="de1">

      - /bin/cp \$TRAVIS\_BUILD\_DIR/config/env\_vars.sample.rb
    \$TRAVIS\_BUILD\_DIR/config/env\_vars.rb

    </div>

4.  <div class="de1">

      - psql -c 'create database performark\_events\_test;' -U postgres

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.HowToAddTravisToAProject?action=sourceblock&num=7)

</div>

</div>

<div class="vspace">

</div>

Travis Operations
-----------------

### Bundler Caching

One thing that Travis can do for is cache our bundle operations, thus
saving considerable time each build in creating the bundle environment.
For this repo, there is a huge time savings from having to recompile
local versions of native code (Nokogiri in particular takes a long time
to build the native version).

We can tell Travis to cache the bundle within the `cache`{.escaped}
section:

<div class="vspace">

</div>

<div id="sourceblock8" class="sourceblock">

<div class="sourceblocktext">

<div class="yaml">

1.  <div class="de1">

    <span class="co3">cache</span><span class="sy2">: </span>bundler

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.HowToAddTravisToAProject?action=sourceblock&num=8)

</div>

</div>

<div class="vspace">

</div>

### Bundler Options

Normally, Travis runs bundler with just the `--deployment`{.escaped}
option, but I've added `guard`{.escaped} and `pry`{.escaped} to the
Gemfile to enable me to run continuous testing and debugging locally. We
don't want these in the CI run, however, so I've put all the local stuff
inside a `guard`{.escaped} group within the Gemfile. We need to tell
Travis not to include it:

<div class="vspace">

</div>

<div id="sourceblock9" class="sourceblock">

<div class="sourceblocktext">

<div class="yaml">

1.  <div class="de1">

    <span class="co3">bundler\_args</span><span class="sy2">:
    </span>--without guard --deployment

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.HowToAddTravisToAProject?action=sourceblock&num=9)

</div>

</div>

which tells bundler to omit the `guard`{.escaped} section, and install
things as if this were a deployment.

<div class="vspace">

</div>

Final `.travis.yml`{.escaped} Contents
--------------------------------------

Putting the whole thing together:

<div class="vspace">

</div>

<div id="sourceblock10" class="sourceblock">

<div class="sourceblocktext">

<div class="yaml">

<div class="head">

.travis.yml

</div>

1.  <div class="de1">

    <span class="co3">language</span><span class="sy2">: </span>ruby

    </div>

2.  <div class="de1">

    <span class="co3">cache</span><span class="sy2">: </span>bundler

    </div>

3.  <div class="de1">

    <span class="co3">bundler\_args</span><span class="sy2">:
    </span>--without guard --deployment

    </div>

4.  <div class="de1">

    <span class="co4">rvm</span>:

    </div>

5.  <div class="de2">

     - 2.0.0

    </div>

6.  <div class="de1">

    <span class="co4">before\_script</span>:

    </div>

7.  <div class="de1">

     - /bin/cp \$TRAVIS\_BUILD\_DIR/config/database.sample.yml
    \$TRAVIS\_BUILD\_DIR/config/database.yml

    </div>

8.  <div class="de1">

      - /bin/cp \$TRAVIS\_BUILD\_DIR/config/env\_vars.sample.rb
    \$TRAVIS\_BUILD\_DIR/config/env\_vars.rb

    </div>

9.  <div class="de1">

      - psql -c 'create database performark\_events\_test;' -U postgres

    </div>

10. <div class="de2">

    <span class="co4">env</span>:

    </div>

11. <div class="de1">

     RAILS\_ENV=test

    </div>

12. <div class="de1">

      SECRET\_KEY\_BASE=<span class="st0">"\$(bundle exec rake
    secret)"</span>

    </div>

13. <div class="de1">

    <span class="co4">addons</span>:

    </div>

14. <div class="de1">

    <span class="co3">  postgresql</span><span class="sy2">:
    </span><span class="nu0">9.2</span>

    </div>

<div class="foot">

full contents

</div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.HowToAddTravisToAProject?action=sourceblock&num=10)

</div>

</div>

<div class="vspace">

</div>

Triggering a Travis Run
-----------------------

Normally, Travis will begin a build whenever code is pushed to the
repository if the repository contains a `.travis.yml`{.escaped} file.
The thing you also need to do is turn on the service hooks for the
repository to interact with Travis CI. To do this, you need to be able
to change the settings of the repo on Github. Since I didn't have such
permissions, Jason did this, but then it wasn't clear why builds were
not starting.

The \*other\* issue with this is that if you've already created a pull
request for a given branch, adding to that branch does \*not\* seem to
trigger Travis builds. Once that PR was merged, then Travis builds began
as expected.

At present, Travis will happily build anytime there is a push to \*any\*
branch on Github, including new feature, bugfix, and chore branches.
This includes any new or existing branches, so we don't have the
first-time issue any more.

<div class="vspace">

</div>

Acknowledgements
----------------

My thanks in particular to [Jason](https://github.com/dabootski) for his
help on pushing me to do this and getting this up and running. Also
thanks to [Kyle](https://github.com/kkestell) for his help on
understanding the application and getting me up to speed.

<div class="vspace">

</div>

</div>
