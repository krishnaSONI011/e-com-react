import React from "react";
import ProductVariation from "./ProdectVariation";
import ProductAccord from "./ProductAccord";
import ProductAddtocart from "./ProductAddtocart";
import ProductHeading from "./ProductHeading";
import ProductImages from "./ProductImages";

let Single_product = ()=>{
    return(
        <>
        <div className="container-fluid">
            <div className="d-flex justify-content-evenly">
            <ProductImages/>
            <div className="summary">
                <div className="product-meta border-bottom pb-4">
                <ProductHeading heading={"IVORY EMBRACE MAROON OXFORD SHIRT"} 
            price={"Rs 800"}
            />
                </div>
           
            <div className="variastion ">
               <ProductVariation/>
               </div>
               <div className="product-accord w-100">
                <ProductAccord/>
                
               </div>
               <div className="addtocartmeta">
                <ProductAddtocart/>
               </div>
            </div>
            
            </div>

       
        </div>
        </>
    )
}
export default Single_product