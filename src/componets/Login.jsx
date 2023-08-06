import React from 'react'

export default function Login() {
  return (
    <div className='d-flex justify-content-center align-items-center flex-column d-full'>
      <h1 className='font-2 t'>LOGIN</h1>
      <div className="d-flex flex-column align-items-center w-100">

        <div className='forfrom'>
        <label htmlFor="email" className='font-1 space py-3'>
            Email
        </label><br></br>
        <input type="email" className='form-controler '/>
        </div>
        <div className='forfrom mt-3'>
        <label htmlFor="email" className='font-1 space py-3'>
            Password
        </label><br></br>
        <input type="password" className='form-controler '/>
        </div>
        <div className='forfrom'>
            <button className='w-100 bg-dark text-white font-1 shine-button p-3 mt-4'>SIGN IN</button>
            <button className='bg-trans w-100 font-1 mt-3'>Create an account</button>
        </div>

      </div>
    </div>
  )
}
