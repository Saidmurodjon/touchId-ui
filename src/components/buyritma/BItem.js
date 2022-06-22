import React from "react";

function BItem(props) {
  const { item = {}, Del, Up } = props;

  return (
    <>
      <div key={item._id} className="col-md-6">
        <div className="card m-2 p-0">
          <div className="p-1 m-2">
            <div className="row fustify-content-center">
              <div className="col-md-8 ps-3">
                <h4>{item.fish}</h4>
              </div>
              <div className="col-md-4 pe-3 d-flex justify-content-end">
                <h5>
                  <i
                    className="bi bi-pencil-square  text-secondary pointer m-1"
                    onClick={() => Up(item)}
                  ></i>
                  <i
                    className="bi bi-trash3 text-danger pointer m-1"
                    onClick={() => Del(item)}
                  ></i>
                </h5>
              </div>
              <div className="col-md-12 ps-3">
                <p className="d-inline">Бўлим: {item.bolim}</p>
              </div>
              <div className="col-md-12 ps-3">
                <p className="d-inline">Кабинет: {item.kabinet}</p>
              </div>
              <div className="col-md-12 ps-3">
                <p>Лавозими: {item.lavozim}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BItem;
