<div id="wikitext">

<div style="display: none;">

Summary: An advanced Relational Database Management System that is a
clear open-source advantage of <span
class="wikiword">[MySQL](http://wiki.tamouse.org?n=Technology.MySQL?action=print)</span>
Parent: (Technology.)Tools <span
class="wikiword">[IncludeMe](http://wiki.tamouse.org?n=Technology.IncludeMe?action=edit)[?](http://wiki.tamouse.org?n=Technology.IncludeMe?action=edit)</span>:
[Tools](http://wiki.tamouse.org?n=Technology.Tools?action=print)
Categories: [Technology](http://wiki.tamouse.org?n=Category.Technology),
[Databases](http://wiki.tamouse.org?n=Category.Databases),
[SQL](http://wiki.tamouse.org?n=Category.SQL) Tags: postgresql,
databases, DBMS, open-source Source: Posted: Thu Nov 14 02:44:06 2013

</div>

[PostgreSQL](http://www.postgresql.org/) is an
[open-source](http://en.wikipedia.org/wiki/Open_Source)
[object-relational database management
system](http://en.wikipedia.org/wiki/Object-relational_database) that
was built on the old Ingres DBMS. It has arisen as a strong alternative
to [MySQL](http://wiki.tamouse.org?n=Technology.MySQL?action=print)
among open source applications, and Rails web applications in particular
as <span
class="wikiword">[MySQL](http://wiki.tamouse.org?n=Technology.MySQL?action=print)</span>
has come under the control of Oracle.

The two do not have 100% identical implementations of the SQL language.
This, in turn, affects systems that strive to provide database
independence and agnosticism, such as Rails' ActiveRecord. There are
some commands that don't work the same.

<div class="vspace">

</div>

Obtaining Table Structure Information
-------------------------------------

+--------------------------------------+--------------------------------------+
| <span class="wikiword">MySQL</span>  | <span                                |
|                                      | class="wikiword">PostgreSQL</span>   |
+======================================+======================================+
| <span                                | <span                                |
| class="wikiword">ActiveRecord</span> | class="wikiword">ActiveRecord</span> |
| ::Base.connection.table\_structure(" | ::Base.connection.columns("my\_table |
| my\_table")                          | ")                                   |
+--------------------------------------+--------------------------------------+

<div class="vspace">

</div>

<div id="sourceblock1" class="sourceblock">

<div class="sourceblocktext">

<div class="ruby">

<div class="head">

Displaying the structure of a PostgreSQL table

</div>

1.  <div class="de1">

    <span class="kw3">FORMAT</span> = <span class="st0">"| %-20s | %-10s
    | %-15s |<span class="es0">\\n</span>"</span>

    </div>

2.  <div class="de1">

    <span class="kw3">printf</span> <span class="kw3">FORMAT</span>,
    <span class="st0">"Name"</span>, <span class="st0">"Type"</span>,
    <span class="st0">"NULL allowed?"</span>

    </div>

3.  <div class="de1">

    <span class="kw3">printf</span> <span class="kw3">FORMAT</span>,
    <span class="st0">"-"</span><span class="sy0">\*</span><span
    class="nu0">20</span>, <span class="st0">"-"</span><span
    class="sy0">\*</span><span class="nu0">10</span>, <span
    class="st0">"-"</span><span class="sy0">\*</span><span
    class="nu0">15</span>

    </div>

4.  <div class="de1">

    <span class="re2">ActiveRecord::Base</span>.<span
    class="me1">connection</span>.<span class="me1">columns</span><span
    class="br0">(</span><span class="st0">"quotes"</span><span
    class="br0">)</span>.<span class="me1">map</span> <span
    class="kw1">do</span> <span class="sy0">|</span>col<span
    class="sy0">|</span>

    </div>

5.  <div class="de2">

      <span class="kw3">printf</span> <span class="kw3">FORMAT</span>,
    col.<span class="me1">name</span>, col.<span
    class="me1">type</span>.<span class="me1">to\_s</span>, col.<span
    class="me1">null</span>.<span class="me1">to\_s</span>  

    </div>

6.  <div class="de1">

    <span class="kw1">end</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.PostgreSQL?action=sourceblock&num=1)

</div>

</div>

<div id="sourceblock2" class="sourceblock">

<div class="sourceblocktext">

<div class="text">

<div class="head">

Output

</div>

| Name                 | Type       | NULL allowed?   |\
 | -------------------- | ---------- | --------------- |\
 | id                   | integer    | false           |\
 | quote\_text           | text       | true            |\
 | quote\_hash           | integer    | true            |\
 | created\_at           | datetime   | true            |\
 | updated\_at           | datetime   | true            |

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.PostgreSQL?action=sourceblock&num=2)

</div>

</div>

</div>
