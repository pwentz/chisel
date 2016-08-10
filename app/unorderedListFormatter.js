class UnorderedListFormatter {
  constructor(markdown) {
    this.listLocations = []
    this.markdown = markdown
  }

  formatList() {
    let newDoc = this.markdown;
    let listItems = this.markdown.filter(this.listValidation);
    listItems.forEach((item, index) => {
      let listIndex = newDoc.indexOf(line);
      if (newDoc[listIndex + 1][0] != '*') {
        newDoc.splice(listIndex, 1, `<li>${item.slice(3)}</li>\n</ul>\n\n`)
      }
      else if (newDoc[listIndex - 1][0] != '*') {
        newDoc.splice(listIndex, 1, `<ul>\n<li>${item.slice(3)}</li>\n`)
      }
      else {
        newDoc.splice(listIndex, 1, `<li>${item.slice(3)}</li>\n`)
      }
    })
    return newDoc
  }

  listValidation(line) {
    return (line[0] + line[1] === '* ')
  }
}
module.exports = UnorderedListFormatter;
