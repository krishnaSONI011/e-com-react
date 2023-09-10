import React, { useState } from "react";
import { LuClipboardEdit, LuX } from "react-icons/lu";
import { useAuth } from '../context/authContext.js'

export default function UserInfo() {
  let [auth] = useAuth()
  let [editable, setEditable] = useState(true);
  let [firstname,setFirstname]=useState(auth.user.firstname);
  let [lastname,setLastname]=useState(auth.user.lastname);
  let [phone,setPhone]=useState(auth.user.phone);
  let [email,setEmail]=useState(auth.user.email)
  
  function click() {
    editable ? setEditable(false) : setEditable(true);
  }
  return (
    <div className="w-100">
      <div className="details w-100 p-4">
        <div>
          <p className="text-end pe-4 fs-5 ">
            {editable ? (
              <LuClipboardEdit className="mouse-pointer" onClick={click} />
            ) : (
              <LuX className="mouse-pointer" onClick={click} />
            )}
          </p>
        </div>
        {/* Form feild */}
        <div className="d-flex w-100 justify-content-around">
          <div className="forfrom">
            <label htmlFor="email" className="font-1 space py-3 ">
              FirstName
            </label>
            <br></br>
            <input
              type="text"
              className="form-controler "
              readOnly={editable}
              value={firstname}
              onChange={(e)=>setFirstname(e.target.value)}
            />
          </div>
          <div className="forfrom">
            <label htmlFor="email" className="font-1 space py-3">
              LastName
            </label>
            <br></br>
            <input
              type="text"
              className="form-controler "
              readOnly={editable}
              value={lastname}
              onChange={(e)=>setLastname(e.target.value)}

            />
          </div>
        </div>
        <div className="d-flex w-100 justify-content-around mb-2">
          <div className="forfrom">
            <label htmlFor="email" className="font-1 space py-3 ">
              Email
            </label>
            <br></br>
            <input
              type="email"
              className="form-controler "
              readOnly={editable}
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              
            />
          </div>
          <div className="forfrom">
            <label htmlFor="email" className="font-1 space py-3">
              Phone
            </label>
            <br></br>
            <input
              type="text"
              className="form-controler "
              readOnly={editable}
              value={phone}
              onChange={(e)=>setPhone(e.target.value)}

            />
          </div>
        </div>
        {/* Button */}
        <div
          className="text-center"
          style={{
            display: `${editable ? "none" : "block"}`,
          }}
        >
          <button className="shine-button bg-dark py-2 px-3 text-light my-4">
            SAVE
          </button>
        </div>
      </div>
    </div>
  );
}
