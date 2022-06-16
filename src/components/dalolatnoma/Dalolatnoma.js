import React,{ useEffect, useState } from "react";
import gerb from "../../assets/gerb.jpg";
import axios from "axios";
import config from "../../config.json";
import "./Dalolatnoma.css";
const Dalolatnoma = React.forwardRef((props,ref) => {
  const [text, setText] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(`${config.SERVER_URL}xisobot`)
      .then((res) => {
        res.data && setText(res.data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);
  const Text1=()=>{
    alert("text1")
  }
  return (
    <>
      <div ref={ref} className="dalolatnoma d-flex justify-content-center align-items-center pt-5">
        {loading ? (
          <>
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </>
        ) : (
          <>
           <div className="dalolatnoma-print">
           <div className="row justify-content-center">
              <div className="col-md-5 justify-content-center">
                <h4 className="text-center">
                  O'ZBEKISTON RESPUBLIKASI <h4 onDoubleClick={()=>Text1()} >{text[0].t1.toUpperCase()}</h4> "ELEKTRON
                  XOKIMYATNI ROVOJLANTIRISH MARKAZI"
                </h4>
              </div>
              <div className="col-md-2 d-flex justify-content-center align-items-center">
                <img className="img" src={gerb} alt="gerb" />
              </div>
              <div className="col-md-5">
                <h4 className="text-center">{text[0].t2}</h4>
              </div>
              <div className="col-md-12">
                <h6 className="location mb-0">{text[0].t3}</h6>
                {/* <img className="line" src={line} alt="" /> */}
                <div className="line"></div>
              </div>
              <div className="col-md-12">
                <h3 className="text-center">Далолатнома</h3>
              </div>
              <div className="col-md-6">{new Date().toDateString()}</div>
              <div className="col-md-6">
                <h3 className="d-inline float-end">{121}</h3>
              </div>
              <div className="col-md-12">
                <h4>
                  Биз куйида имзо чекувчилар: Бажарувчи {text[0].t1} Электрон
                  хокимятни ривожлантириш маркази номидан директори{" "}
                  <b>{text[0].t4}</b>
                  бир томондан. Бажарувчи Фаргона вилоят хокимлиги иккинчи
                  томинидан ушбу далолатномани {text[0].t1} Электрон хокимятни
                  ривожлантириш маркази томонидан ку'рсатилган хизматларни
                  тасдиқлаш учун туздик.
                </h4>
              </div>
              <div className="col-md-5"></div>
            </div>
           </div>
          </>
        )}
      </div>
    </>
  );
});

export default Dalolatnoma;
