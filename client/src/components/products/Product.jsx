import React, { useEffect } from 'react'
import Image from '../../img/beerProduct.jpg'
import style from './Product.module.css'
import { Link } from 'react-router-dom'
import { getProductById } from '../../actions/ProductAction'
import { useDispatch, useSelector } from 'react-redux'

export default function ProductItem (match) {
  const dispatch = useDispatch()
  const products = useSelector(store => store.products)

  useEffect(() => dispatch(getProductById(match.match.params.id)), [])

  const categories = products.products.categories

  function showCategories (categories) {
    if (Array.isArray(categories) && categories.length !== 0) {
      return categories.map(c =>
        <li key={c.id}>
          {c.name}
        </li>)
    }
  }

  return (
    <div>
      <div className={style.productContainer}>
        <div>
          <img src={Image} alt={Image} />
          <div>
            <h5 className='card-title'> {products.products.name} </h5>
            <p className='card-text'> {products.products.brand} </p>
            <p className='card-text'> ${products.products.price} </p>
            <p className='card-text'> {products.products.package} </p>
            <p className='card-text'>
              <small className='text-muted'>
                {products.products.description}
              </small>
            </p>
            <ul className='card-text'>
              {showCategories(categories)}
            </ul>
          </div>
        </div>
      </div>
      <div className={style.container}>
        <div className={style.btn}>
          <Link to={`/products/${products.products.id}/edit`}>
            <button
              type='button'
              className='btn btn-secondary btn-sm'
            >
            Edit
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
