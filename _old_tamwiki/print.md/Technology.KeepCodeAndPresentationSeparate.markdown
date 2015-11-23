<div id="wikitext">

Introduction
------------

<span id="excerpt"></span> When I was first starting out writing web
applications, back in the days of ColdFusion, it was common practice to
intermingle code and presentation. This made for some horrendous coding
choices and made maintenance a nightmare. Yet all the examples given
were of intermingled code and presentation. When PHP was new, it faired
no better. PHP was originally designed to intermingle with HTML code,
and many still do this. <span id="excerptend"></span>

Here's an example:

<div class="vspace">

</div>

<div id="sourceblock1" class="sourceblock">

<div class="sourceblocktext">

<div class="php">

1.  <div class="de1">

    \<div id="div\_duration"\>

    </div>

2.  <div class="de1">

          \<label for="duration"\><span class="kw2">\<?php</span> <span
    class="kw1">echo</span> get\_vocab<span class="br0">(</span><span
    class="st0">"duration"</span><span class="br0">)</span><span
    class="sy0">;</span><span class="sy1">?\></span>:\</label\>

    </div>

3.  <div class="de1">

          \<div class="group"\>

    </div>

4.  <div class="de1">

            \<input id="duration" name="duration" value="<span
    class="kw2">\<?php</span> <span class="kw1">echo</span> <span
    class="re0">\$duration</span><span class="sy0">;</span><span
    class="sy1">?\></span>"\>

    </div>

5.  <div class="de2">

            \<select id="dur\_units" name="dur\_units"\>

    </div>

6.  <div class="de1">

              <span class="kw2">\<?php</span>

    </div>

7.  <div class="de1">

              <span class="kw1">if</span><span class="br0">(</span>
    <span class="re0">\$enable\_periods</span> <span
    class="br0">)</span>

    </div>

8.  <div class="de1">

              <span class="br0">{</span>

    </div>

9.  <div class="de1">

                <span class="re0">\$units</span> <span
    class="sy0">=</span> <span class="kw3">array</span><span
    class="br0">(</span><span class="st0">"periods"</span><span
    class="sy0">,</span> <span class="st0">"days"</span><span
    class="br0">)</span><span class="sy0">;</span>

    </div>

10. <div class="de2">

              <span class="br0">}</span>

    </div>

11. <div class="de1">

              <span class="kw1">else</span>

    </div>

12. <div class="de1">

              <span class="br0">{</span>

    </div>

13. <div class="de1">

                <span class="re0">\$units</span> <span
    class="sy0">=</span> <span class="kw3">array</span><span
    class="br0">(</span><span class="st0">"minutes"</span><span
    class="sy0">,</span> <span class="st0">"hours"</span><span
    class="sy0">,</span> <span class="st0">"days"</span><span
    class="sy0">,</span> <span class="st0">"weeks"</span><span
    class="br0">)</span><span class="sy0">;</span>

    </div>

14. <div class="de1">

              <span class="br0">}</span>

    </div>

15. <div class="de2">

     

    </div>

16. <div class="de1">

              <span class="kw1">while</span> <span
    class="br0">(</span><span class="kw3">list</span><span
    class="br0">(</span><span class="sy0">,</span><span
    class="re0">\$unit</span><span class="br0">)</span> <span
    class="sy0">=</span> <span class="kw3">each</span><span
    class="br0">(</span><span class="re0">\$units</span><span
    class="br0">)</span><span class="br0">)</span>

    </div>

17. <div class="de1">

              <span class="br0">{</span>

    </div>

18. <div class="de1">

                <span class="kw1">echo</span> <span class="st0">"      
     \<option value=<span class="es1">\\"</span><span
    class="es4">\$unit</span><span class="es1">\\"</span>"</span><span
    class="sy0">;</span>

    </div>

19. <div class="de1">

                <span class="kw1">if</span> <span
    class="br0">(</span><span class="re0">\$dur\_units</span> <span
    class="sy0">==</span> get\_vocab<span class="br0">(</span><span
    class="re0">\$unit</span><span class="br0">)</span><span
    class="br0">)</span>

    </div>

20. <div class="de2">

                <span class="br0">{</span>

    </div>

21. <div class="de1">

                  <span class="kw1">echo</span> <span class="st0">"
    selected=<span class="es1">\\"</span>selected<span
    class="es1">\\"</span>"</span><span class="sy0">;</span>

    </div>

22. <div class="de1">

                <span class="br0">}</span>

    </div>

23. <div class="de1">

                <span class="kw1">echo</span> <span
    class="st0">"\>"</span><span class="sy0">.</span>get\_vocab<span
    class="br0">(</span><span class="re0">\$unit</span><span
    class="br0">)</span><span class="sy0">.</span><span
    class="st0">"\</option\><span class="es1">\\n</span>"</span><span
    class="sy0">;</span>

    </div>

24. <div class="de1">

              <span class="br0">}</span>

    </div>

25. <div class="de2">

              <span class="sy1">?\></span>

    </div>

26. <div class="de1">

            \</select\>

    </div>

27. <div class="de1">

            \<div id="ad"\>

    </div>

28. <div class="de1">

              \<input id="all\_day" class="checkbox" name="all\_day"
    type="checkbox" value="yes" onclick="OnAllDayClick(this)"\>

    </div>

29. <div class="de1">

              \<label for="all\_day"\><span class="kw2">\<?php</span>
    <span class="kw1">echo</span> get\_vocab<span
    class="br0">(</span><span class="st0">"all\_day"</span><span
    class="br0">)</span><span class="sy0">;</span> <span
    class="sy1">?\></span>\</label\>

    </div>

30. <div class="de2">

            \</div\>

    </div>

31. <div class="de1">

          \</div\>

    </div>

32. <div class="de1">

        \</div\>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.KeepCodeAndPresentationSeparate?action=sourceblock&num=1)

</div>

</div>

Really pretty ugly. Still, this was what PHP was meant to do. How to
actually extract code from presentation? One good way is the use of
templates. [Smarty](http://www.smarty.net) is one great templating
system for PHP. With it, you keep all your controller, models, helpers,
etc. separate from your views. The views are stored at templates, which
are compiled into regular PHP code by the Smarty engine. (Under the
hood, the Smarty compiled templates do intermingle presentation and PHP,
but the point is it's divorced from the coder).

<div class="vspace">

</div>

Using Smarty
------------

Smart is a library that you can install on your sever pretty much
anywhere, or you can include it in a directory in your application.
There is little to set up to use Smarty, just a couple of directories in
your application, and you're all set.

If you do install Smarty somewhere on your server out of the way of your
application, make sure PHP can find it. You may need to add the path to
the Smarty implementation to your php include path set in php.ini:

<div class="vspace">

</div>

<div id="sourceblock2" class="sourceblock">

<div class="sourceblocktext">

<div class="php">

1.  <div class="de1">

    include\_path<span class="sy0">=</span><span
    class="st0">".:/usr/lib/php:/usr/lib/php/includes:/usr/lib/php/Smarty"</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.KeepCodeAndPresentationSeparate?action=sourceblock&num=2)

</div>

</div>

(Note the include\_path begins with "." which means it will search the
current working directory first for any included/required files.)

Then, in your PHP code (preferably in a config.inc file), you set up the
Smarty engine:

<div class="vspace">

</div>

<div id="sourceblock3" class="sourceblock">

<div class="sourceblocktext">

<div class="php">

1.  <div class="de1">

    <span class="kw1">require\_once</span><span
    class="br0">(</span><span
    class="st_h">'Smarty.class.php'</span><span
    class="br0">)</span><span class="sy0">;</span>

    </div>

2.  <div class="de1">

     

    </div>

3.  <div class="de1">

    <span class="co4">/\*\*</span>

    </div>

4.  <div class="de1">

    <span class="co4"> \* Set up Smarty</span>

    </div>

5.  <div class="de2">

    <span class="co4"> \*/</span>

    </div>

6.  <div class="de1">

    <span class="re0">\$smarty</span> <span class="sy0">=</span> <span
    class="kw2">new</span> Smarty<span class="br0">(</span><span
    class="br0">)</span><span class="sy0">;</span>

    </div>

7.  <div class="de1">

    <span class="re0">\$smarty</span><span class="sy0">-\></span><span
    class="me1">template\_dir</span> <span class="sy0">=</span>
    APP\_ROOT <span class="sy0">.</span> <span
    class="st_h">'templates/'</span><span class="sy0">;</span>

    </div>

8.  <div class="de1">

    <span class="re0">\$smarty</span><span class="sy0">-\></span><span
    class="me1">compile\_dir</span> <span class="sy0">=</span> APP\_ROOT
    <span class="sy0">.</span> <span
    class="st_h">'templates\_c/'</span><span class="sy0">;</span>

    </div>

9.  <div class="de1">

    <span class="co1">//debug\_var("\\\$smarty=",\$smarty);</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.KeepCodeAndPresentationSeparate?action=sourceblock&num=3)

</div>

</div>

<span style="font-size:83%">(*Note: For the APP\_ROOT constant, see
<span
class="wikiword">[GettingTheRootOfYourApplication](http://wiki.tamouse.org?n=Technology.GettingTheRootOfYourApplication?action=print)</span>*)</span>

To make Smarty emit the proper HTML codes, you first assign data for the
template:

<div class="vspace">

</div>

<div id="sourceblock4" class="sourceblock">

<div class="sourceblocktext">

<div class="php">

1.  <div class="de1">

    <span class="re0">\$smarty</span><span class="sy0">-\></span><span
    class="me1">assign</span><span class="br0">(</span><span
    class="st_h">'title'</span><span class="sy0">,</span><span
    class="st0">"This could be the title of the page"</span><span
    class="br0">)</span><span class="sy0">;</span>

    </div>

2.  <div class="de1">

    <span class="re0">\$smarty</span><span class="sy0">-\></span><span
    class="me1">assign</span><span class="br0">(</span><span
    class="st_h">'rows'</span><span class="sy0">,</span><span
    class="re0">\$rows</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

3.  <div class="de1">

    <span class="kw1">if</span> <span class="br0">(</span><span
    class="sy0">!</span><span class="kw3">empty</span><span
    class="br0">(</span><span class="re0">\$messages</span><span
    class="br0">)</span><span class="br0">)</span> <span
    class="re0">\$smarty</span><span class="sy0">-\></span><span
    class="me1">assign</span><span class="br0">(</span><span
    class="st_h">'messages'</span><span class="sy0">,</span><span
    class="re0">\$messages</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

4.  <div class="de1">

    <span class="kw1">if</span> <span class="br0">(</span><span
    class="sy0">!</span><span class="kw3">empty</span><span
    class="br0">(</span><span class="re0">\$errors</span><span
    class="br0">)</span><span class="br0">)</span> <span
    class="re0">\$smarty</span><span class="sy0">-\></span><span
    class="me1">assign</span><span class="br0">(</span><span
    class="st_h">'errors'</span><span class="sy0">,</span><span
    class="re0">\$errors</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

5.  <div class="de2">

    <span class="kw1">if</span> <span class="br0">(</span><span
    class="sy0">!</span><span class="kw3">empty</span><span
    class="br0">(</span><span
    class="re0">\$additional\_query\_parms</span><span
    class="br0">)</span><span class="br0">)</span> <span
    class="br0">{</span>

    </div>

6.  <div class="de1">

        <span class="re0">\$smarty</span><span
    class="sy0">-\></span><span class="me1">assign</span><span
    class="br0">(</span><span
    class="st_h">'additional\_query\_string,http\_build\_query(\$additional\_query\_parms));</span>

    </div>

7.  <div class="de1">

    <span class="st_h">  
     \$smarty-\>assign('</span>additional\_query\_parms<span
    class="st_h">',\$additional\_query\_parms);</span>

    </div>

8.  <div class="de1">

    <span class="st_h">}</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.KeepCodeAndPresentationSeparate?action=sourceblock&num=4)

</div>

</div>

Then you tell Smarty to display the template:

<div class="vspace">

</div>

<div id="sourceblock5" class="sourceblock">

<div class="sourceblocktext">

<div class="php">

1.  <div class="de1">

    <span class="re0">\$smarty</span><span class="sy0">-\></span><span
    class="me1">display</span><span class="br0">(</span><span
    class="st_h">'templatename.tpl");</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.KeepCodeAndPresentationSeparate?action=sourceblock&num=5)

</div>

</div>

<div class="vspace">

</div>

Smarty Templates
----------------

Smarty templates have specially designed markup that enables them to
process the input and produce the proper display. Standard Smart
delimiters are "{" and "}" but these can be changed. One person I know
uses "\<!--{" and "}--\>" as delimiters, presumably so the temp;ates can
be validated directly.

A sample tempate looks like this:

<div class="vspace">

</div>

<div id="sourceblock6" class="sourceblock">

<div class="sourceblocktext">

<div class="php">

1.  <div class="de1">

    <span class="br0">{</span><span class="sy0">\*</span> index <span
    class="kw3">file</span> <span class="kw1">for</span> application
    <span class="sy0">\*</span><span class="br0">}</span>

    </div>

2.  <div class="de1">

    <span class="br0">{</span><span class="kw1">include</span> <span
    class="kw3">file</span><span class="sy0">=</span><span
    class="st0">"header.tpl"</span><span class="br0">}</span>

    </div>

3.  <div class="de1">

    <span class="br0">{</span><span class="kw1">include</span> <span
    class="kw3">file</span><span class="sy0">=</span><span
    class="st0">"nav.tpl"</span><span class="br0">}</span>

    </div>

4.  <div class="de1">

     

    </div>

5.  <div class="de2">

    <span class="sy0">\<</span>div id<span class="sy0">=</span><span
    class="st0">"content"</span><span class="sy0">\></span>

    </div>

6.  <div class="de1">

            <span class="br0">{</span><span class="kw1">include</span>
    <span class="kw3">file</span><span class="sy0">=</span><span
    class="st0">"messages.tpl"</span><span class="br0">}</span>

    </div>

7.  <div class="de1">

            <span class="br0">{</span><span class="kw1">include</span>
    <span class="kw3">file</span><span class="sy0">=</span><span
    class="st0">"errors.tpl"</span><span class="br0">}</span>

    </div>

8.  <div class="de1">

            <span class="br0">{</span><span class="kw1">if</span> <span
    class="re0">\$num\_comics</span> <span class="sy0">\></span> <span
    class="nu0">0</span><span class="br0">}</span>

    </div>

9.  <div class="de1">

            <span class="sy0">\<</span>ul<span
    class="sy0">\></span><span class="br0">{</span><span
    class="kw1">foreach</span> from<span class="sy0">=</span><span
    class="re0">\$comics</span> item<span class="sy0">=</span>comic<span
    class="br0">}</span>

    </div>

10. <div class="de2">

                    <span class="sy0">\<</span>li <span
    class="kw2">class</span><span class="sy0">=</span><span
    class="st0">"comicentry"</span><span class="sy0">\></span>

    </div>

11. <div class="de1">

                            <span class="sy0">\<</span>span <span
    class="kw2">class</span><span class="sy0">=</span><span
    class="st0">"comictitle"</span><span class="sy0">\></span><span
    class="br0">{</span><span class="re0">\$comic</span><span
    class="sy0">.</span>name<span class="br0">}</span><span
    class="sy0">\</</span>span<span class="sy0">\></span>

    </div>

12. <div class="de1">

                            <span class="sy0">\<</span>span <span
    class="kw2">class</span><span class="sy0">=</span><span
    class="st0">"comicdate"</span><span class="sy0">\></span><span
    class="br0">{</span><span class="re0">\$comic</span><span
    class="sy0">.</span>comicdate<span class="br0">}</span><span
    class="sy0">\</</span>span<span class="sy0">\></span>

    </div>

13. <div class="de1">

                            <span class="sy0">\<</span>br <span
    class="sy0">/\></span>

    </div>

14. <div class="de1">

                            <span class="sy0">\<</span>a href<span
    class="sy0">=</span><span class="st0">"{<span
    class="es4">\$comic</span>.uri}"</span><span
    class="sy0">\>\<</span>img src<span class="sy0">=</span><span
    class="st0">"{<span
    class="es4">\$smarty</span>.const.APP\_URI\_BASE}{<span
    class="es4">\$comic</span>.filespec}"</span> alt<span
    class="sy0">=</span><span class="st0">"{<span
    class="es4">\$comic</span>.name} {<span
    class="es4">\$comic</span>.comicdate}"</span>  <span
    class="sy0">/\></span> <span class="sy0">\</</span>a<span
    class="sy0">\></span>

    </div>

15. <div class="de2">

                            <span class="sy0">\<</span>br <span
    class="sy0">/\></span>

    </div>

16. <div class="de1">

                            <span class="sy0">\<</span>a href<span
    class="sy0">=</span><span class="st0">"showcomics.php?sid={<span
    class="es4">\$comic</span>.subscription\_id}{if !empty(<span
    class="es4">\$additional\_query\_string</span>)}&<span
    class="es4">{\$additional\_query\_string}</span>{/if}"</span><span
    class="sy0">\></span>Show all comics <span class="kw1">for</span>
    this subscription<span class="sy0">\</</span>a<span
    class="sy0">\></span>

    </div>

17. <div class="de1">

                    <span class="sy0">\</</span>li<span
    class="sy0">\></span>

    </div>

18. <div class="de1">

            <span class="br0">{</span><span class="sy0">/</span><span
    class="kw1">foreach</span><span class="br0">}</span><span
    class="sy0">\</</span>ul<span class="sy0">\></span>

    </div>

19. <div class="de1">

            <span class="br0">{</span><span class="kw1">else</span><span
    class="br0">}</span>

    </div>

20. <div class="de2">

            <span class="sy0">\<</span>h3<span class="sy0">\></span>No
    comics to display<span class="sy0">.\</</span>h3<span
    class="sy0">\></span>

    </div>

21. <div class="de1">

            <span class="br0">{</span><span class="sy0">/</span><span
    class="kw1">if</span><span class="br0">}</span>

    </div>

22. <div class="de1">

    <span class="sy0">\</</span>div<span class="sy0">\></span>

    </div>

23. <div class="de1">

     

    </div>

24. <div class="de1">

    <span class="br0">{</span><span class="kw1">include</span> <span
    class="kw3">file</span><span class="sy0">=</span><span
    class="st0">"footer.tpl"</span><span class="br0">}</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.KeepCodeAndPresentationSeparate?action=sourceblock&num=6)

</div>

</div>

You can see several ideas in there. First of all, notice the use of
include files to set up a standard look and feel and navigation around
the page.

<div class="vspace">

</div>

-   header.tpl -- provides a place to put the html head preamble, set
    javascript libraries, stylesheets, etc.
-   nav.tpl -- provides a means for producing standard navigation on the
    web page
-   footer.tpl -- a common footer to end the page. This could include
    site policy links, copyright info, etc.
-   messages.tpl and errors.tpl -- provide a standard mechanism for
    displaying messages and errors from the application to the client.
-   centered in it all is a content div where you can produce your
    structured output

<div class="vspace">

</div>

Other things to notice.
-----------------------

Smarty has control structures in it, so you can do things like loop over
an array of values (say, perhaps database records). It also provides
if-then-else constructs. There are a few other constructs that make it
possible to display just about anything with Smarty, yet Smarty isn't a
complicated syntax. Underneath, of course, is PHP, and you can expose
Smarty to raw PHP if you desire (but hold onto that thought because you
don't want to introduce code back into presentation).

<div class="vspace">

</div>

Not using a predefined package
------------------------------

In spite of all that said above about Smarty, PHP itself is actually a
templating language. You *can* accomplish pretty much the same thing in
straight PHP and HTML as you can in Smarty, without the overhead of a
package. You can keep regular PHP files in a templates or views
directory, and include subparts of the template as easily as you can in
Smarty. An advantage to rolling your own templates is that you keep
total control of the package and don't depend on anyone else's
development for your work. Keeping your business logic and data base
access separate is still important, and can be done quite handily
without resorting to a special template framework.

<div class="vspace">

</div>

</div>
