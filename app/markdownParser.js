const WordSizeFormatter = require('./wordSizeFormatter');
const WordModifierFormatter = require('./wordModifierFormatter');
const MasterListFormatter = require('./masterListFormatter');

class MarkdownParser {
  constructor(markdown) {
    this.markdown = this.markdownFormat(markdown)
    this.mlf = new MasterListFormatter(this.markdown);
    this.wmf = new WordModifierFormatter
    this.wsf = new WordSizeFormatter
  }

  markdownFormat(markdown) {
    let newMarkdown = markdown.split('\n')
    newMarkdown.pop();
    return newMarkdown;
  }

  parseMarkdown() {
    this.wmf.markdown = this.mlf.checkAndConstructList();
    this.wsf.markdown = this.wmf.formatWords();
    let finalHTML = this.wsf.formatSizing().join('');
    return finalHTML;
  }

  filterFormatting(markdownLine) {
    return formattedHTML;
  }
}
module.exports = MarkdownParser;
