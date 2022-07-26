import React, { useState } from "react";
import Button from "../../components/button/Button";
import Navbar from "../../components/navbar/Navbar";
import axios from "axios";
import config from "../../config.json";
import { useNavigate } from "react-router-dom";

const BolimlarEdit = () => {
  const navigate = useNavigate();
  const tashkilot_id = sessionStorage.getItem("tashkilot_id");
  const TOKEN = {
    headers: {
      "jwt-token": sessionStorage.getItem("jwt-token"),
      "tashkilot_id": tashkilot_id,
    },
  };
  const bolim = JSON.parse(localStorage.getItem("bolim"));

  const [post, setPost] = useState({
    name: bolim.name,
  });

  const Submit = (e) => {
    e.preventDefault();
  };

  const Close = () => {
    navigate("/bolim");
  };

  const changeHandler = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };
  // O'zgartirish funksiyasi
  const ChangeBolim = async () => {
    try{
      const res = await axios.put(`${config.SERVER_URL}bolim/${bolim._id}`, post, TOKEN)
      if(res.status===200){
        res.data && alert("Yangilandi");
        navigate("/bolim");
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
        <Navbar search='true' />
      </div>
      <div className="w-100 px-5 py-2 position-relative pe-5">
        <h2 className="title-bolim">Бўлимлар Ўзгартириш</h2>
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
                ButtonFunction={ChangeBolim}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default BolimlarEdit;
