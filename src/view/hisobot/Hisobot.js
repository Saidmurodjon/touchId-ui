import React from "react";
import Dalolatnoma from "../../components/dalolatnoma/Dalolatnoma";
import "./Hisobot.css";
export default function Hisobot() {
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
                    <button className="btn btn-light p-2 float-end ">
                      Filter
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-12 d-flex justify-content-center">
            <Dalolatnoma />
          </div>
        </div>
      </div>
    </>
  );
}
