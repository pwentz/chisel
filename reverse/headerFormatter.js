class HeaderFormatter {
  constructor(line) {
    this.line = line
  }

  formatHeader() {
    let headerSize = this.headerDisplay(this.line[2]);
    return headerSize + ' ' + this.header() + '\n\n'
  }

  headerDisplay(size) {
    let pounds = ''
    for (var i = 0; i < size; i++) {
      pounds += '#'
    }
    return pounds;
  }

  header() {
    return this.line.substring(4, this.line.length - 5)
  }
}

module.exports = HeaderFormatter;
