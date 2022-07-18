import React, { useState, useEffect } from "react";
import Qurilma from "../../components/qurilma/Qurilma";
import Navbar from '../../components/navbar/Navbar'
import Button from "../../components/button/Button.js";
import "./Qurilma.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import config from "../../config.json";

const QurilmaToifa = () => {
  const navigate = useNavigate();
  const tashkilot_id = sessionStorage.getItem("tashkilot_id");
  const TOKEN = {
    headers: {
      "jwt-token": sessionStorage.getItem("jwt-token"),
      "tashkilot_id": tashkilot_id,
    },
  };
  // Statelar
  const [text, setText] = useState([]);
  const [searchPage, setSearchPage] = useState([]);

  const Change = () => {};
  // Bazadan kelyotgan ma'lumot
  useEffect(() => {
    const Lavozim = async()=>{
      try{
        const res = await axios.get(`${config.SERVER_URL}device`, TOKEN)
        if(res.status===200){
          setText(res.data);
        }
      } catch(err){
        console.log(err);
        if (err.response.status === 401) {
          navigate("/");
        }
      }
    }
    Lavozim();
  }, [Change]);
  // Qidiruv funksiyasi
  const Search = (input) => {
    const newService = text.filter((elem) =>
      elem.name.toLowerCase().includes(input.toLowerCase())
    );
    setSearchPage(newService);
  };

// Yo'naltirgichlar
// Qurilma qo'shishga
  const AddDevice = () => {
    navigate("/qurilmaqoshish");
  };
// Qurilmani yangilashga
  const UpdateDevice = (qurilma) => {
    localStorage.setItem("qurilma", JSON.stringify(qurilma));
  };

  return (
    <div>
      <div className="sticky-top">
        <Navbar search={true} SearchFunction={Search} />
      </div>
      <h1 className="ms-5">Қурилмалар тоифаси</h1>
      <div className="d-flex justify-content-end me-5">
        <Button
          ButtonStyle={"oq-button"}
          name="Категория қўшиш"
          ButtonFunction={AddDevice}
        />
      </div>
      {searchPage.length > 0
        ? searchPage.map((elem) => (
          <div key={elem._id} className="qurilma mt-5">
            <Qurilma elem={elem} up={UpdateDevice} ch={Change} />
          </div>
        )) :
      text.map((elem) => (
        <div key={elem._id} className="qurilma mt-5">
          <Qurilma elem={elem} up={UpdateDevice} ch={Change} />
        </div>
      ))}
    </div>
  );
};

export default QurilmaToifa;
