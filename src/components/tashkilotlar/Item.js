import React from 'react'
import { Link } from 'react-router-dom';
const Item = (props) => {
    const { elem={} } = props;


    return (
        <>
            <div className="col-6">
                <div className="card m-2 pt-3  px-4">
                    <div className="yuqori d-flex justify-content-between">
                        <h5 className="text-secondary">№{props.index}</h5>
                        <div className="btn">
                            <button className='border-0 bg-white' onClick={()=>props.localga(elem)}>
                                <Link to={"/tashkilot/" + elem._id}>
                                    <i className="text-secondary bi bi-pencil-square p-2" ></i>
                                </Link>
                            </button>
                            <i className="bi bi-trash3 trash-bg" onClick={()=>props.functionDelete(elem)}></i>
                        </div>
                    </div>
                    <div className="jadval">
                        <table>
                            <tbody>
                                <tr>
                                    <td><p className="text-secondary">Ташкилот номи:</p></td>
                                    <td><h6>{elem.name}</h6></td>
                                </tr>
                                <tr>
                                    <td><p className="text-secondary">Администратор:</p></td>
                                    <td><h6>{elem.admin}</h6></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="logpassword d-flex justify-content-between ms-5 ps-5 mt-2">
                        <p className="text-secondary">Логин: {elem.login}</p>
                        <p className="text-secondary">Пароль: {elem.parol}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Item;