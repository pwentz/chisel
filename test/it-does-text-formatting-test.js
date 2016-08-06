'use strict'
const expect = require('chai').expect;
const Chisel = require('../app/chisel');

describe('it does text formatting', function(){
  describe("it returns <strong> tags in place of text wrapped in '**'", function(){
    it('can convert text in header', function(){
      let chisel = new Chisel('### I **love** fish tacos');
      let expectedResult = '<h3>I <strong>love</strong> fish tacos</h3>';

      expect(chisel.convertMarkdown()).to.equal(expectedResult);
    });
  });
});
