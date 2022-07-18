import React, { useState, useEffect } from "react";
import Button from "../../components/button/Button";
import Bxlqoshish from "../../components/bxlqoshish/Bxlqoshish";
import Navbar from "../../components/navbar/Navbar";
import "./Bo'limlar.css";
import { useNavigate } from "react-router-dom";
import config from "../../config.json";
import axios from "axios";

const Bolimlar = () => {
  const navigate = useNavigate();
  const tashkilot_id = sessionStorage.getItem("tashkilot_id");
  const TOKEN = {
    headers: {
      "jwt-token": sessionStorage.getItem("jwt-token"),
      "tashkilot_id": tashkilot_id,
    },
  };
  // Statelar
  const [bolim, setBolim] = useState([]);
  const [s, setS] = useState(false);
  const [searchPage, setSearchPage] = useState([]);
  // Bazadan kelyotgan ma'lumot
  useEffect(() => {
    const Bolim = async()=>{
      try{
        const res = await axios.get(`${config.SERVER_URL}bolim`, TOKEN)
        if(res.status===200){
          setBolim(res.data);
        }
      } catch(err){
        console.log(err);
        if (err.response.status === 401) {
          navigate("/");
        }
      }
    }
    Bolim()
  },[s]);

  // Qidiruv funksiyasi
  const Search = (input) => {
    const newService = bolim.filter((elem) =>
      elem.name.toLowerCase().includes(input.toLowerCase())
    );
    setSearchPage(newService);
  };

  // O'chirish funksiyasi
  const onClick = async (elem) => {
    const result = await window.confirm("O'chirilsinmi?");
    if (result) {
      BolimDelete(elem);
      return;
    }
    alert("O'chirilmadi");
  };
  async function BolimDelete(elem) {
    try{
      const res = await axios.delete(`${config.SERVER_URL}bolim/${elem._id}`, TOKEN)
      if(res.status===200){
        res.data && alert("O'chirildi");
        setS(!s);
      }
    }catch(err){
      console.log(err);
      if (err.response.status === 401) {
        navigate("/");
      }
    }
  }
  // Yo'naltiruvchi funksiytalar
  // Qo'shish
  async function BolimlarQoshish(params) {
    navigate("/bolimqoshish");
  }
  // O'zgartirish
  async function BolimlarUpdate(elem) {
    localStorage.setItem("bolim", JSON.stringify(elem));
    navigate(`/bolim/${elem._id}`);
  }

  return (
    <>
      <div className="sticky-top">
        <Navbar search={true} SearchFunction={Search} />
      </div>
      <div className="bolimlar-royhati w-100 px-5 py-2 position-relative pe-5">
        <h2 className="title">Бўлимлар рўйхати</h2>
        <div className="my-3 position-relative d-flex justify-content-end">
          <Button
            name={"Бўлим қўшиш"}
            ButtonStyle="oq-button button-end"
            ButtonFunction={BolimlarQoshish}
          />
        </div>
        <div className="me-5 py-3">
          {searchPage.length > 0 ? searchPage.map((e) => {
            return (
              <div key={e._id}>
                <Bxlqoshish
                  elem={e}
                  BxlEdit={BolimlarUpdate}
                  BxlDelet={onClick}
                />
              </div>
            );
          }) : bolim.map((e) => {
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
    </>
  );
};

export default Bolimlar;
