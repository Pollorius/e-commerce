import React from 'react';
import Imagen from './beerImage.jpg';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className='m-5'>
            <img src={Imagen} alt='imagen no encontrada' className="img-thumbnail"/>
            <Link to='/products'>
                <div className='m-2'>
                    <button type="button" className="btn btn-secondary btn-lg">Entrar</button>
                </div>
            </Link>
        </div>
    )
}