<div id="wikitext">

<div style="display: none;">

Summary:A lightweight Ruby web application framework
Parent:(Technology.)Ruby <span
class="wikiword">[IncludeMe](http://wiki.tamouse.org?n=Technology.IncludeMe?action=edit)[?](http://wiki.tamouse.org?n=Technology.IncludeMe?action=edit)</span>:[Ruby](http://wiki.tamouse.org?n=Technology.Ruby?action=print)
Categories:[Articles](http://wiki.tamouse.org?n=Category.Articles) Tags:
ruby, sinatra, gems, frameworks

</div>

<span id="excerpt"></span> [Sinatra](http://www.sinatrarb.com) is a
lightweight framework written in
[Ruby](http://wiki.tamouse.org?n=Technology.Ruby?action=print) for
creating simple web applications, or use as middleware in a
[Rack](http://wiki.tamouse.org?n=Technology.Rack?action=edit)[?](http://wiki.tamouse.org?n=Technology.Rack?action=edit)
environment to deliver a
[DSL](http://wiki.tamouse.org?n=Technology.DSL?action=edit)[?](http://wiki.tamouse.org?n=Technology.DSL?action=edit)
for easy routing. <span id="excerptend"></span>

<div class="vspace">

</div>

Example program
---------------

<div id="sourceblock1" class="sourceblock">

<div class="sourceblocktext">

<div class="ruby">

1.  <div class="de1">

    <span class="kw3">require</span> <span class="st0">'sinatra'</span>

    </div>

2.  <div class="de1">

    <span class="kw3">require</span> <span class="st0">'haml'</span>

    </div>

3.  <div class="de1">

     

    </div>

4.  <div class="de1">

    get <span class="st0">'/'</span> <span class="kw1">do</span>

    </div>

5.  <div class="de2">

      haml <span class="re3">:index</span>

    </div>

6.  <div class="de1">

    <span class="kw1">end</span>

    </div>

7.  <div class="de1">

     

    </div>

8.  <div class="de1">

     

    </div>

9.  <div class="de1">

    get <span class="sy0">%</span>r<span class="br0">{</span>\^<span
    class="sy0">/</span>hi<span class="sy0">/</span>?\$<span
    class="br0">}</span> <span class="kw1">do</span>

    </div>

10. <div class="de2">

      <span class="st0">"don't know who you're saying 'hi' to"</span>

    </div>

11. <div class="de1">

    <span class="kw1">end</span>

    </div>

12. <div class="de1">

     

    </div>

13. <div class="de1">

     

    </div>

14. <div class="de1">

    get <span class="st0">'/hi/:name'</span> <span class="kw1">do</span>
    <span class="sy0">|</span>name<span class="sy0">|</span>

    </div>

15. <div class="de2">

      haml <span class="re3">:hello</span>, <span
    class="re3">:locals</span> <span class="sy0">=\></span> <span
    class="br0">{</span>:message <span class="sy0">=\></span> <span
    class="st0">"Hello \#{name}!<span
    class="es0">\\n</span>"</span><span class="br0">}</span>

    </div>

16. <div class="de1">

    <span class="kw1">end</span>

    </div>

17. <div class="de1">

     

    </div>

18. <div class="de1">

    <span class="kw1">class</span> Stream

    </div>

19. <div class="de1">

      <span class="kw1">def</span> each

    </div>

20. <div class="de2">

        <span class="nu0">10</span>.<span class="me1">times</span> <span
    class="br0">{</span><span class="sy0">|</span>i<span
    class="sy0">|</span> <span class="kw1">yield</span> <span
    class="st0">"\#{i}<span class="es0">\\n</span>"</span><span
    class="br0">}</span>

    </div>

21. <div class="de1">

      <span class="kw1">end</span>

    </div>

22. <div class="de1">

    <span class="kw1">end</span>

    </div>

23. <div class="de1">

     

    </div>

24. <div class="de1">

    get <span class="st0">'/stream'</span> <span class="kw1">do</span>

    </div>

25. <div class="de2">

      <span class="br0">[</span><span class="nu0">200</span>, <span
    class="br0">{</span><span class="st0">'Content-type'</span> <span
    class="sy0">=\></span> <span class="st0">'text/plain'</span><span
    class="br0">}</span>, Stream.<span class="me1">new</span><span
    class="br0">]</span>

    </div>

26. <div class="de1">

    <span class="kw1">end</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.Sinatra?action=sourceblock&num=1)

</div>

</div>

The little program above, when run with ruby, will start up a server (on
default port 4567) that will respond to the following <span
class="wikiword">URLs</span>:

<div class="vspace">

</div>

<div id="sourceblock2" class="codeblock">

<div class="codeblocktext">

    http://example.com:4567/
    http://example.com:4567/hi
    http://example.com:4567/hi/
    http://example.com:4567/hi/yourname
    http://example.com:4567/stream

</div>

<div class="codeblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.Sinatra?action=sourceblock&num=2)

</div>

</div>

<div class="vspace">

</div>

</div>
