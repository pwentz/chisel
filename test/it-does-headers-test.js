'use strict'
const expect = require('chai').expect;
const Chisel = require('../app/chisel');

describe('it does headers', function(){

  describe('returns <h> elements when passed #', function(){
    it ('returns wrapped <h1> text when # is before word', function(){
      let chisel = new Chisel('# Hello, World!')

      expect(chisel.convertMarkdown()).to.equal("<h1>Hello, World!</h1>");
    });

    it ('returns wrapped <h2> elements when passed ##', function(){
      let chisel = new Chisel('## Hello, World!')

      expect(chisel.convertMarkdown()).to.equal("<h2>Hello, World!</h2>");
    });

    it ('returns wrapped <h3> elements when passed ###', function(){
      let chisel = new Chisel('### Hello, World!')

      expect(chisel.convertMarkdown()).to.equal("<h3>Hello, World!</h3>");
    });

    it ('returns wrapped <h4> elements when passed ####', function(){
      let chisel = new Chisel('#### Hello, World!')

      expect(chisel.convertMarkdown()).to.equal("<h4>Hello, World!</h4>");
    });

    it ('returns wrapped <h5> elements when passed #####', function(){
      let chisel = new Chisel('##### Hello, World!')

      expect(chisel.convertMarkdown()).to.equal("<h5>Hello, World!</h5>");
    });

    it ('returns wrapped <h6> elements when passed ######', function(){
      let chisel = new Chisel('###### Hello, World!')

      expect(chisel.convertMarkdown()).to.equal("<h6>Hello, World!</h6>");
    });
  });
});
