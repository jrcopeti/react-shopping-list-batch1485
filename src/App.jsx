import Title from "./components/Title";
import Form from "./components/Form";
import List from "./components/List";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";

function App() {
  const [items, setItems] = useState(getItemsFromLocalStorage());

  function getItemsFromLocalStorage() {
    const savedItems = localStorage.getItem("shoppingListItems");
    return savedItems ? JSON.parse(savedItems) : [];
  }

  useEffect(() => {
    localStorage.setItem("shoppingListItems", JSON.stringify(items));
  }, [items]);

  function handleAddItems(newItem) {
    setItems((items) => [...items, newItem]);
  }

  function handleToggleItems(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, bought: !item.bought } : item
      )
    );
  }

  function handleDeleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  return (
    // Title (Header)
    // Form
    // List
    // Footer (Stats)
    <div>
      <Title />
      <Form onAddItems={handleAddItems} />
      <List
        items={items}
        onToggleItems={handleToggleItems}
        onDeleteItems={handleDeleteItems}
      />
      <Footer items={items} />
    </div>
  );
}

export default App;
