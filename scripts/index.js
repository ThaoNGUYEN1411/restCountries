//Javascript

//load
function template(country) {
	return `<div class="col">
      <div class="card shadow h-100">
        <img src=${country.flags.png} class="card-img-top" alt="...">
        <div class="card-body">
          <h2 class="card-title">${country.name.official}</h2>
          <h3 class="card-text">${country.capital}</h3>
          <span class="text-nowrap">
              <i class="bi bi-person-arms-up">${country.population.toLocaleString(
								"en-US",
							)}</i>
          </span>
        </div>
      </div>
  </div>`;
}

async function loadCountries() {
	const url =
		"https://restcountries.com/v3.1/region/europe?fields=name,flags,capital,population";
	const response = await fetch(url);
	const data = await response.json();
	//display data dans index.html
	let countries = "";
	for (let index = 0; index < data.length; index++) {
		const country = data[index];
		const card = template(country);
		countries += card;
	}
	const countryCards = document.getElementById("countries-cards");
	countryCards.innerHTML = countries;
}
loadCountries();

//even listener 'load'
document.addEventListener("load", (event) => {
	loadCountries();
});
