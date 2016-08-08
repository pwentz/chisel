const ParagraphFormatter = require('./paragraphFormatter');
const HeaderFormatter = require('./headerFormatter');

class WordSizeFormatter {
  constructor(markdown) {
    this.markdown = markdown;
    this.pf = new ParagraphFormatter;
    this.hf = new HeaderFormatter;
  }

  wordSizingValidation(line) {
    if (line[0] === "<") {
      return false
    }
    else {
      return true;
    }
  }

  formatSizing() {
    let newMarkdown = [];
    for (var i = 0; i < this.markdown.length; i++) {
      if (this.wordSizingValidation(i)) {
        let line = this.markdown[i]
        let beforeLine = this.markdown[i - 1]
        let afterLine = this.markdown[i + 1]
        newMarkdown.push(this.tagFilter(line, beforeLine, afterLine));
      }
      else {
        newMarkdown.push(i);
      }
    }
    return newMarkdown;
  }

  tagFilter(line, beforeLine, afterLine) {
    if (line[0] === "#") {
      this.hf.markdown = line;
      return this.hf.applyHTags();
    }
    else {
      this.pf.markdown = line;
      this.pf.afterLine = afterLine;
      this.pf.beforeLine = beforeLine;
      return this.pf.applyPTags();
    }
  }

}
module.exports = WordSizeFormatter;
