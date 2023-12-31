import React,{useState,useEffect} from "react";
import { LuMapPin } from "react-icons/lu";
import AddressData from "./addressComps/AddressData";
import Form from './addressComps/Form';
import axios from 'axios'
import {Routes, Route,Outlet,Link} from 'react-router-dom'
import Delete from "./addressComps/Delete";

// import {useAuth} from "../context/authContext.js"

let Address = () => {
 
  let auth = JSON.parse(localStorage.getItem('auth'))
  let user = auth.user.id

  let [show,setShow]= useState(true);
  let [show2,setShow2]= useState(true);
  let [data,setData] = useState({
    id:'',
    btn:''
  })
  let [address,setAddress] = useState([])
  let addAddress = ()=>{
    setShow(false);
    setData({
      id:"",
      btn:"new"
    });
  }

  useEffect(()=>{
  async  function fetch(){
    try{
      let res = await axios.post("http://localhost:8080/api/address/get",{user});
      if(res.data.success){
        setAddress(res.data.data)
        console.log(res.data)
      }
    }
    catch(err){
      console.log(err)
    }
   }
   fetch()
  },[show,show2]);

  return (
    <>
      
      <div className="w-100">
        <div className="details w-100 p-4">
            <div className="show-address" style={{display:show ? "" : "none"}}>
                <div className="add-address details d-flex justify-content-center align-items-center flex-column">
                    <div className="add-mark fs-3">
                        <LuMapPin/>
                    </div>
                    <Link to={"/account/address/from"}><button className="address-line font-1 bg-dark text-light py-1 px-3 border-radius mt-1"
                    onClick={addAddress}
                    >
                        Add New Address
                    </button></Link>
                </div>
                {/* dynamic address data*/}


                <div className="row mt-4">
                  {
                    address.map((a,index)=>(
                      
                      <AddressData setShow={setShow} firstname={a.firstname}
                      lastname={a.lastname} addressLine1={a.addressLine1} addressLine2={a.addressLine2} phone ={a.phone} state={a.state} country={a.country} postal={a.postal} key={index}
                      id={a._id} city={a.city} setData = {setData}
                      />
                    ))
                  }

                </div>
            </div>

            {/* Form of input here */}
            <div style={{
              display: show ? "none" : ""
            }}>
              <Routes>
                <Route path={'/from'} element={<Form setShow={setShow}
                data={data}
              />}></Route>
              
              </Routes>
              <Outlet/>
            </div>
            <Routes>
            <Route path="/delete" element={<Delete setShow2={setShow2} />}  />
              
            </Routes>
            <Outlet/>
        </div>
      </div>
    </>
  );
};
export default Address;
