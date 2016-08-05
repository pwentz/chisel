// chisel.js
//
class Chisel {
  constructor(markdown){
    this.markdown = markdown;
  }

  headerConvert(){
    const splitMarkdown = this.markdown.split(' ');

    if (splitMarkdown[0][0] !== '#'){
      let headerSize = 0;
      let message = this.markdown;
      return this.headerReturn(headerSize, message);
    }
    else {
      let headerSize = splitMarkdown.splice(0, 1).toString().length;
      let message = splitMarkdown.join(' ');
      return this.headerReturn(headerSize, message);
    }
  };

  headerReturn(headerSize, message){ 
    switch (headerSize) {
      case 1:
        return `<h1>${message}</h1>`;
      case 2:
        return `<h2>${message}</h2>`;
      case 3:
        return `<h3>${message}</h3>`;
      case 4:
        return `<h4>${message}</h4>`;
      case 5:
        return `<h5>${message}</h5>`;
      case 6:
        return `<h6>${message}</h6>`;
      default:
        return `<p>${message}</p>`;
    }
  };
}

module.exports = Chisel
