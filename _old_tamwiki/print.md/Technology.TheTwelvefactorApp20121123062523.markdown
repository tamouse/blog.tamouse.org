<div id="wikitext">

[The Twelve-Factor App](http://www.12factor.net/)
=================================================

Introduction
============

In the modern era, software is commonly delivered as a service: called
*web apps*, or *software-as-a-service*. The twelve-factor app is a
methodology for building software-as-a-service apps that:

<div class="vspace">

</div>

-   Use **declarative** formats for setup automation, to minimize time
    and cost for new developers joining the project;
-   Have a **clean contract** with the underlying operating system,
    offering **maximum portability** between execution environments;
-   Are suitable for **deployment** on modern **cloud platforms**,
    obviating the need for servers and systems administration;
-   **Minimize divergence** between development and production, enabling
    **continuous deployment** for maximum agility;
-   And can **scale up** without significant changes to tooling,
    architecture, or development practices.

The twelve-factor methodology can be applied to apps written in any
programming language, and which use any combination of backing services
(database, queue, memory cache, etc).

<div class="vspace">

</div>

Background
==========

The contributors to this document have been directly involved in the
development and deployment of hundreds of apps, and indirectly witnessed
the development, operation, and scaling of hundreds of thousands of apps
via our work on the [Heroku](http://www.heroku.com/) platform.

This document synthesizes all of our experience and observations on a
wide variety of software-as-a-service apps in the wild. It is a
triangulation on ideal practices app development, paying particular
attention to the dynamics of the organic growth of an app over time, the
dynamics of collaboration between developers working on the app??s
codebase, and [avoiding the cost of software
erosion](http://blog.heroku.com/archives/2011/6/28/the_new_heroku_4_erosion_resistance_explicit_contracts/).

Our motivation is to raise awareness of some systemic problems we??ve
seen in modern application development, to provide a shared vocabulary
for discussing those problems, and to offer a set of broad conceptual
solutions to those problems with accompanying terminology. The format is
inspired by Martin Fowler??s books *[Patterns of Enterprise Application
Architecture](http://books.google.com/books/about/Patterns_of_enterprise_application_archi.html?id=FyWZt5DdvFkC)*
and
*[Refactoring](http://books.google.com/books/about/Refactoring.html?id=1MsETFPD3I0C)*.

<div class="vspace">

</div>

Who should read this document?
==============================

Any developer building applications which run as a service. Ops
engineers who deploy or manage such applications.

<div class="vspace">

</div>

The Twelve Factors
==================

[I. Codebase](http://www.12factor.net/codebase)
-----------------------------------------------

### One codebase tracked in revision control, many deploys

[II. Dependencies](http://www.12factor.net/dependencies)
--------------------------------------------------------

### Explicitly declare and isolate dependencies

[III. Config](http://www.12factor.net/config)
---------------------------------------------

### Store config in the environment

[IV. Backing Services](http://www.12factor.net/backing-services)
----------------------------------------------------------------

### Treat backing services as attached resources

[V. Build, release, run](http://www.12factor.net/build-release-run)
-------------------------------------------------------------------

### Strictly separate build and run stages

[VI. Processes](http://www.12factor.net/processes)
--------------------------------------------------

### Execute the app as one or more stateless processes

[VII. Port binding](http://www.12factor.net/port-binding)
---------------------------------------------------------

### Export services via port binding

[VIII. Concurrency](http://www.12factor.net/concurrency)
--------------------------------------------------------

### Scale out via the process model

[IX. Disposability](http://www.12factor.net/disposability)
----------------------------------------------------------

### Maximize robustness with fast startup and graceful shutdown

[X. Dev/prod parity](http://www.12factor.net/dev-prod-parity)
-------------------------------------------------------------

### Keep development, staging, and production as similar as possible

[XI. Logs](http://www.12factor.net/logs)
----------------------------------------

### Treat logs as event streams

[XII. Admin processes](http://www.12factor.net/admin-processes)
---------------------------------------------------------------

### Run admin/management tasks as one-off processes

       Written by Adam Wiggins Last updated Jan 30, 2012 Sourcecode Download ePub Book

<div class="vspace">

</div>

<div style="display: none;">

Summary: A methodology for building modern, scalable, maintainable
software-as-a-service apps. Tags: development, deployment, best
practices Source: <http://www.12factor.net/> Parent:
(Technology.)Deploying
includeme:[Technology.Deploying](http://wiki.tamouse.org?n=Technology.Deploying?action=print)
Categories:[BestPractices](http://wiki.tamouse.org?n=Category.BestPractices),
[Links](http://wiki.tamouse.org?n=Category.Links)

</div>

Page saved at: Fri, 23 Nov 2012 06:25:23 -0600

<div class="vspace">

</div>

</div>
