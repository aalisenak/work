import React from 'react';
import Header from "../header/header";
import Table from "../table/table";

import './app.css'

const App = () => {
    const matches = [
        {label: 'date', id: 1},
        {label: 'area', id: 2},
        {label: 'match', id: 3},
        {label: 'status', id: 4},
        {label: 'result', id: 5}
    ];

    return (
        <div className="container">
            <Header/>
            <Table matches={matches}/>
        </div>
    )
};

export default App;