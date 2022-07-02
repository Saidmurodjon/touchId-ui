import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import BList from "../../components//buyritma/BList";
import Button from "../../components/button/Button";
import config from "../../config.json";
import Navbar from "../../components/navbar/Navbar";
import "./Buyurtmachi.css";
export default function Buyurtmalar() {
  const TOKEN = {
    headers: {
      "jwt-token": sessionStorage.getItem("jwt-token"),
    },
  };

  const [buyritmachi, setBuyritmachi] = useState([]);

  const [searchPage, setSearchPage] = useState([]);

  const [post, setPost] = useState(false);

  const navigate = useNavigate();

  // Bazadan ma'lumot olish
  useEffect(() => {
    const Buyurtmachi = async () => {
      const res = await axios.get(`${config.SERVER_URL}cilient`, TOKEN)
      try {
        if (res.status === 200) {
          setBuyritmachi(res.data);
        }
      }
      catch (err) {
        if (err.response.status === 401) {
          navigate("/");
        }
        console.log(err);
      }
    }
    Buyurtmachi();
  }, [post]);

  // yo'naltirish
  function Bqoshish() {
    navigate("/buyrtmaqoshish");
  }

  // Qidirsh funksiyasi
  const Search = (input) => {
    const newService = buyritmachi.filter((elem) =>
      elem.fish.toLowerCase().includes(input.toLowerCase())
    );
    setSearchPage(newService);
  };

  // yangilash sahifasiga yonaltirish
  async function Update(item) {
    navigate(`/buyrtma/${item._id}`);
    localStorage.setItem("buyrtmachi", JSON.stringify(item));
  }

  // Bazadagi malumotni o'chirish funksiyasi
  const onClick = async (elem) => {
    const result = await window.confirm("O'chirilsinmi?");
    if (result) {
      DeleteBuyurtmachi(elem);
      return;
    }
  };

  const DeleteBuyurtmachi = async (elem) => {
    const res = await axios.delete(`${config.SERVER_URL}cilient/${elem._id}`, TOKEN);
    try {
      if (res.status === 200) {
        setPost(!post);
      }
    } catch (err) {
      console.log(err);
      if (err.response.status === 401) {
        navigate("/");
      }
    }
  }

  return (
    <>
      <div className="sticky-top">
        <Navbar search="true" SearchFunction={Search} />
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
          Del={onClick}
        />
      </div>
    </>
  );
}
