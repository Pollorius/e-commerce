<<<<<<< HEAD
import React, {useState} from 'react';
=======
import React, { useState } from 'react';
>>>>>>> a0d09ef180d7faa9fc46d75c13281c6f2b9e1abb
import logo from './logo.svg';
import './App.css';
import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
import Nav from './components/Nav.jsx'

function App() {
<<<<<<< HEAD
  const [cervezas, setCervezas] =useState([]);
=======
  const [cervezas, setCervezas] = useState([]);
>>>>>>> a0d09ef180d7faa9fc46d75c13281c6f2b9e1abb
  return (
    <div>
      <div>
        <Nav />
<<<<<<< HEAD
        <Cards cervezas ={cervezas}/>
=======
        <Cards cervezas={cervezas} description="Cerveza rubia" />

>>>>>>> a0d09ef180d7faa9fc46d75c13281c6f2b9e1abb

      </div>


    </div>
  )
}

export default App;
