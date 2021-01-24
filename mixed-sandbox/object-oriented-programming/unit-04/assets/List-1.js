class List01 {
  constructor(item) {
    this.item = item;
  }

  render() {
    const list = document.createElement('ul');
    document.body.append(list);

    const listItem = this.item.map((el) => {
      let element = document.createElement('li');
      element.textContent = el;
      list.append(element);

      console.log(element);
    });

    return list;
  }
}

const list01 = new List01(['one', 'two', 'three', 'four']);

list01.render();
