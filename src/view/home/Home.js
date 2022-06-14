import './Home.css'
import {useState} from 'react'
import Navbar from "../../components/navbar/Navbar"
function Home() {

  const [toggle, setToggle] = useState(false)
    const toggleMenyu=()=>{
      setToggle(!toggle)
      let menyu = document.querySelector(".menyu")
      let content = document.querySelector(".content")
      if(toggle){
        menyu.style.width = '5%'
        content.style.width = '95%'
      }else{
        menyu.style.width = '17%'
        content.style.width = '83%'
      }
    }

  return (
    <div>
      
      <div className="container-fluid">
        <div className="menyu border-right border-1">
          <div className="logo d-flex align-items-center overflow-hidden">
            <i className='bi logotip bi-steam'></i>
            <h4>TouchID</h4>
            <i className={toggle ? "bi bi-chevron-double-left togl" : "togl bi bi-chevron-double-right"} onClick={toggleMenyu}></i>
            
          </div>
        </div>
        <div className="content">
          <Navbar />
          <h1>Salom</h1>
        </div>
      </div>
    </div>
  );
}

export default Home;
