// chisel.js
//
'use strict'
const HeaderConverter = require('./headerConverter');
const TextFormatter = require('./textFormatter');
const MasterListFormatter = require('./masterListFormatter')

class Chisel {
  constructor(markdown) {
    this.body = this.extractBody(markdown);
    this.head = this.extractHead(markdown);
    this.tf = new TextFormatter(this.body);
    this.hc = new HeaderConverter(this.convergeMessage());
    this.mlf = new MasterListFormatter(this.tf.formatText());
  }

  convertMarkdown() {
    return this.hc.convertHeader();
  };

  extractBody(markdown) {
    let message = markdown.split(' ')
    if (markdown[0] === '#') {
      message.splice(0, 1);
      let body = message.join(' ');
      return body.concat(' ');
    }
    else {
      return message.join(' ').concat(' ');
    }
  }

  extractHead(markdown) {
    if (markdown[0] === '#') {
      let head = markdown.split(' ')[0];
      return head;
    }
  }

  convergeMessage() {
    if (this.head) {
      return this.head + ' ' + this.tf.formatText();
    }
    else {
      return this.tf.formatText();
    }
  }

}

module.exports = Chisel
