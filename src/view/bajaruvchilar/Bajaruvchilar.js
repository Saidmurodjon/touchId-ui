import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import BList from "../../components/bajaruvchilar/BList";
import Button from "../../components/button/Button";
import config from "../../config.json";
import Navbar from "../../components/navbar/Navbar";
function Bajaruvchilar() {
  const navigate = useNavigate();
  const [searchPage, setSearchPage] = useState([]);
  const [bajaruvchilar, setBajaruvchilar] = useState([]);
  const Search = () => {
    const search = JSON.parse(localStorage.getItem("search"));
    const newService = bajaruvchilar.filter((elem) =>
      elem.fish.toLowerCase().includes(search.toLowerCase())
    );
    setSearchPage(newService);
  };
  useEffect(() => {
    axios
      .get(`${config.SERVER_URL}user`)
      .then((res) => {
        setBajaruvchilar(res.data);
      })
      .catch((error) => console.log(error));
  }, [Delete]);
  async function Bqoshish() {
    navigate("/bajaruvchiqoshish");
  }
  async function Update(elem) {
    navigate(`/bajaruvchi/${elem._id}`);
    localStorage.setItem("bajaruvchi", JSON.stringify(elem));
  }
  const Check = async (item) => {
    const result = await window.confirm(
      "Bajaruvchi malumotlari o'chirilsinmi ? "
    );
    if (result) {
      Delete(item);
      return;
    }
    alert("O'chirilmadi");
  };
  async function Delete(item) {
    await axios
      .delete(`${config.SERVER_URL}user/${item._id}`)
      .then((res) => {
        alert(`Bajaruvchi malumotlari O'chirildi`);
      })
      .catch((error) => console.log(error));
  }
  return (
    <>
      <Navbar search={true} searchValue={bajaruvchilar} Searchs={Search} />
      <div className="d-flex justify-content-center">
        <div className="page-width">
          <div className="row justify-content-center">
            <div className="col-md-6 d-flex justify-content-start align-items-center">
              <h4>bajaruvchi</h4>
            </div>
            <div className="col-md-6 d-flex justify-content-end align-items-center">
              <Button
                name={"Бажарувчи қўшиш"}
                ButtonFunction={Bqoshish}
                ButtonStyle="oq-button float-end"
              />
            </div>
            <div className="bg-main p-4 m-2">
              <BList
                bajaruvchilar={
                  searchPage.length > 0 ? searchPage : bajaruvchilar
                }
                Up={Update}
                Del={Check}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Bajaruvchilar;
