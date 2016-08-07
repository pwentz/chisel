'use strict'
const expect = require('chai').expect;
const Chisel = require('../app/chisel');

describe('it does text formatting', function(){
  describe("it returns <strong> tags in place of text wrapped in '**'", function(){
    it('can convert text in header', function(){
      let chisel = new Chisel('## I **love** fish tacos');
      let expectedResult = '<h2>I <strong>love</strong> fish tacos</h2>';

      expect(chisel.convertMarkdown()).to.equal(expectedResult);
    });

    it('can convert text in paragraphs', function(){
      let chisel = new Chisel('I **love** fish tacos');
      let expectedResult = '<p>I <strong>love</strong> fish tacos</p>';

      expect(chisel.convertMarkdown()).to.equal(expectedResult);
    });
  });

  describe("it returns <em> tags in place of text wrapped in '*'", function(){
    it('can convert text in header', function(){
      let chisel = new Chisel('## I love *fish* tacos.');
      let expectedResult = '<h2>I love <em>fish</em> tacos.</h2>';

      expect(chisel.convertMarkdown()).to.equal(expectedResult);
    });

    it('can convert text in paragraphs', function(){
      let chisel = new Chisel('I *love fish* tacos.');
      let expectedResult = '<p>I <em>love fish</em> tacos.</p>';

      expect(chisel.convertMarkdown()).to.equal(expectedResult);
    });
  });

  describe("it handles '**' text nested inside '*' text", function(){
    it("can handle nested tags inside headers", function(){
      let chisel = new Chisel('### I *just **absolutely** love* fish tacos.');
      let expectedResult = '<h3>I <em>just <strong>absolutely</strong> love</em> fish tacos.</h3>';

      expect(chisel.convertMarkdown()).to.equal(expectedResult);
    });

    it('can handle nested tags inside paragraphs', function(){
      let chisel = new Chisel('I *just **absolutely freakin** love* fish tacos.');
      let expectedResult = '<p>I <em>just <strong>absolutely freakin</strong> love</em> fish tacos.</p>';

      expect(chisel.convertMarkdown()).to.equal(expectedResult);
    });
  });

  describe("it handles '*' text nested inside '**' text", function(){
    it('can handle nested tags inside headers', function(){
      let chisel = new Chisel('## I **just *absolutely freakin* love** fish tacos.');
      let expectedResult = '<h2>I <strong>just <em>absolutely freakin</em> love</strong> fish tacos.</h2>';

      expect(chisel.convertMarkdown()).to.equal(expectedResult);
    });

    it('can handle nested tags inside paragraphs', function(){
      let chisel = new Chisel('I **just *absolutely freakin* love fish** tacos.');
      let expectedResult = '<p>I <strong>just <em>absolutely freakin</em> love fish</strong> tacos.</p>';

      expect(chisel.convertMarkdown()).to.equal(expectedResult);
    });
  });

  describe("it handles text formatting when place after last word", function(){
    it("can convert '*' when place after last word", function(){
      let chisel = new Chisel('I just *love fish tacos.*');
      let expectedResult = '<p>I just <em>love fish tacos.</em></p>';

      expect(chisel.convertMarkdown()).to.equal(expectedResult);
    });

    it("can convert '**' when placed after last word", function(){
      let chisel = new Chisel('I **love fish tacos.**');
      let expectedResult = '<p>I <strong>love fish tacos.</strong></p>';
      
      expect(chisel.convertMarkdown()).to.equal(expectedResult);
    });
  });
});
