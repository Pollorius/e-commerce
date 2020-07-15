import React from 'react';
import Logo from './beerIcon.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';
import { Link } from 'react-router-dom';
import carrito from './logoshop.png'
import style from './Nav.css';

function Nav() {
    return (
        <div className={style.container}>
            <nav className="navbar navbar-dark bg-light">
                <Link to='/'>
                    <div className="navbar-brand text-dark" href="#">
                        <img src={Logo} width="60" height="60" alt="" loading="lazy" /> Beer O'clock!
            </div>
                </Link>
                <SearchBar/>
                <Link to='/formuser'>
                    <div className="navbar-brand text-dark" href="#">
                        <p>Sign up</p>
                    </div>
                </Link>
                <Link to='/admin'>
                    <div className="navbar-brand text-dark" href="#">
                        <p>Admin</p>
                    </div>
                </Link>
                <Link to='/orders/1'>
                    <div>
                        <img src={carrito} width='60' height='60' alt='' />
                    </div>
                </Link>
            </nav>
        </div>
    );
};

export default Nav;