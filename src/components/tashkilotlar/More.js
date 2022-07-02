import React from 'react'
import { Link } from 'react-router-dom';

const More = (props) => {
    const { elem={} } = props

    return (
        <>
            <div className="col-12">
                <div className="bg-white align-items-center more m-2 p-4 d-flex justify-content-between">
                    <h1 className="text-secondary indeks">№{props.index}</h1>
                    <div className="info">
                        <p className="text-secondary">Ташкилот номи:</p>
                        <h5>{elem.name}</h5>
                        <p className="text-secondary">Администратор:</p>
                        <h5>{elem.admin}</h5>
                    </div>
                    <div className="logparol">
                        <p className="text-secondary">Логин: {elem.login}</p>
                        <p className="text-secondary">Пароль: {elem.parol}</p>
                    </div>
                    <div className="btn align-self-start">
                        <button className='border-0 bg-white' onClick={()=>props.localga(elem)}>
                            <Link to={"/tashkilot/" + elem._id}>
                                <i className="text-secondary bi bi-pencil-square p-2" ></i>
                            </Link>
                        </button>
                        <i className="bi bi-trash3 trash-bg" onClick={()=>props.functionDelete(elem)}></i>
                    </div>
                </div>
            </div>
        </>
    );
}

export default More;