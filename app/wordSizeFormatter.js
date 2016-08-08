const ParagraphFormatter = require('./paragraphFormatter');
const HeaderFormatter = require('./headerFormatter');

class WordSizeFormatter {
  constructor(markdown) {
    this.markdown = markdown;
    this.pf = new ParagraphFormatter;
    this.hf = new HeaderFormatter;
  }

  formatSizing() {
    let newMarkdown = [];
    for (var i = 0; i < this.markdown.length; i++) {
      let line = this.markdown[i]
      if (line[0] === "#") {
        newMarkdown.push(this.applyHeader(line));
      }
      else if (this.implementedCode(line) === false) {
        let beforeLine = this.markdown[i - 1]
        let afterLine = this.markdown[i + 1]
        newMarkdown.push(this.applyParagraph(line, beforeLine, afterLine));
      }
      else {
        newMarkdown.push(line);
      }
    }
    return newMarkdown;
  }

  implementedCode(line) {
    let tags = line.slice(0, 4);
    return tags === '<ul>' || tags === '<ol>'
  }

  applyHeader(line) {
    this.hf.markdown = line;
    return this.hf.applyHTags();
  }

  applyParagraph(line, beforeLine, afterLine) {
    this.pf.markdown = line;
    this.pf.afterLine = afterLine;
    this.pf.beforeLine = beforeLine;
    return this.pf.formatPTags();
  }

}
module.exports = WordSizeFormatter;
