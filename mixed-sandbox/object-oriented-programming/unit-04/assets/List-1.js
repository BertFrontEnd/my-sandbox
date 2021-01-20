class List {
  constructor(item) {
    this.item = item;
  }

  render() {
    const list = document.createElement('ul');
    list.textContent = 'list';
    console.log(list);
    return;
  }
}

const list = new List();

list.render();
