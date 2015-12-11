(typeof module !== 'undefined' ? module : window)[typeof module !== 'undefined' ? 'exports' : 'Emity'] = function () {
  this.events = [];

  this.on = function (name, callback, context, once) {
    var events = this.events[name] || [];

    events.push({ev: name, cb: callback, ctx: context, once: once || false});

    this.events[name] = events;

    return this;
  };

  this.once = function (name, callback, context) {
    return this.on(name, callback, context, true);
  };

  this.off = function (name, cb) {
    if ((arguments.length == 0) || (name === '*')) {
      this.events = [];
      return this;
    }

    if (!cb) {
      this.events[name] = [];
      return this;
    }

    for (var i = 0 ; i < this.events[name].length ; i++) {
      if (cb === this.events[name][i].cb) {
        this.events[name].splice(i, 1);
      }
    }

    return this;
  };

  this.emit = function () {
    var self   = this;
    var args   = Array.apply([], arguments);
    var events = this.events[args.shift()] || [];
    var i      = 0, j;

    if (events.length <= 0) { return this }

    for(;j = events[i++];) {
      j.cb.apply(j.ctx, args);

      if (j.hasOwnProperty('once')) {
        if (j.once) {
          self.off(j.ev);
        }
      }
    }

    return this;
  };
};
