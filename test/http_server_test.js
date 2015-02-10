'use strict';

require('../http_server');
var chai = require('chai');
var chaihttp = require('chai-http');

chai.use(chaihttp);

var expect = chai.expect;

describe('http server', function() {
  var server = 'localhost:3000';
  var dateFormat = /\w{3}\s\w{3}\s\d{2}\s\d{4}\s\d{2}:{1}\d{2}:{1}\d{2}\s\w{3}-{1}\d{4}\s\(\w{3}\)/;

  it('should respond with server time', function(done) {
    chai.request(server)
      .get('/time')
      .end(function(err, res) {
        expect(err).to.eql(null);
        expect(res).to.have.status(200);
        expect(res.text).to.match(dateFormat);
        done();
      });
  });

  it('should respond with a greeting', function(done) {
    chai.request(server)
      .get('/greet/Rory')
      .end(function(err, res) {
        expect(err).to.eql(null);
        expect(res).to.have.status(200);
        expect(res.text).to.eql('(*Voice of Dracula) Greeting Rory. ' +
                                'Enter, of your own free will.\n');
        done();
      });
  });

  it('should not know this route', function(done) {
    chai.request(server)
      .get('/bad/request')
      .end(function(err, res) {
        expect(err).to.eql(null);
        expect(res).to.have.status(200);
        expect(res.text).to.eql("I don't know what to do with that request\n");
        done();
      });
  });
});
