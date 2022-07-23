import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Button from "../../components/button/Button";
import config from "../../config.json";
import axios from "axios";

import "./Qurilma.css";

function UpdateDevice() {
  const navigate = useNavigate();
  const id = useParams().id;
  const qurilma = JSON.parse(localStorage.getItem("qurilma"));
  const tashkilot_id = sessionStorage.getItem("tashkilot_id");
  const TOKEN = {
    headers: {
      "jwt-token": sessionStorage.getItem("jwt-token"),
      tashkilot_id: tashkilot_id,
    },
  };
  // itemlardan kelyotgan text uchun
  const [info, setInfo] = useState({});
  //   parametr uchun
  const [serviceList, setServiceList] = useState([{ xususiyat: "" }]);
  //itemlarni yig'ib beradigon massiv
  // new state
  useEffect(() => {
    if (qurilma) {
      var arr = [];
      Object.keys(qurilma.elem.slice(-1)[0]).map(function (key) {
        arr.push({ xususiyat: [key] });
      });
      setServiceList(arr.slice(1));
    }
  }, []);
  const [parametr, setParametr] = useState(qurilma.elem);
  const [data, setData] = useState({
    name: qurilma.name,
    elem: [],
    deviceId: qurilma.deviceId,
    date: qurilma.date,
  });
  useEffect(() => {
    setData({ ...data, elem: parametr });
  }, [parametr]);
  const [show, setShow] = useState(false);
  //   yangi parametr qo'shish
  const handleServiceAdd = () => {
    setServiceList([...serviceList, { xususiyat: "" }]);
  };
  //   parametrni o'chirish
  const handleServiceRemove = (index) => {
    const list = [...serviceList];
    list.splice(index, index + 1);
    setServiceList(list);
  };

  //   parametrdan kelyotgan textni olish
  const handleServiceChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...serviceList];
    list[index][name] = value;
    setServiceList(list);
  };

  //   itemlardan kelyotgan text
  const changeHandler1 = (e) => {
    console.log(e.target.value);
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  //   yangi item qo'shish
  const addFields = () => {
    let filterObj = { id: new Date().getTime() };

    serviceList.forEach(function (item, index) {
      for (let key in item) {
        if (item.xususiyat) {
          filterObj[item.xususiyat] = "";
        } else {
          return true;
        }
      }
    });
    if (Object.keys(filterObj).length > 1) {
      setParametr([...parametr, filterObj]);
    } else {
      alert("sida bosh qiymat mavjud");
      setShow(true);
    }
  };
  function Click(e) {
    const Id = parametr.findIndex((elem) => elem.id === info.id);
    let newParametr = parametr.fill(info, Id, Id + 1);
    setParametr(newParametr);

    if (e.id !== info.id || Object.keys(info).length === 0) {
      const elem = parametr.find((item) => item.id == e.id);

      setInfo(elem);
    }
  }
  function DelInputGroup(elem) {
    const newArr = parametr.filter((item) => elem.id !== item.id);
    setParametr(newArr);
  }
  async function Add() {
    try {
      if (Object.keys(info).length > 0) {
        const Id = parametr.findIndex((elem) => elem.id === info.id);
        let newParametr = parametr.fill(info, Id, Id + 1);
        setParametr(newParametr);
      }
      if (!data.name) {
        setShow(true);
      }
      if (data.name && data.elem) {
        const res = await axios.put(
          `${config.SERVER_URL}device/elem/${qurilma._id}`,
          data,
          TOKEN
        );
        if (res.status === 200) {
          res.data && alert("Yangilandi");
          navigate("/qurilmatoifa");
        }
      }
    } catch (err) {
      console.log(err);
      if (err.response.status === 401) {
        navigate("/");
      }
    }
  }
  return (
    <div>
      <div className="sticky-top">
        <Navbar />
      </div>
      <h1>Курилма Ўзгартириш</h1>
      <div className="AppDevice bg-light  mt-5 py-5 px-3">
        <div className="devcontent bg-white py-5 px-5">
          <div className="d-flex pt-3">
            <h3 className="text-dark">Қурилма номи:</h3>
            <input
              name="name"
              type="text"
              value={data.name}
              className="form-control form-control-lg ms-2 ps-3 deviceName bg-light"
              onChange={(e) => {
                setData({ ...data, name: e.target.value });
                setShow(false);
              }}
            />
          </div>
          <div className="text-center">
            {show ? (
              <p className="d-inline text-danger text-center">Nomlanmagan!</p>
            ) : (
              false
            )}
          </div>
          <div className="form-field mt-3">
            <label htmlFor="service" className="me-3 mb-3">
              Параметрлари:
            </label>
            {/* Xususiyatlar */}
            {serviceList.map((singleService, index) => (
              <span key={index} className="services">
                <input
                  type="text"
                  name="xususiyat"
                  id="service"
                  onChange={(e) => handleServiceChange(e, index)}
                  value={singleService.xususiyat}
                />
                {serviceList.length > 1 && (
                  <button
                    className="remove-btn"
                    onClick={() => handleServiceRemove(index)}
                  >
                    -
                  </button>
                )}
                {serviceList.length - 1 === index && serviceList.length < 8 && (
                  <button className="add-btn" onClick={handleServiceAdd}>
                    +
                  </button>
                )}
              </span>
            ))}
            <div className="items">
              {parametr.map((elem, index) => {
                return (
                  <div>
                    <form key={elem.id}>
                      {Object.keys(elem).map(function (key) {
                        return (
                          <>
                            {[key] == "id" ? (
                              index + 1
                            ) : (
                              <input
                                key={elem[key]}
                                className="m-1"
                                type="text"
                                name={[key]}
                                defaultValue={elem[key]}
                                onClick={() => Click(elem)}
                                onChange={changeHandler1}
                              />
                            )}
                          </>
                        );
                      })}
                      <i
                        className="bi bi-trash3 text-danger pointer d-inline mt-2"
                        onClick={() => DelInputGroup(elem)}
                      ></i>
                    </form>
                  </div>
                );
              })}
              <button onClick={addFields}>+</button>
            </div>
          </div>
          <div className="">
            <Button
              name={"Ўзгартириш"}
              ButtonStyle="oq-button"
              ButtonFunction={Add}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateDevice;
