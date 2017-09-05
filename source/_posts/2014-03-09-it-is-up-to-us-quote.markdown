---
layout: post
title: "Quote: It Is Up To Us -- Sagan"
date: 2014-03-09 19:59:49 -0500
categories: [quotes]
tags:
- carl-sagan
- pale-blue-dot
- day-the-earth-smiled
- earth
- cassini
---
{% include quote.html id="sagan_up_to_us" %}

Carl Sagan's epic homily, Pale Blue Dot, is intensely personal, and fills me with such quickened emotion and erupts in tears every time I hear it.
However, this isn't the image that inspired Sagan's thoughts.

[Wikipedia](https://en.wikipedia.org/wiki/Pale_Blue_Dot) of course has a page on the image, and Carl Sagan's legacy. The Earth is just a faint, faint dot:

<img src="https://upload.wikimedia.org/wikipedia/commons/7/73/Pale_Blue_Dot.png"
class="img-frame-center" alt="the pale blue dot [png]" />

It is in the lower right quadrant. Most images shown greatly enhance the image to make the Earth more discernible.

NASA's Sky Image Lab has a [page](http://www.skyimagelab.com/pale-blue-dot.html?source=pbdcom) dedicated to this image.

*******

These are great images, and great accomplishments.

However, it is Carl's words that are most compelling, putting such an image into context, and really, *really* driving home the point:

<div class="text-center">
<h2>It is</h2>
<h2>Up to us.</h2>
<h2>All of us.</h2>
<h2>Together.</h2>
</div>


*******

## The full quote:

{% include quote.html id="pale_blue_dot" %}

## Audio version:

<iframe src="//cdn.loc.gov/loader/embed/embed-with-loader.php?uuid=E6AB0B2585A10180E0438C93F0280180&size=largeWide&metadata=The pale blue dot : short recordingENDLINE&image=&type=A" width="697" height="298" frameborder="0" scrolling="no"></iframe>

## A new view back from Cassini

Recently, the Cassini space probe has also
[imaged](http://photojournal.jpl.nasa.gov/catalog/PIA17172) Earth from
out near Saturn.

<div class="container">
<div class="container">
{% assign s3path = site.images.s3path | append: site.data.day-the-earth-smiled.gallery.path  %}
{% for image in site.data.day-the-earth-smiled.gallery.images %}
<figure>
<img src="{{ image.web | prepend: s3path }}"
     class="img-frame-center"
     alt="{{ image.caption }}" />
<figcaption>
<h4>{{ image.caption }}</h4>
{{ image.description | markdownify }}
</figcaption>
</figure>
{% endfor %}
</div>
</div>
