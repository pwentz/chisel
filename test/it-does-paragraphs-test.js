'use strict'
let expect = require('chai').expect;
const Chisel = require('../app/chisel');

describe('it does paragraphs', function(){
  describe("it handles headerless text", function(){
    it ('returns all text not preceded by # wrapped in p tags', function(){
      let chisel = new Chisel('Hello, World!')

      expect(chisel.convertMarkdown()).to.equal('<p>Hello, World!</p>');
    });
  });
});
