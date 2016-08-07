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

  describe("it can handle line breaks", function(){
    it('returns text seperated by only one line break in the same p tags', function(){
      let chisel = new Chisel("Hello, World.\nIt really is great to see you!")
      let expectedResult = "<p>Hello, World. It really is great to see you!</p>";

      expect(chisel.convertMarkdown()).to.equal(expectedResult);
    })

    it('returns text separated by two line breaks as separate p tags', function(){
      let chisel = new Chisel("Hello, World.\n\nIt really is great to see you!")
      let expectedResult = "<p>Hello, World.</p>\n<p>It really is great to see you!</p>";

      expect(chisel.convertMarkdown()).to.equal(expectedResult);
    })
  });
});
