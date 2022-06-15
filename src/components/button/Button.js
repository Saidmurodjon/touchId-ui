import "./Button.css";
const Button = (props) => {
  const { name = "", ButtonFunction } = props;
  return (
    <>
      <div className="my-3 text-secondary position-relative d-flex justify-content-end">
        <button
          onClick={() => ButtonFunction()}
          className="btn button-bg shadow-sm mb-5 bg-body rounded"
        >
          {name}
        </button>
      </div>
    </>
  );
};

export default Button;
