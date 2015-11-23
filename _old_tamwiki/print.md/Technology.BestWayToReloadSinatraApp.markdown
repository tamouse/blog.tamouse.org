<div id="wikitext">

<div class="faq">

What is the best way to run a modular Sinatra app to have it reload with
each request? \* Martin Streicher 16 Jan 13 | 3:38 am

There are many ways. I used 'rerun' gem. It need not be part of the
package. I have had my share of problems with sinatra reloader and
guard. \* Sairam 21 Jan 13 | 12:12 pm

Hi Martin, I've used Sinatra Reloader like so: \* Darren Jones 23 Jan 13
| 2:25 pm

<div class="vspace">

</div>

<div id="sourceblock1" class="sourceblock">

<div class="sourceblocktext">

<div class="ruby">

1.  <div class="de1">

    <span class="kw3">require</span> <span
    class="st0">"sinatra/base"</span>

    </div>

2.  <div class="de1">

    <span class="kw3">require</span> <span
    class="st0">"sinatra/reloader"</span>

    </div>

3.  <div class="de1">

     

    </div>

4.  <div class="de1">

    <span class="kw1">class</span> MyApp <span class="sy0">\<</span>
    <span class="re2">Sinatra::Base</span>

    </div>

5.  <div class="de2">

      configure <span class="re3">:development</span> <span
    class="kw1">do</span>

    </div>

6.  <div class="de1">

        register <span class="re2">Sinatra::Reloader</span>

    </div>

7.  <div class="de1">

      <span class="kw1">end</span>

    </div>

8.  <div class="de1">

     

    </div>

9.  <div class="de1">

      <span class="co1">\# Your modular application code goes
    here...</span>

    </div>

10. <div class="de2">

    <span class="kw1">end</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.BestWayToReloadSinatraApp?action=sourceblock&num=1)

</div>

</div>

You need to remember to register the extension when building a modular
style app. It has worked fine for me so far

<div class="vspace">

</div>

</div>

<div style="display: none;">

Summary:Answers to ways to make sure Sinatra can be reloaded easily
Parent:(Technology.)Ruby
includeme:[Technology.Ruby](http://wiki.tamouse.org?n=Technology.Ruby?action=print)
Categories:[FAQ](http://wiki.tamouse.org?n=Category.FAQ),
[Technology](http://wiki.tamouse.org?n=Category.Technology),
[Ruby](http://wiki.tamouse.org?n=Category.Ruby),
[Sinatra](http://wiki.tamouse.org?n=Category.Sinatra) Tags: faq, ruby,
sinatra, testing

</div>

</div>
