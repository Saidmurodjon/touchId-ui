import React from "react";
import Profil from "./Profil";
import Search from "./Search";
import "./Navbar.css";
export default function Navbar(props) {
  const { search = false, text = "", searchValue = [] ,page=""} = props;
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
                <Search searchValue={searchValue} page={page}/>
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
