import React, { useState, useEffect } from "react";
import Bajaruvchilar from "../../view/bajaruvchilar/Bajaruvchilar";

export default function Search(props) {
  const { page = "", data = [], type1 = "", type2 = "" } = props;
  console.log(data);
  const [input, setInput] = useState("");
  const [searchPage, setSearchPage] = useState([]);
  Bajaruvchilar(searchPage);
  console.log(input);
  useEffect(() => {
    setSearchPage([]);
    // if (input) {
    //   setLook("pupils");
    // }

    data.filter((val) => {
      if (val.ismi.toLowerCase().includes(input.toLowerCase())) {
        setSearchPage((searchPage) => [...searchPage, val]);
      }
    });
  }, []);
  return (
    <div className=" w-75">
      <form action="">
        <input
          className="form-control w-100"
          type="search"
          placeholder="Қидириш"
          onChange={(e) => setInput(e.target.value)}
        />
      </form>
    </div>
  );
}
