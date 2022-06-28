import Button from "../../components/button/Button";
import { useParams, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import config from "../../config.json";
import Navbar from '../../components/navbar/Navbar'

const UpdateDevice = () => {
  const qurilma = JSON.parse(localStorage.getItem("qurilma"));
  const id = useParams().id;
  const navigate = useNavigate();
  const TOKEN = {
    headers: {
      "jwt-token": sessionStorage.getItem("jwt-token"),
    },
  };
  const [dev, setDev] = useState({
    name: qurilma.name,
    elem: qurilma.elem,
    deviceId: qurilma.deviceId,
    date: new Date(),
  });

  const [inputFields, setInputFields] = useState(qurilma.elem);

  const addFields = () => {
    let newfield = { name: "", made: "", char: "", steyt: "" };
    setInputFields([...inputFields, newfield]);
  };

  const removeFields = (index) => {
    let data = [...inputFields];
    data.splice(index, 1);
    setInputFields(data);
  };

  const changeHandler = (e) => {
    setDev({ ...dev, [e.target.name]: e.target.value });
  };

  const handleFormChange = (index, event) => {
    let data = [...inputFields];
    data[index][event.target.name] = event.target.value;
    setInputFields(data);
  };

  const AddAll = async () => {
    await axios
      .put(`${config.SERVER_URL}device/elem/${id}`, dev,TOKEN)
      .then(
        (res) => {
          res.data && alert("Yangilandi");
          setInputFields([ ])
          setDev({
            name: '',
            elem: '',
            deviceId: '',
            date: '',
          })
        },
        (err) => {
          if (err.response.status === 401) {
            navigate("/");
          }
        }
      )
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    setDev({ ...dev, elem: inputFields });
  }, [inputFields]);

  return (
    <div>
      <div className="sticky-top">
        <Navbar />
      </div>
      <h1 className="ms-5">Курилма янгилаш</h1>
      <div className="AddDevice bg-light mt-5 p-3">
        <div className=" mt-3 bg-white p-3">
          <div className="d-flex pt-3">
            <h2>Қурилма номи:</h2>
            <input
              name="name"
              value={dev.name}
              onChange={changeHandler}
              type="text"
              className="form-control form-control-lg ms-2 ps-3 deviceName bg-light"
            />
          </div>
          <div className="d-flex mt-5">
            <div>
              <h2>Параметрлари:</h2>
            </div>
            <div>
              <form>
                {inputFields.map((input, index) => {
                  return (
                    <div
                      key={index}
                      className="d-flex align-items-center py-2 param border-bottom me-5"
                    >
                      <input
                        className="qurilmainput form-control ms-2 ps-1 bg-light"
                        name="name"
                        value={input.name}
                        placeholder="Номи"
                        onChange={(event) => handleFormChange(index, event)}
                      />
                      <input
                        className="qurilmainput form-control ms-2 ps-1 bg-light"
                        name="made"
                        value={input.made}
                        placeholder="Ишлаб
                                                чикарувчи"
                        onChange={(event) => handleFormChange(index, event)}
                      />
                      <input
                        className="qurilmainput form-control ms-2 ps-1 bg-light"
                        name="char"
                        value={input.char}
                        placeholder="Кўрсаткичи"
                        onChange={(event) => handleFormChange(index, event)}
                      />
                      <input
                        className="qurilmainput form-control ms-2 ps-1 bg-light"
                        name="steyt"
                        value={input.steyt}
                        placeholder="Ҳолати"
                        onChange={(event) => handleFormChange(index, event)}
                      />
                    </div>
                  );
                })}
              </form>
              <div className="d-flex mt-2">
                <Button
                  ButtonStyle={"oq-button ms-2"}
                  name="+"
                  ButtonFunction={addFields}
                />
                <Button
                  ButtonStyle={"oq-button ms-2"}
                  name="-"
                  ButtonFunction={removeFields}
                />
              </div>
            </div>
          </div>
          <div className="my-4 d-flex justify-content-center mb-5">
            <Button
              ButtonStyle={"oq-button"}
              name="Янгилаш"
              ButtonFunction={AddAll}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateDevice;
