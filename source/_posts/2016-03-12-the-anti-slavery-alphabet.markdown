---
layout: post
title: "The Anti-Slavery Alphabet"
date: 2016-03-12 22:53
categories: ["politics"]
tags: ["slavery", "anti-slavery", "old-books", "black-lives-matter"]
sources:
  - title: "The Anti-Slavery Alphabet: 1846 Book Teaches Kids the ABCs of Slavery’s Evils"
    href: "http://www.openculture.com/2016/03/the-anti-slavery-alphabet-1846-book-teaches-kids-the-abcs-of-slaverys-evils.html"
    publication_date: 2016-03-06
    site: "The Open Culture"
    site_href: "http://www.openculture.com/"
  - title: "This 1846 Anti-Slavery Alphabet is Fantastic"
    href: "http://www.grayflannelsuit.net/blog/1846-anti-slavery-alphabet"
    publication_date: 2013-07-16
    site: "Gray Flannel Suit"
    site_href: "http://www.grayflannelsuit.net/"
  - title: "The Anti-Slavery Alphabet"
    href: http://mdah.state.ms.us/arrec/digital_archives/series/asa/
    publication_date: 1846
    site: "Missipppi Department of Archives and History"
    site_href: "http://mdah.state.ms.us/"

---


An interesting old book surfaced to my attention, a little late for
Black History Month this year, but still quite relevant: "The
Anti-Slavery Alphabet". Written in 1846 for the Anti-Slavery Faire in
Philidelphia of that year, it's a basic primer for teaching letters
with anti-slavery lessons.

{% assign data = site.data.2016-03-12-the-anti-slavery-alphabet %}


The forward, here:

![{{ data.images[2].name }}]({{ data.images[2].src | prepend: data.s3url }})

reads:

> ## To our little readers.

> Listen, little children, all,<br>
> Listen to our earnest call:<br>
> You are very young, 'tis true,<br>
> But there's much that you can do.<br>
> Even you can plead with men<br>
> That they buy not slaves again,<br>
> And that those they have may be<br>
> Quickly set at liberty.<br>

> They may harken what *you* say,<br>
> Though from *us* they turn away.<br>
> Sometimes, when from school you walk,<br>
> You can with your playmates talk,<br>
> Tell them of the slave child's fate,<br>
> Motherless and desolate.<br>

> And you can refuse to take<br>
> Candy, sweetmeat, pie or cake,<br>
> Saying "no" -- unless 'tis free --<br>
> "The slave shall not work for me."<br>

> Thus, dear little children, each<br>
> May some useful lesson teach;<br>
> Thus each one may help to free<br>
> This fair land from slavery.<br>

## "A is an Abolitionist / B is a Brother"

![{{ data.images[3].name }}]({{ data.images[3].src | prepend: data.s3url }})

> A is an Abolitionist --<br>
> A man who want to free<br>
> The wretched slave -- and give to all<br>
> An equal liberty

> B is a Brother with a skin<br>
> Of somewhat darker hue,<br>
> But of our Heavenly Father's sight,<br>
> He is as dear as you<br>

## "K is the Kidnapper / L is the Lash"

![{{ data.images[8].name}}]({{ data.images[8].src | prepend: data.s3url}})

> K is the Kidnapper, who stole<br>
> That little child and mother -- <br>
> Shrieking, it clung around her, but <br>
> He tore them from each other. <br>

> L is the Lash, that brutally <br>
> He swung around its head <br>
> Threatening that "if it cried again,<br>
> He'd whip it till 'twas dead."<br>

Problematic use of "its" in the second line of the "L" stanza I *believe*
is intentionally showing the de-humanization of slaves, but I don't
think they should have there -- the need at this point is for
*re-humanizing* the person being tortured.

## M is the Merchant of the North / N is the Negro, Rambling Free

![{{ data.images[9].name}}]({{ data.images[9].src | prepend: data.s3url}})

> M is the Merchant of the north,<br>
> Who buys what slaves produce --<br>
> So they are stolen, whipped, and worked,<br>
> For his, **AND FOR OUR USE**<br>

[Emphasis mine] **For we have been complicit.**

> N is the Negro, rambling free <br>
> In his far distant home,<br>
> Delighting 'neath the palm trees' shade<br>
> And cocoa-nut to roam<br>

Romanticism in the flesh here, about African natives lives and
environment; perhaps as bad as anything else. Perhaps the sentiment
is what's important? Perhaps not.

# Sources:

{% for source in page.sources %}
[*{{source.title}}*]({{source.href}}), {{source.publication_date | date_string }}, from [{{source.site}}]({{source.site_href}})

{% endfor %}
