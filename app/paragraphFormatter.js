class ParagraphFormatter {
  constructor(message) {
    this.message = message
  }

  applyPTags() {
    let lineBreak = this.message.indexOf('\n\n');
    if (lineBreak === -1) {
      let newMessage = this.message.replace('\n', ' ');
      return `<p>${newMessage}</p>`;
    }
    else {
      let message = this.message.split('\n').join(' ').split('  ');
      let newMessage = '';
      for (var i of message) {
        newMessage += `<p>${i}</p>\n`;
      }
      newMessage = newMessage.slice(0, -1);
      return newMessage;
    }
  }
}
module.exports = ParagraphFormatter;
