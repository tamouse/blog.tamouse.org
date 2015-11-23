<div id="wikitext">

<span id="excerpt"></span> Starting in Rails 3.2, it is possible to
change the formatter used for the `Rails.logger`, but it requires a bit
of metaprogramming that depends on understanding of the way
`Rails.logger` is created. **Update:** In Rails 4.0, it got even
*easier!* <span id="excerptend"></span>

<div class="vspace">

</div>

Rails 4
-------

This is the easiest implementation yet, as Rails 4 <span
class="wikiword">[ActiveSupport](http://wiki.tamouse.org?n=Technology.ActiveSupport?action=edit)[?](http://wiki.tamouse.org?n=Technology.ActiveSupport?action=edit)</span>::Logger
is a direct inheritor of the famed Logger module.

Setting the formatter becomes a simple assignment of the formatter proc:

<div class="vspace">

</div>

<div id="sourceblock1" class="sourceblock">

<div class="sourceblocktext">

<div class="ruby">

1.  <div class="de1">

    Rails.<span class="me1">logger</span>.<span
    class="me1">formatter</span> = <span class="kw3">proc</span>  <span
    class="kw1">do</span> <span class="sy0">|</span>sev, ts, prog,
    msg<span class="sy0">|</span>

    </div>

2.  <div class="de1">

      <span class="st0">"\#{ts.strftime("</span><span
    class="sy0">%</span>Y<span class="sy0">-%</span>m<span
    class="sy0">-%</span>dT<span class="sy0">%</span>H:<span
    class="sy0">%</span>M:<span class="sy0">%</span>S<span
    class="st0">")} \#{sev} [\#{prog}] \#{msg}"</span>

    </div>

3.  <div class="de1">

    <span class="kw1">end</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.HowToChangeTheRailsLoggerFormatter?action=sourceblock&num=1)

</div>

</div>

Put this in `config/initializers/` and you should be good to go!

<div class="vspace">

</div>

Background
----------

<div class="round lrindent warning2">

*Note*: This depends on Rails 3.2 implementation of
`ActiveSupport::BufferedLogger`{.escaped}.

</div>

Starting in Rails 3.2, Rails.logger is an instance of
`ActiveSupport::TaggedLogging`{.escaped}, which in turn pulls in
`ActiveSupport::BufferedLogger`{.escaped}. Neither of these modules
permits directly setting the formatter for log messages. This
initializer reaches into `ActiveSupport::TaggedLogging`{.escaped} to
modify the ` @logger`{.escaped} instance variable, which is an instance
of `ActiveSupport::BufferedLogger`{.escaped}.
`ActiveSupport::BufferedLogger`{.escaped} contains an instance variable,
`@log`{.escaped}, which is an instance of `Logger`{.escaped}. With that
information, we perform a nested instance\_eval operation to set the
formatter.

<div class="vspace">

</div>

Implementation
--------------

Create a file in `config/initializers/`{.escaped} called
`logger.rb`{.escaped}:

<div class="vspace">

</div>

<div id="sourceblock2" class="sourceblock">

<div class="sourceblocktext">

<div class="ruby">

<div class="head">

Rails.root/config/initializers/logger.rb

</div>

1.  <div class="de1">

    Rails.<span class="me1">logger</span>.<span
    class="me1">instance\_eval</span><span class="br0">(</span><span
    class="sy0">%</span>q<span class="br0">{</span>@logger.<span
    class="me1">instance\_eval</span><span class="br0">(</span><span
    class="sy0">%</span>q<span class="br0">{</span>@log.<span
    class="me1">formatter</span>= <span class="kw3">proc</span> <span
    class="br0">{</span><span class="sy0">|</span>s,d,<span
    class="kw3">p</span>,m<span class="sy0">|</span> <span
    class="st0">"\#{s} \#{d} \#{m}<span class="es0">\\n</span>"</span>
    <span class="br0">}</span><span class="br0">}</span><span
    class="br0">)</span><span class="br0">}</span><span
    class="br0">)</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.HowToChangeTheRailsLoggerFormatter?action=sourceblock&num=2)

</div>

</div>

What we're doing here is first reaching inside the
`Rails.logger`{.escaped} object, and evaluating a bit of Ruby code on
the `@logger`{.escaped} instance variable inside
`Rails.logger`{.escaped}.

Upon that instance variable, which is an
`ActiveSupport::BufferedLogger`{.escaped} instance, we reach further
inside and evaluate another bit of Ruby code on the `@log`{.escaped}
instance variable, which is an instance of `Logger`{.escaped}, to set
the logging formatter, which is an anonymous procedure that returns the
formatted string as we want it.

<div class="vspace">

</div>

Pre-Rails 3.2
-------------

In 3.1, there is no `ActiveSupport::TaggedLogging`{.escaped} module, and
Rails.logger is an instance of `ActiveSupport::BufferedLogger`{.escaped}
instead. However, the 3.1 version does **not** use `Logger`{.escaped},
and instead opts for doing it's own thing.

It is possible to change the Rails.logger in 3.1 by passing in a
`Logger`{.escaped} instance to
`ActiveSupport::BufferedLogger.new`{.escaped}, giving you the ability to
set the formatter. In
`Rails.app/config/initializers/logging.rb`{.escaped}, put:

<div class="vspace">

</div>

<div id="sourceblock3" class="sourceblock">

<div class="sourceblocktext">

<div class="ruby">

<div class="head">

Rails.root/config/initializers/logging.rb

</div>

1.  <div class="de1">

    <span class="kw3">require</span> <span class="st0">'logger'</span>

    </div>

2.  <div class="de1">

     

    </div>

3.  <div class="de1">

    <span class="re2">MyApp::Application</span>::<span
    class="kw4">Logger</span> = <span class="kw4">Logger</span>.<span
    class="me1">new</span><span class="br0">(</span>Rails.<span
    class="me1">root</span>.<span class="me1">join</span><span
    class="br0">(</span><span class="st0">"log"</span>,Rails.<span
    class="me1">env</span><span class="sy0">+</span><span
    class="st0">".log"</span><span class="br0">)</span><span
    class="br0">)</span>

    </div>

4.  <div class="de1">

     

    </div>

5.  <div class="de2">

    Rails.<span class="me1">logger</span>.<span
    class="me1">instance\_eval</span><span class="br0">(</span><span
    class="sy0">%</span>Q<span class="br0">{</span>@log=<span
    class="re2">ActiveSupport::BufferedLogger</span>.<span
    class="me1">new</span><span class="br0">(</span><span
    class="co1">\#{MyApp::Application::Logger})})</span>

    </div>

6.  <div class="de1">

    Rails.<span class="me1">logger</span>.<span
    class="me1">instance\_eval</span><span class="br0">(</span><span
    class="sy0">%</span>q<span class="br0">{</span>@log.<span
    class="me1">formatter</span>= <span class="kw3">proc</span> <span
    class="br0">{</span><span class="sy0">|</span>s,d,<span
    class="kw3">p</span>,t<span class="sy0">|</span> <span
    class="st0">"\#{s} \#{d} \#{m}<span class="es0">\\n</span>"</span>
    <span class="br0">}</span><span class="br0">}</span><span
    class="br0">)</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.HowToChangeTheRailsLoggerFormatter?action=sourceblock&num=3)

</div>

</div>

removing one level of `instance_eval`{.escaped}

<div class="vspace">

</div>

References
----------

### 4.0:

-   <https://github.com/rails/rails/blob/4-0-stable/activesupport/lib/active_support/logger.rb#L6>

<div class="vspace">

</div>

### 3.2:

-   <https://github.com/rails/rails/blob/3-2-stable/activesupport/lib/active_support/buffered_logger.rb>
-   <https://github.com/rails/rails/blob/3-2-stable/activesupport/lib/active_support/tagged_logging.rb>

<div class="vspace">

</div>

### 3.1:

-   <https://github.com/rails/rails/blob/3-1-stable/activesupport/lib/active_support/buffered_logger.rb>

<div class="vspace">

</div>

<div style="display: none;">

Summary:The default Rails.logger format in Rails 3.2 can be changed by
adding a bit of metaprogramming in an initializer.
Parent:(Technology.)<span
class="wikiword">[RubyOnRails](http://wiki.tamouse.org?n=Technology.RubyOnRails?action=print)</span>
includeme:[RubyOnRails](http://wiki.tamouse.org?n=Technology.RubyOnRails?action=print)
Categories:[HowTos](http://wiki.tamouse.org?n=Category.HowTos),
[Ruby](http://wiki.tamouse.org?n=Category.Ruby),
[Rails](http://wiki.tamouse.org?n=Category.Rails),
[Technology](http://wiki.tamouse.org?n=Category.Technology) Tags: ruby,
rails, logging, howtos, metaprogramming

</div>

</div>
