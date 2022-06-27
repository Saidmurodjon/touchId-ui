import React, { useState, useEffect } from "react";
import Button from "../../components/button/Button";
import Item from "../../components/tashkilotlar/Item";
import More from "../../components/tashkilotlar/More";
import { useNavigate } from "react-router-dom";
// import tash from "./tash.json";
import axios from "axios";
import config from "../../config.json";
import "./Tashkilot.css";
import Navbar from "../../components/navbar/Navbar";

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
  const [searchPage, setSearchPage] = useState([]);
  const Search = (input) => {
    const newService = text.filter((elem) =>
      elem.name.toLowerCase().includes(input.toLowerCase())
    );
    setSearchPage(newService);
  };
  const Delete = (item) => {
    let query = window.confirm("Ma'lumotni o'chirishni xohlaysizmi?");
    if (query) {
      axios
        .delete(`${config.SERVER_URL}tashkilot/${item._id}`, TOKEN)
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
    } else {
      alert("O'chirilmadi");
    }
  };
  useEffect(() => {
    axios
      .get(`${config.SERVER_URL}tashkilot`, TOKEN)
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

  const getTashkilot = (work) => {
    localStorage.setItem("tash", JSON.stringify(work));
  };

  return (
    <div className="tashkilot bg-white">
      <Navbar search="true" SearchFunction={Search} />
      {/* toshkilot soni, buttonlar */}
      <div className="tashTopPanel d-flex justify-content-between mt-2">
        <div className="sarlavha d-flex ms-2">
          <h1>Ташкилотлар</h1>
          <h3 className="bedj ms-5 pt-1 px-3 border bg-light rounded-circle">
            {text.length}
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
          {searchPage.length > 0
            ? searchPage.map((work, index) =>
                view ? (
                  <More
                    key={work._id}
                    index={index + 1}
                    elem={work}
                    localga={getTashkilot}
                    functionDelete={Delete}
                  />
                ) : (
                  <Item
                    key={work._id}
                    index={index + 1}
                    elem={work}
                    localga={getTashkilot}
                    functionDelete={Delete}
                  />
                )
              )
            : text.map((work, index) =>
                view ? (
                  <More
                    key={work._id}
                    index={index + 1}
                    elem={work}
                    localga={getTashkilot}
                    functionDelete={Delete}
                  />
                ) : (
                  <Item
                    key={work._id}
                    index={index + 1}
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
