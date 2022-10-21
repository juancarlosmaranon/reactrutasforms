import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Cine from './Cine';
import Musica from './Musica';

export default class ROUTER extends Component {
  render() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/cine' element={<Cine/>}></Route>
                <Route path='/musica' element={<Musica/>}></Route>
            </Routes>
        </BrowserRouter>
    )
  }
}
