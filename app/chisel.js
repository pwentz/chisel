// chisel.js
//
'use strict'
const LineFormatter = require('./lineFormatter');
const TextFormatter = require('./textFormatter');
const MasterListFormatter = require('./masterListFormatter');
const fs = require('fs');

class Chisel {
  constructor(markdown) {
    this.markdown = markdown;
    this.body = this.extractBody(markdown);
    this.head = this.extractHead(markdown);
    this.mlf = new MasterListFormatter(this.body);
    this.tf = new TextFormatter();
    /*
    this.lf = new LineFormatter(this.convergeMessage());
    */
  }

  readFile() {
    return fs.readFileSync(process.argv[2], 'utf8')
  }

  convertMarkdown() {
    if (this.mlf.masterListValidation()) {
      this.tf.markdown = this.mlf.constructList();
    }
    else {
      this.tf.markdown = this.markdown;
    }
    return this.tf.formatText();
  };

  listFormatting() {
    return this.mlf.constructList();
  }

  extractBody(markdown) {
    let message = markdown.split(' ')
    if (markdown[0] === '#') {
      message.splice(0, 1);
      let body = message.join(' ');
      return body;
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
let chisel = new Chisel('ds')
chisel.markdown = chisel.readFile();
