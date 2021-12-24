import './style.css';
import UI, { displayShows } from './modules/UI.js';

document.addEventListener('DOMContentLoaded', async () => {
  UI.headerLogo();
  await displayShows();
});
