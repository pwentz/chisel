const UnorderedListFormatter = require('./unorderedListFormatter');
const OrderedListFormatter = require('./orderedListFormatter');

class MasterListFormatter {
  constructor(markdown) {
    this.markdown = markdown;
    this.olf = new OrderedListFormatter(markdown);
    this.ulf = new UnorderedListFormatter(markdown);
    this.html = []
  }

  checkAndConstructList(item, index) {
    return this.olf.formatOrderedList();
  }
}
module.exports = MasterListFormatter
