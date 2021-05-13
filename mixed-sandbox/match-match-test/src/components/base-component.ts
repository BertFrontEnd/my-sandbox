export class BaseComponent {
  /* readonly childElement: HTMLElement;

  constructor(element: HTMLElement) {
    this.childElement = element;
  } */

  readonly childElement: HTMLElement;

  constructor(tag: keyof HTMLElementTagNameMap = 'div', styles: string[] = []) {
    this.childElement = document.createElement(tag);
    this.childElement.classList.add(...styles);
  }
}
