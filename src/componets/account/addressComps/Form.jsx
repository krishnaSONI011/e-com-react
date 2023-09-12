import React from 'react'
import { LuXCircle } from "react-icons/lu";
let Form = props =>{
    function  hide(){
        props.setShow(true)
    }
    return(
        <>
        <div className="heading row w-100">
            {/* Heading here */}
                <div className='col-md-7 col-sm-7'>
                    <p className='font-1 text-end' style={{
                        fontSize:"20px"
                    }}>Edit Address</p>

                </div>
                    <div className='col-md-5 text-end col-sm-5 fs-5 '>
                    <button className='bg-trans' onClick={hide}><LuXCircle/></button>
                    </div>
                    {/* Cross button */}

              </div>

            {/* form here */}
            <div className='mt-4'>
                {/* Name and last name */}
                    <div className='d-flex'>
                        <div className='d-flex flex-column w-50'>
                            <label htmlFor="name" className='font-1'>FirstName</label>
                            <input type="text" className='form-control w-90'/>
                        </div>
                        <div className='d-flex flex-column w-50'>
                            <label htmlFor="sername" className='font-1'>LastName</label>
                            <input type="text" className='form-control w-90'/>
                        </div>
                    </div>
                    {/* address line 1 and addressline 2 */}
                    <div className='d-flex mt-3'>
                        <div className='d-flex flex-column w-50'>
                            <label htmlFor="address1" className='font-1'>Address Line 1</label>
                            <input type="text" className='form-control w-90'/>
                        </div>
                        <div className='d-flex flex-column w-50'>
                            <label htmlFor="address2" className='font-1'>Address Line 2</label>
                            <input type="text" className='form-control w-90'/>
                        </div>
                    </div>

                    {/* company post and phone */}

                    <div className='d-flex mt-3 justify-content-between'>
                        <div className='d-flex flex-column'>
                            <label htmlFor="company" className='font-1'>Company</label>
                            <input type="text" className='form-control w-100' />

                        </div>
                        <div className='d-flex flex-column'>
                            <label htmlFor="postal" className='font-1'>Postal/zip Code</label>
                            <input type="text" className='form-control w-100' />

                        </div>
                        <div className='d-flex flex-column'>
                            <label htmlFor="phone" className='font-1'>Mobile</label>
                            <input type="text" className='form-control w-100' />

                        </div>

                        
                    </div>

                    {/* city country and state */}
                    <div className='d-flex mt-3 justify-content-between'>
                        <div className='d-flex flex-column'>
                            <label htmlFor="City" className='font-1'>City</label>
                            <input type="text" className='form-control w-100' />

                        </div>
                        <div className='d-flex flex-column'>
                            <label htmlFor="country" className='font-1'>Country</label>
                            <input type="text" className='form-control w-100' />

                        </div>
                        <div className='d-flex flex-column'>
                            <label htmlFor="state" className='font-1'>State</label>
                            <input type="text" className='form-control w-100' />

                        </div>

                        
                    </div>

                    {/* Submit button  */}

                    <div className='w-100 text-end mt-4'>
                        <button className='font-1 shine-button bg-dark text-light px-5 py-2 space' >
                            Save
                        </button>
                    </div>
            </div>
        </>
    )
}
export default Form;