import React, { useState, useEffect } from "react";
import axios from "axios";
import config from "../../config.json";
import gerb from "../../assets/gerb.jpg";

import "./Dalolatnoma.css";
const Dalolatnoma = React.forwardRef((props, ref) => {
  const { text = [], reports = [] } = props;
  const [order, setOrder] = useState([]);
  const [service, setService] = useState([]);
  const [total, setTotal] = useState([]);
  // const services=[]
  useEffect(()=>{
    // const  rep = reports.find(e=>
      
    //   )
  })
  // useEffect(() => {
  //   const itemIndex = order.findIndex(
  //     (orderItem) => orderItem._id === item._id
  //   );
  //   if (itemIndex < 0) {
  //     const newItem = {
  //       ...item,
  //       quantity: 1,
  //     };
  //     setOrder([...order, newItem]);
  //   } else {
  //     const newOrder = order.map((orderItem, index) => {
  //       if (index === itemIndex) {
  //         return {
  //           ...orderItem,
  //           quantity: orderItem.quantity + 1,
  //         };
  //       } else {
  //         return orderItem;
  //       }
  //     });
  //     setOrder(newOrder);
  //   }
  // }, [reports]);
  useEffect(() => {
    axios
      .get(`${config.SERVER_URL}service`)
      .then((res) => {
        setService(res.data);
      })
      .catch((error) => console.log(error));
  }, []);
  console.log(reports);
  return (
    <>
      <div
        ref={ref}
        className="dalolatnoma d-flex justify-content-center align-items-center pt-5"
      >
        {text.length <= 0 ? (
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
                    O'ZBEKISTON RESPUBLIKASI {text.t1.toUpperCase()} "ELEKTRON
                    XOKIMYATNI ROVOJLANTIRISH MARKAZI"
                  </h4>
                </div>
                <div className="col-md-2 d-flex justify-content-center align-items-center">
                  <img className="img" src={gerb} alt="gerb" />
                </div>
                <div className="col-md-5">
                  <h4 className="text-center">{text.t2}</h4>
                </div>
                <div className="col-md-12">
                  <h6 className="location mb-0">{text.t3}</h6>
                  {/* <img className="line" src={line} alt="" /> */}
                  <div className="line"></div>
                </div>
                <div className="col-md-12">
                  <h3 className="text-center">
                    <b>Далолатнома</b>
                  </h3>
                </div>
                <div className="col-md-6">{new Date().toDateString()}</div>
                <div className="col-md-5">
                  <h3 className="d-inline float-end">{121}</h3>
                </div>
                <div className="col-md-11">
                  <h4>
                    Биз куйида имзо чекувчилар: Бажарувчи {text.t1} Электрон
                    хокимятни ривожлантириш маркази номидан директори{" "}
                    <b>{text.t4}</b>
                    бир томондан. Бажарувчи Фаргона вилоят хокимлиги иккинчи
                    томинидан ушбу далолатномани {text.t1} Электрон хокимятни
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
