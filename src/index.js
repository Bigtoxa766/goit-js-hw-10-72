import './css/styles.css';
import { fetchCountries } from './js/fetchCountries'

const countryListEl = document.querySelector('.country-list');
const inputEl = countryListEl.previousElementSibling;
const countryInfoWrapperEl = countryListEl.nextElementSibling;

const DEBOUNCE_DELAY = 300;

function markup() {
  `<li class="country-list-item">${this.name}<li/>`
}

const heandleSearchCountry = event => {
  event.preventDefault();

  const searchQuery = event.target.value.trim();

  fetchCountries(searchQuery).then(data => {
    countryListEl.innerHTML = markup(data);
  })
}

inputEl.addEventListener('input', heandleSearchCountry)


