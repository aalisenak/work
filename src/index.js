// fetch("https://api.football-data.org/v2/competitions/", {
//     "headers": {
//         "X-Auth-Token": "bef879d6107c495b8a2bf9d4b06e24db"
//     }
// })
//     .then(response => {
//         return response.json()
//     })
//     .then(data => {
//         console.log(data);
//     })
//     .catch(err => {
//         console.log(err);
//     });

import React from "react";
import ReactDOM from "react-dom"
import App from './components/app/app'

ReactDOM.render(<App/>,
    document.getElementById('root')
);