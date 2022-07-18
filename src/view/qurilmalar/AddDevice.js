import React, { useEffect, useState } from "react";
import Button from "../../components/button/Button";
import Navbar from '../../components/navbar/Navbar'
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import config from "../../config.json";

const AddDevice = () => {
  const navigate = useNavigate();
  const id = useParams().id;
  const tashkilot_id = sessionStorage.getItem("tashkilot_id");
  const TOKEN = {
    headers: {
      "jwt-token": sessionStorage.getItem("jwt-token"),
      "tashkilot_id": tashkilot_id,
    },
  };
  // Statelar
  const [dev, setDev] = useState({
    name: "",
    elem: [],
    deviceId: id,
    date: new Date(),
  });
  const [inputFields, setInputFields] = useState([
    { name: "", made: "", char: "", steyt: "" },
  ]);

  // Yangi input qo'shish funksiyasi
  const addFields = () => {
    let newfield = { name: "", made: "", char: "", steyt: "" };
    setInputFields([...inputFields, newfield]);
  };
  // Inputlarni o'chirish funksiyasi
  const removeFields = (index) => {
    let data = [...inputFields];
    data.splice(index, 1);
    setInputFields(data);
  };
  // Yangi maydonlarni mavjudlarining davomidan qo'shib chiqarish
  useEffect(() => {
    setDev({ ...dev, elem: inputFields });
  }, [inputFields]);

  const changeHandler = (e) => {
    setDev({ ...dev, [e.target.name]: e.target.value });
  };

  const handleFormChange = (index, event) => {
    let data = [...inputFields];
    data[index][event.target.name] = event.target.value;
    setInputFields(data);
  };
  // Qo'shish funksiyasi
  const AddAll = async () => {
    if (dev.name) {
      try{
        const res = await axios.post(`${config.SERVER_URL}device/elem`, dev, TOKEN)
        if(res.status===200){
          res.data && alert("Qo'shildi");
          navigate('/qurilmatoifa')
        }
      }catch(err){
        console.log(err);
        if (err.response.status === 401) {
          navigate("/");
        }
      }
    } else {
      alert("Ma'lumot kiriting");
    }
  };
  
  return (
    <div>
      <div className="sticky-top">
        <Navbar />
      </div>
      <h1 className="ms-5">Курилма қўшиш</h1>
      <div className="AddDevice bg-light mt-5 p-3">
        <div className=" mt-3 bg-white p-3">
          <div className="d-flex pt-3">
            <h2>Қурилма номи:</h2>
            <input
              name="name"
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
                        placeholder="Номи"
                        onChange={(event) => handleFormChange(index, event)}
                      />
                      <input
                        className="qurilmainput form-control ms-2 ps-1 bg-light"
                        name="made"
                        placeholder="Ишлаб
                                                чикарувчи"
                        onChange={(event) => handleFormChange(index, event)}
                      />
                      <input
                        className="qurilmainput form-control ms-2 ps-1 bg-light"
                        name="char"
                        placeholder="Кўрсаткичи"
                        onChange={(event) => handleFormChange(index, event)}
                      />
                      <input
                        className="qurilmainput form-control ms-2 ps-1 bg-light"
                        name="steyt"
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
              name="Қўшиш"
              ButtonFunction={AddAll}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddDevice;
