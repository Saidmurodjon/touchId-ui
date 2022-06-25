import Button from "../../components/button/Button";
import Bxlqoshish from "../../components/bxlqoshish/Bxlqoshish";
import { useNavigate } from "react-router-dom";
import config from "../../config.json";
import "./Xonalar.css";
import { useState, useEffect } from "react";
import axios from "axios";
const Xonalar = () => {
  const [xona, setXona] = useState([]);

  const [post, setPost] = useState(false);
  const TOKEN = {
    headers: {
      "jwt-token": sessionStorage.getItem("jwt-token"),
    },
  };
  useEffect(() => {
    axios
      .get(`${config.SERVER_URL}xona`,TOKEN)
      .then(
        (res) => {
          setXona(res.data);
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
      xonaDelete(elem);
      return;
    }
    alert("O'chirilmadi");
  };

  async function xonaDelete(elem) {
    await axios
      .delete(`${config.SERVER_URL}xona/${elem._id}`,TOKEN)
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

  async function XonalarQoshish(params) {
    navigate("/kabinetqoshish");
  }
  async function XonalarEdit(elem) {
    localStorage.setItem("xona", JSON.stringify(elem));
    navigate(`/xona/${elem._id}`);
  }
  return (
    <div className="w-100 px-4 py-2 position-relative">
      <h2 className="title">Хоналар рўйхати</h2>
      <div className="my-3 position-relative d-flex justify-content-end">
        <Button
          name={"Хона қўшиш"}
          ButtonStyle="oq-button"
          ButtonFunction={XonalarQoshish}
        />
      </div>
      <div className="w-100 py-3">
        {xona.map((elem) => (
          <div key={elem._id}>
            <Bxlqoshish elem={elem} BxlEdit={XonalarEdit} BxlDelet={onClick} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Xonalar;
