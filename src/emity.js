var Emity = function () {
  this.events = [];

  this.on = function (name, callback, context) {
    var events = this.events[name] || [];

    events.push({ev: name, cb: callback, ctx: context});

    this.events[name] = events;

    return this;
  };
};

module.exports = Emity;
