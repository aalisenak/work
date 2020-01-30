import React from "react";

import './table.css'
import Matches from "../matches/matches";

const Table = ({matches, label}) => {
    const elements = matches.map((item) => {
        return (
            <li className="matches__item"
                key={item.id}>
                <Matches
                    {...item}
                />
            </li>
        )
    });

    return (
        <div>
            <ul className="table">
                <li className="table__title">date</li>
                <li className="table__title">area</li>
                <li className="table__title">match</li>
                <li className="table__title">status</li>
                <li className="table__title">result</li>
            </ul>

            <ul className="matches">
                {elements}
            </ul>
        </div>
    )
};


export default Table;