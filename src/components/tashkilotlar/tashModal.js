import Button from "../button/Button";
import React, {useState} from "react";
import axios from "axios";
import config from '../../config.json'

function TashModal(props) {

    const [Text, setText] = useState({
        tashNom: props.tashNom,
        admin: props.admin,
        login: props.login,
        parol: props.parol,
    });

    const changeHandler = (e) => {
        setText({ ...Text, [e.target.name]: e.target.value });
    };

    const Change = async () => {
        // await axios
        // .put(`${config.SERVER_URL}tashkilot/${props._id}`, Text)
        // .then((res) => {
        //     res.data && alert("Yangilandi");
        // })
        // .catch((error) => console.log(error));
        // await Show();
        console.log(Text);
    };
    const Submit = (e) => {
        e.preventDefault();
    };
    return(
        <div className="madal d-flex justify-content-center">
            <form onSubmit={Submit} className="m-5 py-5 pe-5 bg-white addTash position-relative w-50 h-60">
                <i className="bi bi-x" onClick={() => props.funksiyaClose()}></i>
                <div className="row mt-4">
                    <div className="col-3 text-end pe-3 mt-3">
                        <label className="form-label" htmlFor="">Ташкилот номи:</label>
                    </div>
                    <div className="col-9">
                        <input 
                            value={Text.tashNom} 
                            type="text" 
                            className="form-control form-control-lg bg-light ps-2"
                            onChange={changeHandler}
                        />
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-3 text-end pe-3 mt-3">
                        <label className="form-label" htmlFor="">Администратор Ф.И.О.:</label>
                    </div>
                    <div className="col-9">
                        <input 
                            value={Text.admin} 
                            type="text" 
                            className="form-control form-control-lg bg-light ps-2" 
                            onChange={changeHandler}
                        />
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-3 text-end pe-3 mt-3">
                        <label className="form-label" htmlFor="">Логин(телефон):</label>
                    </div>
                    <div className="col-9">
                        <input 
                            value={Text.login} 
                            type="text" 
                            className="form-control form-control-lg bg-light ps-2" 
                            onChange={changeHandler} 
                        />
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-3 text-end pe-3 mt-3">
                        <label className="form-label" htmlFor="">Пароль:</label>
                    </div>
                    <div className="col-9">
                        <input 
                            value={Text.login} 
                            type="text" 
                            className="form-control form-control-lg bg-light ps-2" 
                            onChange={changeHandler} 
                        />
                    </div>
                </div>
                <div className="mt-5 ms-5 text-center">
                    <Button  
                        ButtonStyle={"oq-button"} 
                        name="Yangilash"
                        ButtonFunction={() => Change()} 
                    />
                    <Button 
                        ButtonStyle={"oq-button"} 
                        name="Bekor qilish" 
                        ButtonFunction={props.funktionClose} 
                    />
                </div>
            </form>
        </div>
    ) ;
}

export default TashModal
