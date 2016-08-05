'use strict'
var expect = require('chai').expect;
var chisel = require('../app/chisel');

describe('it does headers and paragraphs', function(){

  describe('returns <h> elements when passed #', function(){
    it ('returns wrapped <h1> text when # is before word', function(){

      expect(chisel.headerConvert("# Hello, World!")).to.equal("<h1>Hello, World!</h1>");
    });
  });
});
