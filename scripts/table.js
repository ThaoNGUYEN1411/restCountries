//Javascript

//load
function template(country) {
	const tld =
		country.tld.length === 0
			? "<i class='bi bi-patch-question text-danger'></i>"
			: country.tld;
	return `
    <tr class="table-row flex-1 text-center">       
			<td class="col-1"><a href=${
				country.maps.googleMaps
			} target = _blank> <img class="img-fluid w-50" src=${
		country.flags.png
	} alt=${country.name.official}> </a>
			</td>
			<td class="col-1"><img class="img-fluid w-50" src=${
				country.coatOfArms.png
			} alt="..."></td>
			<td class="">${country.cca2}</td>
			<td class="">${tld}</td>
			<td class="fw-bold text-start text-nowrap">${country.name.official}</td>
			<td class="text-end">${country.area.toLocaleString("en-US")}</td>
    </tr>
`;
}
//
async function loadCountries() {
	const url =
		"https://restcountries.com/v3.1/region/europe?fields=name,flags,coatOfArms,area,maps,cca2,tld";
	const response = await fetch(url);
	const data = await response.json();
	//display data dans index.html
	let countries = "";
	for (let index = 0; index < data.length; index++) {
		const country = data[index];
		const rowCountry = template(country);
		countries += rowCountry;
	}
	const countryRows = document.getElementById("countries-row");
	countryRows.innerHTML = countries;
}
loadCountries();

//even listener 'load'
document.addEventListener("load", (event) => {
	loadCountries();
});
