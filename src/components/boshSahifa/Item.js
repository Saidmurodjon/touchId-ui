const Item = (props) => {
  const { elem = {} } = props;
  const date = new Date(elem.date).toISOString().slice(11,16)
  return (
    <>
      <div className="col-6">
        <div className="card m-2 px-4 pt-3 pb-2">
          <div className="up d-flex justify-content-between">
            <span className="alert alert-warning px-1">
              {date}
            </span>
            <h5 className="text-secondary">№ {elem.countYear}</h5>
          </div>
          <table>
            <tbody>
              <tr>
                <td>
                  <p className="text-secondary">Бажарувчи:</p>
                </td>
                <td>
                  <h6>{elem.userFish}</h6>
                </td>
              </tr>
              <tr>
                <td valign="top">
                  <p className="text-secondary">Буюртмачи:</p>
                </td>
                <td>
                  <h6 className="pb-0 buyur">{elem.cilientFish}</h6>
                  <p className="text-secondary">
                    <span>{elem.cilientKabinet}</span> хона{" "}
                    {elem.cilientLavozim}
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="ikonka d-flex justify-content-end">
            <span className="text-secondary">
              <i className="bi bi-card-checklist"></i> {elem.services.length}{" "}
              ишлар
            </span>
            <span className="ms-2 text-secondary">
              <i className="bi bi-images"></i> 0 расм
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
