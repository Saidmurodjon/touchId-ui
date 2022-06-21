import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import BList from "../../components//buyritma/BList";
import Button from "../../components/button/Button";
import config from "../../config.json";
import Navbar from "../../components/navbar/Navbar";
export default function Buyurtmalar() {
  const [buyritmachi, setBuyritmachi] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`${config.SERVER_URL}cilient`)
      .then((res) => {
        setBuyritmachi(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  async function Bqoshish(params) {
    navigate("/buyurtmaqoshish");
  }
  return (
    <>
      <Navbar search={true} />
      <div className="d-flex justify-content-center">
        <div className="page-width">
          <div className="row justify-content-center">
            <div className="col-md-6 d-flex justify-content-start align-items-center">
              <h4>Буюртмачилар</h4>
            </div>
            <div className="col-md-6 d-flex justify-content-end align-items-center">
              <Button
                name={"Буюртмачи қўшиш"}
                ButtonFunction={Bqoshish}
                ButtonStyle="oq-button float-end"
              />
            </div>
          </div>
          <div className="bg-main p-4 m-2">
            <BList buyritmachi={buyritmachi} />
          </div>
        </div>
      </div>
    </>
  );
}
