import { useState } from "react";
import Form from "./components/Form";
import Logo from "./components/Logo";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   {id:2, description:"Charger",quantity:2,packed: true}
// ]

function App() {
  const [items, setItems] = useState([]);
  
    function handleAddItems(item) {
        setItems(i=> i.concat(item))
    }
  
  function handleButton(id) {
    setItems((previtems) => {
      const updatedItems = [...previtems];
      const index = updatedItems.findIndex((item) => item.id === id);
      updatedItems.splice(index, 1);
      return updatedItems;
       })
  }

  function handleToggle(id) {
    setItems(items => items.map((i) => {
      return i.id === id ? {...i,packed: !i.packed} : i
    }))
  }

  function handleClearlist() {
    setItems([]);
  }
  
  return (
    <div className="app">
  <Logo />
    <Form handleForm={handleAddItems} />
    <PackingList initialItems={items} handleButton={handleButton} handleToggle={handleToggle} handleClearlist={handleClearlist} />
      <Stats items={items} />
    </div>)
}

export default App;
