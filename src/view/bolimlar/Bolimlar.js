import Button from "../../components/button/Button";
import Bxlqoshish from "../../components/bxlqoshish/Bxlqoshish";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import config from "../../config.json"
import axios from "axios"
import { confirm } from "react-confirm-box";
import "./Bo'limlar.css";
import BolimlarEdit from "./BolimlarEdit"
const Bolimlar = () => {
    const [bolim, setBolim] = useState([]);
    const [s, setS] = useState(false)
    useEffect(() => {
        axios
            .get(`${config.SERVER_URL}bolim`)
            .then((res) => {
                setBolim(res.data);
            })
            .catch((error) => console.log(error));
    }, [s]);
    console.log(bolim);

    const navigate = useNavigate();

    async function BolimlarQoshish(params) {
        navigate("/bolimqoshish");
    }
    async function BolimlarUpdate(elem) {
        navigate("/bolimlarEdit");
        BolimlarEdit(elem)
        // console.log(elem);
    }

    const onClick = async (elem) => {
        const result = await window.confirm("O'chirilsinmi?");
        if (result) {
            BolimDelete(elem);
            return;
        }
        alert("O'chirilmadi");
    };
    async function BolimDelete(elem) {
        await axios
            .delete(`${config.SERVER_URL}bolim/${elem._id}`)
            .then((res) => {
                res.data && alert("O'chirildi");
                setS(!s)
            })
            .catch((error) => console.log(error));
    }
    return (
        <div className="w-100 px-4 py-2 position-relative pe-5">
            <h2 className="title">Бўлимлар рўйхати</h2>
            <div className="my-3 position-relative d-flex justify-content-end">
                <Button name={"Бўлим қўшиш"} ButtonStyle="oq-button" ButtonFunction={BolimlarQoshish} />
            </div>
            <div className="w-100 py-3">
                {
                    bolim.map((e) => {
                        return (
                            <>
                                <div key={e._id}> <Bxlqoshish elem={e} BxlEdit={BolimlarUpdate} BxlDelet={onClick} /></div>
                            </>
                        );
                    })
                }

            </div>
        </div>
    );
}

export default Bolimlar;