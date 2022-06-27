import Search from "./Search";
import "./Navbar.css";
import Profil from "./Profil";
const Navbar = (props) => {
  const { search = false, text = "", SearchFunction } = props;
  return (
    <>
      <div className="navbar-widht ps-5 border-bottom d-flex justify-content-between ">
        <div>
          {search ? (
            <Search SearchFunction={SearchFunction} />
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
};

export default Navbar;
