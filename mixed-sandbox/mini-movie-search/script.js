const API_KEY = '6c84d890-b897-4b80-9394-9ab3c0cbb500';
const API_URL_POPULAR =
  'https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1';
const API_URL_SEARCH =
  'https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=';

getMovies(API_URL_POPULAR);

async function getMovies(url) {
  const resp = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      'X-API-KEY': API_KEY,
    },
  });

  const respData = await resp.json();

  showMovies(respData);
}

function getClassByRate(vote) {
  if (vote >= 7) return 'green';
  if (vote > 5) return 'orange';
  if (vote <= 5) return 'red';
}

function nameMovie(el) {
  if (el.nameEn === null || el.nameEn === undefined) {
    return el.nameRu;
  } else if (el.nameRu === null || el.nameRu === undefined) {
    return el.nameEn;
  } else {
    return `${el.nameRu} / ${el.nameEn}`;
  }
}

function getRating(el) {
  if (
    el.rating === null ||
    el.rating === undefined ||
    el.rating[el.rating.length - 1] === '%'
  ) {
    return '';
  } else {
    return `<div class="movie__average movie__average--${getClassByRate(
      el.rating,
    )}">${el.rating}</div>
        `;
  }
}

function showMovies(data) {
  const moviesEl = document.querySelector('.movies');
  moviesEl.innerHTML = '';
  data.films.forEach((movie) => {
    const movieEl = document.createElement('div');
    movieEl.classList.add('movie');
    movieEl.innerHTML = `
    <div class="movie__cover-inner">
      <img
        src="${movie.posterUrlPreview}"
        class="movie__cover"
        alt="${movie.nameEn}"
        />
      <div class="movie__cover--darkened"></div>
    </div>
    <div class="movie__info">
      <div class="movie__title">${nameMovie(movie)}</div>
      <div class="movie__category">${movie.genres.map(
        (genre) => ` ${genre.genre}`,
      )}</div>
    ${getRating(movie)}
    </div>
    `;

    moviesEl.appendChild(movieEl);
  });
}

const form = document.querySelector('form');
const search = document.querySelector('.header__search');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const apiSearchUrl = `${API_URL_SEARCH}${search.value}`;

  if (search.value) {
    getMovies(apiSearchUrl);
    search.value = '';
  }
});
