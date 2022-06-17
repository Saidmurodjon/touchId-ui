import React, {useState} from 'react'
import TashModal from './tashModal';
const Item = (props) => {

    const [modal, setModal] = useState(false)

    // const [Text, setText] = useState({
    //     tashNom: props.tashNom,
    //     admin: props.admin,
    //     login: props.login,
    //     parol: props.parol,
    // });

    const CloseModal=()=>{
        setModal(false)
    }
    const OpenModal=()=>{
        setModal(true)
    }

    return (
        <>
            <div className="col-6">
                <div className="card m-2 pt-3  px-4">
                    <div className="yuqori d-flex justify-content-between">
                        <h5 className="text-secondary">№{props.index}</h5>
                        <div className="btn">
                            <i className="bi bi-pencil-square p-2" onClick={OpenModal}></i>
                            <i className="bi bi-trash3 trash-bg" onClick={()=>props.functionDelete()}></i>
                        </div>
                    </div>
                    <div className="jadval">
                        <table>
                            <tbody>
                                <tr>
                                    <td><p className="text-secondary">Ташкилот номи:</p></td>
                                    <td><h6>{props.tashNom}</h6></td>
                                </tr>
                                <tr>
                                    <td><p className="text-secondary">Администратор:</p></td>
                                    <td><h6>{props.admin}</h6></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="logpassword d-flex justify-content-between ms-5 ps-5 mt-2">
                        <p className="text-secondary">Логин: {props.login}</p>
                        <p className="text-secondary">Пароль: {props.parol}</p>
                    </div>
                </div>
            </div>
            {/* Modal */}
            {
                    modal ? (<TashModal 
                                funksiyaClose={CloseModal} 
                                funktionClose={CloseModal} 
                                tashNom={props.tashNom}
                                admin={props.admin}
                                login={props.login}
                                parol={props.parol}
                            />) 
                            : ("")                    
            }
        </>
    );
}

export default Item;