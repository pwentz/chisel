class ParagraphFormatter {
  constructor(markdown) {
    this.markdown = markdown;
    this.afterLine;
    this.beforeLine;
  }

  applyPTags() {
    if (this.precedingDoubleNewLine()) {
      return this.assignFrontTags();
    }
    else if (this.incomingDoubleNewLine()) {
      return this.assignBackTags();
    }
    else {
      return this.markdown;
    }
  }

  precedingDoubleNewLine() {
    let openingTagDecision = this.beforeLine + this.markdown === this.markdown;
    return openingTagDecision;
  }

  incomingDoubleNewLine() {
    let closingTagDecision = this.markdown + this.afterLine === this.markdown;
    return closingTagDecision;
  }

  assignFrontTags() {
    if ((this.markdown + this.afterLine) === this.markdown) {
      return `<p>${this.markdown}</p>`
    }
    else {
      return `<p>${this.markdown}`
    }
  }

  assignBackTags() {
    return `${this.markdown}</p>`
  }
}
module.exports = ParagraphFormatter;
