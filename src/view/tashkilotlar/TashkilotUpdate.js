import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";
import config from "../../config.json";
import axios from "axios";
import Navbar from '../../components/navbar/Navbar'

const TashkilotQoshish = () => {
  const tash = JSON.parse(localStorage.getItem("tash"));
  const [Text, setText] = useState({
    name: tash.name,
    admin: tash.admin,
    login: tash.login,
    parol: tash.parol,
  });
  const navigate = useNavigate();
  const TOKEN = {
    headers: {
      "jwt-token": sessionStorage.getItem("jwt-token"),
    },
  };
  const Submit = (e) => {
    e.preventDefault();
  };
  const Close = () => {
    navigate("/tashkilot");
  };
  const changeHandler = (e) => {
    setText({ ...Text, [e.target.name]: e.target.value });
  };
  const Change = async () => {
    await axios
      .put(`${config.SERVER_URL}tashkilot/${tash._id}`, Text,TOKEN)
      .then(
        (res) => {
          res.data && alert("Yangilandi");
          setText({ 
            name: "",
            admin: "",
            login: "",
            parol: "",
          })
        },
        (err) => {
          if (err.response.status === 401) {
            navigate("/");
          }
        }
      )
      .catch((error) => console.log(error));
    // await Show();
    console.log(Text);
  };
  return (
    <div>
      <div className="sticky-top">
        <Navbar />
      </div>
      <div className="addTashkilot bg-light mx-3 mt-3 py-2">
        <form
          onSubmit={Submit}
          className="m-5 py-5 pe-5 bg-white addTash position-relative"
        >
          <i className="bi bi-x" onClick={Close}></i>
          <div className="row mt-4">
            <div className="col-3 text-end pe-3 mt-3">
              <label className="form-label" htmlFor="">
                Ташкилот номи:
              </label>
            </div>
            <div className="col-9">
              <input
                type="text"
                className="form-control form-control-lg bg-light ps-2"
                value={Text.name}
                name="name"
                onChange={changeHandler}
              />
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-3 text-end pe-3 mt-3">
              <label className="form-label" htmlFor="">
                Администратор Ф.И.О.:
              </label>
            </div>
            <div className="col-9">
              <input
                type="text"
                className="form-control form-control-lg bg-light ps-2"
                value={Text.admin}
                name="admin"
                onChange={changeHandler}
              />
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-3 text-end pe-3 mt-3">
              <label className="form-label" htmlFor="">
                Логин(телефон):
              </label>
            </div>
            <div className="col-9">
              <input
                type="text"
                className="form-control form-control-lg bg-light ps-2"
                value={Text.login}
                name="login"
                onChange={changeHandler}
              />
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-3 text-end pe-3 mt-3">
              <label className="form-label" htmlFor="">
                Пароль:
              </label>
            </div>
            <div className="col-9">
              <input
                type="text"
                className="form-control form-control-lg bg-light ps-2"
                value={Text.parol}
                name="parol"
                onChange={changeHandler}
              />
            </div>
          </div>
          <div className="mt-5">
            <Button
              ButtonFunction={Change}
              ButtonStyle={"oq-button d-block mx-auto"}
              name="Янгилаш"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default TashkilotQoshish;
