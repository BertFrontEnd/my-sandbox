class Component {
  constructor(selector) {
    this.$el = document.querySelector(selector);
  }

  hide() {
    this.$el.style.display = 'none';
  }

  show() {
    this.$el.style.display = 'block';
  }
}

class Box extends Component {
  constructor(options) {
    super(options.selector);
    this.$el.style.width = this.$el.style.height = options.size + 'px';
    this.$el.style.backgroundColor = options.color;
  }
}

const box1 = new Box({
  selector: '#box1',
  size: 100,
  color: 'red',
});

const box2 = new Box({
  selector: '#box2',
  size: 100,
  color: 'blue',
});

class Circle extends Box {
  constructor(options) {
    super(options);

    this.$el.style.borderRadius = '50%';
  }
}

const circle = new Circle({
  selector: '#circle',
  size: 90,
  color: 'green',
});

// Вызов методов класса Component

// box1.hide();
// box1.show();

// box2.hide();
// box2.show();

// circle.hide();
// circle.show();
