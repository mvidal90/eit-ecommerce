import React from 'react'
import Counter from './Counter'

function Card({
    id,
    title,
    year,
    genre,
    director,
    duration,
    rating,
    isAwarded
}) {
    return (
        // <Link to={`/movies/detail/${id}`} as="div" className="card__container">
        <div className="card__container">
            <h2>{title} <span>( {genre} - {year} )</span></h2>
            <b>{director}</b>
            <p>{duration} min.</p>
            <p>Puntuación: {rating}</p>
            {isAwarded ? <p>Ha sido premiada</p> : undefined}
            <Counter id={id}/>
        </div>
        // </Link>
    )
}

export default Card