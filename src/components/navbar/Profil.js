import ProfilImg from '../../assets/gerb.jpg'
import "./Navbar.css"
import {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const Profil = () => {
    const admin = JSON.parse(localStorage.getItem("admin"));
    const navigate=useNavigate()

    const [open, setOpen] = useState(false)

    const Close=()=>{
        setOpen(!open)
    }
    const Chiqish=()=>{
        navigate('/')
        sessionStorage.removeItem('jwt-token');
    }
    return (
        <>
            <div className="d-flex justify-content-between align-items-center">
                <i className="bi bi-bell h4 text-secondary me-5"></i>
                <div className="profil-content d-flex align-items-center position-relative">
                    <div className="d-flex flex-column align-items-end">
                        <span className="span1">{admin.admin}</span>
                        <span className="text-secondary span2">Марказ</span>
                    </div>
                    <img src={ProfilImg} alt="" className="rounded-pill ms-3" />
                    <i className="bi bi-chevron-down h4 mt-2 ms-2 text-secondary" onClick={Close}></i>
                    <div className={open ? 'position-absolute ochish border px-3 pt-2' : 'position-absolute yopish'}>
                        <ul>
                            <li><p onClick={Chiqish}>Log out</p></li>
                            <li><p>Settings</p></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profil;