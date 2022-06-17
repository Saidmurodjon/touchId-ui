const More = (props) => {

    return (
        <>
            <div className="col-12">
                <div className="card m-2 p-4">
                    <h5 className="w-75 text-center mx-auto text-secondary">
                        Электрон ҳокимиятни ривожлантириш маркази ҳодими томонидан Фарғона вилоят ҳокимлиги ижтимоий бўлими, {props.xona}-хонада қуйидаги ишлар амалга оширилди
                    </h5>
                    <div className="upInfo d-flex pb-2 justify-content-between mt-3 border-bottom border-3 border-dark">
                        <span className="text-secondary">
                            Бажарилган вақт: <p className="alert alert-warning d-inline px-1">2022 йил 5-март соат 16:03</p>
                        </span>
                        <span>
                            <span className="text-secondary">АКТ РАҚАМИ №</span> <b>{props.aktRaqam}</b>
                        </span>
                    </div>

                    {/* Ishlar */}
                    <div className="works mt-4 text-secondary">
                        {
                            props.ishlar.map((item, index)=>(
                                <h5 key={index} >{index+1} - {item.category}</h5>
                            ))
                        }
                    </div>
                    {/* Rasm */}
                    <p className="text-end text-secondary">
                        <i className="bi bi-images"></i> {props.rasmlar} расм
                    </p>

                    {/* getset */}
                    <div className="getSet d-flex justify-content-between">
                        <div className="get text-center">
                            <p className="text-secondary">
                                Электрон ҳокимиятни ривожлантириш маркази номидан бажарувчи:
                            </p>
                            <h5>
                                {props.bajaruvchi}
                            </h5>
                            <h5>Тасдиқлайман</h5>
                        </div>
                        <div className="set w-50 text-center">
                            <p className="text-secondary">
                                Вилоят ҳокимлиги номидан буюртмачи: <br />
                                {props.lavozim}
                            </p>
                            <h5>
                                {props.buyurtmachi}
                            </h5>
                            <h5>Тасдиқлайман</h5>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default More;