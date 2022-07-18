import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import BList from "../../components/bajaruvchilar/BList";
import Button from "../../components/button/Button";
import config from "../../config.json";
import Navbar from "../../components/navbar/Navbar";
import "./Bajaruvchi.css";
function Bajaruvchilar() {
  const tashkilot_id = sessionStorage.getItem("tashkilot_id");
  const TOKEN = {
    headers: {
      "jwt-token": sessionStorage.getItem("jwt-token"),
      "tashkilot_id": tashkilot_id,
    },
  };

  const [bajaruvchilar, setBajaruvchilar] = useState([]);

  const [searchPage, setSearchPage] = useState([]);

  const [post, setPost] = useState(false);

  const navigate = useNavigate();

  // Bazadan kelayotgan ma'lumot
  useEffect(() => {
    const Bajaruvchi = async () => {
      try {
        const res = await axios.get(`${config.SERVER_URL}user`, TOKEN);
        if (res.status === 200) {
          setBajaruvchilar(res.data);
        }
      } catch (err) {
        if (err.response.status === 401) {
          navigate("/");
        }
        console.log(err);
      }
    };
    Bajaruvchi();
  }, [post]);

  // Qidiruv Funksiyasi
  const Search = (input) => {
    const newService = bajaruvchilar.filter((elem) =>
      elem.fish.toLowerCase().includes(input.toLowerCase())
    );
    setSearchPage(newService);
  };

  // yo'naltirish funksiyasi
  async function Bqoshish() {
    navigate("/bajaruvchiqoshish");
  }

  // Bazadagi ma'lumotni yangialsh funksiyasi
  async function Update(elem) {
    navigate(`/bajaruvchi/${elem._id}`);
    localStorage.setItem("bajaruvchi", JSON.stringify(elem));
  }

  // Bazadagi malumotni o'chirish funksiyasi
  const onClick = async (elem) => {
    const result = await window.confirm("O'chirilsinmi?");
    if (result) {
      DeleteBajaruvchi(elem);
      return;
    }
  };

  const DeleteBajaruvchi = async (elem) => {
    const res = await axios.delete(
      `${config.SERVER_URL}user/${elem._id}`,
      TOKEN
    );
    try {
      if (res.status === 200) {
        setPost(!post);
      }
    } catch (err) {
      if (err.response.status === 401) {
        navigate("/");
      }
      console.log(err);
    }
  };

  return (
    <>
      <div className="sticky-top">
        <Navbar search={true} SearchFunction={Search} />
      </div>
      <div className="d-flex justify-content-center pe-5 ps-4">
        <div className="page-width">
          <div className="row justify-content-center ">
            <div className="w-100 d-flex justify-content-between align-items-center my-3">
              <h4>Бажарувчилар</h4>
              <Button
                name={"Бажарувчи қўшиш"}
                ButtonFunction={Bqoshish}
                ButtonStyle="oq-button button-end1"
              />
            </div>
            <div className="col-md-6 d-flex justify-content-end align-items-center"></div>
            <div className="bg-main p-4 m-2">
              <BList
                bajaruvchilar={
                  searchPage.length > 0 ? searchPage : bajaruvchilar
                }
                Up={Update}
                Del={onClick}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Bajaruvchilar;
