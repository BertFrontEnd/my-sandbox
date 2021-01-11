class Button {
  constructor(width, height, background, value) {
    this.width = width;
    this.height = height;
    this.background = background;
    this.value = value;
  }

  render() {
    const myButton = document.createElement('button');
    myButton.style.width = this.width + 'px';
    myButton.style.height = this.height + 'px';
    myButton.style.background = this.background;
    myButton.innerHTML = this.value;
    const body = document.querySelector('body');
    body.append(myButton);
    return body;
  }
}

class ModernButton extends Button {
  constructor(width, height, background, value, border) {
    super(width, height, background, value);
    this.border = border;
  }

  render() {
    super.render();
    const myButtonWithRadius = document.querySelector('button');
    myButtonWithRadius.style.borderRadius = this.border + 'px';
    return myButtonWithRadius;
  }
}

const button = new ModernButton(100, 40, 'lightgrey', 'Button', 5).render();
