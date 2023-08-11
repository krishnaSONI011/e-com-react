import React from "react";

let ProductHeading = props=>{
    return(
<>
<div>
<p className="font-2 product-h fs-2">{props.heading}</p>
</div>
<div className="description">
    <span className="pt-4 ">Rs {props.price}</span>
<p className="py-3">
or<b> 4</b> monthly payments of<b> ₹225 </b>with<br></br>
<span className="text-gray">Credit card NOT required, Online approval in 2 minutes</span><br></br>
<span className="text-danger">Flat 15% cashback up to ₹1000.</span><b className="mouse-pointer"><u> T&C</u></b> 
</p>
</div>
</>
    )
}
export default ProductHeading;
