'use strict'
const expect = require('chai').expect;
const MasterListFormatter = require('../app/masterListFormatter');
const Chisel = require('../app/chisel');

describe('it does unordered lists', function() {
  describe('it can handle converting bullets to unordered lists', function() {
    it('knows how to convert unordered lists', function() {
      let mlf = new MasterListFormatter('\n* Sushi\n* Barbeque\n* Mexican');
      let expectedResult = '<ul>\n<li>Sushi</li>\n<li>Barbeque</li>\n<li>Mexican</li>\n</ul>\n';

      expect(mlf.constructList()).to.equal(expectedResult);
    });

    it("can convert unordered lists with ** items", function(){
      let chisel = new Chisel('\n* Sushi\n* **Barbeque**\n* Mexican');
      let expectedResult = '<ul>\n<li>Sushi</li>\n<li><strong>Barbeque</strong></li>\n<li>Mexican</li>\n</ul>\n';

      expect(chisel.convertMarkdown()).to.equal(expectedResult);
    });

    it("can convert unordered lists with * items", function(){
      let chisel = new Chisel('\n* Sushi\n* *Barbeque*\n* Mexican');
      let expectedResult = '<ul>\n<li>Sushi</li>\n<li><em>Barbeque</em></li>\n<li>Mexican</li>\n</ul>\n';
      
      expect(chisel.convertMarkdown()).to.equal(expectedResult);
    });
  });

  describe('it can handle bullets preceded by headers', function() {
    xit('can convert lists with a paragraph before', function() {
      let chisel = new Chisel('My favorite cuisines are:\n\n* Sushi\n* Barbeque\n* Mexican');
      let expectedResult = '<p>My favorite cuisines are:</p>\n\n<ul>\n<li>Sushi</li>\n<li>Barbque</li>\n<li>Mexican</li>\n</ul>\n';

      expect(chisel.convertMarkdown()).to.equal(expectedResult);
    })
  });
});
