import React from "react";

let ProductImages = (props)=>{
return(
    <>
    
        <img src={`http://localhost:8080/${props.image}`} alt="nsme" style={{width:"34%"}}/>
   
    </>
)
}
export default ProductImages;