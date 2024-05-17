import React, { useState } from 'react'
import { CartContext } from './CartContext'
import { editCart, postCart } from '../util/api'

function CartProvider({children}) {
    const [idCart, setIdCart] = useState(null)
    const [productsCartList, setProductsCartList] = useState([])
    
    const addProd = ({_id, quantity}) => {
        const data = {
            quantity,
            product: _id
        }
        const prodFinded = productsCartList.find(prod => prod.product?._id === _id)

        if (prodFinded) {
            const newCart = productsCartList.map(
                prod => prod.product?._id === data.product ? data : prod
            )
            editCart(idCart, newCart)
                .then(({cart}) => setProductsCartList(cart.items))
        } else {
            if (!idCart) {
                postCart([data])
                    .then(({cart}) => {
                        setIdCart(cart._id)
                        setProductsCartList(cart.items)
                    })
            } else {
                const newCart = [...productsCartList, data]
                editCart(idCart, newCart)
                        .then(({cart}) => setProductsCartList(cart.items))
            }
        }
    }

    const removeProd = id => {
        const prodFinded = productsCartList.find(prod => prod._id === id)
        if (idCart) {
            if (prodFinded?.quantity > 1) {
                const newCart = productsCartList.map(
                    prod => prod.product._id === id ? {
                        ...prod,
                        quantity: prod.quantity -1
                    } : prod
                )
                editCart(idCart, newCart)
                        .then(({cart}) => setProductsCartList(cart.items))
            } else {
                const newCart = productsCartList.filter( prod => prod._id !== id )
                editCart(idCart, newCart)
                        .then(({cart}) => setProductsCartList(cart.items))
            }
        }
    }

    return (
        <CartContext.Provider value={{
            productsCartList,
            addProd,
            removeProd
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider