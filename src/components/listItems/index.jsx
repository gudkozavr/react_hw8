import { useEffect, useState } from "react";
import React from "react";

export default function ListItems() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");
  function addItem(event) {
    event.preventDefault();

    inputValue && setItems([...items, inputValue]);
    setInputValue("");
  }

  useEffect(() => {
    console.log("List of Item has been updated!");
  }, []);

  return (
    <div>
      <form onSubmit={addItem}>
        <input
          type="text"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
        <input type="submit" value="add" />
      </form>
      <ul>
        {items &&
          items.map((item, idx) => {
            return <li key={idx}>{item}</li>;
          })}
      </ul>
    </div>
  );
}
