import { delay } from '../../shared/delay';
import { BaseComponent } from '../base-component';
import { Card } from '../card/card';
import { CardsField } from '../cards-field/cards-field';
import './game.scss';

const FLIP_DELAY = 1000;

export class Game extends BaseComponent {
  private readonly cardsField: CardsField;

  private activeCard?: Card;

  private isAnimation = false;

  constructor() {
    super('div', ['app-field']);

    this.cardsField = new CardsField();
    this.childElement.appendChild(this.cardsField.childElement);
  }

  newGame(images: string[]): void {
    this.cardsField.clear();

    const cards: Card[] = images.concat(images).map((url: string) => new Card(url)).sort(() => Math.random() - 0.5);

    cards.forEach((card) => {
      card.childElement.addEventListener('click', () => this.cardHandler(card));
    });

    this.cardsField.addCards(cards);
  }

  private async cardHandler(card: Card): Promise<void> {
    if (this.isAnimation) return;
    if (!card.isFlipped) return;

    this.isAnimation = true;

    await card.flipToFront();

    if (!this.activeCard) {
      this.activeCard = card;
      this.isAnimation = false;
      return;
    }

    if (this.activeCard.image !== card.image) {
      await delay(FLIP_DELAY);
      await Promise.all([this.activeCard.flipToBack(), card.flipToBack()]);
    }

    this.activeCard = undefined;
    this.isAnimation = false;
  }
}
