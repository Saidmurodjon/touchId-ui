import "./service.css";
function BIItem(props) {
  const { _id, name, cost,} = props;
  return (
    <div
      className=" m-2  border-bottom p-2  cursor"
      onClick={() => AddBasket({ _id, name, cost })}
      id={_id}
    >
      <h5 className=" d-inline mt-3">
        {name} narxi : {cost} so'm
      </h5>
    </div>
  );
}

export { BIItem };
