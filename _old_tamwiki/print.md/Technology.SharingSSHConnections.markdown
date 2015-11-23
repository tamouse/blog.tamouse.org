<div id="wikitext">

\

Link:
<http://blogs.perl.org/users/smylers/2011/08/ssh-productivity-tips.html>\
Title: SSH Can Do That? Productivity Tips for Working with Remote
Servers\
Author: Smylers\
Published: August 16, 2011 2:38 PM

\

<div class="vspace">

</div>

<div class="round lrindent quote">

Multiple Connections
--------------------

Often it's useful to have multiple connections to the same server, for
example to edit a file, run some file-system commands, and view a log
file all in different terminal windows. Except sometimes that can seem
too much hassle, so we compromise and end up repeatedly cycling through
quitting and restarting a few different commands in one window.

Fortunately <span class="wikiword">OpenSSH</span> has a feature which
makes it much snappier to get another terminal on a server you are
already connected to: connection sharing. <span
class="wikiword">OpenSSH</span> is the implementation of SSH that comes
with many Unix-liked operating systems, including all the common Linux
distributions and Mac OSX.

To enable connection sharing, edit (or create) your personal SSH config,
which is stored in the file \~/.ssh/config, and add these lines:

<div class="vspace">

</div>

<div id="sourceblock1" class="codeblock">

<div class="codeblocktext">

    ControlMaster auto
    ControlPath /tmp/ssh_mux_%h_%p_%r

</div>

<div class="codeblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.SharingSSHConnections?action=sourceblock&num=1)

</div>

</div>

Then exit any existing SSH connections, and make a new connection to a
server. Now in a second window, SSH to that same server. The second
terminal prompt should appear almost instantaneously

</div>

Posted: 2012-4-8 0:03

<div class="vspace">

</div>

<div style="display: none;">

This goes at the bottom of the page, hidden by comment block class
Summary:sharing ssh connections speeds things up tremendously, and can
support remote completion things Parent:(Technology.)SSH <span
class="wikiword">[IncludeMe](http://wiki.tamouse.org?n=Technology.IncludeMe?action=edit)[?](http://wiki.tamouse.org?n=Technology.IncludeMe?action=edit)</span>:[Technology.SSH](http://wiki.tamouse.org?n=Technology.SSH?action=print)
Categories:[Links](http://wiki.tamouse.org?n=Category.Links)

</div>

</div>
