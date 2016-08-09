class ParagraphFormatter {
  constructor(html) {
  }

  formatParagraph(line) {
    let textContent = line.substring(3, line.length - 5)
    return textContent + '\n'
  }

  paragraphValidation(line) {
    if (line === undefined) {
      return false;
    }
    else {
      return line[1] === 'p';
    }
  }
}
module.exports = ParagraphFormatter
