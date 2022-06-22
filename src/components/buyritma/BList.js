import React from "react";
import BItem from "./BItem";

function BList(props) {
  const { buyritmachi = [], Up,Del } = props;
  if (!buyritmachi.length) {
    return <h3>Buyritmachi ma'lumotlari mavjud emas!</h3>;
  }
  return (
    <div className={"row"}>
      {/*{filP.reverse().map((item) => (*/}
      {/*  <PatientCardItem key={item._id} {...item} Update={Update} />*/}
      {/*))}*/}
      {buyritmachi.reverse().map((item, index) => (
        <BItem key={item._id} item={item} index={index + 1} Up={Up} Del={Del} />
      ))}
    </div>
  );
}

export default BList;
