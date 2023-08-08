import React,{useState} from 'react'

export default function Footer() {
    let [newsBtn,setNewsBtn] = useState(0)
    let change = (e)=>{
        if(e.target.value === "" ){
            setNewsBtn(0)
        }
        else{
            setNewsBtn(1)
        }
    }
  return (
    <div className="mx-5 my-5 font-1">
      <div className="row">
        <div className="col-md-3">
         <p className='space fs-6'>FLAGSHIP STORE NOW OPEN</p>
         <p style={{fontSize:"14px"}} className="mt-4"><span >Bangalore:</span> <span>Get Directions</span></p>
        </div>

        <div className="col-md-3">
            <div className="d-flex flex-column">
                <span className='pb-3' style={{fontSize:"14px"}}>Contact us</span>
                <span className='pb-3' style={{fontSize:"14px"}}>FAQ</span>
                <span className='pb-3' style={{fontSize:"14px"}}>BLOGS</span>
                <span className='pb-3' style={{fontSize:"14px"}}>Terms & Conditions</span>
            </div>
        </div>
         
        <div className="col-md-3">
            <div className="d-flex flex-column">
                <span className='pb-3' style={{fontSize:"14px"}}>PLACE RETURNS REQUEST</span>
                <span className='pb-3' style={{fontSize:"14px"}}>RETURNS POLICY</span>
                <span className='pb-3' style={{fontSize:"14px"}}>TRACK YOUR ORDER</span>
                
            </div>
        </div>

        <div className="col-md-3">
            <div className="d-flex flex-column">
                <span className='pb-3 space' style={{fontSize:"14px"}}>CUSTOMER CARE</span>
                <span className='pb-3' style={{fontSize:"14px"}}>Timings: 10 AM - 6:00 PM (Mon - Sat)</span>
                <span className='pb-3' style={{fontSize:"14px"}}>Call: +91 6364430800</span>
                <span className='pb-3 pt-2' style={{fontSize:"14px"}}>E-mail: support@snitch.co.in</span>
                
            </div>
        </div>


      </div>
      <div className='mt-3'>
      <p className='space pb-2'>SIGN UP AND SAVE</p>
      <p className='pb-2'>Sign up now and be the first to know about exclusive offers, latest fashion trends & style tips!</p>
      <div className="input">
        <input type="text" placeholder='Enter your email' onChange={change}/><button className='newslatter-btn '>{newsBtn === 0 ?<i class="fa-regular fa-envelope"></i>:"Subscribe"}</button>
      </div>
      <div className="icon mt-3">
        <span className='fs-3 px-2'><i class="fa-brands fa-instagram"></i></span>
        <span className='fs-3 px-2'><i class="fa-brands fa-facebook"></i></span>
        <span className='fs-3 px-2'><i class="fa-brands fa-youtube"></i></span>
        <span className='fs-3 px-2'><i class="fa-brands fa-twitter"></i></span>
        <span className='fs-3 px-2'><i class="fa-brands fa-pinterest"></i></span>
        <span className='fs-3 px-2'><i class="fa-brands fa-linkedin"></i></span>
      </div>
      </div>
     <div className="copy text-center my-4 " style={{fontSize:"12px"}}>
     © 2023 SNITCH | All Rights Reserved
     </div>
    </div>
  )
}
