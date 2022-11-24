import React, { Component } from 'react';
import Coin from './Coin';

class Flip extends Component {
    constructor(props) {
        super(props);
        this.state = {
            side: null
        }
        this.handleClick= this.handleClick.bind(this);
    }

    handleClick() {
        this.setState( (prevState) => ({
            side: prevState.side * Math.floor(Math.random())
        }))
    };

    render() {
        return (
            <div className='Flip'>
                <Coin side={this.state.side} />
                <button onClick={this.handleClick}>FLIP!</button>
            </div>
        );
    }
}

export default Flip;