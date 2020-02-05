export default class CountriesService {

    _apiBase = 'https://restcountries.eu/rest/v2';

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`)
        }

        return await res.json();
    };

    async getAllCountries() {
        return await this.getResource(`/all/`);
        // return this._createCountry(country);
    }

    // _createCountry() {
    //     return {
    //         country: item.name,
    //         region: item.region,
    //         subRegion: item.subregion,
    //         capital: item.capital,
    //         population: item.population,
    //         area: item.area,
    //         language: item.language,
    //         landBorders: item.borders
    //     }
    // }
};