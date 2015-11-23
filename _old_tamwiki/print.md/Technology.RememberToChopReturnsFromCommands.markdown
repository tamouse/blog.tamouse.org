<div id="wikitext">

<div style="display: none;">

Summary:Trimming excess white space from command returns is important!
Parent:(Technology.)Development <span
class="wikiword">[IncludeMe](http://wiki.tamouse.org?n=Technology.IncludeMe?action=edit)[?](http://wiki.tamouse.org?n=Technology.IncludeMe?action=edit)</span>:[Development](http://wiki.tamouse.org?n=Technology.Development?action=print)
Categories:[Articles](http://wiki.tamouse.org?n=Category.Articles) Tags:
best practices

</div>

<span id="excerpt"></span> When calling commands from within another
language via a shell exec, often times the command returns with trailing
white space that you don't want. <span id="excerptend"></span>

<div class="vspace">

</div>

PHP
---

In PHP, you can execute a shell command via either the [backtick
operators](http://us.php.net/manual/en/language.operators.execution.php)
or `shell_exec()`

The way to eliminate this is with the `trim()` or `rtrim()` functions:

<div class="vspace">

</div>

<div id="sourceblock1" class="sourceblock">

<div class="sourceblocktext">

<div class="php">

<div class="head">

In PHP

</div>

1.  <div class="de1">

    <span class="re0">\$result</span> <span class="sy0">=</span> <span
    class="kw3">rtrim</span><span class="br0">(</span>\`<span
    class="kw3">date</span> <span class="st0">"+%Y-%m-<span
    class="es6">%d</span>"</span>\`<span class="br0">)</span><span
    class="sy0">;</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.RememberToChopReturnsFromCommands?action=sourceblock&num=1)

</div>

</div>

<div class="vspace">

</div>

Perl
----

In perl, the backtick operator will run a shell command. Here, `chomp()`
does the work to get rid of trailing white space.

<div class="vspace">

</div>

<div id="sourceblock2" class="sourceblock">

<div class="sourceblocktext">

<div class="perl">

<div class="head">

In Perl

</div>

1.  <div class="de1">

    <span class="kw1">my</span> <span class="re0">\$result</span> <span
    class="sy0">=</span> <span class="st0">\`date
    "+%Y-%m-%d"\`</span><span class="sy0">;</span>

    </div>

2.  <div class="de1">

    <span class="kw3">chomp</span><span class="br0">(</span><span
    class="re0">\$result</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.RememberToChopReturnsFromCommands?action=sourceblock&num=2)

</div>

</div>

<div class="vspace">

</div>

Ruby
----

As in perl, the backtick operator does the work, and chomp gets rid of
the end.

<div id="sourceblock3" class="sourceblock">

<div class="sourceblocktext">

<div class="ruby">

<div class="head">

In Ruby

</div>

1.  <div class="de1">

    result = <span class="st0">\`date "+%Y-%m-%d"\`</span>.<span
    class="kw3">chomp</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.RememberToChopReturnsFromCommands?action=sourceblock&num=3)

</div>

</div>

<div class="vspace">

</div>

</div>
