const StrongFormatter = require('./strongFormatter');
const EmFormatter = require('./emFormatter');

class TextFormatter {
  constructor(parsedMarkdown) {
    this.markdown = parsedMarkdown;
    this.sf = new StrongFormatter(this.markdown);
    this.ef = new EmFormatter;
  }

  formatText() {
    this.ef.markdown = this.sf.formatStrong();
    return this.ef.formatEm();
  }

}

module.exports = TextFormatter;
