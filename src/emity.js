(typeof module !== 'undefined' ? module : window)[typeof module !== 'undefined' ? 'exports' : 'Emity'] = function () {
  this.events = [];

  this.on = function (name, callback, context) {
    var events = this.events[name] || [];

    events.push({ev: name, cb: callback, ctx: context});

    this.events[name] = events;

    return this;
  };

  this.off = function (type, cb) {
    if ((arguments.length == 0) || (type === '*')) {
      this.events = [];
      return this;
    }

    if (!cb) {
      this.events[type] = [];
      return this;
    }

    for (var i = 0 ; i < this.events[type].length ; i++) {
      if (cb === this.events[type][i].cb) {
        this.events[type].splice(i, 1);
      }
    }

    return this;
  };

  this.emit = function () {
    var args   = Array.apply([], arguments);
    var events = this.events[args.shift()] || [];
    var i      = 0, j;

    for(;j = events[i++];) {
      j.cb.apply(j.ctx, args);
    }

    return this;
  };
};
