'use strict';

var app = require('../../../../app');
var should = require('chai').should();
var request = require('supertest');

describe('Hello World View', function() {
    it('should return a 200', function(done) {
        request(app)
            .get(app.namedRoutes.build('hello_world'))
            .expect(200)
            .end(function(err, res) {
                if (err) return done(err);

                done();
            });
    });
});
