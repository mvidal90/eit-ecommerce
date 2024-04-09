import React from 'react'
import Counter from './Counter'
import { Link } from 'react-router-dom'

function Card({
    id,
    name,
    img,
    category,
    brand,
    shortDesc,
    delivery,
}) {
    return (
        <div className="card__container">
            <Link to={`/detail/${id}`} >
                <img src={img} alt={shortDesc} />
                <div className='card__data'>
                    <h2>{name} <span>({brand})</span></h2>
                    <b>{category}</b>
                    <p>{shortDesc}</p>
                    {delivery ? <p>Envío sin cargo.</p> : undefined}
                </div>
            </Link>
            <Counter 
                id={id}
                movieData={{
                    name,
                    img,
                    category,
                    brand,
                }}/>
        </div>
    )
}

export default Card