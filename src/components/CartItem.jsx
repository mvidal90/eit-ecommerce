import React from 'react'
import Counter from './Counter'

function CartItem({product, quantity, edit = true}) {
    return (
        <div className='cart-item__container'>
            <h2>
                {product.name}
                <span>({product.brand})</span>
            </h2>
            <p>{product.category}</p>
            {
                edit ?
                    <Counter 
                        _id={product._id}
                        initialValue={quantity}/>
                : undefined
            }
        </div>
    )
}

export default CartItem