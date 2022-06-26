import {useState, useEffect} from 'react'
import './Bosh.css'
import Item from '../../components/boshSahifa/Item'
import More from '../../components/boshSahifa/More'
import Xodimlar from '../../components/boshSahifa/Xodimlar'
import Navbar from '../../components/navbar/Navbar'
import Filter from '../../components/filter/Filter'
import axios from "axios";
import config from "../../config.json";
import { useNavigate } from "react-router-dom";


const BoshSahifa = () => {
    const navigate = useNavigate();
    const TOKEN = {
        headers: {
            "jwt-token": sessionStorage.getItem("jwt-token"),
        },
    };
    const [baza, setBaza] = useState([])
    const [mapBaza, setMapBaza] = useState([])
    const [user, setUser] = useState([])
    const [last, setLast] = useState([])
    // const [searchPage, setSearchPage] = useState([]);
    // const search = JSON.parse(localStorage.getItem("search"));

    useEffect(() => {
            axios.get(`${config.SERVER_URL}report`,TOKEN)
            .then(res => {
                let foo = res.data.filter((item)=>{
                    if(item.tasdiq === true){
                        return true
                    }
                })
                setBaza(foo)
            })
            .catch(error => console.log(error))
            // xodim uchun
            axios
                .get(`${config.SERVER_URL}user`,TOKEN)
                .then(
                    (res) => {
                        setUser(res.data)
                    },
                    (err) => {
                    if (err.response.status === 401) {
                        navigate("/");
                    }
                    }
                )
                .catch((error) => console.log(error));
        
    }, []);
    // vid uchun
    const [view, setView] = useState(false)
    
    let month = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]
    
    const Filters = () => {
        const time = JSON.parse(localStorage.getItem("time"));
        // console.log(time);
        axios
          .post(`${config.SERVER_URL}report/filter`, time, TOKEN)
          .then(
            (res) => {
                setBaza(res.data)
            },
            (err) => {
              if (err.response.status === 401) {
                navigate("/");
              }
            }
          )
          .catch((error) => console.log(error));
      };

    useEffect(()=>{
        const Arr=[]
        user.map(elem=>{
            const news = baza.filter((item)=>
                item.userFish===elem.fish
            )
            if(news.length>0){
                Arr.push({name: elem.fish.split(' ')[1][0]+'.'+elem.fish.split(' ')[0], workCount: news.length})
            }
        })
        setLast(Arr)
    },[last])

    // useEffect(()=>{
    //     if(last.length===0){
    //         var son = 0 
    //         for(let a=0; a<user.length; a++){
    //             for (let i = 0; i < mapBaza.length; i++) {
    //                 if (user[a].fish === baza[i].userFish) {
    //                     son += 1
    //                 }
    //             }
                
    //             let Array = {
    //                 name: user[a].fish.split(' ')[1][0]+"."+user[a].fish.split(' ')[0],
    //                 workCount: son,
    //             }
    //             last.push(Array)
    //             son=0
    //         }
    //     }
    // },[last])

    

    // useEffect(() => {
    //     const newService = baza.filter((elem) =>
    //         elem.userFish.toLowerCase().includes(search.toLowerCase())
    //     );
    //     setSearchPage(newService);
    //     if(searchPage.length!==0){
    //         mapBaza(searchPage)
    //     }
    //   }, [search]);
    //   console.log(searchPage);


    return (
        <div className="bajarilgan bg-white"> 
        <Navbar search='true' />
        {/* Sarlavha */}
            <div className="topPanel d-flex justify-content-between">
                <div className="sarlavha d-flex align-items-center">
                    <h1>Бажарилган ишлар</h1>
                    <h3 className="bedj ms-5 py-3 px-4 border bg-light rounded-circle">{baza.length}</h3>
                </div>
                <div className="filter d-flex me-5 pe-1 mt-2">
                    <div className='me-5'>
                        <Filter FilterFunction={Filters} />
                    </div>
                    <div className="row vid">
                        <div className="col-6">
                            <button className={view ? "px-2 py-1 viewActive" : "px-2 py-1"} onClick={() => setView(true)}>
                                <i className="bi bi-hdd-stack-fill"></i>
                            </button>
                        </div>
                        <div className="col-6">
                            <button className={view ? "px-2 ms-2 py-1" : "px-2 ms-2 py-1 viewActive"}  onClick={() => setView(false)}>
                                <i className="bi bi-grid-fill"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Ishchilarning bajarilgan ishlari soni */}
            <div className="xodimlar">
                <div className="xodim">
                    {
                        last.map(worker=>(
                            <div key={worker._id}>
                                <Xodimlar fish={worker.name} count={worker.workCount} />
                            </div>
                        ))
                    }
                </div>
            </div>
            {/* Asosiy qism ishlar ro'yxati boshlandi */}
            <div className="bajJadval bg-light p-5">
                <div className="row">
                    {
                        baza.map(work=>(
                            view ? (
                                <More
                                    yil={work.fullFData.slice(0, 4) * 1}
                                    kun={work.fullFData.slice(8, 10) * 1}
                                    oy={month[work.fullFData.slice(5, 7) * 1-1]}
                                    soat={work.fullFData.slice(11, 16)}
                                    aktRaqam={work.aktRaqam}
                                    xona={work.cilientKabinet}
                                    ishlar={work.services}
                                    rasmlar={work.rasmlar}
                                    bajaruvchi={work.userFish}
                                    buyurtmachi={work.cilientFish}
                                    lavozim={work.cilientLavozim}
                                />
                            ) : (
                                <Item
                                    date={work.fullFData.slice(11, 16)}
                                    aktRaqam={work.aktRaqam}
                                    bajaruvchi={work.userFish}
                                    buyurtmachi={work.cilientFish}
                                    xona={work.cilientKabinet}
                                    lavozim={work.cilientLavozim}
                                    ishlar={work.services.length}
                                    // rasmlar={work.rasmlar.length}
                                />
                            )
                            
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default BoshSahifa;