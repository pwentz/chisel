// chisel.js
//
'use strict'
const HeaderConverter = require('./headerConverter');
const TextFormatter = require('./textFormatter');

class Chisel {
  constructor(markdown){
    this.hc = new HeaderConverter(markdown);
    this.tf = new TextFormatter(this.hc.convertHeader());
  }

  convertMarkdown() {
    return this.tf.formatText();
  };

}

module.exports = Chisel
