<div id="wikitext">

<div id="sourceblock1" class="sourceblock">

<div class="sourceblocktext">

<div class="email">

<span class="sc0"><span class="kw3">From</span><span
class="sy0">:</span>   <span
class="re2">owner-monkeyjunkies@wired.com</span> on behalf of Tamara
Temple</span>\
 <span class="sc0">Sent<span class="sy0">:</span>   Thursday, November
26, 1998 3<span class="sy0">:</span>11 AM </span>\
 <span class="sc0"><span class="kw3">To</span><span class="sy0">:</span>
    <span class="re2">monkeyjunkies@wired.com</span></span>\
 <span class="sc0"><span class="kw3">Subject</span><span
class="sy0">:</span>        RE<span class="sy0">:</span> <span
class="sy0">[</span>mj<span class="sy0">]</span> CGI.pm Multi-Part
Forms, sendmail attachments</span>\
\
 <span class="sc0"> <span class="sy0">\></span> 'Gotta' agree <span
class="kw4">with</span> Alan \`McCoy's <span
class="sy0">\<</span>objunky<span class="sy0">\></span> regarding
CGI.pm!</span>\
\
 me too me too!\
\
  \> I've got a form set up just fine, but i'd also like to allow the
user\
  \> to upload a file that would ideally be sent along as an attachment\
  \> with the sendmail portion of the script i'm using on the page.\
\
 umm -- isn't this explained in the CGI.pm Pod?  'Creating a File
Upload\
 Field' describes how to do this:\
\
\
   print \$q-\>start\_multipart\_form(),\
                   \$q-\>filefield(-name='uploadfile',-size='50'),\
                   \$q-\>endform;\
\
\
 and you process the file. If you're expecting binary (or you don't know
what\
 to expect), then process the file using binary reads:\
\
\
   \$filename = \$q-\>param('uploadfile');\
   open OUT '\>/tmp/safe/place/to/store/files.bin';\
   while (\$bytesrd=read(\$filename,\$buffer,1024)) {\
           print OUT \$buffer;\
   }\
   close OUT;\
\
\
 and now you can continue to futz with the file all you want.

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.MultiPartFormsAndFileUploading?action=sourceblock&num=1)

</div>

</div>

<div class="vspace">

</div>

</div>
