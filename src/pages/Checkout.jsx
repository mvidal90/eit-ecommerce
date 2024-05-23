import React, { useContext, useEffect, useState } from 'react'
import { Wallet } from '@mercadopago/sdk-react';

import { CartContext } from '../context/CartContext';
import CartItem from '../components/CartItem';

import { postPreferenceMP } from '../util/api';

function Checkout() {
    const [prefId, setPrefId] = useState("")
    const { productsCartList } = useContext(CartContext);

    useEffect(() => {
        console.log(productsCartList)
        const itemsList = productsCartList.map(({product, quantity}) => ({
            id: product._id,
            title: product.title,
            picture_url: product.imgUrl,
            quantity: quantity,
            unit_price: product.price
        }))
        postPreferenceMP({
            items: itemsList
        })
            .then( data => setPrefId(data.preferenceId))
            .catch(console.log)
    }, [productsCartList])
    

    return (
        <div>
            {
                productsCartList.map(
                    data =>
                        <CartItem
                            key={data.product._id}
                            {...data}
                            edit={false}
                        />
                )
            }
            {
                prefId ?
                    <Wallet initialization={{ preferenceId: prefId }} customization={{ texts:{ valueProp: 'smart_option'}}} />
                : undefined
            }
        </div>
    )
}

export default Checkout