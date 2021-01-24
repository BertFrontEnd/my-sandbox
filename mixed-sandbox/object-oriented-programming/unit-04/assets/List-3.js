class List03 extends List01 {
  constructor(item, cssClass) {
    super(item);
    this.cssClass = cssClass;
  }

  render() {
    let ul = super.render();
    ul.classList.add(...this.cssClass);

    console.log(ul);

    return;
  }
}

const list03 = new List03(
  ['one', 'two', 'three', 'four'],
  ['text-center', 'bold', 'text-red'],
);

list03.render();
