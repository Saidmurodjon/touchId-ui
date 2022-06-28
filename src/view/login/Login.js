import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import config from "../../config.json";
import "./Login.css"
function Login() {
  const navigate = useNavigate();
  const [check, setCheck] = useState(false)
  const [login, setLogin] = useState({
    login: "",
    password: "",
  });

  const changeHandler = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
    setCheck(false)
  };

  const Check = async () => {
    await axios
    .post(`${config.SERVER_URL}login`,login)
      .then((res) => {
        if (res.status === 200) {
          navigate("/home");
          sessionStorage.setItem(`jwt-token`, res.data.jwt_token)
          localStorage.setItem("admin", JSON.stringify(res.data.message));
        }
      },
      (err) => {
        if (err.response.status === 402) {
          setCheck(true)
        }
      }
      )
      .catch((error) => console.log(error));
  };

  const Submit = (e) => {
    e.preventDefault();
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
{check?<h4 className="text-danger mt-3 mx-auto text-center">login yoki parol xato !</h4>:false}
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
