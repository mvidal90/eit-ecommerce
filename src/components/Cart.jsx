import { useContext, useState } from "react"
import { faClose, faShoppingCart } from "@fortawesome/free-solid-svg-icons"

import { CartContext } from "../context/CartContext"

import Button from "./Button";
import Modal from "./Modal";

function Cart() {
    const { moviesCartList } = useContext(CartContext);
    const [open, setOpen] = useState(false)

    return (
        <>
            <div className="cart__container">
                <Button
                    icon={faShoppingCart}
                    className="cart__navbar-button"
                    action={() => setOpen(!open)}
                    disabled={!moviesCartList.length}
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
            <Modal show={open}>
                <div className="modal__header">
                    <Button
                        icon={faClose}
                        className="modal__close"
                        action={() => setOpen(!open)}
                    />
                </div>
            </Modal>
        </>
    )
}

export default Cart