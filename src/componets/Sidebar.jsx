import React from "react";
import {Link} from 'react-router-dom'
import { useAuth } from './context/authContext'
let Sidebar = props => {
  let [auth] =useAuth();
  let links = [
    { name: "SHOP", link: "/shop" },
    { name: "IN THE SPOTLIGHT", link: "/spotlight" },
    { name: "DOWNLOAD APP", link: "/download" },
    { name: "TRACK ORDER", link: "/track" },
    { name: "PLACED A RETURN REQUEST", link: "/return" },
    { name: "CUSTOMER SUPPORT", link: "/cumtomer" },
    { name: "STORE LOCATER", link: "/store" },
    { name: "RELOVE", link: "/relove" },
  ];
  function handleSide(){
    props.setOpen(-200)
  }
  return (
    <>
      <div className="sidebar " style={{
          left:props.mode +"%"
        }}>
        <div className="inner-sidebar pt-4" >
          <div className="inner-element">
            <div className="icon-bar d-flex justify-content-between align-items-center border-bottom pb-3">
              <div className="icon-text d-flex justify-content-around w-50  align-items-center">
              
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 79 79"
                  fill="none"
                >
                  <circle cx="39.5" cy="39.5" r="39.5" fill="#D9D9D9"></circle>
                  <path
                    d="M33.0348 30.6611C33.0067 31.5101 33.1461 32.3564 33.4451 33.1515C33.744 33.9467 34.1967 34.6751 34.7772 35.2954C35.3577 35.9156 36.0546 36.4154 36.8283 36.7662C37.6019 37.1171 38.4371 37.3121 39.2861 37.3402C40.1351 37.3683 40.9814 37.2289 41.7765 36.9299C42.5717 36.631 43.3001 36.1783 43.9204 35.5978C44.5406 35.0173 45.0404 34.3204 45.3912 33.5467C45.7421 32.7731 45.9371 31.9379 45.9652 31.0889C45.9933 30.2399 45.8539 29.3936 45.5549 28.5985C45.256 27.8033 44.8033 27.0749 44.2228 26.4546C43.6423 25.8344 42.9454 25.3346 42.1717 24.9838C41.3981 24.6329 40.5629 24.4379 39.7139 24.4098C38.8649 24.3817 38.0186 24.5211 37.2235 24.8201C36.4283 25.119 35.6999 25.5717 35.0796 26.1522C34.4594 26.7327 33.9596 27.4296 33.6088 28.2033C33.2579 28.9769 33.0629 29.8121 33.0348 30.6611Z"
                    stroke="black"
                    stroke-width="2.31"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M52.4375 52.5938C51.3776 50.0407 49.5828 47.8587 47.2799 46.3234C44.977 44.7882 42.2696 43.9688 39.5 43.9688C36.7304 43.9688 34.023 44.7882 31.7201 46.3234C29.4172 47.8587 27.6224 50.0407 26.5625 52.5937"
                    stroke="black"
                    stroke-width="2.31"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                <span className="font-1 fs-4 ">{auth.user ==null ? "Login" : auth.user.name}</span>
              </div>
              <span className="mouse-pointer"  onClick={handleSide} >
                <i className="fa-solid fa-x fs-5"></i>
              </span>
            </div>
            {
              links.map((d)=>(
                <div className=" border-bottom pt-3 pb-3">
                <Link to={d.link} className="text-decoration-none text-dark fs-5"><span className="font-1">{d.name}</span></Link>
              </div>
              ))
            }
            <div className="social-icon border-top mt-2 text-center">
            <div className="row">
              <div className="col-4 border-right text-center border-bottom">
              <i className="fa-brands fa-facebook fs-3 p-3"></i>
              </div>
              <div className="col-4 border-right text-center border-bottom">
              <i className="fa-brands fa-youtube fs-3 p-3"></i>
              </div>
              <div className="col-4 border-right text-center border-bottom ">
              <i className="fa-brands fa-instagram fs-3 p-3"></i>
              </div>
            </div>
            <div className="row">
              <div className="col-4 border-right text-center border-bottom">
              <i className="fa-brands fa-twitter fs-3 p-3"></i>
              </div>
              <div className="col-4 border-right text-center border-bottom">
              <i className="fa-brands fa-pinterest fs-3 p-3"></i>
              </div>
              <div className="col-4 border-right text-center border-bottom ">
              <i className="fa-brands fa-linkedin fs-3 p-3"></i>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Sidebar;
