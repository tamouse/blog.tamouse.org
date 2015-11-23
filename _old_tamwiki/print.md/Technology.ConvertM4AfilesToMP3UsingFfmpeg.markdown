<div id="wikitext">

<span id="excerpt"></span>
[ffmpeg](http://wiki.tamouse.org?n=Technology.FfMpeg?action=print) makes
converting from Apple's proprietary M4A format to MP3 format simple:
<span id="excerptend"></span>

<div class="vspace">

</div>

<div id="sourceblock1" class="sourceblock">

<div class="sourceblocktext">

<div class="bash">

<span class="kw2">ffmpeg</span> <span class="re5">-i</span> song.m4a
<span class="re5">-ab</span> <span
class="nu0">128000</span> -map\_meta\_data <span
class="nu0">0</span>:<span class="nu0">0</span> song.mp3

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.ConvertM4AfilesToMP3UsingFfmpeg?action=sourceblock&num=1)

</div>

</div>

Parameters:

<div class="vspace">

</div>

-i file
:   Specifies the input file

-ab bitrate
:   Specifies the bitrate for the output file in bits per second. 128000
    give 128kbps in the output file

-map\_meta\_data output:input
:   Writes the metadata from the input stream to the output stream.
    Specifying 0:0 copies the global meta data from the input file into
    the output file

<div class="vspace">

</div>

Different on OS/X!
------------------

Of course, `ffmpeg`{.escaped} is different on OS/X. The above works on
Debian-based ffmpeg.

<div class="vspace">

</div>

<div id="sourceblock2" class="sourceblock">

<div class="sourceblocktext">

<div class="bash">

<span class="kw2">ffmpeg</span> <span class="re5">-i</span> song.m4a
<span class="re5">-ab</span> <span
class="nu0">128000</span> -map\_metadata:s:<span class="nu0">0</span>
<span class="nu0">0</span>:g song.mp3

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.ConvertM4AfilesToMP3UsingFfmpeg?action=sourceblock&num=2)

</div>

</div>

<div class="vspace">

</div>

-map\_metadata
:   *notice no underscore between meta and data!*. The `:s:0`{.escaped}
    means to read the global metadata and `0:g`{.escaped} means copy it
    to all tracks of the output file.

<div class="vspace">

</div>

<div style="display: none;">

This goes at the bottom of the page, hidden by comment block class
Summary:a simple method to convert between Apple's proprietary M4A
format to MP3 format Parent:(Technology.)<span
class="wikiword">[FfMpeg](http://wiki.tamouse.org?n=Technology.FfMpeg?action=print)</span>
<span
class="wikiword">[IncludeMe](http://wiki.tamouse.org?n=Technology.IncludeMe?action=edit)[?](http://wiki.tamouse.org?n=Technology.IncludeMe?action=edit)</span>:[Technology.FfMpeg](http://wiki.tamouse.org?n=Technology.FfMpeg?action=print)
Categories:[HowTos](http://wiki.tamouse.org?n=Category.HowTos) Tags:
conversion, ffmpeg, m4a, mp3

</div>

</div>
