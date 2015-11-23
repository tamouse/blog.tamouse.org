<div id="wikitext">

<div style="display: none;">

Summary: A short tutorial of things I've learned about writing Rakefiles
Parent: (Technology.)Ruby <span
class="wikiword">[IncludeMe](http://wiki.tamouse.org?n=Technology.IncludeMe?action=edit)[?](http://wiki.tamouse.org?n=Technology.IncludeMe?action=edit)</span>:
[Ruby](http://wiki.tamouse.org?n=Technology.Ruby?action=print)
Categories: [HowTos](http://wiki.tamouse.org?n=Category.HowTos),
[Technology](http://wiki.tamouse.org?n=Category.Technology) Tags: rake,
rakefile, ruby Source: Posted: Mon Jan 13 11:20:49 2014

</div>

<span id="excerpt"></span> Rake is the make of the ruby world. It is a
nicely structured way of organizing tasks that are part of developing,
testing, maintaining and running an application. <span
id="excerptend"></span>

<div class="vspace">

</div>

Rake Documentation
------------------

Rake's documentation is rather fragmented, there doesn't seem to be a
definitive guide to writing Rakefiles, other than the source itself in
many cases. Such as it is, here are some pointers:

<div class="vspace">

</div>

-   For details on Rake's command-line invocation, read
    <https://github.com/jimweirich/rake/blob/master/doc/command_line_usage.rdoc>
-   For details on writing Rakefiles, see
    <https://github.com/jimweirich/rake/blob/master/doc/rakefile.rdoc>
-   For the original announcement of Rake, see
    <https://github.com/jimweirich/rake/blob/master/doc/rational.rdoc>
-   For a glossary of terms, see
    <https://github.com/jimweirich/rake/blob/master/doc/glossary.rdoc>

<div class="vspace">

</div>

Invoking another Rake task from inside a task
---------------------------------------------

Source:
<http://www.spritle.com/blogs/2013/12/26/calling-rake-tasks-with-in-rake/>

It turns out to be pretty simple, just call
`Rake::Task[%{rake:task}].invoke` (with**out** the leading `':'` on the
task name) and bob's your uncle. The key thing I wasn't figuring out is
the that task (with it's various namespace elements included) must be a
**string** -- I was trying to use the task name as a symbol, but
obviously you can't use `:rake:task` as a symbol.

<div class="vspace">

</div>

<div id="sourceblock1" class="sourceblock">

<div class="sourceblocktext">

<div class="ruby">

<div class="head">

invoke another Rake task

</div>

1.  <div class="de1">

    namespace <span class="re3">:outside</span> <span
    class="kw1">do</span>

    </div>

2.  <div class="de1">

      namespace <span class="re3">:inside</span> <span
    class="kw1">do</span>

    </div>

3.  <div class="de1">

        desc <span class="st0">"try to let the cat out"</span>

    </div>

4.  <div class="de1">

        task <span class="re3">:let\_the\_cat\_out</span> <span
    class="kw1">do</span> <span class="sy0">|</span>t<span
    class="sy0">|</span>

    </div>

5.  <div class="de2">

          <span class="re2">Rake::Task</span><span
    class="br0">[</span><span class="sy0">%</span><span
    class="br0">{</span>cat:out<span class="br0">}</span><span
    class="br0">]</span>.<span class="me1">invoke</span>      

    </div>

6.  <div class="de1">

        <span class="kw1">end</span>

    </div>

7.  <div class="de1">

      <span class="kw1">end</span>

    </div>

8.  <div class="de1">

    <span class="kw1">end</span>

    </div>

9.  <div class="de1">

     

    </div>

10. <div class="de2">

    namespace <span class="re3">:cat</span> <span class="kw1">do</span>

    </div>

11. <div class="de1">

      desc <span class="st0">"really let the cat out"</span>

    </div>

12. <div class="de1">

      task <span class="re3">:out</span> <span class="kw1">do</span>
    <span class="sy0">|</span>t<span class="sy0">|</span>

    </div>

13. <div class="de1">

        <span class="kw3">puts</span> <span class="st0">"letting the cat
    out"</span>

    </div>

14. <div class="de1">

      <span class="kw1">end</span>

    </div>

15. <div class="de2">

    <span class="kw1">end</span>

    </div>

16. <div class="de1">

     

    </div>

17. <div class="de1">

    <span class="co1">\# =\> letting the cat out</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.HowToWriteRakefiles?action=sourceblock&num=1)

</div>

</div>

<div class="vspace">

</div>

Running a shell command
-----------------------

Rake includes all the nifty `FileUtils`{.escaped} methods, but also
includes a few more. One that I use a lot is `sh` which calls a
subprocess to execute a shell command.

I only found out how to invoke this by reading the source code at
<https://github.com/jimweirich/rake/blob/master/lib/rake/file_utils.rb>
which implements the `sh` method:

<div class="vspace">

</div>

<div class="indent">

Run the system command `cmd`. If multiple arguments are given the
command is not run with the shell (same semantics as Kernel::exec and
Kernel::system).

</div>

<div class="vspace">

</div>

### Example:

<div id="sourceblock2" class="sourceblock">

<div class="sourceblocktext">

<div class="ruby">

<div class="head">

using the sh method in a rakefile

</div>

1.  <div class="de1">

    sh <span class="sy0">%</span><span class="br0">{</span>ls <span
    class="sy0">-</span>ltr<span class="br0">}</span>

    </div>

2.  <div class="de1">

     

    </div>

3.  <div class="de1">

    sh <span class="st0">'ls'</span>, <span class="st0">'file with
    spaces'</span>

    </div>

4.  <div class="de1">

     

    </div>

5.  <div class="de2">

    <span class="co1">\# check exit status after command runs</span>

    </div>

6.  <div class="de1">

    sh <span class="sy0">%</span><span class="br0">{</span>grep pattern
    file<span class="br0">}</span> <span class="kw1">do</span> <span
    class="sy0">|</span>ok, res<span class="sy0">|</span>

    </div>

7.  <div class="de1">

      <span class="kw1">if</span> ! ok

    </div>

8.  <div class="de1">

        <span class="kw3">puts</span> <span class="st0">"pattern not
    found (status = \#{res.exitstatus})"</span>

    </div>

9.  <div class="de1">

      <span class="kw1">end</span>

    </div>

10. <div class="de2">

    <span class="kw1">end</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.HowToWriteRakefiles?action=sourceblock&num=2)

</div>

</div>

Of these, the third form is the most interesting to me, as it lets you
check the result of the shell invocation.

<div class="vspace">

</div>

</div>
