import React, { useState } from "react";
import Button from "../../components/button/Button";
import axios from "axios";
import config from "../../config.json";
import { useNavigate } from "react-router-dom";
const QurilmaQoshish = () => {
  const navigate = useNavigate();
  const TOKEN = {
    headers: {
      "jwt-token": sessionStorage.getItem("jwt-token"),
    },
  };
  const [device, setDevice] = useState({
    name: "",
    date: new Date(),
  });
  const changeHandler = (e) => {
    setDevice({ ...device, [e.target.name]: e.target.value });
  };
  const Add = async () => {
    await axios
      .post(`${config.SERVER_URL}device`, device, TOKEN)
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
    <div>
      <h1 className="ms-5">Қурилмалар тоифаси</h1>
      <div className="d-flex justify-content-end me-5">
        <Button ButtonStyle={"oq-button"} name="Категория қўшиш" />
      </div>
      <div className="AddDevice bg-light mt-5 p-3">
        <div className=" mt-3 bg-white p-3">
          <div className="d-flex pt-3">
            <h2>Категория номи:</h2>
            <input
              name="name"
              onChange={changeHandler}
              type="text"
              className="form-control form-control-lg ms-3 ps-3 deviceName bg-light"
            />
          </div>
          <div className="my-4 d-flex justify-content-center">
            <Button
              ButtonStyle={"oq-button"}
              name="Қўшиш"
              ButtonFunction={Add}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QurilmaQoshish;
