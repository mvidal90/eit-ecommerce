import { useContext, useState } from "react"
import { faClose, faDollar, faShoppingCart } from "@fortawesome/free-solid-svg-icons"

import { CartContext } from "../context/CartContext"

import Button from "./Button";
import Modal from "./Modal";
import CartItem from "./CartItem";

function Cart() {
    const { productsCartList, resetCart } = useContext(CartContext);
    const [open, setOpen] = useState(false)
    
    return (
        <>
            <div className="cart__container">
                <Button
                    icon={faShoppingCart}
                    className="cart__navbar-button"
                    action={() => setOpen(!open)}
                    disabled={!productsCartList.length}
                />
                {
                    productsCartList.length ?
                        <div className="cart__badge">
                            <span>
                                {productsCartList.reduce(
                                    (acc, movie) => acc + movie.quantity,
                                    0
                                )}
                            </span>
                        </div>
                    : undefined 
                }
            </div>
            <Modal show={open} onClose={()=>setOpen(false)}>
                <>
                    <div className="modal__header">
                        <Button
                            icon={faClose}
                            className="modal__close"
                            action={() => setOpen(!open)}
                        />
                    </div>
                    {
                        productsCartList.map(
                            data =>
                                <CartItem
                                    key={data.product._id}
                                    {...data}
                                />
                        )
                    }
                    <div className="modal__footer">
                        <Button
                            icon={faDollar}
                            className="modal__btn-buy"
                            label="Comprar"
                            action={() => {
                                resetCart()
                                setOpen(!open)
                            }}
                        />
                    </div>
                </>
            </Modal>
        </>
    )
}

export default Cart