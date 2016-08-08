class OrderedListFormatter {
  constructor(markdown) {
    this.markdown = markdown;
    this.firstItem = markdown.indexOf('\n1. ');
  }

  orderedListValidation() {
    if (this.firstItem === -1) {
      return false;
    }
    else {
      return true;
    }
  }

  constructOrderedList() {
    if (this.orderedListValidation()) {
      let extractedList = this.markdown.slice(this.firstItem);
      return this.formatOrderedList(extractedList);
    }
  }

  formatOrderedList(message) {
    let listItems = message.split('\n').slice(1)
    let list = ''
    for (var g of listItems) {
      list += `<li>${this.formatListItem(g)}</li>\n`;
    }
    return `<ol>\n${list}</ol>\n`;
  }

  formatListItem(listItem) {
    return listItem.split(' ').slice(1).join(' ').trim();
  }
}
module.exports = OrderedListFormatter;
