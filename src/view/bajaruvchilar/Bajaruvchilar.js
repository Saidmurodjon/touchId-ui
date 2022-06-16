import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import BList from "../../components/bajaruvchilar/BList";
import Button from "../../components/button/Button";
import config from "../../config.json";
function Bajaruvchilar() {
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
      <div className="container">
        <h4>bajaruvchi</h4>
        <Button
          name={"Бажарувчи қўшиш"}
          ButtonFunction={Bqoshish}
          ButtonStyle="oq-button"
        />
        <BList bajaruvchilar={bajaruvchilar} />
      </div>
    </>
  );
}
export default Bajaruvchilar;
