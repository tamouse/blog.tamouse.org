---
layout: post
title: "Boosting Your Rails Development Workflow - SitePoint"
date: 2013-09-04 10:47
categories: [swaac]
tags: [rails, workflow, productivity, development, guard, zeus, tools]
source: http://www.sitepoint.com/boosting-your-rails-development-workflow/#!
---


Clipped on 2013-09-04 10:47:19 -0500

<!--more-->

> Boosting Your Rails Development Workflow
> ========================================
> 
> [Ahmd Refat](http://www.sitepoint.com/author/arefat/)
> 
> Published March 28, 2013
> 
> This article is mainly for folks that are new to Rails. Most
> established Rails developers already have a beloved workflow. If you’re
> new or need a boost to your daily Rails productivity, keep reading!
> 
> Let’s explore few gems and scripts that will help you get things done
> faster and better.
> 
> > A quick tip about installing Ruby and Rails for OS X and Windows
> > machines: Try [railsinstaller](http://railsinstaller.org). It will get
> > you up and running in few minutes without any fuss.
> 
> Gems You Must Install
> ---------------------
> 
> Here are five scripts/gems you must install before starting work with
> Rails. You have no choice, I’m sorry! :)
> 
> ​1. oh\_my\_zsh script
> 2. laptop script
> 3. awesome\_print gem
> 4. zeus gem
> 5. guard-livereload gem
> 
> ### 1. [oh\_my\_zsh](https://github.com/robbyrussell/oh-my-zsh)
> 
> Before installing **oh\_my\_zsh** you should have
> [zsh](http://www.zsh.org/) installed already. **oh\_my\_zsh** is
> distinguished by it’s
> [Themes](https://github.com/robbyrussell/oh-my-zsh/wiki/Themes) which
> are cool and easy to customize,
> [Plugins](https://github.com/robbyrussell/oh-my-zsh/wiki/Plugins), and
> [Auto
> Complete](https://github.com/robbyrussell/oh-my-zsh/wiki/Cheatsheet)
> helpers that will save you loads of time. You’ll notice, also, that
> **oh-my-zsh** asks you to install updates periodically, which is a good
> thing.
> 
> #### Installing
> 
> As I’ve mentioned, you should have zsh shell already installed. Then,
> run this command to make it the default shell: `chsh -s /bin/zsh`
> 
> And run this line to download it install it:
> 
> {% highlight bash %}
> curl -L https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh | sh
> {% endhighlight %}
> 
> #### Using
> 
> To change the theme, open up the `~/.zshrc` in a text editor and set the
> value of `ZSH_THEME` to the name of the theme. Here’s the list of
> [all available themes](https://github.com/robbyrussell/oh-my-zsh/wiki/themes). You
> should test drive a few and find one that works. Also, if you do
> presentations, you may want to find one that looks good on a projector
> (hint: white on black is bad…)
> 
> To add/remove plug-ins, open the `~/.zshrc` file and add/remove the
> plugin name from the `plugins` array. Here’s the list of
> [all available plugins](https://github.com/robbyrussell/oh-my-zsh/tree/master/plugins).
> You’ll find the full source of **oh-my-zsh** on your machine under
> `~/.oh-my-zsh`.
> 
> ### 2. [laptop](https://github.com/thoughtbot/laptop)
> 
> This script is for OS X machines only. Quoting the from
> [laptop](https://github.com/thoughtbot/laptop#laptop) github page:
> 
> > Laptop is a script to set up a Mac OS X laptop for Rails development.
> 
> To install this script, you have to install gcc, set zsh as your default
> shell(we’ve done that already) and then run this line:
> 
> {% highlight bash %}
> zsh <(curl -s https://raw.github.com/thoughtbot/laptop/master/mac)
> {% endhighlight %}
> 
> This [link](https://github.com/thoughtbot/laptop#what-it-sets-up) lists
> of all the stuff that will be installed. We’ll highlight a couple of
> them:
>  - [Heroku Toolbelt](https://toolbelt.heroku.com/) which we need to work
> with apps on Heroku
>  - [Homebrew](http://mxcl.github.com/homebrew/) the beloved package
> manager. You can browse packages online through
> [http://braumeister.org/](http://braumeister.org/)
>  - [RVM](http://rvm.io) which it will be installed already if you’ve
> used [railsinstaller](http://railsinstaller.org)
> 
> ### 3. [awesome\_print](https://github.com/michaeldv/awesome_print)
> 
> The first thought that might come to you when you run any code in the
> rails console for the first time, is “How anyone can read this?!” You
> are right, it’s really hard, especially if the result is complex or
> you’ve retrieved a large number of objects. Here comes
> **awesome\_print** to save the day.
> 
> #### Installing
> 
> To install **awesome\_print** run this command:
> 
> {% highlight bash %}
> gem install awesome_print
> {% endhighlight %}
> 
> To use it with rails you’ll have to add it your Gemfile, and `bundle`
> 
> {% highlight ruby %}
> group :development do
>   gem 'awesome_print'
> end
> {% endhighlight %}
> 
> #### Using
> 
> If you want **awesome\_print** to be running by default in irb or the
> console, add the two lines to your `.irbrc` shown
> [here](https://github.com/michaeldv/awesome_print#usage). Otherwise, you
> could prepend the line in the console with `ap`
> 
> {% highlight bash %}
> require "awesome_print"
> ap object, options = {}
> {% endhighlight %}
> 
> #### Example
> 
> This is an example of **awesome\_print** output:
> 
> {% highlight ruby %}
> # {
> 
>                :id => 1,
>           :user_id => 5,
>       :assigned_to => 7,
>              :name => "Hayes-DuBuque",
>            :access => "Public",
>           :website => "http://www.hayesdubuque.com",
>   :toll_free_phone => "1-800-932-6571",
>             :phone => "(111)549-5002",
>               :fax => "(349)415-2266",
>        :deleted_at => nil,
>        :created_at => Sat, 06 Mar 2010 09:46:10 UTC +00:00,
>        :updated_at => Sat, 06 Mar 2010 16:33:10 UTC +00:00,
>             :email => "info@hayesdubuque.com",
>   :background_info => nil
> }
> {% endhighlight %}
> 
> ### 4. [zeus](https://github.com/burke/zeus)
> 
> While you are working on a Rails project, will need to restart your
> server, run various commands like `console`, `rake`, `generate`, `rspec`
> and `test`. This can take a bit of time, especially when your project
> grows and the number of classes and tests increase. That’s why you need
> **zeus**, which preloads your Rails app so all your tasks will run much
> more quickly.
> 
> #### Installing
> 
> To install **zeus** run this command, or you could add it to your
> Gemfile, and `bundle`
> 
> {% highlight bash %}
> gem install zeus
> {% endhighlight %}
> 
> #### Using
> 
> All you have to do is navigate to your Rails project and run
> `zeus start`
> 
> **zeus** will take few seconds to start and then it will list all
> available commands. You’ll need to open a new shell window and run other
> commands such as
> 
> {% highlight bash %}
> zeus s # to start rails server
> zeus c # to start rails console
> zeus test # to run tests
> zeus generate model  # go generate modle
> {% endhighlight %}
> 
> ### 5. [guard-livereload](https://github.com/guard/guard-livereload)
> 
> **[Guard](https://github.com/guard/guard)** is a tool to easily handle
> events on file system modifications. **guard-livereload** is one of
> [a long list of gems](https://github.com/guard/guard/wiki/List-of-available-Guards) that
> depends on **Guard**, but is customized for a specific kind of file
> structure and application. For instance,
> [guard-rspec](https://github.com/guard/guard-rspec) monitors rspec files
> and launches rspec to run the specs when they change.
> 
> **guard-livereload** does a similar job by reloading your Rails view as
> it’s changes. It’s like changing them from your browser Developer tools,
> so you’ll see your view changes as you go.
> 
> #### Install
> 
> You’ll have to install **guard** gem first and **guard-livereload** by
> running this:

{% highlight bash %}
gem install guard
gem install guard-livereload
{% endhighlight %}

> 
> or you could add them to your gem file:
> 
> {% highlight ruby %}
> group :development do
>   gem 'guard'
>   gem 'guard-livereload'
> end
> {% endhighlight %}
> 
> and then run this, which will create the `Guardfile` that will contain
> the configuration for guard:
> 
> {% highlight bash %}
> bundle
> guard init
> guard init livereload
> {% endhighlight %}
> 
> The last part of installing **guard** is to add a couple of gems to your
> Gemfile. This is for
> [Efficient Filesystem Handling](https://github.com/guard/guard#efficient-filesystem-handling),
> and you may just need to add one of them depending on your OS.
> 
> {% highlight ruby %}
> group :development do
>   gem 'rb-inotify', :require => false # for OS X
>   gem 'rb-fsevent', :require => false # for Linux
>   gem 'rb-fchange', :require => false # for Windows
> end
> {% endhighlight %}
> 
> For **guard-livereload**, you’ll need to install the **rack-livereload**
> gem to see your changes live in the browser:

{% highlight bash %}
gem install rack-livereload
{% endhighlight %}

> 
> and add this line to `config/environments/development.rb`
> 
> {% highlight ruby %}
> MyApp::Application.configure do
>   config.middleware.insert_after(ActionDispatch::Static, Rack::LiveReload)
> end
> {% endhighlight %}
> 
> Debugging
> ---------
> 
> ​1. better\_errors gem
> 2. rails\_panel gem
> 3. sextant gem
> 4. quiet\_assets gem
> 
> ### 1. [better\_errors](https://github.com/charliesome/better_errors)
> 
> **better\_errors** replaces the standard Rails error page with a MUCH
> better one. It even adds the awesome feature of a live REPL in the
> browser! It’s relatively new, but developers are picking it up so fast
> because
> [the difference](https://github.com/charliesome/better_errors#features)
> between default error page and the better\_errors is huge.
> 
> #### Install
> 
> Add the gem to your Gemfile. If you want to use the live REPL, you need
> to add the **binding\_of\_caller** gem also and then `bundle`
> 
> {% highlight ruby %}
> group :development do
>   gem "better_errors"
>   gem "binding_of_caller"
> end
> {% endhighlight %}
> 
> #### Using
> 
> Any time your Rails app throws an error you’ll see a better error page.
> In that page, you’ll find a full stack trace and all the local and
> global variables associated with the request. If you have asynchronous
> requests, you can trace the last error by navigatint to
> “0.0.0.0:3000/\_\_better\_errors”. You can even configure the gem to
> open the source in your editor with the
> [BetterErrors.editor](http://rubydoc.info/github/charliesome/better_errors/master/BetterErrors.editor=)
> method.
> 
> ### 2. [rails\_panel](https://github.com/dejan/rails_panel)
> 
> This gem requires a specific Google Chrome extension. The gem is
> `meta_request` and the Chrome extension is `rails_panel`.
> 
> > RailsPanel is a Chrome extension for Rails development that will end
> > your tailing of development.log. Have all the information about your
> > Rails app requests in the browser – in the Developer Tools panel.
> > Provides insight to db/rendering/total times, parameter list, rendered
> > views and more.
> 
> #### Install
> 
> Add the gem to your Gemfile and `bundle`. Also, here’s the
> [Google Chrome extension](https://chrome.google.com/webstore/detail/railspanel/gjpfobpafnhjhbajcjgccbbdofdckggg)
> 
> {% highlight ruby %}
> group :development do
>   gem 'meta_request', '0.2.1'
> end
> {% endhighlight %}
> 
> ### 3. [sextant](https://github.com/schneems/sextant)
> 
> This gem was merged into rails 4.0 under
> `0.0.0.0:3000/rails/info/routes`. However, if you are developing a rails
> 3.2+ app, you’ll have to install the gem.
> 
> #### Install
> 
> Add the gem to your Gemfile and `bundle`
> 
> {% highlight ruby %}
> group :development do
>   gem 'sextant'
> end
> {% endhighlight %}
> 
> #### Using
> 
> Navigate to `0.0.0.0:3000/rails/routes` and you’ll see the output of the
> command `rake routes` in your browser.
> 
> ### 4. [quiet\_assets](https://github.com/evrone/quiet_assets)
> 
> Tracing the server logs is a bit difficult when it logs all of the asset
> requests. Most of the time, you don’t care about these requests, so this
> gem hides the assets logs. This declutters the logs immensely and lets
> you focus on the requests that are important.
> 
> #### Install
> 
> Add the gem to your Gemfile and `bundle`
> 
> {% highlight ruby %}
> group :development do
>   gem 'quiet_assets'
> end
> {% endhighlight %}
> 
> Front-end and JavaScript MVC Frameworks
> ---------------------------------------
> 
> This section will give you an overview about the gems that wrap some
> frameworks and serve them through the Rails assets pipeline. I won’t
> cover the details of each framework or how to use them or which is
> better. I want to focus on how these gems help things come together
> really fast in Rails.
> 
> ​1. twitter\_bootstrap gem
> 2. backbone-rails
> 
> ### 1. [twitter\_bootstrap](https://github.com/seyhunak/twitter-bootstrap-rails)
> 
> This is not an official gem from the twitter bootstrap maintainers, but
> it a popular one and it works great.
> 
> > Bootstrap is a toolkit from Twitter designed to kickstart development
> > of webapps and sites. It includes base CSS and HTML for typography,
> > forms, buttons, tables, grids, navigation, and more.
> 
> #### Install
> 
> Add the gems to your Gemfile and `bundle`
> 
> {% highlight ruby %}
> group :development do
>   gem "twitter-bootstrap-rails"
> end
> {% endhighlight %}
> 
> To install the bootstrap to your project run

{% highlight bash %}
rails generate bootstrap:install static
{% endhighlight %}

> 
> #### Using
> 
> To add the layout of bootstrap:

{% highlight bash %}
rails g bootstrap:layout application fixed
{% endhighlight %}

> You can also add a theme to a specific resource by running:
> 
> {% highlight bash %}
> rails g scaffold Post title:string description:text
> rake db:migrate
> rails g bootstrap:themed Posts
> {% endhighlight %}
> 
> ### 2. [backbone-rails](https://github.com/codebrew/backbone-rails)
> 
> This gem helps you setup backbone.js in your Rails projects. It creates
> the backbone.js file structure and serves the libraries via the asset
> pipeline.
> 
> > Backbone.js gives structure to web applications by providing models
> > with key-value binding and custom events, collections with a rich API
> > of enumerable functions, views with declarative event handling, and
> > connects it all to your existing API over a RESTful JSON interface.
> 
> #### Install
> 
> Add the gems to your Gemfile and `bundle`
> 
> {% highlight ruby %}
> group :development do
>   gem "rails-backbone"
> end
> {% endhighlight %}
> 
> Then run the bootstrapper:

{% highlight bash %}
rails g backbone:install
{% endhighlight %}

> #### Using
> 
> The gem provides three generators to help get started with backbone.js
> 
> ##### Model Generator
> 
> `rails g backbone:model`
> 
> ##### Routers Generator
> 
> `rails g backbone:router`
> 
> ##### Scaffolding Generator
> 
> `rails g backbone:scaffold`
> 
> Authentication and Administration
> ---------------------------------
> 
> Most of your apps will need Authentication and some of them might need
> Administration. We all know how essential and sensitive these tasks are,
> so it’s better to use well-tested gems to handle them.
> 
> ​1. devise gem
> 2. active\_admin gem
> 3. Rails Composer
> 
> ### 1. [devise](https://github.com/plataformatec/devise)
> 
> **devise** is a very popular gem in the Rails community and it really
> requirees no introduction.
> 
> #### Install
> 
> Add the gem to your Gemfile and `bundle`
> 
> {% highlight ruby %}
> group :development do
>   gem "devise"
> end
> {% endhighlight %}
> 
> To install **devise** in your Rails project:

{% highlight bash %}
rails generate devise:install
{% endhighlight %}

> 
> #### Using
> 
> Run the following command with the appropriate model name to generate a
> devise model. This model will have all the authentication features that
> devise provides.

{% highlight bash %}
rails generate devise MODEL
{% endhighlight %}

>  You should add this line inside any controller that you want to be
> accessed only by authenticated users, or add it to your
> `ApplicationContrller` to require authentication throughout your app:

{% highlight ruby %}
before_filter :authenticate_user!
{% endhighlight %}

> ### 3. [active\_admin](https://github.com/gregbell/active_admin)
> 
> **active\_admin** is one of the best administration gems with a very
> good UI and [documentation](http://activeadmin.info/documentation.html).
> here’s a [demo](http://demo.activeadmin.info/admin) site using
> **active\_admin**
> 
> > Active Admin is a framework for creating administration style
> > interfaces. It abstracts common business application patterns to make
> > it simple for developers to implement beautiful and elegant interfaces
> > with very little effort.
> 
> #### Install
> 
> Add the gem to your Gemfile and `bundle`. You need to add a couple of
> other gems if you are running Rails 3.1 or higher:
> 
> {% highlight ruby %}
> gem "activeadmin"
> gem 'sass-rails'
> gem 'meta_search', '>= 1.1.0.pre'
> {% endhighlight %}
> 
> To install **activeadmin** in your Rails project:
> 
> {% highlight bash %}
> rails generate active_admin:install
> rake db:migrate
> {% endhighlight %}
> 
> The full installation docs can be found
> [here](http://activeadmin.info/documentation.html).
> 
> #### Using
> 
> Navigate to `0.0.0.0:3000/admin` and login using
> 
>     User: admin@example.com
>     Password: password
> 
> To register a model, run:
>
>     rails generate active_admin:resource [MyModelName]
> 
> [rails-composer](https://github.com/RailsApps/rails-composer)
> -------------------------------------------------------------
> 
> Rails Composer is an awesome script that could bootstrap your project in
> a few seconds with minimal configuration required. Rails Composer
> definitely uses most of the gems that we’ve mentioned above, so if you
> want the fast way you can use the script and if you want a specific gem
> you can pick up whatever helps you.
> 
> To create a project with Rails Composer, run the the `rails new` command
> as usual with your project name and pass the the `-m` parameter as
> following
> 
> {% highlight bash %}
> rails new myapp -m https://raw.github.com/RailsApps/rails-composer/master/composer.rb
> {% endhighlight %}
> 
> You’ll face about twenty question covering almost all the aspects that
> you could think about when starting a new rails project. Everything from
> the app structure, web server, templating engine, testing, front-end
> frameworks, authentication, and even github repository are covered. You
> can find the full list of options
> [here](https://github.com/RailsApps/rails-composer#your-options).
> 
> Wrapping up
> -----------
> 
> We’ve covered about twenty gems and scripts to help you achieve your
> Rails goals more efficiently. If you are using an awesome gem that
> magically helps you finish things in a better way I’d love to hear about
> it.
> 
> ### 2 Reader comments
> 
> 1.  ![](http://1.gravatar.com/avatar/d4402a8a978750279198f8d2a2da6461?s=60&d=http%3A%2F%2F1.gravatar.com%2Favatar%2Fad516503a11cd5ca435acc9bb6523536%3Fs%3D60&r=G)
> 
>     Boris Barroso | April 2, 2013 at 1:41 pm
> 
>     Just wanna say devise is great for starting but once you have to do
>     more complicated stuff you wish you would not have used devise,
>     create your own auth, it’s simple and it’s a core feature in any
>     app, I have also read many complains about active\_admin, it’s great
>     for simple stuff but not good for more control.
> 
> 2.  ![](http://0.gravatar.com/avatar/434085debcc69044679269ce84d5dad1?s=60&d=http%3A%2F%2F0.gravatar.com%2Favatar%2Fad516503a11cd5ca435acc9bb6523536%3Fs%3D60&r=G)
> 
>     Jacek Podkanski | April 5, 2013 at 4:17 am
> 
>     What’s the point installing sextant if rake:routes is good enough?
>     With regards to quiet\_assets copying custom initialiser will do the
>     same job as well. But if Better Errors give you REPL then I am
>     definitely going to try it. Last gem on the list, rails-compser is
>     something I want to try as well. The rest don’t seem to be worth
>     trying for my current projects.
> 
> © 2000 – 2013 SitePoint Pty. Ltd.
