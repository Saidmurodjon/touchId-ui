import { useState } from "react";
import Button from "../../components/button/Button";
import config from "../../config.json"
import axios from "axios"
import "./IshlarRoyhati.css";
const IshKategoriyaQoshish = () => {
    const [ishQoshish, setIshQoshish] = useState({
        name: "",
        date: new Date()
    });

    const changeHandler = (e) => {
        setIshQoshish({ ...ishQoshish, [e.target.name]: e.target.value });
    }

    const Send = async () => {
        if (ishQoshish.name) {
            await axios
                .post(`${config.SERVER_URL}ish`, ishQoshish)
                .then((res) => {
                    alert("Ma'lumot qo'shildi");
                })
                .catch((error) => console.log(error));
        } else {
            alert("Ma'lumo kiriting");

        }

    }
    const Submit = (e) => {
        e.preventDefault();
    };
    console.log(ishQoshish);
    return (
        <>
            <div className="ishlar-royhati w-100 px-4 py-2 position-relative">
                <h2 className="title">Иш категориясини қўшиш</h2>
                <div className="my-3 position-relative d-flex justify-content-end me-5">
                    <Button name={"Категория қўшиш"} ButtonStyle="oq-button" />
                </div>
                <div className="w-100 my-3 bg-katagoriya px-3 pt-5">
                    <form
                        onSubmit={Submit}
                        className="bg-form-katagoroya w-100 p-5">
                        <div className="d-flex align-items-center">
                            <h4 className="title">Категория номи:</h4>
                            <input type="text"
                                className="form-input-ish-katagoriya w-75 ms-1 ps-1 form-control"
                                value={ishQoshish.name}
                                name="name"
                                onChange={changeHandler}
                            />
                        </div>
                        <div className="d-flex mt-4 justify-content-center">
                            <Button name={"Қўшиш"}
                                ButtonStyle="oq-button"
                                ButtonFunction={Send}
                            />
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default IshKategoriyaQoshish;