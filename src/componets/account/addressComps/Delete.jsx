import React,{useState}  from "react";
import { LuX } from "react-icons/lu";
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
let Delete = (props)=>{
    let navigate = useNavigate()
    let[scroll] = useState(window.scrollY)

    function xbtn(){
        navigate("/account/address");
    }
   async function deleteFun(){
        try{    
            let id = JSON.parse(localStorage.getItem('address_id'))
            let res = await axios.post("http://localhost:8080/api/address/delete",{id});
            if(res.data.success){
                navigate("/account/address");
                props.setShow2(Date.now());
                // its just for triger the useEffect
            }
        }catch(err){
            console.log(err)
        }
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
                        <p className="text-center " onClick={xbtn}>Cancle</p>
                    </div>
                    <div className="w-50 py-2 done-btn mouse-pointer">
                        <p className="text-center " onClick={deleteFun}>Ok</p>
                    </div>
                </div>
           </div>
        </div>
        </>
    )
}
export default Delete;