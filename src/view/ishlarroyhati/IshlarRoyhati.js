import Button from "../../components/button/Button";
import Bxlqoshish from "../../components/bxlqoshish/Bxlqoshish";
import { useNavigate } from "react-router-dom";
import config from "../../config.json"
import { useState, useEffect } from "react";
import axios from "axios";
import "./IshlarRoyhati.css"
const IshlarRoyhati = () => {

    const [ishlar, setIshlar] = useState([]);

    const [post, setPost] = useState(false);

    useEffect(() => {
        axios
            .get(`${config.SERVER_URL}ish`)
            .then((res) => {
                setIshlar(res.data);
            })
            .catch((error) => console.log(error));
    }, [post]);

    const onClick = async (elem) => {
        const result = await window.confirm("O'chirilsinmi?");
        if (result) {
            ishlarDelete(elem);
            return;
        }
        alert("O'chirilmadi");
    };

    async function ishlarDelete(elem) {
        await axios
            .delete(`${config.SERVER_URL}ish/${elem._id}`)
            .then((res) => {
                res.data && alert("O'chirildi");
                setPost(!post)
            })
            .catch((error) => console.log(error));
    }


    const navigate = useNavigate();

    async function IshKqoshish(params) {
        navigate("/ishkategoriya");
    }
    async function IshKEdit(elem) {
        localStorage.setItem("ish", JSON.stringify(elem));
        navigate(`/ishlar/${elem._id}`);
    }

    return (
        <div className="ishlar-royhati w-100 px-4 py-2 position-relative">
            <h2 className="title">Ишлар рўйхати</h2>
            <div className="my-3 position-relative d-flex justify-content-end">
                <Button name={"Категория қўшиш"} ButtonStyle="oq-button" ButtonFunction={IshKqoshish} />
            </div>
            <div className="w-100 py-3">
                {
                    ishlar.map((elem) => (
                        <div key={elem._id}>
                            <Bxlqoshish elem={elem}
                             BxlEdit={IshKEdit}
                             BxlDelet={onClick} 
                             />
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default IshlarRoyhati;