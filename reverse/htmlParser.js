const MasterListFormatter = require('./masterListFormatter');
const HTMLTextFormatter = require('./htmlTextFormatter');
const WordModifierFormatter = require('./wordModifierFormatter');
class HTMLParser {
  constructor(html) {
    this.html = html
    this.mlf = new MasterListFormatter(this.html)
    this.wmf = new WordModifierFormatter
    this.htmltf = new HTMLTextFormatter
  }

  parseHTML() {
    this.wmf.html = this.mlf.constructLists();
    this.htmltf.html = this.wmf.modifyText();
    return this.htmltf.applySizing();
  }
}
module.exports = HTMLParser
