import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import config from "../../config.json";
import axios from "axios";
function Login() {
  const navigate = useNavigate();
  // Statelar
  const [check, setCheck] = useState(false);
  const [login, setLogin] = useState({
    login: "",
    password: "",
  });

  const changeHandler = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
    setCheck(false);
  };

  const Submit = (e) => {
    e.preventDefault();
  };

  // Validatsiya funksiyasi
  const Check = async () => {
    try {
      const res = await axios.post(`${config.SERVER_URL}login`, login);
      if (res.status === 200 && res.data.role === "user") {
        navigate("/home");
        sessionStorage.setItem(`jwt-token`, res.data.jwt_token);
        sessionStorage.setItem(`tashkilot_id`, res.data.message._id);
        localStorage.setItem("user", JSON.stringify(res.data.message));
      } else if (res.status === 200 && res.data.role === "admin") {
        navigate("/admin");
        sessionStorage.setItem(`jwt-token`, res.data.jwt_token);
        // localStorage.setItem("admin", JSON.stringify(res.data.message));
      }
    } catch (err) {
      console.log(err);
      if (err.response.status === 401) {
        setCheck(true);
      }
    }
  };

  return (
    <div className="loginCon bg-light d-flex justify-content-center align-items-center">
      <div className="container  p-5 ">
        <div className="row justify-content-center">
          <div className="col-md-8 p-5">
            <div className="card border-0">
              <h2 className="p-4 text-sm-center">Login</h2>
              <form onSubmit={Submit} className="globalBorder border-light p-4">
                <input
                  className="form-control form-control-lg bg-light ps-2 w-75 mx-auto"
                  type="text"
                  placeholder="Login"
                  name="login"
                  value={login.login}
                  onChange={changeHandler}
                />

                <input
                  className="form-control form-control-lg mt-5 bg-light ps-2 w-75 mx-auto"
                  type="password"
                  placeholder="parol"
                  name="password"
                  value={login.password}
                  onChange={changeHandler}
                />
                <div className="">
                  {check ? (
                    <h4 className="text-danger mt-3 mx-auto text-center">
                      login yoki parol xato !
                    </h4>
                  ) : (
                    false
                  )}
                </div>
                <input
                  onClick={() => Check()}
                  value="Login"
                  type="submit"
                  className="btn btn-primary mt-5 px-5 py-2 d-block my-3 mx-auto"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
