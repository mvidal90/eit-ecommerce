import React from 'react'
import Counter from './Counter'

function CartItem({id, movieData, quantity}) {
    return (
        <div className='cart-item__container'>
            <h2>
                {movieData.name}
                <span>({movieData.brand})</span>
            </h2>
            <p>{movieData.category}</p>
            <Counter 
                id={id} 
                movieData={movieData}
                initialValue={quantity}/>
        </div>
    )
}

export default CartItem