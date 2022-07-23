import React, { useRef, useState, useEffect } from "react";
import Dalolatnoma from "../../components/dalolatnoma/Dalolatnoma";
import { useReactToPrint } from "react-to-print";
import axios from "axios";
import config from "../../config.json";
import ChandeDalolatnoma from "../../components/change-dalolatnoma/ChangeDalolatnoma";
import Navbar from "../../components/navbar/Navbar";
import { useNavigate } from "react-router-dom";
import "./Hisobot.css";
import Filter2 from "../../components/filter2/Filter2";

export default function Hisobot() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const componentRef = useRef();
  const [text, setText] = useState([]);
  const [report, setReport] = useState([]);
  const [ser, setSer] = useState([]);
  const [run, setRun] = useState(false);
  const tashkilot_id = sessionStorage.getItem("tashkilot_id");
  const TOKEN = {
    headers: {
      "jwt-token": sessionStorage.getItem("jwt-token"),
      tashkilot_id: tashkilot_id,
    },
  };
  const date = new Date().toISOString().slice(0, 8);

  const [next, setNext] = useState({
    quantity: 1,
    step: 50,
    from: date + new Date().getDate(),
    to: date + (new Date().getDate() + 1),
  });
  useEffect(() => {
    axios
      .get(`${config.SERVER_URL}xisobot`, TOKEN)
      .then(
        (res) => {
          setText(res.data);
        },
        (err) => {
          if (err.response.status === 401) {
            navigate("/");
          }
        }
      )
      .catch((error) => console.log(error.status));
  }, [showModal]);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const ShowModal = () => {
    setShowModal(false);
  };
  // console.log(TOKEN);
  useEffect(() => {
    const Fun = async () => {
      try {
        const res = await axios.post(
          `${config.SERVER_URL}report/next`,
          next,
          TOKEN
        );
        if (res.status === 200) {
          setReport([...report, ...res.data]);
          setNext({ ...next, quantity: next.quantity + 1 });
        }
      } catch (err) {
        if (err.response.status === 401) {
          navigate("/");
        }
        if (err.response.status === 404) {
          setRun(!run);
        }
        console.log(err);
      }
    };
    Fun();
  }, [next]);
  useEffect(() => {
    setSer([]);
    let arr = [];
    if (report) {
      report.map((e) => e.services.map((i) => arr.push(i)));
    }
    setSer(arr);
  }, [run]);
  // Dalolatnoma uchun fiter qilingan hisobotlar
  const Filters = async (time) => {

    setSer([]);
    setReport([]);
    setNext({ ...next, quantity: 1, from: time.from, to: time.to });
  };

  return (
    <>
      <div className="sticky-top xisobor-sticky">
        <Navbar search="true" />
      </div>
      <div className="w-100 px-5">
        <div className="d-flex justify-content-between align-items-center pe-4 mt-3">
          <h4 className="title-xisobot">Хисобот</h4>
          <div className="d-flex">
            <Filter2 FilterFunction={Filters} />

            <button
              className="select-style-hisobot ms-4 filter-before"
              onClick={handlePrint}
            >
              <i className="bi bi-printer h4"></i>
            </button>
            <button
              onClick={() => setShowModal(true)}
              className="select-style-hisobot ms-2"
            >
              <i className="bi bi-pencil-square h4"></i>
            </button>
          </div>
        </div>
        <div className="row xisobot-family">
          <div className="d-flex justify-content-center align-items-center">
            <Dalolatnoma ref={componentRef} text={text[0]} reports={ser} time={next} />
            {showModal ? (
              <ChandeDalolatnoma text={text[0]} Show={ShowModal} />
            ) : (
              false
            )}
          </div>
        </div>
      </div>
    </>
  );
}
