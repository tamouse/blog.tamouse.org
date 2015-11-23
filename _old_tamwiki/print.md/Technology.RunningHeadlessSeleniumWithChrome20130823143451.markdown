<div id="wikitext">

-   from: [Chris Le](http://www.chrisle.me/)

<div class="vspace">

</div>

<div class="round lrindent quote">

Running Headless Selenium with Chrome
=====================================

Scaling website automation for either testing or scraping can be a
challenge when the site is enitrely driven by <span
class="wikiword">JavaScript</span> or behaves differently when using
specific browsers.

Running a headless Selenium machine with Google’s Chrome installed
provides a scalable way to automate your tests on one of the most
popular browsers in use.

Here are step by step instructions for installing a headless Selenium
server with Chrome and Vagrant.

<div class="vspace">

</div>

<div>

![](http://www.chrisle.me/wp-content/uploads/2013/08/Screen-Shot-2013-08-18-at-1.02.09-PM.png)

</div>

Side note: [Why use Selenium instead of
PhantomJS](http://www.chrisle.me/2013/08/5-reasons-i-chose-selenium-over-phantomjs/)?

<div class="vspace">

</div>

------------------------------------------------------------------------

<div class="vspace">

</div>

Spike Goals
-----------

-   Get up and running quickly
-   Run a sample script that demos it works
-   Use <span class="wikiword">JavaScript</span> only (via <span
    class="wikiword">NodeJS</span>)

<div class="vspace">

</div>

Prerequisites
-------------

The code you write locally should work when deployed at scale in
production. These tools help us do that by creating identical
environments for development and production.

*Both are free downloads. Install with the default settings*

<div class="vspace">

</div>

-   Download and install
    [VirtualBox](https://www.virtualbox.org/wiki/Downloads)
-   Download and install [Vagrant](http://www.vagrantup.com/)
-   Download and install [NodeJS](http://nodejs.org/download/)

*I also assume you can use a command line and have some vague idea of
what a virtual machine and Vagrant is.*

<div class="vspace">

</div>

------------------------------------------------------------------------

<div class="vspace">

</div>

\#1. Create a “Vagrantfile”
---------------------------

This file tells Vagrant how configure the testing environment. It
applies universally to both development and production.

Create a project directory and create a file named `Vagrantfile`:

<div class="vspace">

</div>

<div id="sourceblock1" class="sourceblock">

<div class="sourceblocktext">

<div class="ruby">

<div class="head">

Vagrantfile

</div>

1.  <div class="de1">

    <span class="co1">\# encoding: utf-8</span>

    </div>

2.  <div class="de1">

     <span class="co1">\# -\*- mode: ruby -\*-</span>

    </div>

3.  <div class="de1">

     <span class="co1">\# vi: set ft=ruby :</span>

    </div>

4.  <div class="de1">

     

    </div>

5.  <div class="de2">

     Vagrant.<span class="me1">configure</span><span
    class="br0">(</span><span class="st0">"2"</span><span
    class="br0">)</span> <span class="kw1">do</span> <span
    class="sy0">|</span>config<span class="sy0">|</span>

    </div>

6.  <div class="de1">

       config.<span class="me1">vm</span>.<span class="me1">box</span> =
    <span class="st0">"precise64"</span>

    </div>

7.  <div class="de1">

       config.<span class="me1">vm</span>.<span
    class="me1">box\_url</span> = <span
    class="st0">"http://files.vagrantup.com/precise64.box"</span>

    </div>

8.  <div class="de1">

       config.<span class="me1">ssh</span>.<span
    class="me1">forward\_agent</span> = <span class="kw2">true</span>

    </div>

9.  <div class="de1">

     

    </div>

10. <div class="de2">

       config.<span class="me1">vm</span>.<span
    class="me1">provider</span> <span class="re3">:aws</span> <span
    class="kw1">do</span> <span class="sy0">|</span>aws, override<span
    class="sy0">|</span>

    </div>

11. <div class="de1">

         aws.<span class="me1">access\_key\_id</span> = <span
    class="st0">'XXXX'</span>      <span class="co1">\# Replace
    this</span>

    </div>

12. <div class="de1">

         aws.<span class="me1">secret\_access\_key</span> = <span
    class="st0">'XXXX'</span>  <span class="co1">\# Replace this</span>

    </div>

13. <div class="de1">

         aws.<span class="me1">keypair\_name</span> = <span
    class="st0">'XXXX'</span>       <span class="co1">\# Replace
    this</span>

    </div>

14. <div class="de1">

         aws.<span class="me1">ami</span> = <span
    class="st0">'ami-7747d01e'</span>        <span class="co1">\# ubuntu
    12.04</span>

    </div>

15. <div class="de2">

         override.<span class="me1">ssh</span>.<span
    class="me1">username</span> = <span class="st0">'ubuntu'</span>

    </div>

16. <div class="de1">

         override.<span class="me1">ssh</span>.<span
    class="me1">private\_key\_path</span> = <span
    class="st0">'\~/.ssh/amazon-ubuntu.pem'</span>

    </div>

17. <div class="de1">

       <span class="kw1">end</span>

    </div>

18. <div class="de1">

     

    </div>

19. <div class="de1">

       config.<span class="me1">vm</span>.<span
    class="me1">provision</span> <span class="re3">:shell</span>, <span
    class="re3">:path</span> =<span class="sy0">&</span>gt; <span
    class="st0">"setup.sh"</span>

    </div>

20. <div class="de2">

       config.<span class="me1">vm</span>.<span
    class="me1">network</span> <span
    class="re3">:forwarded\_port</span>, guest:<span
    class="nu0">4444</span>, host:<span class="nu0">4444</span>

    </div>

21. <div class="de1">

     

    </div>

22. <div class="de1">

     <span class="kw1">end</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.RunningHeadlessSeleniumWithChrome20130823143451?action=sourceblock&num=1)

</div>

</div>

<div class="vspace">

</div>

------------------------------------------------------------------------

<div class="vspace">

</div>

\#2. Create “setup.sh”
----------------------

The setup.sh file executes when Vagrant creates a virtual machine for
you. In the same folder as you created your `VagrantFile` create a
`setup.sh` file:

<div class="vspace">

</div>

<div id="sourceblock2" class="sourceblock">

<div class="sourceblocktext">

<div class="bash">

<div class="head">

setup.sh

</div>

1.  <div class="de1">

    <span class="co0">\#!/bin/sh</span>

    </div>

2.  <div class="de1">

     <span class="kw1">set</span> <span class="re5">-e</span>

    </div>

3.  <div class="de1">

     

    </div>

4.  <div class="de1">

     <span class="kw1">if</span> <span class="br0">[</span> <span
    class="re5">-e</span> <span class="sy0">/</span>.installed <span
    class="br0">]</span>; <span class="kw1">then</span>

    </div>

5.  <div class="de2">

       <span class="kw3">echo</span> <span class="st_h">'Already
    installed.'</span>

    </div>

6.  <div class="de1">

     

    </div>

7.  <div class="de1">

     <span class="kw1">else</span>

    </div>

8.  <div class="de1">

       <span class="kw3">echo</span> <span class="st_h">''</span>

    </div>

9.  <div class="de1">

       <span class="kw3">echo</span> <span
    class="st_h">'INSTALLING'</span>

    </div>

10. <div class="de2">

       <span class="kw3">echo</span> <span
    class="st_h">'----------'</span>

    </div>

11. <div class="de1">

     

    </div>

12. <div class="de1">

       <span class="co0">\# Add Google public key to apt</span>

    </div>

13. <div class="de1">

       <span class="kw2">wget</span> <span class="re5">-q</span> <span
    class="re5">-O</span> - <span
    class="st0">"https://dl-ssl.google.com/linux/linux\_signing\_key.pub"</span>
    <span class="sy0">|</span> <span class="kw2">sudo</span> <span
    class="kw2">apt-key add</span> -

    </div>

14. <div class="de1">

     

    </div>

15. <div class="de2">

       <span class="co0">\# Add Google to the apt-get source list</span>

    </div>

16. <div class="de1">

       <span class="kw3">echo</span> <span class="st_h">'deb
    http://dl.google.com/linux/chrome/deb/ stable main'</span> <span
    class="sy0">&</span>gt;<span class="sy0">&</span>gt; <span
    class="sy0">/</span>etc<span class="sy0">/</span>apt<span
    class="sy0">/</span>sources.list

    </div>

17. <div class="de1">

     

    </div>

18. <div class="de1">

       <span class="co0">\# Update app-get</span>

    </div>

19. <div class="de1">

       <span class="kw2">apt-get update</span>

    </div>

20. <div class="de2">

     

    </div>

21. <div class="de1">

       <span class="co0">\# Install Java, Chrome, Xvfb, and unzip</span>

    </div>

22. <div class="de1">

       <span class="kw2">apt-get</span> <span class="re5">-y</span>
    <span class="kw2">install</span> openjdk-<span
    class="nu0">7</span>-jre google-chrome-stable xvfb <span
    class="kw2">unzip</span>

    </div>

23. <div class="de1">

     

    </div>

24. <div class="de1">

       <span class="co0">\# Download and copy the ChromeDriver to
    /usr/local/bin</span>

    </div>

25. <div class="de2">

       <span class="kw3">cd</span> <span class="sy0">/</span>tmp

    </div>

26. <div class="de1">

       <span class="kw2">wget</span> <span
    class="st0">"https://chromedriver.googlecode.com/files/chromedriver\_linux64\_2.2.zip"</span>

    </div>

27. <div class="de1">

       <span class="kw2">wget</span> <span
    class="st0">"https://selenium.googlecode.com/files/selenium-server-standalone-2.35.0.jar"</span>

    </div>

28. <div class="de1">

       <span class="kw2">unzip</span> chromedriver\_linux64\_2.2.zip

    </div>

29. <div class="de1">

       <span class="kw2">mv</span> chromedriver <span
    class="sy0">/</span>usr<span class="sy0">/</span>local<span
    class="sy0">/</span>bin

    </div>

30. <div class="de2">

       <span class="kw2">mv</span> selenium-server-standalone-2.35.0.jar
    <span class="sy0">/</span>usr<span class="sy0">/</span>local<span
    class="sy0">/</span>bin

    </div>

31. <div class="de1">

     

    </div>

32. <div class="de1">

       <span class="co0">\# So that running \`vagrant provision\`
    doesn't redownload everything</span>

    </div>

33. <div class="de1">

       <span class="kw2">touch</span> <span
    class="sy0">/</span>.installed

    </div>

34. <div class="de1">

     <span class="kw1">fi</span>

    </div>

35. <div class="de2">

     

    </div>

36. <div class="de1">

     <span class="co0">\# Start Xvfb, Chrome, and Selenium in the
    background</span>

    </div>

37. <div class="de1">

     <span class="kw3">export</span> <span
    class="re2">DISPLAY</span>=:<span class="nu0">10</span>

    </div>

38. <div class="de1">

     <span class="kw3">cd</span> <span class="sy0">/</span>vagrant

    </div>

39. <div class="de1">

     

    </div>

40. <div class="de2">

     <span class="kw3">echo</span> <span class="st0">"Starting Xvfb
    ..."</span>

    </div>

41. <div class="de1">

     Xvfb :<span class="nu0">10</span> <span class="re5">-screen</span>
    <span class="nu0">0</span> 1366x768x24 <span class="re5">-ac</span>
    <span class="sy0">&</span>amp;

    </div>

42. <div class="de1">

     

    </div>

43. <div class="de1">

     <span class="kw3">echo</span> <span class="st0">"Starting Google
    Chrome ..."</span>

    </div>

44. <div class="de1">

     google-chrome <span
    class="re5">--remote-debugging-port</span>=<span
    class="nu0">9222</span> <span class="sy0">&</span>amp;

    </div>

45. <div class="de2">

     

    </div>

46. <div class="de1">

     <span class="kw3">echo</span> <span class="st0">"Starting Selenium
    ..."</span>

    </div>

47. <div class="de1">

     <span class="kw3">cd</span> <span class="sy0">/</span>usr<span
    class="sy0">/</span>local<span class="sy0">/</span>bin

    </div>

48. <div class="de1">

     <span class="kw2">nohup</span> java <span class="re5">-jar</span>
    .<span class="sy0">/</span>selenium-server-standalone-2.35.0.jar
    <span class="sy0">&</span>amp;

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.RunningHeadlessSeleniumWithChrome20130823143451?action=sourceblock&num=2)

</div>

</div>

<div class="vspace">

</div>

------------------------------------------------------------------------

<div class="vspace">

</div>

\#3. Run “vagrant up”
---------------------

On your command line and in the directory where you created the
`VagrantFile`, run the following command:

<div class="vspace">

</div>

<div id="sourceblock3" class="sourceblock">

<div class="sourceblocktext">

<div class="bash">

<div class="head">

startup up the vagrant box

</div>

1.  <div class="de1">

    vagrant up

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.RunningHeadlessSeleniumWithChrome20130823143451?action=sourceblock&num=3)

</div>

</div>

This will kick off downloading and installing all the pieces neccessary.
It should look like this:

<div class="vspace">

</div>

<div>

![](http://www.chrisle.me/wp-content/uploads/2013/08/Screen-Shot-2013-08-18-at-12.35.54-PM.png)

</div>

<div class="vspace">

</div>

------------------------------------------------------------------------

<div class="vspace">

</div>

\#4. Make sure it’s running
---------------------------

You can check to see if everything is working by going to
`http://localhost:4444/wd/hub`.

The `VagrantFile` has been configured to forward port 4444 on your
localhost. This allows you UI control of the Selenium browser. This page
shows you all the sessions that you’re running in your virtual machine.
If you see this page, everything is OK.

<div class="vspace">

</div>

<div>

![](http://www.chrisle.me/wp-content/uploads/2013/08/Screen-Shot-2013-08-18-at-12.32.08-PM.png)

</div>

<div class="vspace">

</div>

------------------------------------------------------------------------

<div class="vspace">

</div>

\#5. Install the selenium-webdriver
-----------------------------------

In order to write <span class="wikiword">NodeJS</span> scripts that talk
to Chrome you will need the Selenium-Webdriver for <span
class="wikiword">NodeJS</span>.

On your command line, install `selenium-webdriver` with the following
command. This will install the modules needed for interacting with
Selenium.

<div class="vspace">

</div>

<div id="sourceblock4" class="sourceblock">

<div class="sourceblocktext">

<div class="bash">

<div class="head">

install selenium driver

</div>

1.  <div class="de1">

    npm <span class="kw2">install</span> selenium-webdriver

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.RunningHeadlessSeleniumWithChrome20130823143451?action=sourceblock&num=4)

</div>

</div>

<div class="vspace">

</div>

------------------------------------------------------------------------

<div class="vspace">

</div>

\#6. Write your first Selenium script
-------------------------------------

This first script will go to Google’s homepage, type in a query, then
print out the HTML.

<div class="vspace">

</div>

<div id="sourceblock5" class="sourceblock">

<div class="sourceblocktext">

<div class="javascript">

<div class="head">

script.js

</div>

1.  <div class="de1">

    <span class="kw1">var</span> webdriver <span class="sy0">=</span>
    require<span class="br0">(</span><span
    class="st0">'selenium-webdriver'</span><span
    class="br0">)</span><span class="sy0">;</span>

    </div>

2.  <div class="de1">

     

    </div>

3.  <div class="de1">

     <span class="kw1">var</span> keyword <span class="sy0">=</span>
    <span class="st0">"chris le twitter"</span><span
    class="sy0">;</span>

    </div>

4.  <div class="de1">

     

    </div>

5.  <div class="de2">

     <span class="kw1">var</span> driver <span class="sy0">=</span>
    <span class="kw1">new</span> webdriver.<span
    class="me1">Builder</span><span class="br0">(</span><span
    class="br0">)</span>.

    </div>

6.  <div class="de1">

        <span class="me1">usingServer</span><span
    class="br0">(</span><span
    class="st0">'http://localhost:4444/wd/hub'</span><span
    class="br0">)</span>.

    </div>

7.  <div class="de1">

        <span class="me1">withCapabilities</span><span
    class="br0">(</span>webdriver.<span
    class="me1">Capabilities</span>.<span class="me1">chrome</span><span
    class="br0">(</span><span class="br0">)</span><span
    class="br0">)</span>.

    </div>

8.  <div class="de1">

        <span class="me1">build</span><span class="br0">(</span><span
    class="br0">)</span><span class="sy0">;</span>

    </div>

9.  <div class="de1">

     

    </div>

10. <div class="de2">

     driver.<span class="kw1">get</span><span class="br0">(</span><span
    class="st0">'http://www.google.com'</span><span
    class="br0">)</span><span class="sy0">;</span>

    </div>

11. <div class="de1">

     driver.<span class="me1">findElement</span><span
    class="br0">(</span>webdriver.<span class="me1">By</span>.<span
    class="me1">name</span><span class="br0">(</span><span
    class="st0">'q'</span><span class="br0">)</span><span
    class="br0">)</span>.<span class="me1">sendKeys</span><span
    class="br0">(</span>keyword<span class="br0">)</span><span
    class="sy0">;</span>

    </div>

12. <div class="de1">

     driver.<span class="me1">findElement</span><span
    class="br0">(</span>webdriver.<span class="me1">By</span>.<span
    class="me1">name</span><span class="br0">(</span><span
    class="st0">'btnG'</span><span class="br0">)</span><span
    class="br0">)</span>.<span class="me1">click</span><span
    class="br0">(</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

13. <div class="de1">

     driver.<span class="me1">wait</span><span class="br0">(</span><span
    class="kw1">function</span><span class="br0">(</span><span
    class="br0">)</span> <span class="br0">{</span>

    </div>

14. <div class="de1">

       <span class="kw1">return</span> driver.<span
    class="me1">getTitle</span><span class="br0">(</span><span
    class="br0">)</span>.<span class="me1">then</span><span
    class="br0">(</span><span class="kw1">function</span><span
    class="br0">(</span>title<span class="br0">)</span> <span
    class="br0">{</span>

    </div>

15. <div class="de2">

         driver.<span class="me1">getPageSource</span><span
    class="br0">(</span><span class="br0">)</span>.<span
    class="me1">then</span><span class="br0">(</span><span
    class="kw1">function</span><span class="br0">(</span>html<span
    class="br0">)</span> <span class="br0">{</span>

    </div>

16. <div class="de1">

           console.<span class="me1">log</span><span
    class="br0">(</span>html<span class="br0">)</span><span
    class="sy0">;</span>

    </div>

17. <div class="de1">

           <span class="kw1">return</span> <span
    class="kw2">true</span><span class="sy0">;</span>

    </div>

18. <div class="de1">

         <span class="br0">}</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

19. <div class="de1">

       <span class="br0">}</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

20. <div class="de2">

     <span class="br0">}</span><span class="sy0">,</span> <span
    class="nu0">1000</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

21. <div class="de1">

     

    </div>

22. <div class="de1">

     driver.<span class="me1">quit</span><span class="br0">(</span><span
    class="br0">)</span><span class="sy0">;</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.RunningHeadlessSeleniumWithChrome20130823143451?action=sourceblock&num=5)

</div>

</div>

<div class="vspace">

</div>

------------------------------------------------------------------------

<div class="vspace">

</div>

\#7. Run your test
------------------

Run your test with node. You should see the HTML that was rendered by
the Chrome browser.

<div class="vspace">

</div>

<div>

![](http://www.chrisle.me/wp-content/uploads/2013/08/Screen-Shot-2013-08-18-at-1.07.55-PM.png)

</div>

<div class="vspace">

</div>

------------------------------------------------------------------------

<div class="vspace">

</div>

Use Cases
=========

So now that you have this up and running what can you use it for?

**Running your automated test suites**: This is great for doing
integration testing against Chrome browsers and probably responsive
websites.

**Testing your Chrome Extentions**: Debugging Chrome Extensions can be a
bit of a pain. This could be your Asprin.

**Taking many screenshots**: If you want to make screenshots of many
pages at once.

**Scraping stubborn websites**: I wasn’t able to scrape a website using
<span class="wikiword">PhantomJS</span> because it fired JSONP requests
long after the onLoad() event fired. Simply waiting for the event loop
to empty itself wansn’t enough. A combination of debugging with a real
browser and Selenium, I was more successful at getting the DOM after the
scripts had run.

<div class="vspace">

</div>

</div>

<div style="display: none;">

Summary: clipping from web: Tags: testing, selenium, headless, testing,
chrome, javascript, node.js Source:
<http://www.chrisle.me/2013/08/running-headless-selenium-with-chrome/>
Parent: (Technology.)Testing includeme:
[Technology.Testing](http://wiki.tamouse.org?n=Technology.Testing?action=print)
Categories:[Articles](http://wiki.tamouse.org?n=Category.Articles),
[HowTos](http://wiki.tamouse.org?n=Category.HowTos),
[Javascript](http://wiki.tamouse.org?n=Category.Javascript),
[Technology](http://wiki.tamouse.org?n=Category.Technology),
[Testing](http://wiki.tamouse.org?n=Category.Testing) Posted: Page saved
at: Fri, 23 Aug 2013 14:34:51 -0500

</div>

<div class="vspace">

</div>

</div>
