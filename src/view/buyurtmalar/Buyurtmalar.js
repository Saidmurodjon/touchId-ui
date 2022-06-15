import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import BList from "../../components//buyritma/BList";
import Button from "../../components/button/Button";

export default function Buyurtmalar() {
  const [buyritmachi, setBuyritmachi] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("https://government-backend.herokuapp.com/cilient")
      .then((res) => {
        res.data && setBuyritmachi(res.data);
        // setLoading(false);
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
