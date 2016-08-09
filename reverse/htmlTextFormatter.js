const HeaderFormatter = require('./headerFormatter');
const ParagraphFormatter = require('./paragraphFormatter')

class HTMLTextFormatter {
  constructor(html) {
    this.html = html
  }

  applySizing() {
    let splitHTML = this.html.filter(Boolean)
    return splitHTML.reduce(this.formatLine, '')
  }

  formatLine(result, line, index, html) {
    let hf = new HeaderFormatter
    let pf = new ParagraphFormatter

    if (hf.headerValidation(line)) {
      result += hf.formatHeader(line);
    }
    else if (pf.paragraphValidation(line) && pf.paragraphValidation(html[index + 1])) {
      result += pf.formatParagraph(line) + '\n'
    }
    else if (pf.paragraphValidation(line)) {
      result += pf.formatParagraph(line);
    }
    else {
      result += (line + '\n');
    }
    return result;
  }

}
module.exports = HTMLTextFormatter;
