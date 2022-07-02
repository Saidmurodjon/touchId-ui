import React, { useState } from "react";
import Button from "../../components/button/Button";
import "./ChangeDalolatnoma.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import config from "../../config.json";

export default function ChangeDalolatnoma(props) {
  const { text = [], Show } = props;
  const navigate = useNavigate();
  const TOKEN = {
    headers: {
      "jwt-token": sessionStorage.getItem("jwt-token"),
    },
  };

  const [Text, setText] = useState({
    t1: text.t1,
    t2: text.t2,
    t3: text.t3,
    t4: text.t4,
    date: new Date(),
  });

  const changeHandler = (e) => {
    setText({ ...Text, [e.target.name]: e.target.value });
  };

  const Submit = (e) => {
    e.preventDefault();
  };

  const Change = async () => {
    try{
      const res = await axios.put(`${config.SERVER_URL}xisobot/${text._id}`, Text,TOKEN)
      if(res.status===200){
        res.data && alert("Yangilandi");
      }
    }catch(err){
      console.log(err);
      if (err.response.status === 401) {
        navigate("/");
      }
    }
  };
  
  return (
    <div className="dalolatnoma-modal-list-style">
      <div className="dalolatnoma-modeal-list px-5 py-4">
        <form onSubmit={Submit} className="border-light ">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Ташкилот номи
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            type="text"
            name="t1"
            value={Text.t1}
            onChange={changeHandler}
          ></textarea>
          <label htmlFor="exampleFormControlTextarea2" className="form-label">
            Ташкилотнинг русча номи
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            type="text"
            name="t2"
            value={Text.t2}
            onChange={changeHandler}
          ></textarea>
          <label htmlFor="exampleFormControlTextarea3" className="form-label">
            Ташкилот манзили
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            type="text"
            name="t3"
            value={Text.t3}
            onChange={changeHandler}
          ></textarea>
          <label htmlFor="exampleFormControlTextarea4" className="form-label">
            Ташкилот раҳбари
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            type="text"
            name="t4"
            value={Text.t4}
            onChange={changeHandler}
          ></textarea>
        </form>
        <br />
        <div className="d-flex justify-content-center">
          <Button
            ButtonFunction={() => Change()}
            name="Change"
            ButtonStyle="oq-button"
          />
        </div>
        <i className="bi bi-x-lg dalolatnoma-modal-icon" onClick={Show}></i>
      </div>
    </div>
  );
}
