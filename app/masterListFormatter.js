const UnorderedListFormatter = require('./unorderedListFormatter');

class MasterListFormatter {
  constructor(markdown) {
    this.markdown = markdown;
    this.ulf = new UnorderedListFormatter(this.markdown);
  }

  masterListValidation() {
    if (this.ulf.unorderedListValidation()) {
      return true;
    }
    else {
      return false;
    }
  }

  constructList() {
    return this.ulf.constructUnorderedList();
  }
}
module.exports = MasterListFormatter
