import { useState, useEffect } from "react";
import axios from "axios";
import Button from "../../components/button/Button";
import config from "./../../config.json";
import Navbar from "../../components/navbar/Navbar";
import { useNavigate } from "react-router-dom";

const BuyurtmaYangilash = () => {
  const TOKEN = {
    headers: {
      "jwt-token": sessionStorage.getItem("jwt-token"),
    },
  };
  const buy = JSON.parse(localStorage.getItem("buyrtmachi"));


  const navigate = useNavigate();


  const [buyrtmachi, setBuyrtmachi] = useState({
    fish: buy.fish,
    bolim: buy.bolim,
    kabinet: buy.kabinet,
    lavozim: buy.lavozim,
    tel: buy.tel,
  });


  const [bolim, setBolim] = useState([]);

  const [lavozim, setLavozim] = useState([]);
  
  const [xona, setXona] = useState([]);
  
useEffect(()=>{
  
})

  // Bazadan ma'lumot olish
  useEffect(() => {
    const BuyurtmachiBolim = async () => {
      const res = await axios.get(`${config.SERVER_URL}bolim`, TOKEN);
      const res2 = await axios.get(`${config.SERVER_URL}xona`, TOKEN);
      const res3 = await axios.get(`${config.SERVER_URL}lavozim`, TOKEN);

      try {
        if (res.status === 200) {
          setBolim(res.data);
        }
        if (res2.status === 200) {
          setXona(res2.data);
        }
        if (res3.status === 200) {
          setLavozim(res3.data);
        }
      }
      catch (err) {
        if (err.response.status === 401) {
          navigate("/");
        }
        console.log(err);
      }
    }
    BuyurtmachiBolim();
  }, []);

  // Bazaga ma'lumot kiritish 
  const Send = async () => {
    const res = await axios.put(`${config.SERVER_URL}cilient/${buy._id}`, buyrtmachi, TOKEN);
    try {
      if (res.status === 200) {
        alert("buyrtmachi malumotlari yangilandi.");
      }
    } catch (err) {
      if (err.response.status === 401) {
        navigate("/");
      }
      console.log(err);
    }
    navigate("/buyrtma");
  };

  const changeHandler = (e) => {
    setBuyrtmachi({ ...buyrtmachi, [e.target.name]: e.target.value });
  };

  // jo'natish
  const Submit = (e) => {
    e.preventDefault();
  };

  // birlamchi sahifaga qaytsh
  const Close = () => {
    navigate("/buyrtma");
  };
  return (
    <>
      <div className="sticky-top">
        <Navbar />
      </div>
      <div className="w-100  px-5 py-2 position-relative">
        <h4 className="title-1 mt-2">
          Буюртмачи қўшиш
        </h4>
        <div className="page-bg mt-3">
          <div className="position-relative w-100 me-0">
            <i className="bi bi-x pointer" onClick={Close}></i>
          </div>
          <form action="" className="buyurtmachi-form ps-5 pt-4 pe-5 pb-2 w-100"
            onSubmit={Submit}
          >
            <div className="mb-3 row">
              <label className="col-sm-2 col-form-label">Ф.И.Ш:</label>
              <div className="col-sm-10">
                <input className="form-control form-input-bajaruvchi"
                  type="text"
                  name="fish"
                  value={buyrtmachi.fish}
                  onChange={changeHandler}
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label className="col-sm-2 col-form-label">Бўлим:</label>
              <div className="col-sm-10">
                <select className="form-select  slect-buyurtma"
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
            <div className="mb-3 row">
              <label className="col-sm-2 col-form-label">Хона:</label>
              <div className="col-sm-10">
                <select className="form-select  slect-buyurtma"
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

            <div className="mb-3 row">
              <label className="col-sm-2 col-form-label">Лавозими:</label>
              <div className="col-sm-10">
                <select className="form-select  slect-buyurtma"
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

            <div className="mb-3 row">
              <label className="col-sm-2 col-form-label">Телефон:</label>
              <div className="col-sm-10">
                <input className="form-control form-input-bajaruvchi"
                  id="tel"
                  type="phone"
                  placeholder="+998"
                  name="tel"
                  value={buyrtmachi.tel}
                  onChange={changeHandler}
                />
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <Button
                name="Йангилаш"
                ButtonFunction={Send}
                ButtonStyle="oq-button"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default BuyurtmaYangilash;
