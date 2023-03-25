const BASE_URL = 'https://restcountries.com/v3.1/name';

export const fetchCountries = name =>
  fetch(`${BASE_URL}/${name}`)
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

