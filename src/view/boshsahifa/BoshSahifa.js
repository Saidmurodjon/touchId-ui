import {useState} from 'react'
import './Bosh.css'
import oy from './oy.json'
import yil from './yil.json'
import ish from './ish.json'
import Item from '../../components/boshSahifa/Item'
import More from '../../components/boshSahifa/More'


const BoshSahifa = () => {

    // vid uchun
    const [view, setView] = useState(false)

    return (
        <div className="bajarilgan bg-white"> 
        {/* Sarlavha */}
            <div className="topPanel d-flex justify-content-between">
                <div className="sarlavha d-flex">
                    <h1>Бажарилган ишлар</h1>
                    <h3 className="bedj ms-5 pt-1 px-3 border bg-light rounded-circle">7</h3>
                </div>
                <div className="filter d-flex">
                    <div className="row me-5">
                        <div className="col">
                            <button className="px-3 py-2 btn btn-outline-info d-block">Filter</button>
                        </div>
                        <div className="col">
                            <select className="d-block px-2 py-1 form-select form-select-lg mb-3">
                                {
                                    oy.map(mons=>(
                                        <option value={mons}>{mons}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div className="col">
                            <select className="d-block px-2 py-1 form-select form-select-lg mb-3">
                                {
                                    yil.map(year=>(
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
                            <button className={view ? "px-2 py-1" : "px-2 py-1 viewActive"}  onClick={() => setView(false)}>
                                <i className="bi bi-grid-fill"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Ishchilarning bajarilgan ishlari soni */}
            <div className="xodimlar">
                <div className="xodim">
                    <div key={Math.random() * 1000} className='umumiyXisobot'>
                        <div className="workCount">9</div>
                        <h1>С.Махмудов</h1>
                    </div>
                    <div key={Math.random() * 1000} className='umumiyXisobot'>
                        <div className="workCount">9</div>
                        <h1>С.Махмудов</h1>
                    </div>
                    <div key={Math.random() * 1000} className='umumiyXisobot'>
                        <div className="workCount">9</div>
                        <h1>С.Махмудов</h1>
                    </div>
                    <div key={Math.random() * 1000} className='umumiyXisobot'>
                        <div className="workCount">9</div>
                        <h1>С.Махмудов</h1>
                    </div>
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