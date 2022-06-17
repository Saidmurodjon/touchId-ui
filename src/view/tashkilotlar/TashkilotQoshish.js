import { useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";

const TashkilotQoshish = () => {
    const navigate = useNavigate()
    const Close=()=>{
        navigate("/tashkilot")
    }
    return (
        <div className="addTashkilot bg-light h-100 pt-2 ">
            <form className="m-5 py-5 pe-5 bg-white addTash position-relative">
                <i className="bi bi-x" onClick={Close}></i>
                <div className="row mt-4">
                    <div className="col-3 text-end pe-3 mt-3">
                        <label className="form-label" htmlFor="">Ташкилот номи:</label>
                    </div>
                    <div className="col-9">
                        <input type="text" className="form-control form-control-lg bg-light ps-2" />
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-3 text-end pe-3 mt-3">
                        <label className="form-label" htmlFor="">Администратор Ф.И.О.:</label>
                    </div>
                    <div className="col-9">
                        <input type="text" className="form-control form-control-lg bg-light ps-2" />
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-3 text-end pe-3 mt-3">
                        <label className="form-label" htmlFor="">Логин(телефон):</label>
                    </div>
                    <div className="col-9">
                        <input type="text" className="form-control form-control-lg bg-light ps-2" />
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-3 text-end pe-3 mt-3">
                        <label className="form-label" htmlFor="">Пароль:</label>
                    </div>
                    <div className="col-9">
                        <input type="text" className="form-control form-control-lg bg-light ps-2" />
                    </div>
                </div>
                <div className="mt-5 text-center">
                    <Button ButtonStyle={"oq-button"} name="Қўшиш" />
                </div>
                
            </form>
        </div>
    );
}

export default TashkilotQoshish;