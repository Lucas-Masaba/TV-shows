import './style.css';
import UI from './UI.js';
import fetchData from './display-list-of-shows.js';

document.addEventListener('DOMContentLoaded', async () => {
  UI.headerLogo();
  fetchData.fetchDataFromAPI();
});
