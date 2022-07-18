import { useState, useEffect } from "react";
import axios from "axios";
import config from "../../config.json";
import Button from "../../components/button/Button";
import Bxlqoshish from "../../components/bxlqoshish/Bxlqoshish";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import "./IshlarRoyhati.css";

const IshlarRoyhati = () => {

  const tashkilot_id = sessionStorage.getItem("tashkilot_id");
  const TOKEN = {
    headers: {
      "jwt-token": sessionStorage.getItem("jwt-token"),
      "tashkilot_id": tashkilot_id,
    },
  };
  const [ishlar, setIshlar] = useState([]);

  const [post, setPost] = useState(false);

  const [searchPage, setSearchPage] = useState([]);

  const navigate = useNavigate();

  // Bazadan ma'lumot olish
  useEffect(() => {
    const IshlarRoyhati = async () => {
      const res = await axios.get(`${config.SERVER_URL}ish`, TOKEN);
      try {
        if (res.status === 200) {
          setIshlar(res.data);
        }
      } catch (err) {
        if (err.response.status === 401) {
          navigate("/");
        }
        console.log(err);
      }
    }
    IshlarRoyhati();
  }, [post]);

  // o'chirish funksiyasi
  const onClick = async (elem) => {
    const result = await window.confirm("O'chirilsinmi?");
    if (result) {
      DeleteIsh(elem);
      return;
    }
  };

  const DeleteIsh = async (elem) => {
    const res = await axios.delete(`${config.SERVER_URL}ish/${elem._id}`, TOKEN);
    try {
      if (res.status === 200) {
        setPost(!post);
      }
    } catch (err) {
      if (err.response.status === 401) {
        navigate("/");
      }
      console.log(err);
    }
  }

  // Qidiruv funksiyasi
  const Search = (input) => {
    const newService = ishlar.filter((elem) =>
      elem.name.toLowerCase().includes(input.toLowerCase())
    );
    setSearchPage(newService);
  };


  // yonaltirish 
  function IshKqoshish(params) {
    navigate("/ishkategoriya");
  }

  // Yo'naltirish
  function IshKEdit(elem) {
    localStorage.setItem("ish", JSON.stringify(elem));
    navigate(`/ishlar/${elem._id}`);
  }

  return (
    <>
      <div className="sticky-top">
        <Navbar search={true} SearchFunction={Search} />
      </div>
      <div className="ishlar-royhati w-100  px-5 py-2 position-relative">
        <h2 className="title">Ишлар рўйхати</h2>
        <div className="my-3 position-relative d-flex justify-content-end">
          <Button
            name={"Категория қўшиш"}
            ButtonStyle="oq-button button-end"
            ButtonFunction={IshKqoshish}
          />
        </div>
        <div className="me-5 py-3">
          {searchPage.length > 0
            ? searchPage.map((elem) => (
              <div key={elem._id}>
                <Bxlqoshish
                  elem={elem}
                  BxlEdit={IshKEdit}
                  BxlDelet={onClick}
                />
              </div>
            ))
            : ishlar.map((elem) => (
              <div key={elem._id}>
                <Bxlqoshish
                  elem={elem}
                  BxlEdit={IshKEdit}
                  BxlDelet={onClick}
                />
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default IshlarRoyhati;
