import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import BList from "../../components/bajaruvchilar/BList";
import Button from "../../components/button/Button";
import config from "../../config.json";
import Navbar from "../../components/navbar/Navbar";
function Bajaruvchilar(data) {
  // const {data=[]}=props
  console.log(data);
  const [bajaruvchilar, setBajaruvchilar] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`${config.SERVER_URL}user`)
      .then((res) => {
        setBajaruvchilar(res.data);
      })
      .catch((error) => console.log(error));
  }, []);
  async function Bqoshish(params) {
    navigate("/bajaruvchiqoshish");
  }
  return (
    <>
      <Navbar search={true} />

      <div className="d-flex justify-content-center">
        <div className="page-width">
          <div className="row justify-content-center">
            <div className="col-md-6 d-flex justify-content-start align-items-center">
              <h4>bajaruvchi</h4>
            </div>
            <div className="col-md-6 d-flex justify-content-end align-items-center">
              {" "}
              <Button
                name={"Бажарувчи қўшиш"}
                ButtonFunction={Bqoshish}
                ButtonStyle="oq-button"
              />
            </div>

            <BList bajaruvchilar={bajaruvchilar} />
          </div>
        </div>
      </div>
    </>
  );
}
export default Bajaruvchilar;
