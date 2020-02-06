import React, {Component} from 'react';
import Country from "../country/country";

export default class App extends Component {

    render() {
        return (
            <div>
                <header>
                    <div>Countries of the World</div>
                    <ul>
                        <li>region</li>
                        <li>city</li>
                        <input type="text" placeholder="Search..."/>
                    </ul>
                </header>
                <div>
                    <Country/>

                    <div>Flag</div>
                </div>
            </div>
        );
    }
}


