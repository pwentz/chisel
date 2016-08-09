class HeaderFormatter {
  constructor() {
  }

  formatHeader(line) {
    let headerSize = this.headerDisplay(line[2]);
    return headerSize + ' ' + this.header(line) + '\n\n'
  }

  headerDisplay(size) {
    let pounds = ''
    for (var i = 0; i < size; i++) {
      pounds += '#'
    }
    return pounds;
  }

  header(line) {
    return line.substring(4, line.length - 6)
  }

  headerValidation(line) {
    return line[1] === 'h';
  }
}

module.exports = HeaderFormatter;
