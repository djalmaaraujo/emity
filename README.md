[![Build Status](https://travis-ci.org/djalmaaraujo/emity.svg?branch=master)](https://travis-ci.org/cconsultants/emity)

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

emity.on('something', function () {
  // do something
}, context);

emity.emit('something'); // performs do something

emity.off('something');

emity.emit('something'); // nothing

emity.off('*'); // remove all events
emity.off(); // remove all events

```

## Contribution & Setup
* git clone ```git@github.com:djalmaaraujo/emity.git```
* npm install
* Run the tests: npm test

## License

[MIT License](http://djalmaarajo.mit-license.org/) © Djalma Araújo

---------------------------
[cc company](http://nossomos.cc) - Code Consultants and Open Source Coding
