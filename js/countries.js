const loadCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(response => response.json())
        .then(data => displayContries(data))
}
loadCountries()

const displayContries = counties => {
    /* console.log(countries) */
    // for (const country of counties) {
    //     console.log(country)
    const countriesDive = document.getElementById('countries')
    counties.forEach(country => {
        console.log(country)
        const div = document.createElement('div')
        div.classList.add('country')

        div.innerHTML = `
        <h3>${country.name}</h3>
        <p>${country.capital}</p>
        <button onclick="loadcountryBYname('${country.name}')">Details</button>`;
        const h3 = document.createElement('h3')
        h3.innerText = country.name;
        div.appendChild(h3)
        const p = document.createElement('p')
        p.innerText = country.capital
        div.appendChild(p)
        countriesDive.appendChild(div)

    });
}
