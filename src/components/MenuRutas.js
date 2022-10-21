import React, { Component } from 'react'

export default class MenuRutas extends Component {
  render() {
    return (
        <div>
            <ul style={{display:"inline"}}>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/cine">Cine</a>
                </li>
                <li>
                    <a href="/musica">Musica</a>
                </li>
            </ul>
        </div>
    )
  }
}
