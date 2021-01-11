import { Button } from './Button.js';

export class ModernButton extends Button {
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
