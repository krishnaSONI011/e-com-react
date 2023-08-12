import React from "react";

let ProductVariation = (props) => {
    
    
    

    return (
        <>
            <div className="mt-2 mb-3">
                <p className="font-1 space">SIZE</p>
            </div>
            <span className="p-2 border px-3 mouse-pointer me-2" onClick={(e)=>props.setSize("S")}>S</span>
            <span className="p-2 border px-3 mouse-pointer me-2" onClick={(e)=>props.setSize("M")}>M</span>
            <span className="p-2 border px-3 mouse-pointer me-2" onClick={(e)=>props.setSize("L")}>L</span>
            <span className="p-2 border px-3 mouse-pointer me-2" onClick={(e)=>props.setSize("XL")}>XL</span>
            <div className="quantity mt-5">
                <p className="font-1 space">QUANTITY</p>
                <div className="q-box border my-2">
                    <span
                        className="fs-4    mouse-pointer q-point"
                        onClick={() => {
                            props.setQuantity(props.quantity + 1);
                        }}
                    >
                        +
                    </span>
                    <span className="q-input">
                        <input
                            type="text"
                            value={props.quantity}
                             
                        />
                    </span>
                    <span
                        className="fs-4   mouse-pointer q-point"
                        onClick={(e) => {
                            props.setQuantity(props.uantity - 1)
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
