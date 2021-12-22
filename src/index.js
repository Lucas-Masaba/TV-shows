import './style.css';
import UI, { displayShows, openPopUpWindow, closePopUp } from './modules/UI.js';

document.addEventListener('DOMContentLoaded', async () => {
  UI.headerLogo();
  displayShows();
  openPopUpWindow();
  closePopUp();
});
