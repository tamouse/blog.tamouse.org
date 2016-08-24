---
layout: post
title: "Slideshow of Selka the Sea Otter at MBA"
date: 2016-08-23 17:53
categories: ["critters"]
tags: ["selka", "sea-otter", "mba"]
source: http://www.kionrightnow.com/news/local-news/new-sea-otter-joins-monterey-bay-aquarium-exhibit/41317036
gallery_path: "blog/critters/2016-08-23-slideshow-of-selka-the-sea-otter-at-mba/"

---

Selka, the newest sea otter at the Monterey Bay Aquairum, is
attracting a lot of attention. Here's a recent slideshow from a local
news outlet

{% assign s3_path = site.images.s3path %}

{% for i in (1..6) %}
{% capture image %}{{ s3_path }}{{ page.gallery_path }}SELKA-{{i}}.jpg{% endcapture %}
![]({{ image }})

{% endfor %}
