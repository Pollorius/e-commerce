import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import styles from '../products/Cards.module.css'
import { searchProducts } from '../../actions/ProductAction'

export default function SearchBar () {
  const [input, setInput] = useState([])
  const dispatch = useDispatch()

  useEffect(() => dispatch(searchProducts(input)), [dispatch, input])

  /* no sabemos para que esta esto aca
  const products = useSelector(store => store.products)
  const catalogue = products.products */

  const handleSubmit = function (e) {
    e.preventDefault()
    dispatch(() => dispatch(searchProducts(input)))
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type='text'
        placeholder='Choose your poison...'
        onChange={e => setInput(e.target.value)}
      />
      <input className={styles.greenBtn} type='submit' value='Search' />
    </form>
  )
}
