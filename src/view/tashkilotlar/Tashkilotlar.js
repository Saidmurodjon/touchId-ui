import React, { useState, useEffect } from "react";
import Button from "../../components/button/Button";
import Item from "../../components/tashkilotlar/Item";
import More from "../../components/tashkilotlar/More";
import { useNavigate } from "react-router-dom";
// import tash from "./tash.json";
import axios from "axios";
import config from "../../config.json";
import "./Tashkilot.css";

const Tashkilotlar = () => {
  const navigate = useNavigate();
  const [view, setView] = useState(false);
  const [text, setText] = useState([]);
  const TQoshish = () => {
    navigate("/tashkilotqoshish");
  };
  const TOKEN = {
    headers: {
      "jwt-token": sessionStorage.getItem("jwt-token"),
    },
  };
  const Delete=(item)=>{
    let query = window.confirm("Ma'lumotni o'chirishni xohlaysizmi?")
    if(query){
      axios
      .delete(`${config.SERVER_URL}tashkilot/${item._id}`,TOKEN)
      .then(
        (res) => {
          res.data && alert("O'chirildi");
        },
        (err) => {
          if (err.response.status === 401) {
            navigate("/");
          }
        }
      )
      .catch((error) => console.log(error));
    }else{
        alert("O'chirilmadi")
    }
    
}
  useEffect(() => {
    axios
      .get(`${config.SERVER_URL}tashkilot`,TOKEN)
      .then(
        (res) => {
          res.data && setText(res.data);
        },
        (err) => {
          if (err.response.status === 401) {
            navigate("/");
          }
        }
      )
      .catch((error) => console.log(error));
  }, [Delete]);
  console.log(text);

  const getTashkilot = (work) => {
    localStorage.setItem("tash", JSON.stringify(work));
  };


  return (
    <div className="tashkilot bg-white">
      {/* toshkilot soni, buttonlar */}
      <div className="tashTopPanel d-flex justify-content-between">
        <div className="sarlavha d-flex">
          <h1>Ташкилотлар</h1>
          <h3 className="bedj ms-5 pt-1 px-3 border bg-light rounded-circle">
            7
          </h3>
        </div>
        <div className="buttons d-flex align-items-center me-4 justify-content-end w-25">
          <Button
            ButtonStyle={"yashil-button"}
            name="Қўшиш"
            ButtonFunction={TQoshish}
          />
          <button
            className={view ? "px-2 py-1 viewActive vid" : "vid px-2 py-1"}
            onClick={() => setView(true)}
          >
            <i className="bi bi-hdd-stack-fill"></i>
          </button>
          <button
            className={view ? "px-2 py-1 vid" : "vid px-2 py-1 viewActive"}
            onClick={() => setView(false)}
          >
            <i className="bi bi-grid-fill"></i>
          </button>
        </div>
      </div>

      {/* Asosiy qismi */}
      <div className="tashAsosiy bg-light p-4 mt-5">
        <div className="row">
          {text.map((work, index) =>
            view ? (
              <More
                elem={work}
                localga={getTashkilot}
                functionDelete={Delete}
              />
            ) : (
              <Item
                elem={work}
                localga={getTashkilot}
                functionDelete={Delete}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Tashkilotlar;
