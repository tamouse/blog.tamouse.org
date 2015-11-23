---
# BEGIN: redirect added by jekyllpress on 2014-09-29 00:34:42 -0500
redirect_from:
  - /blog/2013/11/29/developing-a-ruby-gem/
# END:   redirect added by jekyllpress on 2014-09-29 00:34:42 -0500
layout: post
title: "Developing a Ruby Gem"
date: 2013-11-29 12:37
categories: 
- swaac
tags:
- ruby
- gems
- howtos
---
This is a tiny guide to creating a new ruby gem. Gems in ruby are
reusable libraries, components, packages, and/or
applications. Consider writing gems as opposed to putting everything
into a single application. (You can combine gems into a single
application, but it makes sense to have separate components that do
one thing really well.)

# Documentation

The [rubygems documentation](http://guides.rubygems.org/) describe how
to do all this in fairly good detail, and they are the benchmark for
creating accurate gems. Read through the guides to learn what things
are and how to use, create, and manage gems. 

# Getting started

In this article, I'll be giving a walk-through of my typical workflow
in creating a gem.

# Using bundler to create a new gem

For my needs, bundler does the initial heavy-lifting to put a basic
gem scaffolding in place:

``` bash
$ bundle gem my_gem --test
      create  my_gem/Gemfile
      create  my_gem/Rakefile
      create  my_gem/LICENSE.txt
      create  my_gem/README.md
      create  my_gem/.gitignore
      create  my_gem/my_gem.gemspec
      create  my_gem/lib/my_gem.rb
      create  my_gem/lib/my_gem/version.rb
      create  my_gem/.rspec
      create  my_gem/spec/spec_helper.rb
      create  my_gem/spec/my_gem_spec.rb
      create  my_gem/.travis.yml
Initializating git repo in /Users/tamara/Documents/tamouse.github.io/source/downloads/code/2013-11-29-developing-a-ruby-gem/my_gem
```

First thing after this is hop into the new gem's directory, and modify
the `.gemspec` file:

``` bash
$ git diff my_gem.gemspec 
diff --git a/my_gem.gemspec b/my_gem.gemspec
index 62ca81d..2cd4451 100644
--- a/my_gem.gemspec
+++ b/my_gem.gemspec
@@ -8,9 +8,9 @@ Gem::Specification.new do |spec|
   spec.email         = ["tamouse@gmail.com"]
-  spec.description   = %q{TODO: Write a gem description}
-  spec.summary       = %q{TODO: Write a gem summary}
-  spec.homepage      = ""
+  spec.description   = %q{my gem description}
+  spec.summary       = %q{my gem summary}
+  spec.homepage      = "http://github.com/tamouse/my_gem"
   spec.license       = "MIT"
```

This is a good start, but there are more things I like to add.

## Guard -- for continuous testing

The [Guard gem][guard] provides a means of continuous testing by
watching various directories in your gem's tree and performing
specific actions based on modifications in files. Since [RSpec][rspec]
is my testing tool of choice for Ruby, I include the following in the
newly-created `.gemspec` file:

``` bash
@@ -21,4 +21,8 @@ Gem::Specification.new do |spec|
   spec.add_development_dependency "bundler", "~> 1.3"
   spec.add_development_dependency "rake"
   spec.add_development_dependency "rspec"
+
+  spec.add_development_dependency "guard"
+  spec.add_development_dependency "guard-bundler"
+  spec.add_development_dependency "guard-rspec"
 end
```

There are lots of guards available, visit the [Guard
Organization][guard-org] to see what's there.

Once that's saved, initialize guard:

``` bash
$ bundle exec guard init
16:13:24 - INFO - Writing new Guardfile to /Users/tamara/Documents/tamouse.github.io/source/downloads/code/2013-11-29-developing-a-ruby-gem/my_gem/Guardfile
16:13:24 - INFO - bundler guard added to Guardfile, feel free to edit it
16:13:24 - INFO - rspec guard added to Guardfile, feel free to edit it
```

Since we've included Guard in the `.gemspec` file, we need to run it
with `bundle exec`. An alternative is to leave the Guard stuff out of
the `.gemspec` and use global settings. I prefer to include it.

I always edit the resulting `Guardfile`, making the following changes:

``` bash
$ git diff
diff --git a/Guardfile b/Guardfile
index 6b1588c..0e69679 100644
--- a/Guardfile
+++ b/Guardfile
@@ -1,30 +1,11 @@
-# A sample Guardfile
-# More info at https://github.com/guard/guard#readme
-
 guard :bundler do
   watch('Gemfile')
-  # Uncomment next line if your Gemfile contains the `gemspec' command.
-  # watch(/^.+\.gemspec/)
+  watch(/^.+\.gemspec/)
 end
 
 guard :rspec do
   watch(%r{^spec/.+_spec\.rb$})
   watch(%r{^lib/(.+)\.rb$})     { |m| "spec/lib/#{m[1]}_spec.rb" }
   watch('spec/spec_helper.rb')  { "spec" }
-
-  # Rails example
-  watch(%r{^app/(.+)\.rb$})                           { |m| "spec/#{m[1]}_spec.rb" }
-  watch(%r{^app/(.*)(\.erb|\.haml|\.slim)$})          { |m| "spec/#{m[1]}#{m[2]}_spec.rb" }
-  watch(%r{^app/controllers/(.+)_(controller)\.rb$})  { |m| ["spec/routing/#{m[1]}_routing_spec.rb", "spec/#{m[2]}s/#{m[1]}_#{m[2]}
-  watch(%r{^spec/support/(.+)\.rb$})                  { "spec" }
-  watch('config/routes.rb')                           { "spec/routing" }
-  watch('app/controllers/application_controller.rb')  { "spec/controllers" }
-
-  # Capybara features specs
-  watch(%r{^app/views/(.+)/.*\.(erb|haml|slim)$})     { |m| "spec/features/#{m[1]}_spec.rb" }
-
-  # Turnip features and steps
-  watch(%r{^spec/acceptance/(.+)\.feature$})
-  watch(%r{^spec/acceptance/steps/(.+)_steps\.rb$})   { |m| Dir[File.join("**/#{m[1]}.feature")][0] || 'spec/acceptance' }
 end
```

# Initialize RSpec

When using the `-t` option on `bundle gem`, a `spec` folder is
automatically created, containing a dummy spec test and the RSpec
helper file, `spec_helper.rb`. An `.rspec` rc file is also included.

The dummy spec can be used as a template for other spec files. The
`spec` directory structure should be a mirror analog of the `lib`
directory, including the `lib` directory itself:

```
$ mkdir -p spec/lib/my_gem
$ tree
   |-lib
   |---my_gem
   |-spec
   |---lib
   |-----my_gem
```

