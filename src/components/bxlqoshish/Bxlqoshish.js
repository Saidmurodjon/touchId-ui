import './Bxlqoshish.css'
const Bxlqoshish = (props) => {
    const { name = "", BxlEdit,BxlDelet } = props;
    return (
        <>
            <div className="border my-3 w-100 border-2 py-2 px-4 d-flex align-items-center justify-content-between bxl-radius">
                <span className="fs-4">{name}</span>
                <span className="d-flex ms-4">
                    <i className="bi bi-pencil-square h4 me-2 mt-2 text-secondary" onClick={()=>BxlEdit()}></i>
                    <i className="bi bi-trash3 trash-bg h4 mt-2" onClick={()=>BxlDelet()}></i>
                </span>
            </div>
        </>
    );
}

export default Bxlqoshish;