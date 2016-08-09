const HeaderFormatter = require('./headerFormatter');
class HTMLTextFormatter {
  constructor(html) {
    this.html = html.trim()
  }

  applySizing() {
    if (this.headerValidation) {
      let hf = new HeaderFormatter(this.html)
      return hf.formatHeader();
    }
  }

  headerValidation() {
    this.html[1] === 'h' 
  }
}
module.exports = HTMLTextFormatter;
