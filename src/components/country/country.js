import React, {Component} from 'react';
import CountriesService from "../../services/countries-service";

export default class Country extends Component {

    countriesService = new CountriesService();


    newArr = [];
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

                console.log(country);
                country.forEach((item) => {

                    this.newArr.push(item.name);

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
            // .then((item) => {
            //     this.setState({
            //         country: item.name,
            //         region: item.region,
            //         subRegion: item.subregion,
            //         capital: item.capital,
            //         population: item.population,
            //         area: item.area,
            //         language: item.language,
            //         landBorders: item.borders
            //     })
            // })
    }

    render() {

        const {country, region, subRegion, capital, population, area, language, landBorders} = this.state;

        return (
            <div>
                <h2><span>Country: </span><span>{country}</span></h2>
                <ul>
                    <h3>INFO</h3>
                    <li>
                        <span>Region: </span>
                        <span>{region}</span>
                    </li>
                    <li>
                        <span>Sub Region: </span>
                        <span>{subRegion}</span>
                    </li>
                    <li>
                        <span>Capital: </span>
                        <span>{capital}</span>
                    </li>
                    <li>
                        <span>Population: </span>
                        <span>{population}</span>
                    </li>
                    <li>
                        <span>Area: </span>
                        <span>{area} km<sup>2</sup></span>
                    </li>
                    <li>
                        <span>Language: </span>
                        <span>{language}</span>
                    </li>
                    <li>
                        <span>Land Borders: </span>
                        <span>{landBorders}</span>
                    </li>
                </ul>
            </div>
        );
    }

    // country.forEach((item) => {
    //     this.setState({
    //         country: item.name,
    //         region: item.region,
    //         subRegion: item.subregion,
    //         capital: item.capital,
    //         population: item.population,
    //         area: item.area,
    //         language: item.language,
    //         landBorders: item.borders,
    //     })
    // })
}

