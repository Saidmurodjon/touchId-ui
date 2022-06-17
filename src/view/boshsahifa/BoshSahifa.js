import {useState} from 'react'
import './Bosh.css'
import ish from './ish.json'
import Item from '../../components/boshSahifa/Item'
import More from '../../components/boshSahifa/More'
import Xodimlar from '../../components/boshSahifa/Xodimlar'


const BoshSahifa = () => {

    // vid uchun
    const [view, setView] = useState(false)
    let date = new Date()
    let month = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]
    let year = [date.getFullYear(),date.getFullYear()-1,date.getFullYear()-2,date.getFullYear()-3,date.getFullYear()-4]

    // filter uchun funksiyalar

    const [oy, setOy] = useState('');
    const [yil, setYil] = useState('');

    const handleChangeOy = (event) => {
        setOy(event.target.value);

    };
    const handleChangeYil = (event) => {
        setYil(event.target.value);
    };

    const filterla=()=>{
        console.log(oy+"+"+yil);
    }

    // const filterla = () => {
    //     const filt = baza.filter(item => {
    //         let month = item.fullFData.slice(5, 7) * 1
    //         let year = item.fullFData.slice(0, 4) * 1
    //         if (month === oy && year === yil) {
    //             return true
    //         }
    //     })
    //     setMapBaza(filt)
    // }

    return (
        <div className="bajarilgan bg-white"> 
        {/* Sarlavha */}
            <div className="topPanel d-flex justify-content-between">
                <div className="sarlavha d-flex">
                    <h1>Бажарилган ишлар</h1>
                    <h3 className="bedj ms-5 pt-1 px-3 border bg-light rounded-circle">7</h3>
                </div>
                <div className="filter d-flex me-5 pe-1">
                    <div className="row me-5">
                        <div className="col">
                            <button onClick={filterla} className="px-3 py-2 btn btn-outline-secondary d-block">Filter</button>
                        </div>
                        <div className="col">
                            <select onChange={handleChangeOy} label="Oy" className="d-block px-2 py-1 form-select form-select-lg mb-3">
                                {
                                    month.map(mons=>(
                                        <option value={mons}>{mons}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div className="col">
                            <select onChange={handleChangeYil} className="d-block px-2 py-1 ms-2 form-select form-select-lg mb-3">
                                {
                                    year.map(year=>(
                                        <option value={year}>{year}</option>
                                    ))
                                }
                            </select>
                        </div>
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
                        ish.map(worker=>(
                            <>
                                <Xodimlar fish="Махмудов С" count="9" />
                            </>
                        ))
                    }
                </div>
            </div>
            {/* Asosiy qism ishlar ro'yxati boshlandi */}
            <div className="bajJadval bg-light p-5">
                <div className="row">
                    {
                        ish.map(work=>(
                            view ? (
                                <More
                                    aktRaqam={work.aktRaqam}
                                    xona={work.xona}
                                    ishlar={work.ishlar}
                                    rasmlar={work.rasmlar}
                                    bajaruvchi={work.bajaruvchi}
                                    buyurtmachi={work.buyurtmachi}
                                    lavozim={work.lavozim}
                                />
                            ) : (
                                <Item
                                    date={work.date}
                                    aktRaqam={work.aktRaqam}
                                    bajaruvchi={work.bajaruvchi}
                                    buyurtmachi={work.buyurtmachi}
                                    xona={work.xona}
                                    lavozim={work.lavozim}
                                    ishlar={work.ishlar.length}
                                    rasmlar={work.rasmlar}
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