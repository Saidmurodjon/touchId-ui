import React, { useState, useEffect } from "react";
import Bajaruvchilar from "../../view/bajaruvchilar/Bajaruvchilar";

export default function Search(props) {
  // const { page = "", searchValue = [] } = props;
  const [input, setInput] = useState("");
  // const [searchPage, setSearchPage] = useState([]);
  Bajaruvchilar(input);

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
