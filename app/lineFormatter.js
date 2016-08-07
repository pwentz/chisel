const ParagraphFormatter = require('./paragraphFormatter');
const HeaderFormatter = require('./headerFormatter');

class LineFormatter {
  constructor(markdown) {
    this.markdown = markdown
  }

  applyTags() {
    const splitMarkdown = this.markdown.split(' ');
    if (splitMarkdown[0][0] !== '#') {
      let pf = new ParagraphFormatter(this.markdown);
      return pf.applyPTags();
    }
    else {
      let hf = new HeaderFormatter(this.markdown)
      return hf.applyHTags();
    }
  };
}
module.exports = LineFormatter;
