import { useState, useEffect } from "react";
import "./Bosh.css";
import Item from "../../components/boshSahifa/Item";
import More from "../../components/boshSahifa/More";
import Xodimlar from "../../components/boshSahifa/Xodimlar";
import Navbar from "../../components/navbar/Navbar";
import Filter from "../../components/filter/Filter";
import axios from "axios";
import config from "../../config.json";
import { useNavigate } from "react-router-dom";

const BoshSahifa = () => {
  const navigate = useNavigate();
  const TOKEN = {
    headers: {
      "jwt-token": sessionStorage.getItem("jwt-token"),
    },
  };
  const [baza, setBaza] = useState([]);

  const [user, setUser] = useState([]);
  const [last, setLast] = useState([]);
  const [filter, setFilter] = useState(false);
  const [searchPage, setSearchPage] = useState([]);
  const Search = (input) => {
    const newService = baza.filter(
      (elem) =>
        elem.userFish.toLowerCase().includes(input.toLowerCase()) ||
        elem.cilientFish.toLowerCase().includes(input.toLowerCase())
    );
    setSearchPage(newService);
  };
  useEffect(() => {
    // xodim uchun
    axios
      .get(`${config.SERVER_URL}user`, TOKEN)
      .then(
        (res) => {
          setUser(res.data);
        },
        (err) => {
          if (err.response.status === 401) {
            navigate("/");
          }
        }
      )
      .catch((error) => console.log(error));
    axios
      .get(`${config.SERVER_URL}report`, TOKEN)
      .then((res) => {
        let foo = res.data.filter((item) => {
          if (item.tasdiq === true) {
            return true;
          }
        });
        setBaza(foo);
      })
      .catch((error) => console.log(error));
  }, []);
  // vid uchun
  const [view, setView] = useState(false);

  let month = [
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

  const Filters = () => {
    const time = JSON.parse(localStorage.getItem("time"));
    setFilter(true);
    axios
      .post(`${config.SERVER_URL}report/filter`, time, TOKEN)
      .then(
        (res) => {
          setBaza(res.data);
          setFilter(false);
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
            {baza.length}
          </h3>
        </div>
        <div className="filter d-flex me-5 pe-1 mt-2">
          <div className="me-5">
            {filter ? "Filterlanmodqa..." : <Filter FilterFunction={Filters} />}
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
        <div className="xodim">
          {last.map((worker) => (
            <div key={worker._id}>
              <Xodimlar fish={worker.name} count={worker.workCount} />
            </div>
          ))}
        </div>
      </div>
      {/* Asosiy qism ishlar ro'yxati boshlandi */}
      <div className="bajJadval bg-light p-5">
        {filter ? (
          "Filterlanmodqa..."
        ) : (
          <div className="row">
            {searchPage.length > 0
              ? searchPage.map((work) =>
                view ? (
                  <More
                    key={work._id}
                    oy={month[work.fullFData.slice(5, 7) * 1 - 1]}
                    elem={work}
                  />
                ) : (
                  <Item key={work._id} elem={work} />
                )
              )
              : baza.map((work) =>
                view ? (
                  <More
                    key={work._id}
                    oy={month[work.fullFData.slice(5, 7) * 1 - 1]}
                    elem={work}
                  />
                ) : (
                  <Item key={work._id} elem={work} />
                )
              )}
          </div>
        )}
      </div>
    </div>
  );
};

export default BoshSahifa;
