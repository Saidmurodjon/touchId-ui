import { useState } from "react";
import axios from "axios";
import Button from "../../components/button/Button";
const BuyurtmaQoshish = () => {
  const [buyrtmachi, setBuyrtmachi] = useState({
    fish: "",
    bolim: "",
    kabinet: "",
    lavozim: "",
    tel: "",
  });
  const changeHandler = (e) => {
    setBuyrtmachi({ ...buyrtmachi, [e.target.name]: e.target.value });
  };
  const Send = async () => {
    await axios
      .post("https://government-backend.herokuapp.com/user", buyrtmachi)
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
      <div className="">
        <h3>Буюртмачи қўшиш</h3>
        <div className="">
          <div className="">
            <form onSubmit={Submit} className="globalBorder border-light p-4">
              <input
                className="form-control"
                type="text"
                placeholder="fish"
                name="fish"
                value={buyrtmachi.fish}
                onChange={changeHandler}
              />
              <input
                className="form-control"
                type="text"
                placeholder="+998"
                name="tel"
                value={buyrtmachi.tel}
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

export default BuyurtmaQoshish;
