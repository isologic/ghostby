# Ghostby

Ghostby is a starter theme for [Ghost](http://ghost.org), integrated with [Gumby](http://gumbyframework.com) v2.6.

## Dependencies:

[Ruby](http://rubyinstaller.org) - v1.9.3  
[Ruby Gems](http://rubygems.org) - v2.2.2  
[Node.js](http://nodejs.org) - v0.10.29  
[NPM](http://npmjs.org) - v1.4.5  

#####Gems:
+ [Compass](http://compass-style.org) v0.12.x	```gem install compass```  
+ [Autoprefixer](https://github.com/ai/autoprefixer)	```gem install autoprefixer-rails```

Autoprefixer is used by default as a Compass extension. If you wish to use the Grunt plugin, or some other prefixing solution (don't, seriously... use Autoprefixer, one way or another), comment out ```require autoprefixer-rails``` in the ```config.rb``` file.

**Important Note:** Gumby v2.6 currently includes [Modular Scale](https://github.com/Team-Sass/modular-scale) v1.0.6 by default. Modular Scale and Sassy Math both work best with Compass 0.12.x (stable) - which uses Sass 3.2.x - so be sure to use these versions for compiling the Sass included here. 

The older versions do not play well with Sass 3.3.x and Compass 1.0.0.alpha.x (beta), which can be a real headache for those of us that enjoy making use of nested [compound selectors](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#parent-selector) offered by Sass v.3.3.x. If you wish to use Modular Scale's current v2.x, read their [upgrading](https://github.com/Team-Sass/modular-scale#upgrading-from-1x-to-2x) instructions. There will also be variables & instructions meant for use with Modular Scale 2.x that I have included in the ```settings.scss``` file located in ```assets/sass/var```.

#####NPM:
+ [Grunt](http://gruntjs.com)	```npm install -g grunt-cli```  
+ [Bower](http://bower.io)		```npm install -g bower```  
+ [Claymate](http://gumbyframework.com/docs/claymate/)		```npm install -g claymate``` **optional**


---  


## Installation

Clone this repository to your Ghost themes folder:

```$ cd ghost/content/themes```  
```$ git clone https://github.com/isologic/ghostby.git```  

#### Bower Components
Install Bower dependencies listed in the ```bower.json``` file. The ```.bowerrc``` file directs all Bower components to a subdirectory in the ```assets``` folder by default.

``` $ bower install ```

Please note: All six of Gumby's [Extension Library](http://gumbyframework.com/docs/extensions/)  are listed in the ```bower.json``` file by default. If you do not wish to use these, or only wish to use select extensions, you can edit them out of the ```bower.json``` file before running the ```bower install``` command.

#### Node Modules
Install Grunt & other Node dependencies listed in the package.json file.

```$ npm install```

Claymate is Gumby's proprietary CLI tool that makes it easier to install the framework and manage its Javascript extensions. Familiarize yourself with it by checking out the [official documentation](http://gumbyframework.com/docs/claymate/).

Claymate is not *required* by the Ghostby theme, but it can help with sorting out Gumby's many Javascript [modules](http://gumbyframework.com/docs/components/) & [extensions](http://gumbyframework.com/docs/extensions/). All of this can be configured in the ```gumby.json``` file in the theme root directory. Using Claymate's ```build``` function, the individual JS components (toggles, modals, tabs, skiplink, etc) can be concatenated with its ```gumby.init.js``` under the "modules" function in the JSON, and minified into ```gumby.min.js```. Gumby's custom tailored JS extensions (fittext, inview, parallax, etc) can also be optimized into it by calling them in the JSON with "addons".

By default, all nine of Gumby's modules and all six of its extensions are defined in the ```gumby.json``` file, so if you want them all, just go ahead and run command:

```$ claymate build```

Make sure you've run ```bower install``` before doing this, or you won't get very far. If you don't need all those modules & extensions, feel free to selectively remove or comment out whichever ones you don't want in the ```gumby.json``` file.

Of course, as I mentioned before, you don't *have* to use Claymate; each of the JS modules can be selectively included in your HTML markup, or you can concatenate & minify them all using Grunt, by simply including them in your Gruntfile instead. Precompiling them with Claymate does help lighten the load on your Grunt tasks, however, and I personally like having all of Gumby's unique JS functions in their own unique JS file, separate of any other JS/jQuery apps & plugins. This keeps things compartmentalized, and reduces the headache of debugging.

### Grunt

Finally there's Grunt, which hopefully should take little explanation for anyone already using Ghost or developing themes for it. To concatenate, uglify, and compile your SASS, run command:

```$ grunt build```

The default Grunt task runs the [Watch](https://www.npmjs.org/package/grunt-contrib-watch) module, which keeps an eye on your CSS, JS, config files and even your Handlebars (.hbs), re-compiling whenever changes are made. LiveReload is enabled by default as well. Just run command:

```$ grunt```

Any questions? I sure as hell hope not. @_@
Happy coding!