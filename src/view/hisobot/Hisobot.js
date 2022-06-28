import React, { useRef, useState, useEffect } from "react";
import Dalolatnoma from "../../components/dalolatnoma/Dalolatnoma";
import { useReactToPrint } from "react-to-print";
import axios from "axios";
import config from "../../config.json";
import ChandeDalolatnoma from "../../components/change-dalolatnoma/ChangeDalolatnoma";
import Navbar from "../../components/navbar/Navbar";
import Filter from "../../components/filter/Filter";
import { useNavigate } from "react-router-dom";
import "./Hisobot.css";

export default function Hisobot() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const componentRef = useRef();
  const [text, setText] = useState([]);
  const [report, setReport] = useState([]);

  const TOKEN = {
    headers: {
        "jwt-token": sessionStorage.getItem("jwt-token"),
    },
};
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

  // Dalolatnoma uchun fiter qilingan hisobotlar
  const Filters = () => {
    const time = JSON.parse(localStorage.getItem("time"));
    const stat={
      year:time.year,
      month:time.month,
      stat:true,

    
    }
    axios
      .post(`${config.SERVER_URL}report/filter`, stat, TOKEN)
      .then(
        (res) => {
          setReport(res.data);
        },
        (err) => {
          if (err.response.status === 401) {
            navigate("/");
          }
        }
      )
      .catch((error) => console.log(error));
  };
  // console.log(report);
  return (
    <>
      <div className="sticky-top xisobor-sticky">
        <Navbar search="true" />
      </div>
      <div className="w-100 px-5">
        <div className="d-flex justify-content-between align-items-center pe-4 mt-3">
          <h4 className="title-xisobot">
            Хисобот
          </h4>
          <div className="d-flex">
            <Filter FilterFunction={Filters} />
            <button
              className="select-style-hisobot ms-4 filter-before"
              onClick={handlePrint}
            >
              <i class="bi bi-printer h4"></i>
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
            <Dalolatnoma ref={componentRef} text={text[0]} reports={report} />
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
