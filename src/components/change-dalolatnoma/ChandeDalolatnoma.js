import React from "react";
import Button from "../button/Button";

export default function ChandeDalolatnoma(props) {
  const { text = [] } = props;
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
  const Change=()=>{
      alert("change")
  }
  const Submit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={Submit} className="globalBorder border-light ">
        <input
          className="form-control mt-5"
          type="text"
          name="t1"
          value={Text.t1}
          onChange={changeHandler}
        />
        <input
          className="form-control mt-5"
          type="text"
          name="t1"
          value={Text.t2}
          onChange={changeHandler}
        />
        <input
          className="form-control mt-5"
          type="text"
          name="t3"
          value={Text.t3}
          onChange={changeHandler}
        />
        <input
          className="form-control mt-5"
          type="text"
          name="t4"
          value={Text.t4}
          onChange={changeHandler}
        />
      </form>
      <Button ButtonFunction={()=>Change()} />
    </div>
  );
}
