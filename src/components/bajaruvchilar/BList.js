import React from "react";
import BItem from "./BItem";

function BList(props) {
  const { bajaruvchilar = [] } = props;
  if (!bajaruvchilar.length) {
    return <h3>Bemor ma'lumotlari mavjud emas!</h3>;
  }
  return (
    <div className={"row"}>
      {/*{filP.reverse().map((item) => (*/}
      {/*  <PatientCardItem key={item._id} {...item} Update={Update} />*/}
      {/*))}*/}
        {bajaruvchilar.reverse().map((item, index) => (
          <BItem key={item._id} {...item} index={index + 1} />
        ))}
      
    </div>
  );
}

export default BList;
