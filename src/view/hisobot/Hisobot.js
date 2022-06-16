import React, { useRef, useState, useEffect } from "react";
import Dalolatnoma from "../../components/dalolatnoma/Dalolatnoma";
import { useReactToPrint } from "react-to-print";
import axios from "axios";
import config from "../../config.json";
import "./Hisobot.css";
import ChandeDalolatnoma from "../../components/change-dalolatnoma/ChangeDalolatnoma";
export default function Hisobot() {
  const [showModal, setShowModal] = useState(false);
  const componentRef = useRef();
  const [text, setText] = useState([]);

  useEffect(() => {
    axios
      .get(`${config.SERVER_URL}xisobot`)
      .then((res) => {
        res.data && setText(res.data);
      })
      .catch((error) => console.log(error));
  }, [showModal]);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const ShowModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <div className="">
        <div className="row justify-content-center">
          <div className="col-md-12  d-flex justify-content-center align-items-center">
            <div className="hisobot-filter">
              <div className="row">
                <div className="col-md-6">
                  <h3>Xisobot</h3>
                </div>
                <div className="col-md-6">
                  <div className="col-md-6 float-end">
                    <button
                      className="btn btn-light p-2 float-end"
                      onClick={handlePrint}
                    >
                      Print
                    </button>
                    <button
                      onClick={() => setShowModal(true)}
                      className="btn btn-light p-2 float-end "
                    >
                      <i className="bi bi-pencil-square"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-12 d-flex justify-content-center">
            <Dalolatnoma ref={componentRef} text={text[0]} />
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
