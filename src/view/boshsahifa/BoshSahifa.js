import { useState, useEffect } from "react";
import Item from "../../components/boshSahifa/Item";
import More from "../../components/boshSahifa/More";
import Xodimlar from "../../components/boshSahifa/Xodimlar";
import Navbar from "../../components/navbar/Navbar";
import Filter2 from "../../components/filter2/Filter2";
import axios from "axios";
import config from "../../config.json";
import { useNavigate } from "react-router-dom";
import "./Bosh.css";

const BoshSahifa = () => {
  const navigate = useNavigate();
  const date = new Date().toISOString().slice(0, 8);
  const tashkilot_id = sessionStorage.getItem("tashkilot_id");
  const time = localStorage.getItem("time-hisobot");
  const TOKEN = {
    headers: {
      "jwt-token": sessionStorage.getItem("jwt-token"),
      tashkilot_id: tashkilot_id,
    },
  };
  const [baza, setBaza] = useState([]);
  const [user, setUser] = useState([]);
  const [last, setLast] = useState([]);
  // const [filter, setFilter] = useState(false);
  const [searchPage, setSearchPage] = useState([]);

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

  const [next, setNext] = useState({
    quantity: 1,
    step: 50,
    from: date + new Date().getDate(),
    to: date + (new Date().getDate() + 1),
  });
  // Hisobotdagi ma'lumotlarni tekshirish uchun
  useEffect(() => {
    let t = JSON.parse(time);
    setNext({ ...next, from: t.from, to: t.to });
    console.log(t);
  }, [time]);
  const Search = (input) => {
    const newService = baza.filter(
      (elem) =>
        elem.userFish.toLowerCase().includes(input.toLowerCase()) ||
        elem.cilientFish.toLowerCase().includes(input.toLowerCase())
    );
    setSearchPage(newService);
  };
  useEffect(() => {
    const Fun = async () => {
      try {
        const res = await axios.post(
          `${config.SERVER_URL}report/next`,
          next,
          TOKEN
        );
        if (res.status === 200) {
          setBaza([...baza, ...res.data]);
          setNext({ ...next, quantity: next.quantity + 1 });
        }
      } catch (err) {
        if (err.response.status === 401) {
          navigate("/");
        }
        console.log(err);
      }
    };
    Fun();
  }, [next]);

  useEffect(() => {
    // xodim uchun
    const GetXodim = async () => {
      try {
        const res = await axios.get(`${config.SERVER_URL}user`, TOKEN);
        if (res.status === 200) {
          setUser(res.data);
        }
      } catch (err) {
        if (err.response.status === 401) {
          navigate("/");
        }
        console.log(err);
      }
    };
    GetXodim();
  }, []);
  // vid uchun
  const [view, setView] = useState(false);
  //fiterdagi button bosilganda FilterFunction ishlaydi
  const Filter = (time) => {
    setNext({ ...next, quantity: 1, from: time.from, to: time.to });
    setBaza([]);
  };

  useEffect(() => {
    const Arr = [];
    user.map((elem) => {
      const news = baza.filter((item) => item.userFish === elem.fish);
      if (news.length > 0) {
        Arr.push({
          name: elem.fish.split(" ")[1][0] + "." + elem.fish.split(" ")[0],
          workCount: news.length,
        });
      }
    });
    setLast(Arr);
  }, [baza]);

  return (
    <div className="bajarilgan bg-white">
      <div className="sticky-top">
        <Navbar search="true" SearchFunction={Search} />
      </div>
      {/* Sarlavha */}
      <div className="topPanel d-flex justify-content-between px-5 mt-2">
        <div className="sarlavha d-flex align-items-center">
          <h1>Бажарилган ишлар</h1>
          <h3 className="bedj ms-5 py-3 px-4 border bg-light rounded-circle">
            {baza ? baza.length : "0"}
          </h3>
        </div>
        <div className="filter d-flex me-5 pe-1 mt-2">
          <div className="me-5">
            <Filter2 FilterFunction={Filter} />
          </div>
          <div className="row vid">
            <div className="col-6">
              <button
                className={view ? "px-2 py-1 viewActive" : "px-2 py-1"}
                onClick={() => setView(true)}
              >
                <i className="bi bi-hdd-stack-fill"></i>
              </button>
            </div>
            <div className="col-6">
              <button
                className={
                  view ? "px-2 ms-2 py-1" : "px-2 ms-2 py-1 viewActive"
                }
                onClick={() => setView(false)}
              >
                <i className="bi bi-grid-fill"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Ishchilarning bajarilgan ishlari soni */}
      <div className="xodimlar">
        <div className="xodim row">
          {last.map((worker) => (
            <div className="col-2" key={worker._id}>
              <Xodimlar fish={worker.name} count={worker.workCount} />
            </div>
          ))}
        </div>
      </div>
      {/* Asosiy qism ishlar ro'yxati boshlandi */}
      <div className="bajJadval bg-light p-5">
        <div className="row">
          {searchPage.length > 0
            ? searchPage.map((work) =>
                view ? (
                  <More
                    key={work._id}
                    oy={month[work.date.slice(5, 7) * 1 - 1]}
                    elem={work}
                  />
                ) : (
                  <Item key={work._id} elem={work} />
                )
              )
            : baza
            ? baza.map((work) =>
                view ? (
                  <More
                    key={work._id}
                    oy={month[work.date.slice(5, 7) * 1 - 1]}
                    elem={work}
                  />
                ) : (
                  <Item key={work._id} elem={work} />
                )
              )
            : null}
        </div>
      </div>
    </div>
  );
};

export default BoshSahifa;
