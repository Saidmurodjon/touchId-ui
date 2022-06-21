import React from "react";

function BItem(props) {
  const { item = {}, BFunction } = props;

  return (
    <>
      <div key={item._id} className="col-md-6" onClick={() => BFunction(item)}>
        <div className="card m-2 p-2">
          <h6>{item.tash}</h6>
          <h4>{item.fish}</h4>
          <p>Лавозими: {item.lavozimi}</p>
          <p className="d-inline">Телефон: {item.tel}</p>
          <p className="d-inline float-end">Парол: {item.parol}</p>
        </div>
      </div>
    </>
  );
}

export default BItem;
