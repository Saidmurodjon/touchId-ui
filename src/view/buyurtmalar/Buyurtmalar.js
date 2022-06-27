import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import BList from "../../components//buyritma/BList";
import Button from "../../components/button/Button";
import config from "../../config.json";
import Navbar from "../../components/navbar/Navbar";
import './Buyurtmachi.css'
export default function Buyurtmalar() {
  const [buyritmachi, setBuyritmachi] = useState([]);
  const navigate = useNavigate();
  const TOKEN = {
    headers: {
      "jwt-token": sessionStorage.getItem("jwt-token"),
    },
  };
  const [searchPage, setSearchPage] = useState([]);
  const search = JSON.parse(localStorage.getItem("search"));

  useEffect(() => {
    const newService = buyritmachi.filter((elem) =>
      elem.fish.toLowerCase().includes(search.toLowerCase())
    );
    setSearchPage(newService);
  }, [search]);
  useEffect(() => {
    axios
      .get(`${config.SERVER_URL}cilient`, TOKEN)
      .then(
        (res) => {
          setBuyritmachi(res.data);
        },
        (err) => {
          if (err.response.status === 401) {
            navigate("/");
          }
        }
      )
      .catch((error) => console.log(error));
  }, [Delete]);
  async function Bqoshish() {
    navigate("/buyrtmaqoshish");
  }
  async function Update(item) {
    navigate(`/buyrtma/${item._id}`);
    localStorage.setItem("buyrtmachi", JSON.stringify(item));
  }
  const Check = async (item) => {
    const result = await window.confirm(
      "Buyurtmachi malumotlari o'chirilsinmi ? "
    );
    if (result) {
      Delete(item);
      return;
    }
    alert("O'chirilmadi");
  };
  async function Delete(item) {
    await axios
      .delete(`${config.SERVER_URL}cilient/${item._id}`, TOKEN)
      .then(
        (res) => {
          alert(`Buyurtmachi malumotlari O'chirildi`);
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
    <>
      <div className="sticky-top">
        <Navbar  search='true'/>
      </div>
      <div className="w-100  px-5 py-2 position-relative">
        <div className="d-flex justify-content-between mt-2">
          <h4 className="title">Буюртмачилар</h4>
          <Button
            name={"Буюртмачи қўшиш"}
            ButtonFunction={Bqoshish}
            ButtonStyle="oq-button button-end"
          />
        </div>
      </div>
      <div className="bg-main mt-2 ">
        <BList
          buyritmachi={searchPage.length > 0 ? searchPage : buyritmachi}
          Up={Update}
          Del={Check}
        />
      </div>
    </>
  );
}
