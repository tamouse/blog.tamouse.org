<div id="wikitext">

<div style="display: none;">

Summary: How to mount NFS exports from a Linux server to Mac OS/X
Mavericks Parent: (Technology.)Networking <span
class="wikiword">[IncludeMe](http://wiki.tamouse.org?n=Technology.IncludeMe?action=edit)[?](http://wiki.tamouse.org?n=Technology.IncludeMe?action=edit)</span>:
[Networking](http://wiki.tamouse.org?n=Technology.Networking?action=print)
Categories: [HowTos](http://wiki.tamouse.org?n=Category.HowTos),
[Networking](http://wiki.tamouse.org?n=Category.Networking) Tags: nfs,
mounting, mac, osx, mavericks Source: Posted: Thu Dec 5 22:49:13 2013

</div>

<span id="excerpt"></span> On my local network, I have a linux desktop
that has a couple of USB drives connected to it that I export to my LAN.
This shows how to connect to them from my macbook. <span
id="excerptend"></span>

Linux desktop: xUbuntu 13.04\
Macbook: OS/X 10.9 Mavericks

<div class="vspace">

</div>

<div class="round lrindent warning2">

Note: if you reboot the linux desktop, you have to log all the way in
and click on the drive icons to actually get them mounted in `/media`.
This is a **serious** limitation that I have yet to figure out how to
work around.

</div>

<div class="vspace">

</div>

-   Make sure the linux desktop exports the drives.

<div class="vspace">

</div>

        $ exportfs

<div class="vspace">

</div>

-   Become root on the macbook.
-   Make sure the macbook targets are created:

<div class="vspace">

</div>

        pontiki:~ root# mkdir /Volumes/sg3t
        pontiki:~ root# mkdir /Volumes/sg2t

<div class="vspace">

</div>

-   Mount the nfs drives:

<div class="vspace">

</div>

        pontiki:~ root# mount_nfs -o hard,bg,rw,tcp caesar:/media/sg3t /Volumes/sg3t
        pontiki:~ root# mount_nfs -o hard,bg,rw,tcp caesar:/media/sg2t /Volumes/sg2t

That should do it.

</div>
