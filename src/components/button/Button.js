import "./Button.css";
const Button = (props) => {
  const { name = "", ButtonFunction, ButtonStyle } = props;
  return (
    <>
      <button
        onClick={() => ButtonFunction()}
        className={`btn button-bg shadow-sm d-flex align-items-center justify-content-center ${ButtonStyle}`}
      >{name}</button>
    </>
  );
};

export default Button;
