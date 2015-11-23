<div id="wikitext">

<span id="excerpt"></span> Remind is an extremely powerful, but
syntactically-challenging tool. I've no doubt one could create any date
specification to get events to work correctly. Setting things up for
month-long and week-long events is one of those things. <span
id="excerptend"></span>

<div class="vspace">

</div>

Month-long events
-----------------

At least in the US, we seem to designate somethings as "National X
Month" or "National X Week". The first is really easy:

<div class="vspace">

</div>

``` {.escaped}
  REM July MSG The month of %m is something or other month
```

The above shows something else as well. The *%m* variable gives the
current month in the output. In addition, the *%\_* variable causes a
new line. This is kind of nice to do something like:

<div class="vspace">

</div>

``` {.escaped}
  REM Jan MSG The month of January is: %_ \
    National Bath Safety Month %_ \
    National Blood Donor Month %_ \
    National Braille Literacy Month %_ \
    National Hobby Month %_ \
    Hot Tea Month %_ \
    National Oatmeal Month %_ \
    National Soup Month
```

Which prints out all those designations indented under the first message
line.

<div class="vspace">

</div>

Week-long events
----------------

But making a week-long event is a little harder. You basically have to
test if the trigger date is between the bounds of a given week. Luckily,
this is easy to set into a function:

<div class="vspace">

</div>

``` {.escaped}
  FSET All_Week_1(x)    day(x) <=  7
  FSET All_Week_2(x)    day(x) >=  8 && day(x) <= 15
  FSET All_Week_3(x)    day(x) >= 16 && day(x) <= 22
  FSET All_Week_4(x)    day(x) >= 23 && day(x) <= 29
  FSET All_Week_5(x)    day(x) >= 30
```

Then, in your recipe, you simply put:

<div class="vspace">

</div>

``` {.escaped}
  REM <month> SATISFY [All_Week_1($T)] MSG First week of %m is %_ \
     events
```

Where \<month\> is the month name, e.g. July, Aug, etc.

<div class="vspace">

</div>

<div style="display: none;">

Summary:Using remind to mark whole month or whole week events
Parent:(Technology.)Remind <span
class="wikiword">[IncludeMe](http://wiki.tamouse.org?n=Technology.IncludeMe?action=edit)[?](http://wiki.tamouse.org?n=Technology.IncludeMe?action=edit)</span>:[Remind](http://wiki.tamouse.org?n=Technology.Remind?action=print)
Categories:[HowTos](http://wiki.tamouse.org?n=Category.HowTos) Tags:
remind, recipes

</div>

</div>
