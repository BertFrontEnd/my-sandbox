class List02 extends List01 {
  constructor(item, ccsClass) {
    super(item);
    this.ccsClass = ccsClass;
  }

  render() {
    let ul = super.render();
    console.log(ul);

    ul.classList.add(this.ccsClass);

    return;
  }
}

const list02 = new List02(['one', 'two', 'three', 'four'], 'list');

list02.render();
