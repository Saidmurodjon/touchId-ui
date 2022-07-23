import React, { useEffect, useState } from "react";
import "./Filter2.css";

function Filter2(props) {
  const { FilterFunction } = props;
  const date = new Date().toISOString().slice(0, 10);

  const [time, setTime] = useState({
    from: date,
    to: date,
  });
  useEffect(() => {
    localStorage.setItem("time", JSON.stringify(time));
  });

  const changeHandler = (e) => {
    setTime({ ...time, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="d-flex">
        <button
          className="select-style ms-2"
          name="Filter"
          onClick={() => FilterFunction(time)}
        >
          Filter
        </button>
        <form action="" className="d-flex">
          <input
            className="date-input pointer text-secondary ms-2"
            type="date"
            name="from"
            data-date-format="dd-mm-yyyy"
            value={time.from}
            onChange={changeHandler}
          />
          <input
            className="date-input pointer text-secondary ms-2"
            type="date"
            name="to"
            value={time.to}
            onChange={changeHandler}
          />
        </form>
      </div>
    </>
  );
}
export default Filter2;
