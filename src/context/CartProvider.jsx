import React, { useState } from 'react'
import { CartContext } from './CartContext'

function CartProvider({children}) {
    const [productsCartList, setProductsCartList] = useState([])
    
    const addMovie = data => {
        const movieFinded = productsCartList.find(movie => movie._id === data._id)
        if (movieFinded) {
            setProductsCartList(
                productsCartList.map(
                    movie => movie._id === data._id ? data : movie
                )
            )
        } else {
            setProductsCartList([...productsCartList, data])
        }
    }

    const removeMovie = id => {
        const movieFinded = productsCartList.find(movie => movie._id === id)
        if (movieFinded?.quantity > 1) {
            setProductsCartList(
                productsCartList.map(
                    movie => movie._id === id ? {
                        ...movie,
                        quantity: movie.quantity -1
                    } : movie
                )
            )
        } else {
            setProductsCartList(productsCartList.filter( movie => movie._id !== id ))
        }
    }

    return (
        <CartContext.Provider value={{
            productsCartList,
            addMovie,
            removeMovie
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider