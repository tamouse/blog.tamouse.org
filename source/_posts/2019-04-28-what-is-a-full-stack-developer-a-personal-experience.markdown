---
layout: post
title: "What is a Full-Stack Developer? A personal experience"
date: 2019-04-28 04:18
categories: ["programming"]
tags: ["full-stack", "experience", "dev.to"]
---

There's been some controversy about the term "Full Stack Developer" recently. There was this image floating around for a while:

![drawing of a horse with a details back end and stick figure front end, labeled 'When there is 5 minutes to go on your test'. used to illustrate the dicongruity of the term 'full-stack developer'. popularized in a tweet by @holtbt]({{ '/images/5-minutes-to-go.jpg' | relative_url }} "5 minutes to go on the test")

I understand the concept. No one can be an expert in everything. No one should try. It makes sense to be deep in some area, and broad overall, but to expect any developer to be able to pick up anything on any given web app, software product, infrastructure project, etc, is a real **management** fallacy, and that is a problem if that's what your organization counts on.

How does that relate to me personally?

Well, at first I was offended.

Because I think I'm filling in the detail on the entire horse.

Except, of course, I'm not.

My work is very much front-end these days. I write a lot of React code, and need to understand the triumverate of web programming languages JavaScript, HTML, and CSS very well. I have about 10 years experience of writing Ruby, especially in Rails, but also as a general-purpose lanaguge. Developing web apps also requires understanding of system and shell languages, as well as understanding how databases work and the languages associated with them. My practice has included working as a business analyst, to uncover users' needs and translate them into actionable requirements for developers. I've worked in quality assurance, as an engineer, to develop processes that ensure customers and users get valuable and useful products. I've worked from deep in the guts of a unix kernel, writing device drivers, to the front of a dashboard control panel for network administration.

I am a generalist. But more important, I'm a problem solver. Sure, there's no way I can solve every problem, but I can pretty much understand problems well enough to find out who can solve it, and understand how it fits into the whole. So what does that make me?

I don't *like* the term "full-stack" -- it's too *limiting*.

While I'm writing a React component, I'm deeply interested in how the user experience of it manifests in solving a problem for the user interacting with it. What task are they hoping to accomplish, and am I writing the version of this component that's going to fulfill (part of) that task in the best way for the user?

While I'm writing that, am I going to be able to interact with our services and databases without taxing them or costing us more in infrastructure and/or support system nightmares?

In the specific area I work in, I'm using GraphQL, and there is no one else on the team who understands how to write a GraphQL API into our backend, so I do that as well.

So what does that make me? A unicorn? I don't know if it does. We have a small dev team (just enlarged by 2 people, but then diminished by losing our tech lead / manager); we *all* need to work all over the app. Some specialize in specific knowledge, but we also need to share knowledge of the product so it doesn't get lost *and* so people can review each other's work. I've spent the past couple years as the primary front-end dev without anyone to bounce ideas off of, or give solid review feedback; the team is super supportive, but mainly it's feedback like "Looks good to me!", "We trust you!", and so on; i.e., not *constructive* even if quite supportive. For the first 6 months, another team mate was also newly working on the mobile app; we couldn't even really give each other constructive feedback in that time. 2 years ago I wasn't working on the front-end at all. No question my *breadth* of experience over the years has let me make it through to here, but it hasn't been *easy*. So maybe this horse's front end *is* just a stick figure. But it won't stay that way.

I do think there is space in this world for generalists, but I don't think expecting such generalism to equate to being capable of all things anywhere in the product is doing anyone a service.

So what *don't* I do?

I'm rapidly losing touch with our operations stuff; I used to work a lot with chef, puppet, and ansible, working to provisioning servers and deploy software fully configured. I don't do that anymore, even necessarily with my own projects. Continuous Integration / Continuous Delivery is something I use, but it's not something I study anymore. There are lots of specific services the product integrates with that I know nothing about. Mobile development eludes me, and I just can't seem to get the hang of it. Anything to do with specific operating systems other than Unix-based ones remains somewhat opaque. (When I have to use XCode, I don't understand anything about what I'm looking at. I know a few buttons to push and that's all.)

I don't write any C code; I haven't for years. It used to be my everyday language for a decade, at least. Same for PHP and Perl. Ruby has replaced them all.

I still write Lisp, which was the 3rd language I ever learned, because, yay, emacs.

For most people starting out in their career, it's really great to focus in, get depth in a discipline. It's necessary to keep expanding beyond it, getting understanding of other disciplines, and there's more in common than not in many cases. Learning new languaqes, especially languages for different disciplines, is helpful. The tools to build software these days are pretty phenomenal, and also require study to use well. Even your code editor, whether it's vim/emacs, WebStorm, VSCode, Atom, or *anything* (requisite [xkcd reference](https://www.xkcd.com/378/ "_Real Programmers_ by Randall Munroe, who has something to say about ... nearly everything in my life")) requires studying how it works, how it can help you write better code, faster, and more accurately, and be customized or tailored to fit your "hand". (I'm an old emacser, and not a day goes by I'm not twiddling some setting or writing a snippet of elisp.)

If you label yourself a "Front-end Dev", or a "Back-end Dev", or a "Full-Stack Dev", that's absolutely great. I don't believe there's really a specific problem with labels; I think there can be problems when expectations are assumed because of the label, which is also inevitable. How important is how you label yourself to you? How long do you think you'll keep it?
