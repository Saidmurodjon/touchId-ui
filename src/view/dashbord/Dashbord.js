
import Button from '../../components/button/Button';
import Navbar from '../../components/navbar/Navbar';
import './Dashbord.css';
const Dashbord = () => {

    return (
        <>
            <Navbar text="Дашборд" />
            <div className="w-100 px-4 py-2 position-relative">
                <div className="d-flex mb-3">
                    <Button name="Хисобга олинган" ButtonStyle="oq-button m-2" />
                    <Button name="Хисобга олинмаган" ButtonStyle="oq-button m-2" />
                </div>
                <div className="dashbord-content w-100">
                    <div className="mx-auto card-w">
                        <div className="row px-5 py-4 g-2">
                            <div className="col">
                                <div className="card-style text-center">
                                    <h5 className="card-title px-3 mt-2">
                                        Жами компъютерлар сони
                                    </h5>
                                    <h5 className="card-body">
                                        124
                                    </h5>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card-style text-center">
                                    <h5 className="card-title px-3 mt-2">
                                        Жами принтерлар сони
                                    </h5>
                                    <h5 className="card-body">
                                        124
                                    </h5>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card-style text-center">
                                    <h5 className="card-title px-3 mt-2">
                                        Жами сканерлар сони
                                    </h5>
                                    <h5 className="card-body">
                                        124
                                    </h5>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card-style text-center">
                                    <h5 className="card-title px-3 mt-2">
                                        Жами телевизорлар сони
                                    </h5>
                                    <h5 className="card-body">
                                        124
                                    </h5>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card-style text-center">
                                    <h5 className="card-title px-5 mt-2">
                                        Бошқа қурилмалар сони
                                    </h5>
                                    <h5 className="card-body">
                                        124
                                    </h5>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card-style text-center">
                                    <h5 className="card-title px-5 mt-2">
                                        Бошқа қурилмалар сони
                                    </h5>
                                    <h5 className="card-body">
                                        124
                                    </h5>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card-style text-center">
                                    <h5 className="card-title px-5 mt-2">
                                        Бошқа қурилмалар сони
                                    </h5>
                                    <h5 className="card-body">
                                        124
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dashbord-table mt-2">
                        <h6 className="ms-4 my-3">
                            Жами <span>1</span>
                        </h6>
                        <div className="d-flex px-3">
                            <table className="table table-bordered text-center table-bg">
                                <thead>
                                    <tr>
                                        <th scope="col">№</th>
                                        <th scope="col">Бўлимл</th>
                                        <th scope="col">Хона</th>
                                        <th scope="col">Ф.И.Ш</th>
                                        <th scope="col">Тури</th>
                                        <th scope="col">Монитор</th>
                                        <th scope="col">ўлчами</th>
                                        <th scope="col">инвентар раками</th>
                                        <th scope="col">Хона</th>
                                        <th scope="col">Хона</th>
                                        <th scope="col">Хона</th>
                                        <th scope="col">Хона</th>
                                        <th scope="col">Хона</th>
                                        <th scope="col">Хона</th>
                                        <th scope="col">Хона</th>
                                        <th scope="col">Хона</th>
                                        <th scope="col">Хона</th>
                                        <th scope="col">Хона</th>
                                        <th scope="col">Хона</th>
                                        <th scope="col">Хона</th>
                                        <th scope="col">Хона</th>
                                        <th scope="col">Хона</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td colspan="2">Larry the Bird</td>
                                        <td>@twitter</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Dashbord;