import React, { useState } from "react";

let ProductVariation = () => {
    let [quantity, setQuantity] = useState(1);

    

    return (
        <>
            <div className="mt-2 mb-3">
                <p className="font-1 space">SIZE</p>
            </div>
            <span className="p-2 border px-3 mouse-pointer me-2">S</span>
            <span className="p-2 border px-3 mouse-pointer me-2">M</span>
            <span className="p-2 border px-3 mouse-pointer me-2">L</span>
            <span className="p-2 border px-3 mouse-pointer me-2">XL</span>
            <div className="quantity mt-5">
                <p className="font-1 space">QUANTITY</p>
                <div className="q-box border my-2">
                    <span
                        className="fs-4    mouse-pointer q-point"
                        onClick={() => {
                            setQuantity(quantity + 1);
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
        </>
    );
};

export default ProductVariation;
