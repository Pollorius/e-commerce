import React from 'react';
import Logo from './logo192.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';

function Nav({ onSearch }) {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="#">
                <img src={Logo} width="30" height="30" alt="" loading="lazy" /> Beer E-commerce
      </a>
            <SearchBar onSearch={onSearch} />
        </nav>

    );
};

export default Nav;