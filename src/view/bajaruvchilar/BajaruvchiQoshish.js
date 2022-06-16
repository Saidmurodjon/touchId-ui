import { useState } from "react";
import axios from "axios";
import Button from "../../components/button/Button";
const BajaruvchiQoshish = () => {
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
    await axios
      .post("https://government-backend.herokuapp.com/user", bajaruvchi)
      .then((res) => {
        alert("Bajaruvchi malumotlari qo'shildi.");
      })
      .catch((error) => console.log(error));
    await setBajaruvchi({
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
      <div className="">
        <h3>Бажарувчи қўшиш</h3>
        <div className="">
          <div className="">
            <form onSubmit={Submit} className="globalBorder border-light p-4">
              <input
                className="form-control"
                type="text"
                placeholder="TASH"
                name="tash"
                value={bajaruvchi.tash}
                onChange={changeHandler}
              />
              <input
                className="form-control"
                type="text"
                placeholder="lavozim"
                name="lavozim"
                value={bajaruvchi.lavozim}
                onChange={changeHandler}
              />
              <input
                className="form-control"
                type="text"
                placeholder="fish"
                name="fish"
                value={bajaruvchi.fish}
                onChange={changeHandler}
              />
              <input
                className="form-control"
                type="text"
                placeholder="ismi"
                name="ismi"
                value={bajaruvchi.ismi}
                onChange={changeHandler}
              />

              <input
                className="form-control"
                type="text"
                placeholder="+998"
                name="tel"
                value={bajaruvchi.tel}
                onChange={changeHandler}
              />
              <input
                className="form-control"
                type="text"
                placeholder="parol"
                name="parol"
                value={bajaruvchi.parol}
                onChange={changeHandler}
              />
            </form>
            <Button
              name="Қўшиш"
              ButtonFunction={Send}
              ButtonStyle="oq-button"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BajaruvchiQoshish;
