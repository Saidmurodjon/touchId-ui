import { useState } from "react";
import { useNavigate } from "react-router-dom";
import config from "../../config.json";
import axios from "axios";
import Button from "../../components/button/Button";
import Navbar from "../../components/navbar/Navbar";
import "./IshlarRoyhati.css";
const IshKategoriyaQoshish = () => {
  const tashkilot_id = sessionStorage.getItem("tashkilot_id");
  const TOKEN = {
    headers: {
      "jwt-token": sessionStorage.getItem("jwt-token"),
      "tashkilot_id": tashkilot_id,
    },
  };
  const [ishQoshish, setIshQoshish] = useState({
    name: "",
    tashkilot_id:tashkilot_id,
    date: new Date(),
  });

  const navigate = useNavigate();

  const changeHandler = (e) => {
    setIshQoshish({ ...ishQoshish, [e.target.name]: e.target.value });
  };

  // Malumot kiritish funksiyasi
  const Send = async () => {
    const res = await axios.post(`${config.SERVER_URL}ish`, ishQoshish, TOKEN);
    if (ishQoshish.name) {
      try {
        if (res.status == 201) {
          alert("Ma'lumot qo'shildi");
          setIshQoshish({
            name: "",
            date: new Date(),
          });
        }
      } catch (err) {
        if (err.response.status === 401) {
          navigate("/");
        }
        console.log(err);
      }
    } else {
      alert("Ma'lumo kiriting");
    }
  };

  // jonatish funksiyasi
  const Submit = (e) => {
    e.preventDefault();
  };
  // Birlamchi sahifaga qaytish
  const Close = () => {
    navigate("/ishlar");
  };
  return (
    <>
      <div className="sticky-top">
        <Navbar search='true' />
      </div>
      <div className="ishlar-royhati w-100  px-5 py-2 position-relative">
        <h2 className="title">Иш категориясини қўшиш</h2>
        <div className="page-wq my-3 bg-katagoriya px-3 pt-5">
          <div className="position-relative me-0">
            <i className="bi bi-x pointer" onClick={Close}></i>
          </div>
          <form onSubmit={Submit} className="bg-form-katagoroya w-100 p-5">
            <div className="d-flex align-items-center">
              <h4 className="title">Категория номи:</h4>
              <input
                type="text"
                className="form-input-ish-katagoriya w-75 ms-1 ps-1 form-control"
                value={ishQoshish.name}
                name="name"
                onChange={changeHandler}
              />
            </div>
            <div className="d-flex mt-4 justify-content-center">
              <Button
                name={"Қўшиш"}
                ButtonStyle="oq-button"
                ButtonFunction={Send}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default IshKategoriyaQoshish;
