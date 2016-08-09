const fs = require('fs')
const HTMLParser = require('./htmlParser')

class ReverseChisel {
  constructor() {
    this.html = fs.readFileSync(process.argv[2], 'utf8');
  }

  parseHTML() {
    let parser = new HTMLParser(this.html)
    return parser.parseHTML();
  }

  writeMarkdown() {
    let newFile = process.argv[3];
    fs.writeFileSync(newFile, this.parseHTML(), 'utf8')
    console.log('Your markdown file has been written!')
  }
}

module.exports = ReverseChisel
let rchisel = new ReverseChisel()
console.log(rchisel.writeMarkdown());
