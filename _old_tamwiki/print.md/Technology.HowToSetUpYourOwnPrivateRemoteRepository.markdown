<div id="wikitext">

<span style="font-size:83%">*This is a slightly modified and localized
copy of [this
article](http://tumblr.intranation.com/post/766290565/how-set-up-your-own-private-git-server-linux)*</span>

<div class="vspace">

</div>

Set up the server
-----------------

These instructions were performed on a CentOs 5.5 box.

First, if you haven??t done so already, add your public key to the
server:

<div class="vspace">

</div>

     $ ssh myuser@server.com mkdir .ssh
     $ cat .ssh/id_rsa.pub | ssh myuser@server.com 'cat >> .ssh/authorized_keys'

*(Don't do this if you've already uploaded your public ssh key!)*

<div class="vspace">

</div>

Add your repositories
---------------------

Login to the server:

<div class="vspace">

</div>

     $ ssh myuser@server.com

Now we can create our repositories:

<div class="vspace">

</div>

     $ mkdir -p path/to/myrepo.git
     $ cd $!
     $ git init --bare .

The last steps creates an empty repository. This assumes there is a
local repository to push to the remote server.

Log out of the server.

<div class="vspace">

</div>

Configure your development machine
----------------------------------

Add the remotes to the local machine. If you??ve already defined a
remote named origin (for example, if you followed
[GitHub??s](http://github.com) instructions), you??ll want to delete the
remote first:

<div class="vspace">

</div>

     $ git remote rm origin

Now we can add our new remote:

<div class="vspace">

</div>

     $ git remote add origin myuser@server.com:path/to/myrepo.git
     $ git push origin master

And that??s it. You??ll probably also want to make sure you add a
default merge and remote:

<div class="vspace">

</div>

     $ git config branch.master.remote origin
     $ git config branch.master.merge refs/heads/master

And that's it!

<div class="vspace">

</div>

</div>
