<div id="wikitext">

<div id="sourceblock1" class="sourceblock">

<div class="sourceblocktext">

<div class="perl">

<div class="head">

Irssi window item data structure

</div>

1.  <div class="de1">

    <span class="re0">\$witem</span> <span class="sy0">=</span> <span
    class="kw3">bless</span><span class="br0">(</span> <span
    class="br0">{</span>

    </div>

2.  <div class="de1">

                       <span class="st_h">'left'</span> <span
    class="sy0">=\></span> <span class="nu0">0</span><span
    class="sy0">,</span>

    </div>

3.  <div class="de1">

                       <span class="st_h">'\_irssi'</span> <span
    class="sy0">=\></span> <span class="nu0">143317008</span><span
    class="sy0">,</span>

    </div>

4.  <div class="de1">

                       <span class="st_h">'mode'</span> <span
    class="sy0">=\></span> <span class="st_h">'nt'</span><span
    class="sy0">,</span>

    </div>

5.  <div class="de2">

                       <span class="st_h">'names\_got'</span> <span
    class="sy0">=\></span> <span class="nu0">1</span><span
    class="sy0">,</span>

    </div>

6.  <div class="de1">

                       <span class="st_h">'hilight\_color'</span> <span
    class="sy0">=\></span> <span class="st_h">''</span><span
    class="sy0">,</span>

    </div>

7.  <div class="de1">

                       <span class="st_h">'createtime'</span> <span
    class="sy0">=\></span> <span class="nu0">1275441584</span><span
    class="sy0">,</span>

    </div>

8.  <div class="de1">

                       <span class="st_h">'key'</span> <span
    class="sy0">=\></span> <span class="st_h">''</span><span
    class="sy0">,</span>

    </div>

9.  <div class="de1">

                       <span class="st_h">'chanop'</span> <span
    class="sy0">=\></span> <span class="nu0">0</span><span
    class="sy0">,</span>

    </div>

10. <div class="de2">

                       <span class="st_h">'chat\_type'</span> <span
    class="sy0">=\></span> <span class="st_h">'IRC'</span><span
    class="sy0">,</span>

    </div>

11. <div class="de1">

                       <span class="st_h">'synced'</span> <span
    class="sy0">=\></span> <span class="nu0">1</span><span
    class="sy0">,</span>

    </div>

12. <div class="de1">

                       <span class="st_h">'limit'</span> <span
    class="sy0">=\></span> <span class="nu0">0</span><span
    class="sy0">,</span>

    </div>

13. <div class="de1">

                       <span class="st_h">'server'</span> <span
    class="sy0">=\></span> <span class="kw3">bless</span><span
    class="br0">(</span> <span class="br0">{</span>

    </div>

14. <div class="de1">

                                             <span
    class="br0">(</span>see <span class="br0">[</span><span
    class="br0">[</span>server structure<span class="br0">]</span><span
    class="br0">]</span><span class="br0">)</span>

    </div>

15. <div class="de2">

                                          <span
    class="br0">}</span><span class="sy0">,</span> <span
    class="st_h">'Irssi::Irc::Server'</span> <span
    class="br0">)</span><span class="sy0">,</span>

    </div>

16. <div class="de1">

                       <span class="st_h">'kicked'</span> <span
    class="sy0">=\></span> <span class="nu0">0</span><span
    class="sy0">,</span>

    </div>

17. <div class="de1">

                       <span class="st_h">'data\_level'</span> <span
    class="sy0">=\></span> <span class="nu0">0</span><span
    class="sy0">,</span>

    </div>

18. <div class="de1">

                       <span class="st_h">'topic'</span> <span
    class="sy0">=\></span> <span class="st_h">'(blanked)'</span><span
    class="sy0">,</span>

    </div>

19. <div class="de1">

                       <span class="st_h">'topic\_by'</span> <span
    class="sy0">=\></span> <span class="st_h">'(blanked)'</span><span
    class="sy0">,</span>

    </div>

20. <div class="de2">

                       <span class="st_h">'no\_modes'</span> <span
    class="sy0">=\></span> <span class="nu0">0</span><span
    class="sy0">,</span>

    </div>

21. <div class="de1">

                       <span class="st_h">'name'</span> <span
    class="sy0">=\></span> <span class="st_h">'\#channel'</span><span
    class="sy0">,</span>

    </div>

22. <div class="de1">

                       <span class="st_h">'joined'</span> <span
    class="sy0">=\></span> <span class="nu0">1</span><span
    class="sy0">,</span>

    </div>

23. <div class="de1">

                       <span class="st_h">'topic\_time'</span> <span
    class="sy0">=\></span> <span class="nu0">1274356551</span><span
    class="sy0">,</span>

    </div>

24. <div class="de1">

                       <span class="st_h">'wholist'</span> <span
    class="sy0">=\></span> <span class="nu0">1</span><span
    class="sy0">,</span>

    </div>

25. <div class="de2">

                       <span class="st_h">'visible\_name'</span> <span
    class="sy0">=\></span> <span class="st_h">'\#channel'</span><span
    class="sy0">,</span>

    </div>

26. <div class="de1">

                       <span class="st_h">'type'</span> <span
    class="sy0">=\></span> <span class="st_h">'CHANNEL'</span><span
    class="sy0">,</span>

    </div>

27. <div class="de1">

                       <span class="st_h">'ownnick'</span> <span
    class="sy0">=\></span> <span class="kw3">bless</span><span
    class="br0">(</span> <span class="br0">{</span>

    </div>

28. <div class="de1">

                                             <span
    class="st_h">'\_irssi'</span> <span class="sy0">=\></span> <span
    class="nu0">142488864</span><span class="sy0">,</span>

    </div>

29. <div class="de1">

                                             <span
    class="st_h">'nick'</span> <span class="sy0">=\></span> <span
    class="st_h">'nick'</span><span class="sy0">,</span>

    </div>

30. <div class="de2">

                                             <span
    class="st_h">'host'</span> <span class="sy0">=\></span> <span
    class="st_h">'user@host'</span><span class="sy0">,</span>

    </div>

31. <div class="de1">

                                             <span
    class="st_h">'voice'</span> <span class="sy0">=\></span> <span
    class="nu0">1</span><span class="sy0">,</span>

    </div>

32. <div class="de1">

                                             <span
    class="st_h">'halfop'</span> <span class="sy0">=\></span> <span
    class="nu0">0</span><span class="sy0">,</span>

    </div>

33. <div class="de1">

                                             <span
    class="st_h">'gone'</span> <span class="sy0">=\></span> <span
    class="nu0">0</span><span class="sy0">,</span>

    </div>

34. <div class="de1">

                                             <span
    class="st_h">'realname'</span> <span class="sy0">=\></span> <span
    class="st_h">'Real Name'</span><span class="sy0">,</span>

    </div>

35. <div class="de2">

                                             <span
    class="st_h">'chat\_type'</span> <span class="sy0">=\></span> <span
    class="st_h">'IRC'</span><span class="sy0">,</span>

    </div>

36. <div class="de1">

                                             <span
    class="st_h">'other'</span> <span class="sy0">=\></span> <span
    class="nu0">0</span><span class="sy0">,</span>

    </div>

37. <div class="de1">

                                             <span
    class="st_h">'last\_check'</span> <span class="sy0">=\></span> <span
    class="nu0">1275488710</span><span class="sy0">,</span>

    </div>

38. <div class="de1">

                                             <span
    class="st_h">'type'</span> <span class="sy0">=\></span> <span
    class="st_h">'NICK'</span><span class="sy0">,</span>

    </div>

39. <div class="de1">

                                             <span
    class="st_h">'send\_massjoin'</span> <span class="sy0">=\></span>
    <span class="nu0">0</span><span class="sy0">,</span>

    </div>

40. <div class="de2">

                                             <span
    class="st_h">'op'</span> <span class="sy0">=\></span> <span
    class="nu0">0</span><span class="sy0">,</span>

    </div>

41. <div class="de1">

                                             <span
    class="st_h">'hops'</span> <span class="sy0">=\></span> <span
    class="nu0">0</span><span class="sy0">,</span>

    </div>

42. <div class="de1">

                                             <span
    class="st_h">'serverop'</span> <span class="sy0">=\></span> <span
    class="nu0">0</span>

    </div>

43. <div class="de1">

                                           <span
    class="br0">}</span><span class="sy0">,</span> <span
    class="st_h">'Irssi::Irc::Nick'</span> <span class="br0">)</span>

    </div>

44. <div class="de1">

                     <span class="br0">}</span><span
    class="sy0">,</span> <span class="st_h">'Irssi::Irc::Channel'</span>
    <span class="br0">)</span><span class="sy0">;</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.IrssiWitemStructure?action=sourceblock&num=1)

</div>

</div>

<div class="vspace">

</div>

</div>
