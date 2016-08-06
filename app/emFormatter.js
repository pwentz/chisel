class EmFormatter {
  constructer(message){
    this.message = message;
    this.emStart = message.indexOf('*');
    this.emFinish = message.lastIndexOf('*');
  }

  findAndReplace(){
    if (this.emStart === -1 || this.emFinish === -1) {
      return this.message;
    }
    else {
      return this.emReplace();
    }
  };

  emReplace(){
    return this.message.replace(
      this.message.substring(this.emStart, this.emFinish - 1),
      `<em>${this.message.substring(this.emStart + 1, this.emFinish)}</em>`
    );
  }
};

module.exports = EmFormatter;
