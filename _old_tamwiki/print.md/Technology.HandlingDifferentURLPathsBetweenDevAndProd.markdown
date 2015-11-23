<div id="wikitext">

<span id="excerpt"></span> I recently had a situation where I had some
problems working with the navigation paths on my development system that
was going into a different directory structure on my production machine.
In this case, the development path was a few layers deep while the
production path was at the DocumentRoot. <span id="excerptend"></span>

The way I resolved the issue was to apply a couple of things:

1.  create a virtual host that pointed to the development path
2.  update the `/etc/hosts` file to include names for the virtual host

<div class="vspace">

</div>

Setting up your server for using virtual hosts
----------------------------------------------

Most apache installations come out of the box ready to support virtual
hosts. They just need to be configured.

<span class="notebox"> If you are going to set up your apache server for
virtual hosting, one thing to keep in mind is that you must use a
virtual host for the default host; the information in the `httpd.conf`
file for ServerName and DocumentRoot is ignored.</span>

<div class="vspace">

</div>

### Set up vhosts subdirectory

If there isn't already, create a subdirectory to hold the various
virtual host configuration files. This makes it easier to manage
multiple virtual hosts without cluttering up the main `httpd.conf` file:

<div class="vspace">

</div>

              mkdir /etc/apache2/vhosts

is one example of how to do this.

<div class="vspace">

</div>

### Modify the `httpd.conf` file

You will need to modify the `httpd.conf` file to use virtual hosts by
adding the following lines:

<div class="vspace">

</div>

             ## Virtual hosts
             NameVirtualHost *:80

             <VirtualHost *:80>
             ServerName localhost
             DocumentRoot "/Library/WebServer/Documents"
             </VirtualHost>

             Include /etc/apache2/vhosts/*.conf

The last line will include all file from the vhosts directory that end
in `.conf`.

<span class="notebox"> on OS X, the path to `/etc` is really
`/private/etc`.</span>

<div class="vspace">

</div>

### Create the configuration file for your new vhost:

             cd /etc/apache2/vhosts
             touch mysite.conf

<div class="vspace">

</div>

### Configure the `mysite` vhost:

             <VirtualHost *:80>
             ServerName mysite
             DocumentRoot "/path/to/mysite/files"
             </VirtualHost>

<div class="vspace">

</div>

### Make changes to `/etc/hosts`

In order for you to browse to the vhost to let your machine know where
to find the vhost. Add the following line to `/etc/hosts`:

<div class="vspace">

</div>

             127.0.0.1    mysite

<span class="notebox"> Note that the separator between the IP address
and the hostname is a tab character.</span>

<div class="vspace">

</div>

### Restart the server and you should be good to go!

            apachectl restart

You can now access the virtual host via the URL:
`http://mysite/`{.escaped}.

<div class="vspace">

</div>

</div>
