import React from 'react';
import Logo from './beerIcon.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';
import { Link } from 'react-router-dom';

function Nav({ onSearch }) {
    return (
        
        <nav className="navbar navbar-dark bg-dark">
            <Link to='/'>
            <div className="navbar-brand" href="#">
<<<<<<< HEAD
                <img src={Logo} width="30" height="30" alt="" loading="lazy" /> Beer E-commerce
=======
                <img src={Logo} width="30" height="30" alt="" loading="lazy" /> Beer O'clock!
>>>>>>> d4e2687467d99a58b9704301dc83acf7d153aa95
            </div>
            </Link>
            <SearchBar onSearch={onSearch} />
        </nav>

    );
};

export default Nav;