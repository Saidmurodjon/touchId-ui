const More = (props) => {
    console.log ( `react snippet works!` );

    return (
        <>
            <div className="col-12">
                <div className="card m-2 p-4">
                    <h5 className="w-75 text-center mx-auto">
                        Электрон ҳокимиятни ривожлантириш маркази ҳодими томонидан Фарғона вилоят ҳокимлиги ижтимоий бўлими, {props.xona}-хонада қуйидаги ишлар амалга оширилди
                    </h5>
                    <div className="upInfo d-flex pb-2 justify-content-between mt-3 border-bottom border-3 border-dark">
                        <span>
                            Бажарилган вақт: <p className="alert alert-warning d-inline px-1">2022 йил 5-март соат 16:03</p>
                        </span>
                        <span>
                            АКТ РАҚАМИ № {props.aktRaqam}
                        </span>
                    </div>

                    {/* Ishlar */}
                    <div className="works mt-4">
                        {
                            props.ishlar.map((item, index)=>(
                                <h5 key={index} >{index+1} - {item.category}</h5>
                            ))
                        }
                    </div>
                    {/* Rasm */}
                    <p className="text-end">
                        <i className="bi bi-images"></i> {props.rasmlar} расм
                    </p>

                    {/* getset */}
                    <div className="getSet d-flex justify-content-between">
                        <div className="get text-center">
                            <p>
                                Электрон ҳокимиятни ривожлантириш маркази номидан бажарувчи:
                            </p>
                            <h5>
                                {props.bajaruvchi}
                            </h5>
                            <h5>Тасдиқлайман</h5>
                        </div>
                        <div className="set w-50 text-center">
                            <p>
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