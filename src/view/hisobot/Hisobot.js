import React, { useRef } from "react";
import Dalolatnoma from "../../components/dalolatnoma/Dalolatnoma";
import { useReactToPrint } from "react-to-print";

import "./Hisobot.css";
export default function Hisobot() {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
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
                    <button className="btn btn-light p-2 float-end ">
                      Filter
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-12 d-flex justify-content-center">
            <Dalolatnoma ref={componentRef} />
          </div>
        </div>
      </div>
    </>
  );
}
