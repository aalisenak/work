import React from "react";

const Matches = () => {
    return(
        <div>
            <nav>
                <ul className="list-group list-group-horizontal">
                    <li className="list-group-item">date</li>
                    <li className="list-group-item">area</li>
                    <li className="list-group-item">match</li>
                    <li className="list-group-item">result</li>
                </ul>
            </nav>

            <ul className="list-group list-group-horizontal">
                <li className="list-group-item">12-12-2005</li>
                <li className="list-group-item">Spain</li>
                <li className="list-group-item">Barcelona - Real</li>
                <li className="list-group-item">5-0</li>
            </ul>

        </div>

    )
};

export default Matches;