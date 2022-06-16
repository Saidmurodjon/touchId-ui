import React, {useState} from 'react'
import Button from '../../components/button/Button'
import Item from '../../components/tashkilotlar/Item'
import More from '../../components/tashkilotlar/More'
import ish from '../boshsahifa/ish.json'
import './Tashkilot.css'


const Tashkilotlar = () => {
    
    const [view, setView] = useState(false)

    return (
        <div className="tashkilot bg-white">
            {/* toshkilot soni, buttonlar */}
            <div className="tashTopPanel d-flex justify-content-between">
                <div className="sarlavha d-flex">
                    <h1>Ташкилотлар</h1>
                    <h3 className="bedj ms-5 pt-1 px-3 border bg-light rounded-circle">7</h3>
                </div>
                <div className="buttons d-flex border align-items-center w-25">
                    <Button name="Қўшиш" />
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
                        ish.map(work=>(
                            view ? (<More /> ) : (<Item />)        
                        ))
                    }
                </div>
            </div>

        </div>
    );
}

export default Tashkilotlar;