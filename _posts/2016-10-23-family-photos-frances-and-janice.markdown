---
layout: post
title: "Family Photos: Frances and Janice"
date: 2016-10-23 11:53
categories: ["family"]
tags: ["family-photos", "frances", "janice"]
fancybox_enabled: true

---

Mom/Aunt Mary found these the other day and wanted to share them with folks.

{% assign data = site.data.2016-10-23-family-photos-frances-and-janice %}
{% assign image_path = site.images.s3path | append: data.path %}
{% include bs_carousel.html id=1 images=data.images fullpath=image_path %}

<div class="panel panel-default">
<div class="panel-heading">
Links for easy downloading.
</div>
<div class="panel-body">
{% for image in data.images %}
<a href="{{image_path}}{{image.fullsize }}" target="_blank"><img class="img-thumbnail" src="{{image_path}}{{image.thumb}}" width="100px"></a>
{% endfor %}
</div>
<div class="panel-footer">
Right click on an image and select "Save Link as..." to download the full-sized image.
</div>
</div>
