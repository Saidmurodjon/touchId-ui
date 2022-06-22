import React from "react";
import BItem from "./BItem";

function BList(props) {
  const { bajaruvchilar = [], Del, Up } = props;
  if (!bajaruvchilar.length) {
    return <h3>ma'lumotlar mavjud emas!</h3>;
  }
  return (
    <div className={"row"}>
      {bajaruvchilar.reverse().map((item, index) => (
        <BItem key={item._id} item={item} index={index + 1} Del={Del} Up={Up} />
      ))}
    </div>
  );
}

export default BList;
