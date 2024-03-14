import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"

import Icon from "./Icon"

function Cart() {
    return (
        <button>
            <Icon icon={faShoppingCart} />
        </button>
    )
}

export default Cart