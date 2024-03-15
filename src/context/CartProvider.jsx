import React, { useState } from 'react'
import { CartContext } from './CartContext'

function CartProvider({children}) {
    const [moviesCartList, setMoviesCartList] = useState([])
    
    const addMovie = data => {
        const movieFinded = moviesCartList.find(movie => movie.id === data.id)
        if (movieFinded) {
            setMoviesCartList(
                moviesCartList.map(
                    movie => movie.id === data.id ? data : movie
                )
            )
        } else {
            setMoviesCartList([...moviesCartList, data])
        }
    }

    const removeMovie = id => {
        const movieFinded = moviesCartList.find(movie => movie.id === id)
        if (movieFinded?.quantity > 1) {
            setMoviesCartList(
                moviesCartList.map(
                    movie => movie.id === id ? {
                        ...movie,
                        quantity: movie.quantity -1
                    } : movie
                )
            )
        } else {
            setMoviesCartList(moviesCartList.filter( movie => movie.id !== id ))
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