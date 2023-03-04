import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from '../Header'
import './App.css'

import {Home, About, Contact} from '../../pages'

// const Links = () =>
//   <nav>
//     <Link to='/'>Home</Link>
//     <Link to='/about'>About</Link>
//     <Link to='/contact'>Contact</Link>
//   </nav>

function App() {
  
  return (
    <Router>
      <div className="container-fluid">
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App
