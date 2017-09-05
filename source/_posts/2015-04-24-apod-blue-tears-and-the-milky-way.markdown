---
layout: post
title: "APOD: blue tears and the milky way"
date: 2015-04-24 20:10
categories: ["space", "apod"]
tags: ["images", "apod", "milky-way"]
gallery:
  path: "space/apod/2015-04-24-blue-tears-and-the-milky-way/"
  images:
  - fullsize: RBA_BlueTears1600.jpg
    web: webs/RBA_BlueTears1600.jpg
source: http://apod.nasa.gov/apod/ap150424.html
thumbnail: http://tt.imageshare.s3.amazonaws.com/space/apod/2015-04-24-blue-tears-and-the-milky-way/thumbs/RBA_BlueTears1600.gif
---

Lapping at rocks along the shore of the Island of Nangan,
Taiwan, waves are infused with a subtle blue light in
this sea and night skyscape.

{% assign fullpath = site.images.s3path | append: page.gallery.path %}
{% assign image = page.gallery.images[0] %}

[![]({{ image.web | prepend: fullpath }})]({{ image.fullsize | prepend: fullpath}})

Image Credit & Copyright: [Rogelio Bernal Andreo](https://www.facebook.com/DeepSkyColors) (Deep Sky Colors)

Composed of a series of long exposures made on April 16 the image
captures the faint glow from Noctiluca scintillans. Also known as sea
sparkles or blue tears, the marine plankton's bioluminescence is
stimulated by wave motion. City lights along the coast of mainland
China shine beneath low clouds in the west but stars and the faint
Milky Way still fill the night above. Over the horizon the galaxy's
central bulge and dark rifts seem to echo the rocks and luminous
waves.
