import fetchData from './APIhandler.js';
import tvm from './tvm_api.png';

const logo = document.querySelector('.logo');
const displayListOfShows = document.querySelector('.display-list-of-shows');

const popUp = document.querySelector('.pop-up');
const showsContainer = document.querySelector('.shows-container');

const headerLogo = () => {
  const myIcon = new Image();
  myIcon.src = tvm;
  return logo.append(myIcon);
};

export const displayShows = async () => {
  const showData = await fetchData.fetchTVAPI();
  const involveData = await fetchData.fetchInvolvementAPI();

  const values = showData
    .map(
      (result) => `<div class="display-show">
    <img src="${result.image.medium}" alt="">
    <p>${result.name}</p>
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
};

export const openPopUpWindow = () => {
  const selector = '.comment-btn';
  document.addEventListener('click', async (e) => {
    const showData = await fetchData.fetchTVAPI();
    const el = e.target;
    if (!el.matches(selector)) {
      return;
    }
    showsContainer.classList.add('hide');
    popUp.classList.remove('hide');
    const selectedShow = showData.filter((data) => data.id === Number(e.target.id))[0];
    popUp.innerHTML = `<div class="display-show">
    <button type="button" data-close-button class="close-button">&times;</button>
         <div>  
         <img src="${selectedShow.image.medium}" alt="">
           <p>${selectedShow.name}</p>
         </div>
           <div>
             <p>${selectedShow.language}</p>
             <p>${selectedShow.premiered}</p>
           </div>
           <di>
           <p>${selectedShow.runtime}</p>
           <p>${selectedShow.rating.average}</p>
selectedShow       </div>`;
  });
};

export const closePopUp = () => {
  const selector2 = '.close-button';

  document.addEventListener('click', async (e) => {
    const el = e.target;
    if (!el.matches(selector2)) {
      return;
    }
    showsContainer.classList.remove('hide');
    popUp.classList.add('hide');
  });
};

export default { headerLogo };