import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import BList from "../../components/bajaruvchilar/BList";
import Button from "../../components/button/Button";
import config from "../../config.json";
import Navbar from "../../components/navbar/Navbar";
function Bajaruvchilar() {
  const navigate = useNavigate();
  const TOKEN = {
    headers: {
      "jwt-token": sessionStorage.getItem("jwt-token"),
    },
  };
  const [bajaruvchilar, setBajaruvchilar] = useState([]);
  const [searchPage, setSearchPage] = useState([]);
  const search = JSON.parse(localStorage.getItem("search"));

  useEffect(() => {
    const newService = bajaruvchilar.filter((elem) =>
      elem.fish.toLowerCase().includes(search.toLowerCase())
    );
    setSearchPage(newService);
  }, [search]);

  useEffect(() => {
    axios
      .get(`${config.SERVER_URL}user`,TOKEN)
      .then(
        (res) => {
          setBajaruvchilar(res.data);
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
      .delete(`${config.SERVER_URL}user/${item._id}`,TOKEN)
      .then((res) => {
        alert(`Bajaruvchi malumotlari O'chirildi`);
      })
      .catch((error) => console.log(error));
  }
  return (
    <>
      <Navbar search={true} />
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
