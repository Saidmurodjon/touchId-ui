import Button from "../../components/button/Button";
import Bxlqoshish from "../../components/bxlqoshish/Bxlqoshish";
import "./IshlarRoyhati.css"
const IshlarRoyhati = () => {

    return (
        <div className="ishlar-royhati w-100 px-4 py-2 position-relative">
            <h2 className="title">Ишлар рўйхати</h2>
            <div className="my-3 position-relative d-flex justify-content-end">
                <Button name={"Категория қўшиш"} ButtonStile="oq-button" />
            </div>
            <div className="w-100">
                <Bxlqoshish name={"Локал тармоқ"} />
            </div>
        </div>
    );
}

export default IshlarRoyhati;