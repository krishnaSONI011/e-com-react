import React,{useState,useEffect} from "react";
import { LuMapPin } from "react-icons/lu";
import AddressData from "./addressComps/AddressData";
import Form from './addressComps/Form';
import axios from 'axios'
import {useAuth} from "../context/authContext.js"

let Address = () => {
  let [auth] = useAuth()
  let user = auth.user.id
  let [show,setShow]= useState(true);
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
  },[])
  return (
    <>
      <div className="w-100">
        <div className="details w-100 p-4">
            <div className="show-address" style={{display:show ? "" : "none"}}>
                <div className="add-address details d-flex justify-content-center align-items-center flex-column">
                    <div className="add-mark fs-3">
                        <LuMapPin/>
                    </div>
                    <button className="address-line font-1 bg-dark text-light py-1 px-3 border-radius mt-1"
                    onClick={addAddress}
                    >
                        Add New Address
                    </button>
                </div>
                {/* dynamic address data*/}


                <div className="row mt-4">
                  {
                    address.map((a,key)=>(
                      
                      <AddressData setShow={setShow} firstname={a.firstname}
                      lastname={a.lastname} addressLine1={a.addressLine1} addressLine2={a.addressLine2} phone ={a.phone} state={a.state} country={a.country} postal={a.postal}
                      />
                    ))
                  }

                </div>
            </div>

            {/* Form of input here */}
            <div style={{
              display: show ? "none" : ""
            }}>
              <Form setShow={setShow}
                data={data}
              />
            </div>
        </div>
      </div>
    </>
  );
};
export default Address;
