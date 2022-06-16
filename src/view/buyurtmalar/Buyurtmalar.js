import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import BList from "../../components//buyritma/BList";
import Button from "../../components/button/Button";
import config from "../../config.json"
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
      <div className="container">
        <h4>Буюртмачилар</h4>
        <Button
          name={"Буюртмачи қўшиш"}
          ButtonFunction={Bqoshish}
          ButtonStyle="oq-button"
        />
        <BList buyritmachi={buyritmachi} />
      </div>
    </>
  );
}
