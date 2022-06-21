import React, { useState, useEffect } from 'react';
import Button from "../../components/button/Button";
import axios from 'axios';
import config from "../../config.json";
import { useNavigate } from "react-router-dom";
import './Xonalar.css'
const XonaUpdate = () => {

    const xona = JSON.parse(localStorage.getItem("xona"));
    const [post, setPost] = useState({
        name: xona.name,
    });
    const navigate = useNavigate();

    const Submit = (e) => {
        e.preventDefault();
    }


    const changeHandler = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value });
    }

    const Change = async () => {
        await axios
            .put(`${config.SERVER_URL}xona/${xona._id}`, post)
            .then((res) => {
                res.data && alert("Yangilash");
                navigate("/kabinet");

            })
            .catch((error) => console.log(error));
        console.log(post);
    }

    return (
        <>
            <div className="w-100 px-4 py-2 position-relative">
                <h2 className="title">Хона қўшиш</h2>
                <div className="my-3 position-relative d-flex justify-content-end me-5">
                    <Button name={"Хоналар қўшиш"} ButtonStyle="oq-button" />
                </div>
                <div className="w-100 my-3 bg-xona px-3 pt-5">
                    <form onSubmit={Submit} className="bg-form-xona w-100 p-5">
                        <div className="d-flex align-items-center">
                            <h4 className="title">Хона номи:</h4>
                            <input type="text"
                                className="form-input-xona w-75 ms-1 ps-1 form-control"
                                value={post.name}
                                name="name"
                                onChange={changeHandler}
                            />
                        </div>
                        <div className="d-flex mt-4 justify-content-center">
                            <Button name={"Ўзгартириш"}
                                ButtonStyle="oq-button"
                                ButtonFunction={Change}
                            />
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default XonaUpdate;