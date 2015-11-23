<div id="wikitext">

<div style="display: none;">

Summary:Loading and Saving YAML files in Ruby \> 1.9.2
Parent:(Technology.)Ruby <span
class="wikiword">[IncludeMe](http://wiki.tamouse.org?n=Technology.IncludeMe?action=edit)[?](http://wiki.tamouse.org?n=Technology.IncludeMe?action=edit)</span>:[Ruby](http://wiki.tamouse.org?n=Technology.Ruby?action=print)
Categories:[Articles](http://wiki.tamouse.org?n=Category.Articles),
[HowTos](http://wiki.tamouse.org?n=Category.HowTos) Tags: ruby, yaml,
psych

</div>

<span id="excerpt"></span> How you load and save
[YAML](http://wiki.tamouse.org?n=Technology.YAML?action=print) files
changed sometime before the 1.9.2 version of Ruby. The old `to_yaml`
method has been taken out, and you now use the
[Psych](http://apidock.com/ruby/Psych) module. <span
id="excerptend"></span>

Psych's [module documentation](http://apidock.com/ruby/Psych) provide
useful information on how to use Psych to handle YAML files.

<div class="vspace">

</div>

Synopsis
--------

<div id="sourceblock1" class="sourceblock">

<div class="sourceblocktext">

<div class="ruby">

<div class="head">

using Psych

</div>

1.  <div class="de1">

    <span class="kw3">require</span> <span class="st0">'psych'</span>

    </div>

2.  <div class="de1">

     

    </div>

3.  <div class="de1">

    <span class="co1">\# Parse some YAML</span>

    </div>

4.  <div class="de1">

    Psych.<span class="kw3">load</span><span class="br0">(</span><span
    class="st0">"--- foo"</span><span class="br0">)</span> <span
    class="co1">\# =\> "foo"</span>

    </div>

5.  <div class="de2">

     

    </div>

6.  <div class="de1">

    <span class="co1">\# Emit some YAML</span>

    </div>

7.  <div class="de1">

    Psych.<span class="me1">dump</span><span class="br0">(</span><span
    class="st0">"foo"</span><span class="br0">)</span>     <span
    class="co1">\# =\> "--- foo\\n...\\n"</span>

    </div>

8.  <div class="de1">

    <span class="br0">{</span> <span class="re3">:a</span> <span
    class="sy0">=\></span> <span class="st0">'b'</span><span
    class="br0">}</span>.<span class="me1">to\_yaml</span>  <span
    class="co1">\# =\> "---\\n:a: b\\n"</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.YamlAndRuby?action=sourceblock&num=1)

</div>

</div>

<div class="vspace">

</div>

Some examples:
--------------

<div id="sourceblock2" class="sourceblock">

<div class="sourceblocktext">

<div class="text">

1.9.3p286 :002 \> require 'psych'\
  =\> true\
 1.9.3p286 :003 \> Psych.load("--- foo")\
  =\> "foo"\
 1.9.3p286 :004 \> Psych.dump("foo")\
  =\> "--- foo\\n...\\n"\
 1.9.3p286 :005 \> { :a =\> 'b'}.to\_yaml\
  =\> "---\\n:a: b\\n"\
 1.9.3p286 :008 \> s = { :a =\> 'b'}.to\_yaml\
  =\> "---\\n:a: b\\n"\
 1.9.3p286 :009 \> puts s\
 ---\
 :a: b\
  =\> nil\
 1.9.3p286 :010 \> puts Psych.dump("foo")\
 --- foo\
 ...\
  =\> nil\
 1.9.3p286 :011 \> h = Hash.new\
  =\> {}\
 1.9.3p286 :012 \> h['a'] = 'aaaa'\
  =\> "aaaa"\
 1.9.3p286 :013 \> h['b'] = 'bbbb'\
  =\> "bbbb"\
 1.9.3p286 :014 \> h['c'] = 'cccc'\
  =\> "cccc"\
 1.9.3p286 :015 \> puts Psych.dump(h)\
 ---\
 a: aaaa\
 b: bbbb\
 c: cccc\
  =\> nil\
 1.9.3p286 :016 \>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.YamlAndRuby?action=sourceblock&num=2)

</div>

</div>

<div class="vspace">

</div>

More usage
----------

As the example in
[GeneratingCSSWithStylish](http://wiki.tamouse.org?n=Technology.GeneratingCSSWithStylish?action=print)
shows, using a YAML file to configure your code can be helpful:

<div class="vspace">

</div>

<div class="round lrindent quote">

<span id="example2"></span>

### Store the palette config in a YAML file

<div id="sourceblock3" class="sourceblock">

<div class="sourceblocktext">

<div class="yaml">

<div class="head">

palette.yaml

</div>

1.  <div class="de1">

    <span class="sy1">---</span>

    </div>

2.  <div class="de1">

    <span class="co4">page</span>:

    </div>

3.  <div class="de1">

    <span class="co3">  text</span><span class="sy2">: </span>! '<span
    class="co1">\#000'</span>

    </div>

4.  <div class="de1">

    <span class="co3">  bg</span><span class="sy2">: </span>! '<span
    class="co1">\#FAFAFA'</span>

    </div>

5.  <div class="de2">

    <span class="co4">content</span>:

    </div>

6.  <div class="de1">

    <span class="co3">  text</span><span class="sy2">: </span>! '<span
    class="co1">\#FFF'</span>

    </div>

7.  <div class="de1">

    <span class="co3">  bg</span><span class="sy2">: </span>! '<span
    class="co1">\#000'</span>

    </div>

8.  <div class="de1">

    <span class="co4">  links</span>:

    </div>

9.  <div class="de1">

    <span class="co3">    unvisited</span><span class="sy2">:
    </span>blue

    </div>

10. <div class="de2">

    <span class="co3">    visited</span><span class="sy2">:
    </span>purple

    </div>

11. <div class="de1">

    <span class="co3">    active</span><span class="sy2">: </span>red

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.YamlAndRuby?action=sourceblock&num=3)

</div>

</div>

The palette.yaml file can be used wherever you want to generate a style
file, and is separate from the actual logic.

<div class="vspace">

</div>

### Use the palette YAML file in your code:

<div id="sourceblock4" class="sourceblock">

<div class="sourceblocktext">

<div class="ruby">

<div class="head">

mystyles.rb

</div>

1.  <div class="de1">

    <span class="kw3">require</span> <span class="st0">'rubygems'</span>

    </div>

2.  <div class="de1">

    <span class="kw3">require</span> <span class="st0">'stylish'</span>

    </div>

3.  <div class="de1">

    <span class="kw3">require</span> <span class="st0">'psych'</span>

    </div>

4.  <div class="de1">

     

    </div>

5.  <div class="de2">

    palette = Psych::load\_file<span class="br0">(</span><span
    class="st0">"palette.yaml"</span><span class="br0">)</span>

    </div>

6.  <div class="de1">

     

    </div>

7.  <div class="de1">

    style = Stylish.<span class="me1">generate</span> <span
    class="kw1">do</span>

    </div>

8.  <div class="de1">

      body <span class="re3">:color</span> <span class="sy0">=\></span>
    palette<span class="br0">[</span><span
    class="st0">'page'</span><span class="br0">]</span><span
    class="br0">[</span><span class="st0">'text'</span><span
    class="br0">]</span>, <span class="re3">:background</span> <span
    class="sy0">=\></span> <span class="br0">{</span>:color <span
    class="sy0">=\></span> palette<span class="br0">[</span><span
    class="st0">'page'</span><span class="br0">]</span><span
    class="br0">[</span><span class="st0">'bg'</span><span
    class="br0">]</span><span class="br0">}</span>, <span
    class="re3">:font\_size</span> <span class="sy0">=\></span> <span
    class="st0">"1em"</span>, <span class="re3">:font\_family</span>
    <span class="sy0">=\></span> <span class="st0">"Arial,
    sans-serif"</span>

    </div>

9.  <div class="de1">

      rule <span class="st0">"\#content"</span>,

    </div>

10. <div class="de2">

      <span class="re3">:color</span> <span class="sy0">=\></span>
    palette<span class="br0">[</span><span
    class="st0">'content'</span><span class="br0">]</span><span
    class="br0">[</span><span class="st0">'text'</span><span
    class="br0">]</span>,

    </div>

11. <div class="de1">

      <span class="re3">:background</span> <span class="sy0">=\></span>
    <span class="br0">{</span>:color <span class="sy0">=\></span>
    palette<span class="br0">[</span><span
    class="st0">'content'</span><span class="br0">]</span><span
    class="br0">[</span><span class="st0">'bg'</span><span
    class="br0">]</span><span class="br0">}</span>,

    </div>

12. <div class="de1">

      <span class="re3">:width</span> <span class="sy0">=\></span> <span
    class="st0">"80%"</span>,

    </div>

13. <div class="de1">

      <span class="re3">:margin</span> <span class="sy0">=\></span>
    <span class="st0">"10px auto"</span>,

    </div>

14. <div class="de1">

      <span class="re3">:padding</span> <span class="sy0">=\></span>
    <span class="st0">"5px"</span>,

    </div>

15. <div class="de2">

      <span class="re3">:border\_radius</span> <span
    class="sy0">=\></span> <span class="st0">"15px"</span>

    </div>

16. <div class="de1">

      rule <span class="st0">"\#content"</span> <span
    class="kw1">do</span>

    </div>

17. <div class="de1">

        <span class="kw3">p</span> <span class="re3">:margin</span>
    <span class="sy0">=\></span> <span class="st0">"3px 0"</span>, <span
    class="re3">:padding</span> <span class="sy0">=\></span> <span
    class="st0">"0px"</span>

    </div>

18. <div class="de1">

        a <span class="re3">:color</span> <span class="sy0">=\></span>
    palette<span class="br0">[</span><span
    class="st0">'content'</span><span class="br0">]</span><span
    class="br0">[</span><span class="st0">'links'</span><span
    class="br0">]</span><span class="br0">[</span><span
    class="st0">'unvisited'</span><span class="br0">]</span>

    </div>

19. <div class="de1">

        rule <span class="st0">"a:visited"</span> , <span
    class="re3">:color</span> <span class="sy0">=\></span> palette<span
    class="br0">[</span><span class="st0">'content'</span><span
    class="br0">]</span><span class="br0">[</span><span
    class="st0">'links'</span><span class="br0">]</span><span
    class="br0">[</span><span class="st0">'visited'</span><span
    class="br0">]</span>

    </div>

20. <div class="de2">

        rule <span class="st0">"a:active"</span> , <span
    class="re3">:color</span> <span class="sy0">=\></span> palette<span
    class="br0">[</span><span class="st0">'content'</span><span
    class="br0">]</span><span class="br0">[</span><span
    class="st0">'links'</span><span class="br0">]</span><span
    class="br0">[</span><span class="st0">'active'</span><span
    class="br0">]</span>

    </div>

21. <div class="de1">

        rule <span class="st0">"a:hover"</span> , <span
    class="re3">:text\_decoration</span> <span class="sy0">=\></span>
    <span class="st0">"none"</span>, <span
    class="re3">:font\_style</span> <span class="sy0">=\></span> <span
    class="st0">"italic"</span>

    </div>

22. <div class="de1">

      <span class="kw1">end</span>

    </div>

23. <div class="de1">

    <span class="kw1">end</span>

    </div>

24. <div class="de1">

     

    </div>

25. <div class="de2">

    <span class="kw3">puts</span> style;

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.YamlAndRuby?action=sourceblock&num=4)

</div>

</div>

And the output from the above is:

<div class="vspace">

</div>

<div id="sourceblock5" class="sourceblock">

<div class="sourceblocktext">

<div class="css">

<div class="head">

css emitted from mystyles.rb

</div>

1.  <div class="de1">

    body <span class="br0">{</span><span class="kw1">color</span><span
    class="sy0">:</span><span class="re0">\#000</span><span
    class="sy0">;</span> <span class="kw1">background-color</span><span
    class="sy0">:</span><span class="re0">\#fafafa</span><span
    class="sy0">;</span> <span class="kw1">font-size</span><span
    class="sy0">:</span><span class="re3">1em</span><span
    class="sy0">;</span> <span class="kw1">font-family</span><span
    class="re2">:Arial</span><span class="sy0">,</span> <span
    class="kw2">sans-serif</span><span class="sy0">;</span><span
    class="br0">}</span>

    </div>

2.  <div class="de1">

    \#<span class="kw1">content</span> <span class="br0">{</span><span
    class="kw1">color</span><span class="sy0">:</span><span
    class="re0">\#fff</span><span class="sy0">;</span> <span
    class="kw1">background-color</span><span class="sy0">:</span><span
    class="re0">\#000</span><span class="sy0">;</span> <span
    class="kw1">width</span><span class="sy0">:</span><span
    class="re3">80%</span><span class="sy0">;</span> <span
    class="kw1">margin</span><span class="sy0">:</span><span
    class="re3">10px</span> <span class="kw2">auto</span><span
    class="sy0">;</span> <span class="kw1">padding</span><span
    class="sy0">:</span><span class="re3">5px</span><span
    class="sy0">;</span> <span class="kw1">border-radius</span><span
    class="sy0">:</span><span class="re3">15px</span><span
    class="sy0">;</span><span class="br0">}</span>

    </div>

3.  <div class="de1">

    \#<span class="kw1">content</span> p <span class="br0">{</span><span
    class="kw1">margin</span><span class="sy0">:</span><span
    class="re3">3px</span> <span class="nu0">0</span><span
    class="sy0">;</span> <span class="kw1">padding</span><span
    class="sy0">:</span><span class="re3">0px</span><span
    class="sy0">;</span><span class="br0">}</span>

    </div>

4.  <div class="de1">

    \#<span class="kw1">content</span> a <span class="br0">{</span><span
    class="kw1">color</span><span class="sy0">:</span><span
    class="kw1">blue</span><span class="sy0">;</span><span
    class="br0">}</span>

    </div>

5.  <div class="de2">

    \#<span class="kw1">content</span> a<span class="re2">:visited
    </span><span class="br0">{</span><span class="kw1">color</span><span
    class="sy0">:</span><span class="kw2">purple</span><span
    class="sy0">;</span><span class="br0">}</span>

    </div>

6.  <div class="de1">

    \#<span class="kw1">content</span> a<span class="re2">:active
    </span><span class="br0">{</span><span class="kw1">color</span><span
    class="sy0">:</span><span class="kw2">red</span><span
    class="sy0">;</span><span class="br0">}</span>

    </div>

7.  <div class="de1">

    \#<span class="kw1">content</span> a<span class="re2">:hover
    </span><span class="br0">{</span><span
    class="kw1">text-decoration</span><span class="sy0">:</span><span
    class="kw2">none</span><span class="sy0">;</span> <span
    class="kw1">font-style</span><span class="sy0">:</span><span
    class="kw2">italic</span><span class="sy0">;</span><span
    class="br0">}</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.YamlAndRuby?action=sourceblock&num=5)

</div>

</div>

</div>

<div class="vspace">

</div>

</div>
