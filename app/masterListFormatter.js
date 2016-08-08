const UnorderedListFormatter = require('./unorderedListFormatter');
const OrderedListFormatter = require('./orderedListFormatter');

class MasterListFormatter {
  constructor(markdown) {
    this.markdown = markdown;
    this.olf = new OrderedListFormatter;
    this.ulf = new UnorderedListFormatter;
  }

  checkAndConstructList() {
    if (this.findOrderedList() !== []) {
      this.olf.markdown = this.parseForOrderedList();
      return this.integrateOrderedList();
    }
    else if (this.parseForUnorderedList() !== []) {
      this.ulf.markdown = this.parseForUnorderedList();
      return this.integrateUnorderedList();
    }
    else {
      return this.markdown;
    }
  }

  integrateOrderedList() {
    let newMarkdown = this.markdown;
    let orderedList = this.olf.formatOrderedList();
    let listIndex = this.findOrderedList();
    newMarkdown.splice(listIndex[0], listIndex.length, orderedList);
    return newMarkdown;
  }

  integrateUnorderedList() {
    let newMarkdown = this.markdown;
    let unorderedList = this.olf.formatUnorderedList();
    let listIndex = this.findUnorderedList();
    newMarkdown.splice(listIndex[0], listIndex.length, unorderedList);
    return newMarkdown;
  }

  parseForOrderedList() {
    let list = []
    for (var i of this.markdown) {
      if (isNaN(i[0]) === false && i[1] + i[2] === '. ') {
        list.push(`${i}\n`);
      }
    }
    return list;
  }

  findOrderedList() {
    let listItems = []
    for (var i of this.markdown) {
      if (isNaN(i[0]) === false && (i[1] + i[2]) === '. ') {
        listItems.push(this.markdown.indexOf(i))
      }
    }
    return listItems;
  }

  parseForUnorderedList() {
    let list = []
    for (var j in this.markdown) {
      if (j[0] + j[1] === '* ') {
        list.push(`${j}\n`)
      }
    }
    return list;
  }

  findUnorderedList() {
    let listItems = []
    for (var j in this.markdown) {
      if (j[0] + j[1] === '* ') {
        listItems.push(this.markdown.indexOf(j));
      }
    }
    return list;
  }
}
module.exports = MasterListFormatter
