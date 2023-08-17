import React from "react";
import { Routes, Route } from 'react-router-dom';
import Accnavcomp from "./Acc_navComp";
import UserInfo from "./UserInfo";
import CheckRoute from "./CheckRoute";

let Account = () => {
    return (
        <div className="container d-flex">
            <Accnavcomp />
            <div className="p-2">
                Good Morning! Krishna
                <div className="elements">
                <Routes>
                        <Route path="/account/user-info" element={<UserInfo />} ></Route>
                    <Route path="/account/check" element={<CheckRoute/>} ></Route>
                        
                    
                </Routes>

                </div>
            </div>
        </div>
    )
}

export default Account;
