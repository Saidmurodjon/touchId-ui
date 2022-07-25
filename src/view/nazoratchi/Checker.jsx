import React, {useState, useEffect} from 'react'
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';
import config from '../../config.json'
import More1 from '../../components/boshSahifa/More1'
import './Nazoratchi.css'

function Checker() {
    const navigate = useNavigate();
    // const date = new Date().toISOString().slice(0, 8);
    const data = useParams().data;
    const [login, setLogin] = useState(false)
    const [baza, setBaza] = useState([])
    const [check, setCheck] = useState(false);
    let curData = data.slice(0,10)
    let dataPP = data.slice(8,10), newData=dataPP*1+1
    let fData = data.slice(0,8)
    let lastData = fData+newData


    const [next, setNext] = useState({
        from:curData,
        to:lastData,
        quantity:1,
        step: 10
    });
    const [pass, setPass] = useState({
        password: "",
    });
    const changeHandler = (e) => {
        setPass({ [e.target.name]: e.target.value });
        setCheck(false);
    };

    
    const Check = async () => {
        try {
        const res = await axios.post(`${config.SERVER_URL}login`, pass);
        if (res.status === 200) {
            sessionStorage.setItem(`jwt-token`, res.data.jwt_token);
            localStorage.setItem("user", JSON.stringify(res.data.message));
            setLogin(true)
        }
        } catch (err) {
            console.log(err);
            if (err.response.status === 402) {
                setCheck(true);
            }
        }
    };

    const tashkilot_id = data.slice(11)
    const TOKEN = {
        headers: {
            "jwt-token": sessionStorage.getItem("jwt-token"),
            "tashkilot_id": tashkilot_id,
        },
    };

    useEffect(() => {
        const Baza = async () => {
        try {
            const res = await axios.post(
                `${config.SERVER_URL}report/next`,
                next,
                TOKEN
            );
            if (res.status === 200) {
                setBaza([...baza, ...res.data]);
                setNext({ ...next, quantity: next.quantity + 1 });
            }
        } catch (err) {
            if (err.response.status === 401) {
                navigate("/");
            }
            console.log(err);
        }
        };
        Baza();
    }, [next]);


    const month = [
        "Январь",
        "Февраль",
        "Март",
        "Апрель",
        "Май",
        "Июнь",
        "Июль",
        "Август",
        "Сентябрь",
        "Октябрь",
        "Ноябрь",
        "Декабрь",
    ];
    
    const Submit = (e) => {
        e.preventDefault();
    };
    
    return(
        <div>
            {login ? (
                <div>
                    <div className='bg-light p-3'>
                        {
                            baza.map(work=>(
                                <More1
                                    key={work._id}
                                    oy={month[work.date.slice(5, 7) * 1 - 1]}
                                    elem={work}
                                />
                            ))
                        }
                    </div>
                </div>
            ) : (
                <div className='bg-light contWay'>
                    <form
                        className="align-items-center nazForma mx-auto bg-white"
                        onSubmit={Submit}
                    >
                        
                        <input
                            className="mt-4 ms-5 form-control w-75 px-2 text-secondary"
                            type="password"
                            name="password"
                            placeholder="Parol"
                            onChange={changeHandler}
                        />
                        <button className='btn btn-outline-secondary px-3 ms-5 mt-2' onClick={Check}>Check</button>
                    </form>
                </div>
            )}
        </div>
    )
}


export default Checker