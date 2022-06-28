import React, { useState, useEffect } from "react";
import Button from "../../components/button/Button";
import axios from "axios";
import config from "../../config.json";
import { useNavigate } from "react-router-dom";
import "./Lavozimlar.css";
import Navbar from "../../components/navbar/Navbar";
const LavozimUpdate = () => {
  const lavozim = JSON.parse(localStorage.getItem("lavozim"));
  const [post, setPost] = useState({
    name: lavozim.name,
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

  const changeHandler = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const Change = async () => {
    await axios
      .put(`${config.SERVER_URL}lavozim/${lavozim._id}`, post, TOKEN)
      .then(
        (res) => {
          res.data && alert("Yangilash");
          navigate("/lavozim");
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
    navigate("/lavozim");
  }
  return (
    <>
      <div className="sticky-top">
        <Navbar search={true} />
      </div>
      <div className="w-100 px-5 py-2 position-relative">
        <h2 className="title-lavozm">Лавозимлар қўшиш</h2>
        <div className="my-3 bg-lavozim px-3 pt-5">
          <div className="position-relative me-0">
            <i className="bi bi-x pointer" onClick={Close}></i>
          </div>
          <form onSubmit={Submit} className="bg-form-lavozim w-100 p-5">
            <div className="d-flex align-items-center">
              <h4 className="lavozm-title">Лавозим номи:</h4>
              <input
                type="text"
                className="form-input-lavozim w-75 ms-1 ps-1 form-control"
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

export default LavozimUpdate;
