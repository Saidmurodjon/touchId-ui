import React from "react";
import BItem from "./BItem";

function BList(props) {
  const { bajaruvchilar = [], BFunction } = props;
  if (!bajaruvchilar.length) {
    return <h3>ma'lumotlar mavjud emas!</h3>;
  }
  return (
    <div className={"row"}>
      {/*{filP.reverse().map((item) => (*/}
      {/*  <PatientCardItem key={item._id} {...item} Update={Update} />*/}
      {/*))}*/}
      {bajaruvchilar.reverse().map((item, index) => (
        <BItem
          key={item._id}
          item={item}
          index={index + 1}
          BFunction={BFunction}
        />
      ))}
    </div>
  );
}

export default BList;
