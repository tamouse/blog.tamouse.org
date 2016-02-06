---
layout: post
title: "Colour Our Collections"
date: 2016-02-06 00:45
dir: "blog/colouring-books/"
books:
- name: "Bodliean Libraries, University of Oxford"
  pdf: 2016-Colouring-Book.pdf
  zip: 2016-Colouring-Book.zip
- name: "Biodiversity Heritage Library"
  pdf: BHL Coloring Book Final.pdf
  zip: BHL Coloring Book Final.zip
- name: "The Getty"
  pdf: ColorOurCollections__TheGetty.pdf
  zip: ColorOurCollections__TheGetty.zip
- name: "Dittrick Medical History Center Rare Book Collections at Case Western Reserve University"
  pdf: DittrickColoringBook.pdf
  zip: DittrickColoringBook.zip
- name: "Europeana Colouring Book for Grown-Ups"
  pdf: EU_ColouringBook_low.pdf
  zip: EU_ColouringBook_low.zip
- name: "Folger Shakespeare Library"
  pdf: FolgerColorOurCollections2016.pdf
  zip: FolgerColorOurCollections2016.zip
- name: "Wangensteen Gallery"
  pdf: WangensteenColouringBook.pdf
  zip: WangensteenColouringBook.zip
- name: "Color in a New Light, Smithsonian Libraries"
  pdf: color_in_a_new_light_coloring_pages_0.pdf
  zip: color_in_a_new_light_coloring_pages_0.zip
- name: "Digital Public Library"
  pdf: dpla.pdf
  zip: dpla.zip
- name: "The New York Academy of Medicine"
  pdf: nyam_2016coloringbook.pdf
  zip: nyam_2016coloringbook.zip
- name: "The New York Public Library"
  pdf: nyplcolor16gk.pdf
  zip: nyplcolor16gk.zip
- name: "The Open Library Colouring Pages"
  pdf: open-library-colouring.pdf
  zip: open-library-colouring.zip
all:
- pdf: all-colouring-pages.pdf
  zip: all-colouring-pages.zip
archives:
  tar: colouring-books.tgz
  zip: colouring-books.zip


---
Recently, several libraries, museums, and other institutions
launched
[#ColourOurCollections](https://twitter.com/hashtag/colorourcollections). I
snagged a few of them.

{% assign doc_path = site.images.s3path | append: page.dir %}

### All in one:

I combined all the pages of the individual books into one giant pdf:

* [PDF]({{page.all.pdf | prepend: doc_path}})
* [Zip]({{page.all.zip | prepend: doc_path}})


### The individual books
{% for book in page.books %}
* {{book.name}}: [PDF]({{book.pdf | prepend: doc_path}}), [Zip]({{ book.zip | prepend: doc_path}}){% endfor %}

### Archive collection of the individual books
* [Zip archive]({{page.archives.zip | prepend: doc_path}})
* [Tar archive]({{page.archives.tgz | prepend: doc_path}})
