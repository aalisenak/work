import React, {Component} from "react";

import './matches.css'

export default class Matches extends Component {

    render() {
        const {label} = this.props;
        return <span onChange={ () => console.log({label})}>
            {label}
        </span>
    }


};