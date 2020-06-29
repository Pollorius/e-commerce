import React from 'react';
import Imagen from './beerImage.jpg';
<<<<<<< HEAD
//import styles from './Home.module.css';
=======
>>>>>>> d4e2687467d99a58b9704301dc83acf7d153aa95
import { Link } from 'react-router-dom';

export default function Home(){
    return (
        <div>
            <img src={Imagen} alt='imagen no encontrada'/>
            <Link to='/products'>
            <div>
            <button type="button" className="btn btn-secondary btn-lg">Entrar</button>
            </div>
            </Link>
        </div>
    )
}