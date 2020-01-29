import React from 'react';
import Header from "../header/header";
import Matches from "../matches/matches";

import './app.css'

const App = () => {
    return (
        <div className="container">
            <Header/>
            <Matches/>
        </div>
    )
};

export default App;