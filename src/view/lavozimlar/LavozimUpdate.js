import React, { useState } from "react";
import Button from "../../components/button/Button";
import Navbar from "../../components/navbar/Navbar";
import "./Lavozimlar.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import config from "../../config.json";

const LavozimUpdate = () => {
  const navigate = useNavigate();
  const tashkilot_id = sessionStorage.getItem("tashkilot_id");
  const TOKEN = {
    headers: {
      "jwt-token": sessionStorage.getItem("jwt-token"),
      "tashkilot_id": tashkilot_id,
    },
  };
  const lavozim = JSON.parse(localStorage.getItem("lavozim"));
  const [post, setPost] = useState({
    name: lavozim.name,
  });
  
  const changeHandler = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const Submit = (e) => {
    e.preventDefault();
  };

  const Close = () => {
    navigate("/lavozim");
  }
  // O'zgartirish funksiyasi
  const ChangeLavozim = async () => {
    try{
      const res = await axios.put(`${config.SERVER_URL}lavozim/${lavozim._id}`, post, TOKEN)
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
                ButtonFunction={ChangeLavozim}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LavozimUpdate;
