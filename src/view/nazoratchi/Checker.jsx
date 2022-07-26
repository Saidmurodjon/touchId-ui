import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import config from "../../config.json";
import More1 from "../../components/boshSahifa/More1";
import "./Nazoratchi.css";
import Search from "../../components/navbar/Search";
function Checker() {
  const navigate = useNavigate();
  // const date = new Date().toISOString().slice(0, 8);
  const data = useParams().data;
  const [login, setLogin] = useState(false);
  const [baza, setBaza] = useState([]);
  const [check, setCheck] = useState(false);
  const tashkilot_id = data.slice(20);
  const [jwt, setJWT] = useState("");
  const [text, setText] = useState([]);
  const [bazaSearch, setBazaSearch] = useState([]);
  const TOKEN = {
    headers: {
      "jwt-token": jwt,
      "tashkilot_id": tashkilot_id,
    },
  };

  const [next, setNext] = useState({
    from: data.slice(0, 10),
    to: data.slice(10, 20),
    quantity: 1,
    step: 10,
    login: false,
  });

  const [pass, setPass] = useState({
    password: "",
  });
  const changeHandler = (e) => {
    setPass({ [e.target.name]: e.target.value });
    setCheck(false);
  };

  const Check = async () => {
    try {
      const res = await axios.post(`${config.SERVER_URL}login`, pass);
      if (res.status === 200) {
        setJWT(res.data.jwt_token);
        setLogin(true);
        setNext({ ...next, login: !next });
      }
    } catch (err) {
      console.log(err);
      if (err.response.status === 402) {
        setCheck(true);
      }
    }
  };
  useEffect(() => {
    axios
      .get(`${config.SERVER_URL}xisobot`, TOKEN)
      .then(
        (res) => {
          setText(res.data);
        },
        (err) => {
          console.log(err);
        }
      )
      .catch((error) => console.log(error.status));
  }, [jwt]);
  useEffect(() => {
    const Baza = async () => {
      try {
        if (login) {
          const res = await axios.post(
            `${config.SERVER_URL}report/next`,
            next,
            TOKEN
          );
          if (res.status === 200) {
            setBaza([...baza, ...res.data]);
            setNext({ ...next, quantity: next.quantity + 1 });
          }
        }
      } catch (err) {
        console.log(err);
      }
    };
    Baza();
  }, [next]);

  const month = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ];
  function Searchs(text) {
    const newService = baza.filter(
      (elem) =>
        elem.userFish.toLowerCase().includes(text.toLowerCase()) ||
        elem.cilientFish.toLowerCase().includes(text.toLowerCase())
    );
    setBazaSearch(newService);
  }
  const Submit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      {login ? (
        <div className="container">
          <div className="row justify-content-center ">
            <div className="col-12 col-sm-12 col-md-12 sticky-top   ">
              <div className="float-center m-2">
                <Search SearchFunction={Searchs} />
              </div>
            </div>
          </div>
          <div className="bg-light p-3">
            {bazaSearch.length > 0
              ? bazaSearch.map((work) => (
                  <More1
                    key={work._id}
                    oy={month[work.date.slice(5, 7) * 1 - 1]}
                    elem={work}
                    text={text}
                  />
                ))
              : baza.map((work) => (
                  <More1
                    key={work._id}
                    oy={month[work.date.slice(5, 7) * 1 - 1]}
                    elem={work}
                    text={text}
                  />
                ))}
          </div>
        </div>
      ) : (
        <div className="bg-light contWay">
          <form
            className="align-items-center nazForma mx-auto bg-white"
            onSubmit={Submit}
          >
             
              <input
                className="mt-4 ms-5 form-control w-75 px-2"
                type="text"
                name="password"
                placeholder="Parol"
                value={pass.password}
                onChange={changeHandler}
              />
            <button
              className="btn btn-outline-primary px-3 ms-5 mt-2"
              onClick={Check}
            >
              Check
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Checker;
