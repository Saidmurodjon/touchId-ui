import React from "react";
import Dalolatnoma from "../../components/dalolatnoma/Dalolatnoma";

export default function Hisobot() {
  return (
    <>
      <div className="">
        <div className="row">
          <div className="col-md-6">
            <h3>Xisobot</h3>
          </div>
          <div className="col-md-6 float-end">
            <button className="btn btn-light p-2 float-end ">Filter</button>
          </div>

          <div className="col-md-12">
            <Dalolatnoma />
          </div>
        </div>
      </div>
    </>
  );
}
