import './Home.css'
import {useState} from 'react'
import Navbar from "../../components/navbar/Navbar"
import Router from '../../router/Router'
import Menyu from '../../components/navbar/Menyu'
function Home() {

  const [toggle, setToggle] = useState(false)
    const toggleMenyu=()=>{
      setToggle(!toggle)
      let menyu = document.querySelector(".menyu")
      let content = document.querySelector(".content")
      let logotip = document.querySelector(".logotip")
      let arrow = document.querySelector(".togl")
      if(toggle){
        menyu.style.width = '5%'
        content.style.width = '95%'
        arrow.style.right = '30%'
        logotip.style.display="none"
      }else{
        menyu.style.width = '17%'
        content.style.width = '83%'
        arrow.style.right = '10%'
        logotip.style.display="flex"
      }
    }

  return (
    <div>
      
      <div className="container-fluid">
        <div className="menyu border border-right">
          <div className="logo border-bottom border-right d-flex align-items-center overflow-hidden">
            <div className="logotip align-items-center">
              <i className='bi bi-steam'></i>
              <h4>TouchID</h4>
            </div>
            <i className={toggle ? "bi bi-chevron-double-left togl" : "togl bi bi-chevron-double-right"} onClick={toggleMenyu}></i>
          </div>
          {/* menyu qismi */}
          <Menyu />
        </div>
        <div className="content">
          {/* <Navbar /> */}
          <Router />
          
        </div>
      </div>
    </div>
  );
}

export default Home;
