<div id="wikitext">

<span id="excerpt"></span> The iGoogle weather api is an undocument
service profided by Google to serve it's iGoogle home page weather
widget. It is *by far* the easiest weather web service to use, as
everything is broken out for you in XML. <span id="excerptend"></span>

The call couldn't be easier, really:

<div class="vspace">

</div>

``` {.escaped}
  http://www.google.com/ig/api?weather=City%20Name
```

You can specify a state abbreviation as well, for example, St. Paul,
Minnesota:

<div class="vspace">

</div>

``` {.escaped}
  http://www.google.com/ig/api?weather=St.%20Paul%2C%20MN
```

You can also specify a zip code:

<div class="vspace">

</div>

``` {.escaped}
  http://www.google.com/ig/api?weather=55112
```

Here's an example of the XML output (tidied up) that you get for the
city of "Minneapolis":

<div class="vspace">

</div>

<div id="sourceblock1" class="sourceblock">

<div class="sourceblocktext">

<div class="xml">

<span class="sc3"><span class="re1">\<?xml</span> <span
class="re0">version</span>=<span class="st0">"1.0"</span><span
class="re2">?\></span></span>\
 <span class="sc3"><span class="re1">\<xml\_api\_reply</span> <span
class="re0">version</span>=<span class="st0">"1"</span><span
class="re2">\></span></span>\
   <span class="sc3"><span class="re1">\<weather</span> <span
class="re0">module\_id</span>=<span class="st0">"0"</span> <span
class="re0">tab\_id</span>=<span class="st0">"0"</span> <span
class="re0">mobile\_row</span>=<span class="st0">"0"</span> <span
class="re0">mobile\_zipped</span>=<span class="st0">"1"</span></span>\
 <span class="sc3">           <span class="re0">row</span>=<span
class="st0">"0"</span> <span class="re0">section</span>=<span
class="st0">"0"</span> <span class="re2">\></span></span>\
     <span class="sc3"><span class="re1">\<forecast\_information<span
class="re2">\></span></span></span>\
       <span class="sc3"><span class="re1">\<city</span> <span
class="re0">data</span>=<span class="st0">"Minneapolis, MN"</span><span
class="re2">/\></span></span>\
       <span class="sc3"><span class="re1">\<postal\_code</span> <span
class="re0">data</span>=<span class="st0">"Minneapolis"</span><span
class="re2">/\></span></span>\
       <span class="sc3"><span class="re1">\<latitude\_e6</span> <span
class="re0">data</span>=<span class="st0">""</span><span
class="re2">/\></span></span>\
       <span class="sc3"><span class="re1">\<longitude\_e6</span> <span
class="re0">data</span>=<span class="st0">""</span><span
class="re2">/\></span></span>\
       <span class="sc3"><span class="re1">\<forecast\_date</span> <span
class="re0">data</span>=<span class="st0">"2011-11-19"</span><span
class="re2">/\></span></span>\
       <span class="sc3"><span class="re1">\<current\_date\_time</span>
<span class="re0">data</span>=<span class="st0">"2011-11-20
01:53:00 +0000"</span><span class="re2">/\></span></span>\
       <span class="sc3"><span class="re1">\<unit\_system</span> <span
class="re0">data</span>=<span class="st0">"US"</span><span
class="re2">/\></span></span>\
     <span class="sc3"><span class="re1">\</forecast\_information<span
class="re2">\></span></span></span>\
     <span class="sc3"><span class="re1">\<current\_conditions<span
class="re2">\></span></span></span>\
       <span class="sc3"><span class="re1">\<condition</span> <span
class="re0">data</span>=<span class="st0">"Light snow"</span><span
class="re2">/\></span></span>\
       <span class="sc3"><span class="re1">\<temp\_f</span> <span
class="re0">data</span>=<span class="st0">"27"</span><span
class="re2">/\></span></span>\
       <span class="sc3"><span class="re1">\<temp\_c</span> <span
class="re0">data</span>=<span class="st0">"-3"</span><span
class="re2">/\></span></span>\
       <span class="sc3"><span class="re1">\<humidity</span> <span
class="re0">data</span>=<span class="st0">"Humidity: 81%"</span><span
class="re2">/\></span></span>\
       <span class="sc3"><span class="re1">\<icon</span> <span
class="re0">data</span>=<span
class="st0">"/ig/images/weather/flurries.gif"</span><span
class="re2">/\></span></span>\
       <span class="sc3"><span class="re1">\<wind\_condition</span>
<span class="re0">data</span>=<span class="st0">"Wind: NW at 10
mph"</span><span class="re2">/\></span></span>\
     <span class="sc3"><span class="re1">\</current\_conditions<span
class="re2">\></span></span></span>\
     <span class="sc3"><span class="re1">\<forecast\_conditions<span
class="re2">\></span></span></span>\
       <span class="sc3"><span class="re1">\<day\_of\_week</span> <span
class="re0">data</span>=<span class="st0">"Sat"</span><span
class="re2">/\></span></span>\
       <span class="sc3"><span class="re1">\<low</span> <span
class="re0">data</span>=<span class="st0">"16"</span><span
class="re2">/\></span></span>\
       <span class="sc3"><span class="re1">\<high</span> <span
class="re0">data</span>=<span class="st0">"32"</span><span
class="re2">/\></span></span>\
       <span class="sc3"><span class="re1">\<icon</span> <span
class="re0">data</span>=<span
class="st0">"/ig/images/weather/snow.gif"</span><span
class="re2">/\></span></span>\
       <span class="sc3"><span class="re1">\<condition</span> <span
class="re0">data</span>=<span class="st0">"Snow"</span><span
class="re2">/\></span></span>\
     <span class="sc3"><span class="re1">\</forecast\_conditions<span
class="re2">\></span></span></span>\
     <span class="sc3"><span class="re1">\<forecast\_conditions<span
class="re2">\></span></span></span>\
       <span class="sc3"><span class="re1">\<day\_of\_week</span> <span
class="re0">data</span>=<span class="st0">"Sun"</span><span
class="re2">/\></span></span>\
       <span class="sc3"><span class="re1">\<low</span> <span
class="re0">data</span>=<span class="st0">"25"</span><span
class="re2">/\></span></span>\
       <span class="sc3"><span class="re1">\<high</span> <span
class="re0">data</span>=<span class="st0">"27"</span><span
class="re2">/\></span></span>\
       <span class="sc3"><span class="re1">\<icon</span> <span
class="re0">data</span>=<span
class="st0">"/ig/images/weather/mostly\_sunny.gif"</span><span
class="re2">/\></span></span>\
       <span class="sc3"><span class="re1">\<condition</span> <span
class="re0">data</span>=<span class="st0">"Mostly Sunny"</span><span
class="re2">/\></span></span>\
     <span class="sc3"><span class="re1">\</forecast\_conditions<span
class="re2">\></span></span></span>\
     <span class="sc3"><span class="re1">\<forecast\_conditions<span
class="re2">\></span></span></span>\
       <span class="sc3"><span class="re1">\<day\_of\_week</span> <span
class="re0">data</span>=<span class="st0">"Mon"</span><span
class="re2">/\></span></span>\
       <span class="sc3"><span class="re1">\<low</span> <span
class="re0">data</span>=<span class="st0">"20"</span><span
class="re2">/\></span></span>\
       <span class="sc3"><span class="re1">\<high</span> <span
class="re0">data</span>=<span class="st0">"36"</span><span
class="re2">/\></span></span>\
       <span class="sc3"><span class="re1">\<icon</span> <span
class="re0">data</span>=<span
class="st0">"/ig/images/weather/mostly\_sunny.gif"</span><span
class="re2">/\></span></span>\
       <span class="sc3"><span class="re1">\<condition</span> <span
class="re0">data</span>=<span class="st0">"Mostly Sunny"</span><span
class="re2">/\></span></span>\
     <span class="sc3"><span class="re1">\</forecast\_conditions<span
class="re2">\></span></span></span>\
     <span class="sc3"><span class="re1">\<forecast\_conditions<span
class="re2">\></span></span></span>\
       <span class="sc3"><span class="re1">\<day\_of\_week</span> <span
class="re0">data</span>=<span class="st0">"Tue"</span><span
class="re2">/\></span></span>\
       <span class="sc3"><span class="re1">\<low</span> <span
class="re0">data</span>=<span class="st0">"25"</span><span
class="re2">/\></span></span>\
       <span class="sc3"><span class="re1">\<high</span> <span
class="re0">data</span>=<span class="st0">"38"</span><span
class="re2">/\></span></span>\
       <span class="sc3"><span class="re1">\<icon</span> <span
class="re0">data</span>=<span
class="st0">"/ig/images/weather/mostly\_sunny.gif"</span><span
class="re2">/\></span></span>\
       <span class="sc3"><span class="re1">\<condition</span> <span
class="re0">data</span>=<span class="st0">"Mostly Sunny"</span><span
class="re2">/\></span></span>\
   <span class="sc3"><span class="re1">\</forecast\_conditions<span
class="re2">\></span></span><span class="re1">\</weather<span
class="re2">\></span></span></span>\
 <span class="sc3"><span class="re1">\</xml\_api\_reply<span
class="re2">\></span></span></span>

</div>

</div>

<div class="sourceblocklink">

</div>

</div>

A real simple script to get the current conditions:

<div class="vspace">

</div>

<div id="sourceblock2" class="sourceblock">

<div class="sourceblocktext">

<div class="perl">

1.  <div class="de1">

    <span class="kw2">use</span> strict<span class="sy0">;</span>

    </div>

2.  <div class="de1">

    <span class="kw2">use</span> XML<span class="sy0">::</span><span
    class="me2">Simple</span><span class="sy0">;</span>

    </div>

3.  <div class="de1">

    <span class="kw2">use</span> URI<span class="sy0">::</span><span
    class="me2">Escape</span><span class="sy0">;</span>

    </div>

4.  <div class="de1">

     

    </div>

5.  <div class="de2">

    <span class="kw2">use</span> constant DEFAULT\_CITY <span
    class="sy0">=\></span> <span class="st_h">'Minneapolis'</span><span
    class="sy0">;</span>

    </div>

6.  <div class="de1">

     

    </div>

7.  <div class="de1">

    <span class="kw2">use</span> Getopt<span class="sy0">::</span><span
    class="me2">Mixed</span><span class="sy0">::</span><span
    class="me2">Help</span><span class="br0">(</span>

    </div>

8.  <div class="de1">

        <span class="st_h">'c\>city:s city'</span> <span
    class="sy0">=\></span> <span class="st0">"City to look up weather
    for"</span>

    </div>

9.  <div class="de1">

        <span class="br0">)</span><span class="sy0">;</span>

    </div>

10. <div class="de2">

     

    </div>

11. <div class="de1">

    <span class="kw1">my</span> <span class="re0">\$city</span> <span
    class="sy0">=</span> <span class="re0">\$opt\_city</span><span
    class="sy0">;</span>

    </div>

12. <div class="de1">

    <span class="kw1">my</span> <span class="re0">\$url</span> <span
    class="sy0">=</span> <span
    class="st0">"http://www.google.com/ig/api?weather="</span> <span
    class="sy0">.</span> uri\_escape<span class="br0">(</span><span
    class="re0">\$city</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

13. <div class="de1">

    <span class="kw1">my</span> <span class="re0">\$curlcmd</span> <span
    class="sy0">=</span> <span class="st0">"curl -s \$url"</span><span
    class="sy0">;</span>

    </div>

14. <div class="de1">

    <span class="kw1">my</span> <span class="re0">\$weather\_xml</span>
    <span class="sy0">=</span> <span
    class="st0">\`\$curlcmd\`</span><span class="sy0">;</span>

    </div>

15. <div class="de2">

    <span class="kw1">my</span> <span class="re0">\$w</span> <span
    class="sy0">=</span> XMLin<span class="br0">(</span><span
    class="re0">\$weather\_xml</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

16. <div class="de1">

     

    </div>

17. <div class="de1">

    <span class="kw3">printf</span><span class="br0">(</span><span
    class="st0">"Current conditions for %s on %s:</span>

    </div>

18. <div class="de1">

    <span class="st0">Temp: %s F (%s C)</span>

    </div>

19. <div class="de1">

    <span class="st0">Wind: %s</span>

    </div>

20. <div class="de2">

    <span class="st0">Humidity: %s</span>

    </div>

21. <div class="de1">

    <span class="st0">Sky: %s</span>

    </div>

22. <div class="de1">

    <span class="st0">"</span><span class="sy0">,</span>

    </div>

23. <div class="de1">

           <span class="re0">\$w</span><span class="sy0">-\></span><span
    class="br0">{</span>weather<span class="br0">}</span><span
    class="sy0">-\></span><span
    class="br0">{</span>forecast\_information<span
    class="br0">}</span><span class="sy0">-\></span><span
    class="br0">{</span>city<span class="br0">}</span><span
    class="sy0">-\></span><span class="br0">{</span>data<span
    class="br0">}</span><span class="sy0">,</span>

    </div>

24. <div class="de1">

           <span class="re0">\$w</span><span class="sy0">-\></span><span
    class="br0">{</span>weather<span class="br0">}</span><span
    class="sy0">-\></span><span
    class="br0">{</span>forecast\_information<span
    class="br0">}</span><span class="sy0">-\></span><span
    class="br0">{</span>forecast\_date<span class="br0">}</span><span
    class="sy0">-\></span><span class="br0">{</span>data<span
    class="br0">}</span><span class="sy0">,</span>

    </div>

25. <div class="de2">

           <span class="re0">\$w</span><span class="sy0">-\></span><span
    class="br0">{</span>weather<span class="br0">}</span><span
    class="sy0">-\></span><span
    class="br0">{</span>current\_conditions<span
    class="br0">}</span><span class="sy0">-\></span><span
    class="br0">{</span>temp\_f<span class="br0">}</span><span
    class="sy0">-\></span><span class="br0">{</span>data<span
    class="br0">}</span><span class="sy0">,</span>

    </div>

26. <div class="de1">

           <span class="re0">\$w</span><span class="sy0">-\></span><span
    class="br0">{</span>weather<span class="br0">}</span><span
    class="sy0">-\></span><span
    class="br0">{</span>current\_conditions<span
    class="br0">}</span><span class="sy0">-\></span><span
    class="br0">{</span>temp\_c<span class="br0">}</span><span
    class="sy0">-\></span><span class="br0">{</span>data<span
    class="br0">}</span><span class="sy0">,</span>

    </div>

27. <div class="de1">

           <span class="re0">\$w</span><span class="sy0">-\></span><span
    class="br0">{</span>weather<span class="br0">}</span><span
    class="sy0">-\></span><span
    class="br0">{</span>current\_conditions<span
    class="br0">}</span><span class="sy0">-\></span><span
    class="br0">{</span>wind\_condition<span class="br0">}</span><span
    class="sy0">-\></span><span class="br0">{</span>data<span
    class="br0">}</span><span class="sy0">,</span>

    </div>

28. <div class="de1">

           <span class="re0">\$w</span><span class="sy0">-\></span><span
    class="br0">{</span>weather<span class="br0">}</span><span
    class="sy0">-\></span><span
    class="br0">{</span>current\_conditions<span
    class="br0">}</span><span class="sy0">-\></span><span
    class="br0">{</span>humidity<span class="br0">}</span><span
    class="sy0">-\></span><span class="br0">{</span>data<span
    class="br0">}</span><span class="sy0">,</span>

    </div>

29. <div class="de1">

           <span class="re0">\$w</span><span class="sy0">-\></span><span
    class="br0">{</span>weather<span class="br0">}</span><span
    class="sy0">-\></span><span
    class="br0">{</span>current\_conditions<span
    class="br0">}</span><span class="sy0">-\></span><span
    class="br0">{</span>condition<span class="br0">}</span><span
    class="sy0">-\></span><span class="br0">{</span>data<span
    class="br0">}</span>

    </div>

30. <div class="de2">

        <span class="br0">)</span><span class="sy0">;</span>

    </div>

31. <div class="de1">

     

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.GoogleWeatherApi?action=sourceblock&num=2)

</div>

</div>

Prints on stdout:

<div class="vspace">

</div>

``` {.escaped}
Current conditions for Minneapolis, MN on 2011-11-19:
Temp: 27 F (-3 C)
Wind: Wind: NW at 10 mph
Humidity: Humidity: 81%
Sky: Light snow
```

<div class="vspace">

</div>

</div>
