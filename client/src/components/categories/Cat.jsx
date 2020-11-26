import React from 'react'
import { Link } from 'react-router-dom'

export default function Cat ({ id, name }) {
  return (
    <div>
      <div>
        <div>
          <Link to={`/products/${id}/findByCat`}>
            <button type='button' className='btn btn-secondary btn-sm'>{name}</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
