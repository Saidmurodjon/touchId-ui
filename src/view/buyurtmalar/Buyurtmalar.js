import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import BList from "../../components//buyritma/BList";
import Button from "../../components/button/Button";
import config from "../../config.json";
import Navbar from "../../components/navbar/Navbar";
export default function Buyurtmalar() {
  const [buyritmachi, setBuyritmachi] = useState([]);
  const navigate = useNavigate();
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
      .get(`${config.SERVER_URL}cilient`)
      .then((res) => {
        setBuyritmachi(res.data);
      })
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
      .delete(`${config.SERVER_URL}cilient/${item._id}`)
      .then((res) => {
        alert(`Buyurtmachi malumotlari O'chirildi`);
      })
      .catch((error) => console.log(error));
  }
  return (
    <>
      <Navbar search={true} />
      <div className="d-flex justify-content-center">
        <div className="page-width">
          <div className="row justify-content-center">
            <div className="col-md-6 d-flex justify-content-start align-items-center mt-2">
              <h4>Буюртмачилар</h4>
            </div>
            <div className="col-md-6 d-flex justify-content-end align-items-center mt-2">
              <Button
                name={"Буюртмачи қўшиш"}
                ButtonFunction={Bqoshish}
                ButtonStyle="oq-button float-end"
              />
            </div>
          </div>
          <div className="bg-main p-4 m-2">
            <BList buyritmachi={searchPage.length>0?searchPage:buyritmachi} Up={Update} Del={Check} />
          </div>
        </div>
      </div>
    </>
  );
}
