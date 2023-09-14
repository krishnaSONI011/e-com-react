import React,{useState}  from "react";
import { LuX } from "react-icons/lu";
import {useNavigate} from 'react-router-dom'
let Delete = ()=>{
    let navigate = useNavigate()
    let[scroll] = useState(window.scrollY)

    function xbtn(){
        navigate("/account/address");
    }
    return(
        <>
        <div className="delete d-flex justify-content-center align-items-center"  style={{
            top:scroll
        }}>
           <div className="d-box  rounded"style={{
            width:"20%"
        }}>
                <div className="text-end border-bottom py-2">
                    <span className=" cross-btn p-2 border-start mouse-pointer" onClick={xbtn}><LuX/></span>
                </div>
                <div className="d-felx justify-content-center align-items-center py-3 border-bottom ">
                    <p className="fs-5 text-center">Are you sure ?</p>

                </div>
                {/* Yes or no */}

                <div className="d-flex ">
                    <div className="w-50 border-end py-2 c-btn mouse-pointer">
                        <p className="text-center ">Cancle</p>
                    </div>
                    <div className="w-50 py-2 done-btn mouse-pointer">
                        <p className="text-center ">Ok</p>
                    </div>
                </div>
           </div>
        </div>
        </>
    )
}
export default Delete;