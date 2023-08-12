import React from "react";
import axios from 'axios';

let ProductAddtocart =(props)=>{
    function check(){
        let data =localStorage.getItem("auth")
        let parsedData = JSON.parse(data)
        let user = parsedData.user.id;
        console.log(user)
    }
  async  function addtocart(){
   try{
        
        let data =localStorage.getItem("auth")
        let parsedData = JSON.parse(data)
        let user = parsedData.user.id;
        let product = props.productId;
        let size = props.size;
        let qty = props.quantity;
        let res = await axios.post("http://localhost:8080/api/cart/add-cart",{user,product,qty,size})
        console.log(res.data.message)
    }
        catch(err){
            console.log(err)
        }
    }
return(
    <>
    <button className="shine-button bg-dark text-light w-100 p-2 my-3" onClick={addtocart}>Add to cart</button>
    <button className="w-100 p-2 bg-transparent" onClick={check}><i className="bi bi-heart "></i> Wishlist</button>
    </>
)
}
export default ProductAddtocart;
