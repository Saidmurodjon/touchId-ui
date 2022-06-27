import { useState } from "react";
import Button from "../../components/button/Button";
import config from "../../config.json";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import "./Bo'limlar.css";
import Navbar from "../../components/navbar/Navbar";
const BolimlarQoshish = () => {
  const navigate = useNavigate();
  const TOKEN = {
    headers: {
      "jwt-token": sessionStorage.getItem("jwt-token"),
    },
  };
  async function Bolimlar(params) {
    navigate("/bolim");
  }
  const [bolimQoshish, setBolimQoshish] = useState({
    name: "",
    date: new Date(),
  });

  const changeHandler = (e) => {
    setBolimQoshish({ ...bolimQoshish, [e.target.name]: e.target.value });
  };
  const Send = async () => {
    if (bolimQoshish.name) {
      await axios
        .post(`${config.SERVER_URL}bolim`, bolimQoshish, TOKEN)
        .then(
          (res) => {
            alert("malumot qo'shildi");
            setBolimQoshish  ({
              name: "",
              date: new Date(),
            })
          },
          (err) => {
            if (err.response.status === 401) {
              navigate("/");
            }
          }
        )
        .catch((error) => console.log(error));
    } else {
      alert("malumot kiriting");
    }
  };
  const Submit = (e) => {
    e.preventDefault();
  };
  const Close = () => {
    navigate("/bolim");
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
                ButtonFunction={Send}
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
