import React,{useState,} from 'react';
import { useAuth } from './context/authContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
export default function Login() {
  let navigate = useNavigate();
  let [auth,setAuth]=useAuth()
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');
  let sendData = async () => {
    try {
      let res = await axios.post("http://localhost:8080/api/auth/login", { email, password });
      setAuth({...auth,
        user:res.data.user,
        token:res.data.token
      })
      console.log("hmm ")
      localStorage.setItem('auth',JSON.stringify(res.data))
      navigate("/")
    } catch (e) {
      console.log(e)
    }
  }
  return (
    <div className='d-flex justify-content-center align-items-center flex-column d-full'>
      <h1 className='font-2 t'>LOGIN</h1>
      <div className="d-flex flex-column align-items-center w-100">

        <div className='forfrom'>
        <label htmlFor="email" className='font-1 space py-3'>
            Email
        </label><br></br>
        <input type="email" className='form-controler 'onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div className='forfrom mt-3'>
        <label htmlFor="email" className='font-1 space py-3'>
            Password
        </label><br></br>
          <input type="password" className='form-controler ' onChange={(e)=>setPassword(e.target.value) } />
        </div>
        <div className='forfrom'>
            <button className='w-100 bg-dark text-white font-1 shine-button p-3 mt-4' onClick={sendData}>SIGN IN</button>
            <button className='bg-trans w-100 font-1 mt-3'>Create an account</button>
        </div>

      </div>
    </div>
  )
}
