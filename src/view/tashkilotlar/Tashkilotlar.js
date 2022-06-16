import React, {useState} from 'react'
import Button from '../../components/button/Button'
import Item from '../../components/tashkilotlar/Item'
import More from '../../components/tashkilotlar/More'
import {useNavigate} from 'react-router-dom'
import tash from './tash.json'
import './Tashkilot.css'


const Tashkilotlar = () => {
    const navigate = useNavigate()
    const [view, setView] = useState(false)

    const TQoshish=(params)=>{
        navigate("/tashkilotqoshish");
    }

    return (
        <div className="tashkilot bg-white">
            {/* toshkilot soni, buttonlar */}
            <div className="tashTopPanel d-flex justify-content-between">
                <div className="sarlavha d-flex">
                    <h1>Ташкилотлар</h1>
                    <h3 className="bedj ms-5 pt-1 px-3 border bg-light rounded-circle">7</h3>
                </div>
                <div className="buttons d-flex border align-items-center w-25">
                    <Button ButtonStyle={"yashil-button"} name="Қўшиш" ButtonFunction={TQoshish} />
                    <button className={view ? "px-2 py-1 viewActive vid" : "vid px-2 py-1"} onClick={() => setView(true)}>
                        <i className="bi bi-hdd-stack-fill"></i>
                    </button>
                    <button className={view ? "px-2 py-1 vid" : "vid px-2 py-1 viewActive"}  onClick={() => setView(false)}>
                        <i className="bi bi-grid-fill"></i>
                    </button>
                </div>
            </div>

            {/* Asosiy qismi */}
            <div className="tashAsosiy bg-light p-4 mt-5">
                <div className="row">
                    {
                        tash.map((work, index)=>(
                            view ? (
                                <More
                                    index={index+1}
                                    tashNom={work.tashNom}
                                    admin={work.admin}
                                    login={work.login}
                                    parol={work.parol}
                                /> 
                            ) : 
                            (
                                <Item 
                                    index={index+1}
                                    tashNom={work.tashNom}
                                    admin={work.admin}
                                    login={work.login}
                                    parol={work.parol}
                                />
                            )        
                        ))
                    }
                </div>
            </div>

        </div>
    );
}

export default Tashkilotlar;