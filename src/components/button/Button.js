import "./Button.css";
const Button = (props) => {
  const { name = "", ButtonFunction, ButtonStyle } = props;
  return (
    <>
      <button
        onClick={() => ButtonFunction()}
        className={`btn button-bg shadow-sm  ${ButtonStyle}`}
      >{name}</button>
    </>
  );
};

export default Button;
