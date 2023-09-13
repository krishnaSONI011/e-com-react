import React from 'react';
import { LuPen,LuX } from "react-icons/lu";
import {Link} from 'react-router-dom'
export default function AddressData(props) {
 
  
function updatePen(){
  let address = [props.firstname,props.lastname,props.addressLine1,props.addressLine2,props.state,props.country,props.postal,props.phone,props.city];
  localStorage.setItem('address',JSON.stringify(address));
  props.setData({
    
   id:props.id,
   btn:"update"
  })
  props.setShow(false);
}
  return (
   <>
   <div className="col-md-4" key={props.key}>
                    <div className="add-address details p-2">
                        {/* top bar */}
                            <div className='d-flex justify-content-end'>
                                  <Link to={"/account/address/from"} className="text-dark">  <p className='me-2 fs-5 mouse-pointer' onClick={updatePen}><LuPen/></p></Link>
                                    <p className='fs-5 mouse-pointer'><LuX/></p>
                            </div>
                                {/* details */}
                            <div className='text-start'>
                            <p>{props.firstname}{` ` +  props.lastname} </p>
                            <p>{props.addressLine1}</p>
                            <p>{props.addressLine2}</p>
                            <p>{props.city}</p>
                            <p>{props.state}{` `+ props.country}</p>
                            <p>{props.postal}</p>
                            <p>{props.phone}</p>
                            </div>
                    </div>
                  </div>
   </>
  )
}
