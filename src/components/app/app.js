import React from 'react';

const App =() => {
        return (
            fetch('https://api.punkapi.com/v2/beers')
                .then((res) => {
                    return res.json()
                })
                .then((body) => {
                    console.log(body);
                })
        )

};

export default App;