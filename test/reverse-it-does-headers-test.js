const expect = require('chai').expect;
const HTMLTextFormatter = require('../reverse/htmlTextFormatter');

describe('it can handle headers and paragraphs', function(){
  describe('it can convert different sizes of headers', function(){
    it('can convert h1 headers', function(){
      let htmltf = new HTMLTextFormatter('<h1>I love tacos</h1>\n\n');
      let expectedResult = '# I love tacos\n\n'

      expect(htmltf.applySizing()).to.equal(expectedResult);
    })

    it('can convert h2 headers', function(){
      let htmltf = new HTMLTextFormatter('<h2>I love tacos</h2>\n\n');
      let expectedResult = '## I love tacos\n\n'

      expect(htmltf.applySizing()).to.equal(expectedResult);
    })

    it('can convert h3 headers', function(){
      let htmltf = new HTMLTextFormatter('<h3>I love tacos</h3>\n\n');
      let expectedResult = '### I love tacos\n\n'

      expect(htmltf.applySizing()).to.equal(expectedResult);
    })

    it('can convert h4 headers', function(){
      let htmltf = new HTMLTextFormatter('<h4>I love tacos</h4>\n\n');
      let expectedResult = '#### I love tacos\n\n'

      expect(htmltf.applySizing()).to.equal(expectedResult);
    })

    it('can convert h5 headers', function(){
      let htmltf = new HTMLTextFormatter('<h5>I love tacos</h5>\n\n');
      let expectedResult = '##### I love tacos\n\n'

      expect(htmltf.applySizing()).to.equal(expectedResult);
    })

    it('can convert h6 headers', function(){
      let htmltf = new HTMLTextFormatter('<h6>I love tacos</h6>\n\n');
      let expectedResult = '###### I love tacos\n\n'

      expect(htmltf.applySizing()).to.equal(expectedResult);
    })
  })
})
