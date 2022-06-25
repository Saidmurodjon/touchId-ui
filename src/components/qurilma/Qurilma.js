import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import config from '../../config.json'


const Qurilma = (props) => {
    const { elem={}, up, del } = props;
    const [dev, setDev] = useState([])
    useEffect(() => {
        axios
            .get(`${config.SERVER_URL}device/elem/${elem._id}`)
            .then((res) => {
            res.data && setDev(res.data);
            // setLoading(false);
        })
            .catch((error) => console.log(error));
    }, []);
    console.log(dev);
    return (
        <div>
            <div className="qurilmaNom d-flex border align-items-center justify-content-between py-2 px-3">
                <h4>{elem.name}</h4>
                <Link to={`/qurilmakategoriya/${elem._id}`}>
                    <i className='bi bi-plus d-flex align-items-center justify-content-center'></i>
                </Link>
            </div>
            <div className="qurilmaIn border px-2">
                {
                    dev.length > 0? dev.map((item, index)=>(
                        <div className='border-bottom mt-1 px-2 d-flex justify-content-between' key={index}>
                            <h5>{index+1} {item.name}</h5>
                            <div className="btn">
                                <button className='border-0 bg-white' onClick={()=>up(item)}>
                                    <Link to={`/qurilmayangilash/${item._id}`}>
                                        <i className="text-secondary bi bi-pencil-square p-2" ></i>
                                    </Link>
                                </button>
                                <i onClick={()=>del(item)} className="bi bi-trash3 trash-bg" ></i>
                            </div>
                        </div>
                    )) : false
                }
            </div>
        </div>
    );
}

export default Qurilma;