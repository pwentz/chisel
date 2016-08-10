class ParagraphHelper {
  constructor(markdown) {
    this.markdown = markdown
  }

  validateLine(line) {
    return line[0] !== '<' && line.slice(1).trim() !== ''
  }

  formatLine(line, index) {
    if (index === 0) {
      return `<p>\n${line}`
    }
    else if (index === this.markdown.length) {
      return `${line}\n</p>\n\n`
    }
    else {
      return this.applyTags(line, index)
    }
  }

  applyTags(line, index) {
    let precedingLine = this.markdown[index - 1].trim();
    let incomingLine = this.markdown[index + 1].trim();
    if (precedingLine === '' && incomingLine === '') {
      return `<p>\n${line}\n</p>\n\n`
    }
    else if (precedingLine === '') {
      return `<p>\n${line}`
    }
    else if (incomingLine === '') {
      return `${line}\n</p>\n`
    }
    else {
      return line;
    }
  }

}
module.exports = ParagraphHelper;
