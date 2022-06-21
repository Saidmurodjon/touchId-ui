import Button from "../button/Button";
import React, { useEffect, useState } from "react";
const month = [
  {
    name: "Январь",
    value: 1,
  },
  {
    name: "Февраль",
    value: 2,
  },
  {
    name: "Март",
    value: 3,
  },
  {
    name: "Апрель",
    value: 4,
  },
  {
    name: "Май",
    value: 5,
  },
  {
    name: "Июнь",
    value: 6,
  },
  {
    name: "Июль",
    value: 7,
  },
  {
    name: "Август",
    value: 8,
  },
  {
    name: "Сентябрь",
    value: 9,
  },
  {
    name: "Октябрь",
    value: 10,
  },
  {
    name: "Ноябрь",
    value: 11,
  },
  {
    name: "Декабрь",
    value: 12,
  },
];
const year = [
  new Date().getFullYear(),
  new Date().getFullYear() - 1,
  new Date().getFullYear() - 2,
  new Date().getFullYear() - 3,
  new Date().getFullYear() - 4,
];

function Filter(props) {
  const { FilterFunction } = props;
  const [time, setTime] = useState({
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear(),
  });
  useEffect(() => {
    localStorage.setItem("time", JSON.stringify(time));
  }, [time]);

  const changeHandler = (e) => {
    setTime({ ...time, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="">
        <div className="d-inline">
          <Button
            ButtonStyle="oq-button"
            name="Filter"
            ButtonFunction={FilterFunction}
          />
        </div>
        <br />
        <form action="">
          <div className="d-inline">
            <select
              className="form-select d-inline w-25"
              onChange={changeHandler}
              value={time.month}
              name="month"
            >
              {month.map((item) => (
                <option key={item.value} value={item.value}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
          <div className="d-inline">
            <select
              className="form-select d-inline w-25"
              onChange={changeHandler}
              value={time.year}
              name="year"
            >
              {year.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </form>
      </div>
    </>
  );
}
export default Filter;
