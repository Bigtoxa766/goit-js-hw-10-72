const MAIN_URL = 'https://restcountries.com/v3.1/all';

export const fetchCountries = name =>
  fetch(`${MAIN_URL}?fields=${name},capital,population,flags,languages`)
    .then(res => {
      if (!res.ok) {
        throw new Error(res.status)
      }
      return res.json();
    })
    .then(country =>{ 
      console.log(country)})
    .catch(error => 
    error
  ) 
