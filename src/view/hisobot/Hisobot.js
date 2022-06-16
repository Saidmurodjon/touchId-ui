import { useEffect, useState } from "react";
import gerb from "../../assets/gerb.jpg";
import axios from "axios";
import config from "../../config.json"
const Hisobot = () => {
  const [text, setText] = useState([]);
  useEffect(() => {
    axios
      .get(`${config.SERVER_URL}xisobot`)
      .then((res) => {
        setText(res.data);
      })
      .catch((error) => console.log(error));
  }, []);
  console.log(text);
  return (
    <>
      <div className="">
        <div className="row justify-content-center">
          <div className="col-md-5 justify-content-center">
            <h4>{}</h4>
          </div>
          <div className="col-md-2">
            <img className="w-50" src={gerb} alt="gerb" />
          </div>
          <div className="col-md-5">
            <h4>{}</h4>
          </div>
          <div className="col-md-12">
            <h6 className="border-bottom">{}</h6>
          </div>
          <div className="col-md-12">
            <h3>{}</h3>
          </div>
          <div className="col-md-6">{new Date().toDateString()}</div>
          <div className="col-md-6">
            <h3 className="d-inline float-end">{121}</h3>
          </div>
          <div className="col-md-8">
            <h3>{}</h3>
          </div>
          <div className="col-md-5"></div>
        </div>
      </div>
    </>
  );
};

export default Hisobot;
