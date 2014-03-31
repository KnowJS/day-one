Node.js for Devs - Getting Dangerous Fast!
==========================================

##Day 1 - Foundations

###9am - 10am : Getting Setup (For anyone who isn't yet)
- install node
  - http://nodejs.org/download/
  - (even better) https://github.com/creationix/nvm
- have an editor installed
  - http://www.sublimetext.com/2
- install graphicsmagick
  - for mac: brew install graphicsmagick
  - for ubuntu:
    - $ sudo add-apt-repository ppa:dhor/myway
    - $ sudo apt-get update
    - $ sudo apt-get install graphicsmagick
  - everybody else: http://www.graphicsmagick.org/README.html

###10am - 10:40am : Groking JavaScript
- numbers, arrays, objects (which are just associative arrays), & functions (which are just a special type of object)
- asynchronous - callbacks, closures, events & promises
- variable scope, lifting
- use strict
- Pro Tip: refer to https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript
- Joint Walkthrough Coding:  Create function containing setInterval() to imitate async IO. Use callbacks to control flow of calling. Redo with events. Redo with promises. 
- More Learning: http://nodeschool.io/#functionaljs
  - http://nodeschool.io/#promiseitwonthurt

###10 min break 

###10:50am - 11:30am : Groking Node
- Understanding V8
- Understanding the Event Loop & async IO
- node, repl, files
- The CommonJS Module System
  - require, exports, module.exports
    - http://stackoverflow.com/a/17944431/602377
- node core - quick intro - http & events
- Pro Tip: nvm
- Joint Walkthrough Coding: Writing a simple version of curl, using only the 'http' module
- More Learning: http://nodeschool.io/#learn-you-node

###11:15pm - 12:15pm : NPM and Modules
- npm init, search, info, install (& -g), update, home
  - --save, --save-dev
  - semver
- node\_modules + echo "node_modules" >> .gitignore
- Node.js module-making mantras (small, tested, single purpose, compose-able)
- npm publish
- Pro Tip: npm link
- Pro Tip: how to re-use modules privately using github tarballs
- Problem: Rewrite previous example using 'request'. Be sure you save its dependency in package.json

###12:15pm - 1:15pm : Lunch 
- lunchtime preview: 
  - coffee-script in your applications
  - coffee-script in your modules

###1:15pm - 2:15pm - Common Core Modules
- console, process, events, stream, http, util, child_process
- events - on vs once, 'error' and 'unhandledException'
- streams! just like unix pipes, in code - readable, writeable, duplex, transform
  - flowing mode vs non-flowing mode
  - https://github.com/substack/stream-handbook
- Pro Tip: https://github.com/isaacs/readable-stream
- Problems: 
  - Copy curl implementation and update to use 'readable' event and read() method from stream api
  - Copy previous solution and change to use pipe() to automatically control back pressure. 
- More Learning:  http://nodeschool.io/#stream-adventure
  - http://nodestreams.com/
  - https://github.com/substack/stream-handbook
  - https://www.youtube.com/watch?v=UHZpk4LwCLE#t=1290
  - https://www.youtube.com/watch?v=9llfAByho98
  - https://www.youtube.com/watch?v=IuMHaONGAmc
  - https://github.com/thlorenz/stream-viz

###10 min break

###2:25pm - 4:00pm - Common Modules and Frameworks pt. 1
- _npm home_ express
- _npm home_ connect
- _npm home_ jade
- _npm home_ passport.js
- _npm home_ mongoose
- Pro Tip: Navigating and learning to use modules - View the tests and examples!
  - learn connect and its usage inside express, by navigating express' node_modules
  - Note: Express 4.0 will not include middleware anymore. You'll need to include each in your package.json. This makes express, itself, and your apps more maintainable.
- Problem: Create a simple express app that lets you log in via GitHub. Once logged in, display overly simple page showing GitHub account info. 
  - To complete this, you'll need to create a GitHub application [here](https://github.com/settings/applications/new) and export environment variables for the appropriate values.
    - Or use the following values: GITHUB_CLIENT_ID=e653b683c801e699158d GITHUB_CLIENT_SECRET=04ed16d573dbc9b887a3ceca505937262c4a08fa GITHUB_CLIENT_CALLBACKURL=http://127.0.0.1:3000/auth/github/callback 
    - You can supply these on the command line each time you start your app, or export them in your .bashrc, .bash_profile, .zprofile, etc.
  - For info on github auth, execute _npm home_ passport-github
  - bonus: Save GitHub account into on User document via mongooses
- More Learning: http://nodeschool.io/#expressworks
- https://github.com/mcavage/node-restify

###10 min break

###4:10 - 5:20pm - Common Modules and Frameworks pt. 2
- _npm home_ request
- _npm home_ underscore (or lodash)
- _npm home_ async
- _npm home_ bluebird
- _npm home_ mocha
- _npm home_ armrest* open discussion
- Pro Tip: Favor modules that do one thing well and consider how they will be used (and re-used) in different applications and in other modules
- Pro Tip: _npm home_ vasync
- Problem: Update previous solution to use the 'gm' module to resize an uploaded image and return the result to the user. 
  - bonus 1: Save the uploaded image to the filesystem or a database
  - bonus 2: Return three different resized sizes of the uploaded image. Use bluebird or async to manage flow control
- More Learning: http://nodeschool.io/#asyncyou

###(Stretch) 5:20 - 6:00 - Deployment 
- visionmedia/deploy + nodejitsu/forever
- git + docker based - dokku + supervisor plugins https://github.com/progrium/dokku/wiki/Plugins#community-plugins
- hybrid - _npm home_ node-foreman
  - procfile for local, similar to forever
  - upstart & monit deployed, requires deployment scripts like vm/deploy
- https://www.phusionpassenger.com/
- Pro Tip: Continuous Integration and Continuous Deployment
  - Bamboo or Jenkins or Travis CI for Continuous Integration
  - https://github.com/ryankee/concrete or Capistrano for continuous deployment
  - SAASes: codeship.io, stridercd.com, circleci.com 
- Problem: Deploy to Heroku, or your platform of choice using one of the tools above

###Day End Questions
