import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";
import axios from "axios";
import config from "../../config.json";

const TashkilotQoshish = () => {
  const navigate = useNavigate();
  const TOKEN = {
    headers: {
      "jwt-token": sessionStorage.getItem("jwt-token"),
    },
  };
  const [Text, setText] = useState({
    name: "",
    admin: "",
    login: "",
    parol: "",
  });
  const Submit = (e) => {
    e.preventDefault();
  };
  const changeHandler = (e) => {
    setText({ ...Text, [e.target.name]: e.target.value });
  };
  const Close = () => {
    navigate("/tashkilot");
  };
  const AddTash = async () => {
    await axios
      .post(`${config.SERVER_URL}tashkilot`, Text,TOKEN)
      .then(
        (res) => {
          res.data && alert("Qo'shildi");
        },
        (err) => {
          if (err.response.status === 401) {
            navigate("/");
          }
        }
      )
      .catch((error) => console.log(error));
  };
  return (
    <div className="addTashkilot bg-light h-100 pt-2 ">
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
              name="parol"
              onChange={changeHandler}
            />
          </div>
        </div>
        <div className="mt-5 text-center">
          <Button
            ButtonStyle={"oq-button"}
            name="Қўшиш"
            ButtonFunction={AddTash}
          />
        </div>
      </form>
    </div>
  );
};

export default TashkilotQoshish;
