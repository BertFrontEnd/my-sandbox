import './style.scss';
import { App } from './app';

window.addEventListener('DOMContentLoaded', () => {
  const appElement = document.getElementById('app');
  if (!appElement) throw Error('App rot element not found');
  // eslint-disable-next-line no-new
  new App(appElement).start();
});
