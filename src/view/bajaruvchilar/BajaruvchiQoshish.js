import { useState } from "react";
import axios from "axios";
import Button from "../../components/button/Button";
import config from "./../../config.json";
import Navbar from "../../components/navbar/Navbar";
import { useNavigate } from "react-router-dom";
const BajaruvchiQoshish = () => {
  const navigate = useNavigate();
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
  const changeHandler = (e) => {
    setBajaruvchi({ ...bajaruvchi, [e.target.name]: e.target.value });
  };

  const Send = async () => {
    if (
      bajaruvchi.fish &&
      bajaruvchi.ismi &&
      bajaruvchi.tash &&
      bajaruvchi.lavozim &&
      bajaruvchi.parol &&
      bajaruvchi.tel
    ) {
      await axios
        .post(`${config.SERVER_URL}user`, bajaruvchi, TOKEN)
        .then(
          (res) => {
            alert("Bajaruvchi malumotlari qo'shildi.");
          },
          (err) => {
            if (err.response.status === 401) {
              navigate("/");
            }
          }
        )
        .catch((error) => console.log(error));
      await setBajaruvchi({
        ismi: "",
        fish: "",
        tash: "",
        lavozim: "",
        tel: "",
        parol: "",
      });
    } else {
      alert("Ma'lumotlar to'liq kiritilmagan");
    }
  };
  const Submit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="sticky-top">
        <Navbar search={true} />
      </div>
      <div className="">
        <div className="d-flex justify-content-center">
          <div className="page-width">
            <h3>Бажарувчи қўшиш</h3>
            <div className=" bg-light h-100 pt-2 ">
              <form
                onSubmit={Submit}
                className="m-5 py-5 pe-5 bg-white  position-relative"
              >
                <div className="row mt-4">
                  <div className="col-3 text-end pe-3 mt-1">
                    <label className="form-label fs-4" htmlFor="">
                      Ташкилот номи:
                    </label>
                  </div>
                  <div className="col-9">
                    <input
                      type="text"
                      className="form-control form-control-lg bg-light ps-2"
                      name="tash"
                      value={bajaruvchi.tash}
                      onChange={changeHandler}
                    />
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-3 text-end pe-3 mt-1">
                    <label className="form-label fs-4" htmlFor="">
                      Лавозими
                    </label>
                  </div>
                  <div className="col-9">
                    <input
                      type="text"
                      className="form-control form-control-lg bg-light ps-2"
                      name="lavozim"
                      value={bajaruvchi.lavozim}
                      onChange={changeHandler}
                    />
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-3 text-end pe-3 mt-1">
                    <label className="form-label fs-4" htmlFor="">
                      Ф.И.Ш
                    </label>
                  </div>
                  <div className="col-9">
                    <input
                      type="text"
                      className="form-control form-control-lg bg-light ps-2"
                      name="fish"
                      value={bajaruvchi.fish}
                      onChange={changeHandler}
                    />
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-3 text-end pe-3 mt-1">
                    <label className="form-label fs-4" htmlFor="">
                      Қисқача исми
                    </label>
                  </div>
                  <div className="col-9">
                    <input
                      type="text"
                      className="form-control form-control-lg bg-light ps-2"
                      name="ismi"
                      value={bajaruvchi.ismi}
                      onChange={changeHandler}
                    />
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-3 text-end pe-3 mt-1">
                    <label className="form-label fs-4" htmlFor="">
                      Телефон
                    </label>
                  </div>
                  <div className="col-9">
                    <input
                      type="text"
                      className="form-control form-control-lg bg-light ps-2"
                      name="tel"
                      value={bajaruvchi.tel}
                      onChange={changeHandler}
                    />
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-3 text-end pe-3 mt-1">
                    <label className="form-label fs-4" htmlFor="">
                      Парол
                    </label>
                  </div>
                  <div className="col-9">
                    <input
                      type="text"
                      className="form-control form-control-lg bg-light ps-2"
                      name="parol"
                      value={bajaruvchi.parol}
                      onChange={changeHandler}
                    />
                  </div>
                </div>
                <div className="mt-5 text-center d-flex justify-content-center">
                  <Button
                    ButtonStyle={"oq-button"}
                    name="Қўшиш"
                    ButtonFunction={Send}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BajaruvchiQoshish;
