class UnorderedListFormatter {
  constructor(semiParsedMarkdown) {
    this.message = semiParsedMarkdown;
  }

  formatList() {
    let contents = this.listItems()
  }

  listItems() {
    return this.message.split('*').join('</li>\n<li>');
  }

  applyListTags() {
    return this.listItems().replace('</li>', '<ul>\n').concat('</li>\n</ul>')
  }
}
module.exports = UnorderedListFormatter;
