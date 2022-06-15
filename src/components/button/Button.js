import "./Button.css";
const Button = (props) => {
  const { name = "", ButtonFunction, ButtonStile} = props;
  return (
    <>
        <button
          onClick={() => ButtonFunction()}
          className={`btn button-bg shadow-sm  ${ButtonStile}`}
        >
          {name}
        </button>
    </>
  );
};

export default Button;
