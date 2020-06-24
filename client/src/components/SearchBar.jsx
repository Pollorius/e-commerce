import React from 'react';
import styles from './Cards.module.css';
export default function SearchBar(props) {
    // acá va tu código
    return (
        <div>
            <input className={styles.input} type="text" placeholder="Buscar..." />
            <button className={styles.greenBtn} onClick={(e) => props.onSearch('Buscando...')}>
                Buscar
			</button>
        </div>
    );
}
