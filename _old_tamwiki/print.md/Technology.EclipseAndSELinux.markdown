<div id="wikitext">

<span id="excerpt"></span> Problems with eclipse on a fresh installation
with SELinux. Need to set the libjvm.so to allow it to relocate text:
<span id="excerptend"></span>

<div class="vspace">

</div>

     chcon -t textrel_shlib_t /opt/jdk1.6.0_02/jre/lib/i386/client/libjvm.so

See reply at [dev.eclipse.org new.eclipse.newcomers
list](http://dev.eclipse.org/newslists/news.eclipse.newcomer/msg19390.html)

<div class="vspace">

</div>

</div>
