import './style.css';
import UI from './UI.js';
import fetchData from './display-list-of-shows.js';

const displayListOfShows = document.querySelector('.display-list-of-shows');

document.addEventListener('DOMContentLoaded', async () => {
  UI.headerLogo();
  const showData = await fetchData.fetchTVAPI();
  const involveData = await fetchData.fetchInvolvementAPI();

  const values = showData.map((result) => `<div class="display-show">
    <img src="${result.image.medium}" alt="">
    <p>${result.name}</p>
    <p>${involveData.filter((like) => parseInt((like.item_id), 10) === parseInt((result.id), 10))[0].likes} likes</p>
    <button class="comment-btn">Comments</button>
    </div>`).join('');

  displayListOfShows.innerHTML = values;

  const commentBtns = document.getElementsByClassName('comment-btn');

  /* eslint-disable no-restricted-syntax */
  for (const btn of commentBtns) {
    btn.addEventListener('click', () => {
      console.log('button is');
    });
  }
});
