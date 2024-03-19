import React from 'react'
import Counter from './Counter'

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
        // <Link to={`/movies/detail/${id}`} as="div" className="card__container">
        <div className="card__container">
            <img src={img} alt={shortDesc} />
            <div className='card__data'>
                <h2>{name} <span>( {brand} )</span></h2>
                <b>{category}</b>
                <p>{shortDesc}</p>
                {delivery ? <p>Envío sin cargo.</p> : undefined}
            </div>
            <Counter id={id}/>
        </div>
        // </Link>
    )
}

export default Card