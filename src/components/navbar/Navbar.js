import Search from "./Search";
import "./Navbar.css"
import Profil from "./Profil";
const Navbar = (props) => {
    const { search = false, text = "", Searchs } = props;
    return (
        <>
            <div className="navbar-widht border-bottom d-flex justify-content-between">
                <div>
                    {search ? (
                        <Search Searchs={Searchs} />
                    ) : (
                        <>
                            <h3>{text}</h3>
                        </>
                    )}
                </div>
                <div>
                    <Profil />
                </div>
            </div>
        </>
    );
}

export default Navbar;