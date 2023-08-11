import React from "react";
import ProductVariation from "./ProdectVariation";
import ProductAccord from "./ProductAccord";
import ProductAddtocart from "./ProductAddtocart";
import ProductHeading from "./ProductHeading";
import ProductImages from "./ProductImages";
import axios from 'axios';
import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";
let Single_product = ()=>{
    let [data,setData]= useState([])
    let {slug} = useParams();
    useEffect(()=>{
        async function fetch(){
           
        let res = await axios.get(`http://localhost:8080/api/product/${slug}`)
        setData(res.data.product)
        }
        fetch()
    },[])
    return(
        <>
        <div className="container-fluid">
            <div className="d-flex justify-content-evenly">
            <ProductImages image={data.image}/>
            <div className="summary">
                <div className="product-meta border-bottom pb-4">
                <ProductHeading heading={data.name} 
            price={data.price}
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