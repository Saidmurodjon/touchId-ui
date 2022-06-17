import Button from "../../components/button/Button";
// import { useEffect, useState } from "react"
// import axios from 'axios';
const BolimlarEdit = (elem) => {
    // console.log(elem);
    return (
        <>
            <div className="w-100 px-4 py-2 position-relative pe-5">
                <h2 className="title">Бўлимлар қўшиш</h2>
                <div className="my-3 position-relative d-flex justify-content-end me-5">
                    <Button name={"Бўлим қўшиш"} ButtonStyle="oq-button" />
                </div>
                <div className="w-100 my-3 bg-bolim px-3 pt-5">
                    <form className="bg-form-bolim w-100 p-5">
                        <div className="d-flex align-items-center">
                            <h4 className="title">Бўлим номи:</h4>
                            <input type="text"
                            className="form-input-bolim w-75 ms-1 ps-1 form-control"
                            value={elem.name}
                            />
                        </div>
                        <div className="d-flex mt-4 justify-content-center">
                            <Button name={"Ўзгартириш"} ButtonStyle="oq-button" />
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default BolimlarEdit;