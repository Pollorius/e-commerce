import React, { useState } from 'react';
//import Card from './Card.jsx';
import { Link } from 'react-router-dom';

import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Cat from './Cat.jsx'


export default function Categories(props) {
    return (
        <div>
            {/* <div >

                <div className=' dropdown cards'>
                    {props.categories.map(c => <Cat
                        key={c.id}
                        id={c.id}
                        name={c.name}

                    />)}
                </div>

            </div> */}
            <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle className='mt-3 mb-3' caret>
                    Categories
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem header>{props.categories.map(c => <Cat
                        key={c.id}
                        id={c.id}
                        name={c.name}

                    />)}</DropdownItem>
                </DropdownMenu>
            </ButtonDropdown>
            <div >
                <div >
                    <Link to={`/products/${props.categories.id}/addcat`}>
                        <button type="button" className="btn btn-secondary btn-sm">Add Category</button>
                    </Link>
                </div>
            </div>
        </div>



    );
}

