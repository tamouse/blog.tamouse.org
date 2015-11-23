<div id="wikitext">

<span id="excerpt"></span> If you're using LWP to make requests in Perl
you may already know that `$response->content()` does not handle UTF-8
properly. Using `$response->decoded_content()` will return proper UTF-8.
<span id="excerptend"></span>

This is especially important when you are going to pass the content on
to `HTML::Parser`{.escaped} as it will not work properly if the content
is not decoded according to what is in the response headers.

<div class="vspace">

</div>

<div id="sourceblock1" class="sourceblock">

<div class="sourceblocktext">

<div class="perl">

<div class="head">

Example using the decoded content

</div>

1.  <div class="de1">

    <span class="kw2">use</span> strict<span class="sy0">;</span>

    </div>

2.  <div class="de1">

    <span class="kw2">use</span> LWP<span class="sy0">::</span><span
    class="me2">UserAgent</span><span class="sy0">;</span>

    </div>

3.  <div class="de1">

    <span class="kw2">use</span> HTML<span class="sy0">::</span><span
    class="me2">Parser</span><span class="sy0">;</span>

    </div>

4.  <div class="de1">

     

    </div>

5.  <div class="de2">

    <span class="kw1">my</span> <span class="re0">\$ua</span> <span
    class="sy0">=</span> LWP<span class="sy0">::</span><span
    class="me2">UserAgent</span><span class="sy0">-\></span><span
    class="kw2">new</span><span class="br0">(</span>

    </div>

6.  <div class="de1">

       agent <span class="sy0">=\></span> <span
    class="st0">"Mozilla"</span><span class="sy0">,</span>

    </div>

7.  <div class="de1">

       timeout <span class="sy0">=\></span> <span
    class="nu0">30</span><span class="sy0">,</span>

    </div>

8.  <div class="de1">

    <span class="br0">)</span><span class="sy0">;</span>

    </div>

9.  <div class="de1">

     

    </div>

10. <div class="de2">

    <span class="kw1">my</span> <span class="re0">\$response</span>
    <span class="sy0">=</span> <span class="re0">\$ua</span><span
    class="sy0">-\></span><span class="me1">get</span><span
    class="br0">(</span><span class="re0">\$url</span><span
    class="br0">)</span><span class="sy0">;</span>

    </div>

11. <div class="de1">

    <span class="kw3">die</span> <span class="st0">"fetchUrl:
    \$url"</span> <span class="sy0">.</span> <span class="st_h">'
    returned '</span> <span class="sy0">.</span> <span
    class="re0">\$response</span><span class="sy0">-\></span><span
    class="me1">status\_line</span> <span class="kw1">unless</span>
    <span class="br0">(</span><span class="re0">\$response</span><span
    class="sy0">-\></span><span class="me1">is\_success</span><span
    class="br0">)</span> <span class="sy0">;</span>

    </div>

12. <div class="de1">

     

    </div>

13. <div class="de1">

    <span class="kw1">my</span> <span class="re0">\$content</span><span
    class="sy0">=</span><span class="re0">\$response</span><span
    class="sy0">-\></span><span class="me1">decoded\_content</span><span
    class="sy0">;</span>

    </div>

14. <div class="de1">

    <span class="kw1">my</span> <span class="re0">@images</span> <span
    class="sy0">=</span> <span class="br0">(</span><span
    class="br0">)</span><span class="sy0">;</span>

    </div>

15. <div class="de2">

    <span class="kw1">my</span> <span class="re0">\$p</span> <span
    class="sy0">=</span> HTML<span class="sy0">::</span><span
    class="me2">Parser</span><span class="sy0">-\></span><span
    class="kw2">new</span><span class="br0">(</span>

    </div>

16. <div class="de1">

            api\_version <span class="sy0">=\></span> <span
    class="nu0">3</span><span class="sy0">,</span>

    </div>

17. <div class="de1">

            start\_h <span class="sy0">=\></span> <span
    class="br0">[</span> <span class="kw2">sub</span> <span
    class="br0">{</span>

    </div>

18. <div class="de1">

                <span class="kw1">my</span><span
    class="br0">(</span><span class="re0">\$self</span><span
    class="sy0">,</span> <span class="re0">\$tag</span><span
    class="sy0">,</span> <span class="re0">\$attr</span><span
    class="br0">)</span> <span class="sy0">=</span> <span
    class="co5">@\_</span><span class="sy0">;</span>

    </div>

19. <div class="de1">

                <span class="kw3">return</span> <span
    class="kw3">undef</span> <span class="kw1">unless</span> <span
    class="re0">\$tag</span> <span class="kw1">eq</span> <span
    class="st0">"img"</span><span class="sy0">;</span>

    </div>

20. <div class="de2">

                <span class="kw3">return</span> <span
    class="kw3">undef</span> <span class="kw1">unless</span> <span
    class="kw3">exists</span> <span class="re0">\$attr</span><span
    class="sy0">-\></span><span class="br0">{</span>src<span
    class="br0">}</span><span class="sy0">;</span>

    </div>

21. <div class="de1">

                <span class="kw3">push</span> <span
    class="re0">@images</span><span class="sy0">,</span> <span
    class="re0">\$attr</span><span class="sy0">-\></span><span
    class="br0">{</span>src<span class="br0">}</span><span
    class="sy0">;</span>

    </div>

22. <div class="de1">

                         <span class="br0">}</span><span
    class="sy0">,</span>

    </div>

23. <div class="de1">

                         <span class="st_h">'self, tagname,
    attr'</span><span class="br0">]</span><span class="sy0">,</span>

    </div>

24. <div class="de1">

            <span class="br0">)</span><span class="sy0">;</span>

    </div>

25. <div class="de2">

    <span class="re0">\$p</span><span class="sy0">-\></span><span
    class="me1">parse</span><span class="br0">(</span><span
    class="re0">\$content</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.HTTPResponseAndUnicode?action=sourceblock&num=1)

</div>

</div>

<div class="vspace">

</div>

<div style="display: none;">

Keep metadata at end of page

Summary:A problem using the content in an HTTP::Response object obtained
via LWP::<span
class="wikiword">[UserAgent](http://wiki.tamouse.org?n=Technology.UserAgent?action=edit)[?](http://wiki.tamouse.org?n=Technology.UserAgent?action=edit)</span>
Parent:(Technology.)Perl <span
class="wikiword">[IncludeMe](http://wiki.tamouse.org?n=Technology.IncludeMe?action=edit)[?](http://wiki.tamouse.org?n=Technology.IncludeMe?action=edit)</span>:[Technology.Perl](http://wiki.tamouse.org?n=Technology.Perl?action=print)
Categories:[HowTos](http://wiki.tamouse.org?n=Category.HowTos) Tags:
perl, lwp, http-response, web development

</div>

<div class="vspace">

</div>

</div>
