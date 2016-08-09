const expect = require('chai').expect;
const HTMLTextFormatter = require('../reverse/htmlTextFormatter');

describe('it can handle paragraphs', function(){
  describe('it can convert anything with paragraph tags to plain text', function(){
    it('can handle simple p tags', function(){
      let htmltf = new HTMLTextFormatter('<p>I love fish tacos.</p>')
      let expectedResult = 'I love fish tacos.\n'

      expect(htmltf.applySizing()).to.equal(expectedResult)
    })

    it('can convert multiple p tags to separated text', function(){
      let htmltf = new HTMLTextFormatter('<p>I love fish tacos.</p>\n<p>So I told the guy I love fish tacos!</p>')
      let expectedResult = 'I love fish tacos.\n\nSo I told the guy I love fish tacos!\n'

      expect(htmltf.applySizing()).to.equal(expectedResult)
    })

    it('can ignore everything else', function(){
      let htmltf = new HTMLTextFormatter('<ol>\n<li>Tacos</li>\n</ol>\n')
      let expectedResult = '<ol>\n<li>Tacos</li>\n</ol>\n'

      expect(htmltf.applySizing()).to.equal(expectedResult);
    })
  })
})
