import React,{useState} from 'react'
import { LuXCircle } from "react-icons/lu";
import axios from 'axios';
import {useAuth} from '../../context/authContext.js'

let Form = props =>{
    
    let [auth] = useAuth()
   console.log(auth.user)
    function  hide(){
        props.setShow(true)
    }
    let [firstname,setFirstname] = useState(props.data.btn === "new" ? "" : props.firstname)
    let [lastname,setLastname] = useState(props.data.btn === "new" ? "" : props.lastname)
    let [addressLine1,setAddressLine1] = useState(props.data.btn === "new" ? "" : props.addressLine1)
    let [addressLine2,setAddressLine2] = useState(props.data.btn === "new" ? "" : props.addressLine2)
    let [company,setCompany] = useState(props.data.btn === "new" ? "" : props.company)
    let [postal,setPostal] = useState(props.data.btn === "new" ? "" : props.postal)
    let [phone,setPhone] = useState(props.data.btn === "new" ? "" : props.phone)
    let [city,setCity] = useState(props.data.btn === "new" ? "" : props.city)
    let [country,setCountry] = useState(props.data.btn === "new" ? "" : props.country)
    let [state,setState] = useState(props.data.btn === "new" ? "" : props.state);


    // function to save data;
 async function save(){
    try{
        let res = await axios.post("http://localhost:8080/api/address/add",{
            user:auth.user.id,
            firstname,
            lastname,
            addressLine1,
            addressLine2,
            company,
            postal,
            phone,
            city,
            country,
            state
        });
        console.log(res.data.message)
        if(res.data.success){

            props.setShow(true)
        }
    }catch(err) {
        console.log(err)
    }
 }
 function update(){
    try{

    }
    catch(err){
        console.log(err)
    }
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
                            <input type="text" className='form-control w-90' value={firstname} onChange={(e)=>setFirstname(e.target.value)}/>
                        </div>
                        <div className='d-flex flex-column w-50'>
                            <label htmlFor="sername" className='font-1'>LastName</label>
                            <input type="text" className='form-control w-90'value={lastname} onChange={(e)=>setLastname(e.target.value)}/>
                        </div>
                    </div>
                    {/* address line 1 and addressline 2 */}
                    <div className='d-flex mt-3'>
                        <div className='d-flex flex-column w-50'>
                            <label htmlFor="address1" className='font-1'>Address Line 1</label>
                            <input type="text" className='form-control w-90' value={addressLine1} onChange={(e)=>setAddressLine1(e.target.value)}/>
                        </div>
                        <div className='d-flex flex-column w-50'>
                            <label htmlFor="address2" className='font-1'>Address Line 2</label>
                            <input type="text" className='form-control w-90' value={addressLine2} onChange={(e)=>setAddressLine2(e.target.value)}/>
                        </div>
                    </div>

                    {/* company post and phone */}

                    <div className='d-flex mt-3 justify-content-between'>
                        <div className='d-flex flex-column'>
                            <label htmlFor="company" className='font-1'>Company</label>
                            <input type="text" className='form-control w-100' value={company} onChange={(e)=>setCompany(e.target.value)}/>

                        </div>
                        <div className='d-flex flex-column'>
                            <label htmlFor="postal" className='font-1'>Postal/zip Code</label>
                            <input type="text" className='form-control w-100' value={postal} onChange={(e)=>setPostal(e.target.value)} />

                        </div>
                        <div className='d-flex flex-column'>
                            <label htmlFor="phone" className='font-1'>Mobile</label>
                            <input type="text" className='form-control w-100' value={phone} onChange={(e)=>setPhone(e.target.value)}/>

                        </div>

                        
                    </div>

                    {/* city country and state */}
                    <div className='d-flex mt-3 justify-content-between'>
                        <div className='d-flex flex-column'>
                            <label htmlFor="City" className='font-1'>City</label>
                            <input type="text" className='form-control w-100' value={city} onChange={(e)=>setCity(e.target.value)}/>

                        </div>
                        <div className='d-flex flex-column'>
                            <label htmlFor="country" className='font-1'>Country</label>
                            <input type="text" className='form-control w-100' value={country} onChange={(e)=>setCountry(e.target.value)}/>

                        </div>
                        <div className='d-flex flex-column'>
                            <label htmlFor="state" className='font-1'>State</label>
                            <input type="text" className='form-control w-100' value={state} onChange={(e)=>setState(e.target.value)}/>

                        </div>

                        
                    </div>

                    {/* Submit button  */}

                    <div className='w-100 text-end mt-4'>
                        <button className='font-1 shine-button bg-dark text-light px-5 py-2 space' 
                        onClick={props.data.btn ==="new" ? save : update}
                        >
                            Save
                        </button>
                    </div>
            </div>
        </>
    )
}
export default Form;