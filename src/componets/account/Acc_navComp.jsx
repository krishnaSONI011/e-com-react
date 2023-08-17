import React from "react";
import { useAuth } from '../context/authContext.js'
import { useNavigate,Link } from "react-router-dom";
export default function Acc_navComp() {
    let navigate = useNavigate();
    let [auth,setAuth]=useAuth();
    function logout(){
        setAuth({
            ...auth,
            user:null,
            token:""
        })
        navigate('/')
        localStorage.removeItem('auth')
    }
  return (
    <div className="acc w-50 font-1">
      <div className="inner-acc w-50 ">
        <div className="d-flex align-items-center justify-content-around info">
          <div className="box">
            <span className="fs-3 text-dark ">KS</span>
          </div>
          <div className="name">
            <span className="fs-5">{auth.user=== null ? "Name Here" : auth.user.name}</span>
          </div>
        </div>
        <div className="nav-group border-bottom">
          <div className="nav-link b-hover">
          <Link to="/account/user-info">  <div className="item  mt-3 mouse-pointer ms-4">
              <span className="me-2 fs-5 fw-light ">
                <i class="fa-regular fa-user"></i>
              </span>
              <span className="fs-5 fw-light text">My Profile</span>
            </div>
              </Link>
          </div>

          <div className="nav-link b-hover">
            <div className="item  mt-3 mouse-pointer ms-4 d-flex justify-content-between">
              <div>
                <span className="me-2 fs-5 fw-light ">
                <i className="bi bi-geo-alt"></i>
                </span>
                <span className="fs-5 fw-light text">Delivery Address</span>
              </div>
              <div className="me-3">
                <span className="text-end w-100 bg-gray p-1 px-2 border-radius">
                  0
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="nav-group border-bottom">
          <div className="nav-link b-hover">
            <div className="item  mt-3 mouse-pointer ms-4 d-flex justify-content-between">
              <div>
                <span className="me-2 fs-5 fw-light ">
                <i className="bi bi-bag"></i>
                </span>
                <span className="fs-5 fw-light text">My Orders</span>
              </div>
              <div className="me-3">
                <span className="text-end w-100 bg-gray p-1 px-2 border-radius">
                  0
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="nav-group border-bottom">
          <div className="nav-link b-hover">
            <div className="item  mt-3 mouse-pointer ms-4 d-flex justify-content-between">
              <div>
                <span className="me-2 fs-5 fw-light ">
                <i className="bi bi-heart"></i>
                </span>
                <span className="fs-5 fw-light text">My Wishlist</span>
              </div>
              <div className="me-3">
                <span className="text-end w-100 bg-gray p-1 px-2 border-radius">
                  0
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="nav-group border-bottom">
        <div className="nav-link b-hover">
            <div className="item  mt-3 mouse-pointer ms-4">
              <span className="me-2 fs-5 fw-light ">
              <i className="bi bi-lock"></i>
              </span>
              <span className="fs-5 fw-light text">Change Password</span>
            </div>

          </div>
          <div className="nav-link b-hover" onClick={logout}>
            <div className="item  mt-3 mouse-pointer ms-4">
              <span className="me-2 fs-5 fw-light ">
              <i className="bi bi-box-arrow-right"></i>
              </span>
              <span className="fs-5 fw-light text">Logout</span>
            </div>
            
          </div>
          
        </div>
      </div>
    </div>
  );
}
