class UnorderedListFormatter {
  constructor(markdown) {
    this.markdown = markdown;
  }

  formatUnorderedList() {
    let list = '';
    for (var l of this.markdown) {
      list += `<li>${l.trim()}</li>\n`;
    }
    return `<ul>\n${list}</ul>\n`;
  }
}
module.exports = UnorderedListFormatter;
