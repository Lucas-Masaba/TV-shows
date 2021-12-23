import fetchData from './APIhandler.js';
import tvm from './tvm_api.png';

const logo = document.querySelector('.logo');
const displayListOfShows = document.querySelector('.display-list-of-shows');
const showCounter = document.querySelector('.show-counter');

const popUp = document.querySelector('.pop-up');
const commentPopUp = document.querySelector('.comment');
const showsContainer = document.querySelector('.shows-container');

const headerLogo = () => {
  const myIcon = new Image();
  myIcon.src = tvm;
  return logo.append(myIcon);
};

const openPopUpWindow = () => {
  const selector = '.comment-btn';
  document.addEventListener('click', async (e) => {
    e.preventDefault();
    const showData = await fetchData.fetchTVAPI();
    const targetId = e.target.id;
    const commentData = await fetchData.fetchInvolvementAPIcomments(targetId);
    const el = e.target;
    if (!el.matches(selector)) {
      return;
    }
    showsContainer.classList.add('hide');
    popUp.classList.remove('hide');
    commentPopUp.classList.remove('hide');
    const selectedShow = showData.filter(
      (data) => data.id === Number(targetId),
    )[0];

    popUp.innerHTML = `<div class="display-show">
      <button type="button" data-close-button class="close-button">&times;</button>
         <div>  
         <img src="${selectedShow.image.medium}" alt="">
           <p>${selectedShow.name}</p>
         </div>
          <div>
            <p>Language: ${selectedShow.language}</p>
            <p>${selectedShow.premiered}</p>
          </div>
        <div>
          <p>Runtime: ${selectedShow.runtime}</p>
          <p>Rating: ${selectedShow.rating.average}</p>
          <h3>Comments</h3>
          
          ${commentData
    .map(
      (data) => `<span>${data.creation_date} </span><span>${data.username}: </span><span>${data.comment}</span><br>`,
    ).join('')
}
          
          <form action="/">
          
          <input id="${targetId}" class="name_input" type="text" placeholder="Your name" name="username">
          <input id="${targetId}" class="insight_input" type="text" placeholder="Your insights" name="insights">
          <p class="button_p"><button class="submit_button" id="${targetId}" type="button">Comment</button></p>
        </form>
        </div>`;

    const inputName = document.querySelector('.name_input');
    const inputInsights = document.querySelector('.insight_input');

    (function Comments() {
      const selector3 = '.submit_button';
      document.addEventListener('click', async (e) => {
        e.preventDefault;
        const el = e.target;
        if (!el.matches(selector3)) {
          return;
        }
        await fetchData.submitComment(
          inputInsights.value,
          el.id,
          inputName.value,
        );
        inputName.value = '';
        inputInsights.value = '';
        displayShows();
      });
    }());
  });
};

const closePopUp = () => {
  const selector2 = '.close-button';

  document.addEventListener('click', async (e) => {
    const el = e.target;
    if (!el.matches(selector2)) {
      return;
    }
    showsContainer.classList.remove('hide');
    popUp.classList.add('hide');
    commentPopUp.classList.add('hide');
  });
};

const showCount = async () => {
  const numberOfShows = await fetchData.fetchTVAPI();
  showCounter.innerHTML = `Shows(${numberOfShows.length})`;
  return numberOfShows.length;
};

export const displayShows = async () => {
  const showData = await fetchData.fetchTVAPI();
  const involveData = await fetchData.fetchInvolvementAPI();

  const values = showData
    .map(
      (result) => `<div class="display-show">
    <img src="${result.image.medium}" alt="">
    <p>${result.name} <a id=${
  result.id
} class="like-heart" href="#">&#9825;</a></p>
    <p>${
  involveData.filter(
    (like) => parseInt(like.item_id, 10) === parseInt(result.id, 10),
  )[0].likes
} likes</p>
    <button id=${result.id} class="comment-btn">Comments</button>
    </div>`,
    )
    .join('');

  displayListOfShows.innerHTML = values;
  openPopUpWindow();
  closePopUp();
  showCount();
};

(function Likes() {
  const selector = '.like-heart';
  document.addEventListener('click', async (e) => {
    const el = e.target;
    if (!el.matches(selector)) {
      return;
    }
    await fetchData.submitLike(el.id);
    displayShows();
  });
}());

export default { headerLogo };
