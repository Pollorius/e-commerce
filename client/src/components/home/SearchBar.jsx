import React, { useState, useEffect } from 'react'
import {useDispatch, useSelector } from 'react-redux'
import styles from '../products/Cards.module.css'
import { searchProducts } from '../../actions/ProductAction'

export default function SearchBar() {
    const dispatch = useDispatch();
    const products = useSelector(store => store.products);
    
    useEffect(() => dispatch(searchProducts(input)),[])
    
    let catalogue = products.products
    const [input, setInput] = useState([]);

    const handleSubmit = function (e) {
        e.preventDefault()
        dispatch(() => dispatch(searchProducts(input)));
    }
    
    return (
        <form onSubmit= {handleSubmit}>
            <input className={styles.input}
                type="text"
                placeholder="Choose your poison..."
                onChange={e => setInput(e.target.value)} />
            <input className={styles.greenBtn} type="submit" value="Search" />
        </form>
    );
}