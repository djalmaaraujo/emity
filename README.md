[![Build Status](https://travis-ci.org/djalmaaraujo/emity.svg?branch=master)](https://travis-ci.org/djalmaaraujo/emity)

# Emity
A simple event system library. Supports Browser or Node environments.

# Installation
```bash
npm install emity
```

```bash
bower install emity
```

# Usage
```javascript
var Emity = require('emity'); // For node

var emity   = new Emity();
var context = {};

## On
emity.on('something', function () {
  // do something
}, context);


## Emit
emity.emit('something'); // performs do something

emity.off('something');

emity.emit('something'); // nothing happens

## Off
emity.off('*'); // remove all events
emity.off(); // remove all events

## Once
emity.once('happens_once', function () {
  // do something
});

emity.emit('happens_once'); // will perform something
emity.emit('happens_once'); // nothing happens
```

## Contribution & Setup
* git clone ```git@github.com:djalmaaraujo/emity.git```
* npm install
* Run the tests: npm test
* Watch for file changes: npm run watch

## License

[MIT License](http://djalmaarajo.mit-license.org/) © Djalma Araújo

---------------------------
[cc company](http://nossomos.cc) - Code Consultants and Open Source Coding
