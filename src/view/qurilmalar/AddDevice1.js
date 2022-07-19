import React, {useState} from "react";
import "./Qurilma.css"
import Navbar from '../../components/navbar/Navbar';



function AddService(){
    
    const [info, setInfo] = useState({})
    const [inputFields, setInputFields] = useState([]);
    const [serviceList, setServiceList] = useState([{xususiyat:''}])
    const [last, setLast] = useState([])
    const handleServiceAdd=()=>{
        setServiceList([...serviceList, {xususiyat: ""}])
    }
    
    const handleServiceRemove=(index)=>{
        const list = [...serviceList]
        list.splice(index, 1)
        setServiceList(list)
    }

    const handleServiceChange = (e, index)=>{
        const {name, value} = e.target;
        const list = [...serviceList];
        list[index][name] = value;
        setServiceList(list)
    }
    
    const changeHandler1 = (e) => {
        setInfo({ ...info, [e.target.name]: e.target.value });
    };

    const addFields = (e) => {
        e.preventDefault()
        setInputFields([...inputFields, serviceList]);
            if(Object.keys(info).length!==0){
            setLast([...last, info])
        }
    };
    
    const removeFields = (index) => {
        let data = [...inputFields];
        data.splice(index, 1);
        setInputFields(data);
    };
    return(
        <div>
            <div className="sticky-top">
                <Navbar />
            </div>
            <h1>Курилма қўшиш</h1>
            <div className="AppDevice bg-light  mt-5 py-5 px-3">
                <div className="devcontent bg-white py-5 px-5">
                <div className="d-flex pt-3">
                    <h3 className="text-dark">Қурилма номи:</h3>
                    <input
                    name="name"
                    type="text"
                    className="form-control form-control-lg ms-2 ps-3 deviceName bg-light"
                    />
                </div>
                    <div className="form-field mt-3">
                        <label htmlFor="service" className="me-3 mb-3">Параметрлари:</label>
                        {/* Xususiyatlar */}
                        {
                            serviceList.map((singleService, index)=>(
                                <span key={index} className="services">
                                        <input type="text" name="xususiyat" id="service" onChange={(e)=>handleServiceChange(e, index)} value={singleService.xususiyat} />
                                        {serviceList.length > 1 && (
                                            <button className="remove-btn" onClick={()=>handleServiceRemove(index)}>
                                                -
                                            </button>
                                        )} 
                                        {serviceList.length-1 === index && serviceList.length < 8 &&
                                        (<button className="add-btn" onClick={handleServiceAdd}>
                                            +
                                        </button>)
                                        }
                                </span>
                            ))
                        }
                        {/* Itemlar */}
                        <div className="items">
                            {
                                inputFields.map((input, index)=>(
                                    <div key={index} className="mt-2">
                                        {
                                            input.map((item,index)=>(
                                                <input key={index} className="me-3" type="text" name={item.xususiyat} onChange={changeHandler1} />
                                            ))
                                        }
                                        {input.length > 1 && (
                                            <button onClick={()=>removeFields(index)}>
                                                -
                                            </button>
                                        )} 
                                    </div>
                                ))
                            }
                            <button onClick={addFields}>+</button>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    )
        
}


export default AddService