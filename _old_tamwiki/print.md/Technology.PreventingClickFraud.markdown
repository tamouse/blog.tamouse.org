<div id="wikitext">

<div class="vspace">

</div>

<div id="sourceblock1" class="sourceblock">

<div class="sourceblocktext">

<div class="email">

<span class="sc0"><span class="kw3">Date</span><span
class="sy0">:</span> <span class="re3">Sun, 01 Jan 2012 <span
class="re4">19:08:46</span> +0000</span> <span
class="sy0">[</span>2012-01-01 <span class="re4">01:08:46</span> PM
CST<span class="sy0">]</span></span>\
 <span class="sc0"><span class="kw3">From</span><span
class="sy0">:</span> Ashley Sheridan <span class="sy0">\<</span>ash
<span class="sy0">[</span>snail<span class="sy0">]</span>
ashleysheridan.co.uk<span class="sy0">\></span></span>\
 <span class="sc0"><span class="kw3">Subject</span><span
class="sy0">:</span> Re<span class="sy0">:</span> <span
class="sy0">[</span>PHP<span class="sy0">]</span> count clicks to count
most important news </span>\
\
 On Sun, 2012-01-01 at 11:49 -0500, Tedd Sperling wrote:\
 \> On Jan 1, 2012, at 11:26 AM, muad shibani wrote:\
 \> \> I have a website that posts the most important news according\
 \> \> to the number\
 \> \> of clicks to that news\
 \> \> the question is : what is the best  way to prevent multiple\
 \> \> clicks from the  \
 \> \> same visitor?\
 \>\
 \> Not a fool-proof method, but use Javascript on the client-side\
 \> to stop users' from continuous clicking.\
 \>\
 \> Then create a token and verify the click on the server-side\
 \> before considering the click as being acceptable.\
 \>\
 \> Cheers,\
 \>\
 \> tedd\
 \>\
 \> \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\
 \> tedd [snail] sperling.com\
 \> http://sperling.com\
\
 There are still problems with this, GET data (which\
 essentially only what a clicked link would produce if you\
 leave Javascript out the equation - you can't rely on\
 Javascript) shouldn't be used to trigger a change on the\
 server (in your case a counter increment)\
\
 I did something similar for a competition site a few years\
 ago, and stupidly didn't think about this at the\
 time. Someone ended up gaming the system by including an\
 image with the clicked-through URL in the src attribute, and\
 put that on their MySpace profile page, which had more than\
 a few visitors. Each of those visitors browser attempted to\
 grab that "image" which registered a click, and because of\
 the number of unique visitors, the clicks were registered as\
 genuine.\
\
 I'd recommend using POST data for this reason, as it's a lot\
 more difficult for people to game.\
\
 --\
 Thanks,\
 Ash\
 <span class="sc0">http<span
class="sy0">:</span>//www.ashleysheridan.co.uk</span>

</div>

</div>

<div class="sourceblocklink">

</div>

</div>

And the next message goes further:

<div class="vspace">

</div>

<div id="sourceblock2" class="sourceblock">

<div class="sourceblocktext">

<div class="email">

<span class="sc0"><span class="kw3">Date</span><span
class="sy0">:</span> <span class="re3">Sun, 01 Jan 2012 <span
class="re4">21:02:56</span> +0100</span> <span
class="sy0">[</span>2012-01-01 <span class="re4">02:02:56</span> PM
CST<span class="sy0">]</span></span>\
 <span class="sc0"><span class="kw3">From</span><span
class="sy0">:</span> Maciek Sokolewicz <span
class="sy0">\<</span>maciek.sokolewicz<span
class="sy0">[</span>snail<span class="sy0">]</span>gmail.com<span
class="sy0">\></span></span>\
 <span class="sc0"><span class="kw3">Subject</span><span
class="sy0">:</span> Re<span class="sy0">:</span> <span
class="sy0">[</span>PHP<span class="sy0">]</span> count clicks to count
most important news </span>\
\
 On 01-01-2012 20:08, Ashley Sheridan wrote:\
 [....snipped....]\
\
 I agree, POST data is indeed the way to go here. Personally,\
 I would use a "like" image-like thing which is actually a\
 button, using some clever javascript (personally I would use\
 jquery for this) you can then POST data to the server based\
 on the click. Then set a cookie which disables the button\
 (and keeps it disabled on future visits). This should\
 prevent average person from repeatedly clicking it. You\
 could also log the person's IP adress and filter based on\
 that aswell; combining various methods would be best in this\
 case I think.\
\
 To prevent the method which Ashley mentioned, using POST\
 data isn't enough. You would want to guarantee that the link\
 came from YOUR server instead of some different place.\
 There are multiple ways to do this:\
\
 - use a unique key as an argument in the POST which can only\
 be "clicked" once. Register the key in a database before\
 serving the page, and then unregister it once it has been\
 served and clicked. Though if a person were to repeatedly\
 open the page, your cache would be exhausted, and the method\
 would become useless.\
\
 - require a referrer address to come from your domain; also\
 reasonably easily circumvented in this case\
\
 - there are more, but it really depends on how much effort\
 you want to put into preventing attacks and how much effort\
 you expect others to put into attacking it. For example,\
 large sites like youtube are sure to use extensive measures\
 to prevent people from spam-clicking in any way. While sites\
 that only cater to say 3 visitors a month don't require all\
 that effort in the first place.\
\
 Hope that helps,\
 - Tul

</div>

</div>

<div class="sourceblocklink">

</div>

</div>

And yet more information about this:

<div class="vspace">

</div>

<div id="sourceblock3" class="sourceblock">

<div class="sourceblocktext">

<div class="email">

<span class="sc0"><span class="kw3">Date</span><span
class="sy0">:</span> <span class="re3">Sun, 1 Jan 2012 <span
class="re4">20:10:26</span> +0000</span> <span
class="sy0">[</span>2012-01-01 <span class="re4">02:10:26</span> PM
CST<span class="sy0">]</span></span>\
 <span class="sc0"><span class="kw3">From</span><span
class="sy0">:</span> Stuart Dallas <span
class="sy0">\<</span>stuart<span class="sy0">[</span>snail<span
class="sy0">]</span>3ft9.com<span class="sy0">\></span></span>\
 <span class="sc0"><span class="kw3">Subject</span><span
class="sy0">:</span> Re<span class="sy0">:</span> <span
class="sy0">[</span>PHP<span class="sy0">]</span> count clicks to count
most important news </span>\
\
 On 1 Jan 2012, at 16:26, muad shibani wrote:\
 \> I have a website that posts the most important news\
 \> according to the number of clicks to that news the\
 \> question is : what is the best way to prevent multiple\
 \> clicks from the same visitor?\
\
 I'm assuming this is not a voting system, and the news items\
 you're counting are sourced from your own site and, with all\
 due respect to Ash, unlikely to be a target for false\
 clicks. All you're really wanting to do is prevent the site\
 from registering multiple hits from the same user in a short\
 period of time.\
\
 I would probably use memcached on the server-side to store\
 short-term information about clicks. When a news item is\
 loaded...\
\
 1) Construct the memcache key:\
    "newsclick\_\<article\_id\>\_\<ip\_address\>".\
\
 2) Fetch the key from memcache.\
\
 3a) If it does not exist, log the hit.\
\
 3b) If it does exist, compare time() with the value and only\
     log the hit if time() is greater.\
\
 4) Store the key with a value of time() + 300 and an expiry\
    of the same value.\
\
 This will prevent hits being logged for the same news item\
 from the same IP address within 5 minutes of other hits.\
\
 Other alternatives would be to use cookies (could get messy,\
 and not very reliable since it requires the response from\
 click 1 to be processed before click 2 gets started),\
 Javascript (as suggested by tedd but without the token - it\
 would work pretty well and would be a lot easier to\
 implement than the above, but you sacrifice having full\
 control over it).\
\
 If I'm interpreting the requirement correctly my solution is\
 almost certainly overkill, and a simple Javascript solution\
 would be more than sufficient.\
\
 -Stuart\
\
 --\
 Stuart Dallas\
 3ft9 Ltd\
 <span class="sc0">http<span class="sy0">:</span>//3ft9.com/</span>

</div>

</div>

<div class="sourceblocklink">

</div>

</div>

</div>
