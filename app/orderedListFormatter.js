class OrderedListFormatter {
  constructor(markdown) {
    this.listLocations = [];
    this.markdown = markdown
  }

  formatList() {
    let newDoc = this.markdown
    let listItems = this.markdown.filter(this.listValidation);
    listItems.forEach((item, index) => {
      let listIndex = newDoc.indexOf(item);
      if (listItems[index + 1] === '1' || item === listItems.slice(-1).toString()) {
        newDoc.splice(listIndex, 1, `<li>${item.slice(3)}</li>\n</ol>\n\n`)
      }
      else if (item[0] === '1') {
        newDoc.splice(listIndex, 1, `<ol>\n<li>${item.slice(3)}</li>\n`)
      }
      else {
        newDoc.splice(listIndex, 1, `<li>${item.slice(3)}</li>\n`)
      }
    })
    return newDoc;
  }

  listValidation(line) {
    return (!isNaN(line[0]) && (line[1] + line[2]) === '. ')
  }
}
module.exports = OrderedListFormatter;
