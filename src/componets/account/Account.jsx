import React from "react";
import { Routes, Route,Outlet } from 'react-router-dom';
import Accnavcomp from "./Acc_navComp";
import UserInfo from "./UserInfo";


let Account = () => {
    return (
        <div className="container d-flex">
            <Accnavcomp />
            <div className="p-2">
                Good Morning! Krishna
                <div className="elements">
                
                <Routes>
                        <Route path="/user-info" element={<UserInfo />} ></Route>
                        </Routes>
                    <Outlet/>

                </div>
            </div>
        </div>
    )
}

export default Account;
