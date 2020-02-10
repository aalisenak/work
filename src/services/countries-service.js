export default class CountriesService {

    _apiBase = 'https://restcountries.eu/rest/v2';
    // _apiBase = 'https://www.scorebat.com/video-api';
    // _apiBase = 'https://swapi.co/api';

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`)
        }

        return await res.json();
    };

    async getAllCountries() {
        const res = await this.getResource(`/all/`);
        return res.map(this._createCountry)
    }

    _createCountry = (country) => {
        return {
            name: country.name
        }
    }
};