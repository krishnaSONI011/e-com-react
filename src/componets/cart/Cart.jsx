import React, { useState, useEffect } from "react";
import CartProduct from "./CartProduct";

let Cart = (props) => {
    let [total, setTotal] = useState(0);

    useEffect(() => {
        // Calculate total price based on fetched cart items
        let calculatedTotalPrice = 0;

        props.item.forEach((cart) => {
            calculatedTotalPrice += cart.qty * parseInt(cart.product.price);
        });

        setTotal(calculatedTotalPrice);
    }, [props.item]);

    function close() {
        props.setCart(-500);
    }

    return (
        <>
            <div className="sidebar overflow-hidden" style={{
                right: 0,
                display: props.mode === -500 ? "none" : "block",
                height: "100%"
            }}>
                <div className="inner-sidebar position-absolute" style={{
                    right: props.mode + "%",
                    width: "30%",
                    height: "100%"
                }}>
                    <div className="cart">
                        <div className="cart-title d-flex justify-content-between p-2 py-3 border-bottom">
                            <h3 className="font-1 fs-2">CART</h3>
                            <i className="bi bi-x fs-4 mouse-pointer" onClick={close}></i>
                        </div>
                        <div className="for-product border-bottom pt-3">
                            {props.item.map((cart, index) => (
                                <CartProduct
                                    key={index}
                                    cart={cart}
                                    setTotal={setTotal}
                                    total={total}
                                />
                            ))}
                        </div>
                        <div className="subtotle d-flex justify-content-between py-3">
                            <h6 className="font-2 space py-2">SUBTOTAL</h6>
                            <h6 className="font-1">Rs {total}</h6>
                        </div>
                        <p className="text-center" style={{ fontSize: "12px" }}>Shipping, taxes, and discount codes calculated at checkout. </p>
                        <div className="to-checkout">
                            <button className="shine-button bg-dark font-2 space w-100 text-light">PLACED ORDER<br /><span style={{ fontSize: "16px" }}>UPI/COD</span></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Cart;
