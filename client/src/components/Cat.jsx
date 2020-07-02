import React from 'react';
//import Card from './Card.jsx';
import { Link } from 'react-router-dom';
//import style from './Cards.module.css'

export default function Cat({name, id}) {

    const handleSubmit = function (e) {
        e.preventDefault();
        var url = 'http://localhost:9000/products/findByCat/';
        var data = {
            categoryId: e.target.categoryId.value

        };
        

        fetch(url, {
            method: 'GET', //POST
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => console.log(res))
        .catch(err => console.log(err))
    }

    return (
        <div>
            <div >
                <div >
                    <Link  to={`/products/findByCat`}>
                        <button onSubmit={handleSubmit}  type="button" className="btn btn-secondary btn-sm">{name}</button>
                    </Link>
                </div>

            </div>
        </div>



    ); 
}


