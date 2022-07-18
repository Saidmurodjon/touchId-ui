import { useState } from "react";
import Button from "../../components/button/Button";
import config from "../../config.json";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import "./Bo'limlar.css";
import Navbar from "../../components/navbar/Navbar";
const BolimlarQoshish = () => {
  const navigate = useNavigate();
  const tashkilot_id = sessionStorage.getItem("tashkilot_id");
  const TOKEN = {
    headers: {
      "jwt-token": sessionStorage.getItem("jwt-token"),
      "tashkilot_id": tashkilot_id,
    },
  };
  const [bolimQoshish, setBolimQoshish] = useState({
    name: "",
    tashkilot_id:tashkilot_id,
    date: new Date(),
  });

  const changeHandler = (e) => {
    setBolimQoshish({ ...bolimQoshish, [e.target.name]: e.target.value });
  };
  const Submit = (e) => {
    e.preventDefault();
  };
  const Close = () => {
    navigate("/bolim");
  };
  // Bo'lim qo'shish funksiyasi
  const AddBolim = async () => {
    if (bolimQoshish.name) {
      try{
        const res = await axios.post(`${config.SERVER_URL}bolim`, bolimQoshish, TOKEN)
        if(res.status===200){
          alert("malumot qo'shildi");
          setBolimQoshish  ({
            name: "",
            date: new Date(),
          })
          navigate("/bolim");
        }
      }catch(err){
        console.log(err);
        if (err.response.status === 401) {
          navigate("/");
        }
      }
    }else{
      alert("malumot kiriting");
    }
  };
  
  return (
    <>
      <div className="sticky-top">
        <Navbar search='true' />
      </div>
      <div className="w-100 px-5 py-2 position-relative">
        <h2 className="title-bolim">Бўлимлар қўшиш</h2>
        <div className="bolimlar-royhati my-3 bg-bolim px-3 pt-5">
          <div className="position-relative me-0">
            <i className="bi bi-x pointer" onClick={Close}></i>
          </div>
          <form onSubmit={Submit} className="bg-form-bolim w-100 p-5">
            <div className="d-flex align-items-center">
              <h4 className="bolim-title">Бўлим номи:</h4>
              <input
                type="text"
                className="form-input-bolim w-75 ms-1 ps-1 form-control"
                value={bolimQoshish.name}
                name="name"
                onChange={changeHandler}
              />
            </div>
            <div className="d-flex mt-4 justify-content-center">
              <Button
                name={"Қўшиш"}
                ButtonFunction={AddBolim}
                ButtonStyle="oq-button"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default BolimlarQoshish;
