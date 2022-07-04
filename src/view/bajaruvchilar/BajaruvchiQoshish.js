import { useState } from "react";
import axios from "axios";
import Button from "../../components/button/Button";
import config from "./../../config.json";
import Navbar from "../../components/navbar/Navbar";
import { useNavigate } from "react-router-dom";
const BajaruvchiQoshish = () => {

  const TOKEN = {
    headers: {
      "jwt-token": sessionStorage.getItem("jwt-token"),
    },
  };
  const [bajaruvchi, setBajaruvchi] = useState({
    ismi: "",
    fish: "",
    tash: "",
    lavozim: "",
    tel: "",
    parol: "",
  });
  const navigate = useNavigate();

  const changeHandler = (e) => {
    setBajaruvchi({ ...bajaruvchi, [e.target.name]: e.target.value });
  };

  //  bazaga ma'lumot qo'shish funksiyasi 
  const Send = async () => {
    const res = await axios.post(`${config.SERVER_URL}user`, bajaruvchi, TOKEN);
    if (
      bajaruvchi.fish &&
      bajaruvchi.ismi &&
      bajaruvchi.tash &&
      bajaruvchi.lavozim &&
      bajaruvchi.parol &&
      bajaruvchi.tel
    ) {
      try {
        if (res.status === 201) {
          alert("Bajaruvchi malumotlari qo'shildi.");
          setBajaruvchi({
            ismi: "",
            fish: "",
            tash: "",
            lavozim: "",
            tel: "",
            parol: "",
          });
        }
      } catch (err) {
        if (err.response.status === 401) {
          navigate("/");
        }
        console.log(err);
      }
    } else {
      alert("Ma'lumotlar to'liq kiritilmagan");
    }
  };

  // jonatish
  const Submit = (e) => {
    e.preventDefault();
  };

  // Birlamchi sahiffaga qaytish
  const Close = () => {
    navigate("/bajaruvchi");
  };
  return (
    <>
      <div className="sticky-top">
        <Navbar search={true} />
      </div>

      <div className="w-100  px-5 py-2 position-relative">
        <h4 className="title-1 mt-2">
          Бажарувчи қўшиш
        </h4>
        <div className="page-bg1 mt-3">
          <div className="position-relative w-100 me-0">
            <i className="bi bi-x pointer" onClick={Close}></i>
          </div>
          <form action="" className="bajaruvchi-form ps-5 pt-4 pb-4 pe-5 w-100"
            onSubmit={Submit}
          >
            <div className="mb-3 row">
              <label className="col-sm-2 col-form-label">Ташкилот номи:</label>
              <div className="col-sm-10">
                <input className="form-control form-input-bajaruvchi"
                  type="text"
                  name="tash"
                  value={bajaruvchi.tash}
                  onChange={changeHandler}
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label className="col-sm-2 col-form-label">Лавозими:</label>
              <div className="col-sm-10">
                <input className="form-control form-input-bajaruvchi"
                  type="text"
                  name="lavozim"
                  value={bajaruvchi.lavozim}
                  onChange={changeHandler}
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label className="col-sm-2 col-form-label">Ф.И.Ш:</label>
              <div className="col-sm-10">
                <input className="form-control form-input-bajaruvchi"
                  type="text"
                  name="fish"
                  value={bajaruvchi.fish}
                  onChange={changeHandler}
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label className="col-sm-2 col-form-label">Қисқача исми:</label>
              <div className="col-sm-10">
                <input className="form-control form-input-bajaruvchi"
                  type="text"
                  name="ismi"
                  value={bajaruvchi.ismi}
                  onChange={changeHandler}
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label className="col-sm-2 col-form-label">Телефон:</label>
              <div className="col-sm-10">
                <input className="form-control form-input-bajaruvchi"
                  type="phone"
                  name="tel"
                  value={bajaruvchi.tel}
                  onChange={changeHandler}
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label className="col-sm-2 col-form-label">Парол:</label>
              <div className="col-sm-10">
                <input className="form-control form-input-bajaruvchi"
                  type="text"
                  name="parol"
                  value={bajaruvchi.parol}
                  onChange={changeHandler}
                />
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <Button
                ButtonStyle={"oq-button"}
                name="Қўшиш"
                ButtonFunction={Send}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default BajaruvchiQoshish;
