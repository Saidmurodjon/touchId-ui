const Xodimlar = (props) => {

    return (
        <>
            <div key={Math.random() * 1000} className='umumiyXisobot'>
                <div className="workCount">{props.count}</div>
                <h1>{props.fish}</h1>
            </div>
        </>
    );
}

export default Xodimlar;