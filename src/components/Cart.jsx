import { useContext } from "react"
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"

import { CartContext } from "../context/CartContext"

import Button from "./Button";

function Cart() {
    const { moviesCartList } = useContext(CartContext);

    return (
        <div className="cart__container">
            <Button
                icon={faShoppingCart}
                className="cart__navbar-button"
            />
            {
                moviesCartList.length ?
                    <div className="cart__badge">
                        <span>
                            {moviesCartList.reduce(
                                (acc, movie) => acc + movie.quantity,
                                0
                            )}
                        </span>
                    </div>
                : undefined 
            }
        </div>
    )
}

export default Cart