import React from "react";
import axios from "axios";
import config from "../../config.json";
function BItem(props) {
  const { item = {}, BFunction } = props;
  const Check = async (item) => {
    const result = await window.confirm(
      "Bajaruvchi malumotlari o'chirilsinmi ? "
    );
    if (result) {
      Delete(item);
      return;
    }
    alert("O'chirilmadi");
  };
  async function Delete(item) {
    await axios
      .delete(`${config.SERVER_URL}user/${item._id}`)
      .then((res) => {
        alert(`Bajaruvchi malumotlari O'chirildi`);
      })
      .catch((error) => console.log(error));
  }
  return (
    <>
      <div key={item._id} className="col-md-6">
        <div className="card m-2 p-0">
          <div className="p-1 m-2">
            <div className="row fustify-content-center">
              <div className="col-md-8 ps-3">
                <p>{item.tash}</p>
              </div>
              <div className="col-md-4 pe-3 d-flex justify-content-end">
                <h5>
                  <i
                    className="bi bi-pencil-square  text-secondary "
                    onClick={() => BFunction(item)}
                  ></i>
                  <i
                    className="bi bi-trash3 text-danger"
                    onClick={() => Check(item)}
                  ></i>
                </h5>
              </div>
              <div className="col-md-12 ps-3">
                <h4>{item.fish}</h4>
              </div>
              <div className="col-md-12 ps-3">
                <p className="d-inline">Лавозими: {item.lavozim}</p>
              </div>
              <div className="col-md-7 ps-3">
                <p className="d-inline">Телефон: {item.tel}</p>
              </div>
              <div className="col-md-5 pe-5 d-flex justify-content-end">
                <p>Парол: {item.parol}</p>
              </div>
            </div>
          </div>
          {/* <h4 className="d-flex float-end">
            <i
              className="bi bi-pencil-square  me-2 mt-2 text-secondary "
              // onClick={() => BxlEdit(elem)}
            ></i>
            <i
              className="bi bi-trash3 text-danger mt-2 "
              // onClick={() => BxlDelet(elem)}
            ></i>
          </h4>
          <h6>{item.tash}</h6>
          <h4>{item.fish}</h4>
          <p>Лавозими: {item.lavozimi}</p>
          <p className="d-inline">Телефон: {item.tel}</p>
          <p className="d-inline float-end">Парол: {item.parol}</p> */}
        </div>
      </div>
    </>
  );
}

export default BItem;
