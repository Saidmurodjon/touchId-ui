import Button from "../button/Button";
import React, { useEffect, useState } from "react";
import '../filter/Filter.css'
import DataInput from "../dataInput/DataInput";
import DateInput2 from "../dateInput2/DateInput2";
function Filter2(props) {
    const { FilterFunction } = props;
    return (
        <>
            <div className="d-flex">
                <button
                    className="select-style ms-2"
                    name="Filter"
                    onClick={() => FilterFunction()}
                >
                    Filter
                </button>
                <form action="" className="d-flex" >
                    <DataInput />
                    <DateInput2 />
                </form>
            </div>
        </>
    );
}
export default Filter2;
