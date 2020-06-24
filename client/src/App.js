import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
import Nav from './components/Nav.jsx'

function App() {
  return (
    <div>
      <div>
        <Nav />
        <Card nombre="Honey Beer" />

      </div>


    </div>
  )
}

export default App;
