---
# BEGIN: redirect added by jekyllpress on 2014-09-29 00:34:42 -0500
redirect_from:
  - /blog/2013/08/11/bootstrap-follies-vertically-and-horizontally-centered-form/
# END:   redirect added by jekyllpress on 2014-09-29 00:34:42 -0500
layout: post
title: "Bootstrap Follies: Vertically and Horizontally Centered Form"
date: 2013-08-11 09:59
categories: [swaac]
tags: [css, design, bootstrap, howto]
---
[Bootstrap](http://getbootstrap.com/2.3.2/) provides a really nice
framework and set of components to make a very nice looking web page
out of the box. However, it's not always clear how to do something. A
frequently asked question among CSS newbies is:

> ## How do I center a form on my window?

This is a pretty-well solved problem *outside* of bootstrap, and you
could use the same method inside bootstrap as well.

There are some compromises, though:

1. You have to decide on the height and width of the box your form
will take.
2. You have to go through a lot to get it to look "bootstrap-ish".

I'll go through the method so you can understand what is going on.

## Pure (?) CSS implementation

In a local style sheet, define a class for your centered form. I'm
calling mine 'centered-box', and determine the box will be 600px wide
by 300px high.

``` css
.centered-box {
  position: fixed; /* or absolute if you want it to scroll with the page */
  top: 50%;
  left: 50%;
  width: 600px;
  height: 300px;
  border: solid;
  background-color: whitesmoke;
  /* this is where it all comes into play:
     Set the margins so that:
     margin-top is -(height/2)
     margin-left is -(width/2)
  */
  margin-top: -150px;
  margin-left: -300px;
}
```

``` html
<div id="centered_box" class="centered-box">
  <div class="row-fluid">
    <div class="offset1 span10">
      <form method="get" id="my_form" action="" class="form-horizontal">
        <div class="page-header">
          <h1>Login:</h1>
       </div>
       <div class="control-group">
         <label class="control-label" for="inputEmail">Email</label>
         <div class="controls">
           <input type="text" id="inputEmail" placeholder="Email">
         </div>
       </div>
       <div class="control-group">
         <label class="control-label" for="inputEmail">Password</label>
         <div class="controls">
           <input type="password" id="inputPassword" placeholder="Password">
         </div>
       </div>
       <div class="control-group">
         <div class="controls">
           <label class="checkbox"><input type="checkbox"> Remember me</label>
           <button type="submit" class="btn">Sign in</button>
         </div>
       </div>
     </form>
   </div>
  </div>
</div>
```


This results in a rather non-bootstrap-ish presentation:

![](/images/bootstrap_follies_centered_box_8_11_13_10_13_AM.jpeg)

## The Bootstrap Static Modal

Bootstrap provides a component, `modal`, that basically does the same
thing as above, although it makes an additional compromise that i
cannot *a priori* know the height of the box, so simply sets the top
value to 10%. To use modal, simply make it the class on your box, and
omit the styling from the previous example:

``` html
<div id="centered_box" class="modal">
  <div class="row-fluid">
    <div class="offset1 span10">
      <form method="get" id="my_form" action="" class="form-horizontal">
        <div class="page-header">
          <h1>Login:</h1>
       </div>
       <div class="control-group">
         <label class="control-label" for="inputEmail">Email</label>
         <div class="controls">
           <input type="text" id="inputEmail" placeholder="Email">
         </div>
       </div>
       <div class="control-group">
         <label class="control-label" for="inputEmail">Password</label>
         <div class="controls">
           <input type="password" id="inputPassword" placeholder="Password">
         </div>
       </div>
       <div class="control-group">
         <div class="controls">
           <label class="checkbox"><input type="checkbox"> Remember me</label>
           <button type="submit" class="btn">Sign in</button>
         </div>
       </div>
     </form>
   </div>
  </div>
</div>
```

And the result is a prettier, bootstrap-ish box:

![](/images/bootstrap_follies_modal_centered_box_8_11_13_10_13_AM.jpeg)

I much prefer the latter of these two approaches, for a few reasons:

1. It's prettier.
2. It's takes advantage of bootstrap defaults and commonalities.
3. Much less to have to figure out.
