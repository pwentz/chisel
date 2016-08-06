class HeaderConverter {
  constructor(markdown) {
    this.markdown = markdown
  }

  convertHeader() {
    const splitMarkdown = this.markdown.split(' ');

    if (splitMarkdown[0][0] !== '#') {
      return `<p>${this.markdown}</p>`
    }
    else {
      let headerSize = splitMarkdown.splice(0, 1).toString().length;
      let message = splitMarkdown.join(' ');
      return `<h${headerSize}>${message}</h${headerSize}>`
    }
  };
}
module.exports = HeaderConverter;
