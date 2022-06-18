import Button from "../../components/button/Button";
import Bxlqoshish from "../../components/bxlqoshish/Bxlqoshish";
import { useNavigate } from "react-router-dom";
import "./IshlarRoyhati.css"
const IshlarRoyhati = () => {
    const navigate = useNavigate();
    async function IshKqoshish(params) {
        navigate("/ishkategoriya");
    }
    async function IshKEdit(params) {
        navigate("/ishyangilash/:id");
    }
    return (
        <div className="ishlar-royhati w-100 px-4 py-2 position-relative">
            <h2 className="title">Ишлар рўйхати</h2>
            <div className="my-3 position-relative d-flex justify-content-end">
                <Button name={"Категория қўшиш"} ButtonStyle="oq-button" ButtonFunction={IshKqoshish} />
            </div>
            <div className="w-100 py-3">
                <Bxlqoshish name={"Локал тармоқ"} BxlEdit={IshKEdit}/>
            </div>
        </div>
    );
}

export default IshlarRoyhati;