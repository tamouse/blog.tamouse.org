---
layout: post
title: "Running Headless Selenium with Chrome"
date: 2013-09-08 13:48
categories: [swaac]
tags: [testing, headless, selenium, web-development, javascript]
---
Source http://www.chrisle.me/2013/08/running-headless-selenium-with-chrome/

Clipped on 2013-09-08 13:48:54 -0500

<!--more-->

> Running Headless Selenium with Chrome
> =====================================
> 
> Scaling website automation for either testing or scraping can be a
> challenge when the site is enitrely driven by JavaScript or behaves
> differently when using specific browsers.
> 
> Running a headless Selenium machine with Google’s Chrome installed
> provides a scalable way to automate your tests on one of the most
> popular browsers in use.
> 
> Here are step by step instructions for installing a headless Selenium
> server with Chrome and Vagrant.
> 
> ![Selenium with Chrome](http://www.chrisle.me/wp-content/uploads/2013/08/Screen-Shot-2013-08-18-at-1.02.09-PM.png)
> 
> Side note: [Why use Selenium instead of PhantomJS](http://www.chrisle.me/2013/08/5-reasons-i-chose-selenium-over-phantomjs/ "5 Reasons I Chose Selenium over PhantomJS")?
> 
> * * * * *
> 
> Spike Goals
> -----------
> 
> -   Get up and running quickly
> -   Run a sample script that demos it works
> -   Use JavaScript only (via NodeJS)
> 
> Prerequisites
> -------------
> 
> The code you write locally should work when deployed at scale in
> production. These tools help us do that by creating identical
> environments for development and production.
> 
> *Both are free downloads. Install with the default settings*
> 
> -   Download and install
>     [VirtualBox](https://www.virtualbox.org/wiki/Downloads)
> -   Download and install [Vagrant](http://www.vagrantup.com/)
> -   Download and install [NodeJS](http://nodejs.org/download/)
> 
> *I also assume you can use a command line and have some vague idea of
> what a virtual machine and Vagrant is.*
> 
> * * * * *
> 
> Create a “Vagrantfile”
> ---------------------------
> 
> This file tells Vagrant how configure the testing environment. It
> applies universally to both development and production.
> 
> Create a project directory and create a file named `Vagrantfile`:
> 
> {% highlight bash %}
> # encoding: utf-8
> # -*- mode: ruby -*-
> # vi: set ft=ruby :
> 
> Vagrant.configure("2") do |config|
>   config.vm.box = "precise64"
>   config.vm.box_url = "http://files.vagrantup.com/precise64.box"
>   config.ssh.forward_agent = true
> 
>   config.vm.provider :aws do |aws, override|
>     aws.access_key_id = 'XXXX'      # Replace this
>     aws.secret_access_key = 'XXXX'  # Replace this
>     aws.keypair_name = 'XXXX'       # Replace this
>     aws.ami = 'ami-7747d01e'        # ubuntu 12.04
>     override.ssh.username = 'ubuntu'
>     override.ssh.private_key_path = '~/.ssh/amazon-ubuntu.pem'
>   end
> 
>   config.vm.provision :shell, :path => "setup.sh"
>   config.vm.network :forwarded_port, guest:4444, host:4444
> 
> end
> {% endhighlight %}
> 
> * * * * *
> 
> 2. Create “setup.sh”
> ----------------------
> 
> The setup.sh file executes when Vagrant creates a virtual machine for
> you. In the same folder as you created your `VagrantFile` create a
> `setup.sh` file:
> 
> {% highlight bash %}
> #!/bin/sh
> set -e
> 
> if [ -e /.installed ]; then
>   echo 'Already installed.'
> 
> else
>   echo ''
>   echo 'INSTALLING'
>   echo '----------'
> 
>   # Add Google public key to apt
>   wget -q -O - "https://dl-ssl.google.com/linux/linux_signing_key.pub" | sudo apt-key add -
> 
>   # Add Google to the apt-get source list
>   echo 'deb http://dl.google.com/linux/chrome/deb/ stable main' >> /etc/apt/sources.list
> 
>   # Update app-get
>   apt-get update
> 
>   # Install Java, Chrome, Xvfb, and unzip
>   apt-get -y install openjdk-7-jre google-chrome-stable xvfb unzip
> 
>   # Download and copy the ChromeDriver to /usr/local/bin
>   cd /tmp
>   wget "https://chromedriver.googlecode.com/files/chromedriver_linux64_2.2.zip"
>   wget "https://selenium.googlecode.com/files/selenium-server-standalone-2.35.0.jar"
>   unzip chromedriver_linux64_2.2.zip
>   mv chromedriver /usr/local/bin
>   mv selenium-server-standalone-2.35.0.jar /usr/local/bin
> 
>   # So that running `vagrant provision` doesn't redownload everything
>   touch /.installed
> fi
> 
> # Start Xvfb, Chrome, and Selenium in the background
> export DISPLAY=:10
> cd /vagrant
> 
> echo "Starting Xvfb ..."
> Xvfb :10 -screen 0 1366x768x24 -ac &
> 
> echo "Starting Google Chrome ..."
> google-chrome --remote-debugging-port=9222 &
> 
> echo "Starting Selenium ..."
> cd /usr/local/bin
> nohup java -jar ./selenium-server-standalone-2.35.0.jar &
> {% endhighlight %}
> 
> * * * * *
> 
> 3. Run “vagrant up”
> ---------------------
> 
> On your command line and in the directory where you created the
> `VagrantFile`, run the following command:
> 
> {% highlight bash %}
> vagrant up
> {% endhighlight %}
> 
> This will kick off downloading and installing all the pieces neccessary.
> It should look like this:
> 
> ![vagrant up](http://www.chrisle.me/wp-content/uploads/2013/08/Screen-Shot-2013-08-18-at-12.35.54-PM.png)
> 
> * * * * *
> 
> 4. Make sure it’s running
> ---------------------------
> 
> You can check to see if everything is working by going to
> `http://localhost:4444/wd/hub`.
> 
> The `VagrantFile` has been configured to forward port 4444 on your
> localhost. This allows you UI control of the Selenium browser. This page
> shows you all the sessions that you’re running in your virtual machine.
> If you see this page, everything is OK.
> 
> ![WebDriver UI](http://www.chrisle.me/wp-content/uploads/2013/08/Screen-Shot-2013-08-18-at-12.32.08-PM.png)
> 
> * * * * *
> 
> 5. Install the selenium-webdriver
> -----------------------------------
> 
> In order to write NodeJS scripts that talk to Chrome you will need the
> Selenium-Webdriver for NodeJS.
> 
> On your command line, install `selenium-webdriver` with the following
> command. This will install the modules needed for interacting with
> Selenium.
> 
> {% highlight bash %}
> npm install selenium-webdriver
> {% endhighlight %}
> 
> * * * * *
> 
> 6. Write your first Selenium script
> -------------------------------------
> 
> This first script will go to Google’s homepage, type in a query, then
> print out the HTML.
> 
> {% highlight bash %}
> var webdriver = require('selenium-webdriver');
> 
> var keyword = "chris le twitter";
> 
> var driver = new webdriver.Builder().
>    usingServer('http://localhost:4444/wd/hub').
>    withCapabilities(webdriver.Capabilities.chrome()).
>    build();
> 
> driver.get('http://www.google.com');
> driver.findElement(webdriver.By.name('q')).sendKeys(keyword);
> driver.findElement(webdriver.By.name('btnG')).click();
> driver.wait(function() {
>   return driver.getTitle().then(function(title) {
>     driver.getPageSource().then(function(html) {
>       console.log(html);
>       return true;
>     });
>   });
> }, 1000);
> 
> driver.quit();
> {% endhighlight %}
> 
> * * * * *
> 
> 7. Run your test
> ------------------
> 
> Run your test with node. You should see the HTML that was rendered by
> the Chrome browser.
> 
> ![HTML from NodeJs](http://www.chrisle.me/wp-content/uploads/2013/08/Screen-Shot-2013-08-18-at-1.07.55-PM.png)
> 
> * * * * *
> 
> Use Cases
> =========
> 
> So now that you have this up and running what can you use it for?
> 
> **Running your automated test suites**: This is great for doing
> integration testing against Chrome browsers and probably responsive
> websites.
> 
> **Testing your Chrome Extentions**: Debugging Chrome Extensions can be a
> bit of a pain. This could be your Asprin.
> 
> **Taking many screenshots**: If you want to make screenshots of many
> pages at once.
> 
> **Scraping stubborn websites**: I wasn’t able to scrape a website using
> PhantomJS because it fired JSONP requests long after the onLoad() event
> fired. Simply waiting for the event loop to empty itself wansn’t enough.
> A combination of debugging with a real browser and Selenium, I was more
> successful at getting the DOM after the scripts had run.
