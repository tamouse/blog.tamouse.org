<div id="wikitext">

<div style="display: none;">

Summary:a few ways to parse HTML in perl Parent:(Technology.)Perl <span
class="wikiword">[IncludeMe](http://wiki.tamouse.org?n=Technology.IncludeMe?action=edit)[?](http://wiki.tamouse.org?n=Technology.IncludeMe?action=edit)</span>:[Perl](http://wiki.tamouse.org?n=Technology.Perl?action=print)
Categories:[Articles](http://wiki.tamouse.org?n=Category.Articles) Tags:
perl, html, parsing

</div>

<span id="excerpt"></span> HTML has been claimed to be impossible to
parse using regular expressions. Thus, many different parsers and
modules have been created to do just that. Here are some of the ones
I've used to some success. <span id="excerptend"></span>

<div class="vspace">

</div>

HTML::Parser
------------

This is the basic one I started with, and it is fairly complicated to
understand how one does this. The documentation is not very good at
explaining what is possible, but the examples given in the source
distribution help a great deal.

<div class="vspace">

</div>

<div id="sourceblock1" class="sourceblock">

<div class="sourceblocktext">

<div class="perl">

<div class="head">

HTML::Parser basic usage

</div>

1.  <div class="de1">

    <span class="kw2">use</span> HTML<span class="sy0">::</span><span
    class="me2">Parser</span> <span class="br0">(</span><span
    class="br0">)</span><span class="sy0">;</span>

    </div>

2.  <div class="de1">

     

    </div>

3.  <div class="de1">

    <span class="co1">\# Create parser object</span>

    </div>

4.  <div class="de1">

    <span class="re0">\$p</span> <span class="sy0">=</span> HTML<span
    class="sy0">::</span><span class="me2">Parser</span><span
    class="sy0">-\></span><span class="kw2">new</span><span
    class="br0">(</span> api\_version <span class="sy0">=\></span> <span
    class="nu0">3</span><span class="sy0">,</span>

    </div>

5.  <div class="de2">

                            start\_h <span class="sy0">=\></span> <span
    class="br0">[</span><span class="re0">\\&start</span><span
    class="sy0">,</span> <span class="st0">"tagname, self"</span><span
    class="br0">]</span><span class="sy0">,</span>

    </div>

6.  <div class="de1">

                            end\_h   <span class="sy0">=\></span> <span
    class="br0">[</span><span class="re0">\\&end</span><span
    class="sy0">,</span>   <span class="st0">"tagname"</span><span
    class="br0">]</span><span class="sy0">,</span>

    </div>

7.  <div class="de1">

    <span class="br0">)</span><span class="sy0">;</span>

    </div>

8.  <div class="de1">

     

    </div>

9.  <div class="de1">

    <span class="co1">\# set up handlers for dealing with the parsed
    elements</span>

    </div>

10. <div class="de2">

    <span class="kw2">sub</span> start <span class="br0">{</span>

    </div>

11. <div class="de1">

       <span class="kw1">my</span> <span class="br0">(</span><span
    class="re0">\$tag</span><span class="sy0">,</span><span
    class="re0">\$self</span><span class="br0">)</span> <span
    class="sy0">=</span> <span class="co5">@\_</span><span
    class="sy0">;</span>

    </div>

12. <div class="de1">

       <span class="co1">\# \$tag = the name of that
    ('a','img','div','p', etc)</span>

    </div>

13. <div class="de1">

       <span class="co1">\# \$self = reference to the current tag</span>

    </div>

14. <div class="de1">

     

    </div>

15. <div class="de2">

       <span class="co1">\# do something at the beginning of the tag
    ...</span>

    </div>

16. <div class="de1">

     

    </div>

17. <div class="de1">

    <span class="br0">}</span>

    </div>

18. <div class="de1">

     

    </div>

19. <div class="de1">

    <span class="kw2">sub</span> end <span class="br0">{</span>

    </div>

20. <div class="de2">

       <span class="kw1">my</span> <span class="br0">(</span><span
    class="re0">\$tag</span><span class="br0">)</span> <span
    class="sy0">=</span> <span class="co5">@\_</span><span
    class="sy0">;</span>

    </div>

21. <div class="de1">

     

    </div>

22. <div class="de1">

       <span class="co1">\# do something at the end of the tag
    ...</span>

    </div>

23. <div class="de1">

     

    </div>

24. <div class="de1">

    <span class="br0">}</span>

    </div>

25. <div class="de2">

     

    </div>

26. <div class="de1">

    <span class="co1">\# Parse directly from file</span>

    </div>

27. <div class="de1">

    <span class="re0">\$p</span><span class="sy0">-\></span><span
    class="me1">parse\_file</span><span class="br0">(</span><span
    class="st0">"foo.html"</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

28. <div class="de1">

    <span class="co1">\# or</span>

    </div>

29. <div class="de1">

    <span class="kw3">open</span><span class="br0">(</span><span
    class="kw1">my</span> <span class="re0">\$fh</span><span
    class="sy0">,</span> <span class="st0">"\<:utf8"</span><span
    class="sy0">,</span> <span class="st0">"foo.html"</span><span
    class="br0">)</span> <span class="sy0">||</span> <span
    class="kw3">die</span><span class="sy0">;</span>

    </div>

30. <div class="de2">

    <span class="re0">\$p</span><span class="sy0">-\></span><span
    class="me1">parse\_file</span><span class="br0">(</span><span
    class="re0">\$fh</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

31. <div class="de1">

     

    </div>

32. <div class="de1">

    <span class="co1">\# OR.. parse html already in a variable</span>

    </div>

33. <div class="de1">

    <span class="re0">\$p</span><span class="sy0">-\></span><span
    class="me1">parse</span><span class="br0">(</span><span
    class="re0">\$html</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.ParsingHTMLinPerl?action=sourceblock&num=1)

</div>

</div>

<div class="vspace">

</div>

Getting the title of a document
-------------------------------

<div id="sourceblock2" class="sourceblock">

<div class="sourceblocktext">

<div class="perl">

<div class="head">

parsing the document to get just the title

</div>

1.  <div class="de1">

    <span class="co1">\#!/usr/bin/perl</span>

    </div>

2.  <div class="de1">

     

    </div>

3.  <div class="de1">

    <span class="co1">\# This program will print out the title of an
    HTML document.</span>

    </div>

4.  <div class="de1">

     

    </div>

5.  <div class="de2">

    <span class="kw2">use</span> strict<span class="sy0">;</span>

    </div>

6.  <div class="de1">

    <span class="kw2">use</span> HTML<span class="sy0">::</span><span
    class="me2">Parser</span> <span class="br0">(</span><span
    class="br0">)</span><span class="sy0">;</span>

    </div>

7.  <div class="de1">

     

    </div>

8.  <div class="de1">

    <span class="kw2">sub</span> title\_handler

    </div>

9.  <div class="de1">

    <span class="br0">{</span>

    </div>

10. <div class="de2">

        <span class="kw1">my</span> <span class="re0">\$self</span>
    <span class="sy0">=</span> <span class="kw3">shift</span><span
    class="sy0">;</span>

    </div>

11. <div class="de1">

        <span class="co1">\# Add a couple of handlers to this branch of
    the parse tree</span>

    </div>

12. <div class="de1">

        <span class="co1">\# print out just the inner text of the
    \<title\>...\</title\> node</span>

    </div>

13. <div class="de1">

        <span class="re0">\$self</span><span class="sy0">-\></span><span
    class="me1">handler</span><span class="br0">(</span>text <span
    class="sy0">=\></span> <span class="kw2">sub</span> <span
    class="br0">{</span> <span class="kw3">print</span> <span
    class="co5">@\_</span> <span class="br0">}</span><span
    class="sy0">,</span> <span class="st0">"dtext"</span><span
    class="br0">)</span><span class="sy0">;</span>

    </div>

14. <div class="de1">

        <span class="co1">\# don't bother processing any more after this
    point</span>

    </div>

15. <div class="de2">

        <span class="re0">\$self</span><span class="sy0">-\></span><span
    class="me1">handler</span><span class="br0">(</span>end  <span
    class="sy0">=\></span> <span class="st0">"eof"</span><span
    class="sy0">,</span> <span class="st0">"self"</span><span
    class="br0">)</span><span class="sy0">;</span>

    </div>

16. <div class="de1">

    <span class="br0">}</span>

    </div>

17. <div class="de1">

     

    </div>

18. <div class="de1">

    <span class="kw1">my</span> <span class="re0">\$p</span> <span
    class="sy0">=</span> HTML<span class="sy0">::</span><span
    class="me2">Parser</span><span class="sy0">-\></span><span
    class="kw2">new</span><span class="br0">(</span>

    </div>

19. <div class="de1">

              api\_version <span class="sy0">=\></span> <span
    class="nu0">3</span><span class="sy0">,</span>

    </div>

20. <div class="de2">

              <span class="co1">\# set the handler for the start of each
    tag</span>

    </div>

21. <div class="de1">

              start\_h <span class="sy0">=\></span> <span
    class="br0">[</span><span class="re0">\\&title\_handler</span><span
    class="sy0">,</span> <span class="st0">"self"</span><span
    class="br0">]</span><span class="sy0">,</span>

    </div>

22. <div class="de1">

              <span class="co1">\# only report the \<title\> tag</span>

    </div>

23. <div class="de1">

              report\_tags <span class="sy0">=\></span> <span
    class="br0">[</span><span class="st_h">'title'</span><span
    class="br0">]</span><span class="sy0">,</span>

    </div>

24. <div class="de1">

    <span class="br0">)</span><span class="sy0">;</span>

    </div>

25. <div class="de2">

     

    </div>

26. <div class="de1">

    <span class="co1">\# Parse the html file specified on the command
    line</span>

    </div>

27. <div class="de1">

    <span class="re0">\$p</span><span class="sy0">-\></span><span
    class="me1">parse\_file</span><span class="br0">(</span><span
    class="kw3">shift</span> <span class="sy0">||</span> <span
    class="kw3">die</span><span class="br0">)</span> <span
    class="sy0">||</span> <span class="kw3">die</span> <span
    class="co5">\$!</span><span class="sy0">;</span>

    </div>

28. <div class="de1">

    <span class="kw3">print</span> <span class="st0">"<span
    class="es0">\\n</span>"</span><span class="sy0">;</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

</div>

</div>

<div class="vspace">

</div>

Stripping html of comments
--------------------------

</div>
