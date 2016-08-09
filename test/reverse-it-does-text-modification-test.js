const expect = require('chai').expect;
const WordModifierFormatter = require('../reverse/wordModifierFormatter');

describe('it can transfer word modification from HTML to MD', function(){
  describe('it can handle <strong> tags around words', function(){
    it('can format strong tags around single words', function(){
      let wmf = new WordModifierFormatter('I <strong>love</strong> fish tacos.')
      let expectedResult = 'I **love** fish tacos.'

      expect(wmf.modifyText()).to.equal(expectedResult);
    })

    it('can format strong tags around multiple words', function(){
      let wmf = new WordModifierFormatter('I <strong>love fish</strong> tacos.')
      let expectedResult = 'I **love fish** tacos.'

      expect(wmf.modifyText()).to.equal(expectedResult);
    });
  })

  describe('it can handle <em> tags around words', function(){
    it('can format em tags around single words', function(){
      let wmf = new WordModifierFormatter('I <em>love</em> fish tacos.')
      let expectedResult = 'I *love* fish tacos.'

      expect(wmf.modifyText()).to.equal(expectedResult);
    })

    it('can format em tags around multiple words', function(){
      let wmf = new WordModifierFormatter('I <em>love fish</em> tacos.')
      let expectedResult = 'I *love fish* tacos.'

      expect(wmf.modifyText()).to.equal(expectedResult);
    })
  })

  describe('it can handle nested modification tags', function(){
    it('can handle <em> tags nested in <strong> tags', function(){
      let wmf = new WordModifierFormatter('I <strong>love <em>fish</em> tacos.</strong>')
      let expectedResult = 'I **love *fish* tacos.**'

      expect(wmf.modifyText()).to.equal(expectedResult);
    })

    it('can handle <em> tags nested in <strong> tags', function(){
      let wmf = new WordModifierFormatter('I <em>love <strong>fish</strong> tacos.</em>')
      let expectedResult = 'I *love **fish** tacos.*'

      expect(wmf.modifyText()).to.equal(expectedResult);
    })
  })

  describe("it ignores text that isn't modified", function(){
    xit('returns text without <strong> or <em> tags', function(){
      let wmf = new WordModifierFormatter('<h3>I love fish tacos.</h3>\n\n<p>They are my new favorite thing</p>')
      let expectedResult = 'I love fish tacos.\n\nThey are my new favorite thing'

      expect(wmf.modifyText()).to.equal(expectedResult);
    })
  })
})
