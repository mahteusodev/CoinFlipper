import React, { Component } from 'react';
import './Coin.css';

class Coin extends Component {
    state = {  } 
    render() { 
        return (
            <div className='Coin'>
                {this.props.side === 0
                    ? <img src='https://upload.wikimedia.org/wikipedia/commons/c/cd/S_Half_Dollar_Obverse_2016.jpg'/> 
                : this.props.side === 1
                    ? <img src='https://upload.wikimedia.org/wikipedia/commons/8/85/2005_Half_Dollar_Rev_Unc_P.png'/>
                : <img style={{display: 'none'}} src=''/>}
            </div>
        );
    }
}
 
export default Coin;