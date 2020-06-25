import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
import Nav from './components/Nav.jsx'

function App() {
  const [cervezas, setCervezas] = useState([]);
  return (
    <div>
      <div>
        <Nav />
        <Cards cervezas={cervezas} description="Cerveza rubia" />


      </div>


    </div>
  )
}

export default App;
