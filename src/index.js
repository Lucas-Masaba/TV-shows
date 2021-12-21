import './style.css';
import UI from './UI.js';
import fetchData from './display-list-of-shows.js';

UI.headerLogo();

document.addEventListener('DOMContentLoaded', async () => {
  fetchData.fetchDataFromAPI();
});
