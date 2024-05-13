import React, { useContext, useEffect, useState } from 'react'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

import { CartContext } from '../context/CartContext';

import Text from './Text'
import Button from './Button'

export default function Counter({_id, movieData, initialValue = 0}) {
    const [count, setCount] = useState(initialValue)
    const { addMovie, removeMovie, moviesCartList } = useContext(CartContext);

    useEffect(() => {
        const movie = moviesCartList.find( movie => movie._id === _id)
        setCount(movie?.quantity || 0)
    }, [moviesCartList])

    const decrement = e => {
        e.stopPropagation()
        if(count > 0) setCount(count - 1)
        removeMovie(_id)
    }
    const increment = e => {
        e.stopPropagation()
        setCount(count + 1)
        addMovie({
            _id,
            movieData,
            quantity: count + 1
        })
    }

    return (
        <div className="counter__container">
            <Button 
                icon={faMinus}
                className="counter__btn"
                action={decrement}
                disabled={count === 0}
            />
            <Text 
                renderAs="p"
                content={count}
                componentsProps={{ className: "counter__count-text" }}
            />
            <Button 
                icon={faPlus}
                className="counter__btn"
                action={increment}
            />
        </div>
    )
}
