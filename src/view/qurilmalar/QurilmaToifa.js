import React, { useState, useEffect } from "react";
import Button from "../../components/button/Button.js";
import "./Qurilma.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import config from "../../config.json";
import Qurilma from "../../components/qurilma/Qurilma";

const QurilmaToifa = () => {
  const [text, setText] = useState([]);
  const TOKEN = {
    headers: {
      "jwt-token": sessionStorage.getItem("jwt-token"),
    },
  };
  const navigate = useNavigate();
  const AddDevice = () => {
    navigate("/qurilmaqoshish");
  };

  const UpdateDevice = (qurilma) => {
    localStorage.setItem("qurilma", JSON.stringify(qurilma));
  };

  const Change = () => {};
  useEffect(() => {
    axios
      .get(`${config.SERVER_URL}device`, TOKEN)
      .then(
        (res) => {
          res.data && setText(res.data);
          // setLoading(false);
        },
        (err) => {
          if (err.response.status === 401) {
            navigate("/");
          }
        }
      )
      .catch((error) => console.log(error));
  }, [Change]);

  return (
    <div>
      <h1 className="ms-5">Қурилмалар тоифаси</h1>
      <div className="d-flex justify-content-end me-5">
        <Button
          ButtonStyle={"oq-button"}
          name="Категория қўшиш"
          ButtonFunction={AddDevice}
        />
      </div>
      {text.map((elem) => (
        <div key={elem._id} className="qurilma mt-5">
          <Qurilma elem={elem} up={UpdateDevice} ch={Change} />
        </div>
      ))}
    </div>
  );
};

export default QurilmaToifa;
