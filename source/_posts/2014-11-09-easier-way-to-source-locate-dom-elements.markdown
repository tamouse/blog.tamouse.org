---
layout: post
title: "Easier Way to Source Locate DOM Elements"
date: 2014-11-09 10:45
categories: [links]
tags: [javascript, dom, link, redgetan]
source: http://redgetan.cc/finding-the-source-location-of-dom-elements
---
User [Redgetan][redgetan] writes a [blog post][view-inspect] about a tool they've constructed that
will help you locate the source of DOM elements. This can be quite useful when you
have a plethora of elements generated in different files in your codebase, especially
when there are many developers on a project and you don't know the provenance
of any particular element.

The tool facilitates this by writing a `data` attribute in the DOM element:

{% highlight html  %}
<td class="category" data-orig-file-line="path/to/source/file.js.handlebars:23">...</td>
{% endhighlight %}

[redgetan]: http://redgetan.cc "RedgeTan blog"
[view-inspect]: http://redgetan.cc/finding-the-source-location-of-dom-elements "view_inspect tool" 

