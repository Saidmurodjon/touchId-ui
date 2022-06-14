import Button from "../../components/button/Button";
import "./IshlarRoyhati.css"
const IshlarRoyhati = () => {

    return (
        <div className="ishlar-royhati w-100 px-4 py-2 position-relative">
            <h2 className="title">Ишлар рўйхати</h2>
            <Button name={"Категория қўшиш"}/>
            <div className="w-100">
                <button className="btn border my-3 border-2 p-3 w-100 d-flex align-items-end justify-content-between ishalr-royhati-border-radius">
                    <span className="fs-4">Локал тармоқ</span>
                    <span>
                        <i class="bi bi-pencil-square h4 me-2"></i>
                        <i class="bi bi-trash3 trash-bg h4"></i>
                    </span>
                </button>
                <button className="btn border my-3 border-2 p-3 w-100 d-flex align-items-end justify-content-between ishalr-royhati-border-radius">
                    <span className="fs-4">Локал тармоқ</span>
                    <span>
                        <i class="bi bi-pencil-square h4 me-2"></i>
                        <i class="bi bi-trash3 trash-bg h4"></i>
                    </span>
                </button>
            </div>
        </div>
    );
}

export default IshlarRoyhati;