import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import config from "../../config.json";
import { useNavigate } from "react-router-dom";
const Qurilma = (props) => {
  const navigate = useNavigate();
  const tashkilot_id = sessionStorage.getItem("tashkilot_id");
  const TOKEN = {
    headers: {
      "jwt-token": sessionStorage.getItem("jwt-token"),
      "tashkilot_id": tashkilot_id,
    },
  };
  // Statelar
  const { elem = {}, up, ch } = props;
  const [dev, setDev] = useState([]);

  const Check = (item) => {
    let query = window.confirm("Ma'lumotni o'chirishni xohlaysizmi?");
    if (query) {
      DeleteDevice(item);
    }
  };
  // O'chirish funksiyalari
  const DeleteDevice = async (item) => {
    try {
      await axios.delete(`${config.SERVER_URL}device/elem/${item._id}`, TOKEN);
      ch();
    } catch (err) {
      console.log(err);
      if (err.response.status === 401) {
        navigate("/");
      }
    }
  };

  // Bazadan kelyotgan ma'lumot
  useEffect(() => {
    const Device = async () => {
      try {
        const res = await axios.get(
          `${config.SERVER_URL}device/elem/${elem._id}`,
          TOKEN
        );
        if (res.status === 200) {
          setDev(res.data);
        }
      } catch (err) {
        console.log(err);
        if (err.response.status === 401) {
          navigate("/");
        }
      }
    };
    Device();
  }, [DeleteDevice]);

  return (
    <div>
      <div className="qurilmaNom d-flex border align-items-center justify-content-between py-2 px-3">
        <h4>{elem.name}</h4>
        <Link to={`/qurilmakategoriya/${elem._id}`}>
          <i className="bi bi-plus d-flex align-items-center justify-content-center"></i>
        </Link>
      </div>
      <div className="qurilmaIn border px-2">
        {dev.length > 0
          ? dev.map((item, index) => (
              <div
                className="border-bottom mt-1 px-2 d-flex justify-content-between"
                key={index}
              >
                <h5>
                  {index + 1}. {item.name}
                </h5>
                <div className="btn">
                  <button
                    className="border-0 bg-white"
                    onClick={() => up(item)}
                  >
                    <Link to={`/qurilma/${item._id}`}>
                      <i className="text-secondary bi bi-pencil-square p-2"></i>
                    </Link>
                  </button>
                  <i
                    onClick={() => Check(item)}
                    className="bi bi-trash3 trash-bg"
                  ></i>
                </div>
              </div>
            ))
          : false}
      </div>
    </div>
  );
};

export default Qurilma;
