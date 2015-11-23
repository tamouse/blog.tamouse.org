<div id="wikitext">

<span id="excerpt"></span> Eclipse basically is running the java engine,
which sets aside 256MB of memory for use in the virtual machine. You can
pass arguments on to the java program from the eclipse command line. So
the get the most out of the memory you've got on your machine, run
eclipse with the following parameters:

<div class="vspace">

</div>

<div id="sourceblock1" class="sourceblock">

<div class="sourceblocktext">

<div class="bash">

eclipse <span class="re5">-vmargs</span> -<span
class="sy0">\`</span>Xmx1024M

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.RunningEclipseWithMoreMemory?action=sourceblock&num=1)

</div>

</div>

<span id="excerptend"></span>

where you put in the size of your memory after the mx. 1G is shown here
as an example. You can use abbreviations like 512M, 1k, etc. and the
java engine will understand them.

<div class="vspace">

</div>

</div>
