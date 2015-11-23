<div id="wikitext">

<span id="excerpt"></span> Sometimes, all you want to retrieve is just
the headers from a web page. This can be done in a number of ways
depending on what language you are using. Here, I will show how one can
do it in PHP and Perl. <span id="excerptend"></span>

<span id="php"></span>

PHP methods
-----------

### HTTP.php

#### Installation

First, you need to install the `HTTP.php` module. This is done with the
[Pear](http://wiki.tamouse.org?n=Technology.Pear?action=edit)[?](http://wiki.tamouse.org?n=Technology.Pear?action=edit)
utility:

<div class="vspace">

</div>

<div id="sourceblock1" class="sourceblock">

<div class="sourceblocktext">

<div class="bash">

<span class="co4">\$ </span><span class="kw2">sudo</span> pear <span
class="kw2">install</span> HTTP.php

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.GettingTheHeadOfAWebPage?action=sourceblock&num=1)

</div>

</div>

<div class="vspace">

</div>

#### Using HTTP.php

Once that is installed, you need to include it in your script:

<div id="sourceblock2" class="sourceblock">

<div class="sourceblocktext">

<div class="php">

<span class="kw1">require\_once</span><span class="br0">(</span><span
class="st_h">'HTTP.php'</span><span class="br0">)</span><span
class="sy0">;</span>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.GettingTheHeadOfAWebPage?action=sourceblock&num=2)

</div>

</div>

Then, you can call the `head` method with the URL you are seeking
information from:

<div id="sourceblock3" class="sourceblock">

<div class="sourceblocktext">

<div class="php">

<span class="re0">\$headers</span> <span class="sy0">=</span> HTTP<span
class="sy0">::</span><span class="me2">head</span><span
class="br0">(</span><span class="re0">\$uri</span><span
class="br0">)</span><span class="sy0">;</span>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.GettingTheHeadOfAWebPage?action=sourceblock&num=3)

</div>

</div>

You can check if there are valid headers by checking to see what type of
object `$headers` is:

<div id="sourceblock4" class="sourceblock">

<div class="sourceblocktext">

<div class="php">

<span class="kw1">if</span> <span class="br0">(</span><span
class="kw3">get\_class</span><span class="br0">(</span><span
class="re0">\$headers</span><span class="br0">)</span> <span
class="sy0">==</span> <span class="st_h">'PEAR\_Error'</span><span
class="br0">)</span> <span class="br0">{</span>\
     <span class="re0">\$errors</span><span class="br0">[</span><span
class="br0">]</span> <span class="sy0">=</span> <span
class="st0">"Invalid URI."</span><span class="sy0">;</span>\
     <span class="kw1">return</span> <span class="kw4">NULL</span><span
class="sy0">;</span>\
   <span class="br0">}</span>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.GettingTheHeadOfAWebPage?action=sourceblock&num=4)

</div>

</div>

From then on, you can discover more about the headers that got returned
with the call.

<div id="sourceblock5" class="sourceblock">

<div class="sourceblocktext">

<div class="php">

<span class="kw1">if</span> <span class="br0">(</span><span
class="re0">\$headers</span><span class="br0">[</span><span
class="st_h">'response\_code'</span><span class="br0">]</span> <span
class="sy0">\>=</span> <span class="nu0">400</span><span
class="br0">)</span> <span class="br0">{</span>\
       <span class="co2">\# process error code\
 </span><span class="br0">}</span>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.GettingTheHeadOfAWebPage?action=sourceblock&num=5)

</div>

</div>

<div class="vspace">

</div>

### PHP cURL Library

[CURL](http://us2.php.net/manual/en/book.curl.php) is a library that
handles fetching of web items that is built in to PHP. It has many many
options and can also be used to fetch just the head of the page. It's
not quite as convenient as using the HTTP.php pear extension, but if you
can't use that, CURL is still available.

From the basic curl example page on php.net:

<div class="vspace">

</div>

<div class="indent">

The basic idea behind the cURL functions is that you initialize a cURL
session using the curl\_init(), then you can set all your options for
the transfer via the curl\_setopt(), then you can execute the session
with the curl\_exec() and then you finish off your session using the
curl\_close().

</div>

The option we're most interested in here is the `CURLOPT_HEADER` option,
which should be set to 1 to retrieve the header.

<div class="vspace">

</div>

<div id="sourceblock6" class="sourceblock">

<div class="sourceblocktext">

<div class="php">

1.  <div class="de1">

    <span class="re0">\$ch</span> <span class="sy0">=</span> <span
    class="kw3">curl\_init</span><span class="br0">(</span><span
    class="st0">"http://www.tamaratemple.com/"</span><span
    class="br0">)</span><span class="sy0">;</span> <span class="co1">//
    sets the URL to retrieve</span>

    </div>

2.  <div class="de1">

    <span class="re0">\$fp</span> <span class="sy0">=</span> <span
    class="kw3">fopen</span><span class="br0">(</span><span
    class="st0">"example\_homepage.txt"</span><span class="sy0">,</span>
    <span class="st0">"w"</span><span class="br0">)</span><span
    class="sy0">;</span> <span class="co1">// opens a file to receive
    the body of the page</span>

    </div>

3.  <div class="de1">

    <span class="re0">\$hp</span> <span class="sy0">=</span> <span
    class="kw3">fopen</span><span class="br0">(</span><span
    class="st0">"example\_homepage\_header.txt"</span><span
    class="sy0">,</span> <span class="st0">"w"</span><span
    class="br0">)</span><span class="sy0">;</span> <span class="co1">//
    opens of file to receive the header of the page</span>

    </div>

4.  <div class="de1">

     

    </div>

5.  <div class="de2">

    <span class="kw3">curl\_setopt</span><span class="br0">(</span><span
    class="re0">\$ch</span><span class="sy0">,</span> CURLOPT\_FILE<span
    class="sy0">,</span> <span class="re0">\$fp</span><span
    class="br0">)</span><span class="sy0">;</span> <span class="co1">//
    writes page contents to file</span>

    </div>

6.  <div class="de1">

    <span class="kw3">curl\_setopt</span><span class="br0">(</span><span
    class="re0">\$ch</span><span class="sy0">,</span>
    CURLOPT\_HEADER<span class="sy0">,</span> <span
    class="kw4">false</span><span class="br0">)</span><span
    class="sy0">;</span> <span class="co1">// do not include the header
    with the page contents</span>

    </div>

7.  <div class="de1">

    <span class="kw3">curl\_setopt</span><span class="br0">(</span><span
    class="re0">\$ch</span><span class="sy0">,</span>
    CURLOPT\_WRITEHEADER<span class="sy0">,</span> <span
    class="re0">\$hp</span><span class="br0">)</span><span
    class="sy0">;</span> <span class="co1">// file to hold the
    header</span>

    </div>

8.  <div class="de1">

     

    </div>

9.  <div class="de1">

    <span class="kw3">curl\_exec</span><span class="br0">(</span><span
    class="re0">\$ch</span><span class="br0">)</span><span
    class="sy0">;</span> <span class="co1">// execute the curl
    operation</span>

    </div>

10. <div class="de2">

     

    </div>

11. <div class="de1">

    <span class="co1">// close curl and file handles</span>

    </div>

12. <div class="de1">

    <span class="kw3">curl\_close</span><span class="br0">(</span><span
    class="re0">\$ch</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

13. <div class="de1">

    <span class="kw3">fclose</span><span class="br0">(</span><span
    class="re0">\$fp</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

14. <div class="de1">

    <span class="kw3">fclose</span><span class="br0">(</span><span
    class="re0">\$hp</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.GettingTheHeadOfAWebPage?action=sourceblock&num=6)

</div>

</div>

Then, you can read in the header and do something with it:

<div class="vspace">

</div>

<div id="sourceblock7" class="sourceblock">

<div class="sourceblocktext">

<div class="php">

1.  <div class="de1">

    <span class="re0">\$header</span> <span class="sy0">=</span> <span
    class="kw3">file\_get\_contents</span><span
    class="br0">(</span><span
    class="st0">"example\_homepage\_header.txt"</span><span
    class="br0">)</span><span class="sy0">;</span>

    </div>

2.  <div class="de1">

    <span class="kw1">echo</span> <span
    class="st0">"Header:"</span><span class="sy0">.</span>PHP\_EOL<span
    class="sy0">;</span>

    </div>

3.  <div class="de1">

    <span class="kw1">echo</span> <span class="st0">"----"</span><span
    class="sy0">.</span>PHP\_EOL<span class="sy0">.</span><span
    class="re0">\$header</span><span class="sy0">.</span><span
    class="st0">"----"</span><span class="sy0">.</span>PHP\_EOL<span
    class="sy0">;</span>

    </div>

4.  <div class="de1">

    <span class="kw1">echo</span> PHP\_EOL<span class="sy0">;</span>

    </div>

5.  <div class="de2">

     

    </div>

6.  <div class="de1">

    <span class="co1">// Processing the header</span>

    </div>

7.  <div class="de1">

    <span class="re0">\$header\_lines</span> <span class="sy0">=</span>
    <span class="kw3">explode</span><span class="br0">(</span><span
    class="st0">"<span class="es1">\\n</span>"</span><span
    class="sy0">,</span><span class="re0">\$header</span><span
    class="br0">)</span><span class="sy0">;</span> <span class="co1">//
    turn the text into lines in an array</span>

    </div>

8.  <div class="de1">

    <span class="re0">\$header\_lines</span> <span class="sy0">=</span>
    <span class="kw3">array\_map</span><span class="br0">(</span><span
    class="st0">"rtrim"</span><span class="sy0">,</span><span
    class="re0">\$header\_lines</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

9.  <div class="de1">

    <span class="kw3">print\_r</span><span class="br0">(</span><span
    class="re0">\$header\_lines</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

10. <div class="de2">

     

    </div>

11. <div class="de1">

    <span class="co1">// First line of header is the response text and
    code</span>

    </div>

12. <div class="de1">

    <span class="re0">\$response</span> <span class="sy0">=</span> <span
    class="kw3">explode</span><span class="br0">(</span><span
    class="st0">" "</span><span class="sy0">,</span><span
    class="re0">\$header\_lines</span><span class="br0">[</span><span
    class="nu0">0</span><span class="br0">]</span><span
    class="sy0">,</span> <span class="nu0">3</span><span
    class="br0">)</span><span class="sy0">;</span>

    </div>

13. <div class="de1">

    <span class="re0">\$protocol</span> <span class="sy0">=</span> <span
    class="kw3">explode</span><span class="br0">(</span><span
    class="st0">"/"</span><span class="sy0">,</span><span
    class="re0">\$response</span><span class="br0">[</span><span
    class="nu0">0</span><span class="br0">]</span><span
    class="br0">)</span><span class="sy0">;</span>

    </div>

14. <div class="de1">

    <span class="re0">\$header\_hash</span><span
    class="br0">[</span><span class="st_h">'Protocol'</span><span
    class="br0">]</span> <span class="sy0">=</span> <span
    class="re0">\$protocol</span><span class="br0">[</span><span
    class="nu0">0</span><span class="br0">]</span><span
    class="sy0">;</span>

    </div>

15. <div class="de2">

    <span class="re0">\$header\_hash</span><span
    class="br0">[</span><span class="st_h">'ProtocolVersion'</span><span
    class="br0">]</span> <span class="sy0">=</span> <span
    class="re0">\$protocol</span><span class="br0">[</span><span
    class="nu0">1</span><span class="br0">]</span><span
    class="sy0">;</span>

    </div>

16. <div class="de1">

    <span class="re0">\$header\_hash</span><span
    class="br0">[</span><span class="st_h">'ResponseCode'</span><span
    class="br0">]</span> <span class="sy0">=</span> <span
    class="re0">\$response</span><span class="br0">[</span><span
    class="nu0">1</span><span class="br0">]</span><span
    class="sy0">;</span>

    </div>

17. <div class="de1">

    <span class="re0">\$header\_hash</span><span
    class="br0">[</span><span class="st_h">'ResponseText'</span><span
    class="br0">]</span> <span class="sy0">=</span> <span
    class="re0">\$response</span><span class="br0">[</span><span
    class="nu0">2</span><span class="br0">]</span><span
    class="sy0">;</span>

    </div>

18. <div class="de1">

     

    </div>

19. <div class="de1">

    <span class="co1">// Remainder of header is field: value
    lines</span>

    </div>

20. <div class="de2">

    <span class="kw1">for</span> <span class="br0">(</span><span
    class="re0">\$i</span><span class="sy0">=</span><span
    class="nu0">1</span><span class="sy0">;</span> <span
    class="re0">\$i</span><span class="sy0">\<</span><span
    class="kw3">count</span><span class="br0">(</span><span
    class="re0">\$header\_lines</span><span class="br0">)</span><span
    class="sy0">;</span> <span class="re0">\$i</span><span
    class="sy0">++</span><span class="br0">)</span> <span
    class="br0">{</span>

    </div>

21. <div class="de1">

      <span class="kw1">if</span> <span class="br0">(</span><span
    class="kw3">empty</span><span class="br0">(</span><span
    class="re0">\$header\_lines</span><span class="br0">[</span><span
    class="re0">\$i</span><span class="br0">]</span><span
    class="br0">)</span><span class="br0">)</span> <span
    class="kw1">continue</span><span class="sy0">;</span>

    </div>

22. <div class="de1">

      <span class="re0">\$line</span> <span class="sy0">=</span> <span
    class="kw3">explode</span><span class="br0">(</span><span
    class="st0">": "</span><span class="sy0">,</span><span
    class="re0">\$header\_lines</span><span class="br0">[</span><span
    class="re0">\$i</span><span class="br0">]</span><span
    class="sy0">,</span><span class="nu0">2</span><span
    class="br0">)</span><span class="sy0">;</span>

    </div>

23. <div class="de1">

      <span class="re0">\$header\_hash</span><span
    class="br0">[</span><span class="re0">\$line</span><span
    class="br0">[</span><span class="nu0">0</span><span
    class="br0">]</span><span class="br0">]</span> <span
    class="sy0">=</span> <span class="re0">\$line</span><span
    class="br0">[</span><span class="nu0">1</span><span
    class="br0">]</span><span class="sy0">;</span>

    </div>

24. <div class="de1">

    <span class="br0">}</span>

    </div>

25. <div class="de2">

     

    </div>

26. <div class="de1">

    <span class="kw3">print\_r</span><span class="br0">(</span><span
    class="re0">\$header\_hash</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.GettingTheHeadOfAWebPage?action=sourceblock&num=7)

</div>

</div>

The output from the combined example would be:

<div id="sourceblock9" class="codeblock">

<div class="codeblocktext">

    $ php curlexample.php 
    Header:
    ----
    HTTP/1.1 200 OK
    Date: Mon, 09 Apr 2012 22:00:17 GMT
    Server: Apache/2.2.3 (CentOS)
    X-Powered-By: PHP/5.2.13
    X-Pingback: http://www.tamaratemple.com/xmlrpc.php
    Set-Cookie: PHPSESSID=h3h24ha5po4o1c2tjb76d4obk1; path=/
    Transfer-Encoding: chunked
    Content-Type: text/html; charset=UTF-8

    ----

    Array
    (
        [0] => HTTP/1.1 200 OK
        [1] => Date: Mon, 09 Apr 2012 22:00:17 GMT
        [2] => Server: Apache/2.2.3 (CentOS)
        [3] => X-Powered-By: PHP/5.2.13
        [4] => X-Pingback: http://www.tamaratemple.com/xmlrpc.php
        [5] => Set-Cookie: PHPSESSID=h3h24ha5po4o1c2tjb76d4obk1; path=/
        [6] => Transfer-Encoding: chunked
        [7] => Content-Type: text/html; charset=UTF-8
        [8] => 
        [9] => 
    )
    Array
    (
        [Protocol] => HTTP
        [ProtocolVersion] => 1.1
        [ResponseCode] => 200
        [ResponseText] => OK
        [Date] => Mon, 09 Apr 2012 22:00:17 GMT
        [Server] => Apache/2.2.3 (CentOS)
        [X-Powered-By] => PHP/5.2.13
        [X-Pingback] => http://www.tamaratemple.com/xmlrpc.php
        [Set-Cookie] => PHPSESSID=h3h24ha5po4o1c2tjb76d4obk1; path=/
        [Transfer-Encoding] => chunked
        [Content-Type] => text/html; charset=UTF-8
    )

</div>

<div class="codeblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.GettingTheHeadOfAWebPage?action=sourceblock&num=9)

</div>

</div>

<span id="phpend"></span>

<span id="perl"></span>

Perl
----

The standard way of getting urls in perl is via the estimable
[LWP::UserAgent](http://wiki.tamouse.org?n=Technology.LWPUserAgent?action=edit)[?](http://wiki.tamouse.org?n=Technology.LWPUserAgent?action=edit)
module. A simple example:

<div class="vspace">

</div>

<div id="sourceblock8" class="sourceblock">

<div class="sourceblocktext">

<div class="perl">

1.  <div class="de1">

    <span class="co1">\#!/opt/local/bin/perl -w</span>

    </div>

2.  <div class="de1">

    <span class="kw2">use</span> strict<span class="sy0">;</span>

    </div>

3.  <div class="de1">

    <span class="kw2">use</span> LWP<span class="sy0">::</span><span
    class="me2">UserAgent</span><span class="sy0">;</span>

    </div>

4.  <div class="de1">

    <span class="kw2">use</span> Data<span class="sy0">::</span><span
    class="me2">Dumper</span><span class="sy0">::</span><span
    class="me2">Names</span><span class="sy0">;</span>

    </div>

5.  <div class="de2">

     

    </div>

6.  <div class="de1">

    <span class="kw1">my</span> <span class="re0">\$ua</span> <span
    class="sy0">=</span> LWP<span class="sy0">::</span><span
    class="me2">UserAgent</span><span class="sy0">-\></span><span
    class="kw2">new</span><span class="sy0">;</span>

    </div>

7.  <div class="de1">

    <span class="kw1">my</span> <span class="re0">\$response</span>
    <span class="sy0">=</span> <span class="re0">\$ua</span><span
    class="sy0">-\></span><span class="me1">get</span><span
    class="br0">(</span><span
    class="st0">"http://www.tamaratemple.com"</span><span
    class="br0">)</span><span class="sy0">;</span>

    </div>

8.  <div class="de1">

    <span class="kw3">die</span> <span
    class="st0">"\$response-\>status\_line"</span> <span
    class="kw1">if</span> <span class="sy0">!</span> <span
    class="re0">\$response</span><span class="sy0">-\></span><span
    class="me1">is\_success</span><span class="sy0">;</span>

    </div>

9.  <div class="de1">

    <span class="co1">\# The header is in
    \$response-\>{\_headers}</span>

    </div>

10. <div class="de2">

    <span class="co1">\# Access fields in header with
    \$response-\>header(\$field)</span>

    </div>

11. <div class="de1">

    <span class="kw3">print</span> Dumper<span class="br0">(</span><span
    class="re0">\$response</span><span class="sy0">-\></span><span
    class="br0">{</span>\_headers<span class="br0">}</span><span
    class="br0">)</span> <span class="sy0">.</span> <span
    class="st0">"<span class="es0">\\n</span><span
    class="es0">\\n</span>"</span><span class="sy0">;</span>

    </div>

12. <div class="de1">

    <span class="kw3">print</span> <span class="st0">"Content-type is:
    "</span> <span class="sy0">.</span> <span
    class="re0">\$response</span><span class="sy0">-\></span><span
    class="me1">header</span><span class="br0">(</span><span
    class="st0">"Content-type"</span><span class="br0">)</span> <span
    class="sy0">.</span> <span class="st0">"<span
    class="es0">\\n</span>"</span><span class="sy0">;</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.GettingTheHeadOfAWebPage?action=sourceblock&num=8)

</div>

</div>

Produces:

<div class="vspace">

</div>

<div id="sourceblock10" class="codeblock">

<div class="codeblocktext">

</div>

<div class="codeblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.GettingTheHeadOfAWebPage?action=sourceblock&num=10)

</div>

</div>

<span id="perlend"></span>

<div class="vspace">

</div>

</div>
