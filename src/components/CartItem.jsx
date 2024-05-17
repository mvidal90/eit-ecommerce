import React from 'react'
import Counter from './Counter'

function CartItem({_id, product, quantity}) {
    return (
        <div className='cart-item__container'>
            <h2>
                {product.name}
                <span>({product.brand})</span>
            </h2>
            <p>{product.category}</p>
            <Counter 
                _id={_id}
                initialValue={quantity}/>
        </div>
    )
}

export default CartItem