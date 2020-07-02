import React from 'react';
//import Card from './Card.jsx';
import { Link } from 'react-router-dom';
//import style from './Cards.module.css'

export default function Categories({id, name}) {

    // const handleSubmit = function (e) {
    //     e.preventDefault();
    //     var url = 'http://localhost:9000/categories';
    //     var data = {
    //         name: e.target.name.value,
    //         id: e.target.id.value
    //     };
    //     console.log(data)

    //     fetch(url, {
    //         method: 'GET', //POST
    //         body: JSON.stringify(data),
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     }).then(res => console.log(res));
    // }

    return (
        <div>
            <div >
                <div >
                    <Link  to={`/products/`}>
                        <button type="button" className="btn btn-secondary btn-sm">{name}</button>
                    </Link>
                </div>

            </div>
        </div>



    ); 
}


