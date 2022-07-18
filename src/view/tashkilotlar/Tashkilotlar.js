import React, { useState, useEffect } from "react";
import Button from "../../components/button/Button";
import Item from "../../components/tashkilotlar/Item";
import More from "../../components/tashkilotlar/More";
import { useNavigate } from "react-router-dom";
import "./Tashkilot.css";
import Navbar from "../../components/navbar/Navbar";
import axios from "axios";
import config from "../../config.json";

const Tashkilotlar = () => {
  const navigate = useNavigate();
  const tashkilot_id = sessionStorage.getItem("tashkilot_id");
  const TOKEN = {
    headers: {
      "jwt-token": sessionStorage.getItem("jwt-token"),
      "tashkilot_id": tashkilot_id,
    },
  };
  // Statelar
  const [view, setView] = useState(false);
  const [text, setText] = useState([]);
  const [searchPage, setSearchPage] = useState([]);
  // O'chirish funksiyasi
  const Delete = async(item) => {
    let query = window.confirm("Ma'lumotni o'chirishni xohlaysizmi?");
    if (query) {
      try{
        await axios.delete(`${config.SERVER_URL}tashkilot/${item._id}`, TOKEN)
      }catch(err){
        console.log(err);
        if (err.response.status === 401) {
          navigate("/");
        }
      }
    }
  };
  // Bazadan kelyotgan ma'lumot
  useEffect(() => {
    const Tashkilot = async()=>{
      try{
        const res = await axios.get(`${config.SERVER_URL}tashkilot`, TOKEN)
        if(res.status===200){
          res.data && setText(res.data);
        }
      } catch(err){
        console.log(err);
        if (err.response.status === 401) {
          navigate("/");
        }
      }
    }
    Tashkilot();
    
  }, [Delete]);

  // Qidiruv funksiyasi
  const Search = (input) => {
    const newService = text.filter((elem) =>
      elem.name.toLowerCase().includes(input.toLowerCase())
    );
    setSearchPage(newService);
  };

  // Yo'naltiruvchi funksiyalar
  // Qo'shish uchun
  const TQoshish = () => {
    navigate("/tashkilotqoshish");
  };
  // Yangilash uchun
  const getTashkilot = (work) => {
    localStorage.setItem("tash", JSON.stringify(work));
  };

  return (
    <div className="tashkilot bg-white">
      <div className="sticky-top">
        <Navbar search={true} SearchFunction={Search} />
      </div>
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
