import './Button.css'
const Button = (props) => {
    const{name="",Button}=props
    return (
        <>
            <div className="my-3 text-secondary position-relative d-flex justify-content-end">
                <button className="btn button-bg shadow-sm mb-5 bg-body rounded">{name}</button>
            </div>
        </>
    );
}

export default Button;