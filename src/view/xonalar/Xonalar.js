import { useState, useEffect } from "react";
import Button from "../../components/button/Button";
import Bxlqoshish from "../../components/bxlqoshish/Bxlqoshish";
import Navbar from "../../components/navbar/Navbar";
import "./Xonalar.css";
import { useNavigate } from "react-router-dom";
import config from "../../config.json";
import axios from "axios";

const Xonalar = () => {

  const navigate = useNavigate();
  const TOKEN = {
    headers: {
      "jwt-token": sessionStorage.getItem("jwt-token"),
    },
  };

  const [xona, setXona] = useState([]);
  const [post, setPost] = useState(false);
  const [searchPage, setSearchPage] = useState([]);

  // Bazadan ma'lumot olish
  useEffect(() => {
    const Xona = async()=>{
      try{
        const res = await axios.get(`${config.SERVER_URL}xona`, TOKEN)
        if(res.status===200){
          setXona(res.data);
        }
      } catch(err){
        console.log(err);
        if (err.response.status === 401) {
          navigate("/");
        }
      }
    }
    Xona()
  }, [post]);

  // Qidiruv funksiyasi
  const Search = (input) => {
    const newService = xona.filter((elem) =>
      elem.name.toLowerCase().includes(input.toLowerCase())
    );
    setSearchPage(newService);
  };
  
  // Xona o'chirish funksiyalari
  const onClick = async (elem) => {
    const result = await window.confirm("O'chirilsinmi?");
    if (result) {
      xonaDelete(elem);
      return;
    }
    alert("O'chirilmadi");
  };

  async function xonaDelete(elem) {
    try{
      const res = await axios.delete(`${config.SERVER_URL}xona/${elem._id}`, TOKEN)
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
  // Xona qo'shish funksiyasi
  function XonalarQoshish(params) {
    navigate("/kabinetqoshish");
  }

  // Xonani edit qilish funksiyasi
  function XonalarEdit(elem) {
    localStorage.setItem("xona", JSON.stringify(elem));
    navigate(`/xona/${elem._id}`);
  }

  return (
    <>
      <div className="sticky-top">
        <Navbar search={true} SearchFunction={Search} />
      </div>
      <div className="w-100 px-5 py-2 position-relative">
        <h2 className="title-xona">Хоналар рўйхати</h2>
        <div className="my-3 position-relative d-flex justify-content-end">
          <Button
            name={"Хона қўшиш"}
            ButtonStyle="oq-button button-end"
            ButtonFunction={XonalarQoshish}
          />
        </div>
        <div className="me-5 py-3">
          {searchPage.length > 0 ? searchPage.map((elem) => (
            <div key={elem._id}>
              <Bxlqoshish elem={elem} BxlEdit={XonalarEdit} BxlDelet={onClick} />
            </div>
          )) : xona.map((elem) => (
            <div key={elem._id}>
              <Bxlqoshish elem={elem} BxlEdit={XonalarEdit} BxlDelet={onClick} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Xonalar;
