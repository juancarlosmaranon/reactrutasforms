import React, { Component } from 'react'
import cine from './../assets/images/cine.png';

class Cine extends Component {
  render() {
    return (
        <div>
            <h1>Cine</h1>
            <img src={cine}></img>
        </div>
    )
  }
}
export default Cine;