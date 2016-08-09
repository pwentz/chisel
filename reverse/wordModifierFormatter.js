const LineModifierFormatter = require('./lineModifierFormatter');

class WordModifierFormatter {
  constructor(html) {
    this.html = html.split('\n')
  }

  modifyText() {
    let markdown = this.html.reduce(this.applyDocumentFormatting, '')
    return markdown;
  }

  applyDocumentFormatting(result, line) {
    let lmf = new LineModifierFormatter(line.split(' '))
    result = lmf.formatLines();
    return result 
  }
}
module.exports = WordModifierFormatter
