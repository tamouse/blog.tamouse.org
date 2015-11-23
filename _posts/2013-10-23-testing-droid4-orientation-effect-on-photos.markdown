---
# BEGIN: redirect added by jekyllpress on 2014-09-29 00:34:42 -0500
redirect_from:
  - /blog/2013/10/23/testing-droid4-orientation-effect-on-photos/
# END:   redirect added by jekyllpress on 2014-09-29 00:34:42 -0500
layout: post
title: "Testing Droid4 Orientation Effect on Photos"
date: 2013-10-23 17:01
categories: [misc]
tags: [photos, test, phone, droid]
---
A correspondent was showing a picture they had posted from their phone
(running iOS7) that was in the wrong orientation (was showing
landscape instead of portrait). Delving deeper, some findings...

Apparently, iOS7 uses the exif tag `Orientation` to tell when the
phone is in something other than horizontal. This seems logical, but
it does actually work with some tools, in particular it seems web
browsers don't have any clue about this field or it's setting.

If you hold the iPhone upside down in either landscape or portrait,
the photo renders upside down as well.

So I wondered what happens on the Droid4.

The android phone camera software seems to be doing it right. The
`Orientation` tag is **always** set to `Horizontal`, and the image
orientation is actually processed in the phone to the way the phone is
held. 

Here are examples:

## Horizontal, Right Side Up (shutter on right).
![horizontal right side up](/images/phone-orientation-test/IMG_20131023_164708_513.jpg "horizontal right side up") 

## Horizontal, Upside Down (shutter on left).
![horizontal upside down](/images/phone-orientation-test/IMG_20131023_164719_500.jpg "horizontal upside down") 

## Vertical, Right Side Up (shutter on bottom).
![vertical right side up](/images/phone-orientation-test/IMG_20131023_164714_129.jpg "vertical right side up") 

## Vertical, Upside Down (shutter on top).
![Vertical upside up](/images/phone-orientation-test/IMG_20131023_164724_089.jpg "vertical upside down")
