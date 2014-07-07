# Ghostby

Ghostby is a starter theme for [Ghost](http://ghost.org), integrated with [Gumby](http://gumbyframework.com) v2.6.

## Dependencies:

[Ruby](http://rubyinstaller.org) - v1.9.3
[Ruby Gems](http://rubygems.org) - v2.2.2
[Node.js](http://nodejs.org) - v0.10.29
[NPM](http://npmjs.org) - v1.4.5

#####Gems:
+ [Compass](http://compass-style.org) ``` gem install compass
+ [Autoprefixer](https://github.com/ai/autoprefixer) ``` gem install autoprefixer-rails

#####NPM:
+ [Grunt](http://gruntjs.com) ``` npm install -g grunt-cli
+ [Bower](http://bower.io) ``` npm install -g bower
+ [Claymate](http://gumbyframework.com) ``` npm install -g claymate

## Installation
============

Clone this repository to your Ghost themes folder:
``` $ cd ghost/content/themes
``` $ git clone https://github.com/isologic/ghostby.git

Install Bower dependencies listed in the bower.json file. The .bowerrc file directs all Bower components to a subdirectory in the assets folder by default.
``` $ bower install

Install Grunt & other Node dependencies listed in the package.json file.
``` $ npm install

