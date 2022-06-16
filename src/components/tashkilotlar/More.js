const More = (props) => {
    console.log ( `react snippet works!` );

    return (
        <>
            <div className="col-12">
                <div className="bg-white align-items-center more m-2 p-4 d-flex justify-content-between">
                    <h1 className="text-secondary">№1</h1>
                    <div className="info">
                        <p className="text-secondary">Ташкилот номи:</p>
                        <h5>Фарғона вилояти ҳокимлиги</h5>
                        <p className="text-secondary">Администратор:</p>
                        <h5>Абдурахмонов Солижон Боҳодиржон ўғли</h5>
                    </div>
                    <div className="logparol">
                        <p className="text-secondary">Логин: +998972159889</p>
                        <p className="text-secondary">Пароль: 458745</p>
                    </div>
                    <div className="btn align-self-start">
                        <i className="bi bi-pencil-square p-2"></i>
                        <i className="bi bi-trash3 trash-bg"></i>
                    </div>
                </div>
            </div>
        </>
    );
}

export default More;