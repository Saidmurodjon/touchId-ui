import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";
import axios from "axios";
import config from "../../config.json";
const TashkilotQoshish = () => {
  const navigate = useNavigate();
  const Close = () => {
    navigate("/bajaruvchi");
  };
  const baj = JSON.parse(localStorage.getItem("bajaruvchi"));
  const [bajaruvchi, setBajaruvchi] = useState({
    ismi: baj.ismi,
    fish: baj.fish,
    tash: baj.tash,
    lavozim: baj.lavozim,
    tel: baj.tel,
    parol: baj.parol,
  });
  const changeHandler = (e) => {
    setBajaruvchi({ ...bajaruvchi, [e.target.name]: e.target.value });
  };
  async function Update(elem) {
    await axios
      .put(`${config.SERVER_URL}user/${elem._id}`, bajaruvchi)
      .then((res) => {
        alert(`Bajaruvchi malumotlari yangilandi`);
      })
      .catch((error) => console.log(error));
    navigate("/bajaruvchi");
  }
  const Check = async (elem) => {
    const result = await window.confirm(
      "Bajaruvchi malumotlari o'chirilsinmi ? "
    );
    if (result) {
      Delete(elem);
      return;
    }
    alert("O'chirilmadi");
  };
  async function Delete(elem) {
    await axios
      .delete(`${config.SERVER_URL}user/${elem._id}`)
      .then((res) => {
        alert(`Bajaruvchi malumotlari O'chirildi`);
      })
      .catch((error) => console.log(error));
    navigate("/bajaruvchi");
  }
  const Submit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="addTashkilot bg-light h-100 pt-2 ">
      <form
        onSubmit={Submit}
        className="m-5 py-5 pe-5 bg-white addTash position-relative"
      >
        <i className="bi bi-x" onClick={Close}></i>
        <div className="row mt-4">
          <div className="col-3 text-end pe-3 mt-3">
            <label className="form-label" htmlFor="">
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
          <div className="col-3 text-end pe-3 mt-3">
            <label className="form-label" htmlFor="">
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
          <div className="col-3 text-end pe-3 mt-3">
            <label className="form-label" htmlFor="">
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
          <div className="col-3 text-end pe-3 mt-3">
            <label className="form-label" htmlFor="">
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
          <div className="col-3 text-end pe-3 mt-3">
            <label className="form-label" htmlFor="">
              Телефон
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
        <div className="row mt-4">
          <div className="col-3 text-end pe-3 mt-3">
            <label className="form-label" htmlFor="">
              Парол
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
        <div className="mt-5 text-center">
          <Button
            ButtonStyle={"oq-button"}
            name="Yangilash"
            ButtonFunction={Update}
            elem={baj}
          />
          <Button
            ButtonStyle={"oq-button bg-danger"}
            name="O'chirish"
            ButtonFunction={Check}
            elem={baj}
          />
        </div>
      </form>
    </div>
  );
};

export default TashkilotQoshish;
