import React, { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItem] = useState([]);

  function handleChange(event) {
    const { value } = event.target;

    setInputText(value);
  }

  function handleClick() {
    setItem(prevItems => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button>
          <span onClick={handleClick}>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map(item => (
            <li>{item}</li>
          ))}
          ;
        </ul>
      </div>
    </div>
  );
}

export default App;
