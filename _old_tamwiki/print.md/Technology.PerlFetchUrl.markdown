<div id="wikitext">

<span id="excerpt"></span> Fetching a page from the web is something
which is done very often in my scripts. The following small function
makes use of LWP::UserAgent to retrieve and return the HTTP::Response
object from the call. <span id="excerptend"></span>

<div class="vspace">

</div>

<div id="sourceblock1" class="sourceblock">

<div class="sourceblocktext">

<div class="perl">

<div class="head">

fetchURL function

</div>

1.  <div class="de1">

    <span class="kw2">sub</span> fetchUrl <span class="br0">{</span>

    </div>

2.  <div class="de1">

        <span class="kw1">my</span> <span class="re0">\$url</span> <span
    class="sy0">=</span> <span class="kw3">shift</span><span
    class="sy0">;</span>

    </div>

3.  <div class="de1">

        <span class="kw1">my</span> <span class="re0">\$ua</span> <span
    class="sy0">=</span> LWP<span class="sy0">::</span><span
    class="me2">UserAgent</span><span class="sy0">-\></span><span
    class="kw2">new</span><span class="br0">(</span>

    </div>

4.  <div class="de1">

            agent <span class="sy0">=\></span> <span
    class="st0">"Mozilla/5.0"</span><span class="sy0">,</span>

    </div>

5.  <div class="de2">

            timeout <span class="sy0">=\></span> <span
    class="nu0">30</span><span class="sy0">,</span>

    </div>

6.  <div class="de1">

            <span class="br0">)</span><span class="sy0">;</span>

    </div>

7.  <div class="de1">

        <span class="kw1">my</span> <span class="re0">\$response</span>
    <span class="sy0">=</span> <span class="re0">\$ua</span><span
    class="sy0">-\></span><span class="me1">get</span><span
    class="br0">(</span><span class="re0">\$url</span><span
    class="br0">)</span><span class="sy0">;</span>

    </div>

8.  <div class="de1">

        <span class="kw1">unless</span> <span class="br0">(</span><span
    class="re0">\$response</span><span class="sy0">-\></span><span
    class="me1">is\_success</span><span class="br0">)</span> <span
    class="br0">{</span>

    </div>

9.  <div class="de1">

            <span class="kw3">warn</span> <span class="st0">"fetchUrl:
    \$url"</span> <span class="sy0">.</span> <span class="st_h">'
    returned '</span> <span class="sy0">.</span> <span
    class="re0">\$response</span><span class="sy0">-\></span><span
    class="me1">status\_line</span><span class="sy0">;</span>

    </div>

10. <div class="de2">

            <span class="kw3">return</span> <span
    class="kw3">undef</span><span class="sy0">;</span>

    </div>

11. <div class="de1">

        <span class="br0">}</span>

    </div>

12. <div class="de1">

        <span class="kw3">return</span> <span
    class="re0">\$response</span><span class="sy0">;</span>

    </div>

13. <div class="de1">

    <span class="br0">}</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.PerlFetchUrl?action=sourceblock&num=1)

</div>

</div>

Note at line 4, setting the value of the agent option. This is due to
the practice of many websites not processing an unrecognized user agent
string, or one which is quite obviously a script. This encapsulates the
functionality inherent in LWP::<span
class="wikiword">[UserAgent](http://wiki.tamouse.org?n=Technology.UserAgent?action=edit)[?](http://wiki.tamouse.org?n=Technology.UserAgent?action=edit)</span>.

This should properly be done as an extended class of LWP::<span
class="wikiword">[UserAgent](http://wiki.tamouse.org?n=Technology.UserAgent?action=edit)[?](http://wiki.tamouse.org?n=Technology.UserAgent?action=edit)</span>,
but it is so straight-forward as procedural code.

<div class="vspace">

</div>

<div style="display: none;">

Summary:A compact function to return an HTML page encapsulated in an
HTTP::Response object Parent:(Technology.)Perl <span
class="wikiword">[IncludeMe](http://wiki.tamouse.org?n=Technology.IncludeMe?action=edit)[?](http://wiki.tamouse.org?n=Technology.IncludeMe?action=edit)</span>:[Technology.Perl](http://wiki.tamouse.org?n=Technology.Perl?action=print)
Categories:[HowTos](http://wiki.tamouse.org?n=Category.HowTos) Tags:
perl, howtos, examples, web development

</div>

<div class="vspace">

</div>

</div>
