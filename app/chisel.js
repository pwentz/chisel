// chisel.js
//
class Chisel {
  constructor(markdown){
    this.markdown = markdown;
  }

  convertMarkdown(){
    const splitMarkdown = this.markdown.split(' ');

    if (splitMarkdown[0][0] !== '#'){
      return `<p>${this.markdown}</p>`
    }
    else {
      let headerSize = splitMarkdown.splice(0, 1).toString().length;
      let message = this.formatText(splitMarkdown.join(' '));
      return `<h${headerSize}>${message}</h${headerSize}>`
    }
  };

  formatText(markdown){
    let strongStart = markdown.indexOf('**');
    let strongFinish = markdown.lastIndexOf('**');
    if (strongStart === -1 || strongFinish === -1){
      return markdown;
    }
    else {
      return this.strongReplace(markdown, strongStart, strongFinish);
    };
  };

  strongReplace(markdown, strongStart, strongFinish){
    return markdown.replace(
      markdown.substring(strongStart, strongFinish + 2),
      `<strong>${markdown.substring(strongStart + 2, strongFinish)}</strong>`
    );
  }
}

module.exports = Chisel
