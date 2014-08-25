[![Build Status](https://drone.io/github.com/djalmaaraujo/emity/status.png)](https://drone.io/github.com/djalmaaraujo/emity/latest)

# Emity
A simple event system library. Supports Browse or Node environments.

# Installation
```bash
npm install emity
```

# Usage
```javascript
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
