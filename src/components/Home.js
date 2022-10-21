import React, { Component } from 'react'
import home from './../assets/images/home.png';

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <img src={home}></img>
      </div>
    )
  }
}
export default Home;