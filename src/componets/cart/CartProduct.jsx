import React,{useEffect,useState} from "react";
import axios from 'axios'
let CartProduct = (props) => {
     const [quantity, setQuantity] = useState(parseInt(props.cart.qty));
    let deleteFun = async (id) => {
        try {
            let res = await axios.delete("http://localhost:8080/api/cart/delete-item", { id })
            console.log(res.data)
               console.log(id)
               props.fetchCartItems();
           
        } catch (err) {
            console.log(err)
         }
        
     }
    useEffect(() => {
        // Calculate and update the total for this specific cart item
        const unitPrice = parseInt(props.cart.product.price);
        const newTotal = unitPrice * quantity;
        props.setTotal(props.total + (newTotal - (unitPrice * props.cart.qty)));
    }, [quantity]);
    return (
        <>
            <div className="cart-product d-flex justify-content-between my-3">
                <img src={`http://localhost:8080/${props.cart.product.image}`} alt="" style={{ width: "30%" }} />
                <div className="cart-title ms-3">
                    <p>{props.cart.product.name}</p>
                    
                    <span><b>Size:</b> {props.cart.size}</span>
                    <div className="d-flex align-items-center justify-content-between py-4 ">
                        <div className="quantity ">
                            <div className="q-box border d-flex align-items-center justify-content-between" style={{ width: "57%" }}>
                                <span className="fs-4 mouse-pointer q-point" onClick={() => { setQuantity(parseInt(quantity) + 1); }} style={{ padding: "5px 10px" }}>+</span>
                                <span className="q-input text-center">
                                    <input type="text" value={quantity} />
                                </span>
                                <span className="fs-4 mouse-pointer q-point" style={{ padding: "5px 10px" }} onClick={() => { if (parseInt(quantity)  > 1) { setQuantity(parseInt(quantity)  - 1); } }}>-</span>
                            </div>
                        </div>
                        <span style={{ width: "34%" }}>Rs {props.cart.product.price}</span>
                        <span className="bg-danger text-light rounded mouse-pointer" onClick={()=>{deleteFun(props.cart._id)}}><i className="bi bi-trash"></i></span>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CartProduct;
