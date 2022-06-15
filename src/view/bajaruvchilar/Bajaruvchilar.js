import React, { useState, useEffect } from "react";
import axios from "axios";
import BList from "../../components/bajaruvchilar/BList";
import Button from "../../components/button/Button";
// import {URL} from('../../config')
function Bajaruvchilar() {
  const [bajaruvchilar, setBajaruvchilar] = useState([]);
  useEffect(() => {
    axios
      .get("https://government-backend.herokuapp.com/user")
      .then((res) => {
        res.data && setBajaruvchilar(res.data);
        // setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);
  async function Bqoshish(params) {
    console.log("ishladi12");
  }
  return (
    <>
      <div className="container">
        <h4>bajaruvchi</h4>
        <Button name={"Бажарувчи қўшиш"} ButtonFunction={Bqoshish} />
        <BList bajaruvchilar={bajaruvchilar} />
      </div>
    </>
  );
}
export default Bajaruvchilar;
