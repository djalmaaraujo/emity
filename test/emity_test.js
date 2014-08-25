var expect = require('chai').expect;
var Emity  = require('../src/emity.js');

describe('Emity', function () {
  var m = {};

  beforeEach(function () {
    m.emity = new Emity();
  });

  describe('constructor', function () {
    it('expect to have an Emity instance', function () {
      expect(m.emity).to.be.an.instanceof(Emity);
    });

    it('expect to have an array for the events', function () {
      expect(m.emity.events).to.be.an.instanceof(Array);
    });
  });

  describe('#on', function () {
    it('expect to have an method on', function () {
      expect(m.emity.on).to.exist;
    });

    it('expect to return same instance', function () {
      expect(m.emity.on()).to.be.an.instanceof(Emity);
    });

    describe('With arguments', function () {
      it('expect to add the arguments to events array', function () {
        m.emity.on('name', function () {}, {});

        expect(m.emity.events['name'][0].ev).to.equal('name');
        expect(typeof m.emity.events['name'][0].cb).to.equal('function')
        expect(m.emity.events['name'][0].ctx).to.eql({});
      });

    it('expect to add multiple listeners to the same event', function () {
        m.emity.on('name', function () {}, {});
        m.emity.on('name', function () {}, {});
        m.emity.on('name', function () {}, {});

        expect(m.emity.events['name']).to.have.length.of.at.least(3);
      });
    });
  });

  describe('#off', function () {
    it('expect to have an method off', function () {
      expect(m.emity.off).to.exist;
    });

    it('expect to return same instance', function () {
      expect(m.emity.off()).to.be.an.instanceof(Emity);
    });

    describe('Without arguments', function () {
      it('expect to remove all events if nothing is passed', function () {
        m.emity.on('open', function () {}, {});
        m.emity.on('close', function () {}, {});
        m.emity.off();

        expect(m.emity.events).to.be.eql([]);
      });
    });

    describe('With arguments', function () {
      beforeEach(function () {
        m.commonCallBack = function () {}, {};
        m.emity.on('open', m.commonCallBack);
        m.emity.on('open', function () {
          console.log('################');
        }, {});

        m.emity.on('close', function () {}, {});
      });

      it('expect to remove all events when * is passed', function () {
        m.emity.off('*');

        expect(m.emity.events).to.be.eql([]);
      });

      describe('Without callback', function () {
        it('expect to remove all events for that name', function() {
          m.emity.off('open');

          expect(m.emity.events['open'].length).equal(0);
          expect(m.emity.events['close'].length).equal(1);
        });
      });

      describe('With callback', function () {
        it('expect to remove only the event with the same callback', function () {
          m.emity.off('open', m.commonCallBack);

          expect(m.emity.events['open'].length).equal(1);
          expect(m.emity.events['close'].length).equal(1);
        });
      });
    });
  });

  describe('#emit', function () {
    it('expect to have an method emit', function () {
      expect(m.emity.emit).to.exist;
    });

    it('expect to return same instance', function () {
      expect(m.emity.emit()).to.be.an.instanceof(Emity);
    });

    it('expect to dispatch an event', function () {
      var count = 0;
      m.emity.on('hello', function () {
        count++;
      }, {});

      m.emity.emit('hello');
      expect(count).to.equal(1);
    });

    it('expect to dispatch multiple callbacks', function () {
      var count = 0;
      var count2 = 1;
      m.emity.on('hello', function () {
        count++;
      }, {});

      m.emity.on('hello', function () {
        count2++;
      }, {});

      m.emity.emit('hello');
      expect(count).to.equal(1);
      expect(count2).to.equal(2);
    });
  });
});
