import Button from "../../components/button/Button";
import "./IshlarRoyhati.css";
const IshKategoriyaQoshish = () => {
  return (
    <>
      <div className="ishlar-royhati w-100 px-4 py-2 position-relative">
        <h2 className="title">Ишлар рўйхати</h2>
        <div className="my-3 position-relative d-flex justify-content-end me-5">
          <Button name={"Категория қўшиш"} ButtonStyle="oq-button" />
        </div>
        <div className="w-100 my-3 bg-katagoriya px-3 pt-5">
          <form className="bg-form-katagoroya w-100 p-5">
            <div className="d-flex align-items-center">
              <h4 className="title">Категория номи:</h4>
              <input
                type="text"
                className="form-input-ish-katagoriya w-75 ms-1 ps-1 form-control"
              />
            </div>
            <div className="d-flex mt-4 justify-content-center">
              <Button name={"Қўшиш"} ButtonStile="oq-button" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default IshKategoriyaQoshish;
