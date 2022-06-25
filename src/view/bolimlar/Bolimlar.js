import Button from "../../components/button/Button";
import Bxlqoshish from "../../components/bxlqoshish/Bxlqoshish";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import config from "../../config.json";
import axios from "axios";
import "./Bo'limlar.css";
const Bolimlar = () => {
  const TOKEN = {
    headers: {
      "jwt-token": sessionStorage.getItem("jwt-token"),
    },
  };
  const [bolim, setBolim] = useState([]);
  const [s, setS] = useState(false);

  useEffect(() => {
    axios
      .get(`${config.SERVER_URL}bolim`,TOKEN)
      .then(
        (res) => {
          setBolim(res.data);
        },
        (err) => {
          if (err.response.status === 401) {
            navigate("/");
          }
        }
      )
      .catch((error) => console.log(error));
  }, [s]);

  const navigate = useNavigate();

  async function BolimlarQoshish(params) {
    navigate("/bolimqoshish");
  }
  async function BolimlarUpdate(elem) {
    localStorage.setItem("bolim", JSON.stringify(elem));
    navigate(`/bolim/${elem._id}`);
  }

  const onClick = async (elem) => {
    const result = await window.confirm("O'chirilsinmi?");
    if (result) {
      BolimDelete(elem);
      return;
    }
    alert("O'chirilmadi");
  };
  async function BolimDelete(elem) {
    await axios
      .delete(`${config.SERVER_URL}bolim/${elem._id}`,TOKEN)
      .then(
        (res) => {
          res.data && alert("O'chirildi");
          setS(!s);
        },
        (err) => {
          if (err.response.status === 401) {
            navigate("/");
          }
        }
      )
      .catch((error) => console.log(error));
  }
  return (
    <div className="w-100 px-4 py-2 position-relative pe-5">
      <h2 className="title">Бўлимлар рўйхати</h2>
      <div className="my-3 position-relative d-flex justify-content-end">
        <Button
          name={"Бўлим қўшиш"}
          ButtonStyle="oq-button"
          ButtonFunction={BolimlarQoshish}
        />
      </div>
      <div className="w-100 py-3">
        {bolim.map((e) => {
          return (
            <div key={e._id}>
              <Bxlqoshish
                elem={e}
                BxlEdit={BolimlarUpdate}
                BxlDelet={onClick}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Bolimlar;
