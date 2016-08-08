'use strict'
let expect = require('chai').expect;
const ParagraphFormatter = require('../app/paragraphFormatter');

describe('it does paragraphs', function(){
  describe("it handles headerless text", function(){
    it ('returns all text not preceded by # wrapped in p tags', function(){
      let pf = new ParagraphFormatter('Hello, World!');
      let expectedResult = '<p>\nHello, World!\n</p>\n'

      expect(pf.applyPTags()).to.equal(expectedResult);
    });
  });

  describe("it can handle line breaks", function(){
    it('returns text seperated by only one line break in the same p tags', function(){
      let pf = new ParagraphFormatter("Hello, World. It really is great to see you!")
      let expectedResult = "<p>\nHello, World. It really is great to see you!\n</p>\n";

      expect(pf.applyPTags()).to.equal(expectedResult);
    })

    xit('returns text separated by two line breaks as separate p tags', function(){
      let pf = new ParagraphFormatter("Hello, World.\nIt really is great to see you!");
      let expectedResult = "<p>\nHello, World.\n</p>\n<p>\nIt really is great to see you!\n</p>\n";

      expect(pf.applyPTags()).to.equal(expectedResult);
    })
  });
});
