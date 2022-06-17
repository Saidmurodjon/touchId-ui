import React from "react";
import pic from "./../../assets/gerb.jpg";
import "./Navbar.css";
export default function Profil() {
  return (
    <>
      <div className="float-end d-flex justify-content-center align-items-center">
        <div className="row justify-content-center ">
          <div className="col-md-3 d-flex justify-content-center align-items-center">
            <i className="bi bi-bell me-4"></i>
          </div>
          <div className="col-7">
            <div className="row d-flex justify-content-center">
              <div className="col-9 d-flex justify-content-center align-items-center">
                {" "}
                <h5 className="">Толипова Феруза</h5>
                
                <h6 className="float-end me-2">Марказ</h6>
              </div>
              <div className="col-md-3 d-flex justify-content-center align-items-center">
                {" "}
                <img className="pic" src={pic} alt="profil" />
              </div>
            </div>
          </div>
          <div className="col-md-2 d-flex justify-content-center align-items-center">
            <i className="bi bi-chevron-down ms-3"></i>
          </div>
        </div>
      </div>
    </>
  );
}
