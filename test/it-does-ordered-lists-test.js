'use strict'
const expect = require('chai').expect;
const MasterListFormatter = require('../app/masterListFormatter');
const Chisel = require('../app/chisel');

describe('it does unordered lists', function() {
  describe('it can handle converting numbered items to ordered lists', function() {
    it('knows how to convert ordered lists', function() {
      let mlf = new MasterListFormatter('\n1. Sushi\n2. Barbeque\n3. Mexican');
      let expectedResult = '<ol>\n<li>Sushi</li>\n<li>Barbeque</li>\n<li>Mexican</li>\n</ol>\n';

      expect(mlf.constructList()).to.equal(expectedResult);
    });

    it("can convert ordered lists with ** items", function(){
      let chisel = new Chisel('\n1. Sushi\n2. **Barbeque**\n3. Mexican');
      let expectedResult = '<ol>\n<li>Sushi</li>\n<li><strong>Barbeque</strong></li>\n<li>Mexican</li>\n</ol>\n';

      expect(chisel.convertMarkdown()).to.equal(expectedResult);
    });

    it("can convert ordered lists with * items", function(){
      let chisel = new Chisel('\n1. Sushi\n2. *Barbeque*\n3. Mexican');
      let expectedResult = '<ol>\n<li>Sushi</li>\n<li><em>Barbeque</em></li>\n<li>Mexican</li>\n</ol>\n';
      
      expect(chisel.convertMarkdown()).to.equal(expectedResult);
    });
  });

