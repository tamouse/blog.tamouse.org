<div id="wikitext">

<span id="excerpt"></span> Debugging PHP can be a major pain. If you're
not using something like [Xdebug](http://xdebug.org), typically,
debugging PHP is done via printing out variables and state information
to the browser as your application is running. Turning debugging on and
off is sometimes a major pain. I've devised scheme to make it much
simpler. <span id="excerptend"></span>

Also, see the [section on php.net about
debugging](http://us2.php.net/manual/en/debugger.php).

<div class="vspace">

</div>

Syntax Check (aka Lint)
-----------------------

PHP will not ever show syntax errors on output when run from a web
server, instead they are sent to the web server error log (or php error
log if set separately). This can be a struggle if you're running in an
edit-test-debug cycle.

Instead of trying to syntax check PHP code via the web server with a
browser call, run PHP with the `-l` (lint) option:

<div class="vspace">

</div>

<div id="sourceblock1" class="sourceblock">

<div class="sourceblocktext">

<div class="bash">

<span class="co4">\$ </span>php <span class="re5">-l</span> source.php

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.HowToSetUpForDebuggingInPHP?action=sourceblock&num=1)

</div>

</div>

This will easily report any syntax errors in your PHP script. Some IDEs
of course, have this built in, but you can probably wire it to whatever
editor or IDE you use.

For example, in emacs, you can use the `M-x compile` command, and change
the default command to `php -l file.php` where `file.php` is the
currently file you're editing.

<div class="vspace">

</div>

Make sure you see everything PHP reports
----------------------------------------

By default in most set-ups, error reporting is set for a production
server, and errors are logged to the php error log as determined in
`/etc/php.ini`. This is not very useful when developing and testing your
application.

To see what notices, warnings and errors PHP is reporting, add the
following to the beginning of your scripts, or put in an include file
that is used by every pprogram (such as a initialization or
configuration script).

<div class="vspace">

</div>

<div id="sourceblock2" class="sourceblock">

<div class="sourceblocktext">

<div class="php">

1.  <div class="de1">

    <span class="kw3">error\_reporting</span><span
    class="br0">(</span><span class="sy0">-</span><span
    class="nu0">1</span><span class="br0">)</span><span
    class="sy0">;</span> <span class="co1">// turns on absolutely ALL
    error reporting</span>

    </div>

2.  <div class="de1">

    <span class="kw3">ini\_set</span><span class="br0">(</span><span
    class="st_h">'display\_errors'</span><span class="sy0">,</span><span
    class="kw4">true</span><span class="br0">)</span><span
    class="sy0">;</span> <span class="co1">// will show errors on PHP
    output</span>

    </div>

3.  <div class="de1">

    <span class="kw3">ini\_set</span><span class="br0">(</span><span
    class="st_h">'display\_startup\_errors'</span><span
    class="sy0">,</span><span class="kw4">true</span><span
    class="br0">)</span><span class="sy0">;</span> <span class="co1">//
    will show startup errors on PHP output</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.HowToSetUpForDebuggingInPHP?action=sourceblock&num=2)

</div>

</div>

<div class="vspace">

</div>

Setting up a debug mechanism
----------------------------

There are many ways to set up a debugging mechanism. Rather than simply
inserting echo statements everywhere, it can be helpful to have a
function to handle debug output, which can check a global or environment
variable to determine the debugging state or level.

In addition, it is quite useful to know where your debug statements are
being executed from. In many cases, this may be obvious, but PHP
provides some special constants that can help pinpoint where the action
is:

<div class="vspace">

</div>

-   `__FILE__`{.escaped} - the name of the current file being processed
-   `__LINE__`{.escaped} - the current line of the current file
-   `__FUNCTION__`{.escaped} - the name of the currently executing
    function
-   `__CLASS__`{.escaped} - the name of the current class
-   `__METhOD__`{.escaped} - the name of the current method in the
    current class

In my scripts, I typically have a function (or class) that handles the
actual debugging display task, and can be called with something like:

<div class="vspace">

</div>

<div id="sourceblock3" class="sourceblock">

<div class="sourceblocktext">

<div class="php">

debug<span class="br0">(</span><span class="st0">"Message"</span><span
class="sy0">,</span><span class="re0">\$var</span><span
class="sy0">,</span><span class="kw4">\_\_FILE\_\_</span><span
class="sy0">,</span><span class="kw4">\_\_LINE\_\_</span><span
class="br0">)</span><span class="sy0">;</span>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.HowToSetUpForDebuggingInPHP?action=sourceblock&num=3)

</div>

</div>

which will emit the message, dump the variable, and tag the output with
the current file and line number.

The function takes care of checking whether the debugging is turned on,
so you can simply embed the debugging calls into your script and forget
about them. I tend to leave the debugging calls in until I've thoroughly
tested the code. Code under development seems to work better with
debugging things left in.

<div class="vspace">

</div>

Using the query string or post vars to turn debugging on or off
---------------------------------------------------------------

My scheme uses the query string or post vars on any PHP script call to
include the parameter `debug=true`. Thus to call a script and turn on
debugging, one could use
<http://www.example.com/myscript.php?debug=true>.

To set this up, I include the following in my `config.inc.php` file,
which gets called at the beginning of every script in the application:

<div class="vspace">

</div>

<div id="sourceblock4" class="sourceblock">

<div class="sourceblocktext">

<div class="php">

1.  <div class="de1">

    <span class="kw1">if</span> <span class="br0">(</span><span
    class="br0">(</span><span class="kw3">isset</span><span
    class="br0">(</span><span class="re0">\$\_REQUEST</span><span
    class="br0">[</span><span class="st_h">'debug'</span><span
    class="br0">]</span><span class="br0">)</span> <span
    class="sy0">&&</span> <span class="kw3">strtolower</span><span
    class="br0">(</span><span class="re0">\$\_REQUEST</span><span
    class="br0">[</span><span class="st_h">'debug'</span><span
    class="br0">]</span><span class="br0">)</span> <span
    class="sy0">==</span> <span class="st_h">'true'</span><span
    class="br0">)</span><span class="br0">)</span>

    </div>

2.  <div class="de1">

    <span class="br0">{</span>

    </div>

3.  <div class="de1">

        <span class="re0">\$GLOBALS</span><span
    class="br0">[</span><span class="st_h">'debug'</span><span
    class="br0">]</span><span class="sy0">=</span><span
    class="kw4">TRUE</span><span class="sy0">;</span>

    </div>

4.  <div class="de1">

        <span class="kw3">error\_reporting</span><span
    class="br0">(</span><span class="sy0">-</span><span
    class="nu0">1</span><span class="br0">)</span><span
    class="sy0">;</span> <span class="co1">//report every error</span>

    </div>

5.  <div class="de2">

        <span class="kw3">ini\_set</span><span class="br0">(</span><span
    class="st_h">'display\_errors'</span><span class="sy0">,</span><span
    class="kw4">TRUE</span><span class="br0">)</span><span
    class="sy0">;</span> <span class="co1">// send error messages to
    output</span>

    </div>

6.  <div class="de1">

        <span class="kw3">ini\_set</span><span class="br0">(</span><span
    class="st_h">'display\_startup\_errors'</span><span
    class="sy0">,</span><span class="kw4">TRUE</span><span
    class="br0">)</span><span class="sy0">;</span> <span class="co1">//
    send startup messages to output</span>

    </div>

7.  <div class="de1">

    <span class="br0">}</span> <span class="kw1">else</span> <span
    class="br0">{</span>

    </div>

8.  <div class="de1">

        <span class="re0">\$GLOBALS</span><span
    class="br0">[</span><span class="st_h">'debug'</span><span
    class="br0">]</span><span class="sy0">=</span><span
    class="kw4">FALSE</span><span class="sy0">;</span>   

    </div>

9.  <div class="de1">

    <span class="br0">}</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.HowToSetUpForDebuggingInPHP?action=sourceblock&num=4)

</div>

</div>

As you can see, this set the global `debug` to true or false depending
on the existence and value of the `debug` parameter on either the query
string or from the post data or from the environment.

<div class="vspace">

</div>

Short example
-------------

When you are creating an application, and wish to see what is being
passed into the script, you can easily include the following at the
beginning of the script (after you've set up the environment as above):

<div class="vspace">

</div>

<div id="sourceblock5" class="sourceblock">

<div class="sourceblocktext">

<div class="php">

1.  <div class="de1">

    debug<span class="br0">(</span><span class="st0">"<span
    class="es1">\\\$</span>\_GET: "</span><span
    class="sy0">,</span><span class="re0">\$\_GET</span><span
    class="br0">)</span><span class="sy0">;</span>

    </div>

2.  <div class="de1">

    debug<span class="br0">(</span><span class="st0">"<span
    class="es1">\\\$</span>\_POST: "</span><span
    class="sy0">,</span><span class="re0">\$\_POST</span><span
    class="br0">)</span><span class="sy0">;</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.HowToSetUpForDebuggingInPHP?action=sourceblock&num=5)

</div>

</div>

<div class="vspace">

</div>

Creating the debug function
---------------------------

The debug function can be in a self-contained script which you include
(and the environment setup can be included in this script as well if
you'd like).

<div class="vspace">

</div>

<div id="sourceblock6" class="sourceblock">

<div class="sourceblocktext">

<div class="php">

<div class="head">

A rudimentary debug function

</div>

1.  <div class="de1">

    <span class="kw2">function</span> debug<span
    class="br0">(</span><span class="re0">\$msg</span><span
    class="sy0">,</span><span class="re0">\$var</span><span
    class="sy0">,</span><span class="re0">\$file</span><span
    class="sy0">=</span><span class="st_h">''</span><span
    class="sy0">,</span><span class="re0">\$line</span><span
    class="sy0">=</span><span class="st_h">''</span><span
    class="br0">)</span>

    </div>

2.  <div class="de1">

    <span class="br0">{</span>

    </div>

3.  <div class="de1">

        <span class="kw1">if</span> <span class="br0">(</span><span
    class="sy0">!</span><span class="kw3">isset</span><span
    class="br0">(</span><span class="re0">\$GLOBALS</span><span
    class="br0">[</span><span class="st_h">'debug'</span><span
    class="br0">]</span><span class="br0">)</span> <span
    class="sy0">||</span> <span class="sy0">!</span><span
    class="re0">\$GLOBALS</span><span class="br0">[</span><span
    class="st_h">'debug'</span><span class="br0">]</span><span
    class="br0">)</span> <span class="kw1">return</span><span
    class="sy0">;</span> <span class="co1">// fast return if not
    debugging</span>

    </div>

4.  <div class="de1">

     

    </div>

5.  <div class="de2">

        <span class="kw1">echo</span> <span
    class="st0">"\<pre\>"</span><span class="sy0">;</span>

    </div>

6.  <div class="de1">

        <span class="kw1">echo</span> <span class="st0">"DEBUG: <span
    class="es4">\$file</span> @ <span class="es4">\$line</span> <span
    class="es4">\$msg</span>"</span><span
    class="sy0">.</span>PHP\_EOL<span class="sy0">;</span>

    </div>

7.  <div class="de1">

        <span class="kw1">if</span> <span class="br0">(</span><span
    class="sy0">!</span> <span class="kw3">is\_scalar</span><span
    class="br0">(</span><span class="re0">\$var</span><span
    class="br0">)</span><span class="br0">)</span> <span
    class="br0">{</span>

    </div>

8.  <div class="de1">

            <span class="kw1">echo</span> <span
    class="kw3">htmlspecialchars</span><span class="br0">(</span><span
    class="kw3">print\_r</span><span class="br0">(</span><span
    class="re0">\$var</span><span class="br0">)</span><span
    class="sy0">,</span><span class="kw4">true</span><span
    class="br0">)</span><span class="sy0">;</span>

    </div>

9.  <div class="de1">

        <span class="br0">}</span> <span class="kw1">else</span> <span
    class="br0">{</span>

    </div>

10. <div class="de2">

            <span class="kw1">echo</span> <span
    class="kw3">htmlspecialchars</span><span class="br0">(</span><span
    class="re0">\$var</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

11. <div class="de1">

        <span class="br0">}</span>

    </div>

12. <div class="de1">

        <span class="kw1">echo</span> PHP\_EOL<span
    class="sy0">.</span><span class="st0">"\</pre\>"</span><span
    class="sy0">.</span>PHP\_EOL<span class="sy0">;</span>

    </div>

13. <div class="de1">

    <span class="br0">}</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.HowToSetUpForDebuggingInPHP?action=sourceblock&num=6)

</div>

</div>

<div class="vspace">

</div>

More advanced debug features
----------------------------

### Flexible formatting

Something you may want to do is be able to determine how the messages
are formatted, instead of simply using the `<pre>..</pre>` HTML tags as
shown in the function above, in which case, you can again set globals,
sessions or, in this case, define constants to be used to wrap the debug
message.

An easy way to do this is set defined constants as the prefix and suffix
of the debug output. In the are where you set up the debug environment,
you can add something like:

<div class="vspace">

</div>

<div id="sourceblock7" class="sourceblock">

<div class="sourceblocktext">

<div class="php">

<div class="head">

Setting debug prefix and suffix

</div>

1.  <div class="de1">

    <span class="kw3">define</span><span class="br0">(</span><span
    class="st_h">'DEBUGPREFIX'</span><span class="sy0">,</span><span
    class="st_h">'\<p class="debug"\>'</span><span
    class="sy0">.</span>PHP\_EOL<span class="br0">)</span><span
    class="sy0">;</span>

    </div>

2.  <div class="de1">

    <span class="kw3">define</span><span class="br0">(</span><span
    class="st_h">'DEBUGSUFFIX'</span><span class="sy0">,</span><span
    class="st_h">'\</p\>'</span><span class="sy0">.</span>PHP\_EOL<span
    class="br0">)</span><span class="sy0">;</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.HowToSetUpForDebuggingInPHP?action=sourceblock&num=7)

</div>

</div>

Then modify the function above as follows:

<div class="vspace">

</div>

<div id="sourceblock8" class="sourceblock">

<div class="sourceblocktext">

<div class="php">

<div class="head">

A rudimentary debug function

</div>

1.  <div class="de1">

    <span class="kw2">function</span> debug<span
    class="br0">(</span><span class="re0">\$msg</span><span
    class="sy0">,</span><span class="re0">\$var</span><span
    class="sy0">,</span><span class="re0">\$file</span><span
    class="sy0">=</span><span class="st_h">''</span><span
    class="sy0">,</span><span class="re0">\$line</span><span
    class="sy0">=</span><span class="st_h">''</span><span
    class="br0">)</span>

    </div>

2.  <div class="de1">

    <span class="br0">{</span>

    </div>

3.  <div class="de1">

        <span class="kw1">if</span> <span class="br0">(</span><span
    class="sy0">!</span><span class="kw3">isset</span><span
    class="br0">(</span><span class="re0">\$GLOBALS</span><span
    class="br0">[</span><span class="st_h">'debug'</span><span
    class="br0">]</span><span class="br0">)</span> <span
    class="sy0">||</span> <span class="sy0">!</span><span
    class="re0">\$GLOBALS</span><span class="br0">[</span><span
    class="st_h">'debug'</span><span class="br0">]</span><span
    class="br0">)</span> <span class="kw1">return</span><span
    class="sy0">;</span> <span class="co1">// fast return if not
    debugging</span>

    </div>

4.  <div class="de1">

     

    </div>

5.  <div class="de2">

        <span class="kw1">echo</span> <span class="br0">(</span><span
    class="kw3">defined</span><span class="br0">(</span><span
    class="st_h">'DEBUGPREFIX'</span><span
    class="br0">)</span>?DEBUGPREFIX<span
    class="sy0">:</span>PHP\_EOL<span class="sy0">.</span><span
    class="st0">"\<pre\>"</span><span class="sy0">.</span>PHP\_EOL<span
    class="br0">)</span><span class="sy0">;</span>

    </div>

6.  <div class="de1">

        <span class="kw1">echo</span> <span class="st0">"DEBUG: <span
    class="es4">\$file</span> @ <span class="es4">\$line</span> <span
    class="es4">\$msg</span>"</span><span
    class="sy0">.</span>PHP\_EOL<span class="sy0">;</span>

    </div>

7.  <div class="de1">

        <span class="kw1">if</span> <span class="br0">(</span><span
    class="sy0">!</span> <span class="kw3">is\_scalar</span><span
    class="br0">(</span><span class="re0">\$var</span><span
    class="br0">)</span><span class="br0">)</span> <span
    class="br0">{</span>

    </div>

8.  <div class="de1">

            <span class="kw1">echo</span> <span
    class="kw3">htmlspecialchars</span><span class="br0">(</span><span
    class="kw3">print\_r</span><span class="br0">(</span><span
    class="re0">\$var</span><span class="br0">)</span><span
    class="sy0">,</span><span class="kw4">true</span><span
    class="br0">)</span><span class="sy0">;</span>

    </div>

9.  <div class="de1">

        <span class="br0">}</span> <span class="kw1">else</span> <span
    class="br0">{</span>

    </div>

10. <div class="de2">

            <span class="kw1">echo</span> <span
    class="kw3">htmlspecialchars</span><span class="br0">(</span><span
    class="re0">\$var</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

11. <div class="de1">

        <span class="br0">}</span>

    </div>

12. <div class="de1">

        <span class="kw1">echo</span> <span class="br0">(</span><span
    class="kw3">defined</span><span class="br0">(</span><span
    class="st_h">'DEBUGSUFFIX'</span><span
    class="br0">)</span>?DEBUGSUFFIX<span
    class="sy0">:</span>PHP\_EOL<span class="sy0">.</span><span
    class="st0">"\</pre\>"</span><span class="sy0">.</span>PHP\_EOL<span
    class="br0">)</span><span class="sy0">;</span>

    </div>

13. <div class="de1">

    <span class="br0">}</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.HowToSetUpForDebuggingInPHP?action=sourceblock&num=8)

</div>

</div>

<div class="vspace">

</div>

### Defering debug output until later

Sometimes, you don't want the debugging information written right at the
point it is called. Instead, you can create a global or session variable
that will hold the debugging messages until the point you want to emit
them.

<div class="vspace">

</div>

<div id="sourceblock9" class="sourceblock">

<div class="sourceblocktext">

<div class="php">

<div class="head">

Defining a global to hold debug messages

</div>

1.  <div class="de1">

    <span class="re0">\$GLOBALS</span><span class="br0">[</span><span
    class="st_h">'debug\_output'</span><span class="br0">]</span> <span
    class="sy0">=</span> <span class="kw3">array</span><span
    class="br0">(</span><span class="br0">)</span><span
    class="sy0">;</span> <span class="co1">// initialize this global
    near the beginning of your script</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.HowToSetUpForDebuggingInPHP?action=sourceblock&num=9)

</div>

</div>

<div class="vspace">

</div>

<div id="sourceblock10" class="sourceblock">

<div class="sourceblocktext">

<div class="php">

<div class="head">

Modified debug script

</div>

1.  <div class="de1">

    <span class="kw2">function</span> debug<span
    class="br0">(</span><span class="re0">\$msg</span><span
    class="sy0">,</span><span class="re0">\$var</span><span
    class="sy0">,</span><span class="re0">\$file</span><span
    class="sy0">=</span><span class="st_h">''</span><span
    class="sy0">,</span><span class="re0">\$line</span><span
    class="sy0">=</span><span class="st_h">''</span><span
    class="br0">)</span>

    </div>

2.  <div class="de1">

    <span class="br0">{</span>

    </div>

3.  <div class="de1">

        <span class="kw1">if</span> <span class="br0">(</span><span
    class="sy0">!</span><span class="kw3">isset</span><span
    class="br0">(</span><span class="re0">\$GLOBALS</span><span
    class="br0">[</span><span class="st_h">'debug'</span><span
    class="br0">]</span><span class="br0">)</span> <span
    class="sy0">||</span> <span class="sy0">!</span><span
    class="re0">\$GLOBALS</span><span class="br0">[</span><span
    class="st_h">'debug'</span><span class="br0">]</span><span
    class="br0">)</span> <span class="kw1">return</span><span
    class="sy0">;</span> <span class="co1">// fast return if not
    debugging</span>

    </div>

4.  <div class="de1">

     

    </div>

5.  <div class="de2">

        <span class="re0">\$out</span> <span class="sy0">=</span> <span
    class="st0">"DEBUG: <span class="es4">\$file</span> @ <span
    class="es4">\$line</span> <span
    class="es4">\$msg</span>"</span><span
    class="sy0">.</span>PHP\_EOL<span class="sy0">;</span>

    </div>

6.  <div class="de1">

        <span class="kw1">if</span> <span class="br0">(</span><span
    class="sy0">!</span> <span class="kw3">is\_scalar</span><span
    class="br0">(</span><span class="re0">\$var</span><span
    class="br0">)</span><span class="br0">)</span> <span
    class="br0">{</span>

    </div>

7.  <div class="de1">

            <span class="re0">\$out</span> <span class="sy0">.=</span>
    <span class="kw3">htmlspecialchars</span><span
    class="br0">(</span><span class="kw3">print\_r</span><span
    class="br0">(</span><span class="re0">\$var</span><span
    class="br0">)</span><span class="sy0">,</span><span
    class="kw4">true</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

8.  <div class="de1">

        <span class="br0">}</span> <span class="kw1">else</span> <span
    class="br0">{</span>

    </div>

9.  <div class="de1">

            <span class="re0">\$out</span> <span class="sy0">.=</span>
    <span class="kw3">htmlspecialchars</span><span
    class="br0">(</span><span class="re0">\$var</span><span
    class="br0">)</span><span class="sy0">;</span>

    </div>

10. <div class="de2">

        <span class="br0">}</span>

    </div>

11. <div class="de1">

        <span class="re0">\$GLOBALS</span><span
    class="br0">[</span><span class="st_h">'debug\_output'</span><span
    class="br0">]</span><span class="br0">[</span><span
    class="br0">]</span> <span class="sy0">=</span> <span
    class="re0">\$out</span><span class="sy0">;</span>

    </div>

12. <div class="de1">

    <span class="br0">}</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.HowToSetUpForDebuggingInPHP?action=sourceblock&num=10)

</div>

</div>

Later, to print out all the debug messages (perhaps in a flash section
of your application's output):

<div class="vspace">

</div>

<div id="sourceblock11" class="sourceblock">

<div class="sourceblocktext">

<div class="php">

<div class="head">

Emitting the saved debug messages

</div>

1.  <div class="de1">

    <span class="kw1">if</span> <span class="br0">(</span><span
    class="kw3">isset</span><span class="br0">(</span><span
    class="re0">\$GLOBALS</span><span class="br0">[</span><span
    class="st_h">'debug\_output'</span><span class="br0">]</span> <span
    class="sy0">&&</span> <span class="kw3">count</span><span
    class="br0">(</span><span class="re0">\$GLOBALS</span><span
    class="br0">[</span><span class="st_h">'debug\_output'</span><span
    class="br0">]</span><span class="br0">)</span> <span
    class="sy0">\></span> <span class="nu0">0</span><span
    class="br0">)</span> <span class="br0">{</span>

    </div>

2.  <div class="de1">

        <span class="kw1">echo</span> <span class="st_h">'\<ul
    class="debug"\>'</span><span class="sy0">.</span>PHP\_EOL<span
    class="sy0">;</span>

    </div>

3.  <div class="de1">

        <span class="kw1">foreach</span> <span class="br0">(</span><span
    class="re0">\$GLOBALS</span><span class="br0">[</span><span
    class="st_h">'debug\_output'</span><span class="br0">]</span> <span
    class="kw1">as</span> <span class="re0">\$l</span><span
    class="br0">)</span> <span class="br0">{</span>

    </div>

4.  <div class="de1">

            <span class="kw1">echo</span> <span class="st0">"\<li\><span
    class="es4">\$l</span>\</li\>"</span><span
    class="sy0">.</span>PHP\_EOL<span class="sy0">;</span>

    </div>

5.  <div class="de2">

        <span class="br0">}</span>

    </div>

6.  <div class="de1">

        <span class="kw1">echo</span> <span
    class="st_h">'\</ul\>'</span><span class="sy0">.</span>PHP\_EOL<span
    class="sy0">;</span>

    </div>

7.  <div class="de1">

    <span class="br0">}</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.HowToSetUpForDebuggingInPHP?action=sourceblock&num=11)

</div>

</div>

<div class="vspace">

</div>

### Persistent debug state over multiple requests

Sometimes, you want to be able to have the debug flag set over multiple
requests, form posts, and or redirects. This can be done in a few ways:

<div class="vspace">

</div>

1.  Use a cookie. Check the existence of the debug cookie for the
    application, and if set, turn debugging on. If the cookie is not
    set, then check for the debug parameter in the \$\_REQUEST
    superglobal. Additionally, if the debug cookie exists and is turned
    on, check the \$\_REQUEST superglobal to see if debugging should be
    turned off.

<div class="vspace">

</div>

<div id="sourceblock12" class="sourceblock">

<div class="sourceblocktext">

<div class="php">

<div class="head">

Using a cookie to maintain debug state

</div>

1.  <div class="de1">

    <span class="kw1">if</span> <span class="br0">(</span><span
    class="br0">(</span><span class="kw3">isset</span><span
    class="br0">(</span><span class="re0">\$\_COOKIE</span><span
    class="br0">[</span><span class="st_h">'debug'</span><span
    class="br0">]</span><span class="br0">)</span> <span
    class="sy0">&&</span> <span class="kw3">strtolower</span><span
    class="br0">(</span><span class="re0">\$\_COOKIE</span><span
    class="br0">[</span><span class="st_h">'debug'</span><span
    class="br0">]</span><span class="br0">)</span> <span
    class="sy0">==</span> <span class="st_h">'true'</span><span
    class="br0">)</span>

    </div>

2.  <div class="de1">

    <span class="br0">{</span>

    </div>

3.  <div class="de1">

        <span class="re0">\$GLOBALS</span><span
    class="br0">[</span><span class="st_h">'debug'</span><span
    class="br0">]</span><span class="sy0">=</span><span
    class="kw4">true</span><span class="sy0">;</span>

    </div>

4.  <div class="de1">

    <span class="br0">}</span>

    </div>

5.  <div class="de2">

     

    </div>

6.  <div class="de1">

    <span class="kw1">if</span> <span class="br0">(</span><span
    class="br0">(</span><span class="kw3">isset</span><span
    class="br0">(</span><span class="re0">\$\_REQUEST</span><span
    class="br0">[</span><span class="st_h">'debug'</span><span
    class="br0">]</span><span class="br0">)</span><span
    class="br0">)</span>

    </div>

7.  <div class="de1">

    <span class="br0">{</span>

    </div>

8.  <div class="de1">

        <span class="kw1">if</span> <span class="br0">(</span><span
    class="kw3">strtolower</span><span class="br0">(</span><span
    class="re0">\$\_REQUEST</span><span class="br0">[</span><span
    class="st_h">'debug'</span><span class="br0">]</span><span
    class="br0">)</span> <span class="sy0">==</span> <span
    class="st_h">'true'</span><span class="br0">)</span>

    </div>

9.  <div class="de1">

        <span class="br0">{</span>

    </div>

10. <div class="de2">

            <span class="re0">\$GLOBALS</span><span
    class="br0">[</span><span class="st_h">'debug'</span><span
    class="br0">]</span><span class="sy0">=</span><span
    class="kw4">TRUE</span><span class="sy0">;</span>

    </div>

11. <div class="de1">

            <span class="kw3">error\_reporting</span><span
    class="br0">(</span><span class="sy0">-</span><span
    class="nu0">1</span><span class="br0">)</span><span
    class="sy0">;</span> <span class="co1">//report every error</span>

    </div>

12. <div class="de1">

            <span class="kw3">ini\_set</span><span
    class="br0">(</span><span class="st_h">'display\_errors'</span><span
    class="sy0">,</span><span class="kw4">TRUE</span><span
    class="br0">)</span><span class="sy0">;</span> <span class="co1">//
    send error messages to output</span>

    </div>

13. <div class="de1">

            <span class="kw3">ini\_set</span><span
    class="br0">(</span><span
    class="st_h">'display\_startup\_errors'</span><span
    class="sy0">,</span><span class="kw4">TRUE</span><span
    class="br0">)</span><span class="sy0">;</span> <span class="co1">//
    send startup messages to output</span>

    </div>

14. <div class="de1">

            <span class="kw3">setcookie</span><span
    class="br0">(</span><span class="st_h">'cookie'</span><span
    class="sy0">,</span><span class="st_h">'true'</span><span
    class="br0">)</span><span class="sy0">;</span>

    </div>

15. <div class="de2">

        <span class="br0">}</span> <span class="kw1">else</span> <span
    class="br0">{</span>

    </div>

16. <div class="de1">

            <span class="re0">\$GLOBALS</span><span
    class="br0">[</span><span class="st_h">'debug'</span><span
    class="br0">]</span><span class="sy0">=</span><span
    class="kw4">FALSE</span><span class="sy0">;</span>

    </div>

17. <div class="de1">

            <span class="kw3">setcookie</span><span
    class="br0">(</span><span class="st_h">'cookie'</span><span
    class="sy0">,</span><span class="st_h">''</span><span
    class="sy0">,</span><span class="kw3">time</span><span
    class="br0">(</span><span class="br0">)</span> <span
    class="sy0">-</span> <span class="nu0">3600</span><span
    class="br0">)</span><span class="sy0">;</span> <span class="co1">//
    expiration that is past effectively deletes cookie</span>

    </div>

18. <div class="de1">

        <span class="br0">}</span>

    </div>

19. <div class="de1">

    <span class="br0">}</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.HowToSetUpForDebuggingInPHP?action=sourceblock&num=12)

</div>

</div>

<div class="vspace">

</div>

1.  Use a session variable to set the debug state, which will be carried
    over to every other script called within the same session.

<div class="vspace">

</div>

<div id="sourceblock13" class="sourceblock">

<div class="sourceblocktext">

<div class="php">

<div class="head">

Using a cookie to maintain debug state

</div>

1.  <div class="de1">

    <span class="kw3">session\_start</span><span
    class="br0">(</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

2.  <div class="de1">

     

    </div>

3.  <div class="de1">

    <span class="kw1">if</span> <span class="br0">(</span><span
    class="br0">(</span><span class="kw3">isset</span><span
    class="br0">(</span><span class="re0">\$\_SESSION</span><span
    class="br0">[</span><span class="st_h">'debug'</span><span
    class="br0">]</span><span class="br0">)</span> <span
    class="sy0">&&</span> <span class="kw3">strtolower</span><span
    class="br0">(</span><span class="re0">\$\_SESSION</span><span
    class="br0">[</span><span class="st_h">'debug'</span><span
    class="br0">]</span><span class="br0">)</span> <span
    class="sy0">==</span> <span class="kw4">TRUE</span><span
    class="br0">)</span>

    </div>

4.  <div class="de1">

    <span class="br0">{</span>

    </div>

5.  <div class="de2">

        <span class="re0">\$GLOBALS</span><span
    class="br0">[</span><span class="st_h">'debug'</span><span
    class="br0">]</span><span class="sy0">=</span><span
    class="kw4">TRUE</span><span class="sy0">;</span> <span
    class="co1">// you could also modify the debug function above to use
    the session variable directly</span>

    </div>

6.  <div class="de1">

    <span class="br0">}</span>

    </div>

7.  <div class="de1">

     

    </div>

8.  <div class="de1">

    <span class="kw1">if</span> <span class="br0">(</span><span
    class="br0">(</span><span class="kw3">isset</span><span
    class="br0">(</span><span class="re0">\$\_REQUEST</span><span
    class="br0">[</span><span class="st_h">'debug'</span><span
    class="br0">]</span><span class="br0">)</span><span
    class="br0">)</span>

    </div>

9.  <div class="de1">

    <span class="br0">{</span>

    </div>

10. <div class="de2">

        <span class="kw1">if</span> <span class="br0">(</span><span
    class="kw3">strtolower</span><span class="br0">(</span><span
    class="re0">\$\_REQUEST</span><span class="br0">[</span><span
    class="st_h">'debug'</span><span class="br0">]</span><span
    class="br0">)</span> <span class="sy0">==</span> <span
    class="st_h">'true'</span><span class="br0">)</span>

    </div>

11. <div class="de1">

        <span class="br0">{</span>

    </div>

12. <div class="de1">

            <span class="re0">\$GLOBALS</span><span
    class="br0">[</span><span class="st_h">'debug'</span><span
    class="br0">]</span><span class="sy0">=</span><span
    class="kw4">TRUE</span><span class="sy0">;</span>

    </div>

13. <div class="de1">

            <span class="kw3">error\_reporting</span><span
    class="br0">(</span><span class="sy0">-</span><span
    class="nu0">1</span><span class="br0">)</span><span
    class="sy0">;</span> <span class="co1">//report every error</span>

    </div>

14. <div class="de1">

            <span class="kw3">ini\_set</span><span
    class="br0">(</span><span class="st_h">'display\_errors'</span><span
    class="sy0">,</span><span class="kw4">TRUE</span><span
    class="br0">)</span><span class="sy0">;</span> <span class="co1">//
    send error messages to output</span>

    </div>

15. <div class="de2">

            <span class="kw3">ini\_set</span><span
    class="br0">(</span><span
    class="st_h">'display\_startup\_errors'</span><span
    class="sy0">,</span><span class="kw4">TRUE</span><span
    class="br0">)</span><span class="sy0">;</span> <span class="co1">//
    send startup messages to output</span>

    </div>

16. <div class="de1">

            <span class="re0">\$\_SESSION</span><span
    class="br0">[</span><span class="st_h">'debug'</span><span
    class="br0">]</span><span class="sy0">=</span><span
    class="kw4">TRUE</span><span class="sy0">;</span>

    </div>

17. <div class="de1">

        <span class="br0">}</span> <span class="kw1">else</span> <span
    class="br0">{</span>

    </div>

18. <div class="de1">

            <span class="re0">\$GLOBALS</span><span
    class="br0">[</span><span class="st_h">'debug'</span><span
    class="br0">]</span><span class="sy0">=</span><span
    class="kw4">FALSE</span><span class="sy0">;</span>

    </div>

19. <div class="de1">

            <span class="re0">\$\_SESSION</span><span
    class="br0">[</span><span class="st_h">'debug'</span><span
    class="br0">]</span><span class="sy0">=</span><span
    class="kw4">FALSE</span><span class="sy0">;</span>

    </div>

20. <div class="de2">

        <span class="br0">}</span>

    </div>

21. <div class="de1">

    <span class="br0">}</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.HowToSetUpForDebuggingInPHP?action=sourceblock&num=13)

</div>

</div>

<div class="vspace">

</div>

1.  Ensure each link and form submision has a debug parameter on it.
    This is the most intrusive and time-consuming way of dealing with
    this issue. If you go this route, you may want to write a function
    that automatically appends the debug flag on all application links
    and in forms before sending them to the browser.

<div class="vspace">

</div>

A debug class
-------------

To put the above ideas together, and add a few more, I've written a
debug class script [class.debug.php in git repo
here](https://gitorious.org/common-php-code/common-php-code) that can be
included in the application to handle debugging in a more interesting
fashion.

To use the class, include the file and instantiate the class as an
object:

<div class="vspace">

</div>

<div id="sourceblock14" class="sourceblock">

<div class="sourceblocktext">

<div class="php">

<div class="head">

initializing the class

</div>

1.  <div class="de1">

    <span class="kw1">include\_once</span><span
    class="br0">(</span><span class="st_h">'class.debug.php'</span><span
    class="br0">)</span><span class="sy0">;</span>

    </div>

2.  <div class="de1">

    <span class="re0">\$GLOBALS</span><span class="br0">[</span><span
    class="st_h">'dbg'</span><span class="br0">]</span> <span
    class="sy0">=</span> <span class="kw2">new</span> Debug<span
    class="br0">(</span><span class="kw4">FALSE</span><span
    class="br0">)</span><span class="sy0">;</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.HowToSetUpForDebuggingInPHP?action=sourceblock&num=14)

</div>

</div>

By default, this will turn debugging off, use HTML in debug output, use
the standard error logging facility, emit output directly, and use a
standard prefix and suffix for the debugging output.

Follow this with your environment set up as described at the beggining
of this page, only use methods to turn debugging on or off depending of
the environment:

<div class="vspace">

</div>

<div id="sourceblock15" class="sourceblock">

<div class="sourceblocktext">

<div class="php">

1.  <div class="de1">

    <span class="kw1">if</span> <span class="br0">(</span><span
    class="br0">(</span><span class="kw3">isset</span><span
    class="br0">(</span><span class="re0">\$\_REQUEST</span><span
    class="br0">[</span><span class="st_h">'debug'</span><span
    class="br0">]</span><span class="br0">)</span> <span
    class="sy0">&&</span> <span class="kw3">strtolower</span><span
    class="br0">(</span><span class="re0">\$\_REQUEST</span><span
    class="br0">[</span><span class="st_h">'debug'</span><span
    class="br0">]</span><span class="br0">)</span> <span
    class="sy0">==</span> <span class="st_h">'true'</span><span
    class="br0">)</span> <span class="sy0">||</span>

    </div>

2.  <div class="de1">

        <span class="br0">(</span><span class="kw3">isset</span><span
    class="br0">(</span><span class="re0">\$\_SERVER</span><span
    class="br0">[</span><span class="st_h">'DEBUG'</span><span
    class="br0">]</span><span class="br0">)</span> <span
    class="sy0">&&</span> <span class="kw3">strtolower</span><span
    class="br0">(</span><span class="re0">\$\_SERVER</span><span
    class="br0">[</span><span class="st_h">'DEBUG'</span><span
    class="br0">]</span><span class="br0">)</span> <span
    class="sy0">==</span> <span class="st_h">'true'</span><span
    class="br0">)</span><span class="br0">)</span>

    </div>

3.  <div class="de1">

    <span class="br0">{</span>

    </div>

4.  <div class="de1">

        <span class="re0">\$GLOBALS</span><span
    class="br0">[</span><span class="st_h">'dbg'</span><span
    class="br0">]</span><span class="sy0">-\></span><span
    class="me1">on</span><span class="br0">(</span><span
    class="br0">)</span><span class="sy0">;</span>

    </div>

5.  <div class="de2">

        <span class="kw3">error\_reporting</span><span
    class="br0">(</span><span class="sy0">-</span><span
    class="nu0">1</span><span class="br0">)</span><span
    class="sy0">;</span> <span class="co1">//report every error</span>

    </div>

6.  <div class="de1">

        <span class="kw3">ini\_set</span><span class="br0">(</span><span
    class="st_h">'display\_errors'</span><span class="sy0">,</span><span
    class="kw4">TRUE</span><span class="br0">)</span><span
    class="sy0">;</span> <span class="co1">// send error messages to
    output</span>

    </div>

7.  <div class="de1">

        <span class="kw3">ini\_set</span><span class="br0">(</span><span
    class="st_h">'display\_startup\_errors'</span><span
    class="sy0">,</span><span class="kw4">TRUE</span><span
    class="br0">)</span><span class="sy0">;</span> <span class="co1">//
    send startup messages to output</span>

    </div>

8.  <div class="de1">

    <span class="br0">}</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.HowToSetUpForDebuggingInPHP?action=sourceblock&num=15)

</div>

</div>

Then, to make debug statements, insert the line:

<div class="vspace">

</div>

<div id="sourceblock16" class="sourceblock">

<div class="sourceblocktext">

<div class="php">

1.  <div class="de1">

    <span class="re0">\$GLOBALS</span><span class="br0">[</span><span
    class="st_h">'dbg'</span><span class="br0">]</span><span
    class="sy0">-\></span><span class="me1">p</span><span
    class="br0">(</span><span class="st0">"Debug message"</span><span
    class="sy0">,</span><span class="re0">\$var</span><span
    class="sy0">,</span><span class="kw4">\_\_FILE\_\_</span><span
    class="sy0">,</span><span class="kw4">\_\_LINE\_\_</span><span
    class="br0">)</span><span class="sy0">;</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.HowToSetUpForDebuggingInPHP?action=sourceblock&num=16)

</div>

</div>

where you want your debug output to appear.

The class contains a number of initialization parameters and methods,
which are documented in the source file.

<div class="vspace">

</div>

The problem with doing redirects while debugging
------------------------------------------------

Oftentimes, one script will do some processing and then redirect to
another script to finish up and display the actual results. When
debugging, you don't always want this to happen so you can see what's
going on on the page you're working on without losing the potential
debugging output when a page redirects.

Thus, I've come up with the following function to handle those
situations:

<div class="vspace">

</div>

<div id="sourceblock17" class="sourceblock">

<div class="sourceblocktext">

<div class="php">

<div class="head">

function to deal with redirectcs while debugging

</div>

1.  <div class="de1">

    <span class="kw2">function</span> do\_redirect<span
    class="br0">(</span><span class="re0">\$u</span><span
    class="br0">)</span>

    </div>

2.  <div class="de1">

    <span class="br0">{</span>

    </div>

3.  <div class="de1">

        debug<span class="br0">(</span><span
    class="st0">"Redirect:"</span><span class="sy0">,</span><span
    class="re0">\$u</span><span class="sy0">,</span><span
    class="kw4">\_\_FILE\_\_</span><span class="sy0">,</span><span
    class="kw4">\_\_LINE\_\_</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

4.  <div class="de1">

        <span class="kw1">if</span> <span class="br0">(</span><span
    class="sy0">!</span><span class="re0">\$GLOBALS</span><span
    class="br0">[</span><span class="st_h">'debug'</span><span
    class="br0">]</span><span class="br0">)</span> <span
    class="kw3">header</span><span class="br0">(</span><span
    class="st0">"Location: <span class="es4">\$u</span>"</span><span
    class="br0">)</span><span class="sy0">;</span> <span
    class="kw1">else</span> <span class="kw3">exit</span><span
    class="br0">(</span><span class="st0">"\<p\>\<a href='<span
    class="es4">\$u</span>'\>Redirect to <span
    class="es4">\$u</span>\</a\>\</p\>"</span><span
    class="br0">)</span><span class="sy0">;</span>

    </div>

5.  <div class="de2">

    <span class="br0">}</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.HowToSetUpForDebuggingInPHP?action=sourceblock&num=17)

</div>

</div>

In the above function, the redirect url is passed to the debug print
function, then, if debugging is of, will send the redirect header;
otherwise it will print an HTML link to enable the redirect to be
manually executed after the debug information has been seen by the
developer.

<div class="vspace">

</div>

<div style="display: none;">

Summary:a good way to set up for debugging in PHP
Parent:(Technology.)PHP <span
class="wikiword">[IncludeMe](http://wiki.tamouse.org?n=Technology.IncludeMe?action=edit)[?](http://wiki.tamouse.org?n=Technology.IncludeMe?action=edit)</span>:[PHP](http://wiki.tamouse.org?n=Technology.PHP?action=print)
Categories:[HowTos](http://wiki.tamouse.org?n=Category.HowTos),
[BestPractices](http://wiki.tamouse.org?n=Category.BestPractices) Tags:
php, debugging

</div>

</div>
