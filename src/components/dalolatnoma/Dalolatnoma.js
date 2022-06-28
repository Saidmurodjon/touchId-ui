import React, { useState, useEffect } from "react";
import axios from "axios";
import config from "../../config.json";
import gerb from "../../assets/gerb.jpg";
import { useNavigate } from "react-router-dom";
import QRCode from "react-qr-code";
import "./Dalolatnoma.css";
const Dalolatnoma = React.forwardRef((props, ref) => {
  const TOKEN = {
    headers: {
      "jwt-token": sessionStorage.getItem("jwt-token"),
    },
  };
  const navigate = useNavigate();
  const { text = [], reports = [] } = props;
  const [service, setService] = useState([]);
  const [quantity, setQuantity] = useState([]);
  const [total, setTotal] = useState();
  const date = new Date();
  useEffect(() => {
    if (reports.length > 0) {
      setQuantity([]);
      let t = 0;
      const newArr = [];
      for (let i = 0; i < service.length; i++) {
        const newService = reports.filter((elem) =>
          elem.category.toLowerCase().includes(service[i].name.toLowerCase())
        );
        if (newService.length > 0) {
          newArr.push({
            name: newService[0].category,
            quantity: newService.length,
          });
          t += newService.length;
        }
      }
      setTotal(t);
      setQuantity(newArr);
    }
  }, [reports]);
  // console.log(total);
  useEffect(() => {
    axios
      .get(`${config.SERVER_URL}ish`, TOKEN)
      .then(
        (res) => {
          setService(res.data);
        },
        (err) => {
          if (err.response.status === 401) {
            navigate("/");
          }
        }
      )
      .catch((error) => console.log(error));
  }, []);
  // console.log(reports);
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
              <div className="w-100">
                <div className="row justify-content-center">
                  <div className="col-5 justify-content-center">
                    <h4 className="text-center">
                    ЎЗБЕКИСТОН РЕСПУБЛИКАСИ {text.t1.toUpperCase()}"ЭЛЕКТРОН ХОКИМЯТНИ РОВОЖЛАНТИРИШ МАРКАЗИ"
                    </h4>
                  </div>
                  <div className="col-2 d-flex justify-content-center align-items-center">
                    <img className="img" src={gerb} alt="gerb" />
                  </div>
                  <div className="col-5">
                    <h4 className="text-center">{text.t2}</h4>
                  </div>
                  <div className="col-md-12 mt-5">
                    <h6 className="location mb-0">{text.t3}</h6>
                    {/* <img className="line" src={line} alt="" /> */}
                    <div className="line"></div>
                  </div>
                  <div className="col-md-12">
                    <h3 className="text-center">
                      <b>Далолатнома</b>
                    </h3>
                  </div>
                  <div className="col-md-6">
                    <h4 className="d-inline">
                      {date.toISOString().slice(0, 10)}
                    </h4>
                  </div>
                  <div className="col-md-5">
                    <h3 className="d-inline float-end">{121}</h3>
                  </div>
                  <div className="col-md-1hisobot1">
                    <h4>
                      &nbsp;&nbsp;&nbsp;Биз куйида имзо чекувчилар: Бажарувчи{" "}
                      {text.t1} хузуридаги Электрон хокимятни ривожлантириш
                      маркази номидан директори <b>{text.t4}</b>&nbsp;
                      томондан. Бажарувчи 
                      томинидан ушбу далолатномани {""}
                      {text.t1} Электрон хокимятни ривожлантириш маркази
                      томонидан ку'рсатилган хизматларни тасдиқлаш учун туздик.
                    </h4>
                    <h4>
                      &nbsp; &nbsp; &nbsp;
                      <span className="">
                        Жорий ойда марказ томонидан жами
                        <p className="d-inline text-primary">
                          {" "}
                          {reports.length > 0 ? (
                            total + " марта "
                          ) : (
                            <>
                              <span className="d-inline text-danger">
                                {" "}
                                qiymat mavjud emas
                              </span>
                            </>
                          )}
                        </p>
                        хизматлар ку'рсатилди. <br />
                        <p className="d-inline">Жумладан :</p>
                        {reports.length > 0 ? (
                          quantity.map((item, index) => {
                            return (
                              <p key={index} className="d-inline">
                                {item.name}{" "}
                                <span className="d-inline text-primary">
                                  {item.quantity} марта ,{" "}
                                </span>
                              </p>
                            );
                          })
                        ) : (
                          <>
                            <p className="d-inline text-danger">
                              qiymat mavjud emas{" "}
                            </p>
                          </>
                        )}
                        текшириб камчиликлари бартараф етилди ва профилактика
                        ишлари олиб борилди
                      </span>
                    </h4>
                  </div>
                  <div className="mb-5 d-flex mt-50">
                    <div className="d-flex justify-content-between hisobot-content ">
                      <div className="bajaruvchi-content ">
                        <h4 className="bajaruvchi-content-title">Бажарувчи:</h4>
                        <h5>
                          <span>{text.t1} хузуридаги</span>
                          <span>
                            {" "}
                            Электрон хокимятни ривожлантириш маркази директори
                          </span>
                       
                        </h5>
                        <div className="d-flex justify-content-between">
                          <h5 className="border-direktor"></h5>
                          <h5>
                            <span>{text.t4}</span>
                          </h5>
                        </div>
                      </div>
                      <div className="bajaruvchi-content text-end">
                        <h4 className="bajaruvchi-content-title">Буюртмачи:</h4>
                        <h5>
                          <span>{text.t1}</span>
                        </h5>
                        <QRCode
                          title="The Best Team"
                          value={text.t1}
                          // bgColor={back}
                          // fgColor={fore}
                          size = {120}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
});

export default Dalolatnoma;
