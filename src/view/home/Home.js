import "./Home.css";
import { useState } from "react";
import Router from "../../router/Router";
import Menyu from "../../components/menu/Menyu";
import Aloqa from "./Aloqa";
import { useLocation } from "react-router-dom";
import Login from "../login/Login";
function Home() {
  const [toggle, setToggle] = useState(true);
  const toggleMenyu = () => {
    setToggle(!toggle);
    let menyu = document.querySelector(".menyu");
    let content = document.querySelector(".content");
    let logotip = document.querySelector(".logotip");
    let arrow = document.querySelector(".togl");
    let aloqa = document.querySelector(".aloqa");
    if (toggle) {
      menyu.style.width = "4.5%";
      content.style.width = "95.5%";
      arrow.style.right = "30%";
      logotip.style.display = "none";
      aloqa.style.display = "none";
    } else {
      menyu.style.width = "17%";
      content.style.width = "83%";
      arrow.style.right = "10%";
      logotip.style.display = "flex";
      aloqa.style.display = "block";
    }
  };
  const location = useLocation();
  // console.log(location.pathname);
  return (
    <>
      {location.pathname == "/" ? (
        <Login />
      ) : (
        <div className="container-fluid">
          <div className="menyu border border-right ">
            <div className="position-sticky top-0 ps-0">
            <div className="logo border-bottom border-right d-flex align-items-center overflow-hidden ">
              <div className="logotip align-items-center">
                <i className="bla"></i>
                <h4>TouchID</h4>
              </div>
              <i
                className={
                  toggle
                    ? "bi bi-chevron-double-left togl"
                    : "togl bi bi-chevron-double-right"
                }
                onClick={toggleMenyu}
              ></i>
            </div>
            {/* menyu qismi */}
            <Menyu />
            <div className="mt-4 aloqa">
              <Aloqa />
            </div>
            </div>
          </div>
          <div className="content">
            {/* <Navbar /> */}
            <Router />
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
