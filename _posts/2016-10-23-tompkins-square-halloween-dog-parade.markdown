---
layout: post
title: "Tompkins Square Halloween Dog Parade"
date: 2016-10-23 16:34
categories: ["critters"]
tags: ["dogs", "halloween", "parade"]
source: http://www.theverge.com/2016/10/22/13367414/tompkins-square-halloween-dog-parade-new-york-city-photos
path: blog/critters/2016-10-23-tompkins-square-halloween-dog-parade/
images:
- IMG_3882.jpg
- IMG_4935.JPG
- IMG_4957.JPG
- IMG_4969.JPG
- IMG_4971.JPG
- IMG_4978.JPG
- IMG_4993.JPG
- IMG_5004.JPG
- IMG_5008.JPG
- IMG_5011.JPG
- IMG_5014.JPG
- IMG_7653.JPG

---

Pictures from this year's [Tompkins Square Halloween Dog Parade]({{page.source}}). Seriously.


{% assign path = site.images.s3path | append: page.path %}

{% for image in page.images %}
<div><img src="{{ path}}{{ image }}" class="img-thumbnail" alt="{{image}}" /></div>
{% endfor %}
