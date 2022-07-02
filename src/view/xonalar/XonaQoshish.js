import { useState } from "react";
import Button from "../../components/button/Button";
import config from "../../config.json";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Xonalar.css";
import Navbar from "../../components/navbar/Navbar";
const XonaQoshish = () => {
  const navigate = useNavigate();
  // Token
  const TOKEN = {
    headers: {
      "jwt-token": sessionStorage.getItem("jwt-token"),
    },
  };

  const [xonaQoshish, setXonaQoshish] = useState({
    name: "",
    date: new Date(),
  });

  const changeHandler = (e) => {
    setXonaQoshish({ ...xonaQoshish, [e.target.name]: e.target.value });
  };

  const Submit = (e) => {
    e.preventDefault();
  };

  const Close = () => {
    navigate("/kabinet");
  };

  // Xona qo'shish funksiyasi
  const AddCabinet = async () => {
    if (xonaQoshish.name) {
      try{
        const res = await axios.post(`${config.SERVER_URL}xona`, xonaQoshish, TOKEN)
        if(res.status===200){
          alert("Xona qo'shildi");
          setXonaQoshish({
            name: "",
            date: new Date(),
          })
          navigate("/kabinet");
        }
      }catch(err){
        console.log(err);
        if (err.response.status === 401) {
          navigate("/");
        }
      }
    } else {
      alert("Xona kiriting");
    }
  };
  
  return (
    <>
      <div className="sticky-top">
        <Navbar search={true} />
      </div>
      <div className="w-100 px-5 py-2 position-relative">
        <h2 className="title-xona">Хоналар қўшиш</h2>
        <div className=" my-3 bg-xona px-3 pt-5">
          <div className="position-relative me-0">
            <i className="bi bi-x pointer" onClick={Close}></i>
          </div>
          <form className="bg-form-xona w-100 p-5" onSubmit={Submit}>
            <div className="d-flex align-items-center">
              <h4 className="xona-title">Хона номи:</h4>
              <input
                type="text"
                className="form-input-xona w-75 ms-1 ps-1 form-control"
                value={xonaQoshish.name}
                name="name"
                onChange={changeHandler}
              />
            </div>
            <div className="d-flex mt-4 justify-content-center">
              <Button
                name={"Қўшиш"}
                ButtonStyle="oq-button"
                ButtonFunction={AddCabinet}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default XonaQoshish;
