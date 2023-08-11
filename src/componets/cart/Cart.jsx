import React from "react";
import CartProduct from "./CartProduct";

let Cart = (props) => {
    
    return (
        <>
            <div className="sidebar" style={{
            right:props.mode
            }}>
                <div className="inner-sidebar position-absolute " style={{
                    right: 0,
                    width:"30%"
                }}>
                    <div className="cart">
                        <div className="cart-title d-flex justify-content-between p-2 py-3 border-bottom">
                            <h3 className="font-1 fs-2">CART</h3>
                            <i className="bi bi-x fs-4"></i>
                        </div>
                        <div className="for-product overflow-scroll border-bottom pt-3">
                                <CartProduct/>
                        </div>
                        <div className="subtotle d-flex justify-content-between py-3">
                            <h6 className="font-2 space py-2">SUBTOTAL</h6>
                            <h6 className="font-1 ">Rs 1200</h6>
                           
                        </div>
                        <p className="text-center" style={{ fontSize: "12px" }}>Shipping, taxes, and discount codes calculated at checkout. </p>
                        <div className="to-checkout">
                            <button className="shine-button bg-dark font-2 space w-100 text-light">PLACED ORDER<br></br><span style={{fontSize:"16px"}}>UPI/COD</span></button>
                        </div>
                    </div>
                 </div>
            </div>
        </>
    )
}
export default Cart;