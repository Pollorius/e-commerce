import React from 'react'
import style from './Card.module.css'
import Image from '../../img/beerProduct.jpg'
import { Link } from 'react-router-dom'
import AddtoCartButton from '../cart/AddToCartButton'

export default function Card ({ name, brand, description, price, id, packaging, categories }) {
  function showCategories (categories) {
    if (categories !== undefined) {
      return categories.map(c =>
        <li className='list-unstyled' key={c.id}>
          {c.name}
        </li>)
    }
  }

  return (
    <div className={style.cardcontainer}>
      <div className='card col m-4'>
        <div className={style.cardwidth} style={{ width: 18 + 'em' }}>
          <img src={Image} className='card-img-top' alt={Image} height='200px' width='500px' />
          <div className='card-body'>
            <h5 className='card-title'> {name}</h5>
            <p className='card-text'> {brand}</p>
            <p className='card-text'> {packaging} </p>
            <p className='card-text'> {description} </p>
            <p className='card-text'> ${price} </p>
            <ul className='card-text'>
              {showCategories(categories)}
            </ul>
            <Link to={`/products/${id}`}>
              <p className='card-text'><small className='text-muted'>Ver más...</small></p>
            </Link>
            <AddtoCartButton id={id} />
          </div>
        </div>
      </div>
    </div>
  )
};
