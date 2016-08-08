const StrongFormatter = require('./strongFormatter');
const EmFormatter = require('./emFormatter');

class WordModifierFormatter {
  constructor(parsedMarkdown) {
    this.markdown = parsedMarkdown;
    this.sf = new StrongFormatter;
    this.ef = new EmFormatter;
  }

  formatWords() {
    let newMarkdown = [];
    for (var l of this.markdown) {
      this.sf.markdown = l;
      this.ef.markdown = this.sf.formatStrong();
      newMarkdown.push(this.ef.formatEm());
    }
    return newMarkdown;
  }

}

module.exports = WordModifierFormatter;
