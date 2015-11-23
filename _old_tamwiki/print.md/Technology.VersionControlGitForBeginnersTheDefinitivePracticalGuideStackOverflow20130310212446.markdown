<div id="wikitext">

*Article saved from <http://stackoverflow.com> for posterity.*

<div class="vspace">

</div>

<div class="round lrindent important2">

Still needs lots of editing to make it fit for pmwiki...

</div>

<div class="vspace">

</div>

<div class="round lrindent quote">

[Git for beginners: The definitive practical guide](http://stackoverflow.com:80/questions/315911/git-for-beginners-the-definitive-practical-guide)
--------------------------------------------------------------------------------------------------------------------------------------------------

Ok, after seeing [this post by PJ
Hyett](http://stackoverflow.com/questions/315911/git-for-beginners-the-definitive-practical-guide/2678236#2678236),
I have decided to skip to the end and go with
[Git](http://en.wikipedia.org/wiki/Git_software).

So what I need is a beginner's **practical** guide to Git. "Beginner"
being defined as someone who knows how to handle their compiler,
understands to some level what a
[Makefile](http://en.wikipedia.org/wiki/Make_software) is, and has
touched source control without understanding it very well.

"Practical" being defined as this person doesn't want to get into great
detail regarding what Git is doing in the background, and doesn't even
care (or know) that it's distributed. Your answers might hint at the
possibilities, but try to aim for the beginner that wants to keep a
'main' repository on a 'server' which is backed up and secure, and treat
their local repository as merely a 'client' resource.

So:

<div class="vspace">

</div>

Installation/Setup
------------------

-   [How to install
    Git](http://stackoverflow.com/questions/315911/git-for-beginners-the-definitive-practical-guide#323764)
-   How do you set up Git? Try to cover Linux, Windows, Mac, think
    'client/server' mindset.
    -   [Setup GIT Server with Msysgit on
        Windows](http://stackoverflow.com/questions/1482824/setup-git-server-with-msysgit-on-windows)
-   [How do you create a new
    project/repository?](http://stackoverflow.com/questions/315911/git-for-beginners-the-definitive-practical-guide#320140)
-   [How do you configure it to ignore files (.obj, .user, etc) that are
    not really part of the
    codebase?](http://stackoverflow.com/questions/315911/git-for-beginners-the-definitive-practical-guide#316062)!!
    Working with the code
-   [How do you get the latest
    code?](http://stackoverflow.com/questions/315911/git-for-beginners-the-definitive-practical-guide/1350157#1350157)
-   [How do you check out
    code?](http://stackoverflow.com/questions/315911/git-for-beginners-the-definitive-practical-guide#323906)
-   [How do you commit
    changes?](http://stackoverflow.com/questions/315911/git-for-beginners-the-definitive-practical-guide#316055)
-   [How do you see what's uncommitted, or the status of your current
    codebase?](http://stackoverflow.com/questions/315911/git-for-beginners-the-definitive-practical-guide#319465)
-   [How do you destroy unwanted
    commits?](http://stackoverflow.com/questions/315911/git-for-beginners-the-definitive-practical-guide#323898)
-   [How do you compare two revisions of a file, or your current file
    and a previous
    revision?](http://stackoverflow.com/questions/315911/git-for-beginners-the-definitive-practical-guide/1762631#1762631)
-   [How do you see the history of revisions to a
    file?](http://stackoverflow.com/questions/315911/git-for-beginners-the-definitive-practical-guide/2114836#2114836)
-   How do you handle binary files (visio docs, for instance, or
    compiler environments)?
-   How do you merge files changed at the "same time"?
-   [How do you undo (revert or reset) a
    commit?](http://stackoverflow.com/questions/315911/git-for-beginners-the-definitive-practical-guide/323898#323898)!!
    Tagging, branching, releases, baselines
-   [How do you 'mark' 'tag' or 'release' a particular set of revisions
    for a particular set of files so you can always pull that one
    later?](http://stackoverflow.com/questions/315911/git-for-beginners-the-definitive-practical-guide#322967)
-   How do you pull a particular 'release'?
-   [How do you
    branch?](http://stackoverflow.com/questions/315911/git-for-beginners-the-definitive-practical-guide/816614#816614)
-   [How do you merge
    branches?](http://stackoverflow.com/questions/315911/git-for-beginners-the-definitive-practical-guide/816636#816636)
-   How do you resolve conflicts and complete the merge?
-   How do you merge parts of one branch into another branch?
-   [What is
    rebasing?](http://stackoverflow.com/questions/315911/git-for-beginners-the-definitive-practical-guide/5985070#5985070)
-   [How do I track remote
    branches?](http://stackoverflow.com/questions/315911/git-for-beginners-the-definitive-practical-guide/1590791#1590791)
-   [How can I create a branch on a remote
    repository?](http://stackoverflow.com/questions/315911/git-for-beginners-the-definitive-practical-guide/1590803#1590803)
-   [How do I delete a branch on a remote
    repository?](http://stackoverflow.com/questions/315911/git-for-beginners-the-definitive-practical-guide/5977604#5977604)
-   [Git workflow
    examples](http://stackoverflow.com/questions/315911/git-for-beginners-the-definitive-practical-guide/5968622#5968622)!!
    Other
-   Describe and link to a good GUI, IDE plugin, etc. that makes Git a
    non-command line resource, but please list its limitations as well
    as its good.
-   -   [msysgit](http://stackoverflow.com/questions/315911/git-for-beginners-the-definitive-practical-guide#323559) -
    Cross platform, included with Git
    -   [gitk](http://stackoverflow.com/questions/315911/git-for-beginners-the-definitive-practical-guide#323559) -
        Cross platform history viewer, included with Git
    -   [gitnub](http://stackoverflow.com/questions/315911/git-for-beginners-the-definitive-practical-guide#323559) -
        Mac OS X
    -   [gitx](http://stackoverflow.com/questions/315911/git-for-beginners-the-definitive-practical-guide#323559) -
        Mac OS X history viewer
    -   [smartgit](http://stackoverflow.com/questions/315911/git-for-beginners-the-definitive-practical-guide#323559) -
        Cross platform, commercial, beta
    -   [tig](http://stackoverflow.com/questions/315911/git-for-beginners-the-definitive-practical-guide/322989#322989) -
        console GUI for Linux
    -   [qgit](http://stackoverflow.com/questions/315911/git-for-beginners-the-definitive-practical-guide/644129#644129) -
        GUI for Windows, Linux
    -   [Git
        Extensions](http://stackoverflow.com/questions/315911/git-for-beginners-the-definitive-practical-guide#323559) -
        package for Windows, includes friendly GUI
-   Any other common tasks a beginner should know?
    -   [Git Status tells you what you just did, what branch you have,
        and other useful
        information](http://stackoverflow.com/questions/315911/git-for-beginners-the-definitive-practical-guide/319465#319465)
-   How do I work effectively with a subversion repository set as my
    source control source?!! Other Git beginner's references
-   [Git guide](http://www.sourcemage.org/Git_Guide)
-   [Git book](http://book.git-scm.com/)
-   [Git magic](http://www-cs-students.stanford.edu/~blynn/gitmagic/)
-   [gitcasts](http://www.gitcasts.com/)
-   [GitHub guides](http://github.com/guides/home)
-   [Git
    tutorial](http://www.kernel.org/pub/software/scm/git/docs/gittutorial.html)
-   [Progit - book by Scott Chacon](http://progit.org/book)
-   [Git - SVN Crash Course](http://git.or.cz/course/svn.html)
-   [Git from the bottom
    up](http://www.newartisans.com/2008/04/git-from-the-bottom-up.html)
-   [Git ready](http://www.gitready.com)
-   [gitref.org](http://gitref.org/)
-   [Git visual
    cheatsheet](http://www.ndpsoftware.com/git-cheatsheet.html)!!
    Delving into Git
-   [Understanding Git
    conceptually](http://www.eecs.harvard.edu/~cduan/technical/git/)
-   [Git for computer
    scientists](http://eagain.net/articles/git-for-computer-scientists/)
    (and [another version](http://sitaramc.github.com/gcs/))

This question exists because it has historical significance, but **it is
not considered a good, on-topic question for this site**, so please do
not use it as evidence that you can ask similar questions here. This
question and its answers are frozen and cannot be changed. More info:
[FAQ](http://stackoverflow.com/faq).

<div class="vspace">

</div>

How do you create a new project/repository?
===========================================

A git repository is simply a directory containing a special `.git`
directory.

This is different from "centralised" version-control systems (like
subversion), where a "repository" is hosted on a remote server, which
you `checkout` into a "working copy" directory. With git, your working
copy *is* the repository.

Simply run `git init` in the directory which contains the files you wish
to track.

For example,

<div class="vspace">

</div>

<div id="sourceblock1" class="sourceblock">

<div class="sourceblocktext">

<div class="bash">

1.  <div class="de1">

    <span class="kw3">cd</span> \~<span class="sy0">/</span>code<span
    class="sy0">/</span>project001<span class="sy0">/</span>

    </div>

2.  <div class="de1">

    <span class="kw2">git init</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.VersionControlGitForBeginnersTheDefinitivePracticalGuideStackOverflow20130310212446?action=sourceblock&num=1)

</div>

</div>

This creates a `.git` (hidden) folder in the current directory.

To make a new project, run `git init` with an additional argument (the
name of the directory to be created):

<div class="vspace">

</div>

<div id="sourceblock2" class="sourceblock">

<div class="sourceblocktext">

<div class="bash">

1.  <div class="de1">

    <span class="kw2">git init</span> project002

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.VersionControlGitForBeginnersTheDefinitivePracticalGuideStackOverflow20130310212446?action=sourceblock&num=2)

</div>

</div>

This is equivalent to:

<div class="vspace">

</div>

<div id="sourceblock3" class="sourceblock">

<div class="sourceblocktext">

<div class="bash">

1.  <div class="de1">

    <span class="kw2">mkdir</span> project002

    </div>

2.  <div class="de1">

    <span class="kw3">cd</span> project002

    </div>

3.  <div class="de1">

    <span class="kw2">git init</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.VersionControlGitForBeginnersTheDefinitivePracticalGuideStackOverflow20130310212446?action=sourceblock&num=3)

</div>

</div>

To check if the current current path is within a git repository, simply
run `git status` - if it's not a repository, it will report "fatal: Not
a git repository"

You could also list the `.git` directory, and check it contains
files/directories similar to the following:

<div class="vspace">

</div>

<div id="sourceblock4" class="sourceblock">

<div class="sourceblocktext">

<div class="text">

\$ ls .git\
 HEAD         config       hooks/       objects/ branches/  
 description  info/        refs/

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.VersionControlGitForBeginnersTheDefinitivePracticalGuideStackOverflow20130310212446?action=sourceblock&num=4)

</div>

</div>

If for whatever reason you wish to "de-git" a repository (you wish to
stop using git to track that project), simply remove the `.git`
directory at the base level of the repository:

<div class="vspace">

</div>

<div id="sourceblock5" class="sourceblock">

<div class="sourceblocktext">

<div class="bash">

1.  <div class="de1">

    <span class="kw3">cd</span> \~<span class="sy0">/</span>code<span
    class="sy0">/</span>project001<span class="sy0">/</span>

    </div>

2.  <div class="de1">

    <span class="kw2">rm</span> <span class="re5">-rf</span> .git

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.VersionControlGitForBeginnersTheDefinitivePracticalGuideStackOverflow20130310212446?action=sourceblock&num=5)

</div>

</div>

<div class="vspace">

</div>

</div>

<div class="round lrindent warning2">

**Caution:** This will destroy *all* revision history, *all* your tags,
*everything* git has done. It will not touch the "current" files (the
files you can currently see), but previous changes, deleted files and so
on will be unrecoverable!

</div>

<div class="vspace">

</div>

<span class="wikiword">GUIs</span> for git
------------------------------------------

### Git GUI

Included with git — Run `git gui` from the command line, and the Windows
[msysgit](http://code.google.com/p/msysgit/) installer adds it to the
Start menu.

Git GUI can do a majority of what you'd need to do with git. Including
stage changes, configure git and repositories, push changes,
create/checkout/delete branches, merge, and many other things.

One of my favourite features is the "stage line" and "stage hunk"
shortcuts in the right-click menu, which lets you commit specific parts
of a file. You can achieve the same via `git add -i`, but I find it
easier to use.

It isn't the prettiest application, but it works on almost all platforms
(being based upon
Tcl/Tk)[Screenshots](http://www.spearce.org/2007/01/git-gui-screenshots.html)
| [a
screencast](http://www.simplicidade.org/notes/archives/2008/10/gitgui_screenca.html)

<div class="vspace">

</div>

### [GitK](http://www.kernel.org/pub/software/scm/git/docs/gitk.html)

Also included with git. It is a git history viewer, and lets you
visualise a repository's history (including branches, when they are
created, and merged). You can view and search commits.

Goes together nicely with git-gui.

<div class="vspace">

</div>

### [Gitnub](http://github.com/Caged/gitnub/wikis)

Mac OS X application. Mainly an equivalent of `git log`, but has some
integration with [github](http://github.com/Caged/gitnub/tree/master)
(like the "Network view").

Looks pretty, and fits with Mac OS X. You can search repositories. The
biggest critisism of Gitnub is that it shows history in a linear fashion
(a single branch at a time) - it doesn't visualise branching and
merging, which can be important with git, although this is a planned
improvement.

[Download links, change log and
screenshots](http://github.com/Caged/gitnub/wikis) | [git
repository](http://github.com/Caged/gitnub/tree/master)

<div class="vspace">

</div>

### [GitX](http://gitx.frim.nl/)

Intends to be a "gitk clone for OS X".

It can visualise non-linear branching history, perform commits, view and
search commits, and it has some other nice features like being able to
"Quicklook" any file in any revision (press space in the file-list
view), export any file (via drag and drop).

It is far better integrated into OS X than `git-gui`/`gitk`, and is fast
and stable even with exceptionally large repositories.

The original git repository [pieter](https://github.com/pieter) has not
updated recently (over a year at time of writing). A more actively
maintained branch is available at
[brotherbard/gitx](https://github.com/brotherbard/gitx) - it adds
"sidebar, fetch, pull, push, add remote, merge, cherry-pick, rebase,
clone, clone to"[Download](http://gitx.frim.nl/index.html) |
[Screenshots](http://gitx.frim.nl/seeit.html) | [git
repository](http://github.com/pieter/gitx/tree/master) | [brotherbard
fork](https://github.com/brotherbard/gitx) | [laullon
fork](http://gitx.laullon.com/)

<div class="vspace">

</div>

### [SmartGit](http://www.syntevo.com/smartgit/index.html)

From the homepage:

<div class="vspace">

</div>

<div class="indent">

<span class="wikiword">SmartGit</span> is a front-end for the
distributed version control system Git and runs on Windows, Mac OS X and
Linux. <span class="wikiword">SmartGit</span> is intended for developers
who prefer a graphical user interface over a command line client, to be
even more productive with Git — the most powerful DVCS today.

</div>

You can download it from [their
website](http://www.syntevo.com/smartgit/index.html)
[Download](http://www.syntevo.com/smartgit/early-access.html)

<div class="vspace">

</div>

### [TortoiseGit](http://code.google.com/p/tortoisegit/)

<span class="wikiword">TortoiseSVN</span> Git version for Windows users.

<div class="vspace">

</div>

<div class="indent">

It is porting <span class="wikiword">TortoiseSVN</span> to <span
class="wikiword">TortoiseGit</span> The latest release 1.2.1.0 This
release can complete regular task, such commit, show log, diff two
version, create branch and tag, Create patch and so on. See
[ReleaseNotes](http://code.google.com/p/tortoisegit/wiki/ReleaseNotes)
for detail. Welcome to contribute this project.

</div>

[Download](http://code.google.com/p/tortoisegit/downloads/list)

<div class="vspace">

</div>

### [QGit](http://digilander.libero.it/mcostalba/)

<div class="indent">

<span class="wikiword">QGit</span> is a git GUI viewer built on Qt/C++.

</div>

With qgit you will be able to browse revisions history, view patch
content and changed files, graphically following different development
branches. [Download](http://digilander.libero.it/mcostalba/#Download)

<div class="vspace">

</div>

### [gitg](http://trac.novowork.com/gitg/)

<div class="indent">

gitg is a git repository viewer targeting gtk+/GNOME. One of its main
objectives is to provide a more unified user experience for git
frontends across multiple desktops. It does this not be writing a
cross-platform application, but by close collaboration with similar
clients for other operating systems (like <span
class="wikiword">GitX</span> for OS X).

</div>

<div class="vspace">

</div>

#### Features

-   Browse revision history.
-   Handle large repositories (loads linux repository, 17000+ revisions,
    under 1 second).
-   Commit changes.
-   Stage/unstage individual hunks.
-   Revert changes.
-   Show colorized diff of changes in revisions.
-   Browse tree for a given revision.
-   Export parts of the tree of a given revision.
-   Supply any refspec which a command such as 'git log' can understand
    to built the history.
-   Show and switch between branches in the history view.

Download: [releases](http://trac.novowork.com/gitg/wiki/Releases) or
[source](http://trac.novowork.com/gitg/wiki/WikiStart#Source)

<div class="vspace">

</div>

### [Gitbox](http://gitbox.pierlis.com/)

<div class="indent">

Gitbox is a Mac OS X graphical interface for Git version control system.
In a single window you see branches, history and working directory
status.

</div>

Everyday operations are easy: stage and unstage changes with a checkbox.
Commit, pull, merge and push with a single click. Double-click a change
to show a diff with <span class="wikiword">FileMerge</span>.app.

[Download](http://gitbox.pierlis.com/)

<div class="vspace">

</div>

### [Gity](http://macendeavor.com/gity)

The Gity website doesn't have much information, but from the screenshots
on there it appears to be a feature rich open source OS X git gui.

[Download](http://macendeavor.com/gity/download/) or
[source](http://github.com/beheadedmyway/gity)

<div class="vspace">

</div>

### [Meld](http://meld.sourceforge.net/)

<div class="indent">

Meld is a visual diff and merge tool. You can compare two or three files
and edit them in place (diffs update dynamically). You can compare two
or three folders and launch file comparisons. You can browse and view a
working copy from popular version control systems such such as CVS,
Subversion, Bazaar-ng and Mercurial [*and Git*].

</div>

[Downloads](http://ftp.gnome.org/pub/gnome/sources/meld/)

<div class="vspace">

</div>

### [Katana](http://dekorte.com/projects/shareware/Katana)

A Git <span class="wikiword">GUIfor</span> OSX by Steve Dekorte.

<div class="vspace">

</div>

<div class="indent">

At a glance, see which remote branches have changes to pull and local
repos have changes to push. The git ops of add, commit, push, pull, tag
and reset are supported as well as visual diffs and visual browsing of
project hieracy that highlights local changes and additions.

</div>

Free for 1 repository, \$25 for
more.[Download](http://dekorte.com/projects/shareware/Katana)

<div class="vspace">

</div>

### [Sprout (formerly GitMac)](http://www.sproutmacapp.com/sprout)

Focuses on making Git easy to use. Features a native Cocoa (mac-like)
UI, fast repository browsing, cloning, push/pull, branching/merging,
visual diff, remote branches, easy access to the Terminal, and more.

By making the most commonly used Git actions intuitive and easy to
perform, Sprout (formerly <span class="wikiword">GitMac</span>) makes
Git user-friendly. Compatible with most Git workflows, Sprout is great
for designers and developers, team collaboration and advanced and novice
users alike.

[Download](http://www.sproutmacapp.com/sprout) |
[Website](http://www.sproutmacapp.com/sprout)

<div class="vspace">

</div>

### [Tower](http://www.git-tower.com/)

A feature-rich Git GUI for Mac OSX. 30-day free trial, \$59USD for a
single-user license.

[Download](http://www.git-tower.com/download) |
[Website](http://www.git-tower.com/)

<div class="vspace">

</div>

### [EGit](http://eclipse.org/egit/)

<div class="indent">

<span class="wikiword">EGit</span> is an Eclipse Team provider for the
Git version control system. Git is a distributed SCM, which means every
developer has a full copy of all history of every revision of the code,
making queries against the history very fast and versatile.

</div>

The <span class="wikiword">EGit</span> project is implementing Eclipse
tooling on top of the <span class="wikiword">JGit</span> Java
implementation of Git.

[Download](http://eclipse.org/egit/download/) |
[Website](http://eclipse.org/egit/)

<div class="vspace">

</div>

### [Git Extensions](http://code.google.com/p/gitextensions/)

Open Source for Windows - installs everything you need to work with Git
in a single package, easy to use.

<div class="vspace">

</div>

<div class="indent">

Git Extensions is a toolkit to make working with Git on Windows more
intuitive. The shell extension will intergrate in Windows Explorer and
presents a context menu on files and directories. There is also a Visual
Studio plugin to use git from Visual Studio.

</div>

[Download](http://code.google.com/p/gitextensions/downloads/list)

*Big thanks to [dbr](http://stackoverflow.com/users/745/dbrBlockquote)
for elaborating on the git gui stuff.*

<div class="vspace">

</div>

### [SourceTree](http://www.sourcetreeapp.com/)

<span class="wikiword">SourceTree</span> is a *free* Mac client for Git,
Mercurial and SVN. Built by Atlassian, the folks behind <span
class="wikiword">BitBucket</span>, it seems to work equally well with
any VC system, which allows you to master a single tool for use with all
of your projects, however they're version-controlled. Feature-packed,
and FREE.

<div class="vspace">

</div>

<div class="indent">

Expert-Ready & Feature-packed for both novice and advanced users:Review
outgoing and incoming changesets. Cherry-pick between branches. Patch
handling, rebase, stash / shelve and much more.

</div>

[Download](http://www.sourcetreeapp.com/download/) |
[Website](http://www.sourcetreeapp.com/)

<div class="vspace">

</div>

How to configure it to ignore files:
------------------------------------

The ability to have git ignore files you don't wish it to track is very
useful. To ignore a file or set of files you supply a pattern. The
pattern syntax for git is fairly simple, but powerful. It is applicable
to all three of the different files I will mention bellow.

-   A blank line ignores no files, it is generally used as a separator.
-   Lines staring with `#`{.escaped} serve as comments.
-   The `!`{.escaped} prefix is optional and will negate the pattern.
    Any negated pattern that matches will override lower precedence
    patterns.
-   Supports advanced expressions and wild cards
    -   Ex: The pattern: `*.[oa]`{.escaped} will ignore all files in the
        repository ending in .o or .a (object and archive files)
-   If a pattern has a directory ending with a slash git will only match
    this directory and paths underneath it. This excludes regular files
    and symbolic links from the match.
-   A leading slash will match all files in that path name.
    -   Ex: The pattern `/*.c`{.escaped} will match the file `foo.c` but
        not `bar/awesome.c`

Great Example from the
[gitignore(5)](http://www.kernel.org/pub/software/scm/git/docs/gitignore.html)
man page:

<div class="vspace">

</div>

<div id="sourceblock6" class="sourceblock">

<div class="sourceblocktext">

<div class="bash">

\$ <span class="kw2">git status</span> <span
class="br0">[</span>...<span class="br0">]</span>\
 <span class="co0">\# Untracked files: [...]</span>\
 <span class="co0">\#       Documentation/foo.html</span>\
 <span class="co0">\#       Documentation/gitignore.html</span>\
 <span class="co0">\#       file.o</span>\
 <span class="co0">\#       lib.a</span>\
 <span class="co0">\#       src/internal.o [...]</span>\
 \$ <span class="kw2">cat</span> .git<span class="sy0">/</span>info<span
class="sy0">/</span>exclude\
 <span class="co0">\# ignore objects and archives, anywhere in the
tree.</span>\
 <span class="sy0">\*</span>.<span class="br0">[</span>oa<span
class="br0">]</span>\
 \$ <span class="kw2">cat</span> Documentation<span
class="sy0">/</span>.gitignore\
 <span class="co0">\# ignore generated html files,</span>\
 <span class="sy0">\*</span>.html\
 <span class="co0">\# except foo.html which is maintained by
hand</span>\
 <span class="sy0">!</span>foo.html\
 \$ <span class="kw2">git status</span> <span
class="br0">[</span>...<span class="br0">]</span>\
 <span class="co0">\# Untracked files: [...]</span>\
 <span class="co0">\#       Documentation/foo.html [...]</span>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.VersionControlGitForBeginnersTheDefinitivePracticalGuideStackOverflow20130310212446?action=sourceblock&num=6)

</div>

</div>

Generally there are three different ways to ignore untracked files.

<div class="vspace">

</div>

1.  Ignore for all users of the repository:
    -   Add a file named `.gitignore` to the root of your working copy.
    -   Edit `.gitignore` to match your preferences for which files
        should/shouldn't be ignored.
    -   `git add .gitignore` and commit when you're done.

    <div class="vspace">

    </div>

2.  Ignore for only your copy of the repository:
    -   Add/Edit the file `$GIT_DIR/info/exclude` in your working copy,
        with your preferred patterns.
        -   Ex: My working copy is \~/src/project1 so I would edit
            `~/src/project1/.git/info/exclude`
    -   You're done!

    <div class="vspace">

    </div>

3.  Ignore in all situations, on your system:
    -   Global ignore patterns for your system can go in a file named
        what ever you wish.
    -   Mine personally is called `~/.gitglobalignore`
    -   I can then let git know of this file by editing my
        `~/.gitconfig` file with the following line:
        -   `core.excludesfile = ~/.gitglobalignore`
    -   You're done!

I find the
[gitignore](http://www.kernel.org/pub/software/scm/git/docs/gitignore.html)
man page to be the best resource for more information.

[\#322967](#322967)

<div class="vspace">

</div>

47
How do you 'tag' a particular set of revisions*How do you 'mark' 'tag'
or 'release' a particular set of revisions for a particular set of files
so you can always pull that one later?*Using the `git tag` command.To
simply "tag" the current revision, you would just run..
`git tag -a thetagname git tag -a 0.1 git tag -a 2.6.1-rc1 -m 'Released on 01/02/03'`To
list the current tags, simply run `git tag` with no arguments, or `-l`
(lower case L):
`$ git tag -a thetagname # and enter a message, or use -m 'My tag annotation' $ git tag -l thetagname`To
delete a tag, you use the `-d` flag:
`$ git tag -d thetagname  Deleted tag 'thetagname' $ git tag [no output]`To
tag a specific (previous) commit, you simply do..
`git tag [tag name] [revision SHA1 hash]`For example:
`git tag 1.1.1 81b15a68c6c3e71f72e766931df4e6499990385b` ---- Note: by
default, git creates a "lightweight" tag (basically a reference to a
specific revision). The "right" way is to use the `-a` flag. This will
launch your editor asking for a tag message (identical to asking for a
commit message, you can also use the `-m` flag to supply the tag message
on the command line). Using an annotated tag creates an object with its
own ID, date, tagger (author), and optionally a GPG signature (using the
`-s` tag). *For further information on this, see [this
post](http://www.rockstarprogrammer.org/post/2008/oct/16/git-tag-does-wrong-thing-default/)*
`git tag mytagwithmsg -a -m 'This is a tag, with message'`And to list
the tags with annotations, use the `-n1` flag to show 1 line of each tag
message (`-n245` to show the first 245 lines of each annotation, and so
on): `$ git tag -l -n1 mytagwithmsg    This is a tag, with message`For
more information, see the [git-tag(1) Manual
Page](http://www.kernel.org/pub/software/scm/git/docs/git-tag.html)
 
[share](http://stackoverflow.com:80/a/322967)
edited [Apr 6 '09 at
13:43](http://stackoverflow.com:80/posts/322967/revisions)\
answered Nov 27 '08 at
4:58[http://www.gravatar.com/avatar/edf857d71f672d8f411ef6b8376316b8?s=32&d=identicon&r=PG](http://stackoverflow.com:80/users/745/dbr)[dbr](http://stackoverflow.com:80/users/745/dbr)\
 48k19123220
 
 
 
 
1
 
 
To push tags into the remote repo, add --tags when using git push (info
from github help area). – [Hector
Ramos](http://stackoverflow.com:80/users/19617/hector-ramos) Dec 23 '09
at 12:07
[\#5968622](#5968622)

<div class="vspace">

</div>

46
Workflow example with GIT.Git is extremely flexible and adapts good to
any workflow, but not enforcing a particular workflow might have the
negative effect of making it hard to understand what you can do with git
beyond the linear "backup" workflow, and how useful branching can be for
example.This [blog
post](http://nvie.com/posts/a-successful-git-branching-model/) explains
nicely a very simple but effective workflow that is really easy to setup
using git.quoting from the blog post: We consider origin/master to be
the main branch where the source code of HEAD always reflects a
production-ready state:The workflow has become popular enough to have
made a project that implements this workflow:
[git-flowNice](https://github.com/nvie/gitflow) illustration of a simple
workflow, where you make all your changes in develop, and only push to
master when the code is in a production
state:![](http://i.stack.imgur.com/NAOZI.png)Now let's say you want to
work on a new feature, or on refactoring a module. You could create a
new branch, what we could call a "feature" branch, something that will
take some time and might break some code. Once your feature is "stable
enough" and want to move it "closer" to production, you merge your
feature branch into develop. When all the bugs are sorted out after the
merge and your code passes all tests rock solid, you push your changes
into master.During all this process, you find a terrible security bug,
that has to be fixed right away. You could have a branch called
hotfixes, that make changes that are pushed quicker back into production
than the normal "develop" branch.Here you have an illustration of how
this feature/hotfix/develop/production workflow might look like (well
explained in the blog post, and I repeat, the blog post explains the
whole process in a lot more detail and a lot better than I
do.![](http://i.stack.imgur.com/6rDUk.png)
 
[share](http://stackoverflow.com:80/a/5968622)
edited [May 13 '11 at
9:37](http://stackoverflow.com:80/posts/5968622/revisions)\
community wiki\
 [3 revs\
 ashwoods](http://stackoverflow.com:80/posts/5968622/revisions)
 
 
 
 
 
[\#2678236](#2678236)

<div class="vspace">

</div>

39
Here's a copy of PJ Hyett's post, as it is not available anymore: -\>!!
Git Isn't <span class="wikiword">HardNov</span> 23, 2008When we tell
people why they should use Git over Subversion, the go-to line is, “Git
does Subversion better than Subversion, but it does a lot more than
that.”The “lot more” is comprised of a bunch of stuff that makes Git
really shine, but it can be pretty overwhelming for those coming from
other SCM’s like Subversion.That said, there’s nothing stopping you from
using Git just like you use Subversion while you’re making the
transition.Assuming you’ve installed the necessary software and have a
remote repository somewhere, this is how you would grab the code and
push your changes back with
Subversion:`$ svn checkout svn://foo.googlecode.com/svn/trunk foo`\
 `# make your changes`\
 `$ svn commit -m "my first commit"`And how would you do it in
Git:`$ git clone git@github.com:pjhyett/foo.git`\
 `# make your changes`\
 `$ git commit -a -m "my first commit"`\
 `$ git push`One more command to make it happen in Git. That extra
command has large implications, but for the purposes of this post,
that’s all we’re talking about, one extra command.See, it really isn’t
that hard.**Update:** I’d be remiss to not also mention that the
equivalent of updating your local copy in Subversion compared to Git is
`svn update` and `git pull`, respectively. Only one command in both
cases.
 
[share](http://stackoverflow.com:80/a/2678236)
answered [Apr 20 '10 at
20:02](http://stackoverflow.com:80/posts/2678236/revisions)\
community wiki\
 [Adam Davis](http://stackoverflow.com:80/posts/2678236/revisions)
 
 
 
 
3
 
 
Original link was
[pjhyett.com/posts/234-git-isn-t-hard](http://www.pjhyett.com/posts/234-git-isn-t-hard)
– [Adam Davis](http://stackoverflow.com:80/users/2915/adam-davis) Apr 20
'10 at 20:05
 
 
3
 
 
[pjhyett.com/2008/11/23/git-isnt-hard.html](http://pjhyett.com/2008/11/23/git-isnt-hard.html)
– [Adam Jurczyk](http://stackoverflow.com:80/users/849078/adam-jurczyk)
Sep 23 '11 at 20:47
[\#323764](#323764)

<div class="vspace">

</div>

33
How to install Git!! On Windows:Install
[msysgitThere](http://code.google.com/p/msysgit/) are several downloads:
-   **Git:** Use this unless you specifically need one of the other
    options below.
-   **<span class="wikiword">PortableGit</span>:** Use this if you want
    to run Git on a PC without installing on that PC (e.g. running Git
    from a USB drive)
-   **msysGit:** Use this if you want to develop Git itself. If you just
    want to use Git for *your* source code, but don't want to edit
    *Git's* source code, you don't need this.This also installs a Cygwin
    bash shell, so you can use the `git` in a nicer shell (than
    cmd.exe), and also includes git-gui (accessible via `git gui`
    command, or the `Start > All Programs > Git` menu)!! Mac OS <span
    class="wikiword">XUse</span> the
    [git-osx-installer](http://code.google.com/p/git-osx-installer/), or
    you can also install from source!! Via a package managerInstall
    `git` using your native package manager. For example, on Debian (or
    Ubuntu): `apt-get install git-core`Or on Mac OS X, via
    [MacPorts](http://www.macports.org/):
    `sudo port install git-core+bash_completion+doc`…or fink:
    `fink install git`…or [Homebrew](http://github.com/mxcl/homebrew):
    `brew install git`On Red Hat based distributions, such as Fedora:
    `yum install git`In Cygwin the Git package can be found under the
    "devel" section!! From source (Mac OS X/Linux/BSD/etc.)In Mac OS X,
    if you have the Developer Tools installed, you can compile Git from
    source very easily. Download the latest version of Git as a
    `.tar.bz` or `.tar.gz` from <http://git-scm.com/>, and extract it
    (double click in Finder)On Linux/BSD/etc. it should be much the
    same. For example, in Debian (and Ubuntu), you need to install the
    `build-essential` package via `apt`.Then in a Terminal, `cd` to
    where you extracted the files (Running `cd ~/Downloads/git*/` should
    work), and then run.. `./configure && make && sudo make install`This
    will install Git into the default place (`/usr/local` - so `git`
    will be in `/usr/local/bin/git`)It will prompt you to enter your
    password (for `sudo`), this is so it can write to the `/usr/local/`
    directory, which can only be accessed by the "root" user so sudo is
    required!If you with to install it somewhere separate (so Git's
    files aren't mixed in with other tools), use `--prefix` with the
    configure command:
    `./configure --prefix=/usr/local/gitpath make sudo make install`This
    will install the `git` binary into
    `/usr/local/bin/gitpath/bin/git` - so you don't have to type that
    every time you, you should add into your `$PATH` by adding the
    following line into your `~/.profile`:
    `export PATH="${PATH}:/usr/local/bin/gitpath/bin/"`If you do not
    have sudo access, you can use `--prefix=/Users/myusername/bin` and
    install into your home directory. Remember to add `~/bin/` to
    `$PATH`The script
    [x-git-update-to-latest-version](http://www.simplicidade.org/notes/archives/2008/09/updated_xgitupd.html)
    automates a lot of this: -\>This script updates my local clone of
    the git repo (localy at `~/work/track/git`), and then configures,
    installs (at `/usr/local/git`-`git describe`) and updates the
    `/usr/local/git` symlink.This way, I can have `/usr/local/git/bin`
    in my `PATH` and I'm always using the latest version.The latest
    version of this script also installs the man pages. You need to
    tweak your `MANPATH` to include the `/usr/local/git/share/man`
    directory.|| ||[share](http://stackoverflow.com:80/a/323764) ||
    edited [Mar 24 '11 at
    19:26](http://stackoverflow.com:80/posts/323764/revisions)[http://www.gravatar.com/avatar/750159e9cdab58c4b6547d382311c9af?s=32&d=identicon&r=PG](http://stackoverflow.com:80/users/5486/kyralessa)[Kyralessa](http://stackoverflow.com:80/users/5486/kyralessa)\
     40.7k987124|| answered Nov 27 '08 at
    13:25[http://www.gravatar.com/avatar/edf857d71f672d8f411ef6b8376316b8?s=32&d=identicon&r=PG](http://stackoverflow.com:80/users/745/dbr)[dbr](http://stackoverflow.com:80/users/745/dbr)\
     48k19123220|| ||

  ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----
                    5                 On                2                 On    
                                      Fedor                               Mac,  
                                      a:                                  `sudo 
                                      `yum                                 port 
                                      insta                                inst 
                                      ll gi                               all g 
                                      t`.                                 it-co 
                                      For                                 re+ba 
                                      the                                 sh_co 
                                      GUI                                 mplet 
                                      run                                 ion+d 
                                      `yum                                oc`   
                                      insta                               – [Si 
                                      ll gi                               nglet 
                                      t-gui                               oned] 
                                      `.                                  (http 
                                      – [Cr                               ://st 
                                      istia                               ackov 
                                      n                                   erflo 
                                      Ciupi                               w.com 
                                      tu](h                               :80/u 
                                      ttp:/                               sers/ 
                                      /stac                               46715 
                                      kover                               /sing 
                                      flow.                               leton 
                                      com:8                               ed)   
                                      0/use                               Oct 9 
                                      rs/12                               '09   
                                      892/c                               at    
                                      risti                               11:08 
                                      an-ci                                     
                                      upitu                                     
                                      )                                         
                                      Sep                                       
                                      12                                        
                                      '09                                       
                                      at                                        
                                      2:17                                      
  ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----

[\#323898](#323898)

<div class="vspace">

</div>

32
Git <span class="wikiword">ResetSay</span> you make a pull, merge it
into your code, and decide you don't like it. Use git-log, or tig, and
find the hash of wherever you want to go back to (probably your last
commit before the pull/merge) copy the hash, and do:
`# Revert to a previous commit by hash: git-reset --hard <hash>`Instead
of the hash, you can use **HEAD\^** as a shortcut for the previous
commit. `# Revert to previous commit: git-reset --hard HEAD^`
 
[share](http://stackoverflow.com:80/a/323898)
edited [Mar 17 '10 at
7:22](http://stackoverflow.com:80/posts/323898/revisions)\
answered Nov 27 '08 at
14:25[http://www.gravatar.com/avatar/7e039d6aad8ab7ebe721efb30188dc6c?s=32&d=identicon&r=PG](http://stackoverflow.com:80/users/14966/dean-rather)[Dean
Rather](http://stackoverflow.com:80/users/14966/dean-rather)\
 4,86452544
 
 
 
 
4
 
 
This is the analog to a revert in most other centralized version control
systems. – [Jeremy
Wall](http://stackoverflow.com:80/users/51233/jeremy-wall) Aug 29 '09 at
1:52
 
 
6
 
 
just a plain old `git reset` should unstage accidental `git add`
– [slf](http://stackoverflow.com:80/users/13263/slf) Mar 26 '10 at 2:43
[\#2964397](#2964397)

<div class="vspace">

</div>

31
How do you set up a shared team repository?How to set up a *normal*
repository is described
[here](http://stackoverflow.com/questions/315911/git-for-beginners-the-definitive-practical-guide/320140#320140) --
but how do you set up a team repository that everybody can pull and push
from and to?!! Using a shared NFS file systemAssuming your team already
has for instance a shared group membership that can be used.
`mkdir /your/share/folder/project.git cd /your/share/folder/project.git newgrp yourteamgroup # if necessary git init --bare --shared`To
start using this repository the easiest thing to do is start from a
local repository you already have been using:
`cd your/local/workspace/project git remote add origin /your/share/folder/project.git git push origin master`Others
can now clone this and start working:
`cd your/local/workspace git clone /your/share/folder/project.git`!!
Using <span class="wikiword">SSHSet</span> up a user account on the
target server. Whether you use an account with no password, an account
with a password, or use `authorized_keys` really depend on your required
level of security. Take a look at [Configuring Git over
SSH](http://stackoverflow.com/questions/1595848/configuring-git-over-ssh)
for some more information.If all developers use the same account for
accessing this shared repository, you do not need to use the `--shared`
option as above.After initing the repository in the same way as above,
you do the initial push like this:
`cd your/local/workspace/project git remote add origin user@server:/path/to/project.git git push origin master`See
the similarity with the above? The only thing that might happen in
addition is SSH asking for a password if the account has a password. If
you get this prompt on an account without a password the SSH server
probably has disabled `PermitEmptyPasswords`.Cloning now looks like
this:
`cd your/local/workspace git clone user@server:/path/to/project.git`
 
[share](http://stackoverflow.com:80/a/2964397)
edited [Jun 3 '10 at
20:46](http://stackoverflow.com:80/posts/2964397/revisions)\
community wiki\
 [2 revs\
 Asgeir S. Nilsen](http://stackoverflow.com:80/posts/2964397/revisions)
 
 
 
 
 
[\#319465](#319465)

<div class="vspace">

</div>

  ---- -------------------------------------------------------------------------------
  28   `git status` is your friend, use it often. Good for answering questions like:
  ---- -------------------------------------------------------------------------------

-   What did that command just do?
-   What branch am I on?
-   What changes am I about to commit, and have I forgotten anything?
-   Was I in the middle of something last time I worked on this project
    (days, weeks, or perhaps months ago)?Unlike, say `svn status`,
    `git status` runs nigh-instantly even on large projects. I often
    found it reassuring while learning git to use it frequently, to make
    sure my mental model of what was going on was accurate. Now I mostly
    just use it to remind myself what I've changed since my last
    commit.Obviously, it's much more useful if [your .gitignore is
    sanely configured.](http://stackoverflow.com:80/#316062)||
    ||[share](http://stackoverflow.com:80/a/319465) || edited [Feb 17
    '09 at 0:30](http://stackoverflow.com:80/posts/319465/revisions)\
    || answered Nov 26 '08 at
    1:20[http://www.gravatar.com/avatar/cfd2734f1de31db479ec2a8a4ecbd649?s=32&d=identicon&r=PG](http://stackoverflow.com:80/users/101/peter-burns)[Peter
    Burns](http://stackoverflow.com:80/users/101/peter-burns)\
     9,98141831|| ||

  --- --- --- --- ---
                   
  --- --- --- --- ---

[\#316055](#316055)

<div class="vspace">

</div>

27
! Commit <span class="wikiword">ChangesOnce</span> you've edited a file,
you need to commit your changes to git. When you execute this command it
will ask for a commit message - which is just a simple bit of text that
tells everyone what you've changed. `$ git commit source/main.c`Will
commit the file main.c in the directory ./source/
`$ git commit -a # the -a flag pulls in all modified files`will commit
all changed files (but not new files, those need to be added to the
index with git-add). If you want to commit only certain files then you
will need to stage them first with git-add and then commit without
the -a flag.Commiting only changes your local repository though not the
remote repositories. If you want to send the commits to the remote
repository then you will need to do a push.
`$ git push <remote> <branch> # push new commits to the <branch> on the <remote> repository`For
someone coming from CVS or SVN this is a change since the commit to the
central repository now requires two steps.
 
[share](http://stackoverflow.com:80/a/316055)
edited [Aug 29 '09 at
1:40](http://stackoverflow.com:80/posts/316055/revisions)\
community wiki\
 [4 revs, 4 users 41%\
 Adam Davis](http://stackoverflow.com:80/posts/316055/revisions)
 
 
 
 
 
 
[\#816614](#816614)

<div class="vspace">

</div>

27
How do you branch?The default branch in a git repository is called
`master`.To create a new branch use `git branch <branch-name>`To see a
list of all branches in the current repository type `git branch`If you
want to switch to another branch you can use
`git checkout <branch-name>`To create a new branch and switch to it in
one step `git checkout -b <branch-name>`To delete a branch, use
`git branch -d <branch-name>`To create a branch with the changes from
the current branch, do `git stash git stash branch <branch-name>`
 
[share](http://stackoverflow.com:80/a/816614)
edited [May 15 '10 at
9:49](http://stackoverflow.com:80/posts/816614/revisions)\
answered May 3 '09 at
8:56[http://www.gravatar.com/avatar/19cd48a6def49387cf13efa9420334d6?s=32&d=identicon&r=PG](http://stackoverflow.com:80/users/830/markus-dulghier)[Markus
Dulghier](http://stackoverflow.com:80/users/830/markus-dulghier)\
 1,1171016
 
 
 
 
11
 
 
you should mention the shortcut git checkout -b \<branch-name\> which
creates a branch and switches to it in one step. It's probably the most
common use case for a beginner and even advanced git user. – [Jeremy
Wall](http://stackoverflow.com:80/users/51233/jeremy-wall) Aug 29 '09 at
1:46
 
[\#1350157](#1350157)

<div class="vspace">

</div>

21
! Getting the latest Code
`$ git pull <remote> <branch> # fetches the code and merges it into                               # your working directory $ git fetch <remote> <branch> # fetches the code but does not merge                               # it into your working directory $ git pull --tag <remote> <branch> # same as above but fetch tags as well $ git fetch --tag <remote> <branch> # you get the idea`That
pretty much covers every case for getting the latest copy of the code
from the remote repository.
 
[share](http://stackoverflow.com:80/a/1350157)
edited [Aug 29 '09 at
1:41](http://stackoverflow.com:80/posts/1350157/revisions)\
answered Aug 29 '09 at
1:33[http://www.gravatar.com/avatar/c92da37f356622a97ff8a2bfe3d4d962?s=32&d=identicon&r=PG](http://stackoverflow.com:80/users/51233/jeremy-wall)[Jeremy
Wall](http://stackoverflow.com:80/users/51233/jeremy-wall)\
 7,5061334
 
 
 
 
 
 
[\#3260048](#3260048)

<div class="vspace">

</div>

20
The [Pro Git](http://progit.org) free book is definitely my favorite,
especially for beginners.
 
[share](http://stackoverflow.com:80/a/3260048)
edited [Aug 29 '10 at
0:13](http://stackoverflow.com:80/posts/3260048/revisions)\
community wiki\
 [2 revs, 2 users 56%\
 Peter Mortensen](http://stackoverflow.com:80/posts/3260048/revisions)
 
 
 
 
 
 
[\#316058](#316058)

<div class="vspace">

</div>

18
[Git Magic](http://www-cs-students.stanford.edu/~blynn/gitmagic/) is all
you'll ever need. Guaranteed or your money back!
 
[share](http://stackoverflow.com:80/a/316058)
answered Nov 25 '08 at
1:02[http://www.gravatar.com/avatar/271c72e2cc3ca9cc56d06adc4f28d06a?s=32&d=identicon&r=PG](http://stackoverflow.com:80/users/22586/andrew)[Andrew](http://stackoverflow.com:80/users/22586/andrew)\
 1,082815
 
 
 
 
14
 
 
Sigh, I want my money back. Buggy software (msysGit) with an incomplete
tutorial (<span class="wikiword">GitMagic</span>) == hours of work,
which is hardly free
– [SamGoody](http://stackoverflow.com:80/users/87520/samgoody) Apr 23
'09 at 14:30
[\#816636](#816636)

<div class="vspace">

</div>

16
How do you merge branches?If you want to merge a branch (e.g. `master`
to `release`), make sure your current branch is the target branch you'd
like to merge into (use `git branch` or `git status` to see your current
branch).Then use `git merge master`(where `master` is the name of the
branch you want to merge with the current branch).If there are any
conflicts, you can use `git diff`to see pending conflicts you have to
resolve.
 
[share](http://stackoverflow.com:80/a/816636)
answered May 3 '09 at
9:08[http://www.gravatar.com/avatar/19cd48a6def49387cf13efa9420334d6?s=32&d=identicon&r=PG](http://stackoverflow.com:80/users/830/markus-dulghier)[Markus
Dulghier](http://stackoverflow.com:80/users/830/markus-dulghier)\
 1,1171016
 
 
 
 
1
 
 
So how do you resolve conflicts and complete the merge? – [Steve
Folly](http://stackoverflow.com:80/users/48659/steve-folly) Oct 15 '09
at 15:22
 
 
2
 
 
There is git mergetool which does a three-way-diff with your favourite
tool (gvimdiff, kdiff3 or some more) – [Dave
Vogt](http://stackoverflow.com:80/users/35189/dave-vogt) Oct 26 '09 at
13:04
 
[\#1654997](#1654997)

<div class="vspace">

</div>

16
I've also found [Git
Internals](http://peepcode.com/products/git-internals-pdf) to be very
useful. It is written by Scott Chacon (author of Pro Git, and maintainer
of the Git Community Book). What I like about Git Internals is it
[focuses on the concepts first and then the
commands](http://blog.jordanterrell.com/post/Favor-Concepts-Over-Commands.aspx),
and being that it is \~100 small pages it is quickly digestible.
 
[share](http://stackoverflow.com:80/a/1654997)
answered [Oct 31 '09 at
17:21](http://stackoverflow.com:80/posts/1654997/revisions)\
community wiki\
 [Jordan](http://stackoverflow.com:80/posts/1654997/revisions)
 
 
 
 
 
 
[\#2114836](#2114836)

<div class="vspace">

</div>

13
How do you see the history of revisions to a file? `git log -- filename`
 
[share](http://stackoverflow.com:80/a/2114836)
answered [Jan 22 '10 at
3:59](http://stackoverflow.com:80/posts/2114836/revisions)\
community wiki\
 [Pierre-Antoine
LaFayette](http://stackoverflow.com:80/posts/2114836/revisions)
 
 
 
 
 
[\#1590791](#1590791)

<div class="vspace">

</div>

12
How to track remote branchesAssuming there is a remote repository that
you cloned your local repository from and also assuming that there is a
branch named 'some\_branch' on that remote repository, here is how to
track it locally:
`# list remote branches git branch -r # start tracking one remote branch git branch --track some_branch origin/some_branch # change to the branch locally git checkout some_branch # make changes and commit them locally .... # push your changes to the remote repository: git push`
 
[share](http://stackoverflow.com:80/a/1590791)
answered [Oct 19 '09 at
20:02](http://stackoverflow.com:80/posts/1590791/revisions)\
community wiki\
 [innaM](http://stackoverflow.com:80/posts/1590791/revisions)
 
 
 
 
 
[\#1762302](#1762302)

<div class="vspace">

</div>

11
A real good paper for understanding how Git works is [The Git
Parable](http://tom.preston-werner.com/2009/05/19/the-git-parable.html).
Very recommended!
 
[share](http://stackoverflow.com:80/a/1762302)
edited [Aug 9 '10 at
14:10](http://stackoverflow.com:80/posts/1762302/revisions)\
community wiki\
 [2 revs, 2 users 60%\
 EricSchaefer](http://stackoverflow.com:80/posts/1762302/revisions)
 
 
 
 
 
 
[\#1762631](#1762631)

<div class="vspace">

</div>

10
How do you compare two revisions of a file, or your current file and a
previous revision?Compare command is `git diff`.To compare 2 revisions
of a file: `$ git diff <commit1> <commit2> <file_name>`That diffs
commit1 against commit2; if you change order then files are diffed the
other way round, which may not be what you expect...To compare current
staged file against the repository: `$ git diff --staged <file_name>`To
compare current unstaged file against the repository:
`$ git diff <file_name>`
 
[share](http://stackoverflow.com:80/a/1762631)
answered [Nov 19 '09 at
11:21](http://stackoverflow.com:80/posts/1762631/revisions)\
community wiki\
 [kret](http://stackoverflow.com:80/posts/1762631/revisions)
 
 
 
 
 
 
[\#316039](#316039)

<div class="vspace">

</div>

9
Why yet another howto? There are really good ones on the net, like the
[git guide](http://www.sourcemage.org/Git_Guide) which is perfect to
begin. It has good links including the [git
book](http://book.git-scm.com/) to which one can contribute (hosted on
git hub) and which is perfect for this collective task.On stackoverflow,
I would really prefer to see your favorite tricks !Mine, which I
discovered only lately, is `git stash`, explained
[here](http://book.git-scm.com/4_stashing.html), which enables you to
save your current job and go to another branchEDIT: as the previous
post, if you really prefer stackoverlow format with posts as a wiki I
will delete this answer
 
[share](http://stackoverflow.com:80/a/316039)
answered Nov 25 '08 at
0:52[http://www.gravatar.com/avatar/52d7832f1ef16be20bd7eb96e31910da?s=32&d=identicon&r=PG](http://stackoverflow.com:80/users/38796/piotr-lesnicki)[Piotr
Lesnicki](http://stackoverflow.com:80/users/38796/piotr-lesnicki)\
 3,21411119
 
 
 
 
 
[\#322989](#322989)

<div class="vspace">

</div>

9
Console UI - Tig!! Installation: `apt-get install tig`!! <span
class="wikiword">UsageWhile</span> inside a git repo, type 'tig', to
view an interactive log, hit 'enter' on any log to see more information
about it. **h** for help, which lists the basic functionality.!!
Trivia"Tig" is "Git" backwards.
 
[share](http://stackoverflow.com:80/a/322989)
edited [Nov 27 '08 at
14:21](http://stackoverflow.com:80/posts/322989/revisions)\
answered Nov 27 '08 at
5:23[http://www.gravatar.com/avatar/7e039d6aad8ab7ebe721efb30188dc6c?s=32&d=identicon&r=PG](http://stackoverflow.com:80/users/14966/dean-rather)[Dean
Rather](http://stackoverflow.com:80/users/14966/dean-rather)\
 4,86452544
 
 
 
 
 
[\#1590803](#1590803)

<div class="vspace">

</div>

8
How can I create a branch on a remote repository?Assuming that you have
cloned your remote repository from some single remote repository.
`# create a new branch locally git branch name_of_branch git checkout name_of_branch # edit/add/remove files     # ...  # Commit your changes locally git add fileName git commit -m Message # push changes and new branch to remote repository: git push origin name_of_branch:name_of_branch`
 
[share](http://stackoverflow.com:80/a/1590803)
answered [Oct 19 '09 at
20:05](http://stackoverflow.com:80/posts/1590803/revisions)\
community wiki\
 [innaM](http://stackoverflow.com:80/posts/1590803/revisions)
 
 
 
 
11
 
 
why name\_of\_branch:name\_of\_branch ? – [Seun
Osewa](http://stackoverflow.com:80/users/6475/seun-osewa) Mar 15 '10 at
13:18
[\#720216](#720216)

<div class="vspace">

</div>

8
I got started with the official [Git
tutorial](http://www.kernel.org/pub/software/scm/git/docs/gittutorial.html).
I think it's practical enough for beginners (I was, and still am, a
beginner, by your definition! I barely grasp makefiles, I've only played
a bit with Apache Subversion, etc.).
 
[share](http://stackoverflow.com:80/a/720216)
edited [Aug 29 '10 at
0:15](http://stackoverflow.com:80/posts/720216/revisions)[http://www.gravatar.com/avatar/18e42b0ddc143340cfb072987f45ca50?s=32&d=identicon&r=PG](http://stackoverflow.com:80/users/63550/peter-mortensen)[Peter
Mortensen](http://stackoverflow.com:80/users/63550/peter-mortensen)\
 5,77973364
answered Apr 6 '09 at
3:56[http://www.gravatar.com/avatar/1ed4b7a51cba32768eee5ec2ad2d24cd?s=32&d=identicon&r=PG](http://stackoverflow.com:80/users/35364/hasen-j)[hasen
j](http://stackoverflow.com:80/users/35364/hasen-j)\
 21.9k2695152
 
 
 
 
 
 
[\#5977604](#5977604)

<div class="vspace">

</div>

8
! How do I delete a branch on a remote repository?Perform a push in your
remote using `:` before the name of the branch
`git push origin :mybranchname`being `origin` the name of your remote
and `mybranchname` the name of the branch about to be
deletedhttp://help.github.com/remotes/
 
[share](http://stackoverflow.com:80/a/5977604)
answered [May 12 '11 at
11:58](http://stackoverflow.com:80/posts/5977604/revisions)\
community wiki\
 [Felipe Sabino](http://stackoverflow.com:80/posts/5977604/revisions)
 
 
 
 
 
 
[\#323748](#323748)

<div class="vspace">

</div>

7
**Push and pull changes**In an simplified way, just do `git push` and
`git pull`. Changes are merged and if there's a conflict git will let
you know and you can resolve it manually.When you first push to a remote
repository you need to do a `git push origin master` (master being the
master branch). From then on you just do the `git push`.Push tags with
`git push --tags`.
 
[share](http://stackoverflow.com:80/a/323748)
answered Nov 27 '08 at
13:21[http://www.gravatar.com/avatar/af2187787494c38fb16c8533d0cd693b?s=32&d=identicon&r=PG](http://stackoverflow.com:80/users/38795/dylanfm)[dylanfm](http://stackoverflow.com:80/users/38795/dylanfm)\
 4,12811423
 
 
 
 
 
 
[\#323906](#323906)

<div class="vspace">

</div>

7
Checking Out <span class="wikiword">CodeFirst</span> go to an empty dir,
use "git init" to make it a repository, then clone the remote repo into
your own. `git clone user@host.com:/dir/to/repo`Wherever you initially
clone from is where "git pull" will pull from by default.
 
[share](http://stackoverflow.com:80/a/323906)
answered Nov 27 '08 at
14:27[http://www.gravatar.com/avatar/7e039d6aad8ab7ebe721efb30188dc6c?s=32&d=identicon&r=PG](http://stackoverflow.com:80/users/14966/dean-rather)[Dean
Rather](http://stackoverflow.com:80/users/14966/dean-rather)\
 4,86452544
 
 
 
 
7
 
 
I think clone does the init step for you removing the need to run init
first. git init is really mostly for creating the first repository or
for special configurations with multiple remotes that you want to set up
different than a standard clone. – [Jeremy
Wall](http://stackoverflow.com:80/users/51233/jeremy-wall) Aug 29 '09 at
1:51
 
<div class="vspace">

</div>

<div class="vspace">

</div>

<div style="display: none;">

Summary: Stackoverflow article on git Tags: git, tools, version control,
stackoverflow, saved page Source:
<http://stackoverflow.com/questions/315911/git-for-beginners-the-definitive-practical-guide>
Parent: (Technology.)Git includeme: [[Technology.Git]
Categories:[Compilations](http://wiki.tamouse.org?n=Category.Compilations),
[[!Links]

</div>

Page saved at: Sun, 10 Mar 2013 21:24:46 -0500

<div class="vspace">

</div>

</div>
