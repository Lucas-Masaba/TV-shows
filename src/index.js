import './style.css';
import UI, { displayShows } from './modules/UI.js';

document.addEventListener('DOMContentLoaded', async (e) => {
  e.preventDefault();
  UI.headerLogo();
  displayShows();
});
