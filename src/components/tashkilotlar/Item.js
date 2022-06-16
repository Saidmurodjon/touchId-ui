const Item = (props) => {
    console.log ( `react snippet works!` );

    return (
        <>
            <div className="col-6">
                <div className="card m-2 py-3 px-4">
                    <div className="yuqori d-flex justify-content-between">
                        <h5 className="text-secondary">№1</h5>
                        <div className="btn">
                            <i className="bi bi-pencil-square p-2"></i>
                            <i className="bi bi-trash3 trash-bg"></i>
                        </div>
                    </div>
                    <div className="jadval">
                        <table>
                            <tbody>
                                <tr>
                                    <td><p className="text-secondary">Ташкилот номи:</p></td>
                                    <td><h6>Фарғона вилояти ҳокимлиги</h6></td>
                                </tr>
                                <tr>
                                    <td><p className="text-secondary">Администратор:</p></td>
                                    <td><h6>Абдурахмонов Солижон Боҳодиржон ўғли</h6></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="logpassword d-flex justify-content-between ms-5 ps-5 mt-3">
                        <p className="text-secondary">Логин: +998972159889</p>
                        <p className="text-secondary">Пароль: 458745</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Item;