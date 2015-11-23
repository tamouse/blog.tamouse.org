<div id="wikitext">

<div style="display: none;">

Summary: A set of notes on working with Rails' ActionMailer Parent:
(Technology.)Rails <span
class="wikiword">[IncludeMe](http://wiki.tamouse.org?n=Technology.IncludeMe?action=edit)[?](http://wiki.tamouse.org?n=Technology.IncludeMe?action=edit)</span>:
[Rails](http://wiki.tamouse.org?n=Technology.Rails?action=edit)[?](http://wiki.tamouse.org?n=Technology.Rails?action=edit)
Categories: [HowTos](http://wiki.tamouse.org?n=Category.HowTos),
[Technology](http://wiki.tamouse.org?n=Category.Technology),
[Ruby](http://wiki.tamouse.org?n=Category.Ruby),
[Rails](http://wiki.tamouse.org?n=Category.Rails) Tags: ruby, rails,
actionmailer, howtos, notes, testing Source: Posted: Sat Aug 24 10:39:09
2013

</div>

<span id="excerpt"></span>

<div class="lead">

[ActionMailer](http://guides.rubyonrails.org/action_mailer_basics.html)
allows a Rails application to send and receive emails in a fashion
similar to a Rails controller. You can have multi-part bodies,
templates, attachments, and so on. It isn't quite a complete ecosystem,
as you need to have a transport for sending and recieving mail, and you
need to have a way of accurately testing your emails, so I'm going to
write some notes to complete that view.

</div>

<span id="excerptend"></span>

<div class="vspace">

</div>

First, read the documentation
-----------------------------

[The Rails Guides](http://guides.rubyonrails.org/) provide the basics
for getting up and running using [ActionMailer](#excerpt).

In addition, the
[api](http://api.rubyonrails.org/classes/ActionMailer/Base.html)
provides more details on the usage of the methods in ActionMailer.

<div class="vspace">

</div>

Testing Considerations
----------------------

Since we are all good TDD/BDD -ers (we are, right?), I'm going to start
with how you can set up your Rails environment for testing your mailers.

The Rails Guides provide a section on [testing your
mailers](http://guides.rubyonrails.org/testing.html#testing-your-mailers),
which you should go off and read right now.

<div class="vspace">

</div>

### Delivery Mode `:test`

The simplest setup for this, especially useful for unit and functional
testing, is to set the delivery mode for action mailer to `:test` in
your `config/environments/test.rb` file:

<div class="vspace">

</div>

<div id="sourceblock1" class="sourceblock">

<div class="sourceblocktext">

<div class="ruby">

<div class="head">

config/environments/test.rb

</div>

1.  <div class="de1">

    <span class="co1">\# Tell Action Mailer not to deliver emails to the
    real world.</span>

    </div>

2.  <div class="de1">

      <span class="co1">\# The :test delivery method accumulates sent
    emails in the</span>

    </div>

3.  <div class="de1">

      <span class="co1">\# ActionMailer::Base.deliveries array.</span>

    </div>

4.  <div class="de1">

      config.<span class="me1">action\_mailer</span>.<span
    class="me1">delivery\_method</span> = <span class="re3">:test</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.HowToUsingActionMailerInRails?action=sourceblock&num=1)

</div>

</div>

In a new Rails app, this is the default setting, so you don't really
need to do anything in particular.

<div class="vspace">

</div>

### MailCatcher For Round-Trip Testing

While it is often the case that you should not bother to test the
underlying delivery mechanisms, sometimes you really want to see what
your email is going to look like in the eyes of the receiver.
[MailCatcher](http://mailcatcher.me/) to the rescue. MailCatcher is a
nice utility that emulates an SMTP connection and provides a webmail
view of the mails it catches. To use MailCatcher, after you've installed
it according to the instructions, is to set up your environments files
appropriately. In this case, I'm going to set it in the `development`
environment.

<div class="vspace">

</div>

<div id="sourceblock2" class="sourceblock">

<div class="sourceblocktext">

<div class="ruby">

<div class="head">

config/environments/development.rb

</div>

1.  <div class="de1">

    config.<span class="me1">action\_mailer</span>.<span
    class="me1">deliver\_method</span> = <span class="re3">:smtp</span>

    </div>

2.  <div class="de1">

      config.<span class="me1">action\_mailer</span>.<span
    class="me1">smtp\_settings</span> = <span class="br0">{</span> <span
    class="re3">:address</span> <span class="sy0">=\></span> <span
    class="st0">'localhost'</span>, <span class="re3">:port</span> <span
    class="sy0">=\></span> <span class="nu0">1025</span> <span
    class="br0">}</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.HowToUsingActionMailerInRails?action=sourceblock&num=2)

</div>

</div>

<div class="vspace">

</div>

<div class="alert alert-info">

For feature or integration testing, using
[cucumber](http://wiki.tamouse.org?n=Technology.Cucumber?action=edit)[?](http://wiki.tamouse.org?n=Technology.Cucumber?action=edit)
for example, it is better to set up a separate environment for that
testing, different from unit testing that uses the `test` environment. I
add a `cucumber` environment to the various configuration files
(`config/environments/cucumber.rb`, `config/database.yml`, and so on)
that lets me set up specific configuration variables like the above,
without disturbing my unit test environment.

</div>

When you cause mails to be sent with your mailer, the mails can be seen
by pointing your browser at `http://localhost:1080`{.escaped} and it
works like your typical web mail reader. (You can't reply or forward,
obviously.)

</div>
