import React from "react";
import { Routes, Route,Outlet } from 'react-router-dom';
import Accnavcomp from "./Acc_navComp";
import UserInfo from "./UserInfo";
import { useAuth } from '../context/authContext.js'
import Address from "./Address";

let Account = () => {
    let [auth] = useAuth();
        return (
        <div className="container d-flex">
            <Accnavcomp />
            <div className="p-2 ms-4 " style={{width:"64%"}}>
                <p className="text-center mb-4"><span className="" style={{fontSize:"30px"}}>Good Morning!</span> <span style={{fontSize:"30px"}}>{auth.user.firstname ?auth.user.firstname.toUpperCase() : "Name"} { + ` ` + auth.user.lastname ? auth.user.lastname.toUpperCase() : "sername"}</span></p>
                <div className="elements">
                
                <Routes>
                        <Route path="/user-info" element={<UserInfo />} ></Route>
                        <Route path="/address" element={<Address/>} ></Route>
                        </Routes>
                    <Outlet/>

                </div>
            </div>
        </div>
    )
}

export default Account;
