import React, {Component} from 'react';
// import Countries from "../countries/countries";
import Country from "../country/country";

export default class App extends Component {

    render() {
        return (
            <div>
                <header>
                    <div>Countries of the World</div>
                    <input type="text" placeholder="Search..."/>
                </header>
                <div>

                    <div>Flag</div>
                </div>

                <Country/>
            </div>
        );
    }
}


