<div id="wikitext">

<span id="excerpt"></span> Sometimes, you need to know the application
root of your PHP application. There are a few ways to do that. I'll
outline the simplest first. <span id="excerptend"></span>

<div class="vspace">

</div>

Setting the APP\_ROOT constant from the file name
-------------------------------------------------

### Method One: Using dirname(\_\_FILE\_\_)

If you set the application root from a file in the root directory, or a
known depth from the root, you can simply use the dirname() function
with the [PHP Magic
Constant](http://wiki.tamouse.org?n=Technology.PHPMagicConstants?action=print)
\_\_FILE\_\_:

<div class="vspace">

</div>

<div id="sourceblock1" class="sourceblock">

<div class="sourceblocktext">

<div class="php">

<span class="kw3">define</span><span class="br0">(</span><span
class="st_h">'APP\_ROOT'</span><span class="sy0">,</span> <span
class="kw3">dirname</span><span class="br0">(</span><span
class="kw4">\_\_FILE\_\_</span><span class="br0">)</span><span
class="sy0">.</span><span class="kw4">DIRECTORY\_SEPARATOR</span><span
class="br0">)</span><span class="sy0">;</span>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.GettingTheRootOfYourApplication?action=sourceblock&num=1)

</div>

</div>

For files below the application's root, simply stack on another dirname
(or as many as are needed):

<div class="vspace">

</div>

<div id="sourceblock2" class="sourceblock">

<div class="sourceblocktext">

<div class="php">

<span class="kw3">define</span><span class="br0">(</span><span
class="st_h">'APP\_ROOT'</span><span class="sy0">,</span><span
class="kw3">dirname</span><span class="br0">(</span><span
class="kw3">dirname</span><span class="br0">(</span><span
class="kw4">\_\_FILE\_\_</span><span class="br0">)</span><span
class="br0">)</span><span class="sy0">.</span><span
class="kw4">DIRECTORY\_SEPARATOR</span><span class="br0">)</span><span
class="sy0">;</span>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.GettingTheRootOfYourApplication?action=sourceblock&num=2)

</div>

</div>

This has major advantages of being portable and usable in both the
server and cli environments.

One disadvantage is that you have to *a priori* know the hierarchy of
the application already. If you are using the <span
class="wikiword">[SingleApplicationEntryPoint](http://wiki.tamouse.org?n=Technology.SingleApplicationEntryPoint?action=edit)[?](http://wiki.tamouse.org?n=Technology.SingleApplicationEntryPoint?action=edit)</span>
structure, this is very easy as you can set it in the main file.

<div class="vspace">

</div>

### Method Two: Using a named path and examining the file paths returned by \$\_SERVER['SCRIPT\_FILENAME']

This is a decidedly harder way to do this, but it does work. It requires
knowledge of the base directory of your application, which could change
from installation to installation, thus making a less easily portable
function.

<div class="vspace">

</div>

<div id="sourceblock3" class="sourceblock">

<div class="sourceblocktext">

<div class="php">

1.  <div class="de1">

    <span class="kw2">\<?php</span>

    </div>

2.  <div class="de1">

     

    </div>

3.  <div class="de1">

    <span class="kw3">define</span><span class="br0">(</span><span
    class="st_h">'APPBASE'</span><span class="sy0">,</span><span
    class="st_h">'myapp'</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

4.  <div class="de1">

     

    </div>

5.  <div class="de2">

    <span class="kw2">function</span> get\_app\_root<span
    class="br0">(</span><span class="br0">)</span>

    </div>

6.  <div class="de1">

    <span class="br0">{</span>

    </div>

7.  <div class="de1">

            <span class="co4">/\*\*</span>

    </div>

8.  <div class="de1">

    <span class="co4">         \* Get the Application Root directory
    path. Used for finding files and directories on the server's file
    system</span>

    </div>

9.  <div class="de1">

    <span class="co4">         \*/</span>

    </div>

10. <div class="de2">

            <span class="re0">\$script\_path\_arr</span> <span
    class="sy0">=</span> <span class="kw3">split</span><span
    class="br0">(</span><span class="st_h">'/'</span><span
    class="sy0">,</span> <span class="kw3">dirname</span><span
    class="br0">(</span><span class="re0">\$\_SERVER</span><span
    class="br0">[</span><span
    class="st_h">'SCRIPT\_FILENAME'</span><span
    class="br0">]</span><span class="br0">)</span><span
    class="br0">)</span><span class="sy0">;</span> <span
    class="coMULTI">/\* get the elements of the path to the current
    script \*/</span>

    </div>

11. <div class="de1">

            <span class="re0">\$app\_path\_arr</span> <span
    class="sy0">=</span> <span class="kw3">Array</span><span
    class="br0">(</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

12. <div class="de1">

            <span class="kw1">foreach</span> <span
    class="br0">(</span><span class="re0">\$script\_path\_arr</span>
    <span class="kw1">as</span> <span
    class="re0">\$script\_path\_element</span><span class="br0">)</span>
    <span class="br0">{</span>

    </div>

13. <div class="de1">

                    <span class="re0">\$app\_path\_arr</span><span
    class="br0">[</span><span class="br0">]</span> <span
    class="sy0">=</span> <span
    class="re0">\$script\_path\_element</span><span class="sy0">;</span>

    </div>

14. <div class="de1">

                    <span class="kw1">if</span> <span
    class="br0">(</span><span class="re0">\$script\_path\_element</span>
    <span class="sy0">==</span> APPBASE<span class="br0">)</span> <span
    class="kw1">break</span><span class="sy0">;</span> <span
    class="coMULTI">/\* stop processing when we get to the application
    base dir \*/</span>

    </div>

15. <div class="de2">

            <span class="br0">}</span>

    </div>

16. <div class="de1">

            <span class="kw1">return</span> <span
    class="br0">(</span><span class="sy0">!</span><span
    class="kw3">empty</span><span class="br0">(</span><span
    class="re0">\$app\_path\_arr</span><span class="br0">)</span> ?
    <span class="kw4">DIRECTORY\_SEPARATOR</span> <span
    class="sy0">.</span>  <span class="kw3">join</span><span
    class="br0">(</span><span
    class="kw4">DIRECTORY\_SEPARATOR</span><span
    class="sy0">,</span><span class="re0">\$app\_path\_arr</span><span
    class="br0">)</span> <span class="sy0">.</span> <span
    class="kw4">DIRECTORY\_SEPARATOR</span> <span class="sy0">:</span>
    <span class="kw4">NULL</span><span class="br0">)</span><span
    class="sy0">;</span> <span class="coMULTI">/\* path to application
    root \*/</span>

    </div>

17. <div class="de1">

    <span class="br0">}</span>

    </div>

18. <div class="de1">

     

    </div>

19. <div class="de1">

    <span class="kw3">define</span><span class="br0">(</span><span
    class="st_h">'APP\_ROOT'</span><span class="sy0">,</span>
    get\_app\_root<span class="br0">(</span><span
    class="br0">)</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

20. <div class="de2">

    <span class="sy1">?\></span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.GettingTheRootOfYourApplication?action=sourceblock&num=3)

</div>

</div>

<div class="vspace">

</div>

Getting the URI base path to the application
--------------------------------------------

Similarly to the file system application root, often times you want the
path to the application's root as called by the client's browser. In
this case, you could something similar to both the methods above:

<div class="vspace">

</div>

### Method One

Gather up the path name from \$\_SERVER['SCRIPT\_NAME']

<div id="sourceblock4" class="sourceblock">

<div class="sourceblocktext">

<div class="php">

<span class="kw3">define</span><span class="br0">(</span><span
class="st_h">'APP\_URI\_BASE'</span><span class="sy0">,</span><span
class="kw3">isset</span><span class="br0">(</span><span
class="re0">\$\_SERVER</span><span class="br0">[</span><span
class="st_h">'SCRIPT\_NAME'</span><span class="br0">]</span> <span
class="br0">)</span>? <span class="kw3">dirname</span><span
class="br0">(</span><span class="re0">\$\_SERVER</span><span
class="br0">[</span><span class="st_h">'SCRIPT\_NAME'</span><span
class="br0">]</span><span class="br0">)</span><span
class="sy0">.</span><span class="kw4">DIRECTORY\_SEPARATOR</span> <span
class="sy0">:</span> <span class="kw4">NULL</span><span
class="sy0">;</span>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.GettingTheRootOfYourApplication?action=sourceblock&num=4)

</div>

</div>

<span style="font-size:83%">*(Note: \$\_SERVER['SCRIPT\_NAME'] will
**only** be set when called from a server context.)*</span>

Note that this has both the same advantages and disadvantages of getting
the application's root file system directory.

<div class="vspace">

</div>

### Method Two

Note: APPBASE is defined as above.

<div class="vspace">

</div>

<div id="sourceblock5" class="sourceblock">

<div class="sourceblocktext">

<div class="php">

1.  <div class="de1">

    <span class="kw2">\<?php</span>

    </div>

2.  <div class="de1">

    <span class="kw2">function</span> get\_uri\_base<span
    class="br0">(</span><span class="br0">)</span>

    </div>

3.  <div class="de1">

    <span class="br0">{</span>

    </div>

4.  <div class="de1">

            <span class="kw1">if</span> <span class="br0">(</span><span
    class="sy0">!</span><span class="kw3">isset</span><span
    class="br0">(</span><span class="re0">\$\_SERVER</span><span
    class="br0">[</span><span class="st_h">'SCRIPT\_NAME'</span><span
    class="br0">]</span><span class="br0">)</span><span
    class="br0">)</span> <span class="kw1">return</span> <span
    class="kw4">NULL</span><span class="sy0">;</span> <span
    class="co1">// if no script name, this can't be called as a
    URI</span>

    </div>

5.  <div class="de2">

     

    </div>

6.  <div class="de1">

            <span class="co4">/\*\*</span>

    </div>

7.  <div class="de1">

    <span class="co4">         \* Get the Application URI path. Used for
    creating URI's for elements in the application that are called
    through the web server</span>

    </div>

8.  <div class="de1">

    <span class="co4">         \*/</span>

    </div>

9.  <div class="de1">

            <span class="re0">\$script\_uri\_path\_arr</span> <span
    class="sy0">=</span> <span class="kw3">split</span><span
    class="br0">(</span><span
    class="kw4">DIRECTORY\_SEPARATOR</span><span class="sy0">,</span>
    <span class="kw3">dirname</span><span class="br0">(</span><span
    class="re0">\$\_SERVER</span><span class="br0">[</span><span
    class="st_h">'SCRIPT\_NAME'</span><span class="br0">]</span><span
    class="br0">)</span><span class="br0">)</span><span
    class="sy0">;</span> <span class="coMULTI">/\* get the elements of
    the URI path to the current script \*/</span>

    </div>

10. <div class="de2">

            <span
    class="co1">//debug\_var("\\\$script\_uri\_path\_arr",\$script\_uri\_path\_arr);</span>

    </div>

11. <div class="de1">

            <span class="kw1">foreach</span> <span
    class="br0">(</span><span
    class="re0">\$script\_uri\_path\_arr</span> <span
    class="kw1">as</span> <span
    class="re0">\$script\_uri\_path\_element</span><span
    class="br0">)</span> <span class="br0">{</span>

    </div>

12. <div class="de1">

                    <span class="re0">\$app\_uri\_base\_arr</span><span
    class="br0">[</span><span class="br0">]</span> <span
    class="sy0">=</span> <span
    class="re0">\$script\_uri\_path\_element</span><span
    class="sy0">;</span>

    </div>

13. <div class="de1">

                    <span class="kw1">if</span> <span
    class="br0">(</span><span
    class="re0">\$script\_uri\_path\_element</span> <span
    class="sy0">==</span> APPBASE<span class="br0">)</span> <span
    class="kw1">break</span><span class="sy0">;</span> <span
    class="coMULTI">/\* stop processing when we get to the application
    base dir \*/</span>

    </div>

14. <div class="de1">

            <span class="br0">}</span>

    </div>

15. <div class="de2">

            <span class="kw1">return</span> <span
    class="br0">(</span><span class="sy0">!</span><span
    class="kw3">empty</span><span class="br0">(</span><span
    class="re0">\$script\_uri\_path\_arr</span><span
    class="br0">)</span> ? <span class="kw4">DIRECTORY\_SEPARATOR</span>
    <span class="sy0">.</span> <span class="kw3">join</span><span
    class="br0">(</span><span
    class="kw4">DIRECTORY\_SEPARATOR</span><span
    class="sy0">,</span><span
    class="re0">\$script\_uri\_path\_arr</span><span
    class="br0">)</span> <span class="sy0">:</span> <span
    class="kw4">NULL</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

16. <div class="de1">

    <span class="br0">}</span>

    </div>

17. <div class="de1">

     

    </div>

18. <div class="de1">

    <span class="kw3">define</span><span class="br0">(</span><span
    class="st_h">'APP\_URI\_BASE'</span><span
    class="sy0">,</span>get\_uri\_base<span class="br0">(</span><span
    class="br0">)</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

19. <div class="de1">

    <span class="sy1">?\></span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.GettingTheRootOfYourApplication?action=sourceblock&num=5)

</div>

</div>

<div class="vspace">

</div>

<div style="display: none;">

Keep metadata at end of page

Summary:In an application, it's often necessary to know where the root
of the application is Parent:(Technology.)PHP <span
class="wikiword">[IncludeMe](http://wiki.tamouse.org?n=Technology.IncludeMe?action=edit)[?](http://wiki.tamouse.org?n=Technology.IncludeMe?action=edit)</span>:[Technology.PHP](http://wiki.tamouse.org?n=Technology.PHP?action=print)
Categories:[Article](http://wiki.tamouse.org?n=Category.Article),[HowTos](http://wiki.tamouse.org?n=Category.HowTos)
Tags: php, how to, web development

</div>

<div class="vspace">

</div>

</div>
