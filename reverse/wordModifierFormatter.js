const LineModifierFormatter = require('./lineModifierFormatter');

class WordModifierFormatter {
  constructor(html) {
    this.html = html
  }

  modifyText() {
    let markdown = this.html.reduce(this.applyDocumentFormatting, '')
    return markdown.split('\n');
  }

  applyDocumentFormatting(result, line) {
    let lmf = new LineModifierFormatter(line.split(' '))
    result += lmf.formatLines();
    return result + '\n'
  }
}
module.exports = WordModifierFormatter
