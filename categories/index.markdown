---
layout: default
title: "Categories"
---

{{page.title}}
{:.page-header}

* this is replaced
{:toc}

{% capture categories %}{% for cat in site.categories %}
{{cat|first}}
{% endfor %}{% endcapture %}
{% assign categories = categories | split:' ' | sort %}
{% for cat in categories %}
## <a href="{{ site.baseurl }}/categories/{{ cat }}/index.html">{{ cat }}</a>

{% assign slug_sorted_posts = site.categories[cat] | slug_sort %}
{% for post in slug_sorted_posts %}
* <a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
{% endfor %}
{% endfor %}
