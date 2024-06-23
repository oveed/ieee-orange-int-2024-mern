const ItemDetails = ({ item }) => {
  return (
    <div className="item-details">
      <h4>{item.title}</h4>
      <p>
        <strong>Number: </strong>
        {item.number}
      </p>
      <p>{item.createdAt}</p>
    </div>
  );
};

export default ItemDetails;
