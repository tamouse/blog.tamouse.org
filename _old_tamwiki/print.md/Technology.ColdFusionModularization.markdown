<div id="wikitext">

<span id="excerpt"></span> To achieve better modularization, the
functions of fetching, updating, creating, and displaying can be put
into ColdFusion templates (or eventually into custom tags). To make this
work well, some contraints on the name conventions of fields in the data
base itself should be followed, so that regular expressions can evaluate
simply into the required table and field names. <span
id="excerptend"></span>

For example, the following two table definitions show how one might do
this:

<div class="vspace">

</div>

<div style="margin: 0px auto;">

  Table name: Accounts   Table name: Issues
  ---------------------- --------------------
  ID                     ID
  DateCreated            DateCreated
  DateModified           DateModified
  ...                    ...

</div>

As you can see there is a parallel naming structure for the table names,
the record identifier and the date strings. Similar field names should
be determined as well. Frequently this may not be possible until the
data base is designed, which means the design should be fairly complete
before beginning to code. This means that EVO approach may not work well
in this environment. Compensating factors are to design enough of the
data base to start with, and establish the rules for naming, so
subsequent additions follow the same rules.

<div class="vspace">

</div>

</div>
