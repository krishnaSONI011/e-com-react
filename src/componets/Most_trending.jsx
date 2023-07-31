import React from "react";

let Most_trending =()=>{
    return(
        <>
         <div className="border-bottom">
        <h1 className="font-weight-normal font-2 text-center my-4">
        MOST TRENDING
        </h1>

        <div className="new_drop mx-5">
          <div className="row">
            <div className="col-md-3 mouse-pointer">
              <img
                src="https://www.snitch.co.in/cdn/shop/files/Snitch_sep21_0610_2332a499-efa6-45e8-b974-4034649daf2c_360x.jpg?v=1690380204"
                alt=""
              />
              <div className="text-container text-center">
                <p className="font-weight-light new font-1">
                Octet Pastel Blue Shirt
                </p>
                <p className="font-weight-light d font-1">Rs. 1,199</p>
                <div className="d-flex justify-content-center my-2   ">
                      <div className="size-box p-2 px-3 fs-6 mx-2">
                        S
                        </div>  
                      <div className="size-box p-2 px-3 fs-6 mx-2">
                        M
                        </div>  
                      <div className="size-box p-2 px-3 fs-6 mx-2">
                        L
                        </div>  
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-4">
            <button className="shine-button font-1 bg-dark text-white p-2 border-none px-4 fs-6">VIEW ALL</button>
        </div>
      </div>
        </>
    )
}

export default Most_trending;