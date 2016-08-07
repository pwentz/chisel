'use strict'
const expect = require('chai').expect;
const Chisel = require('../app/chisel');

describe('it does unordered lists', function() {
  describe('it can handle converting bullets to unordered lists', function() {
    xit('knows how to convert unordered lists', function() {
      let chisel = new Chisel('My favorite cuisines are:\n* Sushi\n* Barbeque\n * Mexican');
      let expectedResult = '<p>My favorite cuisines are:</p>\n<ul>\n\t<li>Sushi</li>\n\t<li>Barbeque</li>\n\t<li>Mexican</li>\n</ul>';

      expect(chisel.convertMarkdown()).to.equal(expectedResult);
    });
  });
});
