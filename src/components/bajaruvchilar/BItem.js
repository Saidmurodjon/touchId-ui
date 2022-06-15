import React from "react";

function BItem(props) {
  const { _id, tash, lavoz, fish, ismi, tel, parol } = props;

  return (
    <>
      <div key={_id} className="col-md-6">
        <div className="card m-2 p-2 raunded-4">
          <h6>{tash}</h6>
          <h4>
            {fish} {ismi}
          </h4>
          <p>Лавозими: {lavoz}</p>
          <p className="d-inline">Телефон: {tel}</p>
          <p className="d-inline float-end">Парол: {parol}</p>
        </div>
      </div>
    </>
  );
}

export default BItem;
