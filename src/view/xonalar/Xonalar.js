import Button from "../../components/button/Button";
import Bxlqoshish from "../../components/bxlqoshish/Bxlqoshish";
import { useNavigate } from "react-router-dom";
import './Xonalar.css'
const Xonalar = () => {

    const navigate = useNavigate();
    async function XonalarQoshish(params) {
        navigate("/kabinetqoshish");
    }
    async function XonalarEdit(params) {
        navigate("/kabinetyangilash");
    }
    return (
        <div className="w-100 px-4 py-2 position-relative">
            <h2 className="title">Хоналар рўйхати</h2>
            <div className="my-3 position-relative d-flex justify-content-end">
                <Button name={"Хона қўшиш"} ButtonStyle="oq-button" ButtonFunction={XonalarQoshish} />
            </div>
            <div className="w-100 py-3">
                <Bxlqoshish name={"77 хона"} BxlEdit={XonalarEdit} />
            </div>
        </div>
    );
}

export default Xonalar;