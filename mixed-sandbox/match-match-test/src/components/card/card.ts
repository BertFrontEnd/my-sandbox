import { BaseComponent } from '../base-component';
import './card.scss';

const FLIP_CLASS = 'flipped';

export class Card extends BaseComponent {
  isFlipped = false;

  private flip(isFront: boolean): Promise<void> {
    return new Promise((resolve) => {
      this.childElement.classList.toggle(FLIP_CLASS, isFront);
      this.childElement.addEventListener('transitionend', () => resolve(), {
        once: true,
      });
    });
  }

  constructor(readonly image: string) {
    super('div', ['card-container']);
    this.childElement.innerHTML = `
      <div class="card">
        <div class="card__front" style="background-image: url('./images/${image}"></div>
        <div class="card__back"></div>
      </div>
    `;
  }

  flipToBack(): Promise<void> {
    this.isFlipped = true;
    return this.flip(true);
  }

  flipToFront(): Promise<void> {
    this.isFlipped = false;
    return this.flip(false);
  }
}
