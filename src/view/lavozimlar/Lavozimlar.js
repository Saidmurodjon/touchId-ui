import { useState, useEffect } from "react";
import Button from "../../components/button/Button";
import Bxlqoshish from "../../components/bxlqoshish/Bxlqoshish";
import Navbar from "../../components/navbar/Navbar";
import "./Lavozimlar.css";
import { useNavigate } from "react-router-dom";
import config from "../../config.json";
import axios from "axios";

const Lavozimlar = () => {
  const navigate = useNavigate();
  // Token
  const TOKEN = {
    headers: {
      "jwt-token": sessionStorage.getItem("jwt-token"),
    },
  };
  
  // Statelar
  const [lavozim, setLavozim] = useState([]);
  const [post, setPost] = useState(false);
  const [searchPage, setSearchPage] = useState([]);

  // Bazadan kelyotgan malumot 
  useEffect(() => {
    const Lavozim = async()=>{
      try{
        const res = await axios.get(`${config.SERVER_URL}lavozim`,TOKEN)
        if(res.status===200){
          setLavozim(res.data);
        }
      } catch(err){
        console.log(err);
        if (err.response.status === 401) {
          navigate("/");
        }
      }
    }
    Lavozim();
  }, [post]);

  // Qidiruv funksiyasi
  const Search = (input) => {
    const newService = lavozim.filter((elem) =>
      elem.name.toLowerCase().includes(input.toLowerCase())
    );
    setSearchPage(newService);
  };

  // O'chirish funksiyalari
  const onClick = async (elem) => {
    const result = await window.confirm("O'chirilsinmi?");
    if (result) {
      lavozimDelete(elem);
      return;
    }
    alert("O'chirilmadi");
  };

  async function lavozimDelete(elem) {
    try{
      const res = await axios.delete(`${config.SERVER_URL}lavozim/${elem._id}`,TOKEN)
      if(res.status===200){
        setPost(!post);
      }
    }catch(err){
      console.log(err);
      if (err.response.status === 401) {
        navigate("/");
      }
    }
  }
  // Yo'naltiruvchi funksiytalar
  // Qo'shish sahifasiga
  function lavozimlarQoshish() {
    navigate("/lavozimqoshish");
  }
  // Edit sahifasiga
  function lavozimlarEdit(elem) {
    localStorage.setItem("lavozim", JSON.stringify(elem));
    navigate(`/lavozim/${elem._id}`);
  }

  return (
    <>
      <div className="sticky-top">
        <Navbar search={true} SearchFunction={Search} />
      </div>
      <div className="w-100 px-5 py-2 position-relative">
        <h2 className="title-lavozm">Лавозимлар рўйхати</h2>
        <div className="my-3 position-relative d-flex justify-content-end">
          <Button
            name={"Лавозим қўшиш"}
            ButtonStyle="oq-button button-end"
            ButtonFunction={lavozimlarQoshish}
          />
        </div>
        <div className="me-5 py-3">
          {searchPage.length > 0 ? searchPage.map((elem) => (
            <div key={elem._id}>
              <Bxlqoshish
                elem={elem}
                BxlEdit={lavozimlarEdit}
                BxlDelet={onClick}
              />
            </div>
          )) : lavozim.map((elem) => (
            <div key={elem._id}>
              <Bxlqoshish
                elem={elem}
                BxlEdit={lavozimlarEdit}
                BxlDelet={onClick}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Lavozimlar;
