import { useContext } from "react"
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"

import { CartContext } from "../context/CartContext"
import Icon from "./Icon"

function Cart() {
    const { moviesCartList } = useContext(CartContext);

    return (
        <button>
            <Icon icon={faShoppingCart} />
            {moviesCartList.reduce(
                (acc, movie) => acc + movie.quantity,
                0
            )}
        </button>
    )
}

export default Cart