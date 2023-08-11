import React,{useState} from "react";

let CartProduct = () => {
    let [quantity, setQuantity] = useState(1);
    return (
        <>
            <div className="cart-product d-flex justify-content-between">
                <img src="https://www.snitch.co.in/cdn/shop/files/Snitch_sep21_0610_2332a499-efa6-45e8-b974-4034649daf2c_360x.jpg?v=1690380204" alt="" style={{ width: "30%" }} />
                <div className="cart-title ms-3">
                    <p>HIP HOP BLUE BAGGY CARGO JEANS</p>
                    <span><b>Size:</b>32</span>
                    <div className="d-flex align-items-center justify-content-between py-4 ">
                    <div className="quantity ">
            
                            <div className="q-box border " style={{
                    width:"45%"
                }}>
                    <span
                        className="fs-4    mouse-pointer q-point"
                        onClick={() => {
                            setQuantity(quantity + 1);
                        }}
                                    style={{
                                        padding:"5px 10px"
                                    }}
                    >
                        +
                    </span>
                    <span className="q-input">
                        <input
                            type="text"
                            value={quantity}
                             
                        />
                    </span>
                    <span
                        className="fs-4   mouse-pointer q-point"
                        onClick={(e) => {
                            setQuantity(quantity - 1)
                        }}
                    >
                        -
                    </span>
                </div>
                        </div>
                        <span style={{width:"34%"}}>Rs 1200</span>
                        </div>
                </div>
                
                </div>
        </>
    )
}
export default CartProduct;