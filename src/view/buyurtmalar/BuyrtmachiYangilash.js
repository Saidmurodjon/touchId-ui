import { useState, useEffect } from "react";
import axios from "axios";
import Button from "../../components/button/Button";
import config from "./../../config.json";
import Navbar from "../../components/navbar/Navbar";
const BuyurtmaYangilash = () => {
  const [xona, setXona] = useState([]);
  const [lavozim, setLavozim] = useState([]);
  const [bolim, setBolim] = useState([]);
  const [buyrtmachi, setBuyrtmachi] = useState({
    fish: "",
    bolim: "",
    kabinet: "",
    lavozim: "",
    tel: "",
  });

  useEffect(() => {
    axios
      .get(`${config.SERVER_URL}xona`)
      .then((res) => {
        setXona(res.data);
      })
      .catch((error) => console.log(error));
    axios
      .get(`${config.SERVER_URL}lavozim`)
      .then((res) => {
        setLavozim(res.data);
      })
      .catch((error) => console.log(error));
    axios
      .get(`${config.SERVER_URL}bolim`)
      .then((res) => {
        setBolim(res.data);
      })
      .catch((error) => console.log(error));
  }, []);
  const changeHandler = (e) => {
    setBuyrtmachi({ ...buyrtmachi, [e.target.name]: e.target.value });
  };
  const Send = async () => {
    await axios
      .post(`${config.SERVER_URL}cilient`)
      .then((res) => {
        alert("buyrtmachi malumotlari qo'shildi.");
      })
      .catch((error) => console.log(error));
    await setBuyrtmachi({
      ismi: "",
      fish: "",
      tash: "",
      lavozim: "",
      tel: "",
      parol: "",
    });
  };
  const Submit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Navbar />
      <div className="d-flex justify-content-center">
        <div className="w-100">
          <div className="bg-light h-100 p-3">
            <div className="bg-white m-3">
              <form
                onSubmit={Submit}
                className="m-5 py-5 pe-5 bg-white  position-relative needs-validation"
                novalidate
              >
                <div className="row mt-4">
                  <div className="col-3 text-center fs-4 pe-3 mt-2">
                    <label htmlFor="fish" className="form-label">
                      Ф.И.Ш.
                    </label>
                  </div>
                  <div className="col-9">
                    <input
                      id="fish"
                      className="form-control form-control-lg bg-light ps-2"
                      type="text"
                      placeholder="fish"
                      name="fish"
                      value={buyrtmachi.fish}
                      onChange={changeHandler}
                    />
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-3 text-center fs-4 pe-3 mt-2">
                    <label htmlFor="bolim" className="form-label">
                      Бўлим
                    </label>
                  </div>
                  <div className="col-9">
                    <select
                      className="form-select form-select-lg bg-light ps-2"
                      id="bolim"
                      onChange={changeHandler}
                      value={buyrtmachi.bolim}
                      name="bolim"
                      required
                    >
                      {bolim.map((item) => (
                        <option key={item._id} value={item.name}>
                          {item.name}
                        </option>
                      ))}
                    </select>
                    <div className="invalid-feedback">
                      Please provide a valid zip.
                    </div>
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-3 text-center fs-4 pe-3 mt-2">
                    <label htmlFor="kabinet" className="form-label">
                      Хона
                    </label>
                  </div>
                  <div className="col-9">
                    <select
                      className="form-select form-select-lg bg-light ps-2"
                      id="kabinet"
                      onChange={changeHandler}
                      value={buyrtmachi.kabinet}
                      name="kabinet"
                    >
                      {xona.map((item) => (
                        <option key={item._id} value={item.name}>
                          {item.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-3 text-center fs-4 pe-3 mt-2">
                    <label htmlFor="lavozim" className="form-label">
                      Лавозими
                    </label>
                  </div>
                  <div className="col-9">
                    <select
                      className="form-select form-select-lg bg-light ps-2"
                      id="lavozim"
                      onChange={changeHandler}
                      value={buyrtmachi.lavozim}
                      name="lavozim"
                    >
                      {lavozim.map((item) => (
                        <option key={item._id} value={item.name}>
                          {item.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-3 text-center fs-4 pe-3 mt-2">
                    <label htmlFor="tel" className="form-label">
                      Телефон
                    </label>
                  </div>
                  <div className="col-9">
                    <input
                      id="tel"
                      className="form-control form-control-lg bg-light ps-2"
                      type="text"
                      placeholder="+998"
                      name="tel"
                      value={buyrtmachi.tel}
                      onChange={changeHandler}
                    />
                  </div>
                </div>
                <div className="mt-5 text-center d-flex justify-content-center">
                  <Button
                    name="Yangilash"
                    ButtonFunction={Send}
                    ButtonStyle="oq-button"
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

export default BuyurtmaYangilash;
