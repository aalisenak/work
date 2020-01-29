import React from "react";

import './header.css'

const Header = () => {
    return (
        <div className="header">
            <a className="logo" href="/">
                <span className="logo__text">Football Scores</span>
                <span className="logo__icon"><i className="fas fa-volleyball-ball"></i></span>
            </a>

            <div className="search">
                <input placeholder='Search...' className="search__input"/>
                    <span className="search__icon"><i className="fas fa-search"></i></span>
            </div>
        </div>
    );
};

export default Header