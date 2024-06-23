import { useItemsContext } from "../useItemsContext";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const ItemDetails = ({ item }) => {
  const { dispatch } = useItemsContext();

  const handleClick = async () => {
    const response = await fetch("/api/items/" + item._id, {
      method: "DELETE",
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_ITEM", payload: json });
    }
  };

  return (
    <div className="item-details">
      <h4>{item.title}</h4>
      <p>
        <strong>Number: </strong>
        {item.number}
      </p>
      <p>
        {formatDistanceToNow(new Date(item.createdAt), { addSuffix: true })}
      </p>
      <span className="material-symbols-outlined" onClick={handleClick}>
        delete
      </span>
    </div>
  );
};

export default ItemDetails;
