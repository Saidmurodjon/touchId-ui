import { useState, useEffect } from "react";
import axios from "axios";
import Button from "../../components/button/Button";
import config from "./../../config.json";
import { useNavigate } from "react-router-dom";
const BuyurtmaQoshish = () => {
  const navigate = useNavigate();
  const TOKEN = {
    headers: {
      "jwt-token": sessionStorage.getItem("jwt-token"),
    },
  };
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
      .get(`${config.SERVER_URL}xona`,TOKEN)
      .then(
        (res) => {
          setXona(res.data);
        },
        (err) => {
          if (err.response.status === 401) {
            navigate("/");
          }
        }
      )
      .catch((error) => console.log(error));
    axios
      .get(`${config.SERVER_URL}lavozim`,TOKEN)
      .then(
        (res) => {
          setLavozim(res.data);
        },
        (err) => {
          if (err.response.status === 401) {
            navigate("/");
          }
        }
      )
      .catch((error) => console.log(error));
    axios
      .get(`${config.SERVER_URL}bolim`,TOKEN)
      .then(
        (res) => {
          setBolim(res.data);
        },
        (err) => {
          if (err.response.status === 401) {
            navigate("/");
          }
        }
      )
      .catch((error) => console.log(error));
  }, []);
  const changeHandler = (e) => {
    setBuyrtmachi({ ...buyrtmachi, [e.target.name]: e.target.value });
  };
  const Send = async () => {
    await axios
      .post(`${config.SERVER_URL}cilient`, buyrtmachi,TOKEN)
      .then(
        (res) => {
          alert("buyrtmachi malumotlari qo'shildi.");
        },
        (err) => {
          if (err.response.status === 401) {
            navigate("/");
          }
        }
      )
      .catch((error) => console.log(error));
    navigate("/buyrtma");
  };
  const Submit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="page-width">
          <h3>Буюртмачи қўшиш</h3>
          <div className="bg-light h-100 pt-2">
            <div className="bg-white m-3">
              <form
                onSubmit={Submit}
                className="m-5 py-5 pe-5 bg-white  position-relative"
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
                    >
                      {bolim.map((item) => (
                        <option key={item._id} value={item.name}>
                          {item.name}
                        </option>
                      ))}
                    </select>
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
                    name="Қўшиш"
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

export default BuyurtmaQoshish;
