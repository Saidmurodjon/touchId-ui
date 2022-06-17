import { useState, useEffect } from "react";
import axios from "axios";
import Button from "../../components/button/Button";
import config from "./../../config.json";
const BuyurtmaQoshish = () => {
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
      .post(`${config.SERVER_URL}user`, buyrtmachi)
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
                className="form-control mt-1"
                type="text"
                placeholder="fish"
                name="fish"
                value={buyrtmachi.fish}
                onChange={changeHandler}
              />
              <select
                className="form-select mt-1"
                id=""
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
              <select
                className="form-select mt-1"
                id=""
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
              <select
                className="form-select mt-1"
                id=""
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
              <input
                className="form-control mt-1"
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
