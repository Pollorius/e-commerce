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

                <img src={Logo} width="30" height="30" alt="" loading="lazy" /> Beer O'clock!

=======
                <img src={Logo} width="30" height="30" alt="" loading="lazy" /> Beer O'clock!
>>>>>>> fe7f195793b502a4a808c47f9c5eb898f46bf16e
            </div>
            </Link>
            <SearchBar onSearch={onSearch} />
        </nav>

    );
};

export default Nav;