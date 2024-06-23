import { useEffect, useState } from "react";

import ItemDetails from "../components/ItemDetails";
import ItemForm from "../components/ItemForm";

const Home = () => {
  const [items, setItems] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch("/api/items");

      const json = await response.json();

      if (response.ok) {
        setItems(json);
      }
    };

    fetchItems();
  }, []);

  return (
    <div className="home">
      <div className="items">
        {items &&
          items.map((item) => <ItemDetails item={item} key={item._id} />)}
      </div>
      <ItemForm />
    </div>
  );
};

export default Home;
