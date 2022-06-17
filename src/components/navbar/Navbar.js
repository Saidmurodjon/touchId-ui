import React from "react";
import Profil from "./Profil";
import Search from "./Search";
import "./Navbar.css";
export default function Navbar(props) {
  const { search = false, text = "", searchValue = [] ,page="",type1="",type2=""} = props;
  const data = [1, 2, 3, 4];
  // console.log(searchValue);
  // Bajaruvchilar(searchValue);
  return (
    <>
      <div className="d-flex justify-content-center border-bottom navbar-style">
        <div className="page-width">
          <div className="row justify-content-center">
            <div className="col-md-6 d-flex justify-content-start align-items-center">
              {search ? (
                <Search data={searchValue} page={page} type1={type1} type2={type2} />
              ) : (
                <>
                  <h3>{text}</h3>
                </>
              )}
            </div>
            <div className="col-md-6">
              <Profil />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
