const UnorderedListFormatter = require('./unorderedListFormatter');

class MasterListFormatter {
  constructor(semiParsedMarkdown) {
    this.message = semiParsedMarkdown;
    this.ulf = new UnorderedListFormatter(this.message);
  }

  constructList() {
    return this.ulf.formatList();
  }
}
module.exports = MasterListFormatter;
