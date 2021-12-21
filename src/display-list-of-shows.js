const displayListOfShows = document.querySelector('.display-list-of-shows');

const fetchDataFromAPI = async () => {
  const response = await fetch(`https://api.tvmaze.com/shows`);
  const getResult = await response.json();

  const resultArray = getResult.slice(0, 6);

  const values = resultArray.map((result) => `<div class="display-show">
                    <img src="${result.image.medium}" alt="">
                    <p>${result.name}</p>
                    <button>Comments</button>
                  </div>`).join('');
  displayListOfShows.innerHTML = values;

};

export default { fetchDataFromAPI };