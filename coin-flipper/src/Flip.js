import React, { Component } from 'react';
import Coin from './Coin';

class Flip extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flips: 0,
            side: null,
            heads: 0,
            tails: 0
        }
        this.handleClick= this.handleClick.bind(this);
    }

    flip() {
        let num = Math.floor(Math.random() * 2);
        
        if(num === 0) {
            this.setState((prevState) => ({
                heads: prevState.heads + 1
            }))
        } else {
            this.setState((prevState) => ({
                tails: prevState.tails + 1
            }))
        }

        this.setState( (prevState) => ({
            side: num,
            flips: prevState.flips + 1
        }));

    }

    counter() {

    }

    handleClick() {
        this.flip();
    };

    render() {
        return (
            <div className='Flip'>
                <Coin side={this.state.side} />
                <button onClick={this.handleClick}>FLIP!</button>
                <h1>Out of {this.state.flips} flips, there have been {this.state.heads} heads and {this.state.tails} tails</h1>
            </div>
        );
    }
}

export default Flip;