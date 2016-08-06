const StrongFormatter = require('./strongFormatter');
const EmFormatter = require('./emFormatter');

class TextFormatter {
  constructor(parsedMarkdown){
    this.markdown = parsedMarkdown;
    this.sf = new StrongFormatter(this.markdown);
    this.ef = new EmFormatter(this.sf.findAndReplace());
  }

  formatText(){
    return this.sf.findAndReplace();
  }
}

module.exports = TextFormatter;
