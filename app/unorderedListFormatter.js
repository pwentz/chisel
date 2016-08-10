class UnorderedListFormatter {
  constructor(markdown) {
    this.listLocations = []
    this.markdown = markdown
  }

  formatUnorderedList() {
    let list = '';
    for (var l of this.markdown) {
      list += `<li>${l.trim()}</li>\n`;
    }
    return `<ul>\n${list}</ul>\n`;
  }

  listValidation(line) {
    return (line[0] + line[1] === '* ')
  }
}
module.exports = UnorderedListFormatter;
