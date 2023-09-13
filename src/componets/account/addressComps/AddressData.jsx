import React from 'react';
import { LuPen,LuX } from "react-icons/lu";

export default function AddressData(props) {

  return (
   <>
   <div className="col-md-4" key={props.key}>
                    <div className="add-address details p-2">
                        {/* top bar */}
                            <div className='d-flex justify-content-end'>
                                    <p className='me-2 fs-5 mouse-pointer' onClick={()=>{props.setShow(false)}}><LuPen/></p>
                                    <p className='fs-5 mouse-pointer'><LuX/></p>
                            </div>
                                {/* details */}
                            <div className='text-start'>
                            <p>{props.firstname}{` ` +  props.lastname} </p>
                            <p>{props.addressLine1}</p>
                            <p>{props.addresssLine2}</p>
                            <p>{props.state}{` `+ props.country}</p>
                            <p>{props.postal}</p>
                            <p>{props.phone}</p>
                            </div>
                    </div>
                  </div>
   </>
  )
}
