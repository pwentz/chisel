class UnorderedListFormatter {
  constructor(markdown) {
    this.markdown = markdown;
    this.listItem = this.markdown.indexOf('\n* ');
  }

  unorderedListValidation() {
    if (this.listItem === -1) {
      return false;
    }
    else {
      return true;
    }
  }

  constructUnorderedList() {
    if (this.unorderedListValidation()) {
      let extractedList = this.markdown.slice(this.listItem);
      return this.formatUnorderedList(extractedList);
    }
  }

  formatUnorderedList(message) {
    let listItems = message.split('\n* ').slice(1);
    let list = '';
    for (var l of listItems) {
      list += `<li>${l.trim()}</li>\n`;
    }
    return `<ul>\n${list}</ul>\n`;
  }
}
module.exports = UnorderedListFormatter;
