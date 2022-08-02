import './css/styles.css';
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;

const refs = {
  input: document.querySelector('#search-box'),
  list: document.querySelector('.country-list'),
};
const inputRef = document.querySelector('#search-box');
const listRef = document.querySelector('.country-list');

refs.input.addEventListener('input', debounce(inputHandler, DEBOUNCE_DELAY));

function inputHandler(e) {
  fetch(
    `https://restcountries.com/v3.1/name//${e.target.value}?fields=name,capital,population,flags,languages`
  )
    .then(response => response.json())
    .then(rJson => {
      const markup = createListMarkup(rJson);
      render(markup);
    })
    .catch(error => console.log(error));
}

function createListMarkup(arrayObj) {
  console.log(arrayObj);
  return arrayObj
    .map(
      item =>
        `<li class="country-item">
          <img class="country-img" src="${item.flags.svg}" alt="${item.name.official} flag">
          <p class="country-name">${item.name.official}</p>
        </li>`
    )
    .join('');
}

function render(markup) {
  listRef.insertAdjacentHTML('afterbegin', markup);
}
