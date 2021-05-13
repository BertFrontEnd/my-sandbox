/* import { CardsField } from './components/cards-field/cards-field'; */
import { Game } from './components/game/game';
import { ImageCategoryModel } from './models/image-category-model';

export class App {
  /* private readonly rootElement: HTMLElement;

  constructor(element: HTMLElement) {
    this.rootElement = element;
  } */

  /* private readonly cardsField: CardsField; */
  private readonly game: Game;

  constructor(private readonly rootElement: HTMLElement) {
    /* this.cardsField = new CardsField();
    this.rootElement.appendChild(this.cardsField.childElement); */
    this.game = new Game();
    this.rootElement.appendChild(this.game.childElement);
  }

  async start(): Promise<void> {
    const res = await fetch('./images.json');
    const categories: ImageCategoryModel[] = await res.json();
    const jsonCategory = categories[0];
    const images = jsonCategory.images.map((name) => `${jsonCategory.category}/${name}`);
    this.game.newGame(images);
  }
}
