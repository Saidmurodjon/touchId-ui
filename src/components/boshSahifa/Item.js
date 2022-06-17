const Item = (props) => {

    return (
        <>
            <div className="col-6">
                <div className="card m-2 px-4 pt-3 pb-2">
                    <div className="up d-flex justify-content-between">
                        <span className="alert alert-warning px-1">{props.date}</span>
                        <h5 className="text-secondary">№ {props.aktRaqam}</h5>
                    </div>
                    <table>
                        <tbody>
                            <tr>
                                <td><p className="text-secondary">Бажарувчи:</p></td>
                                <td><h6>{props.bajaruvchi}</h6></td>
                            </tr>
                            <tr>
                                <td  valign="top"><p className="text-secondary">Буюртмачи:</p></td>
                                <td>
                                    <h6 className="pb-0 buyur">{props.buyurtmachi}</h6>
                                    <p className="text-secondary"><span>{props.xona}</span> хона {props.lavozim}</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="ikonka d-flex justify-content-end">
                        <span className="text-secondary"><i className="bi bi-card-checklist"></i> {props.ishlar} ишлар</span>
                        <span className="ms-2 text-secondary"><i className="bi bi-images"></i> {props.rasmlar} расм</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Item;