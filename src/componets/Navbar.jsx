import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import Sidebar from './Sidebar'
import { useAuth } from './context/authContext'
import Cart from './cart/Cart';
import axios from 'axios'


export default function Navbar() {
  let [open, setOpen] = useState(-200)
  let [cart,setCart] = useState(-500);
  let [item, setItem] = useState([]);
  let [auth]=useAuth()
  function sideOpener(){
       setOpen(0)
  }
  async function openCart() {
    setCart(0);

    try {
        let user = auth.user.id;

        let cartItemsResponse = await axios.post("http://localhost:8080/api/cart/get-item", { user });

        const cartItemsData = cartItemsResponse.data.data; // Access the 'data' property

        if (Array.isArray(cartItemsData)) {
            const cartWithProducts = await Promise.all(
                cartItemsData.map(async (cartItem) => {
                    const productResponse = await axios.post("http://localhost:8080/api/product/single-product", { id: cartItem.product });
                    const product = productResponse.data.product;

                    return { ...cartItem, product };
                })
            );

            setItem(cartWithProducts);
        } else {
            console.error("API response does not contain an array of cart items:", cartItemsData);
        }
    } catch (err) {
        console.log(err);
    }
}


  return (
    <>
      <Sidebar mode={open} setOpen={setOpen} />
      {/* <Cart mode={cart} setCart={setCart} item={item} cartItem={openCart} /> */}
      <Cart mode={cart} setCart={setCart} item={item} cartItem={openCart} fetchCartItems={openCart} />

    <div className='topbar font-1 text-center'>
      <span>SHOP FOR RS 3999/- & Get FLAT 15% OFF</span>
      <span>USE CODE: SHOP15</span>
    </div>
  <nav>
      <div className="d-flex justify-content-between align-items-center">
      <div className="site-nav">
                  <button className="ham-style" onClick={()=>sideOpener(-200)}><i className="fa-solid fa-bars"></i></button>
      </div>
      <div className="site-logo">
        <Link to="/" className='text-decoration-none'><span className='text-decoration-none text-dark fs-2'>E-COM</span></Link>
      </div>
      <div className="w-9">
      <div className="d-flex justify-content-evenly icon-sizer-1">
     <Link to={auth.user == null?"auth/login" : "/account"} className='text-dark'> <i className="fa-regular fa-user"></i></Link>
            <i className="bi bi-search"></i>

            <i className="bi bi-heart"></i>

      <i className="bi bi-camera"></i>
      <i className="bi bi-bag mouse-pointer " onClick={openCart}></i><span className='point' style={{
        display:"none"
      }}></span>
      </div>
      </div>
      </div>
      </nav>
      
    </>
  )
}
