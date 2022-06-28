import React, { useState } from "react";
import Button from "../../components/button/Button";
import axios from "axios";
import config from "../../config.json";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
const BolimlarEdit = () => {
  const TOKEN = {
    headers: {
      "jwt-token": sessionStorage.getItem("jwt-token"),
    },
  };
  const bolim = JSON.parse(localStorage.getItem("bolim"));
  const [post, setPost] = useState({
    name: bolim.name,
  });
  console.log(bolim);
  const navigate = useNavigate();

  const Submit = (e) => {
    e.preventDefault();
  };

  const changeHandler = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const Change = async () => {
    await axios
      .put(`${config.SERVER_URL}bolim/${bolim._id}`, post, TOKEN)
      .then(
        (res) => {
          res.data && alert("Yangilash");
          navigate("/bolim");
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
    navigate("/bolim");
  };
  return (
    <>
      <div className="sticky-top">
        <Navbar search='true' />
      </div>
      <div className="w-100 px-5 py-2 position-relative pe-5">
        <h2 className="title-bolim">Бўлимлар қўшиш</h2>
        <div className=" bolimlar-royhati my-3 bg-bolim px-3 pt-5">
          <div className="position-relative me-0">
            <i className="bi bi-x pointer" onClick={Close}></i>
          </div>
          <form onSubmit={Submit} className="bg-form-bolim w-100 p-5">
            <div className="d-flex align-items-center">
              <h4 className="bolim-title">Бўлим номи:</h4>
              <input
                type="text"
                className="form-input-bolim w-75 ms-1 ps-1 form-control"
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

export default BolimlarEdit;
