<div id="wikitext">

<div style="display: none;">

Title: User-triggerable NULL pointer dereference due to utter plebbery
Summary: a rather comical bug report that brings in words such as
'plebbery' and 'LOLLERPLEX' Categories:
[Articles](http://wiki.tamouse.org?n=Category.Articles),
[Humour](http://wiki.tamouse.org?n=Category.Humour) Tags: funny, geek,
humour, bug report, null Source:
<https://jira.mongodb.org/browse/PYTHON-532> Parent:<span
class="wikiword">[SavedArticles](http://wiki.tamouse.org?n=SavedArticles.HomePage?action=print)</span>(.<span
class="wikiword">[HomePage](http://wiki.tamouse.org?n=SavedArticles.HomePage?action=print)</span>)
<span
class="wikiword">[IncludeMe](http://wiki.tamouse.org?n=SavedArticles.IncludeMe?action=edit)[?](http://wiki.tamouse.org?n=SavedArticles.IncludeMe?action=edit)</span>:[SavedArticles.HomePage](http://wiki.tamouse.org?n=SavedArticles.HomePage?action=print)

</div>

<div class="vspace">

</div>

[![](https://www.10gen.com/static/images/logo-mongodb-for-jira.png)](https://jira.mongodb.org/secure/MyJiraHome.jspa)
=====================================================================================================================

-   [Log
    In](https://jira.mongodb.org/login.jsp?os_destination=/browse/PYTHON-532)
    [Access more options](https://jira.mongodb.org#)
    -   [Online
        Help](https://docs.atlassian.com/jira/docs-051/JIRA+Documentation)
    -   [GreenHopper
        Help](http://docs.atlassian.com/greenhopper/docs-0610/GreenHopper+Documentation)
    -   [Agile Answers](http://answers.atlassian.com/tags/agile/)
    -   [Keyboard
        Shortcuts](https://jira.mongodb.org/secure/ViewKeyboardShortcuts!default.jspa)
    -   [About JIRA](http://www.atlassian.com/software/jira)
    -   [JIRA
        Credits](https://jira.mongodb.org/secure/JiraCreditsPage!default.jspa)
    -   [What??s
        New](https://docs.atlassian.com/jira/docs-051/whatsnew/iframe)

    <div class="vspace">

    </div>

-   [Dashboards](https://jira.mongodb.org/secure/Dashboard.jspa) [Access
    more options (Ctrl+Alt+d)](https://jira.mongodb.org#)
-   [Projects](https://jira.mongodb.org/browse/PYTHON) [Access more
    options (Ctrl+Alt+p)](https://jira.mongodb.org#)
-   [Issues](https://jira.mongodb.org/secure/IssueNavigator.jspa)
    [Access more options (Ctrl+Alt+i)](https://jira.mongodb.org#)
-   [Agile](https://jira.mongodb.org/secure/GreenHopper.jspa) [Access
    more options (Ctrl+Alt+g)](https://jira.mongodb.org#)
    <div class="vspace">

    </div>

-   Quick Search

<div class="vspace">

</div>

       https://jira.mongodb.org/secure/projectavatar?pid=10004&avatarId=10908&size=large

<div class="vspace">

</div>

-   [Python Driver](https://jira.mongodb.org/browse/PYTHON)
-   [PYTHON-532](https://jira.mongodb.org/browse/PYTHON-532)

<div class="vspace">

</div>

[User-triggerable NULL pointer dereference due to utter plebbery](https://jira.mongodb.org/browse/PYTHON-532)
=============================================================================================================

-   [Agile
    Board](https://jira.mongodb.org/secure/GHGoToBoard.jspa?issueId=77390)
-   More Actions
    <div class="vspace">

    </div>

-   [Views](https://jira.mongodb.org#)
    -   [XML](https://jira.mongodb.org/si/jira.issueviews:issue-xml/PYTHON-532/PYTHON-532.xml)
    -   [Word](https://jira.mongodb.org/si/jira.issueviews:issue-word/PYTHON-532/PYTHON-532.doc)
    -   [Printable](https://jira.mongodb.org/si/jira.issueviews:issue-html/PYTHON-532/PYTHON-532.html)

<div class="vspace">

</div>

### Details

-   **Type:** ![](https://jira.mongodb.org/images/icons/bug.gif) Bug
-   **Status:**
    ![](https://jira.mongodb.org/images/icons/status_closed.gif) Closed
-   **Priority:**
    ![](https://jira.mongodb.org/images/icons/priority_critical.gif)
    Critical - P2
-   **Resolution:** Fixed
-   **Affects Version/s:** None
-   **Fix Version/s:**
    [2.5.2](https://jira.mongodb.org/browse/PYTHON/fixforversion/12581)
-   **Labels:**None
-   **Environment:** ALL THE ENVIRONMENTS
    <div class="vspace">

    </div>

-   **Backward Breaking:** Yes
-   **Operating System:** ALL
-   **\# Replies:** 11

<div class="vspace">

</div>

### Description

Steps to reproduce:

Step 1. Use Mongo as WEB SCALE DOCUMENT STORE OF CHOICE LOL

Step 2. Assume basic engineering principles applied throughout due to
HEAVY MARKETING SUGGESTING AWESOMENESS.

Step 3. Spend 6 months fighting plebbery across the spectrum, mostly
succeed.

Step 4. NIGHT BEFORE INVESTOR DEMO, TRY UPLOADING SOME DATA WITH
"{\$ref: '\#/mongodb/plebtastic'"

Step 5. LOL WTF?!?!? PYMONGO CRASH?? :OOO LOOOL WEBSCALE

Step 6. It's 4am now. STILL INVESTIGATING

b4cb9be0 pymongo/\_cbsonmodule.c (Mike Dirolf 2009-11-10 14:54:39 -0500
1196) /\* Decoding for <span
class="wikiword">[DBRefs](http://wiki.tamouse.org?n=SavedArticles.DBRefs?action=edit)[?](http://wiki.tamouse.org?n=SavedArticles.DBRefs?action=edit)</span> \*/

Oh Mike!!!

Step 7. DISCOVER PYMONGO DOES NOT CHECK RETURN VALUES IN MULTIPLE
PLACES. DISCOVER ORIGINAL AUTHOR SHOULD NOT BE ALLOWED NEAR COMPUTER

0558b0d4 pymongo/\_cbsonmodule.c (Mike Dirolf 2009-06-08 15:06:12 -0400
1197) if (strcmp(buffer + **position + 5, "\$ref") == 0) { /** <span
class="wikiword">[DBRef](http://wiki.tamouse.org?n=SavedArticles.DBRef?action=edit)[?](http://wiki.tamouse.org?n=SavedArticles.DBRef?action=edit)</span> \*/\
f3da57be pymongo/\_cbsonmodule.c (sibsibsib 2010-08-03 13:24:14 +0800
1198) <span
class="wikiword">[PyObject](http://wiki.tamouse.org?n=SavedArticles.PyObject?action=edit)[?](http://wiki.tamouse.org?n=SavedArticles.PyObject?action=edit)</span>\*
dbref;\
b4cb9be0 pymongo/\_cbsonmodule.c (Mike Dirolf 2009-11-10 14:54:39 -0500
1199) <span
class="wikiword">[PyObject](http://wiki.tamouse.org?n=SavedArticles.PyObject?action=edit)[?](http://wiki.tamouse.org?n=SavedArticles.PyObject?action=edit)</span>\*
collection = <span
class="wikiword">[PyDict](http://wiki.tamouse.org?n=SavedArticles.PyDict?action=edit)[?](http://wiki.tamouse.org?n=SavedArticles.PyDict?action=edit)</span>\_GetItemString(value,
"\$ref");\
...\
30c253e6 pymongo/\_cbsonmodule.c (Mike Dirolf 2010-06-22 12:29:20 -0400
1206) <span
class="wikiword">[PyDict](http://wiki.tamouse.org?n=SavedArticles.PyDict?action=edit)[?](http://wiki.tamouse.org?n=SavedArticles.PyDict?action=edit)</span>\_DelItemString(value,
"\$id");\
...\
6b0a9ccb pymongo/\_cbsonmodule.c (Mike Dirolf 2010-06-21 15:15:00 -0400
1220) Py\_DECREF(id);

LOOOOL!

OH MIKE OH MIKE!! BUT WHAT IF \$ref DOESNT HAVE \$id KEY? LOOL

Step 8. REALIZE I CAN CRASH 99% OF ALL WEB 3.9 SHIT-TASTIC WEBSCALE
MONGO-DEPLOYING SERVICES WITH 16 BYTE POST

Step 9. REALIZE 10GEN ARE TOO WORTHLESSLY CLUELESS TO LICENCE A STATIC
ANALYZER THAT WOULD HAVE NOTICED THIS PROBLEM IN 0.0000001
NANOSECONDS?!!?!?@\#

Step 10. TRY DELETING \_cbson.so.

Step 11. LOOOOOOOOOOOOL MORE NULL PTR DEREFS IN \_cmessage.so!!?!?
LOLLERPLEX??!? NULL IS FOR LOSERS LOLOL

Steps to fix:

1\. MIKE WAS BORN A TECH WRITER. REVOKE COMMIT PRIVS TODAY

2\. BUY A GODDAMNED COVERITY LICENCE YOU AMATEURS

3\. ADD process\_dbrefs=False TO ALL THE DRIVERS

4\. FIX NULL PTR DEREFERENCE

5\. PUBLISH SECURITY ADVISORY OR I WILL DO IT FOR YOU

<div class="vspace">

</div>

### Activity

[Ascending order - Click to sort in descending
order](https://jira.mongodb.org/browse/PYTHON-532?actionOrder=desc)

<div class="vspace">

</div>

-   [**All**](https://jira.mongodb.org/browse/PYTHON-532?page=com.atlassian.jira.plugin.system.issuetabpanels:all-tabpanel)
-   **Comments**
-   [**History**](https://jira.mongodb.org/browse/PYTHON-532?page=com.atlassian.jira.plugin.system.issuetabpanels:changehistory-tabpanel)
-   [**Activity**](https://jira.mongodb.org/browse/PYTHON-532?page=com.atlassian.streams.streams-jira-plugin:activity-stream-issue-tab)

[Hide](https://jira.mongodb.org#)[Permalink](https://jira.mongodb.org/browse/PYTHON-532?focusedCommentId=349755&page=com.atlassian.jira.plugin.system.issuetabpanels:comment-tabpanel#comment-349755)[Steve
Francia](https://jira.mongodb.org/secure/ViewProfile.jspa?name=spf13)
added a comment - May 31 2013 12:29:33 PM UTC

Thank you for the bug report. We have people looking into this issue and
should have a resolution soon.

[Show](https://jira.mongodb.org#)[Steve
Francia](https://jira.mongodb.org/secure/ViewProfile.jspa?name=spf13)
added a comment - May 31 2013 12:29:33 PM UTC Thank you for the bug
report. We have people looking into this issue and should have a
resolution soon.
[Hide](https://jira.mongodb.org#)[Permalink](https://jira.mongodb.org/browse/PYTHON-532?focusedCommentId=349758&page=com.atlassian.jira.plugin.system.issuetabpanels:comment-tabpanel#comment-349758)[Michael
O'Brien](https://jira.mongodb.org/secure/ViewProfile.jspa?name=mpobrien)
added a comment - May 31 2013 12:37:26 PM UTC - edited

To reproduce:

?? in mongo shell:

<div class="vspace">

</div>

     db.python532.insert({x : {"$ref" : "whatever"} });

<div class="vspace">

</div>

<div>

![](https://jira.mongodb.org/s/en_UScn8g8z/782/6/1.6.0/_/download/resources/jira.plugin.syntaxhighlighter.macro.syntaxplugin:images/blank.png)

</div>

?? in python shell

<div class="vspace">

</div>

     import pymongo
     pymongo.MongoClient?().test.python532.find_one()

<div class="vspace">

</div>

<div>

![](https://jira.mongodb.org/s/en_UScn8g8z/782/6/1.6.0/_/download/resources/jira.plugin.syntaxhighlighter.macro.syntaxplugin:images/blank.png)

</div>

It's worth noting that pymongo won't let you make a <span
class="wikiword">[DBRef](http://wiki.tamouse.org?n=SavedArticles.DBRef?action=edit)[?](http://wiki.tamouse.org?n=SavedArticles.DBRef?action=edit)</span>
without the \_id, so in order to hit the bug you need to save a doc in
some way that bypasses any validation (e.g. mongo shell)

[Show](https://jira.mongodb.org#)[Michael
O'Brien](https://jira.mongodb.org/secure/ViewProfile.jspa?name=mpobrien)
added a comment - May 31 2013 12:37:26 PM UTC - edited To reproduce: ??
in mongo shell: db.python532.insert({x : {"\$ref" : "whatever"} }); ??
in python shell import pymongo pymongo.<span
class="wikiword">[MongoClient](http://wiki.tamouse.org?n=SavedArticles.MongoClient?action=edit)[?](http://wiki.tamouse.org?n=SavedArticles.MongoClient?action=edit)</span>().test.python532.find\_one()
It's worth noting that pymongo won't let you make a <span
class="wikiword">[DBRef](http://wiki.tamouse.org?n=SavedArticles.DBRef?action=edit)[?](http://wiki.tamouse.org?n=SavedArticles.DBRef?action=edit)</span>
without the \_id, so in order to hit the bug you need to save a doc in
some way that bypasses any validation (e.g. mongo shell)
[Hide](https://jira.mongodb.org#)[Permalink](https://jira.mongodb.org/browse/PYTHON-532?focusedCommentId=349768&page=com.atlassian.jira.plugin.system.issuetabpanels:comment-tabpanel#comment-349768)[Jibbers
McGee](https://jira.mongodb.org/secure/ViewProfile.jspa?name=jibberz)
added a comment - May 31 2013 12:49:03 PM UTC

We were using find\_and\_modify() for the insert, which doesn't seem to
trigger that check.

[Show](https://jira.mongodb.org#)[Jibbers
McGee](https://jira.mongodb.org/secure/ViewProfile.jspa?name=jibberz)
added a comment - May 31 2013 12:49:03 PM UTC We were using
find\_and\_modify() for the insert, which doesn't seem to trigger that
check.
[Hide](https://jira.mongodb.org#)[Permalink](https://jira.mongodb.org/browse/PYTHON-532?focusedCommentId=349798&page=com.atlassian.jira.plugin.system.issuetabpanels:comment-tabpanel#comment-349798)[Very
Disappointed](https://jira.mongodb.org/secure/ViewProfile.jspa?name=dissappointed_jira_viewer)
added a comment - May 31 2013 01:27:40 PM UTC

Is that all? So blunt answers...

[Show](https://jira.mongodb.org#)[Very
Disappointed](https://jira.mongodb.org/secure/ViewProfile.jspa?name=dissappointed_jira_viewer)
added a comment - May 31 2013 01:27:40 PM UTC Is that all? So blunt
answers...
[Hide](https://jira.mongodb.org#)[Permalink](https://jira.mongodb.org/browse/PYTHON-532?focusedCommentId=349850&page=com.atlassian.jira.plugin.system.issuetabpanels:comment-tabpanel#comment-349850)[auto](https://jira.mongodb.org/secure/ViewProfile.jspa?name=auto)
added a comment - May 31 2013 02:21:52 PM UTC

Author:{u'username': u'ajdavis', u'name': u'A. Jesse Jiryu Davis',
u'email': u'jesse@10gen.com'}\
Message: Fix null pointer when decoding invalid <span
class="wikiword">[DBRef](http://wiki.tamouse.org?n=SavedArticles.DBRef?action=edit)[?](http://wiki.tamouse.org?n=SavedArticles.DBRef?action=edit)</span>
[](https://jira.mongodb.org/browse/PYTHON-532)

~~PYTHON-532~~\
Branch: v2.5\
[Show](https://github.com/mongodb/mongo-python-driver/commit/a060c15ef87e0f0e72974c7c0e57fe811bbd06a2<a%20class=)[auto](https://jira.mongodb.org/secure/ViewProfile.jspa?name=auto)'
target='\_blank'\>https://github.com/mongodb/mongo-python-driver/commit/a060c15ef87e0f0e72974c7c0e57fe811bbd06a2[Show](https://jira.mongodb.org#)[auto](https://jira.mongodb.org/secure/ViewProfile.jspa?name=auto)
added a comment - May 31 2013 02:21:52 PM UTC Author:{u'username':
u'ajdavis', u'name': u'A. Jesse Jiryu Davis', u'email':
u'jesse@10gen.com'} Message: Fix null pointer when decoding invalid
<span
class="wikiword">[DBRef](http://wiki.tamouse.org?n=SavedArticles.DBRef?action=edit)[?](http://wiki.tamouse.org?n=SavedArticles.DBRef?action=edit)</span>
PYTHON-532 Branch: v2.5
<https://github.com/mongodb/mongo-python-driver/commit/a060c15ef87e0f0e72974c7c0e57fe811bbd06a2>
[Hide](https://jira.mongodb.org#)[Permalink](https://jira.mongodb.org/browse/PYTHON-532?focusedCommentId=349945&page=com.atlassian.jira.plugin.system.issuetabpanels:comment-tabpanel#comment-349945)[Kevin
J.
Rice](https://jira.mongodb.org/secure/ViewProfile.jspa?name=justanyone)
added a comment - May 31 2013 03:48:02 PM UTC

[from disinterested observer] Gotta say: Interesting wording.
Apparently, 'plebbery' derives from Latin 'plebius' meaning 'of common
people', and carries elites-deriding-commoners connotations.

I'm happy to be corrected, but it seems to me to imply snobbishness in
the same way that someone claiming to be 'L33t' automatically
self-nominates as a script kiddie. Someone needs to enter this in the
Urban Dictionary before it flash-in-the-pan-poofs into the
7th-grade-lexicon dustbin of 'so-yesterday'.

[Show](https://jira.mongodb.org#)[Kevin J.
Rice](https://jira.mongodb.org/secure/ViewProfile.jspa?name=justanyone)
added a comment - May 31 2013 03:48:02 PM UTC [from disinterested
observer] Gotta say: Interesting wording. Apparently, 'plebbery' derives
from Latin 'plebius' meaning 'of common people', and carries
elites-deriding-commoners connotations. I'm happy to be corrected, but
it seems to me to imply snobbishness in the same way that someone
claiming to be 'L33t' automatically self-nominates as a script kiddie.
Someone needs to enter this in the Urban Dictionary before it
flash-in-the-pan-poofs into the 7th-grade-lexicon dustbin of
'so-yesterday'.
[Hide](https://jira.mongodb.org#)[Permalink](https://jira.mongodb.org/browse/PYTHON-532?focusedCommentId=349994&page=com.atlassian.jira.plugin.system.issuetabpanels:comment-tabpanel#comment-349994)[Bernie
Hackett](https://jira.mongodb.org/secure/ViewProfile.jspa?name=behackett)
added a comment - May 31 2013 04:46:05 PM UTC - edited

[Jibbers
McGee](https://jira.mongodb.org/secure/ViewProfile.jspa?name=jibberz),
thanks for reporting this problem. We've fixed the primary issue and
will do a 2.5.2 release to address it.

We are still working on the segfault related to removing \_cbson.so.
That problem appears to be in python's import machinery in py2, but we
want to find a workaround. In python3.1 and newer <span
class="wikiword">[ImportError](http://wiki.tamouse.org?n=SavedArticles.ImportError?action=edit)[?](http://wiki.tamouse.org?n=SavedArticles.ImportError?action=edit)</span>
is properly raised, allowing <span
class="wikiword">[PyMongo](http://wiki.tamouse.org?n=SavedArticles.PyMongo?action=edit)[?](http://wiki.tamouse.org?n=SavedArticles.PyMongo?action=edit)</span>
to use the pure python bson module.

[Show](https://jira.mongodb.org#)[Bernie
Hackett](https://jira.mongodb.org/secure/ViewProfile.jspa?name=behackett)
added a comment - May 31 2013 04:46:05 PM UTC - edited Jibbers <span
class="wikiword">[McGee](http://wiki.tamouse.org?n=SavedArticles.McGee?action=edit)[?](http://wiki.tamouse.org?n=SavedArticles.McGee?action=edit)</span>
, thanks for reporting this problem. We've fixed the primary issue and
will do a 2.5.2 release to address it. We are still working on the
segfault related to removing \_cbson.so. That problem appears to be in
python's import machinery in py2, but we want to find a workaround. In
python3.1 and newer <span
class="wikiword">[ImportError](http://wiki.tamouse.org?n=SavedArticles.ImportError?action=edit)[?](http://wiki.tamouse.org?n=SavedArticles.ImportError?action=edit)</span>
is properly raised, allowing <span
class="wikiword">[PyMongo](http://wiki.tamouse.org?n=SavedArticles.PyMongo?action=edit)[?](http://wiki.tamouse.org?n=SavedArticles.PyMongo?action=edit)</span>
to use the pure python bson module.
[Hide](https://jira.mongodb.org#)[Permalink](https://jira.mongodb.org/browse/PYTHON-532?focusedCommentId=350001&page=com.atlassian.jira.plugin.system.issuetabpanels:comment-tabpanel#comment-350001)[Jibbers
McGee](https://jira.mongodb.org/secure/ViewProfile.jspa?name=jibberz)
added a comment - May 31 2013 04:56:11 PM UTC - edited

Apologies to anyone offended by this report. Thanks for your effort!

[Show](https://jira.mongodb.org#)[Jibbers
McGee](https://jira.mongodb.org/secure/ViewProfile.jspa?name=jibberz)
added a comment - May 31 2013 04:56:11 PM UTC - edited Apologies to
anyone offended by this report. Thanks for your effort!
[Hide](https://jira.mongodb.org#)[Permalink](https://jira.mongodb.org/browse/PYTHON-532?focusedCommentId=350004&page=com.atlassian.jira.plugin.system.issuetabpanels:comment-tabpanel#comment-350004)[Bernie
Hackett](https://jira.mongodb.org/secure/ViewProfile.jspa?name=behackett)
added a comment - May 31 2013 05:01:03 PM UTC

[Jibbers
McGee](https://jira.mongodb.org/secure/ViewProfile.jspa?name=jibberz),
no problem. I understand your frustration. Thanks again for the report.

[Show](https://jira.mongodb.org#)[Bernie
Hackett](https://jira.mongodb.org/secure/ViewProfile.jspa?name=behackett)
added a comment - May 31 2013 05:01:03 PM UTC Jibbers <span
class="wikiword">[McGee](http://wiki.tamouse.org?n=SavedArticles.McGee?action=edit)[?](http://wiki.tamouse.org?n=SavedArticles.McGee?action=edit)</span>
, no problem. I understand your frustration. Thanks again for the
report.
[Hide](https://jira.mongodb.org#)[Permalink](https://jira.mongodb.org/browse/PYTHON-532?focusedCommentId=350164&page=com.atlassian.jira.plugin.system.issuetabpanels:comment-tabpanel#comment-350164)[Igor
Matlin](https://jira.mongodb.org/secure/ViewProfile.jspa?name=imatlin)
added a comment - May 31 2013 08:12:12 PM UTC

Hello [Jibbers
McGee](https://jira.mongodb.org/secure/ViewProfile.jspa?name=jibberz)
and others,

My name is Igor Matlin and I work for Coverity. 10gen does license our
software, and to my knowledge they have been quite diligent in running
and fixing issues identified by Coverity Static Analysis.

Unfortunately, the code in question was not flagged. The source of <span
class="wikiword">[PyDict](http://wiki.tamouse.org?n=SavedArticles.PyDict?action=edit)[?](http://wiki.tamouse.org?n=SavedArticles.PyDict?action=edit)</span>\_GetItemString
was not available during scan, so static analysis engine had no evidence
that the function can return NULL. Since flagging every instance where a
return value is not checked tends to generate a lot of noise, most of
our customers only scan for cases where evidence exists that a function
can return NULL and analysis determines that return value is routinely
checked.

Coverity static analysis engine can be configured to be more aggressive
and treat all functions where source is not available as potentially
returning NULL. We will work with 10gen to determine the best
combination of analysis options going forward.

Regards,

Igor Matlin

[Show](https://jira.mongodb.org#)[Igor
Matlin](https://jira.mongodb.org/secure/ViewProfile.jspa?name=imatlin)
added a comment - May 31 2013 08:12:12 PM UTC Hello Jibbers <span
class="wikiword">[McGee](http://wiki.tamouse.org?n=SavedArticles.McGee?action=edit)[?](http://wiki.tamouse.org?n=SavedArticles.McGee?action=edit)</span>
and others, My name is Igor Matlin and I work for Coverity. 10gen does
license our software, and to my knowledge they have been quite diligent
in running and fixing issues identified by Coverity Static Analysis.
Unfortunately, the code in question was not flagged. The source of <span
class="wikiword">[PyDict](http://wiki.tamouse.org?n=SavedArticles.PyDict?action=edit)[?](http://wiki.tamouse.org?n=SavedArticles.PyDict?action=edit)</span>\_GetItemString
was not available during scan, so static analysis engine had no evidence
that the function can return NULL. Since flagging every instance where a
return value is not checked tends to generate a lot of noise, most of
our customers only scan for cases where evidence exists that a function
can return NULL and analysis determines that return value is routinely
checked. Coverity static analysis engine can be configured to be more
aggressive and treat all functions where source is not available as
potentially returning NULL. We will work with 10gen to determine the
best combination of analysis options going forward. Regards, Igor Matlin
[Hide](https://jira.mongodb.org#)[Permalink](https://jira.mongodb.org/browse/PYTHON-532?focusedCommentId=350210&page=com.atlassian.jira.plugin.system.issuetabpanels:comment-tabpanel#comment-350210)[auto](https://jira.mongodb.org/secure/ViewProfile.jspa?name=auto)
added a comment - May 31 2013 09:16:08 PM UTC

Author:{u'username': u'behackett', u'name': u'Bernie Hackett', u'email':
u'bernie@10gen.com'}\
Message: Fix import when \_cbson unavailable
[](https://jira.mongodb.org/browse/PYTHON-532)

~~PYTHON-532~~

This ensures that we don't import \_cmessage in\
an incomplete state or segfault if \_cbson isn't\
available. If \_cbson.so has been removed we fall\
back to pure python.\
Branch: v2.5\
<https://github.com/mongodb/mongo-python-driver/commit/7395ce72bf54ef64d723e1b4140556ebd12a2a07>

[Show](https://jira.mongodb.org#)[auto](https://jira.mongodb.org/secure/ViewProfile.jspa?name=auto)
added a comment - May 31 2013 09:16:08 PM UTC Author:{u'username':
u'behackett', u'name': u'Bernie Hackett', u'email': u'bernie@10gen.com'}
Message: Fix import when \_cbson unavailable PYTHON-532 This ensures
that we don't import \_cmessage in an incomplete state or segfault if
\_cbson isn't available. If \_cbson.so has been removed we fall back to
pure python. Branch: v2.5
<https://github.com/mongodb/mongo-python-driver/commit/7395ce72bf54ef64d723e1b4140556ebd12a2a07>

<div class="vspace">

</div>

### People

-   :: Assignee:: Bernie Hackett

     Reporter
    :   : Jibbers <span
        class="wikiword">[McGee](http://wiki.tamouse.org?n=SavedArticles.McGee?action=edit)[?](http://wiki.tamouse.org?n=SavedArticles.McGee?action=edit)</span>

     Participants
    :   :
        [auto](https://jira.mongodb.org/secure/IssueNavigator.jspa?reset=true&customfield_10051=auto),
        [Bernie
        Hackett](https://jira.mongodb.org/secure/IssueNavigator.jspa?reset=true&customfield_10051=behackett),
        [Igor
        Matlin](https://jira.mongodb.org/secure/IssueNavigator.jspa?reset=true&customfield_10051=imatlin),
        [Jibbers
        McGee](https://jira.mongodb.org/secure/IssueNavigator.jspa?reset=true&customfield_10051=jibberz),
        [Kevin J.
        Rice](https://jira.mongodb.org/secure/IssueNavigator.jspa?reset=true&customfield_10051=justanyone),
        [Michael
        O'Brien](https://jira.mongodb.org/secure/IssueNavigator.jspa?reset=true&customfield_10051=mpobrien),
        [Steve
        Francia](https://jira.mongodb.org/secure/IssueNavigator.jspa?reset=true&customfield_10051=spf13),
        [Very
        Disappointed](https://jira.mongodb.org/secure/IssueNavigator.jspa?reset=true&customfield_10051=dissappointed_jira_viewer)

Vote (4) Watch (28)

<div class="vspace">

</div>

### Dates

-   :: Created:: Friday 09:54 AM UTC

     Updated
    :   : Today 12:04 AM UTC

     Resolved
    :   : Saturday 02:48 AM UTC

     Days since reply
    :   : 3 days ago

     Date of 1st Reply
    :   : 31/May/13 12:29 PM

<div class="vspace">

</div>

### Agile

-   [View on
    Board](https://jira.mongodb.org/secure/GHGoToBoard.jspa?issueId=77390&inline=true)
    <div class="vspace">

    </div>

-   [Atlassian JIRA](http://www.atlassian.com/software/jira)
    (v5.1.3\#782-sha1:4389c89)
-   [Report a
    problem](https://jira.mongodb.org/secure/CreateIssue!default.jspa)
    <div class="vspace">

    </div>

-   Powered by a free Atlassian
    [JIRA](http://www.atlassian.com/software/jira) open source license
    for <span
    class="wikiword">[MongoDB](http://wiki.tamouse.org?n=SavedArticles.MongoDB?action=edit)[?](http://wiki.tamouse.org?n=SavedArticles.MongoDB?action=edit)</span>.
    Try JIRA - [bug tracking
    software](http://www.atlassian.com/software/jira) for *your* team.

</div>
