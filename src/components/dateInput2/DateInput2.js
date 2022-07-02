import { useState, useEffect } from "react";
import '../dataInput/DateInput.css'
import 'react-datepicker/dist/react-datepicker.css'
const DateInput2 = (props) => {

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
            <input
                className="date-input pointer text-secondary ms-2"
                type="date"
                name="sana"
                value={startDate.sana}
                onChange={changeHandler}
            />
        </>
    );
};

export default DateInput2;