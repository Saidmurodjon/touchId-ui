import { useState, useEffect } from "react";
import './DateInput.css'
import 'react-datepicker/dist/react-datepicker.css'
const DataInput = (props) => {

    const date = new Date().toISOString().slice(0, 10)

    const [startDate, setStartDate] = useState({
        sana: date
    });

    useEffect(() => {
        localStorage.setItem("sartDate", JSON.stringify(startDate));
    });

    const changeHandler = (e) => {
        setStartDate({ ...startDate, [e.target.name]: e.target.value });
    }
    console.log(startDate);
    return (
        <>
            <form action="">
                <input
                    className="date-input pointer text-secondary" 
                    type="date"
                    name="sana"
                    value={startDate.sana}
                    onChange={changeHandler}
                />
            </form>
        </>
    );
};

export default DataInput;