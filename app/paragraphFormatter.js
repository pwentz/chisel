const ParagraphHelper = require('./paragraphHelper');

class ParagraphFormatter {
  constructor() {
    this.markdown
  }

  formatParagraphs() {
    let newDoc = this.markdown
    let ph = new ParagraphHelper(newDoc)
    this.markdown.forEach((line, index, md) => {
      if (ph.validateLine(line)) {
        let formattedLine = ph.formatLine(line, index);
        newDoc.splice(index, 1, formattedLine)
      }
    })
    return newDoc
  }

}
module.exports = ParagraphFormatter;
