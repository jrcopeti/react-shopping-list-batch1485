import Title from "./components/Title";
import Form from "./components/Form";
import List from "./components/List";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";

function App() {
  function getItemsFromLocalStorage() {
    const savedItems = localStorage.getItem("shoppingListItems");
    return savedItems ? JSON.parse(savedItems) : [];
  }
  const [items, setItems] = useState(getItemsFromLocalStorage());

  useEffect(() => {
    localStorage.setItem("shoppingListItems", JSON.stringify(items));
  }, [items]);

  function handleAddItems(newItem) {
    setItems([...items, newItem]);
  }

  function handleToggleItems(id) {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, bought: !item.bought } : item
    );
    setItems(updatedItems);
  }

  function handleDeleteItems(id) {
    const deleteItem = items.filter((item) => item.id !== id);
    setItems(deleteItem);
  }

  return (
    <div>
      <Title />
      <Form handleAddItems={handleAddItems} />
      <List
        items={items}
        handleToggleItems={handleToggleItems}
        handleDeleteItems={handleDeleteItems}
      />
      <Footer items={items} />
    </div>
  );
}

export default App;
