import React, {Component} from 'react';
import CountriesService from "../../services/countries-service";

export default class Country extends Component {

    countriesService = new CountriesService();


    state = {
        countries: null
    };

    componentDidMount() {
        this.countriesService
            .getAllCountries()
            .then((countries) => {
                this.setState({
                    countries
                });
            });
    }

    renderCountries(arr) {

        return arr.map(({name}) => {
            return (
                <li className="list-group-item">
                    {name}
                </li>
            );
        });
    }


    render() {
        const { countries } = this.state;

        if (!countries) {
            return countries
        }


        const items =  this.renderCountries(countries);

        return (
            <ul>
                {items}
            </ul>
        );
    }
}

