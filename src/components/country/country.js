import React, {Component} from 'react';
import CountriesService from "../../services/countries-service";

export default class Country extends Component {

    countriesService = new CountriesService();


    state = {
        country: null,
        region: null,
        subRegion: null,
        capital: null,
        population: null,
        area: null,
        language: null,
        landBorders: null
    };

    constructor() {
        super();
        this.updateCountry()
    }


    updateCountry() {
        this.countriesService
            .getAllCountries()
            .then((country) => {

                country.map((item) => {

                    this.setState({
                        country: item.name,
                        region: item.region,
                        subRegion: item.subregion,
                        capital: item.capital,
                        population: item.population,
                        area: item.area,
                        language: item.language,
                        landBorders: item.borders
                    })
                })
            })
    }


    render() {
        const {country, region, subRegion, capital, population, area, language, landBorders} = this.state;

        return (
            <div>
                <h2><span>Country: </span><span>{country}</span></h2>

                <h3>INFO</h3>
                <ul>
                    <li>
                        <span>{country}: </span>
                        <span>{capital}</span>
                    </li>
                </ul>
            </div>
        );
    }
}

