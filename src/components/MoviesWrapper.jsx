import React from 'react'
import Card from './Card'

import films from '../data/movies.json'

function MoviesWrapper() {
    return (
        <div style={{ display: 'flex'}}>
            <div className="card__wrapper">
                {
                    films.map(
                        film =>
                            <Card 
                                key={film.id}
                                {...film}
                            />
                    )
                }
            </div>
        </div>
    )
}

export default MoviesWrapper