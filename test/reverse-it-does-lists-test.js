const expect = require('chai').expect;
const MasterListFormatter = require('../reverse/masterListFormatter');
const fs = require('fs')

describe('reverse side can handle lists', function(){
  describe('it can take HTML lists and return markdown format', function(){
    it('can handle ordered lists', function(){
      let lf = new MasterListFormatter('<ol>\n<li>Sushi</li>\n<li>Barbeque</li>\n<li>Mexican</li>\n</ol>\n');
      let expectedResult = '1. Sushi\n2. Barbeque\n3. Mexican\n'

      expect(lf.constructLists()).to.equal(expectedResult);
    });

    it('can handle unordered lists', function(){
      let lf = new MasterListFormatter('<ul>\n<li>Sushi</li>\n<li>Barbeque</li>\n<li>Mexican</li>\n</ul>\n');
      let expectedResult = '* Sushi\n* Barbeque\n* Mexican\n'

      expect(lf.constructLists()).to.equal(expectedResult);
    });

    it("can ignore everything that isn't a list", function(){
      let lf = new MasterListFormatter('<h3>Sushi</h3>\n\n<p><strong>Barbeque</strong>\nMexican</p>\n');
      let expectedResult = '<h3>Sushi</h3>\n\n<p><strong>Barbeque</strong>\nMexican</p>\n'

      expect(lf.constructLists()).to.equal(expectedResult);
    })
  });
});
