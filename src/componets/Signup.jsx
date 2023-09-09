import React,{useState} from "react"
import {Link,useNavigate} from 'react-router-dom'
import axios from 'axios'
const Signup =  ()=>{
    // setting values 


    let [email,setEmail]= useState("");
    let [password,setPassword]=useState("");
    let [firstname,setFname]= useState("");
    let [lastname,setLname]=useState("");
    let [phone,setMobile]=useState("");
    const navigate = useNavigate();


    // on click action is here 



    async function signup(){
        try{
        const res = await axios.post("http://localhost:8080/api/auth/register",{firstname,email,password,phone,lastname});
        if(res.data.success){
            navigate("/auth/login")
        }
        }
        catch(error){
            console.log(error)
        }
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