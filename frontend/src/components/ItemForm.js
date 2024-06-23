import { useState } from "react";

const ItemForm = () => {
  const [title, setTitle] = useState("");
  const [number, setNumber] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const item = { title, number };

    const response = await fetch("/api/items", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setError(null);
      setTitle("");
      setNumber("");
      console.log("new item added:", json);
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a New Item</h3>

      <label>Title:</label>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />

      <label>Number:</label>
      <input
        type="number"
        onChange={(e) => setNumber(e.target.value)}
        value={number}
      />

      <button>Add Item</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default ItemForm;
