import React from "react";
import { BIItem } from "./BIItem";
function BIList(props) {
  const { bajarilganIshlar = [] } = props;
  if (!service.length) {
    return <h3>Service hizmatlari mavjud emas</h3>;
  }
  return (
    <div className="">
      {bajarilganIshlar.map((item) => (
        <BIItem key={item._id} {...item} />
      ))}
    </div>
  );
}

export { BIList };
