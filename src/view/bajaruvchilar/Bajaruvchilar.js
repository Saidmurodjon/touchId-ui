import React, { useState, useEffect } from "react";
import axios from "axios";
import BList from "../../components/bajaruvchilar/BList";

// import {URL} from('../../config')  
function Bajaruvchilar() {
  const [bajaruvchilar, setBajaruvchilar] = useState([]);
  useEffect(() => {
    axios
      .get("https://government-backend.herokuapp.com/user")
      .then((res) => {
        res.data && setBajaruvchilar(res.data);
        // setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);
  console.log(bajaruvchilar);
  return (
    <>
     <div className="container">
     <h4>bajaruvchi</h4>
      <BList bajaruvchilar={bajaruvchilar} />
     </div>
    </>
  );
}
export default Bajaruvchilar;
