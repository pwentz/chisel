class MasterListFormatter {
  constructor(html) {
    this.html = html.split('\n');
    this.listLocations = []
    this.ordered = []
    this.unordered = []
  }

  fetchLists() {
    this.html.forEach((line, index) => {
      if (this.openingTag(line) === '<ol>') {
        this.listLocations.push(index)
        this.html.slice(index).reduce(this.compileOrderedList, this.ordered);
      }
      else if (this.openingTag(line) === '<ul>') {
        this.listLocations.push(index);
        this.html.slice(index).reduce(this.compileUnorderedList, this.unordered);
      }
    });
  }

  constructLists() {
    this.fetchLists()
    if (this.ordered.length === 0 && this.unordered.length === 0) {
      return this.html.join('\n');
    }
    else if (this.unordered.length === 0) {
      return this.integrateLists(this.constructOrdered());
    }
    else if (this.ordered.length === 0){
      return this.integrateLists(this.constructUnordered());
    }
  }

  integrateLists(listItems) {
    let newDoc = this.html
    let lists = listItems.split('1.').filter(Boolean);
    this.listLocations.forEach((location) => {
      let list = '1.' + lists.shift()
      let listLength = list.split('\n').length + 1;
      newDoc.splice(location, listLength, list)
    })
    return newDoc;
  }

  openingTag(line) {
    return line.slice(0, 4);
  }

  compileUnorderedList(result, line) {
    if (line.slice(0, 5) !== '</ul>') {
      result.push(line);
    }
    return result;
  }

  compileOrderedList(result, line) {
    if (line.slice(0, 5) !== '</ol>') {
      result.push(line);
    }
    return result;
  }

  construct(lists) {
    let markdown = ''
    lists.forEach((item, index) => {
      if (item.slice(0, 4) === '<li>') {
        markdown += `* ${this.removeTags(item)}\n`;
      }
    });
    return markdown;
  }

  constructOrdered() {
    let markdown = ''
    this.ordered.forEach((elt, index) => {
      if (elt.slice(0, 4) === '<li>') {
        markdown += `${index}. ${this.removeTags(elt)}\n`;
      }
    })
    return markdown;
  }

  removeTags(listItem) {
    let rawItem = listItem.substring(4, listItem.length - 5);
    return rawItem;
  }
}
module.exports = MasterListFormatter;
