import Button from "../../components/button/Button";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ChangeDalolatnoma.css";
import config from "../../config.json";
export default function ChangeDalolatnoma(props) {
  const { text = [], Show } = props;
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
  const Change = async () => {
    await axios
      .put(`${config.SERVER_URL}xisobot/${text._id}`, Text)
      .then((res) => {
        res.data && alert("Yangilandi");
      })
      .catch((error) => console.log(error));
    await Show();
  };
  const Submit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="dalolatnoma-modal-list-style">
      <div className="dalolatnoma-modeal-list p-3">
        <form onSubmit={Submit} className="border-light ">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Example textarea
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
            Example textarea
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
            Example textarea
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
            Example textarea
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
