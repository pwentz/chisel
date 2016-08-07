class EmFormatter {
  constructor(markdown){
    this.markdown = markdown;
  }

  formatEm() {
    let html = this.markdown.replace(' *', ' <em>').replace('* ', '</em> ');
    return html.trim();
  }
}
module.exports = EmFormatter;
