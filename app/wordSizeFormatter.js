const ParagraphFormatter = require('./paragraphFormatter');
const HeaderFormatter = require('./headerFormatter');

class WordSizeFormatter {
  constructor() {
    this.markdown
    this.pf = new ParagraphFormatter
    this.hf = new HeaderFormatter;
  }

  formatSizing() {
    this.hf.markdown = this.markdown
    let headerFormattedHTML = this.hf.formatHeaders()
    this.pf.markdown = headerFormattedHTML
    return this.pf.formatParagraphs();
  }

}
module.exports = WordSizeFormatter;
