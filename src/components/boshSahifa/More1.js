const More = (props) => {
  const { elem = {}, oy ,text=[]} = props;
  const date = new Date(elem.date)
  return (
    <>
      <div className="col-12 col-md-10 mx-auto">
        <div className="card m-2 p-4">
          <h5 className="w-75 text-center mx-auto text-secondary nazElek">
            Электрон ҳокимиятни ривожлантириш маркази ҳодими томонидан {text?text[0].t1:"Empty"} ҳокимлиги ижтимоий бўлими, {elem.cilientKabinet} хонада
            қуйидаги ишлар амалга оширилди
          </h5>
          <div className="upInfo d-flex justify-content-between mt-3 border-bottom border-3 border-dark">
            <span className="text-secondary nazVaqt">
              Бажарилган вақт:{" "}
              <p className="alert alert-warning px-1">
              {date.getFullYear()} йил {date.getDate()+1} {oy} соат{" "}
              {date.toISOString().slice(11,16)}
              </p>
            </span>
            <span>
              <span className="text-secondary nazVaqt">АКТ РАҚАМИ </span>{" "}
              <p className="nazVaqt text-end">№<b>{elem.countYear}</b></p>
            </span>
          </div>

          {/* Ishlar */}
          <div className="works mt-4 text-secondary">
            {elem.services.map((item, index) => (
              <h5 key={index}>
                {index + 1} - {item.name}
              </h5>
            ))}
          </div>
          {/* Rasm */}
          <p className="text-end text-secondary">
            <i className="bi bi-images"></i> 0 расм
          </p>

          {/* getset */}
          <div className="getSet d-flex justify-content-between nazWho">
            <div className="get w-50 text-center">
              <p className="text-secondary ">
                Электрон ҳокимиятни ривожлантириш маркази номидан бажарувчи:
              </p>
              <h6>{elem.userFish}</h6>
              <h6>Тасдиқлайман</h6>
            </div>
            <div className="set w-50 text-center">
              <p className="text-secondary">
                Вилоят ҳокимлиги номидан буюртмачи: <br />
                {elem.cilientLavozim}
              </p>
              <h6>{elem.cilientFish}</h6>
              <h6>Тасдиқлайман</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default More;
