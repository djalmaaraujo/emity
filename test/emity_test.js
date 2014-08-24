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
});
