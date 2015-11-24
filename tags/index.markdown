---
layout: default
title: "Tags"
---

{{page.title}}
{:.page-header}

* this is replaced
{:toc}

{% capture tags %}{% for tag in site.tags %}
{{tag|first}}
{% endfor %}{% endcapture %}
{% assign tags = tags | split:' ' | sort %}
{% for tag in tags %}
## <a href="{{ site.baseurl }}/tags/{{ tag }}/index.html">{{ tag }}</a>
{% assign slug_sorted_posts = site.tags[tag] | slug_sort %}
{% for post in slug_sorted_posts %}
* <a href="{{post.url | prepend: site.baseurl}}">{{post.title}}</a>
{% endfor %}
{% endfor %}
