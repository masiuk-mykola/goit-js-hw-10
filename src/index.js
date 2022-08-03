import './css/styles.css';
import { fetchCountries } from './fetchCountries';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix';

Notify.init({
  position: 'center-top',
});

const DEBOUNCE_DELAY = 300;

const refs = {
  input: document.querySelector('#search-box'),
  list: document.querySelector('.country-list'),
  div: document.querySelector('.country-info'),
};

refs.input.addEventListener('input', debounce(inputHandler, DEBOUNCE_DELAY));

function inputHandler(e) {
  let inputValue = e.target.value.trim();
  if (inputValue !== '') {
    fetchCountries(inputValue)
      .then(data => {
        if (data.length === 1) {
          const markup = createCardMarkup(data);
          renderCard(markup);
        } else if (data.length > 10) {
          Notify.info(
            'Too many matches found. Please enter a more specific name.'
          );
          refs.list.innerHTML = '';
          refs.div.innerHTML = '';
        } else if (data.length >= 2 && data.length <= 10) {
          const markup = createListMarkup(data);
          renderList(markup);
        }
      })
      .catch(error => {
        refs.list.innerHTML = '';
        refs.div.innerHTML = '';
        return Notify.failure('Oops, there is no country with that name');
      });
  } else {
    refs.list.innerHTML = '';
    refs.div.innerHTML = '';
  }
}

function createListMarkup(data) {
  return data
    .map(
      item =>
        `<li class="country-item">
          <img class="country-img" src="${item.flags.svg}" alt="${item.name.official} flag">
          <p class="country-name">${item.name.official}</p>
        </li>`
    )
    .join('');
}

function createCardMarkup(data) {
  return data
    .map(
      item => `<div class="title">
    <img class="country-img" src="${item.flags.svg}" alt="${
        item.name.official
      } flag">
    <p class="country-name large">${item.name.official}</p></div>
    <p class="country-inform">Capital: <span class="info">${
      item.capital
    }</span></p>
    <p class="country-inform">Population: <span class="info">${
      item.population
    }</span></p>
    <p class="country-inform">Languages: <span class="info">${Object.values(
      item.languages
    ).join(', ')}</span></p>`
    )
    .join('');
}

function renderList(markup) {
  refs.list.innerHTML = '';
  refs.div.innerHTML = '';
  refs.list.innerHTML = markup;
}

function renderCard(markup) {
  refs.div.innerHTML = '';
  refs.list.innerHTML = '';
  refs.div.innerHTML = markup;
}
