class HeaderFormatter {
  constructor(markdown){
    this.markdown = markdown;
  }

  formatHeaders(){
    let newDoc = this.markdown
    this.markdown.forEach((line, index) => {
      if (line[0] === '#') {
        let headerSize = line.split(' ')[0].toString().length
        let header = line.substring(headerSize + 1)
        let formattedHeader = `<h${headerSize}>${header}</h${headerSize}>\n\n`
        newDoc.splice(index, 1, formattedHeader)
      }
    })
    return newDoc;
  }

  headerValidation(line) {
    return line[0] === '#'
  }
}
module.exports = HeaderFormatter;
