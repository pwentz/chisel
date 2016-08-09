class OrderedListFormatter {
  constructor(markdown) {
    this.markdown = markdown;
  }

  formatOrderedList() {
    let list = ''
    for (var g of this.markdown) {
      list += `<li>${this.formatListItem(g)}</li>\n`;
    }
    return `<ol>\n${list}</ol>\n\n`;
  }

  formatListItem(listItem) {
    return listItem.split(' ').slice(1).join(' ').trim();
  }
}
module.exports = OrderedListFormatter;
