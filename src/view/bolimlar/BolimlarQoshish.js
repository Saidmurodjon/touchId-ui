import { useState } from "react";
import Button from "../../components/button/Button";
import config from "../../config.json"
import { useNavigate } from "react-router-dom";

import axios from "axios"
import "./Bo'limlar.css";
const BolimlarQoshish = () => {
    const navigate = useNavigate();

    async function Bolimlar(params) {
        navigate("/bolim");
    }
    const [bolimQoshish, setBolimQoshish] = useState({
        name: "",
        date: new Date()
    })
    console.log(bolimQoshish);
    const changeHandler = (e) => {
        setBolimQoshish({ ...bolimQoshish, [e.target.name]: e.target.value });
    };
    const Send = async () => {
        if (bolimQoshish.name) {
            await axios
                .post(`${config.SERVER_URL}bolim`, bolimQoshish)
                .then((res) => {
                    alert("malumot qo'shildi")
                })
                .catch((error) => console.log(error));
        }else{
            alert("malumot kiriting")

        }
    };
    const Submit = (e) => {
        e.preventDefault();
    };
    return (
        <>
            <div className="w-100 px-4 py-2 position-relative pe-5">
                <h2 className="title">Бўлимлар қўшиш</h2>
                <div className="my-3 position-relative d-flex justify-content-end me-5">
                    <Button name={"Бўлим қўшиш"} ButtonStyle="oq-button" ButtonFunction={Bolimlar} />
                </div>
                <div className="w-100 my-3 bg-bolim px-3 pt-5">
                    <form onSubmit={Submit} className="bg-form-bolim w-100 p-5">
                        <div className="d-flex align-items-center">
                            <h4 className="title">Бўлим номи:</h4>
                            <input
                                type="text"
                                className="form-input-bolim w-75 ms-1 ps-1 form-control"
                                value={bolimQoshish.name}
                                name="name"
                                onChange={changeHandler}
                            />
                        </div>
                        <div className="d-flex mt-4 justify-content-center">
                            <Button
                                name={"Қўшиш"}
                                ButtonFunction={Send}
                                ButtonStyle="oq-button" />
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default BolimlarQoshish;