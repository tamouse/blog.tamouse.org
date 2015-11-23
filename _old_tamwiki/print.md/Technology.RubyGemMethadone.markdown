<div id="wikitext">

<div style="display: none;">

Summary:A slick ruby gem that builds a command line application
Parent:(Technology.)Ruby <span
class="wikiword">[IncludeMe](http://wiki.tamouse.org?n=Technology.IncludeMe?action=edit)[?](http://wiki.tamouse.org?n=Technology.IncludeMe?action=edit)</span>:[Ruby](http://wiki.tamouse.org?n=Technology.Ruby?action=print)
Categories:[Links](http://wiki.tamouse.org?n=Category.Links),
[Articles](http://wiki.tamouse.org?n=Category.Articles) Tags: ruby,
gems, cli, scripts, miniapplications

</div>

<span id="excerpt"></span> [Methadone](http://davetron1000.github.com)
is a pretty neat little gem that gets a command line application up and
tested with some cool features. <span id="excerptend"></span>

<div class="vspace">

</div>

Logging in colours
------------------

`Methadone::CLILogging`{.escaped} has the ability to substitute a
different formatter when you log messages. I did this little ditty, just
to see how it works:

<div class="vspace">

</div>

<div id="sourceblock1" class="sourceblock">

<div class="sourceblocktext">

<div class="ruby">

<span class="kw3">require</span> <span class="st0">'formatador'</span>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.RubyGemMethadone?action=sourceblock&num=1)

</div>

</div>

(Don't forget to add formatador to your `Gemfile` or `.gemspec`.)

<div class="vspace">

</div>

<div id="sourceblock2" class="sourceblock">

<div class="sourceblocktext">

<div class="ruby">

<div class="head">

After the requires, before the App is declared:

</div>

1.  <div class="de1">

    SEVERITY\_COLORS = <span class="br0">{</span>

    </div>

2.  <div class="de1">

      <span class="st0">'DEBUG'</span> <span class="sy0">=\></span>
    <span class="st0">'green'</span>,

    </div>

3.  <div class="de1">

      <span class="st0">'INFO'</span> <span class="sy0">=\></span> <span
    class="st0">'white'</span>,

    </div>

4.  <div class="de1">

      <span class="st0">'WARN'</span> <span class="sy0">=\></span> <span
    class="st0">'yellow'</span>,

    </div>

5.  <div class="de2">

      <span class="st0">'ERROR'</span> <span class="sy0">=\></span>
    <span class="st0">'cyan'</span>,

    </div>

6.  <div class="de1">

      <span class="st0">'FATAL'</span> <span class="sy0">=\></span>
    <span class="st0">'red'</span>

    </div>

7.  <div class="de1">

    <span class="br0">}</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.RubyGemMethadone?action=sourceblock&num=2)

</div>

</div>

<div class="vspace">

</div>

<div id="sourceblock3" class="sourceblock">

<div class="sourceblocktext">

<div class="ruby">

<div class="head">

After the includes inside the class App:

</div>

1.  <div class="de1">

    <span class="kw1">class</span> App

    </div>

2.  <div class="de1">

      <span class="kw1">include</span> <span
    class="re2">Methadone::Main</span>

    </div>

3.  <div class="de1">

      <span class="kw1">include</span> <span
    class="re2">Methadone::CLILogging</span>

    </div>

4.  <div class="de1">

      <span class="kw1">include</span> <span
    class="re2">Methadone::SH</span>

    </div>

5.  <div class="de2">

     

    </div>

6.  <div class="de1">

      <span class="co1">\# After including Methadone::CLILogging, the
    logger</span>

    </div>

7.  <div class="de1">

      <span class="co1">\# can be modified, notably replacing the
    formatter</span>

    </div>

8.  <div class="de1">

      <span class="co1">\# code with an anonymous procedure:</span>

    </div>

9.  <div class="de1">

      logger.<span class="me1">formatter</span> = <span
    class="kw3">proc</span> <span class="br0">{</span> <span
    class="sy0">|</span>severity,datetime,progname,msg<span
    class="sy0">|</span>

    </div>

10. <div class="de2">

        c = SEVERITY\_COLORS<span class="br0">[</span>severity<span
    class="br0">]</span>

    </div>

11. <div class="de1">

        Formatador.<span class="me1">parse</span><span
    class="br0">(</span><span class="st0">"[\#{c}]\#{msg}[/]<span
    class="es0">\\n</span>"</span><span class="br0">)</span>

    </div>

12. <div class="de1">

      <span class="br0">}</span>

    </div>

13. <div class="de1">

     

    </div>

14. <div class="de1">

      main <span class="kw1">do</span> <span class="sy0">|</span> config
    <span class="sy0">|</span> <span class="co1">\# ... and so on</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.RubyGemMethadone?action=sourceblock&num=3)

</div>

</div>

And then when you give:

<div class="vspace">

</div>

<div id="sourceblock4" class="sourceblock">

<div class="sourceblocktext">

<div class="ruby">

debug<span class="br0">(</span><span class="st0">"This is a debug
statement"</span><span class="br0">)</span>\
 info<span class="br0">(</span><span class="st0">"FYI"</span><span
class="br0">)</span>\
 warn<span class="br0">(</span><span class="st0">"This is a
warning"</span><span class="br0">)</span>\
 error<span class="br0">(</span><span class="st0">"Oops!! Something went
wrong, cleaning up"</span><span class="br0">)</span>\
 fatal<span class="br0">(</span><span class="st0">"OH NOES!! Cannot
procede, dropping the platter"</span><span class="br0">)</span>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.RubyGemMethadone?action=sourceblock&num=4)

</div>

</div>

will produce:

<div class="vspace">

</div>

<div
style="background-color: #333; colour: #CCC; font-family: monospace; border: 1pt solid #CCC; padding: 10px;">

<span style="color: green;">This is a debug statement</span>\
<span style="color: white;">FYI</span>\
<span style="color: yellow;">This is a warning</span>\
<span style="color: #63F3F6;">Oops!! Something went wrong, cleaning
up</span>\
<span style="color: red;">OH NOES!! Cannot procede, dropping the
platter%</span>

<div class="vspace">

</div>

</div>

</div>
