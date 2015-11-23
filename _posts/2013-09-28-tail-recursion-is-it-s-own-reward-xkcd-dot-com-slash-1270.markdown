---
# BEGIN: redirect added by jekyllpress on 2014-09-29 00:34:42 -0500
redirect_from:
  - /blog/2013/09/28/tail-recursion-is-it-s-own-reward-xkcd-dot-com-slash-1270/
# END:   redirect added by jekyllpress on 2014-09-29 00:34:42 -0500
layout: post
title: "\"Tail recursion is it's own reward\" -- xkcd.com/1270"
date: 2013-09-28 00:24
comments: true
categories: [comics]
tags: [comics, funny, xkcd, functional-programming]
---
Thanks again, Randall, for a stunningly amusing comic:

[![Functional programming combines the flexibility and power of abstract mathematics with the intuitive clarity of abstract mathematics.](http://imgs.xkcd.com/comics/functional.png "Functional programming combines the flexibility and power of abstract mathematics with the intuitive clarity of abstract mathematics.")](http://xkcd.com/1270/)

<!--more-->

### hover comment:

> _Functional programming combines the flexibility and power of abstract mathematics with the intuitive clarity of abstract mathematics._


*******




[Tail Recursion](https://en.wikipedia.org/wiki/Tail_recursion
"wikipedia") is a computer science term that refers to a particular
form a recursion, where the recursive call is made at the end of the
routine to itself. Functional programming languages such as Lisp and
derivatives, and OO languages such as Ruby, use this to great
effect.

The comment on the cartoon above, by Randall Monroe, provides the
usual level of snark that we all must give ourselves for our vast
pretentiousness. :)

The classic tail recursion example is calculating the factorial of a
number, which is the formula:

<img src="/images/factorial-formula.jpg" alt="factorial of n is the product of k, k going from 1 to n inclusive"
title="factorial of n is the product of k, k going from 1 to n inclusive"
style="background-color: white;padding: 10px;border-radius: 5px;" />

And below is how it is implemented in Common Lisp:

``` lisp
(defun factorial (n)
  (if (= n 0)
      1
      (* n (factorial (- n 1)))
  )
)
```

