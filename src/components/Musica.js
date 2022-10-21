import React, { Component } from 'react'
import musica from './../assets/images/musica.png';

class Musica extends Component {
  render() {
    return (
        <div>
            <h1>Musica</h1>
            <img src={musica}></img>
        </div>
    )
  }
}
export default Musica;