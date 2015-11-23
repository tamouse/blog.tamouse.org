---
layout: post
title: "Using Packer and Vagrant to Build Virtual Machines"
date: 2015-01-28 00:07
categories: ["swaac"]
tags: ["vagrant", "packer", "development", "dev-env", "devops", "codeship"]
source: http://blog.codeship.com/packer-vagrant-tutorial/
---

The great [codeship.com](http://www.codeship.com)'s
[Florian Motlik](http://blog.codeship.com/author/florianmotlik/)
writes a superb tutorial on building virtual machines with
[Vagrant](http://vagrantup.com) and
[Packer](http://www.packer.io). Being able to swiftly build virtual
machines is something I find essential for development, test, staging,
and deployment.

> 
> Sharing a common development environment with everyone on your team is
> important. It is really hard though to keep the same dependencies,
> database versions and other systems in sync between different machines.
> 
> [Vagrant](http://vagrantup.com) is a great tool that helps with this and
> manage the lifecycle of a virtual machine. As nice as Vagrant is,
> provisioning machines with it has always been a pain. A couple of months
> ago [Mitchell Hashimoto](http://twitter.com/mitchellh), the creator of
> Vagrant, launched Packer.
> 
> Packer lets you build Virtual Machine Images for different providers
> from one json file. You can use the same file and commands to build an
> image on AWS, Digital Ocean or for virtualbox and vagrant. This makes it
> possible to use exactly the same system for development which you then
> create in production.
> 
> In this blog post we will show you how you can use Packer to build your
> vagrant machines. In a follow up post we will focus on how we use Packer
> for building all of our Continuous Deployment Infrastructure.
> 
> Prerequisites for building Vagrant Machines
> -------------------------------------------
> 
> You need [Virtualbox](https://www.virtualbox.org/) and
> [Packer](http://www.packer.io/) installed. Virtualbox provides packages
> for different Operating systems. Packer is even easier, just download
> the right zip for your system and unzip it into your PATH
> 
> Building your Virtual Machine with Packer
> -----------------------------------------
> 
> We’ve collected all the files necessary to build a Vagrant Machine with
> Packer in our [Packer
> Example](https://github.com/flomotlik/packer-example) repository.
> 
> Packer uses builders, provisioners and post-processors as the main
> configuraition attributes. A builder can for example be virtualbox or
> AWS. A provisioner can be used to run different scripts. Post-processors
> can be run after the machine image is done. For example converting a
> Virtualbox image into a suitable image for vagrant is done in a
> post-processor.
> 
> Here is the main packer.json file. You can see the builder, provisioner
> and post-processor defined:

{% highlight javascript linenos %}
{
  "provisioners": [
    {
      "type": "shell",
      "scripts": [
        "scripts/root_setup.sh"
      ],
      "override": {
        "virtualbox": {
          "execute_command": "echo 'vagrant' | sudo -S sh '{{ .Path }}'"
        }
      }
    },
    {
      "type": "shell",
      "scripts": [
        "scripts/setup.sh"
      ]
    }
  ],
  "builders": [
    {
      "type": "virtualbox",
      "boot_command": [
        "<esc><esc><enter><wait>",
        "/install/vmlinuz noapic preseed/url=http://{{ .HTTPIP }}:{{ .HTTPPort }}/preseed.cfg <wait>",
        "debian-installer=en_US auto locale=en_US kbd-chooser/method=us <wait>",
        "hostname={{ .Name }} <wait>",
        "fb=false debconf/frontend=noninteractive <wait>",
        "keyboard-configuration/modelcode=SKIP keyboard-configuration/layout=USA keyboard-configuration/variant=USA console-setup/ask_detect=false <wait>",
        "initrd=/install/initrd.gz -- <enter><wait>"
      ],
      "boot_wait": "4s",
      "guest_os_type": "Ubuntu_64",
      "http_directory": "http",
      "iso_checksum": "4d1a8b720cdd14b76ed9410c63a00d0e",
      "iso_checksum_type": "md5",
      "iso_url": "http://releases.ubuntu.com/13.10/ubuntu-13.10-server-amd64.iso",
      "ssh_username": "vagrant",
      "ssh_password": "vagrant",
      "ssh_port": 22,
      "ssh_wait_timeout": "10000s",
      "shutdown_command": "echo 'shutdown -P now' > shutdown.sh; echo 'vagrant'|sudo -S sh 'shutdown.sh'",
      "guest_additions_path": "VBoxGuestAdditions_{{.Version}}.iso",
      "headless": false,
      "virtualbox_version_file": ".vbox_version",
      "vboxmanage": [
        [
          "modifyvm",
          "{{.Name}}",
          "--memory",
          "2048"
        ],
        [
          "modifyvm",
          "{{.Name}}",
          "--cpus",
          "4"
        ]
      ]
    }
  ],
  "post-processors": ["vagrant"]
}
{% endhighlight %}


> It builds for virtualbox and then exports it into vagrant. The http
> folder contains a preseed.cfg file that is necessary to set up Ubuntu.
> 
> In the scripts folder you can find a root\_setup.sh and setup.sh
> scripts.
> 
> The root\_setup.sh script sets up necessary packages and parameters for
> Vagrant:

{% highlight bash linenos %}
#!/bin/bash

set -e

# Updating and Upgrading dependencies
sudo apt-get update -y -qq > /dev/null
sudo apt-get upgrade -y -qq > /dev/null

# Install necessary libraries for guest additions and Vagrant NFS Share
sudo apt-get -y -q install linux-headers-$(uname -r) build-essential dkms nfs-common

# Install necessary dependencies
sudo apt-get -y -q install curl wget git tmux firefox xvfb vim

# Setup sudo to allow no-password sudo for "admin"
groupadd -r admin
usermod -a -G admin vagrant
cp /etc/sudoers /etc/sudoers.orig
sed -i -e '/Defaults\s\+env_reset/a Defaults\texempt_group=admin' /etc/sudoers
sed -i -e 's/%admin ALL=(ALL) ALL/%admin ALL=NOPASSWD:ALL/g' /etc/sudoers

#Install Redis
sudo apt-get -y -q install libjemalloc1
wget -q http://d7jrzzvab3wte.cloudfront.net/checkbot/deb/redis-server_2.6.13-1_amd64.deb
sha1sum redis-server_2.6.13-1_amd64.deb | grep 'ab50cf037fd63e160946f8946b6d318cdf11800d'
dpkg -i redis-server_2.6.13-1_amd64.deb
rm redis-server_2.6.13-1_amd64.deb

# Install required libraries for RVM and Ruby
sudo apt-get -y -q install gawk libreadline6-dev zlib1g-dev libssl-dev libyaml-dev libsqlite3-dev sqlite3 autoconf libgdbm-dev libncurses5-dev automake libtool bison pkg-config libffi-dev libxml2-dev libxslt-dev libxml2


# Install Postgresql
sudo apt-get -y -q install postgresql libpq-dev postgresql-contrib

# Set Password to test for user postgres
sudo -u postgres psql -c "ALTER USER postgres WITH PASSWORD 'test';"
{% endhighlight %}

> The setup.sh script install different dependencies like ruby or redis to
> set up the virtual machine exactly how you need it:

{% highlight bash linenos %}
#!/bin/bash

set -e

echo "Instaling for rof"

# Installing vagrant keys
mkdir ~/.ssh
chmod 700 ~/.ssh
cd ~/.ssh
wget --no-check-certificate 'https://raw.github.com/mitchellh/vagrant/master/keys/vagrant.pub' -O authorized_keys
chmod 600 ~/.ssh/authorized_keys
chown -R vagrant ~/.ssh

# Node.js Setup
wget --retry-connrefused -q -O - https://raw.github.com/creationix/nvm/master/install.sh | sh
source ~/.nvm/nvm.sh

nvm install 0.10.18
nvm alias default 0.10.18

echo "source ~/.nvm/nvm.sh" >> ~/.bash_profile

# RVM Install
wget --retry-connrefused -q -O - https://get.rvm.io | bash -s stable
source /home/vagrant/.rvm/scripts/rvm

rvm autolibs read-fail

rvm install 2.0.0-p195

gem install bundler zeus
{% endhighlight %}

> You don’t have any limits what you can run in your virtual machine
> through these scripts.
> 
> Building the Machine
> --------------------
> 
> We’ve added a create\_box script that makes it easy for you to get
> started

{% highlight bash linenos %}
#!/bin/bash

set -e

#export PACKER_LOG=1
rm packer_virtualbox_virtualbox.box || true
packer build -only=virtualbox packer.json
vagrant box remove vagrant_machine || true
vagrant box add vagrant_machine packer/packer_virtualbox_virtualbox.box
{% endhighlight %}

> You will then see Virtualbox start up and build the machine
> 
> ![Packer
> Virtualbox](http://blog.codeship.io/wp-content/uploads/2013/11/packer-virtualbox.jpg)
> 
> Run the script and it will create the packer machine and import it into
> vagrant. Then all you have to do is run

{% highlight bash linenos %}
vagrant destroy
vagrant up
{% endhighlight %}

> And you have your development environment set up.
> 
> You can now get into the machine with `vagrant ssh` and start coding.
> 
> Conclusions
> -----------
> 
> Vagrant is an incredibly powerful tool and together with Packer it is
> easy to build development environments for your whole team.
> 
> But this is only the beginning. Packer can go much further than just
> providing your development environment. We are currently implementing
> Packer as the tool to build all of our test infrastructure servers. This
> new set of tools is great for [Immutable
> Infrastructure](http://blog.codeship.com/immutable-deployments/) and
> [Continuous Deployment](https://www.codeship.com) so you can build more
> stable, secure and easy to change infrastructure than ever before.
> 
> Additional Links
> ----------------
> 
> -   [Packer Documentation](http://www.packer.io/docs)
> -   [Vagrant Documentation](http://docs.vagrantup.com/v2/)
> -   [Our blog post about Immutable
>     Infrastructure](http://blog.codeship.com/immutable-deployments/)
> 
> #### Posts you may also find interesting
> 
> -   [Using Packer and Ansible to Build Immutable
>     Infrastructure](http://blog.codeship.com/packer-ansible/ "Permanent Link to Using Packer and Ansible to Build Immutable Infrastructure")
> -   [About Immutable
>     Infrastructure](http://blog.codeship.com/immutable-deployments/ "Permanent Link to About Immutable Infrastructure")
> 
