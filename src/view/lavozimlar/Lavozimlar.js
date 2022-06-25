import Button from "../../components/button/Button";
import Bxlqoshish from "../../components/bxlqoshish/Bxlqoshish";
import { useNavigate } from "react-router-dom";
import config from "../../config.json";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Lavozimlar.css";

const Lavozimlar = () => {
  const TOKEN = {
    headers: {
      "jwt-token": sessionStorage.getItem("jwt-token"),
    },
  };
  const [lavozim, setLavozim] = useState([]);

  const [post, setPost] = useState(false);

  useEffect(() => {
    axios
      .get(`${config.SERVER_URL}lavozim`)
      .then(
        (res) => {
          setLavozim(res.data);
        },
        (err) => {
          if (err.response.status === 401) {
            navigate("/");
          }
        }
      )
      .catch((error) => console.log(error));
  }, [post]);

  const onClick = async (elem) => {
    const result = await window.confirm("O'chirilsinmi?");
    if (result) {
      lavozimDelete(elem);
      return;
    }
    alert("O'chirilmadi");
  };

  async function lavozimDelete(elem) {
    await axios
      .delete(`${config.SERVER_URL}lavozim/${elem._id}`)
      .then(
        (res) => {
          res.data && alert("O'chirildi");
          setPost(!post);
        },
        (err) => {
          if (err.response.status === 401) {
            navigate("/");
          }
        }
      )
      .catch((error) => console.log(error));
  }

  const navigate = useNavigate();

  async function lavozimlarQoshish(params) {
    navigate("/lavozimqoshish");
  }
  async function lavozimlarEdit(elem) {
    localStorage.setItem("lavozim", JSON.stringify(elem));
    navigate(`/lavozim/${elem._id}`);
  }
  return (
    <div className="w-100 px-5 py-2 position-relative">
      <h2 className="title">Лавозимлар рўйхати</h2>
      <div className="my-3 position-relative d-flex justify-content-end">
        <Button
          name={"Лавозим қўшиш"}
          ButtonStyle="oq-button"
          ButtonFunction={lavozimlarQoshish}
        />
      </div>
      <div className="w-100 py-3">
        {lavozim.map((elem) => (
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
  );
};

export default Lavozimlar;
