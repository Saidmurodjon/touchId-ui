import React, { useState, useEffect } from "react";
// import Bajaruvchilar from "../../view/bajaruvchilar/Bajaruvchilar";
import Button from "../button/Button";
export default function Search(props) {
  const { Searchs } = props;
  const [input, setInput] = useState("");
  // const [searchPage, setSearchPage] = useState([]);
  // Bajaruvchilar(input);

  return (
    <div className=" w-75">
      <form action="">
        <input
          className="form-control w-100"
          type="search"
          placeholder="Қидириш"
          onChange={(e) =>
            localStorage.setItem("search", JSON.stringify(e.target.value))
          }
        />
      </form>
      <Button ButtonStyle="oq-button" name="Search" ButtonFunction={Searchs} />
    </div>
  );
}
