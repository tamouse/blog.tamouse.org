<div id="wikitext">

<div style="display: none;">

Summary: A quick set of steps to install a no-x-windows version of Emacs
24 on Ubuntu 12.04 Parent: (Technology.)Emacs <span
class="wikiword">[IncludeMe](http://wiki.tamouse.org?n=Technology.IncludeMe?action=edit)[?](http://wiki.tamouse.org?n=Technology.IncludeMe?action=edit)</span>:
[Emacs](http://wiki.tamouse.org?n=Technology.Emacs?action=print)
Categories: [HowTos](http://wiki.tamouse.org?n=Category.HowTos),
[Technology](http://wiki.tamouse.org?n=Category.Technology),
[Tools](http://wiki.tamouse.org?n=Category.Tools) Tags: emacs, ubuntu,
install, howtos Source: Posted: Fri Oct 3 09:19:24 2014

</div>

Following steps from here:
<http://ubuntuforums.org/showthread.php?t=1999720>

<div class="vspace">

</div>

<div id="sourceblock1" class="sourceblock">

<div class="sourceblocktext">

<div class="bash">

<div class="head">

Obtaining and installing emacs24

</div>

1.  <div class="de1">

    <span class="co0">\# Obtain latest emacs from Savannah:
    http://ftp.gnu.org/gnu/emacs/</span>

    </div>

2.  <div class="de1">

    <span class="kw2">wget</span> http:<span
    class="sy0">//</span>ftp.gnu.org<span class="sy0">/</span>gnu<span
    class="sy0">/</span>emacs<span class="sy0">/</span>emacs-<span
    class="nu0">24.3</span>.tar.gz

    </div>

3.  <div class="de1">

     

    </div>

4.  <div class="de1">

    <span class="co0">\# Install dependencies:</span>

    </div>

5.  <div class="de2">

    <span class="kw2">sudo</span> <span class="kw2">apt-get
    install</span> libjpeg-dev libpng-dev libgif-dev libtiff-dev
    libncurses-dev <span class="re5">-y</span>

    </div>

6.  <div class="de1">

     

    </div>

7.  <div class="de1">

    <span class="co0">\# Untar the archive:</span>

    </div>

8.  <div class="de1">

    <span class="kw2">tar</span> xvfz emacs-<span
    class="nu0">24.3</span>-rc.tar.gz

    </div>

9.  <div class="de1">

     

    </div>

10. <div class="de2">

    <span class="kw3">cd</span> emacs-<span class="nu0">24.3</span>

    </div>

11. <div class="de1">

     

    </div>

12. <div class="de1">

    <span class="co0">\# configure without x</span>

    </div>

13. <div class="de1">

    .<span class="sy0">/</span>configure <span
    class="re5">--without-x</span>

    </div>

14. <div class="de1">

     

    </div>

15. <div class="de2">

    <span class="kw2">make</span>

    </div>

16. <div class="de1">

     

    </div>

17. <div class="de1">

    <span class="kw2">sudo</span> <span class="kw2">make</span> <span
    class="kw2">install</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.HowtoQuickStepsInstallEmacsNoXonUbuntu?action=sourceblock&num=1)

</div>

</div>

</div>
