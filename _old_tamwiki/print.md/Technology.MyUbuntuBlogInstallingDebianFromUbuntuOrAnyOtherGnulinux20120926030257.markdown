<div id="wikitext">

*Page saved from
<http://ubuntu.sabza.org/2008/03/24/installing-debian-from-ubuntu-or-any-other-gnulinux/>*

<div class="vspace">

</div>

[Installing Debian From Ubuntu or any other GNU/Linux](http://ubuntu.sabza.org/2008/03/24/installing-debian-from-ubuntu-or-any-other-gnulinux/)
-----------------------------------------------------------------------------------------------------------------------------------------------

This post is about how to install [Debian GNU
Linux](http://www.debian.org/) from your hard disk, with the help of
your [Ubuntu GNU Linux](http://www.ubuntu.com/) operating system and
without using <span class="wikiword">CDrom</span>, floppy, or any other
removeable media.

I have tried a few Linux distros and of course Microsoft Windows and I
can say confidently that Ubuntu’s installation is the easiest and the
best. All my hardware works out of the box like they were made for
Ubuntu (They were not actually my hardware is very Windowish). This
time, I was now trying to install Debian (testing) on one of the
remaining partitions on my hard disk. Debian’s net install cd booted
just fine but failed to deal with my CD-ROM drive. I was asked to
provide drivers for it or manually select a driver. I didn’t have a
floppy with drivers and none of the Debian drivers worked. After
spending a few hours to get the installation media work, I finally gave
up and opted to install from USB flash drive. Once again for some
unknown reasons I failed to boot from USB.

Then I tried to install Debian from hard disk and it worked smoothly. I
think you can install Debian from any operating system but not from an
NTFS partition. In my case, I installed it from Ubuntu and it was much
easier this way because Ubuntu itself is a GNU/Linux/Debian based
operating system. Instructions to do that are available on the official
[Debian Installer
Manual](http://www.debian.org/releases/testing/installmanual) (Debian
Installer Manual’s instructions are not Ubuntu specific but it does not
matter). I would just try to make it a little more simpler. Please note
that there are many other ways to do this, it will be a good idea to
review other methods before trying this one.

In this example we are trying to Install Debian tesing. You need to
download:

<div class="vspace">

</div>

-   [initrd.gz](http://http.us.debian.org/debian/dists/lenny/main/installer-i386/current//images/hd-media/initrd.gz)
-   [vmlinuz](http://http.us.debian.org/debian/dists/lenny/main/installer-i386/current//images/hd-media/vmlinuz)
-   [debian-testing-i386-netinst.iso](http://cdimage.debian.org/cdimage/lenny_di_beta1/i386/iso-cd/debian-testing-i386-netinst.iso)

Place these three files in /boot/newinstall directory. Now open Grub
menu.lst located at /boot/grub/menu.lst with your favorite text editor.

Scroll down until you see something like this:

<div class="vspace">

</div>

<div id="sourceblock1" class="codeblock">

<div class="codeblocktext">

    title Ubuntu 7.10, kernel 2.6.22-14-generic
    root (hd0,6)
    kernel /boot/vmlinuz-2.6.22-14-generic root=UUID=3599efe8-de32-4c9f-aed1-33c1c61d4bdf ro quiet splash
    initrd /boot/initrd.img-2.6.22-14-generic
    quiet

</div>

<div class="codeblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.MyUbuntuBlogInstallingDebianFromUbuntuOrAnyOtherGnulinux20120926030257?action=sourceblock&num=1)

</div>

</div>

Note the root (hd0,6) line this is the partition where your Ubuntu is
installed. It could be different for you depending your partition
location. And now, we are going to boot Debian Installer from here. Add
the following lines to your Grub.lst file.

<div class="vspace">

</div>

<div id="sourceblock2" class="codeblock">

<div class="codeblocktext">

    title New Install
    kernel (hd0,6)/boot/newinstall/vmlinuz
    initrd (hd0,6)/boot/newinstall/initrd.gz

</div>

<div class="codeblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.MyUbuntuBlogInstallingDebianFromUbuntuOrAnyOtherGnulinux20120926030257?action=sourceblock&num=2)

</div>

</div>

Now save the file and reboot your computer and you will see Grub showing
you “New Install” as an option in the menu. Select it to boot Debian
Installer and install it.

There is a similar way to install Ubuntu from a GNU/Linux based
operating system. You can also Install Ubuntu, Debian and many other
Linux distributions from your Windows or anyother operating system by
using [UNetbootin](http://lubi.sourceforge.net/unetbootin.html). To be
very honest, I am kind of surprised to find out the many ways to install
freedom for my computing needs.

<div class="vspace">

</div>

<div style="display: none;">

Summary: A How-to on converting an old Ubuntu headless server to the
latest Debian installation Tags: ubuntu, debian, headless, installation
Source:
<http://ubuntu.sabza.org/2008/03/24/installing-debian-from-ubuntu-or-any-other-gnulinux/>
Parent: (Technology.)Linux
includeme:[Technology.Linux](http://wiki.tamouse.org?n=Technology.Linux?action=print)
Categories:[Articles](http://wiki.tamouse.org?n=Category.Articles),[HowTos](http://wiki.tamouse.org?n=Category.HowTos)

</div>

Page saved at: Wed, 26 Sep 2012 03:02:57 -0500

<div class="vspace">

</div>

</div>
