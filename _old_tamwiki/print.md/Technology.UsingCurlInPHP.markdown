<div id="wikitext">

<span id="excerpt"></span> The `cURL` extension to PHP is a very useful
extension for retrieving web objects that you don't necessarily want to
deal with directly, such as retrieving files for storage and later use.
<span id="excerptend"></span>

cURL typically comes installed in many versions of PHP. Running
`phpinfo()` will tell you whether you've got cURL installed.

cURL has many
[options](http://us.php.net/manual/en/function.curl-setopt.php) to it.
Selecting the right options is important for using cURL effectively.

<div class="vspace">

</div>

An example
----------

Retrieving a file while following redirects:

<div class="vspace">

</div>

<div id="sourceblock1" class="sourceblock">

<div class="sourceblocktext">

<div class="php">

1.  <div class="de1">

    <span class="kw2">\<?php</span>

    </div>

2.  <div class="de1">

     

    </div>

3.  <div class="de1">

    <span class="kw3">define</span><span class="br0">(</span><span
    class="st_h">'TEMPDIR'</span><span class="sy0">,</span> <span
    class="st_h">'/tmp/'</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

4.  <div class="de1">

    <span class="kw3">define</span><span class="br0">(</span><span
    class="st_h">'IMAGEDIR'</span><span class="sy0">,</span> <span
    class="st_h">'/tmp/'</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

5.  <div class="de2">

    <span class="kw3">define</span><span class="br0">(</span><span
    class="st_h">'DEBUG'</span><span class="sy0">,</span> <span
    class="kw4">true</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

6.  <div class="de1">

     

    </div>

7.  <div class="de1">

    <span class="re0">\$image</span> <span class="sy0">=</span>
    pull\_image<span class="br0">(</span><span class="st_h">'Some \$misc
    //image//'</span><span class="sy0">,</span><span
    class="kw3">time</span><span class="br0">(</span><span
    class="br0">)</span><span class="sy0">,</span><span
    class="st0">"http://ttwiki/pub/skins/tarski/img/hdr/greytree.jpg"</span><span
    class="br0">)</span><span class="sy0">;</span>

    </div>

8.  <div class="de1">

    <span class="kw1">echo</span> <span class="st0">"<span
    class="es1">\\\$</span>image=<span class="es4">\$image</span><span
    class="es1">\\n</span>"</span><span class="sy0">;</span>

    </div>

9.  <div class="de1">

     

    </div>

10. <div class="de2">

    <span class="kw2">function</span> pull\_image<span
    class="br0">(</span><span class="re0">\$name</span><span
    class="sy0">,</span> <span class="re0">\$date</span><span
    class="sy0">,</span> <span class="re0">\$imguri</span><span
    class="br0">)</span>

    </div>

11. <div class="de1">

    <span class="br0">{</span>

    </div>

12. <div class="de1">

      <span class="kw1">if</span> <span class="br0">(</span>DEBUG<span
    class="br0">)</span> <span class="kw1">echo</span> <span
    class="st0">"<span class="es1">\\\$</span>name=<span
    class="es4">\$name</span>, <span class="es1">\\\$</span>date=<span
    class="es4">\$date</span>, <span class="es1">\\\$</span>imguri=<span
    class="es4">\$imguri</span><span class="es1">\\n</span>"</span><span
    class="sy0">;</span>

    </div>

13. <div class="de1">

      <span class="re0">\$ch</span> <span class="sy0">=</span> <span
    class="kw3">curl\_init</span><span class="br0">(</span><span
    class="br0">)</span><span class="sy0">;</span>

    </div>

14. <div class="de1">

      <span class="re0">\$fn</span> <span class="sy0">=</span> <span
    class="kw3">tempnam</span><span class="br0">(</span>TEMPDIR<span
    class="sy0">,</span> <span class="st0">"img"</span><span
    class="br0">)</span><span class="sy0">;</span> <span class="co1">//
    TEMPDIR defined elsewhere</span>

    </div>

15. <div class="de2">

      <span class="kw1">if</span> <span class="br0">(</span>DEBUG<span
    class="br0">)</span> <span class="kw1">echo</span> <span
    class="st0">"<span class="es1">\\\$</span>fn=<span
    class="es4">\$fn</span><span class="es1">\\n</span>"</span><span
    class="sy0">;</span>

    </div>

16. <div class="de1">

      <span class="re0">\$fh</span> <span class="sy0">=</span> <span
    class="kw3">fopen</span><span class="br0">(</span><span
    class="re0">\$fn</span><span class="sy0">,</span><span
    class="st_h">'w'</span><span class="br0">)</span><span
    class="sy0">;</span> <span class="co1">// file to contain
    page</span>

    </div>

17. <div class="de1">

      <span class="re0">\$hn</span> <span class="sy0">=</span> <span
    class="re0">\$fn</span> <span class="sy0">.</span> <span
    class="st_h">'.header'</span><span class="sy0">;</span>

    </div>

18. <div class="de1">

      <span class="kw1">if</span> <span class="br0">(</span>DEBUG<span
    class="br0">)</span> <span class="kw1">echo</span> <span
    class="st0">"<span class="es1">\\\$</span>hn=<span
    class="es4">\$hn</span><span class="es1">\\n</span>"</span><span
    class="sy0">;</span>

    </div>

19. <div class="de1">

      <span class="re0">\$hh</span> <span class="sy0">=</span> <span
    class="kw3">fopen</span><span class="br0">(</span><span
    class="re0">\$hn</span><span class="sy0">,</span><span
    class="st_h">'w'</span><span class="br0">)</span><span
    class="sy0">;</span> <span class="co1">// file to contain
    header</span>

    </div>

20. <div class="de2">

      <span class="re0">\$options</span> <span class="sy0">=</span>
    <span class="kw3">Array</span><span class="br0">(</span>

    </div>

21. <div class="de1">

           CURLOPT\_URL <span class="sy0">=\></span> <span
    class="re0">\$imguri</span><span class="sy0">,</span>

    </div>

22. <div class="de1">

           CURLOPT\_USERAGENT <span class="sy0">=\></span> <span
    class="st0">"Mozilla/5.0"</span><span class="sy0">,</span>

    </div>

23. <div class="de1">

           CURLOPT\_FILE <span class="sy0">=\></span> <span
    class="re0">\$fh</span><span class="sy0">,</span>

    </div>

24. <div class="de1">

           CURLOPT\_HEADER <span class="sy0">=\></span> <span
    class="kw4">false</span><span class="sy0">,</span>

    </div>

25. <div class="de2">

           CURLOPT\_WRITEHEADER <span class="sy0">=\></span> <span
    class="re0">\$hh</span><span class="sy0">,</span>

    </div>

26. <div class="de1">

           CURLOPT\_FOLLOWLOCATION <span class="sy0">=\></span> <span
    class="kw4">TRUE</span><span class="sy0">,</span>

    </div>

27. <div class="de1">

           CURLOPT\_MAXREDIRS <span class="sy0">=\></span> <span
    class="st_h">'10'</span>

    </div>

28. <div class="de1">

           <span class="br0">)</span><span class="sy0">;</span>

    </div>

29. <div class="de1">

      <span class="kw3">curl\_setopt\_array</span><span
    class="br0">(</span><span class="re0">\$ch</span><span
    class="sy0">,</span> <span class="re0">\$options</span><span
    class="br0">)</span><span class="sy0">;</span>

    </div>

30. <div class="de2">

      <span class="kw1">if</span> <span class="br0">(</span><span
    class="kw3">curl\_exec</span><span class="br0">(</span><span
    class="re0">\$ch</span><span class="br0">)</span> <span
    class="sy0">===</span> <span class="kw4">FALSE</span><span
    class="br0">)</span> <span class="br0">{</span>

    </div>

31. <div class="de1">

        <span class="kw3">die</span><span class="br0">(</span><span
    class="st0">"Unable to retrieve <span class="es4">\$imgurl</span>:
    "</span><span class="sy0">.</span><span
    class="kw3">curl\_error</span><span class="br0">(</span><span
    class="re0">\$ch</span><span class="br0">)</span><span
    class="sy0">.</span><span class="st0">"<span
    class="es1">\\n</span>"</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

32. <div class="de1">

      <span class="br0">}</span>

    </div>

33. <div class="de1">

      <span class="kw3">curl\_close</span><span
    class="br0">(</span><span class="re0">\$ch</span><span
    class="br0">)</span><span class="sy0">;</span>

    </div>

34. <div class="de1">

      <span class="kw3">fclose</span><span class="br0">(</span><span
    class="re0">\$fh</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

35. <div class="de2">

      <span class="kw3">fclose</span><span class="br0">(</span><span
    class="re0">\$hh</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

36. <div class="de1">

      <span class="kw1">if</span> <span class="br0">(</span><span
    class="kw3">file\_exists</span><span class="br0">(</span><span
    class="re0">\$fn</span><span class="br0">)</span><span
    class="br0">)</span> <span class="br0">{</span>

    </div>

37. <div class="de1">

        <span class="re0">\$ext</span> <span class="sy0">=</span>
    determine\_extension<span class="br0">(</span><span
    class="re0">\$fn</span><span class="sy0">,</span><span
    class="re0">\$hn</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

38. <div class="de1">

        <span class="kw1">if</span> <span class="br0">(</span><span
    class="kw4">false</span> <span class="sy0">===</span> <span
    class="re0">\$ext</span><span class="br0">)</span> <span
    class="br0">{</span>

    </div>

39. <div class="de1">

          <span class="kw3">die</span><span class="br0">(</span><span
    class="st0">"File retrieved <span class="es4">\$fn</span> is not an
    image type of file<span class="es1">\\n</span>"</span><span
    class="br0">)</span><span class="sy0">;</span>

    </div>

40. <div class="de2">

        <span class="br0">}</span>

    </div>

41. <div class="de1">

        <span class="re0">\$savefn</span> <span class="sy0">=</span>
    IMAGEDIR<span class="sy0">.</span><span
    class="kw3">preg\_replace</span><span class="br0">(</span><span
    class="st_h">'/[\^[:alnum:]]/'</span><span class="sy0">,</span><span
    class="st_h">''</span><span class="sy0">,</span><span
    class="re0">\$name</span><span class="br0">)</span><span
    class="sy0">.</span><span class="st0">"-"</span><span
    class="sy0">.</span><span class="kw3">date</span><span
    class="br0">(</span><span class="st0">"Y-m-d"</span><span
    class="sy0">,</span><span class="re0">\$date</span><span
    class="br0">)</span><span class="sy0">.</span><span
    class="st0">"."</span><span class="sy0">.</span><span
    class="re0">\$ext</span><span class="sy0">;</span> <span
    class="co1">//IMAGEDIR defined elsewhere</span>

    </div>

42. <div class="de1">

        <span class="kw1">if</span> <span class="br0">(</span>DEBUG<span
    class="br0">)</span> <span class="kw1">echo</span> <span
    class="st0">"<span class="es1">\\\$</span>savefn=<span
    class="es4">\$savefn</span><span class="es1">\\n</span>"</span><span
    class="sy0">;</span>

    </div>

43. <div class="de1">

        <span class="kw3">rename</span><span class="br0">(</span><span
    class="re0">\$fn</span><span class="sy0">,</span> <span
    class="re0">\$savefn</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

44. <div class="de1">

        <span class="kw1">return</span> <span
    class="re0">\$savefn</span><span class="sy0">;</span>

    </div>

45. <div class="de2">

      <span class="br0">}</span> <span class="kw1">else</span> <span
    class="br0">{</span>

    </div>

46. <div class="de1">

        <span class="kw1">return</span> <span
    class="kw4">NULL</span><span class="sy0">;</span>

    </div>

47. <div class="de1">

      <span class="br0">}</span>

    </div>

48. <div class="de1">

    <span class="br0">}</span>

    </div>

49. <div class="de1">

     

    </div>

50. <div class="de2">

    <span class="kw2">function</span> determine\_extension<span
    class="br0">(</span><span class="re0">\$fn</span><span
    class="sy0">,</span> <span class="re0">\$hn</span><span
    class="br0">)</span>

    </div>

51. <div class="de1">

    <span class="br0">{</span>

    </div>

52. <div class="de1">

      <span class="co1">// determine the extension based on the file
    Content-type returned in the header</span>

    </div>

53. <div class="de1">

      <span class="re0">\$type2ext</span> <span class="sy0">=</span>
    <span class="kw3">array</span><span class="br0">(</span><span
    class="st_h">'image/jpeg'</span> <span class="sy0">=\></span> <span
    class="st_h">'jpg'</span><span class="sy0">,</span>

    </div>

54. <div class="de1">

            <span class="st_h">'image/jpg'</span> <span
    class="sy0">=\></span> <span class="st_h">'jpg'</span><span
    class="sy0">,</span>

    </div>

55. <div class="de2">

            <span class="st_h">'image/png'</span> <span
    class="sy0">=\></span> <span class="st_h">'png'</span><span
    class="sy0">,</span>

    </div>

56. <div class="de1">

            <span class="st_h">'image/gif'</span> <span
    class="sy0">=\></span> <span class="st_h">'gif'</span><span
    class="br0">)</span><span class="sy0">;</span>

    </div>

57. <div class="de1">

     

    </div>

58. <div class="de1">

      <span class="re0">\$header</span><span class="sy0">=</span><span
    class="kw3">file\_get\_contents</span><span
    class="br0">(</span><span class="re0">\$hn</span><span
    class="br0">)</span><span class="sy0">;</span>

    </div>

59. <div class="de1">

      <span class="re0">\$header\_lines</span> <span
    class="sy0">=</span> <span class="kw3">explode</span><span
    class="br0">(</span><span class="st0">"<span
    class="es1">\\r</span><span class="es1">\\n</span>"</span><span
    class="sy0">,</span><span class="re0">\$header</span><span
    class="br0">)</span><span class="sy0">;</span>

    </div>

60. <div class="de2">

      <span class="kw1">if</span> <span class="br0">(</span>DEBUG<span
    class="br0">)</span> <span class="kw1">echo</span> <span
    class="st0">"<span class="es1">\\\$</span>header\_lines=<span
    class="es1">\\n</span>"</span><span class="sy0">.</span><span
    class="kw3">print\_r</span><span class="br0">(</span><span
    class="re0">\$header\_lines</span><span class="sy0">,</span><span
    class="kw4">true</span><span class="br0">)</span><span
    class="sy0">.</span><span class="st0">"<span
    class="es1">\\n</span>"</span><span class="sy0">;</span>

    </div>

61. <div class="de1">

      <span class="re0">\$i</span> <span class="sy0">=</span> <span
    class="nu0">0</span><span class="sy0">;</span>

    </div>

62. <div class="de1">

      <span class="kw1">while</span><span class="br0">(</span><span
    class="sy0">!</span> <span class="kw3">preg\_match</span><span
    class="br0">(</span><span class="st0">"/\^HTTP.\* 200
    OK/"</span><span class="sy0">,</span><span
    class="re0">\$header\_lines</span><span class="br0">[</span><span
    class="re0">\$i</span><span class="br0">]</span><span
    class="br0">)</span> <span class="sy0">&&</span> <span
    class="re0">\$i</span> <span class="sy0">\<</span> <span
    class="kw3">count</span><span class="br0">(</span><span
    class="re0">\$header\_lines</span><span class="br0">)</span><span
    class="br0">)</span> <span class="br0">{</span><span
    class="re0">\$i</span><span class="sy0">++;</span><span
    class="br0">}</span>

    </div>

63. <div class="de1">

      <span class="kw1">if</span> <span class="br0">(</span>DEBUG<span
    class="br0">)</span> <span class="kw1">echo</span> <span
    class="st0">"<span class="es1">\\\$</span>i=<span
    class="es4">\$i</span>, <span
    class="es1">\\\$</span>header\_lines[<span
    class="es4">\$i</span>]=<span
    class="es4">\$header\_lines</span>[<span
    class="es4">\$i</span>]<span class="es1">\\n</span>"</span><span
    class="sy0">;</span>

    </div>

64. <div class="de1">

      <span class="kw1">if</span> <span class="br0">(</span><span
    class="re0">\$i</span> <span class="sy0">\>=</span> <span
    class="kw3">count</span><span class="br0">(</span><span
    class="re0">\$header\_lines</span><span class="br0">)</span><span
    class="br0">)</span> <span class="kw1">return</span> <span
    class="kw4">false</span><span class="sy0">;</span> <span
    class="co1">// no header returned found</span>

    </div>

65. <div class="de2">

      <span class="kw1">while</span><span class="br0">(</span><span
    class="sy0">!</span> <span class="kw3">preg\_match</span><span
    class="br0">(</span><span
    class="st0">"/\^Content-type:/i"</span><span
    class="sy0">,</span><span class="re0">\$header\_lines</span><span
    class="br0">[</span><span class="re0">\$i</span><span
    class="br0">]</span><span class="br0">)</span> <span
    class="sy0">&&</span> <span class="re0">\$i</span> <span
    class="sy0">\<</span> <span class="kw3">count</span><span
    class="br0">(</span><span class="re0">\$header\_lines</span><span
    class="br0">)</span><span class="br0">)</span> <span
    class="br0">{</span><span class="re0">\$i</span><span
    class="sy0">++;</span><span class="br0">}</span>

    </div>

66. <div class="de1">

      <span class="kw1">if</span> <span class="br0">(</span>DEBUG<span
    class="br0">)</span> <span class="kw1">echo</span> <span
    class="st0">"<span class="es1">\\\$</span>i=<span
    class="es4">\$i</span>, <span
    class="es1">\\\$</span>header\_lines[<span
    class="es4">\$i</span>]=<span
    class="es4">\$header\_lines</span>[<span
    class="es4">\$i</span>]<span class="es1">\\n</span>"</span><span
    class="sy0">;</span>

    </div>

67. <div class="de1">

      <span class="kw1">if</span> <span class="br0">(</span><span
    class="re0">\$i</span> <span class="sy0">\>=</span> <span
    class="kw3">count</span><span class="br0">(</span><span
    class="re0">\$header\_lines</span><span class="br0">)</span><span
    class="br0">)</span> <span class="kw1">return</span> <span
    class="kw4">false</span><span class="sy0">;</span> <span
    class="co1">// no Content-type returned</span>

    </div>

68. <div class="de1">

      <span class="kw3">list</span><span class="br0">(</span><span
    class="re0">\$name</span><span class="sy0">,</span><span
    class="re0">\$value</span><span class="br0">)</span> <span
    class="sy0">=</span> <span class="kw3">explode</span><span
    class="br0">(</span><span class="st0">": "</span><span
    class="sy0">,</span><span class="re0">\$header\_lines</span><span
    class="br0">[</span><span class="re0">\$i</span><span
    class="br0">]</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

69. <div class="de1">

      <span class="kw1">if</span> <span class="br0">(</span>DEBUG<span
    class="br0">)</span> <span class="kw1">echo</span> <span
    class="st0">"<span class="es1">\\\$</span>name=<span
    class="es4">\$name</span>, <span class="es1">\\\$</span>value=<span
    class="es4">\$value</span><span class="es1">\\n</span>"</span><span
    class="sy0">;</span>

    </div>

70. <div class="de2">

      <span class="re0">\$parts</span> <span class="sy0">=</span> <span
    class="kw3">explode</span><span class="br0">(</span><span
    class="st0">"; "</span><span class="sy0">,</span><span
    class="re0">\$value</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

71. <div class="de1">

      <span class="kw1">if</span> <span class="br0">(</span>DEBUG<span
    class="br0">)</span> <span class="kw1">echo</span> <span
    class="st0">"<span class="es1">\\\$</span>parts=<span
    class="es1">\\n</span>"</span><span class="sy0">.</span><span
    class="kw3">print\_r</span><span class="br0">(</span><span
    class="re0">\$parts</span><span class="sy0">,</span><span
    class="kw4">true</span><span class="br0">)</span><span
    class="sy0">.</span><span class="st0">"<span
    class="es1">\\n</span>"</span><span class="sy0">;</span>

    </div>

72. <div class="de1">

      <span class="re0">\$type</span><span class="sy0">=</span><span
    class="re0">\$parts</span><span class="br0">[</span><span
    class="nu0">0</span><span class="br0">]</span><span
    class="sy0">;</span>

    </div>

73. <div class="de1">

      <span class="kw1">if</span> <span class="br0">(</span>DEBUG<span
    class="br0">)</span> <span class="kw1">echo</span> <span
    class="st0">"<span class="es1">\\\$</span>type=<span
    class="es4">\$type</span><span class="es1">\\n</span>"</span><span
    class="sy0">;</span>

    </div>

74. <div class="de1">

      <span class="kw1">return</span> <span class="br0">(</span><span
    class="kw3">isset</span><span class="br0">(</span><span
    class="re0">\$type2ext</span><span class="br0">[</span><span
    class="re0">\$type</span><span class="br0">]</span><span
    class="br0">)</span><span class="br0">)</span> ? <span
    class="re0">\$type2ext</span><span class="br0">[</span><span
    class="re0">\$type</span><span class="br0">]</span> <span
    class="sy0">:</span> <span class="kw4">false</span><span
    class="sy0">;</span>

    </div>

75. <div class="de2">

    <span class="br0">}</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.UsingCurlInPHP?action=sourceblock&num=1)

</div>

</div>

Which outputs:

<div class="vspace">

</div>

<div id="sourceblock2" class="codeblock">

<div class="codeblocktext">

    $ php usingcurlex.php 
    $name=Some $misc //image//, $date=1334033959, $imguri=http://ttwiki/pub/skins/tarski/img/hdr/greytree.jpg
    $fn=/private/tmp/imgRlsf9s
    $hn=/private/tmp/imgRlsf9s.header
    $header_lines=
    Array
    (
        [0] => HTTP/1.1 200 OK
        [1] => Set-Cookie: TRACKID=9ac675f419705b6e771624c13eab4e8e; Path=/; Version=1
        [2] => Content-Type: image/jpeg
        [3] => Accept-Ranges: bytes
        [4] => ETag: "1813642202"
        [5] => Last-Modified: Thu, 29 Mar 2012 04:13:45 GMT
        [6] => Content-Length: 23355
        [7] => Date: Tue, 10 Apr 2012 04:59:19 GMT
        [8] => Server: lighttpd
        [9] => 
        [10] => 
    )

    $i=0, $header_lines[0]=HTTP/1.1 200 OK
    $i=2, $header_lines[2]=Content-Type: image/jpeg
    $name=Content-Type, $value=image/jpeg
    $parts=
    Array
    (
        [0] => image/jpeg
    )

    $type=image/jpeg
    $savefn=/tmp/Somemiscimage-2012-04-09.jpg
    $image=/tmp/Somemiscimage-2012-04-09.jpg

</div>

<div class="codeblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.UsingCurlInPHP?action=sourceblock&num=2)

</div>

</div>

What's important to note here is that the curl extension uses a file to
write the retrieved data to. (If no file handle is given to curl,
`curl->exec` send the returned url to STDOUT (i.e., the browser). To get
curl to return the result to a variable, use set
`CURLOPT_RETURNTRANSFER` in the curl options to `true`.) It is
considered a best practice not to retrieve files directly into where
they will reside, but to retrieve them to a temporary location, and then
do whatever processing may be needed on them before moving them to the
permanent location. This works similarly to how PHP handles uploaded
files.

In the example above, two temporary filenames were created, one for the
file contents and one for the header(s), and then opened in write mode.
The file handles were passed into the curl object, options were set, and
the curl run. After checking the result to make sure the curl ran
correctly, the files are both closed and the curl is shut down. From
then on, the file is dealt with first in it's temporary location, and
finally moved to the permanent location. The header file is read to
determine the type of file sent (header "Content-Type:").

<div class="vspace">

</div>

</div>
