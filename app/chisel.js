// chisel.js
//
'use strict'
const fs = require('fs');
const MarkdownParser = require('./markdownParser');

class Chisel {
  constructor() {
    this.mp = new MarkdownParser(this.readFile());
  }

  readFile() {
    let fileContents = fs.readFileSync(process.argv[2], 'utf8');
    return fileContents;
  }

  writeFile() {
    let fileName = process.argv[3]
    return fs.writeFileSync(fileName, this.mp.parseMarkdown(), 'utf8');
  }

}

module.exports = Chisel
let chisel = new Chisel('ds');
console.log(chisel.mp.parseMarkdown());
/*
chisel.writeFile();
