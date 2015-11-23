<div id="wikitext">

<div style="display: none;">

Summary: A poorly documented problem, with a simple (?) solution Parent:
(Technology.)Sidekiq <span
class="wikiword">[IncludeMe](http://wiki.tamouse.org?n=Technology.IncludeMe?action=edit)[?](http://wiki.tamouse.org?n=Technology.IncludeMe?action=edit)</span>:
[Sidekiq](http://wiki.tamouse.org?n=Technology.Sidekiq?action=edit)[?](http://wiki.tamouse.org?n=Technology.Sidekiq?action=edit)
Categories: [Technology](http://wiki.tamouse.org?n=Category.Technology),
[Tools](http://wiki.tamouse.org?n=Category.Tools),
[HowTos](http://wiki.tamouse.org?n=Category.HowTos) Tags: sidekiq,
redis, rails, ruby, queues, howto Source: source url Posted: Mon Jul 28
15:11:41 2014

</div>

Sometimes, especially during development and test, your Sidekiq queues
can grow to enormous lengths, likely when you have a lot of delayed
emails if you're just running the rails stack and not running to sidekiq
process at the same time. Job failures also contribute to this, as well
as volume handling if you're using a real mail service, such as Gmail to
handle the mails.

There are a couple of things to do:

<div class="vspace">

</div>

1.  Clear the Sidekiq queue.
2.  Don't use a real service for email.

This is about handling the first thing. For the second thing, look at
[MailCatcher](http://mailcatcher.me/).

<div class="vspace">

</div>

Clearing out the sidekiq queue.
-------------------------------

The simplest thing is set up a rake task to do this:

<div class="vspace">

</div>

<div id="sourceblock1" class="sourceblock">

<div class="sourceblocktext">

<div class="ruby">

<div class="head">

Rake Task to clear Sidekiq Queues

</div>

1.  <div class="de1">

    <span class="kw1">class</span> SidekiqUtil

    </div>

2.  <div class="de1">

     

    </div>

3.  <div class="de1">

      <span class="kw1">def</span> <span class="kw2">self</span>.<span
    class="me1">queues</span>

    </div>

4.  <div class="de1">

        ::<span class="re2">Sidekiq::Stats</span>.<span
    class="me1">new</span>.<span class="me1">queues</span>.<span
    class="me1">keys</span>.<span class="me1">map</span> <span
    class="br0">{</span> <span class="sy0">|</span>name<span
    class="sy0">|</span> ::Sidekiq::<span class="kw4">Queue</span>.<span
    class="me1">new</span><span class="br0">(</span>name<span
    class="br0">)</span> <span class="br0">}</span>

    </div>

5.  <div class="de2">

      <span class="kw1">end</span>

    </div>

6.  <div class="de1">

     

    </div>

7.  <div class="de1">

      <span class="kw1">def</span> <span class="kw2">self</span>.<span
    class="me1">clear\_all</span>

    </div>

8.  <div class="de1">

        <span class="kw2">self</span>.<span
    class="me1">queues</span>.<span class="me1">each</span> <span
    class="br0">{</span> <span class="sy0">|</span>q<span
    class="sy0">|</span> q.<span class="me1">clear</span> <span
    class="br0">}</span>

    </div>

9.  <div class="de1">

      <span class="kw1">end</span>

    </div>

10. <div class="de2">

     

    </div>

11. <div class="de1">

    <span class="kw1">end</span>

    </div>

12. <div class="de1">

     

    </div>

13. <div class="de1">

    namespace <span class="re3">:jobs</span> <span class="kw1">do</span>

    </div>

14. <div class="de1">

      desc <span class="st0">"Clear out the sidekiq job queue"</span>

    </div>

15. <div class="de2">

      task <span class="re3">:clear\_sidekiq\_queue</span>, <span
    class="br0">[</span><span class="re3">:frequency</span><span
    class="br0">]</span> <span class="sy0">=\></span> <span
    class="re3">:environment</span> <span class="kw1">do</span> <span
    class="sy0">|</span>t, args<span class="sy0">|</span>

    </div>

16. <div class="de1">

        SidekiqUtil.<span class="me1">clear\_all</span>

    </div>

17. <div class="de1">

      <span class="kw1">end</span>

    </div>

18. <div class="de1">

    <span class="kw1">end</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.ClearingOutSidekiqQueues?action=sourceblock&num=1)

</div>

</div>

<div class="vspace">

</div>

</div>
