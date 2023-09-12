import React,{useState} from "react";
import { LuMapPin } from "react-icons/lu";
import AddressData from "./addressComps/AddressData";
import Form from './addressComps/Form'
let Address = () => {
  let [show,setShow]= useState(true);

  let addAddress = ()=>{
    setShow(false);
  }
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
                  <AddressData setShow={setShow}/>

                </div>
            </div>

            {/* Form of input here */}
            <div style={{
              display: show ? "none" : ""
            }}>
              <Form setShow={setShow}/>
            </div>
        </div>
      </div>
    </>
  );
};
export default Address;
