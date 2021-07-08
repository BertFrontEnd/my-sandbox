import { BaseComponent } from '../base-component';
import { Card } from '../card/card';
import './cards-field.scss';

const SHOW_TIME = 5;

export class CardsField extends BaseComponent {
  private cards: Card[] = [];

  constructor() {
    super('div', ['cards-field']);
  }

  clear():void {
    this.cards = [];
    this.childElement.innerHTML = '';
  }

  addCards(cards: Card[]): void {
    this.cards = cards;
    this.cards.forEach((card) => this.childElement.appendChild(card.childElement));

    setTimeout(() => {
      this.cards.forEach((card) => card.flipToBack());
    }, SHOW_TIME * 1000);
  }
}
