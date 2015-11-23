<div id="wikitext">

<div style="display: none;">

Summary:Notes about how to connect with gmail via IMAP using Ruby
Parent:(Technology.)Ruby <span
class="wikiword">[IncludeMe](http://wiki.tamouse.org?n=Technology.IncludeMe?action=edit)[?](http://wiki.tamouse.org?n=Technology.IncludeMe?action=edit)</span>:[Ruby](http://wiki.tamouse.org?n=Technology.Ruby?action=print)
Categories:[HowTos](http://wiki.tamouse.org?n=Category.HowTos) Tags:
ruby, gmail, imap, howtos

</div>

<span id="excerpt"></span> I've been moving my mail handling away from
the [gmail](http://gmail.com) web site because Google broke my mail
workflow. I'm now using fetchmail to pull over mail in real time. I
wanted to be able to access the folders in gmail as well, and was
casting about for a way to do that. None of the gems seemed workable, so
I decide to start experimenting with
[Net::IMAP](http://www.ruby-doc.org/stdlib-2.0/libdoc/net/imap/rdoc/Net/IMAP.html)
in the standard ruby library. <span id="excerptend"></span>

<div class="vspace">

</div>

Setting up a connection to gmail
--------------------------------

Actually, this was real simple, thanks to [this blog
post](http://blog.ethanvizitei.com/2008/06/using-ruby-for-imap-with-gmail.html),
which gives the final answer at the end.

<div class="vspace">

</div>

<div id="sourceblock1" class="sourceblock">

<div class="sourceblocktext">

<div class="ruby">

1.  <div class="de1">

    gmail = <span class="re2">Net::IMAP</span>.<span
    class="me1">new</span><span class="br0">(</span><span
    class="st0">'imap.gmail.com'</span>, <span class="re3">:port</span>
    <span class="sy0">=\></span> <span class="nu0">993</span>, <span
    class="re3">:ssl</span> <span class="sy0">=\></span> <span
    class="kw2">true</span><span class="br0">)</span>

    </div>

2.  <div class="de1">

    gmail.<span class="me1">login</span><span
    class="br0">(</span>username, password<span class="br0">)</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.GmailImapWithRuby?action=sourceblock&num=1)

</div>

</div>

And we're connected.

<div class="vspace">

</div>

What folders are in my gmail account?
-------------------------------------

This took a bit of reading and re-reading to figure out, but it's
actually more straight-forward than it seems.

The
[`#list`{.escaped}](http://www.ruby-doc.org/stdlib-2.0/libdoc/net/imap/rdoc/Net/IMAP.html#method-i-list)
method is what we're looking for:

<div class="vspace">

</div>

<div id="sourceblock2" class="sourceblock">

<div class="sourceblocktext">

<div class="ruby">

1.  <div class="de1">

    all\_folders = gmail.<span class="me1">list</span> <span
    class="st0">'/'</span>, <span class="st0">'\*'</span>

    </div>

2.  <div class="de1">

    pp all\_folders.<span class="me1">map</span><span
    class="br0">(</span><span class="sy0">&</span>:name<span
    class="br0">)</span>

    </div>

3.  <div class="de1">

    <span class="br0">[</span><span class="st0">"Apple Mail To
    Do"</span>,

    </div>

4.  <div class="de1">

     <span class="st0">"Business"</span>,

    </div>

5.  <div class="de2">

     <span class="st0">"Career"</span>,

    </div>

6.  <div class="de1">

     <span class="st0">"Career/HPAA Jobs"</span>,

    </div>

7.  <div class="de1">

     <span class="co1">\# ...snippy </span>

    </div>

8.  <div class="de1">

     <span class="st0">"Tech General"</span>,

    </div>

9.  <div class="de1">

     <span class="st0">"Tech General/AWS Stuff"</span>,

    </div>

10. <div class="de2">

     <span class="co1">\# ...snippy</span>

    </div>

11. <div class="de1">

     <span class="st0">"Tech General/PHP-General"</span>,

    </div>

12. <div class="de1">

     <span class="st0">"Tech General/PmWiki"</span>,

    </div>

13. <div class="de1">

     <span class="co1">\# ...snippy</span>

    </div>

14. <div class="de1">

     <span class="st0">"[Gmail]"</span>,

    </div>

15. <div class="de2">

     <span class="st0">"[Gmail]/All Mail"</span>,

    </div>

16. <div class="de1">

     <span class="st0">"[Gmail]/Archive"</span><span
    class="br0">]</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.GmailImapWithRuby?action=sourceblock&num=2)

</div>

</div>

<div class="vspace">

</div>

### Validating folder names

<div class="round lrindent important2">

When you get all the folders like this, you have to be careful. If you
have a folder that includes a forward slassh (/) in the name, the way
the list method works assumes there is a parent folder for each element
delimeted by the slash(es). If this isn't the case, methods that use the
folder (mailbox in IMAP parlance) will throw an exception:
`Net::IMAP::NoResponseError`{.escaped}, so wrap whatever you're doing in
a `begin-rescue`{.escaped} block.

</div>

<div class="vspace">

</div>

<div id="sourceblock3" class="sourceblock">

<div class="sourceblocktext">

<div class="ruby">

<div class="head">

Checking if this folder is valid

</div>

1.  <div class="de1">

    <span class="kw1">def</span> valid\_folder?<span
    class="br0">(</span>folder<span class="br0">)</span>

    </div>

2.  <div class="de1">

        <span class="kw1">begin</span>

    </div>

3.  <div class="de1">

          gmail.<span class="me1">examine</span><span
    class="br0">(</span>folder<span class="br0">)</span>

    </div>

4.  <div class="de1">

          <span class="kw2">true</span>

    </div>

5.  <div class="de2">

        <span class="kw1">rescue</span> <span
    class="re2">Net::IMAP::NoResponseError</span> <span
    class="sy0">=\></span> e

    </div>

6.  <div class="de1">

          <span class="kw1">if</span> <span class="br0">(</span>e.<span
    class="me1">to\_s</span> =\~ <span class="sy0">/</span>Invalid
    folder<span class="sy0">/</span><span class="br0">)</span> <span
    class="sy0">||</span> <span class="br0">(</span>e.<span
    class="me1">to\_s</span> =\~ <span class="sy0">/</span>Unknown
    Mailbox<span class="sy0">/</span><span class="br0">)</span>

    </div>

7.  <div class="de1">

            <span class="kw2">false</span>

    </div>

8.  <div class="de1">

          <span class="kw1">else</span>

    </div>

9.  <div class="de1">

            <span class="kw3">raise</span> e

    </div>

10. <div class="de2">

          <span class="kw1">end</span>

    </div>

11. <div class="de1">

        <span class="kw1">end</span>      

    </div>

12. <div class="de1">

    <span class="kw1">end</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.GmailImapWithRuby?action=sourceblock&num=3)

</div>

</div>

<div class="vspace">

</div>

Choosing a folder
-----------------

Again, easily done with the
[`#select`{.escaped}](http://www.ruby-doc.org/stdlib-2.0/libdoc/net/imap/rdoc/Net/IMAP.html#method-i-select)
method, simply give it the name of the folder snagged from the list
above:

<div class="vspace">

</div>

<div id="sourceblock4" class="sourceblock">

<div class="sourceblocktext">

<div class="ruby">

1.  <div class="de1">

    folder = gmail.<span class="kw3">select</span><span
    class="br0">(</span><span class="st0">"Tech General"</span><span
    class="br0">)</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.GmailImapWithRuby?action=sourceblock&num=4)

</div>

</div>

Alternatively, if you are only going to read from the folder, use the
[`#examine`{.escaped}](http://www.ruby-doc.org/stdlib-2.0/libdoc/net/imap/rdoc/Net/IMAP.html#method-i-examine)
method:

<div class="vspace">

</div>

<div id="sourceblock5" class="sourceblock">

<div class="sourceblocktext">

<div class="ruby">

1.  <div class="de1">

    folder = gmail.<span class="me1">examine</span><span
    class="br0">(</span><span class="st0">"Tech General"</span><span
    class="br0">)</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.GmailImapWithRuby?action=sourceblock&num=5)

</div>

</div>

<div class="vspace">

</div>

Getting the number of messages in a folder
------------------------------------------

To retrieve the number of messages in a folder, you use the method. The
`#status`{.escaped} method takes two arguments, the folder name, and an
array of the kinds of status you want. To just get a count of all the
messages, use the `"MESSAGES"`{.escaped} key:

<div class="vspace">

</div>

<div id="sourceblock6" class="sourceblock">

<div class="sourceblocktext">

<div class="ruby">

1.  <div class="de1">

    gmail.<span class="me1">status</span><span class="br0">(</span><span
    class="st0">"Tech General"</span>, <span class="br0">[</span><span
    class="st0">"MESSAGES"</span><span class="br0">]</span><span
    class="br0">)</span><span class="br0">[</span><span
    class="st0">"MESSAGES"</span><span class="br0">]</span> <span
    class="co1">\# =\> 115</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.GmailImapWithRuby?action=sourceblock&num=6)

</div>

</div>

<div class="vspace">

</div>

Fetching messages
-----------------

Fetching messages is a little tricky. In the very good stackoverflow.com
question ["How to read the body text of an email using Ruby's Net::IMAP
library](http://stackoverflow.com/questions/1101101/how-to-read-the-body-text-of-an-email-using-rubys-net-imap-library),
in the answers that talk about using the gem:

<div class="vspace">

</div>

<div id="sourceblock7" class="sourceblock">

<div class="sourceblocktext">

<div class="ruby">

1.  <div class="de1">

    <span class="kw3">require</span> <span class="st0">'mail'</span>

    </div>

2.  <div class="de1">

     

    </div>

3.  <div class="de1">

    mail = Mail.<span class="me1">read\_from\_string</span><span
    class="br0">(</span>gmail.<span class="me1">fetch</span><span
    class="br0">(</span><span class="sy0">-</span><span
    class="nu0">1</span>,<span class="st0">'RFC822'</span><span
    class="br0">)</span>.<span class="me1">first</span>.<span
    class="me1">attr</span><span class="br0">[</span><span
    class="st0">'RFC822'</span><span class="br0">]</span><span
    class="br0">)</span> <span class="co1">\# retrieves the last
    email</span>

    </div>

4.  <div class="de1">

    body = mail.<span class="me1">body</span>

    </div>

5.  <div class="de2">

    from = mail.<span class="me1">from</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.GmailImapWithRuby?action=sourceblock&num=7)

</div>

</div>

</div>
