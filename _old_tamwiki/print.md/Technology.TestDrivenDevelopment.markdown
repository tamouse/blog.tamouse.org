<div id="wikitext">

<span id="excerpt"></span> Wikipedia has a good overview on
[Test-driven\_development](http://en.wikipedia.org/wiki/Test-driven_development)
<span id="excerptend"></span>

The basic concept is knowing what you want, i.e., the desired outcomes,
of a unit of code before you being writing the code. Borrowing from the
consulting world, the
[Consulting.ThreeGoldenQuestions](http://wiki.tamouse.org?n=Consulting.ThreeGoldenQuestions?action=print),
the ones to ask about a unit of code are:

<div class="vspace">

</div>

1.  What is this unit supposed to do?
2.  What will this unit enable the application to accomplish?
3.  How will you know that the unit is behaving as it should?

These questionsn should be answered *before* you delve into how you are
going to implement the unit of code. Even if you don't yet understand
how you will implement the unit, you must understand the "black-box"
behaviour of the unit:

<div class="vspace">

</div>

-   specification of inputs, boundaries
-   specification of output or outcomes

In TDD, the workflow is taking small, incremental steps in the full
development of the unit:

<div class="vspace">

</div>

1.  <span style="color: red;"> RED: </span> Create your test and run it,
    and see that it fails (i.e. the functionality of the unit is not
    there or working yet)
2.  <span style="color: green;"> GREEN: </span> Develop the unit so that
    the test passes, i.e, the unit is correct.
3.  <span style="color: blue;"> REFACTOR: </span> Modify the code so it
    meets development policies and practices for your application. Make
    it pretty, redesign for performance, defensibility, maintainability,
    reliability, etc, if necessary.

Iterate on the above three steps until you have fully specified and
developed the unit.

<div class="vspace">

</div>

<div style="display: none;">

Summary:A practice of software development that helps you to understand
and validate what you trying to develop Parent:(Technology.)Testing
<span
class="wikiword">[IncludeMe](http://wiki.tamouse.org?n=Technology.IncludeMe?action=edit)[?](http://wiki.tamouse.org?n=Technology.IncludeMe?action=edit)</span>:[Testing](http://wiki.tamouse.org?n=Technology.Testing?action=print)
Categories:[BestPactices](http://wiki.tamouse.org?n=Category.BestPactices),
[Articles](http://wiki.tamouse.org?n=Category.Articles) Tags: testing,
quality assurance, development

</div>

</div>
