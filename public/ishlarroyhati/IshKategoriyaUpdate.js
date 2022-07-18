import React, { useState, useEffect } from "react";
import Button from "../../components/button/Button";
import axios from "axios";
import config from "../../config.json";
import { useNavigate } from "react-router-dom";
import "./IshlarRoyhati.css";
import Navbar from "../../components/navbar/Navbar";
const IshKategoriyaUpdate = () => {
  const ish = JSON.parse(localStorage.getItem("ish"));
  const [post, setPost] = useState({
    name: ish.name,
  });
  const navigate = useNavigate();
  const tashkilot_id = sessionStorage.getItem("tashkilot_id");
  const TOKEN = {
    headers: {
      "jwt-token": sessionStorage.getItem("jwt-token"),
      "tashkilot_id": tashkilot_id,
    },
  };
  const Submit = (e) => {
    e.preventDefault();
  };

  const changeHandler = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const Change = async () => {
    await axios
      .put(`${config.SERVER_URL}ish/${ish._id}`, post, TOKEN)
      .then(
        (res) => {
          res.data && alert("Yangilash");
          navigate("/ishlar");
        },
        (err) => {
          if (err.response.status === 401) {
            navigate("/");
          }
        }
      )
      .catch((error) => console.log(error));
  };

  const Close = () => {
    navigate("/ishlar");
  };
  return (
    <>
      <div className="sticky-top">
        <Navbar search='true' />
      </div>
      <div className="ishlar-royhati w-100 px-5 pt-2 position-relative">
        <h2 className="title">Иш категориясини қўшиш</h2>
        <div className="page-wq my-3 bg-katagoriya px-3 pt-5">
          <div className="position-relative w-100 me-0">
            <i className="bi bi-x pointer" onClick={Close}></i>
          </div>
          <form onSubmit={Submit} className="bg-form-katagoroya w-100 p-5">
            <div className="d-flex align-items-center">
              <h2 className="title">Категория номи:</h2>
              <input
                type="text"
                className="form-input-ish-katagoriya w-75 ms-1 ps-1 form-control"
                value={post.name}
                name="name"
                onChange={changeHandler}
              />
            </div>
            <div className="d-flex mt-4 justify-content-center">
              <Button
                name={"Ўзгартириш"}
                ButtonStyle="oq-button"
                ButtonFunction={Change}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default IshKategoriyaUpdate;
