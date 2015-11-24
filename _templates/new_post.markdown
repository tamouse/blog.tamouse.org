---
layout: post
title: "<%= @title %>"
date: <%= Time.now.strftime("%Y-%m-%d %H:%M") %>
categories: <%= Array(@categories) %>
tags: <%= Array(@tags) %>
# source: URL # if post is a link to some place
# thumbnail: image-url # a small image included on the index page
# gallery:
#   image-one:
#     large: URL
#     small: URL
#     thumb: URL
---
excerpt...

{% assign s3_path = site.images.s3path %}
