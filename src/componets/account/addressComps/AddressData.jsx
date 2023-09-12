import React from 'react';
import { LuPen,LuX } from "react-icons/lu";

export default function AddressData(props) {

  return (
   <>
   <div className="col-md-4">
                    <div className="add-address details p-2">
                        {/* top bar */}
                            <div className='d-flex justify-content-end'>
                                    <p className='me-2 fs-5 mouse-pointer' onClick={()=>{props.setShow(false)}}><LuPen/></p>
                                    <p className='fs-5 mouse-pointer'><LuX/></p>
                            </div>
                                {/* details */}
                            <div className='text-start'>
                            <p>krishna soni</p>
                            <p>sarafa bazar</p>
                            <p>deeg</p>
                            <p>Rajasthan India</p>
                            <p>321203</p>
                            <p>9549990097</p>
                            </div>
                    </div>
                  </div>
   </>
  )
}
