// class BeerService {
//
//     _apiBase = 'https://restcountries.eu/rest/v2';
//
//     async getResource(url) {
//         const res = await fetch(`${this._apiBase}${url}`);
//
//         if (!res.ok) {
//             throw new Error(`Could not fetch ${url}, received ${res.status}`)
//         }
//
//         return await res.json();
//     };
//
//     async getAllCountries() {
//         return await this.getResource(`/all/`);
//     }
//
//     async getCountry(name) {
//         return await this.getResource(`/name/${name}`);
//     }
//
//
// }
//
// const beers = new BeerService();
//
// beers.getAllCountries().then((country) => {
//     country.forEach((p) => {
//
//         console.log(p);
//     })
// });


import React from "react";
import ReactDOM from 'react-dom'
import App from "./components/app/app";

ReactDOM.render(<App/>, document.getElementById('root'));
