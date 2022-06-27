import { useState } from "react";
import Button from "../../components/button/Button";
import config from "../../config.json";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Lavozimlar.css";
import Navbar from "../../components/navbar/Navbar";
const LavozimQoshish = () => {
  const navigate = useNavigate();
  const TOKEN = {
    headers: {
      "jwt-token": sessionStorage.getItem("jwt-token"),
    },
  };
  const [lavozimQoshish, setLavozimQoshsih] = useState({
    name: "",
    date: new Date(),
  });

  const changeHandler = (e) => {
    setLavozimQoshsih({ ...lavozimQoshish, [e.target.name]: e.target.value });
  };

  const Send = async () => {
    if (lavozimQoshish.name) {
      await axios
        .post(`${config.SERVER_URL}lavozim`, lavozimQoshish, TOKEN)
        .then(
          (res) => {
            alert("Lavozim qo'shildi");
            setLavozimQoshsih({
              name: "",
              date: new Date(),
            })
          },
          (err) => {
            if (err.response.status === 401) {
              navigate("/");
            }
          }
        )
        .catch((error) => console.log(error));
    } else {
      alert("Lavozim kiriting");
    }
  };
  const Submit = (e) => {
    e.preventDefault();
  };

  const Close = () => {
    navigate("/lavozim");
  }
  return (
    <>
      <div className="sticky-top">
        <Navbar search={true} />
      </div>
      <div className="w-100 px-5 py-2 position-relative">
        <h2 className="title-lavozm">Лавозимлар қўшиш</h2>
        <div className="my-3 bg-lavozim px-3 pt-5">
          <div className="position-relative me-0">
            <i className="bi bi-x pointer" onClick={Close}></i>
          </div>
          <form className="bg-form-lavozim w-100 p-5" onSubmit={Submit}>
            <div className="d-flex align-items-center">
              <h4 className="lavozm-title">Лавозим номи:</h4>
              <input
                type="text"
                className="form-input-lavozim w-75 ms-1 ps-1 form-control"
                value={lavozimQoshish.name}
                name="name"
                onChange={changeHandler}
              />
            </div>
            <div className="d-flex mt-4 justify-content-center">
              <Button
                name={"Қўшиш"}
                ButtonStyle="oq-button"
                ButtonFunction={Send}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LavozimQoshish;
