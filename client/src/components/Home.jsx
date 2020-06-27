import React from 'react';
import Imagen from './beerImage.jpg';
import styles from './Home.module.css';
import { Link } from 'react-router-dom';

export default function Home(){
    return (
        <div>
            <img src={Imagen} alt='imagen no encontrada'/>
            <Link to='/products'>
            <div>
            <button type="button" class="btn btn-secondary btn-lg">Entrar</button>
            </div>
            </Link>
        </div>
    )
}