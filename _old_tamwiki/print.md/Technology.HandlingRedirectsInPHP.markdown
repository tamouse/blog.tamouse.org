<div id="wikitext">

<span id="excerpt"></span> Redirects are when one script finishes up
processing and then calls another. Typically this is handled via the
HTTP header `Location:`. In PHP, headers can be set via the `header()`
function:

<div class="vspace">

</div>

<div id="sourceblock1" class="sourceblock">

<div class="sourceblocktext">

<div class="php">

1.  <div class="de1">

    <span class="kw3">header</span><span class="br0">(</span><span
    class="st0">"Location: index.php"</span><span
    class="br0">)</span><span class="sy0">;</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.HandlingRedirectsInPHP?action=sourceblock&num=1)

</div>

</div>

<span id="excerptend"></span>

<div class="vspace">

</div>

<div class="round lrindent important2">

HTTP headers must be emitted before any other output. Thus, if you're
code sends error messages to the browser before it gets to the
`header("Location: ...");` call, that redirect will not work.

</div>

<div class="vspace">

</div>

Perpetuating certain states with query string additions
-------------------------------------------------------

Sometimes, it is preferrable to pass on query string options that the
script uses to the redirect target script/URL. Frequently, I use this
mechanism to turn on debugging (See <span
class="wikiword">[HowToSetUpForDebuggingInPHP](http://wiki.tamouse.org?n=Technology.HowToSetUpForDebuggingInPHP?action=print)</span>.)
To do this, I use an associative array containing the query string
parameters and values:

<div class="vspace">

</div>

<div id="sourceblock2" class="sourceblock">

<div class="sourceblocktext">

<div class="php">

1.  <div class="de1">

    <span class="re0">\$additional\_query\_parms</span><span
    class="br0">[</span><span class="st_h">'debug'</span><span
    class="br0">]</span> <span class="sy0">=</span> DEBUG<span
    class="sy0">;</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.HandlingRedirectsInPHP?action=sourceblock&num=2)

</div>

</div>

Then, before emitting output or calling a redirect, add in any acculated
error messages you man want to display to the user:

<div class="vspace">

</div>

<div id="sourceblock3" class="sourceblock">

<div class="sourceblocktext">

<div class="php">

1.  <div class="de1">

    <span class="re0">\$additional\_query\_parms</span><span
    class="br0">[</span><span class="st_h">'errors'</span><span
    class="br0">]</span> <span class="sy0">=</span> <span
    class="re0">\$errors</span><span class="sy0">;</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.HandlingRedirectsInPHP?action=sourceblock&num=3)

</div>

</div>

And build your redirect. I have the following function to do that:

<div class="vspace">

</div>

<div id="sourceblock4" class="sourceblock">

<div class="sourceblocktext">

<div class="php">

1.  <div class="de1">

    <span class="co4">/\*\*</span>

    </div>

2.  <div class="de1">

    <span class="co4"> \* Build a redirect path including messages,
    errors, and additional query data</span>

    </div>

3.  <div class="de1">

    <span class="co4"> \*</span>

    </div>

4.  <div class="de1">

    <span class="co4"> \* @return redirect url</span>

    </div>

5.  <div class="de2">

    <span class="co4"> \* @author Tamara Temple
    \<tamara@tamaratemple.com\></span>

    </div>

6.  <div class="de1">

    <span class="co4"> \*\*/</span>

    </div>

7.  <div class="de1">

    <span class="kw2">function</span> buildredirect<span
    class="br0">(</span><span class="re0">\$u</span><span
    class="sy0">=</span><span class="kw4">NULL</span><span
    class="br0">)</span>

    </div>

8.  <div class="de1">

    <span class="br0">{</span>

    </div>

9.  <div class="de1">

        <span class="kw2">global</span> <span
    class="re0">\$errors</span><span class="sy0">,</span> <span
    class="re0">\$messages</span><span class="sy0">,</span> <span
    class="re0">\$additional\_query\_parms</span><span
    class="sy0">;</span>

    </div>

10. <div class="de2">

     

    </div>

11. <div class="de1">

        <span class="re0">\$redirect</span> <span class="sy0">=</span>
    <span class="br0">(</span><span class="kw3">isset</span><span
    class="br0">(</span><span class="re0">\$u</span><span
    class="br0">)</span> ? <span class="re0">\$u</span> <span
    class="sy0">:</span> DEFAULT\_REDIRECT<span
    class="br0">)</span><span class="sy0">;</span>

    </div>

12. <div class="de1">

        <span class="re0">\$options</span> <span class="sy0">=</span>
    <span class="kw3">Array</span><span class="br0">(</span><span
    class="br0">)</span><span class="sy0">;</span>

    </div>

13. <div class="de1">

        <span class="kw1">if</span> <span class="br0">(</span><span
    class="kw3">isset</span><span class="br0">(</span><span
    class="re0">\$additional\_query\_parms</span><span
    class="br0">)</span> <span class="sy0">&&</span> <span
    class="sy0">!</span><span class="kw3">empty</span><span
    class="br0">(</span><span
    class="re0">\$additional\_query\_parms</span><span
    class="br0">)</span><span class="br0">)</span> <span
    class="br0">{</span>

    </div>

14. <div class="de1">

            <span class="re0">\$options</span> <span
    class="sy0">=</span> <span
    class="re0">\$additional\_query\_parms</span><span
    class="sy0">;</span>

    </div>

15. <div class="de2">

        <span class="br0">}</span>

    </div>

16. <div class="de1">

        <span class="kw1">if</span> <span class="br0">(</span><span
    class="kw3">isset</span><span class="br0">(</span><span
    class="re0">\$messages</span><span class="br0">)</span> <span
    class="sy0">&&</span> <span class="sy0">!</span><span
    class="kw3">empty</span><span class="br0">(</span><span
    class="re0">\$messages</span><span class="br0">)</span><span
    class="br0">)</span> <span class="br0">{</span>

    </div>

17. <div class="de1">

            <span class="re0">\$options</span><span
    class="br0">[</span><span class="st_h">'messages'</span><span
    class="br0">]</span> <span class="sy0">=</span> <span
    class="re0">\$messages</span><span class="sy0">;</span>

    </div>

18. <div class="de1">

        <span class="br0">}</span>

    </div>

19. <div class="de1">

        <span class="kw1">if</span> <span class="br0">(</span><span
    class="kw3">isset</span><span class="br0">(</span><span
    class="re0">\$errors</span><span class="br0">)</span> <span
    class="sy0">&&</span> <span class="sy0">!</span><span
    class="kw3">empty</span><span class="br0">(</span><span
    class="re0">\$errors</span><span class="br0">)</span><span
    class="br0">)</span> <span class="br0">{</span>

    </div>

20. <div class="de2">

            <span class="re0">\$options</span><span
    class="br0">[</span><span class="st_h">'errors'</span><span
    class="br0">]</span> <span class="sy0">=</span> <span
    class="re0">\$errors</span><span class="sy0">;</span>

    </div>

21. <div class="de1">

        <span class="br0">}</span>

    </div>

22. <div class="de1">

        debug\_var<span class="br0">(</span><span class="st0">"<span
    class="es1">\\\$</span>options:"</span><span
    class="sy0">,</span><span class="re0">\$options</span><span
    class="br0">)</span><span class="sy0">;</span>

    </div>

23. <div class="de1">

        <span class="kw1">if</span> <span class="br0">(</span><span
    class="sy0">!</span><span class="kw3">empty</span><span
    class="br0">(</span><span class="re0">\$options</span><span
    class="br0">)</span><span class="br0">)</span> <span
    class="br0">{</span>

    </div>

24. <div class="de1">

            <span class="re0">\$redirect</span> <span
    class="sy0">.=</span> <span class="st0">"?"</span> <span
    class="sy0">.</span> <span
    class="kw3">http\_build\_query</span><span class="br0">(</span><span
    class="re0">\$options</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

25. <div class="de2">

        <span class="br0">}</span>

    </div>

26. <div class="de1">

        <span class="kw1">return</span> <span
    class="re0">\$redirect</span><span class="sy0">;</span>

    </div>

27. <div class="de1">

     

    </div>

28. <div class="de1">

    <span class="br0">}</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.HandlingRedirectsInPHP?action=sourceblock&num=4)

</div>

</div>

It makes use of the `http_build_query()` function, which does a nice job
of handling necessary serializing and urlencoding.

The use of the array `$additional_query_parms` is nice because you can
accumulate the parameters throughout your script, and then in a single
call build the query string and redirect url.

<div class="vspace">

</div>

Debugging and Redirects
-----------------------

[Elsewhere](http://wiki.tamouse.org?n=Technology.HowToSetUpForDebuggingInPHP?action=print)
I've covered debugging in PHP. Just to reiterate a point made there,
often times you don't want your redirect to happen because you will lose
debugging information, or the redirect call won't go through because
you've already output information to the browser. I have a little
`do_redirect()` function that handles this case:

<div class="vspace">

</div>

<div id="sourceblock5" class="sourceblock">

<div class="sourceblocktext">

<div class="php">

1.  <div class="de1">

    <span class="co4">/\*\*</span>

    </div>

2.  <div class="de1">

    <span class="co4"> \* perform a redirect to the indicated url \$u,
    applying other paramters as needed.</span>

    </div>

3.  <div class="de1">

    <span class="co4"> \*</span>

    </div>

4.  <div class="de1">

    <span class="co4"> \* @return none - will either redirect or
    exit</span>

    </div>

5.  <div class="de2">

    <span class="co4"> \* @author Tamara Temple</span>

    </div>

6.  <div class="de1">

    <span class="co4"> \*\*/</span>

    </div>

7.  <div class="de1">

    <span class="kw2">function</span> do\_redirect<span
    class="br0">(</span><span class="re0">\$u</span><span
    class="sy0">=</span><span class="kw4">NULL</span><span
    class="br0">)</span>

    </div>

8.  <div class="de1">

    <span class="br0">{</span>

    </div>

9.  <div class="de1">

        <span class="kw1">if</span> <span class="br0">(</span><span
    class="sy0">!</span><span class="kw3">isset</span><span
    class="br0">(</span><span class="re0">\$u</span><span
    class="br0">)</span><span class="br0">)</span> <span
    class="re0">\$u</span> <span class="sy0">=</span>
    DEFAULT\_REDIRECT<span class="sy0">;</span>

    </div>

10. <div class="de2">

        <span class="re0">\$u</span> <span class="sy0">=</span>
    buildredirect<span class="br0">(</span><span
    class="re0">\$u</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

11. <div class="de1">

        debug<span class="br0">(</span><span class="st0">"Redirect:
    <span class="es1">\\\$</span>u=<span
    class="es4">\$u</span>"</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

12. <div class="de1">

        <span class="kw1">if</span> <span class="br0">(</span><span
    class="sy0">!</span>DEBUG<span class="br0">)</span> <span
    class="kw3">header</span><span class="br0">(</span><span
    class="st0">"Location: <span class="es4">\$u</span>"</span><span
    class="br0">)</span><span class="sy0">;</span> <span
    class="kw1">else</span> <span class="kw3">exit</span><span
    class="br0">(</span><span class="st0">"\<p\>\<a href='<span
    class="es4">\$u</span>'\>Redirect to <span
    class="es4">\$u</span>\</a\>\</p\>"</span><span
    class="br0">)</span><span class="sy0">;</span>

    </div>

13. <div class="de1">

    <span class="br0">}</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.HandlingRedirectsInPHP?action=sourceblock&num=5)

</div>

</div>

This nicely handles the case where you may have emitted debugging
information to the browser already (in which case, the
`header("Location:...")` function won't work) by offering up a link on
exit that will in effect do the same thing as the redirect would have.

<div class="vspace">

</div>

</div>
