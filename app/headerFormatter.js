class HeaderFormatter {
  constructor(message){
    this.message = message
  }

  applyHTags(){
    const splitMarkdown = this.message.split(' ');
    let headerSize = splitMarkdown.splice(0, 1).toString().length;
    let message = splitMarkdown.join(' ');
    return `<h${headerSize}>${message}</h${headerSize}>`
  }
}
module.exports = HeaderFormatter;
