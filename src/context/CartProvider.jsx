import React, { useState } from 'react'
import { CartContext } from './CartContext'

function CartProvider({children}) {
    const [moviesCartList, setMoviesCartList] = useState([])
    
    const addMovie = data => {
        const movieFinded = moviesCartList.find(movie => movie._id === data._id)
        if (movieFinded) {
            setMoviesCartList(
                moviesCartList.map(
                    movie => movie._id === data._id ? data : movie
                )
            )
        } else {
            setMoviesCartList([...moviesCartList, data])
        }
    }

    const removeMovie = id => {
        const movieFinded = moviesCartList.find(movie => movie._id === id)
        if (movieFinded?.quantity > 1) {
            setMoviesCartList(
                moviesCartList.map(
                    movie => movie._id === id ? {
                        ...movie,
                        quantity: movie.quantity -1
                    } : movie
                )
            )
        } else {
            setMoviesCartList(moviesCartList.filter( movie => movie._id !== id ))
        }
    }

    return (
        <CartContext.Provider value={{
            moviesCartList,
            addMovie,
            removeMovie
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider