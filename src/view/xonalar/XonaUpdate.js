import React, { useState } from "react";
import Button from "../../components/button/Button";
import axios from "axios";
import config from "../../config.json";
import { useNavigate } from "react-router-dom";
import "./Xonalar.css";
import Navbar from "../../components/navbar/Navbar";
const XonaUpdate = () => {
  const navigate = useNavigate();
  const TOKEN = {
    headers: {
      "jwt-token": sessionStorage.getItem("jwt-token"),
    },
  };
  const xona = JSON.parse(localStorage.getItem("xona"));
  const [post, setPost] = useState({
    name: xona.name,
  });
  
  const Submit = (e) => {
    e.preventDefault();
  };

  const Close = () => {
    navigate("/kabinet");
  };

  const changeHandler = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  // Xonani o'zgartirish funksiyasi
  const ChangeCabinet = async () => {
    try{
      const res = await axios.put(`${config.SERVER_URL}xona/${xona._id}`, post, TOKEN)
      if(res.status===200){
        res.data && alert("Yangilandi");
        navigate("/kabinet");
      }
    }catch(err){
      console.log(err);
      if (err.response.status === 401) {
        navigate("/");
      }
    }
  };
  
  return (
    <>
      <div className="sticky-top">
        <Navbar search={true} />
      </div>
      <div className="w-100 px-5 py-2 position-relative">
        <h2 className="title-xona">Хона қўшиш</h2>
        <div className=" my-3 bg-xona px-3 pt-5">
          <div className="position-relative me-0">
            <i className="bi bi-x pointer" onClick={Close}></i>
          </div>
          <form onSubmit={Submit} className="bg-form-xona w-100 p-5">
            <div className="d-flex align-items-center">
              <h4 className="xona-title">Хона номи:</h4>
              <input
                type="text"
                className="form-input-xona w-75 ms-1 ps-1 form-control"
                value={post.name}
                name="name"
                onChange={changeHandler}
              />
            </div>
            <div className="d-flex mt-4 justify-content-center">
              <Button
                name={"Ўзгартириш"}
                ButtonStyle="oq-button"
                ButtonFunction={ChangeCabinet}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default XonaUpdate;
