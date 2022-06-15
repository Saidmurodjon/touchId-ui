const Item = (props) => {
    console.log ( `react snippet works!` );

    return (
        <>
            <div className="col-6">
                <div className="card m-2 p-4">
                    <div className="up d-flex justify-content-between">
                        <span className="alert alert-warning px-1">{props.date}</span>
                        <h5>№ {props.aktRaqam}</h5>
                    </div>
                    <table>
                        <tbody>
                            <tr>
                                <td valign="top">Бажарувчи:</td>
                                <td><h5>{props.bajaruvchi}</h5></td>
                            </tr>
                            <tr>
                                <td valign="top">Буюртмачи:</td>
                                <td>
                                    <h5 className="pb-0">{props.buyurtmachi}</h5>
                                    <p><span>{props.xona}</span> хона {props.lavozim}</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="ikonka mt-2 d-flex justify-content-end">
                        <span><i className="bi bi-card-checklist"></i> {props.ishlar} ишлар</span>
                        <span className="ms-2"><i className="bi bi-images"></i> {props.rasmlar} расм</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Item;