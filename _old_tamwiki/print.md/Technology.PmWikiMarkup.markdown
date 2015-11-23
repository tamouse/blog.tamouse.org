<div id="wikitext">

<span id="excerpt"></span> <span
class="wikiword">[PmWiki](http://wiki.tamouse.org?n=Technology.PmWiki?action=print)</span>
provides a lot of flexibility and extensibility. One of these features
is the ability to write [custom wiki
markup](http://www.pmwiki.org/wiki/PmWiki/CustomMarkup). <span
id="excerptend"></span>

To create custom markup, the `Markup()` function is available from
within the pmwiki environment.

<div class="vspace">

</div>

<span class="texhtml" style="font-family:cmr10, LMRoman10-Regular, Times, serif;">L<span style="text-transform: uppercase; font-size: 70%; margin-left: -0.36em; vertical-align: 0.3em; line-height: 0; margin-right: -0.15em;">a</span>T<span style="text-transform: uppercase; margin-left: -0.1667em; vertical-align: -0.5ex; line-height: 0; margin-right: -0.125em;">e</span>X</span> logo markup
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

For example, I recently had the need (or desire) to render the standard
LaTeX logo as it appears when typeset, thusly: <span class="texhtml"
style="font-family:cmr10, LMRoman10-Regular, Times, serif;">L<span
style="text-transform: uppercase; font-size: 70%; margin-left: -0.36em; vertical-align: 0.3em; line-height: 0; margin-right: -0.15em;">a</span>T<span
style="text-transform: uppercase; margin-left: -0.1667em; vertical-align: -0.5ex; line-height: 0; margin-right: -0.125em;">e</span>X</span>.

Here's the markup I wrote to render the logo:

<div class="vspace">

</div>

<div id="sourceblock1" class="sourceblock">

<div class="sourceblocktext">

<div class="php">

<div class="head">

Markup to render LaTeX logo

</div>

1.  <div class="de1">

    Markup<span class="br0">(</span><span
    class="st_h">'latex'</span><span class="sy0">,</span><span
    class="st_h">'inline'</span><span class="sy0">,</span>

    </div>

2.  <div class="de1">

           <span class="st_h">'/{{LaTeX}}/'</span><span
    class="sy0">,</span>

    </div>

3.  <div class="de1">

           <span class="st_h">'\<span class="texhtml"
    style="font-family:cmr10, LMRoman10-Regular, Times, serif;"\>L\<span
    style="text-transform: uppercase; font-size: 70%;
    margin-left: -0.36em; vertical-align: 0.3em; line-height: 0;
    margin-right: -0.15em;"\>a\</span\>T\<span style="text-transform:
    uppercase; margin-left: -0.1667em; vertical-align: -0.5ex;
    line-height: 0;
    margin-right: -0.125em;"\>e\</span\>X\</span\>'</span><span
    class="br0">)</span><span class="sy0">;</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.PmWikiMarkup?action=sourceblock&num=1)

</div>

</div>

If you decide to snag the code, beware not to fold or split the last
line with the HTML code in it, as any white space between the letters
may render the logo poorly.

The result is here: <span class="texhtml"
style="font-family:cmr10, LMRoman10-Regular, Times, serif;">L<span
style="text-transform: uppercase; font-size: 70%; margin-left: -0.36em; vertical-align: 0.3em; line-height: 0; margin-right: -0.15em;">a</span>T<span
style="text-transform: uppercase; margin-left: -0.1667em; vertical-align: -0.5ex; line-height: 0; margin-right: -0.125em;">e</span>X</span>

<div class="vspace">

</div>

A little more complex example
-----------------------------

For something that is a little more complex than a simple replacement,
You can arrange for MarkUp() to call a function. The best way to do this
is to use the Keep() function, and have your function return the string
of text you want it to keep.

<div class="vspace">

</div>

<div id="sourceblock2" class="sourceblock">

<div class="sourceblocktext">

<div class="php">

<div class="head">

an example of a MarkUp that calculates something more complex than a
simple substitution

</div>

1.  <div class="de1">

    <span class="co1">// Add the (:addlink [PageName]:) markup and
    HandleAddLink actions.</span>

    </div>

2.  <div class="de1">

    Markup<span class="br0">(</span><span
    class="st_h">'addlink'</span><span class="sy0">,</span> <span
    class="st_h">'inline'</span><span class="sy0">,</span> <span
    class="st_h">'/\\\\(:addlink\\\\s\*(.\*?):\\\\)/e'</span><span
    class="sy0">,</span>

    </div>

3.  <div class="de1">

      <span class="st0">"Keep(CreateBookmarklet(<span
    class="es1">\\\$</span>pagename,'<span
    class="es4">\$1</span>'))"</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

4.  <div class="de1">

     

    </div>

5.  <div class="de2">

    <span class="co1">// Function to create the bookmarklet</span>

    </div>

6.  <div class="de1">

    <span class="kw2">function</span> CreateBookmarklet<span
    class="br0">(</span><span class="re0">\$pagename</span><span
    class="sy0">,</span> <span class="re0">\$linkpage</span><span
    class="br0">)</span> <span class="br0">{</span>

    </div>

7.  <div class="de1">

      <span class="kw2">global</span> <span
    class="re0">\$WikiTitle</span><span class="sy0">;</span>

    </div>

8.  <div class="de1">

      <span class="kw1">if</span> <span class="br0">(</span><span
    class="re0">\$linkpage</span><span class="br0">)</span> <span
    class="re0">\$pagename</span> <span class="sy0">=</span>
    MakePageName<span class="br0">(</span><span
    class="re0">\$pagename</span><span class="sy0">,</span> <span
    class="re0">\$linkpage</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

9.  <div class="de1">

      <span class="re0">\$bookmarklet</span><span
    class="sy0">=</span><span class="st0">"\<a href=<span
    class="es1">\\"</span>javascript:var tags, u, a,
    d=document,w=window,e=w.getSelection,k=d.getSelection,x=d.selection,s
    = (e ? e() : (k) ? k() : (x ? x.createRange().text : 0 )),f = '<span
    class="es1">\\\$</span>PageUrl?action=addlink',l = d.location,en =
    encodeURIComponent;if (s == '') s = prompt('Descriptive
    Text:');tags=prompt('Enter comma-separated tags:');u = f + '?url=' +
    en(l.href) + '&title=' + en(d.title) + '&selection=' + en(s) +
    '&tags=' + en(tags);a = function () {if (!w.open(u, 't', '')) l.href
    = u;};if (/Firefox/.test(navigator.userAgent)) setTimeout(a, 0);else
    a();void(0)<span class="es1">\\"</span> title=<span
    class="es1">\\"</span>send to <span
    class="es1">\\\$</span>WikiTitle/<span
    class="es1">\\\$</span>pagename<span class="es1">\\"</span>\>send to
    "</span><span class="sy0">.</span><span
    class="re0">\$WikiTitle</span><span class="sy0">.</span><span
    class="st0">"/"</span><span class="sy0">.</span><span
    class="re0">\$pagename</span><span class="sy0">.</span><span
    class="st0">"\</a\>"</span><span class="sy0">;</span>

    </div>

10. <div class="de2">

      <span class="kw1">return</span> FmtPageName<span
    class="br0">(</span><span class="st0">"Bookmarklet: <span
    class="es4">\$bookmarklet</span> - drag to bookmark bar"</span><span
    class="sy0">,</span> <span class="re0">\$pagename</span><span
    class="br0">)</span><span class="sy0">;</span>

    </div>

11. <div class="de1">

     

    </div>

12. <div class="de1">

    <span class="br0">}</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.PmWikiMarkup?action=sourceblock&num=2)

</div>

</div>

The pattern to match includes an option (well, actually it sends
everything after a space following the addlink trigger) that is passed
into the `CreateBookmarklet`{.escaped} function. Note the amount of
quoting going on here. The replacement contents are quoted, in spite of
the fact that it contain a function call (`CreateBookmarklet`{.escaped})
inside of a function call (`Keep`{.escaped}). Both the
`$pagename`{.escaped} variable, and pattern match variable
`$1`{.escaped} are also quoted **inside** of that.

The `CreateBookmarklet`{.escaped} function does a bit of checking to see
if the given page or a link page should be the target. It sets the
bookmarklet, then returns the formatted page with the link added. The
Keep function packs this on and pmwiki renders it when appropriate.

<div class="vspace">

</div>

Adding options to the markup, a la [PmWiki:PageDirectives](http://www.pmwiki.org/wiki/PmWiki/PageDirectives)
------------------------------------------------------------------------------------------------------------

Markup replacements can get extra exciting when you start to add more
options and the ability to do different things.

Below is an example of markup that inserts the standard Creative Commons
format to build the [semantic
web](http://wiki.tamouse.org?n=Glossary.SemanticWeb?action=edit)[?](http://wiki.tamouse.org?n=Glossary.SemanticWeb?action=edit)
links.

<div class="vspace">

</div>

<div id="sourceblock3" class="sourceblock">

<div class="sourceblocktext">

<div class="perl">

<div class="head">

Markup for Creative Commons forms

</div>

1.  <div class="de1">

    <span class="sy0">//</span> Usage<span class="sy0">:</span> <span
    class="br0">(</span><span class="sy0">:</span>cc<span
    class="sy0">-</span>license <span class="br0">[</span>type<span
    class="sy0">=</span><span class="br0">(</span>by<span
    class="sy0">|</span>by<span class="sy0">-</span>nc<span
    class="sy0">|</span>by<span class="sy0">-</span>nc<span
    class="sy0">-</span>sa<span class="br0">)</span><span
    class="br0">]</span> <span class="br0">[</span>title<span
    class="sy0">=\<</span>name of work<span class="sy0">\></span><span
    class="br0">]</span> <span class="br0">[</span>work<span
    class="sy0">=\<</span>URL of work<span class="sy0">\></span><span
    class="br0">]</span> <span class="br0">[</span>author<span
    class="sy0">=\<</span>name of author<span class="sy0">\></span><span
    class="br0">]</span> <span class="br0">[</span>permissions<span
    class="sy0">=\<</span><span class="kw3">link</span> to more
    permissions page<span class="br0">]</span><span
    class="sy0">:</span><span class="br0">)</span>

    </div>

2.  <div class="de1">

    <span class="sy0">//</span>

    </div>

3.  <div class="de1">

    <span class="sy0">//</span> Defaults<span class="sy0">:</span>

    </div>

4.  <div class="de1">

    <span class="sy0">//</span>   type<span class="sy0">:</span> by<span
    class="sy0">-</span>nc<span class="sy0">-</span>sa

    </div>

5.  <div class="de2">

    <span class="sy0">//</span>   title<span class="sy0">:</span> <span
    class="re0">\$WikiTitle</span>

    </div>

6.  <div class="de1">

    <span class="sy0">//</span>   work<span class="sy0">:</span> <span
    class="re0">\$ScriptDirUrl</span>

    </div>

7.  <div class="de1">

    <span class="sy0">//</span>   author<span class="sy0">:</span>
    Anonymous

    </div>

8.  <div class="de1">

    <span class="sy0">//</span>   permissions<span class="sy0">:</span>
    <span class="re0">\$ScriptDirUrl</span><span
    class="sy0">?</span>n<span class="sy0">=</span>Site<span
    class="sy0">.</span>Permissions

    </div>

9.  <div class="de1">

    <span class="sy0">//</span>

    </div>

10. <div class="de2">

    Markup<span class="br0">(</span><span
    class="st_h">'creativecommonslicenses'</span><span
    class="sy0">,</span> <span class="co2">/\* unique markup
    identifier \*/</span>

    </div>

11. <div class="de1">

           <span class="st_h">'\<links'</span><span
    class="sy0">,</span>          <span class="co2">/\* don't want
    pmwiki to reprocess urls in text \*/</span>

    </div>

12. <div class="de1">

           <span class="st_h">'/<span
    class="es_h">\\\\</span>(:cc-license<span
    class="es_h">\\\\</span>s\*?(.\*?):<span
    class="es_h">\\\\</span>)/ei'</span><span class="sy0">,</span> <span
    class="co2">/\* regex for markup recognition \*/</span>

    </div>

13. <div class="de1">

           <span class="st0">"cc\_license\_markup('\$1')"</span><span
    class="br0">)</span><span class="sy0">;</span>

    </div>

14. <div class="de1">

    function cc\_license\_markup<span class="br0">(</span><span
    class="re0">\$parameters</span><span class="sy0">=</span><span
    class="st_h">''</span><span class="br0">)</span>

    </div>

15. <div class="de2">

    <span class="br0">{</span>

    </div>

16. <div class="de1">

      <span class="re0">@sms</span><span class="br0">(</span><span
    class="st_h">'parameters='</span><span class="sy0">,</span><span
    class="re0">\$parameters</span><span
    class="sy0">,</span>\_\_FILE\_\_<span
    class="sy0">,</span>\_\_LINE\_\_<span
    class="sy0">,</span>\_\_FUNCTION\_\_<span class="br0">)</span><span
    class="sy0">;</span>

    </div>

17. <div class="de1">

      <span class="re0">\$parameters</span><span
    class="sy0">=</span>stripslashes<span class="br0">(</span><span
    class="re0">\$parameters</span><span class="br0">)</span><span
    class="sy0">;</span>

    </div>

18. <div class="de1">

      <span class="re0">@sms</span><span class="br0">(</span><span
    class="st_h">'parameters=(after stripslashes)'</span><span
    class="sy0">,</span><span class="re0">\$parameters</span><span
    class="sy0">,</span>\_\_FILE\_\_<span
    class="sy0">,</span>\_\_LINE\_\_<span
    class="sy0">,</span>\_\_FUNCTION\_\_<span class="br0">)</span><span
    class="sy0">;</span>

    </div>

19. <div class="de1">

      global <span class="re0">\$WikiTitle</span><span
    class="sy0">,</span> <span class="re0">\$ScriptUrl</span><span
    class="sy0">;</span>

    </div>

20. <div class="de2">

      <span class="co2">/\* defaults \*/</span>

    </div>

21. <div class="de1">

      <span class="re0">\$defaults</span> <span class="sy0">=</span>
    array<span class="br0">(</span><span class="st_h">'type'</span><span
    class="sy0">=\></span><span class="st_h">'by-nc-sa'</span><span
    class="sy0">,</span>

    </div>

22. <div class="de1">

                <span class="st_h">'title'</span><span
    class="sy0">=\></span><span class="re0">\$WikiTitle</span><span
    class="sy0">,</span>

    </div>

23. <div class="de1">

                <span class="st_h">'work'</span><span
    class="sy0">=\></span><span class="re0">\$ScriptUrl</span><span
    class="sy0">,</span>

    </div>

24. <div class="de1">

                <span class="st_h">'author'</span><span
    class="sy0">=\></span><span class="st_h">'Anonymous'</span><span
    class="sy0">,</span>

    </div>

25. <div class="de2">

                <span class="st_h">'permissions'</span><span
    class="sy0">=\></span><span
    class="st0">"\$ScriptUrl?n=Site.Permissions"</span><span
    class="br0">)</span><span class="sy0">;</span>

    </div>

26. <div class="de1">

      <span class="re0">@sms</span><span class="br0">(</span><span
    class="st_h">'\$defaults='</span><span class="sy0">,</span><span
    class="re0">\$defaults</span><span
    class="sy0">,</span>\_\_FILE\_\_<span
    class="sy0">,</span>\_\_LINE\_\_<span
    class="sy0">,</span>\_\_FUNCTION\_\_<span class="br0">)</span><span
    class="sy0">;</span>

    </div>

27. <div class="de1">

      <span class="re0">\$args</span> <span class="sy0">=</span>
    array\_merge<span class="br0">(</span><span
    class="re0">\$defaults</span><span class="sy0">,</span>
    ParseArgs<span class="br0">(</span><span
    class="re0">\$parameters</span><span class="br0">)</span><span
    class="br0">)</span><span class="sy0">;</span>

    </div>

28. <div class="de1">

      <span class="re0">@sms</span><span class="br0">(</span><span
    class="st_h">'\$args='</span><span class="sy0">,</span><span
    class="re0">\$args</span><span class="sy0">,</span>\_\_FILE\_\_<span
    class="sy0">,</span>\_\_LINE\_\_<span
    class="sy0">,</span>\_\_FUNCTION\_\_<span class="br0">)</span><span
    class="sy0">;</span>

    </div>

29. <div class="de1">

      switch <span class="br0">(</span><span
    class="re0">\$type</span><span class="br0">)</span> <span
    class="br0">{</span>

    </div>

30. <div class="de2">

      <span class="kw1">case</span> <span class="st_h">'by'</span><span
    class="sy0">:</span>

    </div>

31. <div class="de1">

        <span class="re0">\$type\_string</span> <span
    class="sy0">=</span> <span class="st_h">'Attribution'</span><span
    class="sy0">;</span>

    </div>

32. <div class="de1">

        break<span class="sy0">;</span>

    </div>

33. <div class="de1">

     

    </div>

34. <div class="de1">

      <span class="kw1">case</span> <span
    class="st_h">'by-nc'</span><span class="sy0">:</span>

    </div>

35. <div class="de2">

        <span class="re0">\$type\_string</span> <span
    class="sy0">=</span> <span
    class="st_h">'Attribution-NonCommercial'</span><span
    class="sy0">;</span>

    </div>

36. <div class="de1">

        break<span class="sy0">;</span>

    </div>

37. <div class="de1">

     

    </div>

38. <div class="de1">

      <span class="kw1">case</span> <span
    class="st_h">'by-nc-sa'</span><span class="sy0">:</span>

    </div>

39. <div class="de1">

        <span class="re0">\$type\_string</span> <span
    class="sy0">=</span> <span
    class="st_h">'Attribution-NonCommercial-ShareAlike'</span><span
    class="sy0">;</span>

    </div>

40. <div class="de2">

        break<span class="sy0">;</span>

    </div>

41. <div class="de1">

     

    </div>

42. <div class="de1">

      default<span class="sy0">:</span>

    </div>

43. <div class="de1">

        <span class="re0">\$type\_string</span> <span
    class="sy0">=</span> <span class="st_h">'Attribution'</span><span
    class="sy0">;</span>

    </div>

44. <div class="de1">

        break<span class="sy0">;</span>

    </div>

45. <div class="de2">

      <span class="br0">}</span>

    </div>

46. <div class="de1">

     

    </div>

47. <div class="de1">

      <span class="re0">\$licenseUrl</span> <span class="sy0">=</span>
    <span
    class="st0">"http://creativecommons.org/licenses/\$type/3.0/"</span><span
    class="sy0">;</span>

    </div>

48. <div class="de1">

      <span class="re0">\$licenseLogoSrc</span> <span
    class="sy0">=</span> <span
    class="st0">"http://i.creativecommons.org/l/\$type/3.0/80x15.png"</span><span
    class="sy0">;</span>

    </div>

49. <div class="de1">

      <span class="re0">\$licenseLogoAlt</span> <span
    class="sy0">=</span> <span class="st0">"Creative Commons
    Licence"</span><span class="sy0">;</span>

    </div>

50. <div class="de2">

     

    </div>

51. <div class="de1">

      <span class="re0">\$return\_text</span> <span class="sy0">=</span>
    <span class="st0">"\<a rel='license' href='\$licenseUrl'\>\<img
    alt='\$licenseLogoAlt' style='border-width:0' src='\$licenseLogoSrc'
    /\>\</a\> \<span xmlns:dct='http://purl.org/dc/terms/'
    href='http://purl.org/dc/dcmitype/Text' property='dct:title'
    rel='dct:type'\>\$title\</span\> by \<a
    xmlns:cc='http://creativecommons.org/ns\#' href='\$work'
    property='cc:attributionName'
    rel='cc:attributionURL'\>\$author\</a\> is licensed under a \<a
    rel='license' href='\$licenseUrl'\>Creative Commons \$type\_string
    3.0 Unported License\</a\>. Permissions beyond the scope of this
    license may be available at \<a
    xmlns:cc='http://creativecommons.org/ns\#' href='\$permissions'
    rel='cc:morePermissions'\>\$permissions\</a\>."</span><span
    class="sy0">;</span>

    </div>

52. <div class="de1">

     

    </div>

53. <div class="de1">

      <span class="kw3">return</span> Keep<span
    class="br0">(</span><span class="re0">\$return\_text</span><span
    class="br0">)</span><span class="sy0">;</span>

    </div>

54. <div class="de1">

     

    </div>

55. <div class="de2">

    <span class="br0">}</span>

    </div>

56. <div class="de1">

     

    </div>

</div>

</div>

<div class="sourceblocklink">

</div>

</div>

Some details to point out, that make this interesting:

<div class="vspace">

</div>

-   In the third parameter to Markup, the regex is followed by "ie" --
    which turns the search case-insensitive, **and** permits the
    replacement to be an expression. This lets the fourth parameter be a
    function call which will return the substitution.
    <div class="vspace">

    </div>

-   The regex saves everything following the markup tag itself as a
    string and passes it into the function.
    <div class="vspace">

    </div>

-   The function uses the <span
    class="wikiword">[ParseArgs](http://wiki.tamouse.org?n=Technology.ParseArgs?action=edit)[?](http://wiki.tamouse.org?n=Technology.ParseArgs?action=edit)</span>()
    function provided by pmwiki to extract the passed arguments into a
    hash, which is merged with a hash of default parameters.
    <div class="vspace">

    </div>

-   The function returns the value of Keep(), which is passed the
    generated string of HTML code.

<div class="vspace">

</div>

<div style="display: none;">

This goes at the bottom of the page, hidden by comment block class
Summary:markup snippets used in pmwiki Parent:(Technology.)<span
class="wikiword">PmWiki</span> <span
class="wikiword">[IncludeMe](http://wiki.tamouse.org?n=Technology.IncludeMe?action=edit)[?](http://wiki.tamouse.org?n=Technology.IncludeMe?action=edit)</span>:[Technology.PmWiki](http://wiki.tamouse.org?n=Technology.PmWiki?action=print)
Categories:[HowTos](http://wiki.tamouse.org?n=Category.HowTos) Tags:
pmwiki, snippets, markup

</div>

</div>
