const More = (props) => {
  const { elem = {}, oy } = props;
  const date = new Date(elem.fullFData);
  return (
    <>
      <div key={elem._id} className="col-12">
        <div className="card m-2 p-4">
          <h5 className="w-75 text-center mx-auto text-secondary">
            Электрон ҳокимиятни ривожлантириш маркази ҳодими томонидан Фарғона
            вилоят ҳокимлиги ижтимоий бўлими, {elem.cilientKabinet}-хонада
            қуйидаги ишлар амалга оширилди
          </h5>
          <div className="upInfo d-flex pb-2 justify-content-between mt-3 border-bottom border-3 border-dark">
            <span className="text-secondary">
              Бажарилган вақт:{" "}
              <p className="alert alert-warning d-inline px-1">
                {date.getFullYear()} йил {date.getDay()} {oy} соат{" "}
                {date.getHours() + ":" + date.getMinutes()}
              </p>
            </span>
            <span>
              <span className="text-secondary">АКТ РАҚАМИ №</span>{" "}
              <b>{elem.countYear}</b>
            </span>
          </div>

          {/* Ishlar */}
          <div className="works mt-4 text-secondary">
            {elem.services.map((item, index) => (
              <h5 key={item._id}>
                {index + 1} - {item.category}
              </h5>
            ))}
          </div>
          {/* Rasm */}
          <p className="text-end text-secondary">
            <i className="bi bi-images"></i> 0 расм
          </p>

          {/* getset */}
          <div className="getSet d-flex justify-content-between">
            <div className="get text-center">
              <p className="text-secondary">
                Электрон ҳокимиятни ривожлантириш маркази номидан бажарувчи:
              </p>
              <h5>{elem.userFish}</h5>
              <h5>Тасдиқлайман</h5>
            </div>
            <div className="set w-50 text-center">
              <p className="text-secondary">
                Вилоят ҳокимлиги номидан буюртмачи: <br />
                {elem.cilientLavozim}
              </p>
              <h5>{elem.ciientFish}</h5>
              <h5>Тасдиқлайман</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default More;
