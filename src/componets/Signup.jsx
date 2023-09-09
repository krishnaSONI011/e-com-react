import React,{useState} from "react"
import {Link} from 'react-router-dom'
const Signup =  ()=>{
    let [email,setEmail]= useState("");
    let [password,setPassword]=useState("");
    let [fname,setFname]= useState("");
    let [lname,setLname]=useState("");
    let [mobile,setMobile]=useState("");
    function signup(){
        
    }
    return(
        <div className='d-flex justify-content-center align-items-center flex-column d-full'>
      <h1 className='font-2 t'>REGISTER</h1>
      <div className="d-flex flex-column align-items-center w-100">

        <div className='forfrom'>
        <label htmlFor="Name" className='font-1 space py-3'>
            First Name 
        </label><br></br>
        <input type="First Name" className='form-controler 'onChange={(e)=>setFname(e.target.value)}/>
        </div>
        <div className='forfrom'>
        <label htmlFor="last-Name" className='font-1 space py-3'>
            Last Name 
        </label><br></br>
        <input type="last-Name" className='form-controler 'onChange={(e)=>setLname(e.target.value)}/>
        </div>
        <div className='forfrom'>
        <label htmlFor="email" className='font-1 space py-3'>
            Email
        </label><br></br>
        <input type="email" className='form-controler 'onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div className='forfrom'>
        <label htmlFor="Mobile" className='font-1 space py-3'>
            Mobile
        </label><br></br>
        <input type="Mobile" className='form-controler 'onChange={(e)=>setMobile(e.target.value)}/>
        </div>
        <div className='forfrom mt-3'>
        <label htmlFor="email" className='font-1 space py-3'>
            Password
        </label><br></br>
          <input type="password" className='form-controler ' onChange={(e)=>setPassword(e.target.value) } />
        </div>
        <div className='forfrom'>
            <button className='w-100 bg-dark text-white font-1 shine-button p-3 mt-4' onClick={signup}>SIGN UP</button>
           <Link to="/auth/login"> <button className='bg-trans w-100 font-1 mt-3'>Already Have an account ?</button>
        </Link></div>

      </div>
    </div>
    )
}
export default Signup;