import ProfilImg from '../../assets/gerb.jpg'
import "./Navbar.css"
const Profil = () => {

    return (
        <>
            <div className="d-flex justify-content-between align-items-center">
                <i className="bi bi-bell h4 text-secondary me-5"></i>
                <div className="profil-content d-flex align-items-center">
                    <div className="d-flex flex-column align-items-end">
                        <span className="span1">Толипова Феруза</span>
                        <span className="text-secondary span2">Марказ</span>
                    </div>
                    <img src={ProfilImg} alt="" className="rounded-pill ms-3" />
                    <i className="bi bi-chevron-down h4 mt-2 ms-2 text-secondary"></i>
                </div>
            </div>
        </>
    );
}

export default Profil;