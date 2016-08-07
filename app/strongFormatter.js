class StrongFormatter {
  constructor(markdown) {
    this.markdown = markdown;
  };

  formatStrong() {
    let html = this.markdown.replace(' **', ' <strong>').replace('** ', '</strong> ');
    return html;
  }
}
module.exports = StrongFormatter;
