import React,{useState} from "react";

let ProductAccord = () => {
    let [open,setOpen] = useState(61);
    let [rotate,setRotate]=useState(0)

    function setHeight(){
        open === 61 ? setOpen(150) : setOpen(61) ;
        open === 61 ? setRotate(180) : setRotate(0) 

    }
  return (
    <>
      <div className="accord border overflow-hidden mouse-pointer" style={{
        height:open,
       
      }}
      onClick={setHeight}
      >
        <div className="accord-title font-2 space d-flex justify-content-between py-2 px-3 pt-3">
          <p>EMI / PAY IN 3 OFFERS</p>
          <i className="bi bi-caret-down fs-4" style={{
            transform: `rotate(${rotate}deg)`
          }}></i>
        </div>
        <div className="accord-body px-3 overflow-hidden">
          <p className="lh-lg font-1 fs-5">
            Or 3 interest free payments of ₹299.68 , ₹899, ₹300<br></br>
            now and rest later in 2 interest free payments via SNITCHPAY
          </p>
        </div>
      </div>
    </>
  );
};

export default ProductAccord;
