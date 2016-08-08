class HeaderFormatter {
  constructor(markdown){
    this.markdown = markdown;
  }

  applyHTags(){
    const splitMarkdown = this.markdown.split(' ');
    let headerSize = splitMarkdown.splice(0, 1).toString().length;
    let markdown = splitMarkdown.join(' ');
    return `<h${headerSize}>${markdown}</h${headerSize}>\n`
  }
}
module.exports = HeaderFormatter;
