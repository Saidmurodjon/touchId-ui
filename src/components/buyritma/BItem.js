import React from "react";

function BItem(props) {
  const { _id, kabinet, lavozim, fish, bolim } = props;

  return (
    <>
      <div key={_id} className="col-md-6">
        <div className="card m-2 p-2 raunded-4">
          <h4>
            {fish}
          </h4>
          <p>Бўлим: {bolim}</p>
          <p className="d-inline">Кабинет: {kabinet}</p>
          <p className="d-inline float-end">Лавозими: {lavozim}</p>
        </div>
      </div>
    </>
  );
}

export default BItem;
