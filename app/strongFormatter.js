class StrongFormatter {
  constructor(message){
    this.message = message;
    this.strongStart = message.indexOf('**');
    this.strongFinish = message.lastIndexOf('**');
  }

  findAndReplace(){
    if (this.strongStart === -1 || this.strongFinish === -1){
      return this.message;
    }
    else {
      return this.strongReplace();
    };
  }

  strongReplace(){
    return this.message.replace(
      this.message.substring(this.strongStart, this.strongFinish + 2),
      `<strong>${this.message.substring(this.strongStart + 2, this.strongFinish)}</strong>`
    );
  }
}

module.exports = StrongFormatter;
