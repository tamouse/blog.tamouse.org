<div id="wikitext">

<div style="display: none;">

Summary:A Ruby Gem for processing filters Parent:(Technology.)Ruby <span
class="wikiword">[IncludeMe](http://wiki.tamouse.org?n=Technology.IncludeMe?action=edit)[?](http://wiki.tamouse.org?n=Technology.IncludeMe?action=edit)</span>:[Ruby](http://wiki.tamouse.org?n=Technology.Ruby?action=print)
Categories:[Links](http://wiki.tamouse.org?n=Category.Links) Tags: ruby,
gems, pipeline, filters Source: <https://github.com/jch/html-pipeline>
Posted: December 22, 2012, at 08:12 AM

</div>

<div class="vspace">

</div>

<div class="round lrindent quote">

HTML::Pipeline
--------------

<span class="wikiword">GitHub</span> HTML processing filters and
utilities. This module includes a small framework for defining DOM based
content filters and applying them to user provided content.

<div class="vspace">

</div>

### Installation

Add this line to your application's Gemfile:

<div class="vspace">

</div>

<div id="sourceblock1" class="sourceblock">

<div class="sourceblocktext">

<div class="ruby">

gem <span class="st0">'html-pipeline'</span>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.RubyGemHtmlPipeline?action=sourceblock&num=1)

</div>

</div>

And then execute:

<div class="vspace">

</div>

<div id="sourceblock2" class="sourceblock">

<div class="sourceblocktext">

<div class="bash">

<span class="co4">\$ </span>bundle

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.RubyGemHtmlPipeline?action=sourceblock&num=2)

</div>

</div>

Or install it yourself as:

<div class="vspace">

</div>

<div id="sourceblock3" class="sourceblock">

<div class="sourceblocktext">

<div class="bash">

<span class="co4">\$ </span>gem <span class="kw2">install</span>
html-pipeline

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.RubyGemHtmlPipeline?action=sourceblock&num=3)

</div>

</div>

</div>

<div class="vspace">

</div>

Installation notes:
-------------------

The `html-pipeline`{.escaped} gem includes another gem called
`charlock_holmes`{.escaped} (Cute :) ). However,
`charlock_holmes`{.escaped} utilizes the -dev package of libicu, so to
install it, you have to first install that package:

<div class="vspace">

</div>

<div id="sourceblock4" class="sourceblock">

<div class="sourceblocktext">

<div class="bash">

<span class="co4">\$ </span><span class="kw2">sudo</span> <span
class="kw2">apt-get install</span> libicu-dev

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.RubyGemHtmlPipeline?action=sourceblock&num=4)

</div>

</div>

This puts the necessary files in `/usr/share/icu`{.escaped}

Then you have to tell `gem`{.escaped} or `bundle`{.escaped} to use that
installation:

Configure Bundler to always use the correct arguments when installing:

<div class="vspace">

</div>

<div id="sourceblock5" class="sourceblock">

<div class="sourceblocktext">

<div class="bash">

bundle config build.charlock\_holmes <span
class="re5">--with-icu-dir</span>=<span class="sy0">/</span>usr<span
class="sy0">/</span>share<span class="sy0">/</span>icu

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.RubyGemHtmlPipeline?action=sourceblock&num=5)

</div>

</div>

Using Gem to install directly without Bundler:

<div class="vspace">

</div>

<div id="sourceblock6" class="sourceblock">

<div class="sourceblocktext">

<div class="bash">

gem <span class="kw2">install</span> charlock\_holmes <span
class="re5">--</span> <span class="re5">--with-icu-dir</span>=<span
class="sy0">/</span>usr<span class="sy0">/</span>share<span
class="sy0">/</span>icu

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.RubyGemHtmlPipeline?action=sourceblock&num=6)

</div>

</div>

<div class="vspace">

</div>

</div>
