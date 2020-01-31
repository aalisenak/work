import React, {Component} from 'react';
import Header from "../header/header";
import Table from "../table/table";

import './app.css'

export default class App extends Component {

    state = {
        matches: [
            {label: 'date', id: 1},
            {label: 'area', id: 2},
            {label: 'match', id: 3},
            {label: 'status', id: 4},
            {label: 'result', id: 5}
        ]
    };

    render() {
        return (
            <div className="container">
                <Header/>
                <Table
                    matches={this.state.matches}
                />
            </div>
        )
    }


};