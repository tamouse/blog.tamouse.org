<div id="wikitext">

Unit Testing Backbone.js Applications
=====================================

[Stephen Thomas](http://www.sitepoint.com/author/sthomas/)

Published February 25, 2013

After spending hours, maybe *days*, putting the finishing touches on an
awesome new feature for your web application, you’re finally ready to
see it in action. You add the new code to your <span
class="wikiword">JavaScript</span> base, build the release candidate,
and fire up your browser, expecting to be amazed. Then … Uh Oh… the new
feature may be working fine, but some other critical part of your app –
a part you didn’t *touch* while developing the new version – has gone
horribly awry. Now you’re faced with the challenge of backtracking
through days of work to try and figure out how you broke the existing
code. Happy days are definitely not here again.

That very scenario has bitten me more than I’d like to admit. And if
you’ve been coding awhile, you’ve probably seen it as well. Consider,
though, what makes this scenario so painful. It isn’t really because our
new code broke existing code; that’s inevitable in development. The real
pain is that it took so long to notice the breakage. With so much
development since we knew our application was working, there’s a vast
amount of code in which the bug may be hiding. And, though it may seem a
bit like hunting for a needle in a haystack, we have no choice but to
dive it.

In this article we are truly going to banish this scenario from our
<span class="wikiword">JavaScript</span> development. No more digging
through hours, days, or weeks of code looking for a needle. The
principle we’ll adopt is a simple one: find any bug *as soon as* we
create it. That’s right; we’re going to set up a development environment
and process that tells us immediately when we write code that introduces
a bug. Furthermore, the extra effort we put into the process won’t go to
waste once initial development is complete. The same test code that
catches our development bugs will be completely reusable in an
integration environment. We can easily incorporate the tests into our
source code managements system, blocking bugs before they can even get
into our code base.

In the four sections that follow, we’ll first look at the tools we need
for a <span class="wikiword">JavaScript</span> testing environment.
We’ll then consider a trivial application, one that’s simple enough to
understand, yet has all the features and functionality that might exist
in a real production web application. The final two sections demonstrate
how we can use our environment to test the example app during
development and, once initial development is complete, during
integration.

<div class="vspace">

</div>

Assembling a <span class="wikiword">JavaScript</span> Testing Environment
-------------------------------------------------------------------------

Our unit testing nirvana requires some development tools that may not be
in your workbench (yet). The news, both good and bad, is that there are
options aplenty. That’s good news because it gives us options, and
that’s bad news because the pace of front end development today means
that there are far too many options. To focus our evaluation, let’s be
explicit about our top two goals. Everything else is secondary:

<div class="vspace">

</div>

1.  Our environment must support frictionless, continuous testing during
    development.
2.  Tests created during development must be equally usable in
    integration.

<div class="vspace">

</div>

### Execution Environments

For <span class="wikiword">JavaScript</span> coding, there is no better
development environment than the modern web browser. Whether your taste
is Firebug or Webkit’s Developer Tools, the browser supports live DOM
inspection and editing, full interactive debugging, and sophisticated
performance analysis. Web browsers are great for development, and so our
test tools and environment must integrate with in-browser development.
Web browsers, however, are not so great for integration testing.
Integration testing often takes places on servers somewhere in the cloud
(or a least somewhere in the data center). Those systems don’t even have
a graphical user interface, much less a modern web browser. For
efficient integration testing, we need simple command line scripts and a
<span class="wikiword">JavaScript</span> execution environment that
supports them. For those requirements, the tool of choice is
[node.js](http://nodejs.org). Although there are other command line
<span class="wikiword">JavaScript</span> environments, none has the
breadth and depth of support to match node.js. In the integration phase,
our test tools must integrate with node.js.

<div class="vspace">

</div>

### Test Framework

Now that we’ve established that our test tools must support both web
browser and node.js environments, we can narrow the choices enough to
select a core test framework. Many <span
class="wikiword">JavaScript</span> test frameworks exist, but most are
heavily biased towards browser testing; getting them working with
node.js is usually possible, but often requires inelegant hacks or
tweaks. One framework that does not suffer from this problem is
[Mocha](http://visionmedia.github.com/mocha/), which justifiably
describes itself as:

<div class="vspace">

</div>

<div class="indent">

Mocha is a feature-rich <span class="wikiword">JavaScript</span> test
framework running on node and the browser, making asynchronous testing
simple and fun.

</div>

Originally developed for node.js, Mocha has been extended to readily
support web browsers as well. By using Mocha as our test framework, we
can write tests that support both development and integration without
modification.

<div class="vspace">

</div>

### Assertion Library

Unlike some <span class="wikiword">JavaScript</span> test frameworks,
Mocha was designed for maximum flexibility. As a consequence, we’ll have
to choose a few additional pieces to make it complete. In particular, we
need a <span class="wikiword">JavaScript</span> assertion library. For
that, we’ll rely on the [Chai Assertion Library](http://chaijs.com).
Chai is somewhat unique in that it supports all of the common assertion
styles – *assert*, *expect,* and *should.* Assertion styles determine
how we write tests in our test code. Under the covers, they’re all
equivalent; it’s easy to translate tests from one assertion style to the
other. The main difference in assertion styles is their readability. The
choice of assertion style depends mostly on which style you (or your
team) find most readable, and which style produces the most
understandable tests. To see the difference, consider developing a
trivial test for the following code:

<div class="vspace">

</div>

     var sum = 2 + 2;

A traditional, assert-style test could be written as:

<div class="vspace">

</div>

     assert.equal(sum, 4, "sum should equal 4");

That test gets the job done, but unless you’ve grown accustomed to
old-school unit testing, it’s probably a little challenging to read and
interpret. An alternative assertion style uses `expect`:

<div class="vspace">

</div>

     expect(sum).to.equal(4);

Most developers find expect-style assertions easier to read and
understand than assert-style tests. The third alternative, `should`,
makes test assertions even more like natural language:

<div class="vspace">

</div>

     sum.should.equal(4);

The Chai library supports all three assertion styles. In this article
we’ll stick with `should`.

<div class="vspace">

</div>

### Spies, Stubs, and Mocks

Most web apps, including the trivial example we’ll consider in this
article, rely on third party libraries and services. In many cases,
testing our code will require observing – or even controlling – those
libraries and services. The [Sinon.JS](http://sinonjs.org) library
provides a lot of tools for testing those interactions. Such tools fall
into three general classes:

<div class="vspace">

</div>

-   ***Spy***. Test code that observes calls to functions outside of the
    code under test. Spies do not interfere with the operation of those
    external functions; they merely record the invocation and return
    value.
-   ***Stub***. Test code that stands in for calls to functions outside
    of the code under test. The stub code doesn’t attempt to replicate
    the external function; it simply prevents unresolved errors when the
    code under test accesses the external function.
-   ***Mock***. Test code that mimics functions or services outside of
    the code under test. With mocks, test code can specify the return
    values from those functions or services so it can verify the code’s
    response.

Along with the Sinon.JS library itself, we can augment the standard Chai
assertion library with [Sinon.JS Assertions for
Chai](https://github.com/domenic/sinon-chai).

<div class="vspace">

</div>

### A Unit Test Development Environment

The final tool for our testing workbench is a development environment
for unit testing. For our example we’ll use
[Test’em](https://github.com/airportyh/testem). Test’em is a collection
of handy scripts to set up and run a continuous test environment. We
could, if we chose to, write the scripts ourselves and manage the
environment manually; however, Toby Ho (Test’em’s creator) has put
together an awesome package that can save us the trouble.

<div class="vspace">

</div>

The Example Application
-----------------------

To see our testing environment in action, let’s consider a simple
application. Although pared to its bare essentials, this application
includes all the functionality required for a real application.
(Complete source code for the application is available on
[GitHub](https://github.com/jsprodotcom/source/blob/master/jsunittest.zip).)

<div class="vspace">

</div>

<div>

![](http://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2013/02/01-jstest-app.png)

</div>

Users can see their list of todos, and they can click on a check box to
toggle any todo’s status.

<div class="vspace">

</div>

### The Todos Database

Our application starts with a database table that holds the information
for todos. Here’s the SQL that we could use to create that table.

<div class="vspace">

</div>

<div id="sourceblock1" class="sourceblock">

<div class="sourceblocktext">

<div class="sql">

1.  <div class="de1">

    <span class="kw1">CREATE</span> <span class="kw1">TABLE</span> <span
    class="st0">\`todos\`</span> <span class="br0">(</span>

    </div>

2.  <div class="de1">

       <span class="st0">\`id\`</span>       <span
    class="kw1">INT</span><span class="br0">(</span><span
    class="nu0">11</span><span class="br0">)</span>      <span
    class="kw1">NOT</span> <span class="kw1">NULL</span> <span
    class="kw1">AUTO\_INCREMENT</span> COMMENT <span
    class="st0">'Primary key for the table.'</span><span
    class="sy0">,</span>

    </div>

3.  <div class="de1">

       <span class="st0">\`title\`</span>    <span
    class="kw1">VARCHAR</span><span class="br0">(</span><span
    class="nu0">256</span><span class="br0">)</span> <span
    class="kw1">NOT</span> <span class="kw1">NULL</span> <span
    class="kw1">DEFAULT</span> <span class="st0">''</span>     COMMENT
    <span class="st0">'The text for the todo item.'</span><span
    class="sy0">,</span>

    </div>

4.  <div class="de1">

       <span class="st0">\`complete\`</span> bit<span
    class="br0">(</span><span class="nu0">1</span><span
    class="br0">)</span>       <span class="kw1">NOT</span> <span
    class="kw1">NULL</span> <span class="kw1">DEFAULT</span> b<span
    class="st0">'0'</span>   COMMENT <span class="st0">'Boolean
    indicating whether or not the item is complete.'</span><span
    class="sy0">,</span>

    </div>

5.  <div class="de2">

       <span class="kw1">PRIMARY</span> <span class="kw1">KEY</span>
    <span class="br0">(</span><span class="st0">\`id\`</span><span
    class="br0">)</span> <span class="br0">)</span> ENGINE<span
    class="sy0">=</span>InnoDB <span class="kw1">DEFAULT</span>
    CHARSET<span class="sy0">=</span>utf8 COMMENT<span
    class="sy0">=</span><span class="st0">'To Do items.'</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.UnitTestingBackbonejsApplications20130826085139?action=sourceblock&num=1)

</div>

</div>

And here’s how the table might look after we’ve put some test data in
it.

<div class="vspace">

</div>

  id   title                                complete
  ---- ------------------------------------ ----------
  1    A sample todo item in the database   0
  2    Another sample todo item             1
  3    Yet another sample todo item         0

As the table shows, our todos only include a primary key (`id`), a
title, and a status bit to indicate whether or not they are complete.

<div class="vspace">

</div>

### A REST API

Our web application needs access to this database, so we’ll provide a
standard REST interface. The API follows Ruby conventions, but can be
easily implemented by any server technology. In particular:

<div class="vspace">

</div>

-   `GET api/todos` returns a JSON-encoded array of all rows in the
    database.
-   `GET api/todos/NNN` returns the JSON representation of the todo with
    `id` equal to `NNN`.
-   `POST api/todos` adds a new todo to the database using the
    JSON-encoded information in the request.
-   `PUT api/todos/NNN` updates the todo with `id` equal to `NNN` using
    the JSON-encoded information in the request.
-   `DELETE api/todos/NNN` deletes the todo with `id` equal to `NNN`
    from the database.

If you’re not particularly fond of Ruby, the source code includes a
complete PHP implementation of this API.

<div class="vspace">

</div>

### <span class="wikiword">JavaScript</span> Libraries

Our modest application is simple enough to implement in pure <span
class="wikiword">JavaScript</span> without any libraries, but we have
far bigger plans. We may be starting small, but eventually the app will
feature amazing functionality and a delightful user interface. In
preparation for that day, we’ll build on a framework that can support
our ultimate killer app:

<div class="vspace">

</div>

-   [jQuery](http://jquery.com/) for DOM manipulation, event handling,
    and server communications.
-   [Underscore.js](http://underscorejs.org/) to enhance the core
    language with many indespensible utilities.
-   [Backbone.js](http://backbonejs.org/) to define the structure of the
    application in terms of models and views.

<div class="vspace">

</div>

### An HTML Skeleton

Now that we know the components that will comprise our application, we
can define the HTML skeleton that will support it. There’s nothing fancy
about it (yet), just a minimal <span class="wikiword">HTML5</span>
document, some <span class="wikiword">JavaScript</span> files, and a
small bit of code to get things started.

<div class="vspace">

</div>

<div id="sourceblock2" class="sourceblock">

<div class="sourceblocktext">

\
**GeSHi Error:** GeSHi could not find the language html (using path
/srv/gandimouse2/home/home/tamara/Sites/tamwiki/cookbook/geshi/geshi/)
(code 2)\

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.UnitTestingBackbonejsApplications20130826085139?action=sourceblock&num=2)

</div>

</div>

<div class="vspace">

</div>

Testing During Development
--------------------------

Now that we’ve selected our tools and specified the application, it’s
time to start development. Our first task is installing the tools.

<div class="vspace">

</div>

### Installing the Tools

Even though we’ll be developing in the browser, our test environment
relies on node.js. The very first step, therefore, is installing node.js
and the node package manager (npm). There are executable binaries for OS
X, Windows, Linux, and <span class="wikiword">SunOS</span> on the
[node.js web site](http://nodejs.org/download/), as well as a source
code for other operating systems. After running the installer, you can
verify both node.js and npm from the command line.

<div class="vspace">

</div>

      bash-3.2$ node --version v0.8.18 bash-3.2$ npm --version 1.2.2 bash-3.2$

Everything else we need is conveniently available as a node package. The
node package manager can handle their installation, as well as any
dependencies.

<div class="vspace">

</div>

      bash-3.2$ npm install jquery jsdom underscore backbone mocha chai sinon sinon-chai testem -g

<div class="vspace">

</div>

### Creating the Project Structure

The source code for this example includes a complete project structure
with the following 15 files:

<div class="vspace">

</div>

     todos.html
     testem.json
     api/htaccess
     api/todos.php
     lib/backbone-min.js
     lib/chai.js
     lib/jquery-1.9.0.min.js
     lib/sinon-1.5.2.js
     lib/sinon-chai.js
     lib/underscore-min.js
     mysql/todos.sql
     php-lib/dbconfig.inc.php
     src/app-todos.js
     test/app-todos-test.js
     test/mocha.opts

Here is what each folder and file contains:

<div class="vspace">

</div>

-   `todos.html`: The skeleton HTML file for our application, shown in
    full above.
-   `testem.json`: The configuration file for Test’Em; we’ll look at
    this in detail shortly.
-   `api/`: A folder for our REST API implementation.
    -   `api/htaccess`: Sample configuration for the Apache web server
        that supports our REST API.
    -   `api/todos.php`: PHP code to implement the REST API.
-   `lib/`: A folder for <span class="wikiword">JavaScript</span>
    libraries used by the app itself and the test framework.
    -   `lib/backbone-min.js`: Minified version of Backbone.js.
    -   `lib/chai.js`: Chai Assertion Library.
    -   `lib/jquery-1.9.0.min.js`: Minified version of jQuery.
    -   `lib/sinon-1.5.2.js`: Sinon.JS library.
    -   `lib/sinon-chai.js`: Sinon.JS Assertions for Chai.
    -   `lib/underscore-min.js`: Minified version of Underscore.js.
-   `mysql/`: A folder for <span class="wikiword">MySQL</span> code for
    the application.
    -   `mysql/todos.sql`: <span class="wikiword">MySQL</span> commands
        to create the application database.
-   `php-lib/`: A folder for PHP libraries and configuration for the
    application’s REST API.
    -   `php-lib/dbconfig.inc.php`: PHP database configuration for the
        REST API.
-   `src/`: A folder for our client-side application code.
    -   `src/app-todos.js`: Our application.
-   `test/`: A folder for test code.
    -   `test/app-todos-test.js`: Test code for our application.
    -   `test/mocha.opts`: Configuration options for mocha; we’ll look
        at this in the next section.

During development, we’re only interested in three of these files,
`testem.json`, `src/app-todos.js`, and `test/app-todos-test.js`.

<div class="vspace">

</div>

### Configuring Test’Em

The last step before actual development is defining the Test’Em
configuration. That configuration resides in the JSON-formatted
`testem.json`, and it’s simple enough to create in any text editor. We
simply specify that we’re using Mocha (Test’Em supports several
frameworks), and we list the <span class="wikiword">JavaScript</span>
files our application and our test code requires.

<div class="vspace">

</div>

<div id="sourceblock3" class="sourceblock">

<div class="sourceblocktext">

<div class="javascript">

1.  <div class="de1">

    <span class="br0">{</span>

    </div>

2.  <div class="de1">

       <span class="st0">"framework"</span><span class="sy0">:</span>
    <span class="st0">"mocha"</span><span class="sy0">,</span>

    </div>

3.  <div class="de1">

       <span class="st0">"src\_files"</span><span class="sy0">:</span>
    <span class="br0">[</span>

    </div>

4.  <div class="de1">

         <span class="st0">"lib/jquery-1.9.0.min.js"</span><span
    class="sy0">,</span>

    </div>

5.  <div class="de2">

         <span class="st0">"lib/underscore-min.js"</span><span
    class="sy0">,</span>

    </div>

6.  <div class="de1">

         <span class="st0">"lib/backbone-min.js"</span><span
    class="sy0">,</span>

    </div>

7.  <div class="de1">

         <span class="st0">"src/\*.js"</span><span class="sy0">,</span>

    </div>

8.  <div class="de1">

         <span class="st0">"lib/chai.js"</span><span
    class="sy0">,</span>

    </div>

9.  <div class="de1">

         <span class="st0">"lib/sinon-chai.js"</span><span
    class="sy0">,</span>

    </div>

10. <div class="de2">

         <span class="st0">"lib/sinon-1.5.2.js"</span><span
    class="sy0">,</span>

    </div>

11. <div class="de1">

         <span class="st0">"test/\*.js"</span>

    </div>

12. <div class="de1">

       <span class="br0">]</span>

    </div>

13. <div class="de1">

     <span class="br0">}</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.UnitTestingBackbonejsApplications20130826085139?action=sourceblock&num=3)

</div>

</div>

<div class="vspace">

</div>

### Start Developing

Finally, we’re ready to code. In a command shell, navigate to the root
folder of our project and execute the command `testem`. The Test’Em
scripts will run, clearing the terminal window and giving us a URL in
the upper right. Copy and paste that URL into our browser of choice and
we’re off.

<div class="vspace">

</div>

<div>

![](http://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2013/02/02-jstest-testem.png)

</div>

As soon as we launch the web browser, it will automatically execute any
tests that we’ve defined. Since we’re just beginning development, we
won’t have any code, nor any test cases. The browser will kindly point
that out to us.

<div class="vspace">

</div>

<div>

![](http://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2013/02/03-jstest-browser-none.png)

</div>

The terminal window from which we launched Test’Em will also give us the
status.

<div class="vspace">

</div>

<div>

![](http://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2013/02/04-jstest-console-none.png)

</div>

<div class="vspace">

</div>

### A First Test Case

In the spirit of true Test-Driven Development, we’ll begin by writing
our first test case in the `test/app-todos-test.js` file. Like any good
web app, we want to minimize global name space pollution. To do that,
we’ll rely on a single global variable, `todoApp`, to contain all of our
code. Our first test case will make sure that the global name space
variable exists.

<div class="vspace">

</div>

<div id="sourceblock4" class="sourceblock">

<div class="sourceblocktext">

<div class="javascript">

1.  <div class="de1">

    <span class="kw1">var</span> should <span class="sy0">=</span>
    chai.<span class="me1">should</span><span class="br0">(</span><span
    class="br0">)</span><span class="sy0">;</span>

    </div>

2.  <div class="de1">

     

    </div>

3.  <div class="de1">

     describe<span class="br0">(</span><span
    class="st0">"Application"</span><span class="sy0">,</span> <span
    class="kw1">function</span><span class="br0">(</span><span
    class="br0">)</span> <span class="br0">{</span>

    </div>

4.  <div class="de1">

       it<span class="br0">(</span><span class="st0">"creates a global
    variable for the name space"</span><span class="sy0">,</span> <span
    class="kw1">function</span> <span class="br0">(</span><span
    class="br0">)</span> <span class="br0">{</span>

    </div>

5.  <div class="de2">

         should.<span class="me1">exist</span><span
    class="br0">(</span>todoApp<span class="br0">)</span><span
    class="sy0">;</span>

    </div>

6.  <div class="de1">

       <span class="br0">}</span><span class="br0">)</span>

    </div>

7.  <div class="de1">

     <span class="br0">}</span><span class="br0">)</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.UnitTestingBackbonejsApplications20130826085139?action=sourceblock&num=4)

</div>

</div>

As you can see, we need one preliminary statement to tell Mocha that
we’re using Chai assertions. Then we can begin writing tests. By
convention <span class="wikiword">JavaScript</span> tests are organized
into blocks (which can be nested into sub-blocks, and so on). Each block
begins with a `describe()` function call to identify what part of the
code we’re testing. In this case we’re testing the overall application,
so that’s the first parameter to `describe()`.

Within a test block, we document each test case by what it tests. That’s
the purpose of the `it()` function. The way to read any test case is to
combine the `describe()` and `it()` strings into a single statement. Our
first test case, therefore, is

<div class="vspace">

</div>

<div class="indent">

Application creates a global variable for the name space

</div>

The test code itself is inside the `it()` block. Our test case is

<div class="vspace">

</div>

     should.exist(todoApp);

Now we have a complete test case. As soon as we save the file, Test\`Em
automatically takes over. It notices that one of our files has changed,
so it immediately reruns the tests. Not surprisingly (since we haven’t
written any code for the application yet), our first test fails.

<div class="vspace">

</div>

<div>

![](http://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2013/02/05-jstest-browser-fail.png)

</div>

The terminal window updates automatically as well.

<div class="vspace">

</div>

<div>

![](http://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2013/02/06-jstest-console-fail.png)

</div>

To make the test pass, we must create the global name space variable. We
shift to the `srcapp-todos.js` file and add the necessary code.

<div class="vspace">

</div>

     if (typeof todoApp === "undefined") todoApp = {};

As soon as we save the file, Test\`Em once again springs into action. We
immediately get updated results for our test cases.

<div class="vspace">

</div>

<div>

![](http://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2013/02/07-jstest-browser-pass.png)

</div>

Step back for a moment and consider what’s happening! Every time we make
a change, either to the test code or to our application, Test\`Em
immediately re-runs our entire test suite. All we have to do is keep
Test’Em’s browser or terminal window visible in a corner of our screen,
and we can see the health of our code in real time, *as we’re
developing*. We’ll know as soon as we introduce a bug, even if the bug
manifests itself in a part of the code different from where we’re
working. No more digging back through hours, days, or weeks of new code
to figure out when we introduced a bug.

<div class="vspace">

</div>

### Testing the Model

With our development environment now fully established, we can begin
developing the application. Since our app shows a list of todos, it
might be good to create a model for those todos. The model will need to
keep track of both the title of the todo and it’s status. Let’s add a
unit test that verifies we can create an todo with reasonable defaults.

<div class="vspace">

</div>

<div id="sourceblock5" class="sourceblock">

<div class="sourceblocktext">

<div class="javascript">

1.  <div class="de1">

    describe<span class="br0">(</span><span class="st0">"Todo
    Model"</span><span class="sy0">,</span> <span
    class="kw1">function</span><span class="br0">(</span><span
    class="br0">)</span><span class="br0">{</span>

    </div>

2.  <div class="de1">

       describe<span class="br0">(</span><span
    class="st0">"Initialization"</span><span class="sy0">,</span> <span
    class="kw1">function</span><span class="br0">(</span><span
    class="br0">)</span> <span class="br0">{</span>

    </div>

3.  <div class="de1">

         beforeEach<span class="br0">(</span><span
    class="kw1">function</span><span class="br0">(</span><span
    class="br0">)</span> <span class="br0">{</span>

    </div>

4.  <div class="de1">

           <span class="kw1">this</span>.<span class="me1">todo</span>
    <span class="sy0">=</span> <span class="kw1">new</span>
    todoApp.<span class="me1">Todo</span><span class="br0">(</span><span
    class="br0">)</span><span class="sy0">;</span>

    </div>

5.  <div class="de2">

         <span class="br0">}</span><span class="br0">)</span>

    </div>

6.  <div class="de1">

         it<span class="br0">(</span><span class="st0">"should default
    the status to 'pending'"</span><span class="sy0">,</span><span
    class="kw1">function</span><span class="br0">(</span><span
    class="br0">)</span> <span class="br0">{</span>

    </div>

7.  <div class="de1">

           <span class="kw1">this</span>.<span
    class="me1">todo</span>.<span class="kw1">get</span><span
    class="br0">(</span><span class="st0">'complete'</span><span
    class="br0">)</span>.<span class="me1">should</span>.<span
    class="me1">be</span>.<span class="kw2">false</span><span
    class="sy0">;</span>

    </div>

8.  <div class="de1">

         <span class="br0">}</span><span class="br0">)</span>

    </div>

9.  <div class="de1">

         it<span class="br0">(</span><span class="st0">"should default
    the title to an empty string"</span><span class="sy0">,</span><span
    class="kw1">function</span><span class="br0">(</span><span
    class="br0">)</span> <span class="br0">{</span>

    </div>

10. <div class="de2">

           <span class="kw1">this</span>.<span
    class="me1">todo</span>.<span class="kw1">get</span><span
    class="br0">(</span><span class="st0">'title'</span><span
    class="br0">)</span>.<span class="me1">should</span>.<span
    class="me1">equal</span><span class="br0">(</span><span
    class="st0">""</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

11. <div class="de1">

         <span class="br0">}</span><span class="br0">)</span>

    </div>

12. <div class="de1">

       <span class="br0">}</span><span class="br0">)</span>

    </div>

13. <div class="de1">

     <span class="br0">}</span><span class="br0">)</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.UnitTestingBackbonejsApplications20130826085139?action=sourceblock&num=5)

</div>

</div>

There are several aspects of these tests worth noting.

<div class="vspace">

</div>

-   We can nest test blocks within each other. One test block will
    contain all the unit tests for the todo model, and a sub-block of
    those tests focuses on initialization.
-   Within a test block, we can define functionality to execute before
    every test. That’s the purpose of the `beforeEach()` block. In the
    example above, we’re creating a new instance of a Todo before every
    test.
-   The Mocha framework automatically makes sure that the <span
    class="wikiword">JavaScript</span> context (i.e. the value of
    `this`) is consistent for all our test cases. That’s why we can
    define `this.todo` in one function (the `beforeEach()` parameter)
    and safely reference it in other functions (such as the `it()`
    parameters). Without Mocha working behind the scenes to provide this
    consistency, <span class="wikiword">JavaScript</span> would define
    different contexts for each function.

Of course, since we haven’t written the model code yet, all our tests
will fail. (And we’ll know that immediately.) But once we’ve added the
code for our model, the tests pass and we’re on our way.

<div class="vspace">

</div>

<div id="sourceblock6" class="sourceblock">

<div class="sourceblocktext">

<div class="javascript">

1.  <div class="de1">

    todoApp.<span class="me1">Todo</span> <span class="sy0">=</span>
    Backbone.<span class="me1">Model</span>.<span
    class="me1">extend</span><span class="br0">(</span><span
    class="br0">{</span>

    </div>

2.  <div class="de1">

       defaults<span class="sy0">:</span> <span class="br0">{</span>

    </div>

3.  <div class="de1">

         title<span class="sy0">:</span> <span
    class="st0">""</span><span class="sy0">,</span>

    </div>

4.  <div class="de1">

         complete<span class="sy0">:</span>  <span
    class="kw2">false</span>

    </div>

5.  <div class="de2">

       <span class="br0">}</span>

    </div>

6.  <div class="de1">

     <span class="br0">}</span><span class="br0">)</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.UnitTestingBackbonejsApplications20130826085139?action=sourceblock&num=6)

</div>

</div>

<div class="vspace">

</div>

### Using Stubs for Third Party Functionality

Now that we have a simple model for todos, we can start to define its
behavior. One thing our model should do is update the database whenever
any of its properties change. In a unit test environment, however, we
won’t have an actual database to check. On the other hand, we’re not
actually writing any code to do the database update. Rather, we’re
relying on Backbone to handle that interaction. That suggests a unit
test strategy for this test case. All we need to know is that Backbone
models use the `save()` method to update whatever backing store is
persisting the model. In our case that backing store is the database.
Here is the unit test code we can use:

<div class="vspace">

</div>

<div id="sourceblock7" class="sourceblock">

<div class="sourceblocktext">

<div class="javascript">

1.  <div class="de1">

    describe<span class="br0">(</span><span
    class="st0">"Persistence"</span><span class="sy0">,</span> <span
    class="kw1">function</span><span class="br0">(</span><span
    class="br0">)</span> <span class="br0">{</span>

    </div>

2.  <div class="de1">

       beforeEach<span class="br0">(</span><span
    class="kw1">function</span><span class="br0">(</span><span
    class="br0">)</span> <span class="br0">{</span>

    </div>

3.  <div class="de1">

         <span class="kw1">this</span>.<span class="me1">todo</span>
    <span class="sy0">=</span> <span class="kw1">new</span>
    todoApp.<span class="me1">Todo</span><span class="br0">(</span><span
    class="br0">)</span><span class="sy0">;</span>

    </div>

4.  <div class="de1">

         <span class="kw1">this</span>.<span
    class="me1">save\_stub</span> <span class="sy0">=</span> sinon.<span
    class="me1">stub</span><span class="br0">(</span><span
    class="kw1">this</span>.<span class="me1">todo</span><span
    class="sy0">,</span> <span class="st0">"save"</span><span
    class="br0">)</span><span class="sy0">;</span>

    </div>

5.  <div class="de2">

       <span class="br0">}</span><span class="br0">)</span>

    </div>

6.  <div class="de1">

       afterEach<span class="br0">(</span><span
    class="kw1">function</span><span class="br0">(</span><span
    class="br0">)</span> <span class="br0">{</span>

    </div>

7.  <div class="de1">

         <span class="kw1">this</span>.<span
    class="me1">save\_stub</span>.<span class="me1">restore</span><span
    class="br0">(</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

8.  <div class="de1">

       <span class="br0">}</span><span class="br0">)</span>

    </div>

9.  <div class="de1">

       it<span class="br0">(</span><span class="st0">"should update
    server when title is changed"</span><span class="sy0">,</span> <span
    class="kw1">function</span><span class="br0">(</span><span
    class="br0">)</span> <span class="br0">{</span>

    </div>

10. <div class="de2">

         <span class="kw1">this</span>.<span
    class="me1">todo</span>.<span class="kw1">set</span><span
    class="br0">(</span><span class="st0">"title"</span><span
    class="sy0">,</span> <span class="st0">"New Summary"</span><span
    class="br0">)</span><span class="sy0">;</span>

    </div>

11. <div class="de1">

         <span class="kw1">this</span>.<span
    class="me1">save\_stub</span>.<span class="me1">should</span>.<span
    class="me1">have</span>.<span class="me1">been</span>.<span
    class="me1">calledOnce</span><span class="sy0">;</span>

    </div>

12. <div class="de1">

       <span class="br0">}</span><span class="br0">)</span>

    </div>

13. <div class="de1">

       it<span class="br0">(</span><span class="st0">"should update
    server when status is changed"</span><span class="sy0">,</span>
    <span class="kw1">function</span><span class="br0">(</span><span
    class="br0">)</span> <span class="br0">{</span>

    </div>

14. <div class="de1">

         <span class="kw1">this</span>.<span
    class="me1">todo</span>.<span class="kw1">set</span><span
    class="br0">(</span><span class="st0">'complete'</span><span
    class="sy0">,</span><span class="kw2">true</span><span
    class="br0">)</span><span class="sy0">;</span>

    </div>

15. <div class="de2">

         <span class="kw1">this</span>.<span
    class="me1">save\_stub</span>.<span class="me1">should</span>.<span
    class="me1">have</span>.<span class="me1">been</span>.<span
    class="me1">calledOnce</span><span class="sy0">;</span>

    </div>

16. <div class="de1">

       <span class="br0">}</span><span class="br0">)</span>

    </div>

17. <div class="de1">

     <span class="br0">}</span><span class="br0">)</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.UnitTestingBackbonejsApplications20130826085139?action=sourceblock&num=7)

</div>

</div>

We’ve included some additional code before each test, and we’ve added a
section of code to execute after each test. That extra code manages a
sinon `stub`, a function that effectively nullifies another function in
the code. In our case the stub nullifies the `save()` method of
`this.todo`. With the stub in place, calls to the method won’t actually
go to the Backnone library. Instead, sinon intercepts those calls and
simply returns immediately. This behavior is important. If we tried to
execute the actual Backbone `save()` method in a unit test environment,
the call would fail because there would not be a database or server API
available.

With the stub in place, our test cases can use it to verify the model’s
behavior. In the first test case, we immediately set the todo’s `title`
to a new value. Since that changes the `title` property, we want our
model to update its backing store. To check that we simply verify that
the stub was called. To get our model to pass these tests, we can look
for change events and respond appropriately.

<div class="vspace">

</div>

<div id="sourceblock8" class="sourceblock">

<div class="sourceblocktext">

<div class="javascript">

1.  <div class="de1">

    todoApp.<span class="me1">Todo</span> <span class="sy0">=</span>
    Backbone.<span class="me1">Model</span>.<span
    class="me1">extend</span><span class="br0">(</span><span
    class="br0">{</span>

    </div>

2.  <div class="de1">

       defaults<span class="sy0">:</span> <span class="br0">{</span>

    </div>

3.  <div class="de1">

         title<span class="sy0">:</span> <span
    class="st0">""</span><span class="sy0">,</span>

    </div>

4.  <div class="de1">

         complete<span class="sy0">:</span>  <span
    class="kw2">false</span>

    </div>

5.  <div class="de2">

       <span class="br0">}</span><span class="sy0">,</span>

    </div>

6.  <div class="de1">

       initialize<span class="sy0">:</span> <span
    class="kw1">function</span><span class="br0">(</span><span
    class="br0">)</span> <span class="br0">{</span>

    </div>

7.  <div class="de1">

         <span class="kw1">this</span>.<span class="me1">on</span><span
    class="br0">(</span><span class="st0">"change"</span><span
    class="sy0">,</span> <span class="kw1">function</span><span
    class="br0">(</span><span class="br0">)</span><span
    class="br0">{</span> <span class="kw1">this</span>.<span
    class="me1">save</span><span class="br0">(</span><span
    class="br0">)</span><span class="sy0">;</span> <span
    class="br0">}</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

8.  <div class="de1">

       <span class="br0">}</span>

    </div>

9.  <div class="de1">

     <span class="br0">}</span><span class="br0">)</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.UnitTestingBackbonejsApplications20130826085139?action=sourceblock&num=8)

</div>

</div>

<div class="vspace">

</div>

### Testing the View

Of course, our app won’t do anyone any good if it doesn’t actually
display the todos to users, and that requires creating some HTML. We’ll
use Backbone views for that functionality. In our trivial app, we simply
wish to render each todo as a list item. Here are the test cases that
will get us started.

<div class="vspace">

</div>

<div id="sourceblock9" class="sourceblock">

<div class="sourceblocktext">

<div class="javascript">

1.  <div class="de1">

    describe<span class="br0">(</span><span class="st0">"Todo List Item
    View"</span><span class="sy0">,</span> <span
    class="kw1">function</span><span class="br0">(</span><span
    class="br0">)</span> <span class="br0">{</span>

    </div>

2.  <div class="de1">

       beforeEach<span class="br0">(</span><span
    class="kw1">function</span><span class="br0">(</span><span
    class="br0">)</span><span class="br0">{</span>

    </div>

3.  <div class="de1">

         <span class="kw1">this</span>.<span class="me1">todo</span>
    <span class="sy0">=</span> <span class="kw1">new</span>
    todoApp.<span class="me1">Todo</span><span class="br0">(</span><span
    class="br0">{</span>title<span class="sy0">:</span> <span
    class="st0">"Summary"</span><span class="br0">}</span><span
    class="br0">)</span><span class="sy0">;</span>

    </div>

4.  <div class="de1">

         <span class="kw1">this</span>.<span class="me1">item</span>
    <span class="sy0">=</span> <span class="kw1">new</span>
    todoApp.<span class="me1">TodoListItem</span><span
    class="br0">(</span><span class="br0">{</span>model<span
    class="sy0">:</span> <span class="kw1">this</span>.<span
    class="me1">todo</span><span class="br0">}</span><span
    class="br0">)</span><span class="sy0">;</span>

    </div>

5.  <div class="de2">

       <span class="br0">}</span><span class="br0">)</span>

    </div>

6.  <div class="de1">

       it<span class="br0">(</span><span class="st0">"render() should
    return the view object"</span><span class="sy0">,</span> <span
    class="kw1">function</span><span class="br0">(</span><span
    class="br0">)</span> <span class="br0">{</span>

    </div>

7.  <div class="de1">

         <span class="kw1">this</span>.<span
    class="me1">item</span>.<span class="me1">render</span><span
    class="br0">(</span><span class="br0">)</span>.<span
    class="me1">should</span>.<span class="me1">equal</span><span
    class="br0">(</span><span class="kw1">this</span>.<span
    class="me1">item</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

8.  <div class="de1">

       <span class="br0">}</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

9.  <div class="de1">

       it<span class="br0">(</span><span class="st0">"should render as a
    list item"</span><span class="sy0">,</span> <span
    class="kw1">function</span><span class="br0">(</span><span
    class="br0">)</span> <span class="br0">{</span>

    </div>

10. <div class="de2">

         <span class="kw1">this</span>.<span
    class="me1">item</span>.<span class="me1">render</span><span
    class="br0">(</span><span class="br0">)</span>.<span
    class="me1">el</span>.<span class="me1">nodeName</span>.<span
    class="me1">should</span>.<span class="me1">equal</span><span
    class="br0">(</span><span class="st0">"LI"</span><span
    class="br0">)</span><span class="sy0">;</span>

    </div>

11. <div class="de1">

       <span class="br0">}</span><span class="br0">)</span>

    </div>

12. <div class="de1">

     <span class="br0">}</span><span class="br0">)</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.UnitTestingBackbonejsApplications20130826085139?action=sourceblock&num=9)

</div>

</div>

We begin our tests of the view with two test cases. First we ensure that
the view’s `render()` method returns the view itself. That’s a common
and very convenient convention in Backbone because it allows method
chaining. Our second test case verifies that the HTML element the render
creates is a list item (`<li>`). The code necessary to pass these tests
is a straightforward Backbone view.

<div class="vspace">

</div>

<div id="sourceblock10" class="sourceblock">

<div class="sourceblocktext">

<div class="javascript">

1.  <div class="de1">

    todoApp.<span class="me1">TodoListItem</span> <span
    class="sy0">=</span> Backbone.<span class="me1">View</span>.<span
    class="me1">extend</span><span class="br0">(</span><span
    class="br0">{</span>

    </div>

2.  <div class="de1">

       tagName<span class="sy0">:</span> <span
    class="st0">"li"</span><span class="sy0">,</span>

    </div>

3.  <div class="de1">

       render<span class="sy0">:</span> <span
    class="kw1">function</span><span class="br0">(</span><span
    class="br0">)</span> <span class="br0">{</span>

    </div>

4.  <div class="de1">

         <span class="kw1">return</span> <span
    class="kw1">this</span><span class="sy0">;</span>

    </div>

5.  <div class="de2">

       <span class="br0">}</span>

    </div>

6.  <div class="de1">

     <span class="br0">}</span><span class="br0">)</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.UnitTestingBackbonejsApplications20130826085139?action=sourceblock&num=10)

</div>

</div>

Next, we can develop the detailed content of that list item view. As an
example, we want the full list item to look something like the
following.

<div class="vspace">

</div>

<div id="sourceblock11" class="sourceblock">

<div class="sourceblocktext">

\
**GeSHi Error:** GeSHi could not find the language html (using path
/srv/gandimouse2/home/home/tamara/Sites/tamwiki/cookbook/geshi/geshi/)
(code 2)\

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.UnitTestingBackbonejsApplications20130826085139?action=sourceblock&num=11)

</div>

</div>

For our test cases, we can take advantage of jQuery to extract
individual elements from the view’s main element.

<div class="vspace">

</div>

<div id="sourceblock12" class="sourceblock">

<div class="sourceblocktext">

<div class="javascript">

1.  <div class="de1">

    describe<span class="br0">(</span><span class="st0">"Todo List Item
    View"</span><span class="sy0">,</span> <span
    class="kw1">function</span><span class="br0">(</span><span
    class="br0">)</span> <span class="br0">{</span>

    </div>

2.  <div class="de1">

       beforeEach<span class="br0">(</span><span
    class="kw1">function</span><span class="br0">(</span><span
    class="br0">)</span><span class="br0">{</span>

    </div>

3.  <div class="de1">

         <span class="kw1">this</span>.<span class="me1">todo</span>
    <span class="sy0">=</span> <span class="kw1">new</span>
    todoApp.<span class="me1">Todo</span><span class="br0">(</span><span
    class="br0">{</span>title<span class="sy0">:</span> <span
    class="st0">"Summary"</span><span class="br0">}</span><span
    class="br0">)</span><span class="sy0">;</span>

    </div>

4.  <div class="de1">

         <span class="kw1">this</span>.<span class="me1">item</span>
    <span class="sy0">=</span> <span class="kw1">new</span>
    todoApp.<span class="me1">TodoListItem</span><span
    class="br0">(</span><span class="br0">{</span>model<span
    class="sy0">:</span> <span class="kw1">this</span>.<span
    class="me1">todo</span><span class="br0">}</span><span
    class="br0">)</span><span class="sy0">;</span>

    </div>

5.  <div class="de2">

       <span class="br0">}</span><span class="br0">)</span>

    </div>

6.  <div class="de1">

       describe<span class="br0">(</span><span
    class="st0">"Template"</span><span class="sy0">,</span> <span
    class="kw1">function</span><span class="br0">(</span><span
    class="br0">)</span> <span class="br0">{</span>

    </div>

7.  <div class="de1">

         beforeEach<span class="br0">(</span><span
    class="kw1">function</span><span class="br0">(</span><span
    class="br0">)</span><span class="br0">{</span>

    </div>

8.  <div class="de1">

           <span class="kw1">this</span>.<span
    class="me1">item</span>.<span class="me1">render</span><span
    class="br0">(</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

9.  <div class="de1">

         <span class="br0">}</span><span class="br0">)</span>  

    </div>

10. <div class="de2">

         it<span class="br0">(</span><span class="st0">"should contain
    the todo title as text"</span><span class="sy0">,</span> <span
    class="kw1">function</span><span class="br0">(</span><span
    class="br0">)</span> <span class="br0">{</span>

    </div>

11. <div class="de1">

           <span class="kw1">this</span>.<span
    class="me1">item</span>.\$el.<span class="me1">text</span><span
    class="br0">(</span><span class="br0">)</span>.<span
    class="me1">should</span>.<span class="me1">have</span>.<span
    class="me1">string</span><span class="br0">(</span><span
    class="st0">"Summary"</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

12. <div class="de1">

         <span class="br0">}</span><span class="br0">)</span>

    </div>

13. <div class="de1">

         it<span class="br0">(</span><span class="st0">"should include a
    label for the status"</span><span class="sy0">,</span> <span
    class="kw1">function</span><span class="br0">(</span><span
    class="br0">)</span> <span class="br0">{</span>

    </div>

14. <div class="de1">

           <span class="kw1">this</span>.<span
    class="me1">item</span>.\$el.<span class="me1">find</span><span
    class="br0">(</span><span class="st0">"label"</span><span
    class="br0">)</span>.<span class="me1">should</span>.<span
    class="me1">have</span>.<span class="me1">length</span><span
    class="br0">(</span><span class="nu0">1</span><span
    class="br0">)</span><span class="sy0">;</span>

    </div>

15. <div class="de2">

         <span class="br0">}</span><span class="br0">)</span>

    </div>

16. <div class="de1">

         it<span class="br0">(</span><span class="st0">"should include
    an &lt;input&gt; checkbox"</span><span class="sy0">,</span> <span
    class="kw1">function</span><span class="br0">(</span><span
    class="br0">)</span> <span class="br0">{</span>

    </div>

17. <div class="de1">

           <span class="kw1">this</span>.<span
    class="me1">item</span>.\$el.<span class="me1">find</span><span
    class="br0">(</span><span
    class="st0">"label&gt;input[type='checkbox']"</span><span
    class="br0">)</span>.<span class="me1">should</span>.<span
    class="me1">have</span>.<span class="me1">length</span><span
    class="br0">(</span><span class="nu0">1</span><span
    class="br0">)</span><span class="sy0">;</span>

    </div>

18. <div class="de1">

         <span class="br0">}</span><span class="br0">)</span>

    </div>

19. <div class="de1">

         it<span class="br0">(</span><span class="st0">"should be clear
    by default (for 'pending' todos)"</span><span class="sy0">,</span>
    <span class="kw1">function</span><span class="br0">(</span><span
    class="br0">)</span> <span class="br0">{</span>

    </div>

20. <div class="de2">

           <span class="kw1">this</span>.<span
    class="me1">item</span>.\$el.<span class="me1">find</span><span
    class="br0">(</span><span
    class="st0">"label&gt;input[type='checkbox']"</span><span
    class="br0">)</span>.<span class="me1">is</span><span
    class="br0">(</span><span class="st0">":checked"</span><span
    class="br0">)</span>.<span class="me1">should</span>.<span
    class="me1">be</span>.<span class="kw2">false</span><span
    class="sy0">;</span>

    </div>

21. <div class="de1">

         <span class="br0">}</span><span class="br0">)</span>

    </div>

22. <div class="de1">

         it<span class="br0">(</span><span class="st0">"should be set
    for 'complete' todos"</span><span class="sy0">,</span> <span
    class="kw1">function</span><span class="br0">(</span><span
    class="br0">)</span> <span class="br0">{</span>

    </div>

23. <div class="de1">

           <span class="kw1">this</span>.<span
    class="me1">save\_stub</span> <span class="sy0">=</span> sinon.<span
    class="me1">stub</span><span class="br0">(</span><span
    class="kw1">this</span>.<span class="me1">todo</span><span
    class="sy0">,</span> <span class="st0">"save"</span><span
    class="br0">)</span><span class="sy0">;</span>

    </div>

24. <div class="de1">

           <span class="kw1">this</span>.<span
    class="me1">todo</span>.<span class="kw1">set</span><span
    class="br0">(</span><span class="st0">"complete"</span><span
    class="sy0">,</span> <span class="kw2">true</span><span
    class="br0">)</span><span class="sy0">;</span>

    </div>

25. <div class="de2">

           <span class="kw1">this</span>.<span
    class="me1">item</span>.<span class="me1">render</span><span
    class="br0">(</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

26. <div class="de1">

           <span class="kw1">this</span>.<span
    class="me1">item</span>.\$el.<span class="me1">find</span><span
    class="br0">(</span><span
    class="st0">"label&gt;input[type='checkbox']"</span><span
    class="br0">)</span>.<span class="me1">is</span><span
    class="br0">(</span><span class="st0">":checked"</span><span
    class="br0">)</span>.<span class="me1">should</span>.<span
    class="me1">be</span>.<span class="kw2">true</span><span
    class="sy0">;</span>

    </div>

27. <div class="de1">

           <span class="kw1">this</span>.<span
    class="me1">save\_stub</span>.<span class="me1">restore</span><span
    class="br0">(</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

28. <div class="de1">

         <span class="br0">}</span><span class="br0">)</span>

    </div>

29. <div class="de1">

       <span class="br0">}</span><span class="br0">)</span>

    </div>

30. <div class="de2">

     <span class="br0">}</span><span class="br0">)</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.UnitTestingBackbonejsApplications20130826085139?action=sourceblock&num=12)

</div>

</div>

Notice that in the last test case we’ve stubbed the model’s `save()`
method. Since we’re changing a property from its default value, our
model will dutifully try to persist that change to its backing store. In
a unit test environment, however, we won’t have a database or a server
API. The stub takes the place of the missing components and allows the
tests to proceed without error. To get these tests to pass, we’ll have
to add some additional code to our view.

<div class="vspace">

</div>

<div id="sourceblock13" class="sourceblock">

<div class="sourceblocktext">

<div class="javascript">

1.  <div class="de1">

    todoApp.<span class="me1">TodoListItem</span> <span
    class="sy0">=</span> Backbone.<span class="me1">View</span>.<span
    class="me1">extend</span><span class="br0">(</span><span
    class="br0">{</span>

    </div>

2.  <div class="de1">

       tagName<span class="sy0">:</span> <span
    class="st0">"li"</span><span class="sy0">,</span>

    </div>

3.  <div class="de1">

       template<span class="sy0">:</span> \_.<span
    class="me1">template</span><span class="br0">(</span>

    </div>

4.  <div class="de1">

         <span class="st0">"&lt;label&gt;"</span>

    </div>

5.  <div class="de2">

         <span class="sy0">+</span>   <span class="st0">"&lt;input
    type='checkbox' &lt;% if(complete) print('checked')
    %&gt;/&gt;"</span>

    </div>

6.  <div class="de1">

         <span class="sy0">+</span>   <span class="st0">" &lt;%= title
    %&gt; "</span>

    </div>

7.  <div class="de1">

         <span class="sy0">+</span> <span
    class="st0">"&lt;/label&gt;"</span><span class="br0">)</span><span
    class="sy0">,</span>

    </div>

8.  <div class="de1">

       render<span class="sy0">:</span> <span
    class="kw1">function</span><span class="br0">(</span><span
    class="br0">)</span> <span class="br0">{</span>

    </div>

9.  <div class="de1">

         <span class="kw1">this</span>.\$el.<span
    class="me1">html</span><span class="br0">(</span><span
    class="kw1">this</span>.<span class="me1">template</span><span
    class="br0">(</span><span class="kw1">this</span>.<span
    class="me1">model</span>.<span class="me1">attributes</span><span
    class="br0">)</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

10. <div class="de2">

         <span class="kw1">return</span> <span
    class="kw1">this</span><span class="sy0">;</span>

    </div>

11. <div class="de1">

       <span class="br0">}</span>

    </div>

12. <div class="de1">

     <span class="br0">}</span><span class="br0">)</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.UnitTestingBackbonejsApplications20130826085139?action=sourceblock&num=13)

</div>

</div>

<div class="vspace">

</div>

### Testing Model/View Interactions

Now that we’ve verified that our view implementation creates the right
HTML markup, we can test its interaction with our model. In particular,
we want to make sure that users can toggle a todo’s status by clicking
on the checkbox. Our test environment doesn’t require an actual human
user, so we’ll use jQuery to generate the click event. To do that,
however, we’ll have to add content to a real live DOM. That content is
known as a test *fixture*. Here is the unit test code.

<div class="vspace">

</div>

<div id="sourceblock14" class="sourceblock">

<div class="sourceblocktext">

<div class="javascript">

1.  <div class="de1">

    describe<span class="br0">(</span><span class="st0">"Todo List Item
    View"</span><span class="sy0">,</span> <span
    class="kw1">function</span><span class="br0">(</span><span
    class="br0">)</span> <span class="br0">{</span>

    </div>

2.  <div class="de1">

       beforeEach<span class="br0">(</span><span
    class="kw1">function</span><span class="br0">(</span><span
    class="br0">)</span><span class="br0">{</span>

    </div>

3.  <div class="de1">

         <span class="kw1">this</span>.<span class="me1">todo</span>
    <span class="sy0">=</span> <span class="kw1">new</span>
    todoApp.<span class="me1">Todo</span><span class="br0">(</span><span
    class="br0">{</span>title<span class="sy0">:</span> <span
    class="st0">"Summary"</span><span class="br0">}</span><span
    class="br0">)</span><span class="sy0">;</span>

    </div>

4.  <div class="de1">

         <span class="kw1">this</span>.<span class="me1">item</span>
    <span class="sy0">=</span> <span class="kw1">new</span>
    todoApp.<span class="me1">TodoListItem</span><span
    class="br0">(</span><span class="br0">{</span>model<span
    class="sy0">:</span> <span class="kw1">this</span>.<span
    class="me1">todo</span><span class="br0">}</span><span
    class="br0">)</span><span class="sy0">;</span>

    </div>

5.  <div class="de2">

         <span class="kw1">this</span>.<span
    class="me1">save\_stub</span> <span class="sy0">=</span> sinon.<span
    class="me1">stub</span><span class="br0">(</span><span
    class="kw1">this</span>.<span class="me1">todo</span><span
    class="sy0">,</span> <span class="st0">"save"</span><span
    class="br0">)</span><span class="sy0">;</span>

    </div>

6.  <div class="de1">

       <span class="br0">}</span><span class="br0">)</span>

    </div>

7.  <div class="de1">

       afterEach<span class="br0">(</span><span
    class="kw1">function</span><span class="br0">(</span><span
    class="br0">)</span> <span class="br0">{</span>

    </div>

8.  <div class="de1">

         <span class="kw1">this</span>.<span
    class="me1">save\_stub</span>.<span class="me1">restore</span><span
    class="br0">(</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

9.  <div class="de1">

       <span class="br0">}</span><span class="br0">)</span>

    </div>

10. <div class="de2">

       describe<span class="br0">(</span><span class="st0">"Model
    Interaction"</span><span class="sy0">,</span> <span
    class="kw1">function</span><span class="br0">(</span><span
    class="br0">)</span> <span class="br0">{</span>

    </div>

11. <div class="de1">

         it<span class="br0">(</span><span class="st0">"should update
    model when checkbox clicked"</span><span class="sy0">,</span> <span
    class="kw1">function</span><span class="br0">(</span><span
    class="br0">)</span> <span class="br0">{</span>

    </div>

12. <div class="de1">

           \$<span class="br0">(</span><span
    class="st0">"&lt;div&gt;"</span><span class="br0">)</span>.<span
    class="me1">attr</span><span class="br0">(</span><span
    class="st0">"id"</span><span class="sy0">,</span><span
    class="st0">"fixture"</span><span class="br0">)</span>.<span
    class="me1">css</span><span class="br0">(</span><span
    class="st0">"display"</span><span class="sy0">,</span><span
    class="st0">"none"</span><span class="br0">)</span>.<span
    class="me1">appendTo</span><span class="br0">(</span><span
    class="st0">"body"</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

13. <div class="de1">

           <span class="kw1">this</span>.<span
    class="me1">item</span>.<span class="me1">render</span><span
    class="br0">(</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

14. <div class="de1">

           \$<span class="br0">(</span><span
    class="st0">"\#fixture"</span><span class="br0">)</span>.<span
    class="me1">append</span><span class="br0">(</span><span
    class="kw1">this</span>.<span class="me1">item</span>.\$el<span
    class="br0">)</span><span class="sy0">;</span>

    </div>

15. <div class="de2">

           <span class="kw1">this</span>.<span
    class="me1">item</span>.\$el.<span class="me1">find</span><span
    class="br0">(</span><span class="st0">"input"</span><span
    class="br0">)</span>.<span class="me1">click</span><span
    class="br0">(</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

16. <div class="de1">

           <span class="kw1">this</span>.<span
    class="me1">todo</span>.<span class="kw1">get</span><span
    class="br0">(</span><span class="st0">'complete'</span><span
    class="br0">)</span>.<span class="me1">should</span>.<span
    class="me1">be</span>.<span class="kw2">true</span><span
    class="sy0">;</span>

    </div>

17. <div class="de1">

           \$<span class="br0">(</span><span
    class="st0">"\#fixture"</span><span class="br0">)</span>.<span
    class="me1">remove</span><span class="br0">(</span><span
    class="br0">)</span><span class="sy0">;</span>

    </div>

18. <div class="de1">

         <span class="br0">}</span><span class="br0">)</span>

    </div>

19. <div class="de1">

       <span class="br0">}</span><span class="br0">)</span>

    </div>

20. <div class="de2">

     <span class="br0">}</span><span class="br0">)</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.UnitTestingBackbonejsApplications20130826085139?action=sourceblock&num=14)

</div>

</div>

Notice that we’re once again stubbing the todo’s `save()` method.
Otherwise, Backbone will try to update a non-existent backing store when
we change the todo status with our simulated click.

For the test case itself, we begin by creating a `<div>` element with an
`id` of `fixture` and we add that element to our live document. The live
document, in this case, is the web page displaying the results of our
tests. Although we remove the element immediately after verifying the
test case, we also set its `display` property to `none` so it won’t
interfere with Mocha’s display of the test results. The code that
implements this functionality includes a small addition to the todo
model. The addition is a new `toggleStatus()` method.

<div class="vspace">

</div>

<div id="sourceblock15" class="sourceblock">

<div class="sourceblocktext">

<div class="javascript">

1.  <div class="de1">

    todoApp.<span class="me1">Todo</span> <span class="sy0">=</span>
    Backbone.<span class="me1">Model</span>.<span
    class="me1">extend</span><span class="br0">(</span><span
    class="br0">{</span>

    </div>

2.  <div class="de1">

       defaults<span class="sy0">:</span> <span class="br0">{</span>

    </div>

3.  <div class="de1">

         title<span class="sy0">:</span> <span
    class="st0">""</span><span class="sy0">,</span>

    </div>

4.  <div class="de1">

         complete<span class="sy0">:</span>  <span
    class="kw2">false</span>

    </div>

5.  <div class="de2">

       <span class="br0">}</span><span class="sy0">,</span>

    </div>

6.  <div class="de1">

       initialize<span class="sy0">:</span> <span
    class="kw1">function</span><span class="br0">(</span><span
    class="br0">)</span> <span class="br0">{</span>

    </div>

7.  <div class="de1">

         <span class="kw1">this</span>.<span class="me1">on</span><span
    class="br0">(</span><span class="st0">"change"</span><span
    class="sy0">,</span> <span class="kw1">function</span><span
    class="br0">(</span><span class="br0">)</span><span
    class="br0">{</span> <span class="kw1">this</span>.<span
    class="me1">save</span><span class="br0">(</span><span
    class="br0">)</span><span class="sy0">;</span> <span
    class="br0">}</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

8.  <div class="de1">

       <span class="br0">}</span><span class="sy0">,</span>

    </div>

9.  <div class="de1">

       toggleStatus<span class="sy0">:</span> <span
    class="kw1">function</span><span class="br0">(</span><span
    class="br0">)</span> <span class="br0">{</span>

    </div>

10. <div class="de2">

         <span class="kw1">this</span>.<span class="kw1">set</span><span
    class="br0">(</span><span class="st0">"complete"</span><span
    class="sy0">,!</span><span class="kw1">this</span>.<span
    class="kw1">get</span><span class="br0">(</span><span
    class="st0">"complete"</span><span class="st0">"));</span>

    </div>

11. <div class="de1">

    <span class="st0">   }</span>

    </div>

12. <div class="de1">

    <span class="st0"> })</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.UnitTestingBackbonejsApplications20130826085139?action=sourceblock&num=15)

</div>

</div>

In the view, we want to catch click events on the `<input>` element and
call this method for the model.

<div class="vspace">

</div>

<div id="sourceblock16" class="sourceblock">

<div class="sourceblocktext">

<div class="javascript">

1.  <div class="de1">

    todoApp.<span class="me1">TodoListItem</span> <span
    class="sy0">=</span> Backbone.<span class="me1">View</span>.<span
    class="me1">extend</span><span class="br0">(</span><span
    class="br0">{</span>

    </div>

2.  <div class="de1">

       tagName<span class="sy0">:</span> <span
    class="st0">"li"</span><span class="sy0">,</span>

    </div>

3.  <div class="de1">

       template<span class="sy0">:</span> \_.<span
    class="me1">template</span><span class="br0">(</span>

    </div>

4.  <div class="de1">

         <span class="st0">"&lt;label&gt;"</span>

    </div>

5.  <div class="de2">

         <span class="sy0">+</span>   <span class="st0">"&lt;input
    type='checkbox' &lt;% if(complete) print('checked')
    %&gt;/&gt;"</span>

    </div>

6.  <div class="de1">

         <span class="sy0">+</span>   <span class="st0">" &lt;%= title
    %&gt; "</span>

    </div>

7.  <div class="de1">

         <span class="sy0">+</span> <span
    class="st0">"&lt;/label&gt;"</span><span class="br0">)</span><span
    class="sy0">,</span>

    </div>

8.  <div class="de1">

       events<span class="sy0">:</span> <span class="br0">{</span>

    </div>

9.  <div class="de1">

         <span class="st0">"click input"</span><span
    class="sy0">:</span> <span class="st0">"statusChanged"</span>

    </div>

10. <div class="de2">

       <span class="br0">}</span><span class="sy0">,</span>

    </div>

11. <div class="de1">

       render<span class="sy0">:</span> <span
    class="kw1">function</span><span class="br0">(</span><span
    class="br0">)</span> <span class="br0">{</span>

    </div>

12. <div class="de1">

         <span class="kw1">this</span>.\$el.<span
    class="me1">html</span><span class="br0">(</span><span
    class="kw1">this</span>.<span class="me1">template</span><span
    class="br0">(</span><span class="kw1">this</span>.<span
    class="me1">model</span>.<span class="me1">attributes</span><span
    class="br0">)</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

13. <div class="de1">

         <span class="kw1">return</span> <span
    class="kw1">this</span><span class="sy0">;</span>

    </div>

14. <div class="de1">

       <span class="br0">}</span><span class="sy0">,</span>

    </div>

15. <div class="de2">

       statusChanged<span class="sy0">:</span> <span
    class="kw1">function</span><span class="br0">(</span><span
    class="br0">)</span> <span class="br0">{</span>

    </div>

16. <div class="de1">

         <span class="kw1">this</span>.<span
    class="me1">model</span>.<span class="me1">toggleStatus</span><span
    class="br0">(</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

17. <div class="de1">

       <span class="br0">}</span>

    </div>

18. <div class="de1">

     <span class="br0">}</span><span class="br0">)</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.UnitTestingBackbonejsApplications20130826085139?action=sourceblock&num=16)

</div>

</div>

<div class="vspace">

</div>

### Testing the Collection

At this point our application is nearly complete. The only remaining
functionality is collecting all the todos together. Naturally, we’ll use
a Backbone collection. We’re actually not going to do anything special
with our collection, so we don’t really need any unit tests.

<div class="vspace">

</div>

<div id="sourceblock17" class="sourceblock">

<div class="sourceblocktext">

<div class="javascript">

1.  <div class="de1">

    todoApp.<span class="me1">Todos</span> <span class="sy0">=</span>
    Backbone.<span class="me1">Collection</span>.<span
    class="me1">extend</span><span class="br0">(</span><span
    class="br0">{</span>

    </div>

2.  <div class="de1">

       model<span class="sy0">:</span> todoApp.<span
    class="me1">Todo</span><span class="sy0">,</span>

    </div>

3.  <div class="de1">

       url<span class="sy0">:</span>   <span
    class="st0">"api/todos"</span>

    </div>

4.  <div class="de1">

     <span class="br0">}</span><span class="br0">)</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.UnitTestingBackbonejsApplications20130826085139?action=sourceblock&num=17)

</div>

</div>

We can, however, verify that our implementation of the collection’s view
is appropriate. We want that view rendered as an unordered list
(`<ul>`). The test cases don’t require any functionality that we haven’t
seen before.

<div class="vspace">

</div>

<div id="sourceblock18" class="sourceblock">

<div class="sourceblocktext">

<div class="javascript">

1.  <div class="de1">

    describe<span class="br0">(</span><span class="st0">"Todos List
    View"</span><span class="sy0">,</span> <span
    class="kw1">function</span><span class="br0">(</span><span
    class="br0">)</span> <span class="br0">{</span>

    </div>

2.  <div class="de1">

       beforeEach<span class="br0">(</span><span
    class="kw1">function</span><span class="br0">(</span><span
    class="br0">)</span><span class="br0">{</span>

    </div>

3.  <div class="de1">

         <span class="kw1">this</span>.<span class="me1">todos</span>
    <span class="sy0">=</span> <span class="kw1">new</span>
    todoApp.<span class="me1">Todos</span><span
    class="br0">(</span><span class="br0">[</span>

    </div>

4.  <div class="de1">

           <span class="br0">{</span>title<span class="sy0">:</span>
    <span class="st0">"Todo 1"</span><span class="br0">}</span><span
    class="sy0">,</span>

    </div>

5.  <div class="de2">

           <span class="br0">{</span>title<span class="sy0">:</span>
    <span class="st0">"Todo 2"</span><span class="br0">}</span>

    </div>

6.  <div class="de1">

         <span class="br0">]</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

7.  <div class="de1">

         <span class="kw1">this</span>.<span class="me1">list</span>
    <span class="sy0">=</span> <span class="kw1">new</span>
    todoApp.<span class="me1">TodosList</span><span
    class="br0">(</span><span class="br0">{</span>collection<span
    class="sy0">:</span> <span class="kw1">this</span>.<span
    class="me1">todos</span><span class="br0">}</span><span
    class="br0">)</span><span class="sy0">;</span>

    </div>

8.  <div class="de1">

       <span class="br0">}</span><span class="br0">)</span>

    </div>

9.  <div class="de1">

       it<span class="br0">(</span><span class="st0">"render() should
    return the view object"</span><span class="sy0">,</span> <span
    class="kw1">function</span><span class="br0">(</span><span
    class="br0">)</span> <span class="br0">{</span>

    </div>

10. <div class="de2">

         <span class="kw1">this</span>.<span
    class="me1">list</span>.<span class="me1">render</span><span
    class="br0">(</span><span class="br0">)</span>.<span
    class="me1">should</span>.<span class="me1">equal</span><span
    class="br0">(</span><span class="kw1">this</span>.<span
    class="me1">list</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

11. <div class="de1">

       <span class="br0">}</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

12. <div class="de1">

       it<span class="br0">(</span><span class="st0">"should render as
    an unordered list"</span><span class="sy0">,</span> <span
    class="kw1">function</span><span class="br0">(</span><span
    class="br0">)</span> <span class="br0">{</span>

    </div>

13. <div class="de1">

         <span class="kw1">this</span>.<span
    class="me1">list</span>.<span class="me1">render</span><span
    class="br0">(</span><span class="br0">)</span>.<span
    class="me1">el</span>.<span class="me1">nodeName</span>.<span
    class="me1">should</span>.<span class="me1">equal</span><span
    class="br0">(</span><span class="st0">"UL"</span><span
    class="br0">)</span><span class="sy0">;</span>

    </div>

14. <div class="de1">

       <span class="br0">}</span><span class="br0">)</span>

    </div>

15. <div class="de2">

       it<span class="br0">(</span><span class="st0">"should include
    list items for all models in collection"</span><span
    class="sy0">,</span> <span class="kw1">function</span><span
    class="br0">(</span><span class="br0">)</span> <span
    class="br0">{</span>

    </div>

16. <div class="de1">

         <span class="kw1">this</span>.<span
    class="me1">list</span>.<span class="me1">render</span><span
    class="br0">(</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

17. <div class="de1">

         <span class="kw1">this</span>.<span
    class="me1">list</span>.\$el.<span class="me1">find</span><span
    class="br0">(</span><span class="st0">"li"</span><span
    class="br0">)</span>.<span class="me1">should</span>.<span
    class="me1">have</span>.<span class="me1">length</span><span
    class="br0">(</span><span class="nu0">2</span><span
    class="br0">)</span><span class="sy0">;</span>

    </div>

18. <div class="de1">

       <span class="br0">}</span><span class="br0">)</span>

    </div>

19. <div class="de1">

     <span class="br0">}</span><span class="br0">)</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.UnitTestingBackbonejsApplications20130826085139?action=sourceblock&num=18)

</div>

</div>

The view implementation is also straightforward. It tracks any additions
to the collection and updates the view. For the initial `render()` it
simply adds all the models in the collection one at a time.

<div class="vspace">

</div>

<div id="sourceblock19" class="sourceblock">

<div class="sourceblocktext">

<div class="javascript">

1.  <div class="de1">

    todoApp.<span class="me1">TodosList</span> <span
    class="sy0">=</span> Backbone.<span class="me1">View</span>.<span
    class="me1">extend</span><span class="br0">(</span><span
    class="br0">{</span>

    </div>

2.  <div class="de1">

       tagName<span class="sy0">:</span> <span
    class="st0">"ul"</span><span class="sy0">,</span>

    </div>

3.  <div class="de1">

       initialize<span class="sy0">:</span> <span
    class="kw1">function</span><span class="br0">(</span><span
    class="br0">)</span> <span class="br0">{</span>

    </div>

4.  <div class="de1">

         <span class="kw1">this</span>.<span
    class="me1">collection</span>.<span class="me1">on</span><span
    class="br0">(</span><span class="st0">"add"</span><span
    class="sy0">,</span> <span class="kw1">this</span>.<span
    class="me1">addOne</span><span class="sy0">,</span> <span
    class="kw1">this</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

5.  <div class="de2">

       <span class="br0">}</span><span class="sy0">,</span>

    </div>

6.  <div class="de1">

       render<span class="sy0">:</span> <span
    class="kw1">function</span><span class="br0">(</span><span
    class="br0">)</span> <span class="br0">{</span>

    </div>

7.  <div class="de1">

         <span class="kw1">this</span>.<span
    class="me1">addAll</span><span class="br0">(</span><span
    class="br0">)</span><span class="sy0">;</span>

    </div>

8.  <div class="de1">

         <span class="kw1">return</span> <span
    class="kw1">this</span><span class="sy0">;</span>

    </div>

9.  <div class="de1">

       <span class="br0">}</span><span class="sy0">,</span>

    </div>

10. <div class="de2">

       addAll<span class="sy0">:</span> <span
    class="kw1">function</span><span class="br0">(</span><span
    class="br0">)</span> <span class="br0">{</span>

    </div>

11. <div class="de1">

         <span class="kw1">this</span>.<span
    class="me1">collection</span>.<span class="me1">each</span><span
    class="br0">(</span><span class="kw1">this</span>.<span
    class="me1">addOne</span><span class="sy0">,</span> <span
    class="kw1">this</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

12. <div class="de1">

       <span class="br0">}</span><span class="sy0">,</span>

    </div>

13. <div class="de1">

       addOne<span class="sy0">:</span> <span
    class="kw1">function</span><span class="br0">(</span>todo<span
    class="br0">)</span> <span class="br0">{</span>

    </div>

14. <div class="de1">

         <span class="kw1">var</span> item <span class="sy0">=</span>
    <span class="kw1">new</span> todoApp.<span
    class="me1">TodoListItem</span><span class="br0">(</span><span
    class="br0">{</span>model<span class="sy0">:</span> todo<span
    class="br0">}</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

15. <div class="de2">

         <span class="kw1">this</span>.\$el.<span
    class="me1">append</span><span class="br0">(</span>item.<span
    class="me1">render</span><span class="br0">(</span><span
    class="br0">)</span>.<span class="me1">el</span><span
    class="br0">)</span><span class="sy0">;</span>

    </div>

16. <div class="de1">

       <span class="br0">}</span>

    </div>

17. <div class="de1">

     <span class="br0">}</span><span class="br0">)</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.UnitTestingBackbonejsApplications20130826085139?action=sourceblock&num=19)

</div>

</div>

<div class="vspace">

</div>

### Bonus Tests: Verifying the API

Because our REST API perfectly matches the API that Backbone expects, we
didn’t need any custom code to manage the API interaction. As a result,
we don’t need any unit test cases. In the real world, you might not be
quite as lucky. If your API doesn’t conform to Backbone conventions, you
may need to override or extend some of the Backbone code to deal with
the non-standard API. That extra code will need unit tests as well.
Fortunately, it’s relatively easy to test API interactions, even in a
unit test environment.

The easiest way to test API interactions relies on the fake server
functionality of Sinon.JS. Unfortunately, that functionality is only
available (currently) in Sinon’s browser implementation. It is
explicitly excluded from the node.js implementation. There are some
hacks to get it running in node.js, but those hacks are quite brittle
and rely on internal implementation details. It would be best to avoid
them if possible. Fortunately, we can get by without Sinon’s fake
server.

The secret is knowing that Backbone relies on jQuery’s `$.ajax()`
function to implement REST <span class="wikiword">APIs</span>. We can
intercept the API interactions by stubbing that function. When we stub
the function, we’ll want to substitute our own response. The
`yieldsTo()` method of the stub gives us exactly that opportunity. It
tells sinon what additional action it should take when the stub is
called. Here’s a complete test case to verify that our collection
correctly initializes itself using the REST API.

<div class="vspace">

</div>

<div id="sourceblock20" class="sourceblock">

<div class="sourceblocktext">

<div class="javascript">

1.  <div class="de1">

    describe<span class="br0">(</span><span class="st0">"Collection's
    Interaction with REST API"</span><span class="sy0">,</span> <span
    class="kw1">function</span><span class="br0">(</span><span
    class="br0">)</span> <span class="br0">{</span>

    </div>

2.  <div class="de1">

       it<span class="br0">(</span><span class="st0">"should load using
    the API"</span><span class="sy0">,</span> <span
    class="kw1">function</span><span class="br0">(</span><span
    class="br0">)</span> <span class="br0">{</span>

    </div>

3.  <div class="de1">

         <span class="kw1">this</span>.<span
    class="me1">ajax\_stub</span> <span class="sy0">=</span> sinon.<span
    class="me1">stub</span><span class="br0">(</span>\$<span
    class="sy0">,</span> <span class="st0">"ajax"</span><span
    class="br0">)</span>.<span class="me1">yieldsTo</span><span
    class="br0">(</span><span class="st0">"success"</span><span
    class="sy0">,</span> <span class="br0">[</span>

    </div>

4.  <div class="de1">

           <span class="br0">{</span> id<span class="sy0">:</span> <span
    class="nu0">1</span><span class="sy0">,</span> title<span
    class="sy0">:</span> <span class="st0">"Mock Summary 1"</span><span
    class="sy0">,</span> complete<span class="sy0">:</span> <span
    class="kw2">false</span> <span class="br0">}</span><span
    class="sy0">,</span>

    </div>

5.  <div class="de2">

           <span class="br0">{</span> id<span class="sy0">:</span> <span
    class="nu0">2</span><span class="sy0">,</span> title<span
    class="sy0">:</span> <span class="st0">"Mock Summary 2"</span><span
    class="sy0">,</span> complete<span class="sy0">:</span> <span
    class="kw2">true</span>  <span class="br0">}</span>

    </div>

6.  <div class="de1">

         <span class="br0">]</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

7.  <div class="de1">

         <span class="kw1">this</span>.<span class="me1">todos</span>
    <span class="sy0">=</span> <span class="kw1">new</span>
    todoApp.<span class="me1">Todos</span><span
    class="br0">(</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

8.  <div class="de1">

         <span class="kw1">this</span>.<span
    class="me1">todos</span>.<span class="me1">fetch</span><span
    class="br0">(</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

9.  <div class="de1">

         <span class="kw1">this</span>.<span
    class="me1">todos</span>.<span class="me1">should</span>.<span
    class="me1">have</span>.<span class="me1">length</span><span
    class="br0">(</span><span class="nu0">2</span><span
    class="br0">)</span><span class="sy0">;</span>

    </div>

10. <div class="de2">

         <span class="kw1">this</span>.<span
    class="me1">todos</span>.<span class="me1">at</span><span
    class="br0">(</span><span class="nu0">0</span><span
    class="br0">)</span>.<span class="kw1">get</span><span
    class="br0">(</span><span class="st0">'title'</span><span
    class="br0">)</span>.<span class="me1">should</span>.<span
    class="me1">equal</span><span class="br0">(</span><span
    class="st0">"Mock Summary 1"</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

11. <div class="de1">

         <span class="kw1">this</span>.<span
    class="me1">todos</span>.<span class="me1">at</span><span
    class="br0">(</span><span class="nu0">1</span><span
    class="br0">)</span>.<span class="kw1">get</span><span
    class="br0">(</span><span class="st0">'title'</span><span
    class="br0">)</span>.<span class="me1">should</span>.<span
    class="me1">equal</span><span class="br0">(</span><span
    class="st0">"Mock Summary 2"</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

12. <div class="de1">

         <span class="kw1">this</span>.<span
    class="me1">ajax\_stub</span>.<span class="me1">restore</span><span
    class="br0">(</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

13. <div class="de1">

       <span class="br0">}</span><span class="br0">)</span>

    </div>

14. <div class="de1">

     <span class="br0">}</span><span class="br0">)</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.UnitTestingBackbonejsApplications20130826085139?action=sourceblock&num=20)

</div>

</div>

<div class="vspace">

</div>

### Finished!

As you can see from the screen shot that follows, we’ve now written code
that passes all the unit test cases. For the time being at least,
development is complete.

<div class="vspace">

</div>

<div>

![](http://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2013/02/08-jstest-browser-all.png)

</div>

<div class="vspace">

</div>

Testing During Integration
--------------------------

Now that client-side development of our app is complete (and we have the
tests to prove it), we can safely tuck our <span
class="wikiword">JavaScript</span> into a source code management system.
It can then be integrated into the build process for the entire
application. As part of that process, we want to execute all the test
cases we’ve developed. That will ensure that the code that makes up the
final deployment passes all the tests that we’ve defined. It will also
protect against "minor tweaks" to the code that inadvertently introduce
new bugs.

During the build process, we’ll likely want to execute our tests from
the command line rather than in a web browser. We don’t need the details
of individual test cases, just an assurance that they all pass. Node.js
makes it easy enough to accommodate this requirement. We only need to
make a few small additions to our source code and unit test code files.

Our code needs these modifications because node.js handles global
variables differently than web browsers. In a web browser, <span
class="wikiword">JavaScript</span> variables are, by default, global in
scope. Node.js, on the other hand, confines variables to their local
module by default. In that environment, our code won’t be able to find
the third-party libraries it needs (jQuery, Underscore, and Backbone. If
we add the following statements at the beginning, though, node.js will
resolve references to these libraries appropriately. We’ve constructed
these statements so that they do no harm in the web browser, so we can
leave them in the code permanently.

<div class="vspace">

</div>

<div id="sourceblock21" class="sourceblock">

<div class="sourceblocktext">

<div class="javascript">

1.  <div class="de1">

    <span class="kw1">var</span> jQuery   <span class="sy0">=</span>
    jQuery   <span class="sy0">||</span> require<span
    class="br0">(</span><span class="st0">"jquery"</span><span
    class="br0">)</span><span class="sy0">;</span>

    </div>

2.  <div class="de1">

     <span class="kw1">var</span> \_        <span class="sy0">=</span>
    \_        <span class="sy0">||</span> require<span
    class="br0">(</span><span class="st0">"underscore"</span><span
    class="br0">)</span><span class="sy0">;</span>

    </div>

3.  <div class="de1">

     <span class="kw1">var</span> Backbone <span class="sy0">=</span>
    Backbone <span class="sy0">||</span> require<span
    class="br0">(</span><span class="st0">"backbone"</span><span
    class="br0">)</span><span class="sy0">;</span>

    </div>

4.  <div class="de1">

     Backbone.\$   <span class="sy0">=</span> jQuery<span
    class="sy0">;</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.UnitTestingBackbonejsApplications20130826085139?action=sourceblock&num=21)

</div>

</div>

We also need to adjust our test code. The test scripts need access to
their own libraries (jQuery, Chai, Sinon.JS, and sinon-chai). In
addition, we need to add a little extra to simulate a web browser’s
Document Object Model (DOM). Recall that our tests for click handling
required us to temporarily add a "fixture" `<div>` to the web page.
Node.js, of course, doesn’t normally have a web page. The jsdom node
package, however, lets us emulate one. The code below creates a minimal,
simulated web page for our tests.

<div class="vspace">

</div>

<div id="sourceblock22" class="sourceblock">

<div class="sourceblocktext">

<div class="javascript">

1.  <div class="de1">

    <span class="kw1">if</span> <span class="br0">(</span><span
    class="kw1">typeof</span> exports <span class="sy0">!==</span> <span
    class="st0">'undefined'</span> <span class="sy0">&</span>amp<span
    class="sy0">;&</span>amp<span class="sy0">;</span> <span
    class="kw1">this</span>.<span class="me1">exports</span> <span
    class="sy0">!==</span> exports<span class="br0">)</span> <span
    class="br0">{</span>

    </div>

2.  <div class="de1">

       global.<span class="me1">jQuery</span> <span class="sy0">=</span>
    require<span class="br0">(</span><span
    class="st0">"jquery"</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

3.  <div class="de1">

       global.\$ <span class="sy0">=</span> jQuery<span
    class="sy0">;</span>

    </div>

4.  <div class="de1">

       global.<span class="me1">chai</span> <span class="sy0">=</span>
    require<span class="br0">(</span><span
    class="st0">"chai"</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

5.  <div class="de2">

       global.<span class="me1">sinon</span> <span class="sy0">=</span>
    require<span class="br0">(</span><span
    class="st0">"sinon"</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

6.  <div class="de1">

       chai.<span class="me1">use</span><span
    class="br0">(</span>require<span class="br0">(</span><span
    class="st0">"sinon-chai"</span><span class="br0">)</span><span
    class="br0">)</span><span class="sy0">;</span>

    </div>

7.  <div class="de1">

       global.<span class="me1">jsdom</span> <span class="sy0">=</span>
    require<span class="br0">(</span><span
    class="st0">"jsdom"</span><span class="br0">)</span>.<span
    class="me1">jsdom</span><span class="sy0">;</span>

    </div>

8.  <div class="de1">

       <span class="kw1">var</span> doc <span class="sy0">=</span>
    jsdom<span class="br0">(</span><span
    class="st0">"&lt;html&gt;&lt;body&gt;&lt;/body&gt;&lt;/html&gt;"</span><span
    class="br0">)</span><span class="sy0">;</span>

    </div>

9.  <div class="de1">

       global.<span class="me1">window</span> <span class="sy0">=</span>
    doc.<span class="me1">createWindow</span><span
    class="br0">(</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

10. <div class="de2">

     <span class="br0">}</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.UnitTestingBackbonejsApplications20130826085139?action=sourceblock&num=22)

</div>

</div>

The conditional that wraps these statements tests to see if we’re
running in the node.js environment instead of a web browser. In a
browser, the extra statements aren’t necessary, so we can safely skip
them.

With those changes, we can execute the full test suite from the command
line. Simply navigate to the project’s root folder and execute the
command `mocha`. The result looks quite familiar.

<div class="vspace">

</div>

<div>

![](http://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2013/02/09-jstest-node.png)

</div>

Of course, `mocha` returns an exit level to indicate whether or not all
of the tests passed. That lets us automate the tests as part of a
continuous integration process, or simply as a local pre-commit script
to preserve our own sanity.

<div class="vspace">

</div>

Conclusion
----------

At this point we have accomplished our goals. We have a unit test
environment that runs in the background during development and
immediately notifies us when any test fails. The tests execute in a web
browser, giving us full access to the browser’s development tools while
we’re coding. The same tests also run equally well from a command line
script, so we can automate their execution during the build or
integration process.

<div class="vspace">

</div>

Resources
---------

Here are the main unit test resources used in the article.

<div class="vspace">

</div>

-   Command line <span class="wikiword">JavaScript</span> execution
    environment: [node.js](http://nodejs.org/)
-   <span class="wikiword">JavaScript</span> unit testing framework:
    [Mocha](http://visionmedia.github.com/mocha/)
-   Test Development Environment:
    [Test’em](https://github.com/airportyh/testem)
-   <span class="wikiword">JavaScript</span> assertion library: [Chai
    Assertion Library](http://chaijs.com/)
-   Spies, stubs, and mocks: [Sinon.JS](http://sinonjs.org/)
-   Additional assertions: [Sinon.JS Assertions for
    Chai](https://github.com/domenic/sinon-chai)

© 2000 – 2013 <span class="wikiword">SitePoint</span> Pty. Ltd.

<div class="vspace">

</div>

<div style="display: none;">

Summary: This article provides a thorough examination of unit testing
with Backbone.js. Tags: saved page Source:
<http://www.sitepoint.com/unit-testing-backbone-js-applications/>
Parent: (Technology.)<span
class="wikiword">[BackboneJS](http://wiki.tamouse.org?n=Technology.BackboneJS?action=print)</span>
includeme: [[<span
class="wikiword">[Technology.BackboneJS](http://wiki.tamouse.org?n=Technology.BackboneJS?action=print)</span>]
Categories:[Articles](http://wiki.tamouse.org?n=Category.Articles),
[HowTos](http://wiki.tamouse.org?n=Category.HowTos) Posted: Mon, 26 Aug
2013 08:51:39 -0500

</div>

<div class="vspace">

</div>

</div>
