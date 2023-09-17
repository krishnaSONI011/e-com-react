import React from 'react'
import Svg from './passwordcomp/Svg';

let ChangePass = () =>{
    let auth = JSON.parse(localStorage.getItem("auth"));
    return(
        <>
        <div className='w-100'>
            <div className='details w-100 py-4'>
               <div className="svg text-center">
                <Svg />
                <p className='mt-2 font-1'>Update your password for</p>
                <p className='fs-5 fw-medium'>{auth.user.email}</p>
               </div>
               {/* password feild */}
                <div className='d-flex justify-content-center '>
                    <div className='w-50'>
                        <div className="d-flex flex-column align-items-start">
                        <label htmlFor="pass" className='font-1'>New password</label>
                        <input type="password" className='form-control' placeholder='New password'/>
                    </div>
                        <div className="d-flex flex-column align-items-start mt-2">
                        <label htmlFor="pass" className='font-1'>Confirm New Password</label>
                        <input type="password" className='form-control' placeholder='Confirm New Password'/>
                    </div>
                    </div>
                    
                </div>

                {/* button to save */}

                <div className='text-center mt-5'>
                    <button className='bg-dark text-light shine-button py-2 '>Update Password</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default ChangePass ; 