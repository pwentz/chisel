const UnorderedListFormatter = require('./unorderedListFormatter');
const OrderedListFormatter = require('./orderedListFormatter');

class MasterListFormatter {
  constructor(markdown) {
    this.markdown = markdown;
    this.ulf = new UnorderedListFormatter(this.markdown);
    this.olf = new OrderedListFormatter(this.markdown);
  }

  masterListValidation() {
    if (this.ulf.unorderedListValidation() || this.olf.orderedListValidation()) {
      return true;
    }
    else {
      return false;
    }
  }

  constructList() {
    if (this.ulf.unorderedListValidation()) {
      return this.ulf.constructUnorderedList();
    }
    else if (this.olf.orderedListValidation()) {
      return this.olf.constructOrderedList();
    }
  }
}
module.exports = MasterListFormatter
