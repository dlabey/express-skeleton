'use strict';

var app = require('../../../../../app');
var should = require('chai').should();
var request = require('supertest');

describe('Hello World API', function(done) {
    it('should return a JSON object with the message Hello World', function(done) {
        request(app)
            .get(app.namedRoutes.build('api.hello_world'))
            .expect(200)
            .end(function(err, res) {
                if (err) return done(err);

                res.body.message.should.equal('Hello World');

                done();
            });
    });
});
