<div id="wikitext">

As of 21 Nov 2011, the Acer Iconia A500 does not mount automatically
under Ubuntu 11.04. These are the steps I had to go to get it to mount:

<div class="vspace">

</div>

1.  Install the mtpfs package:

<div class="vspace">

</div>

     sudo apt-get install mtpfs

<div class="vspace">

</div>

1.  Plug in your tablet with the USB cable
2.  Open a terminal
3.  Use `lsusb`{.escaped} to obtain a list of USB devices:

<div class="vspace">

</div>

     $ lsusb
     Bus 005 Device 001: ID 1d6b:0001 Linux Foundation 1.1 root hub
     Bus 004 Device 001: ID 1d6b:0001 Linux Foundation 1.1 root hub
     Bus 003 Device 001: ID 1d6b:0001 Linux Foundation 1.1 root hub
     Bus 002 Device 001: ID 1d6b:0001 Linux Foundation 1.1 root hub
     Bus 001 Device 005: ID 0502:3325 Acer, Inc. 
     Bus 001 Device 003: ID 05e3:0716 Genesys Logic, Inc. USB 2.0 Multislot Card Reader/Writer
     Bus 001 Device 002: ID 0cf3:1002 Atheros Communications, Inc. TP-Link TL-WN821N? v2 [Atheros AR9001U?-(2)NG]
     Bus 001 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub

<div class="vspace">

</div>

<div class="indent">

The line with "Acer, Inc." is the one we want. According to
`lsusb`{.escaped}, the device id is 0502:3325. The part we're interested
in is the first part, 0502, which is the vendor ID.

</div>

<div class="vspace">

</div>

1.  **Disconnect the tablet at this point**
    <div class="vspace">

    </div>

2.  Create a UDEV rule file:

<div class="vspace">

</div>

     sudo vi /etc/udev/rules.d/51-android.rules

<div class="vspace">

</div>

<div class="indent">

Add the following line:

</div>

<div class="vspace">

</div>

     SUBSYSTEM=="usb", ATTR{idVendor}=="0502", MODE="0666"

<div class="vspace">

</div>

1.  Create a mount point for the tablet

<div class="vspace">

</div>

     sudo mkdir /media/a500
     sudo chown user:group /media/a500

<div class="vspace">

</div>

<div class="indent">

replace *user* and *group* with your own user name and default group

</div>

<div class="vspace">

</div>

1.  Add the mount point to fstab

<div class="vspace">

</div>

     sudo vi /etc/fstab

<div class="vspace">

</div>

<div class="indent">

At the bottom, add the following:

</div>

<div class="vspace">

</div>

     # mount point for Acer A500
     mtpfs    /media/a500    fuse   user,noauto,allow_other 0   0

<div class="vspace">

</div>

<div class="indent">

**N.B.** Don't forget the trailing zeroes like I did the first time!

</div>

<div class="vspace">

</div>

1.  Modify fuse.conf to permit allow\_other

<div class="vspace">

</div>

     sudo vi /etc/fuse.conf

<div class="vspace">

</div>

<div class="indent">

Uncomment the line with `user_allow_other`

</div>

<div class="vspace">

</div>

     # Allow non-root users to specify the 'allow_other' or 'allow_root'
     # mount options.
     #
     user_allow_other

<div class="vspace">

</div>

1.  Add yourself to the `fuse` group:

<div class="vspace">

</div>

     sudo vi /etc/group

<div class="vspace">

</div>

<div class="indent">

Find the fuse group and add yourself:

</div>

<div class="vspace">

</div>

     fuse:x:104:user

<div class="vspace">

</div>

<div class="indent">

Substitute your username for *user*

</div>

<div class="vspace">

</div>

1.  Reboot

When you reboot, you should see the mount point in Nautilus and under
Places in the top menu bar. Go ahead and plug in the tablet at this
point. When you click on the a500 entry in either Nautilus or Places, it
may take a few moments for the tablet to be recognized.

<div class="vspace">

</div>

Sources:
--------

-   <http://www.acertabletforum.com/forum/acer-iconia-tab-general-discussions/129-connecting-via-usb-linux-ubuntu.html>
-   <http://ubuntuforums.org/showthread.php?p=11477191#post11477191>

<div class="vspace">

</div>

</div>
