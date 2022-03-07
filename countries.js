const loadCountries = () => {
    fetch('https://restcountries.com/v2/all')
    .then(res => res.json())
    .then(data => displayCountries(data))   
}
//loadCountries();
const displayCountries = counties => {
    const countriesDiv = document.getElementById('countries');
    counties.forEach(country => {
        const div = document.createElement('div')
        div.classList.add('country');
        div.innerHTML =`
        <h3>${country.name}</h3>
        <p>Capital :${country.capital}</p>
        <p>Population: ${country.population}</p>
        <button onClick="loadCountryByName('${country.name}')">Show More</button>
        `;
        countriesDiv.appendChild(div);
    });
}
const loadCountryByName = name =>{
    const url = `https://restcountries.com/v2/name/${name}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountryDetail(data[0]))
}
const displayCountryDetail = country => {
   const countryDiv = document.getElementById('country-detail');
   countryDiv.innerHTML=`
   <h3>${country.name}</h3>
   <p>Population: ${country.population}</p>
   <img width="200px" src="${country.flag}" alt="">

   `;
}