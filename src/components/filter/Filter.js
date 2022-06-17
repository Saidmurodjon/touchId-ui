import React, { useState } from "react";


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


function Filter() {
  const [time, setTime] = useState({
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear(),
  });
  console.log(time);

  const changeHandler = (e) => {
    setTime({ ...time, [e.target.name]: e.target.value });
  };
  // const filterla = () => {
  //   console.log(oy + "+" + yil);
  // };
  return (
    <>
      <form action="">
        <div className="d-inline">
          <select
            className="form-select d-inline w-50 "
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
            className="form-select d-inline w-50"
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
    </>
  );
}
export default Filter;
