import React, {Component} from 'react';

export default class App extends Component {

    state = {
        count: 0
    };

    addCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    };
    delCount = () => {
        this.setState({
            count: this.state.count - 1
        })
    };


    render() {
        return (
            <div>
                <p>{this.state.count}</p>
                <button onClick={this.delCount}>-</button>
                <button onClick={this.addCount}>+</button>
            </div>
        );
    }
}


