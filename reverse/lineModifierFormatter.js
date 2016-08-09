class LineModifierFormatter {
  constructor(line) {
    this.splitLine = line;
  }

  formatLines() {
    let formattedLines = this.splitLine.reduce(this.applyLineFormatting, '').trim();
    return formattedLines;
  }

  applyLineFormatting(result, item) {
    let newItem = item.replace('<strong>', '**').replace('</strong>', '**');
    result += `${newItem.replace('<em>', '*').replace('</em>', '*')} `;
    return result
  }
}
module.exports = LineModifierFormatter;
